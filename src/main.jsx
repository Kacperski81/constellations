import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Galaxies from './pages/Galaxies';
import GalaxyLayout from './components/GalaxyLayout';
import Info from './pages/Galaxy/Info';
import Map from './pages/Galaxy/Map';
import NasaPod from './pages/Galaxy/NasaPod';
import { MobileMenuProvider } from './contexts/mobileMenuContext';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    
      <Route path="galaxy" element={<GalaxyLayout />}>
        <Route index element={<Info />} />
        <Route path="nasaPod" element={<NasaPod />} />
      </Route>
    <Route path="*" element={<h1>Not found</h1>} />
  </Route>
))

function App() {
  return (
    <MobileMenuProvider>
      <RouterProvider router={router} />
    </MobileMenuProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
