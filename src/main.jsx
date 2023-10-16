import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import for configurate the routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home.jsx';
import Portfolio from './pages/portfolio.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Error from './pages/error.jsx';
import Gallery from './components/Gallery.jsx';

// create the browser router and configure the routes of the app
//using a queue of routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/portafolio",
    children: [
      {
        index: true,
        element: <Portfolio />
      },
      {
        path: "/portafolio/:categoria",
        element: <Gallery/>
      }
    ]
  },
  {
    path: "/biografia",
    element: <About />,
  },
  {
    path: "/contacto",
    element: <Contact/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* injecting the routes to render the pages, using the browserRouter */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
