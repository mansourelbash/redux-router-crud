import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider} from "react-redux";
import store from './state/index'

import { RootLayout, Add, Edit, Details, Index, ErrorPage } from './pages/importedPages';
import Services from "./pages/Services";
import Lazy from "./pages/Lazy";
import Lazy2 from "./pages/Lazy2";

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children:[
    {index: true, element: <Index />},
    {path:'services',element:<Services />},
    {path:'lazy',element:<Lazy />},
    {path:'lazy2',element:<Lazy2 />},
    {path:'post',element:<Index />},
    {path:'post/add',element:<Add />},
    {path:'post/:id/edit',element:<Edit />},
    {path:'post/:id',element:<Details />,loader: ({params})=>{
      if(isNaN(params.id)){
        throw new Response("Bad Request", {statusText: 'please make sure to insert correct Post ID', status: 400 });
      }
    }},
    {}
]
}])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
