import React,{memo} from 'react'
import {
  Table,
} from "react-bootstrap";
import PostItems from './PostItems'
const PostList = ({data, deleteRecords}) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th style={{ width: "70%" }}>Title</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          <PostItems data={data} deleteRecords={deleteRecords}/>
        </tbody>
      </Table>
    </>
  )
}

export default memo(PostList)