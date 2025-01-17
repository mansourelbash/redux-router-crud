import React from 'react'
import Header from "../components/Header";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import { Outlet } from 'react-router';
const RootLayout = () => {
  return (
    <>
    <Container>
      <Header />
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Outlet />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default RootLayout