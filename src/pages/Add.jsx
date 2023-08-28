import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';
import { insertPosts } from '../state/postSlice';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading'
const Add = () => {
  const [title,setTitle] = useState("")
  const [description,setDesc] = useState("")
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const { loading, error }= useSelector((state) => state.posts);
  const id = Math.random().toString(36).slice(2);
  const formHandler = (e) =>{
    e.preventDefault()
    dispatch(insertPosts({id,title,description})).unwrap().then(()=>{
      setDesc('')
      setTitle('')
      navigate('/')
    })
  }
  return (
    <Form onSubmit={formHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title" onChange={(e)=> setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" onChange={(e)=> setDesc(e.target.value)} />
      </Form.Group>
      <Loading loading={loading} error={error}>
        <Button type="submit" variant="primary" disabled={loading}>Add</Button>
      </Loading>
    </Form>
  );
}

export default Add