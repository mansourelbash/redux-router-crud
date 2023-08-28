import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  records : [],
  loading: false,
  error : null
}
// First, create the thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts",async (_,thunkAPI) => {
  const {rejectWithValue} = thunkAPI
  try {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();
    return data;

  } catch (error) {
    return rejectWithValue(error.message);
  }
  
})
export const insertPosts = createAsyncThunk("posts/insertPosts", async (item,thunkAPI)=>{
 
  const {rejectWithValue, getState} = thunkAPI
  const {auth}= getState();
  item.userid = auth.id;
  console.log(auth);
  try {
    const res = await fetch(`http://localhost:5000/posts`,{
      method: 'POST',
      body: JSON.stringify(item),
      headers:{
       "Content-type": "application/json; charset=UTF-8"
      }
    })
    const data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const deletePosts = createAsyncThunk("posts/deletePosts",async (id,thunkAPI) =>{
  const {rejectWithValue} = thunkAPI

  try {
    await fetch(`http://localhost:5000/posts/${id}`,{
      method: 'DELETE'
    })
    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }

})
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchPosts.pending]: (state) =>{
      state.loading = true;
      state.error = null
    },
    [fetchPosts.fulfilled]: (state, action) =>{
      state.records = action.payload;
      state.loading = false;
    },
    [fetchPosts.rejected]: (state, action) =>{
      state.loading = false;
      state.error = action.payload;
    },
    [deletePosts.pending] : (state) =>{
      state.loading = true;
      state.error = null
    },
    [deletePosts.fulfilled] : (state, action) =>{
      state.loading = false;
      state.records = state.records.filter((el)=> el.id !== action.payload)
    },
    [deletePosts.rejected] : (state, action) =>{
      state.loading = false;
      state.error = action.payload;
    },
    [insertPosts.pending] : (state) =>{
      state.loading = true;
      state.error = null
    },
    [insertPosts.fulfilled] : (state, action) =>{
      state.loading = false;
      state.records.push(action.payload)
    },
    [insertPosts.rejected] : (state, action) =>{
      state.loading = false;
      state.error = action.payload;
    },
  },
})

export default postSlice.reducer