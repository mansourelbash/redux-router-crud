import React,{useState} from 'react'
import {
  Button,
  ButtonGroup,
} from "react-bootstrap";
const PostItems = ({data, deleteRecords}) => {
  const deleteHandler = (item) =>{
    if (window.confirm(`are you sure to delete this item ${item.title}`)){
    deleteRecords(item.id)
  }
}
  const records = data.map((el,idx) => (
    <tr key={el.id}>
      <td>#{++idx}</td>
      <td>{el.title}</td>
      <td>{el.description}</td>
      <td>       
        <ButtonGroup aria-label="Basic example">
          <Button variant="success">Edit</Button>
          <Button variant="danger" onClick={() => deleteHandler(el)} >Delete</Button>
        </ButtonGroup>
      </td>
    </tr>))
  return (
    <>
      {records}
    </>
  )
}

export default PostItems