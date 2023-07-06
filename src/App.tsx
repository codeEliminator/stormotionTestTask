import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Nav from "./Components/Navigation/Nav";
import Home from "./Components/Home/Home";
import Game from "./Components/Game/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/game',
        element: <Game />
      }
    ]
  }
])

const App: React.FC = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
