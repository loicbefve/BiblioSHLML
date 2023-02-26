import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Layout from './components/Layout'
import './styles/main.css'
import Imprimes from './pages/Imprimes'
import Factums from './pages/Factums'
import FondJohannique from './pages/FondJohannique'
import FondDocumentaire from './pages/FondDocumentaire'
import Manuscrits from './pages/Manuscrits'
import IndexPaysLorrain from './pages/IndexPaysLorrain'
import Contact from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="/imprimes" element={<Imprimes />} />
      <Route path="/factums" element={<Factums />} />
      <Route path="/fonds_johannique" element={<FondJohannique />} />
      <Route path="/fonds_documentaire" element={<FondDocumentaire />} />
      <Route path="/manuscrits" element={<Manuscrits />} />
      <Route path="/index_pays_lorrain" element={<IndexPaysLorrain />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
