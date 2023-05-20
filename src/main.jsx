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
import Constellations from './pages/Constellations';
import ConstellationLayout from './components/ConstellationLayout';
import Info from './pages/Constellation/Info';
import Map from './pages/Constellation/Map';
import NasaPod from './pages/Constellation/NasaPod';
import { MobileMenuProvider } from './contexts/mobileMenuContext';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    
      <Route path="constellation" element={<ConstellationLayout />}>
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
