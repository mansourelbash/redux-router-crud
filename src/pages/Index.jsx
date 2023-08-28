import React, { useEffect, useCallback } from 'react';
import PostList from '../components/PostList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts , deletePosts} from '../state/postSlice';
import Loading from '../components/Loading'
const Index = () => {
  const { records, loading, error }= useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const deleteRecord = useCallback(
    (id) => {
      dispatch(deletePosts(id))
    },
    [dispatch]
  )

  return <Loading loading={loading} error={error}><PostList data={records} deleteRecords={deleteRecord}/> </Loading>;
};

export default Index;