import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx'
import Login from './Pages/LoginAuth/Login.jsx'
import Profile from './Pages/Profile.jsx'
import AddColor from './Pages/Color/AddColor.jsx'
import ViewColor from './Pages/Color/ViewColor.jsx'
import SizeDetails from './Pages/Size/SizeDetails.jsx'
import ViewSize from './Pages/Size/ViewSize.jsx'
import AddCategory from './Pages/Parent_Category/AddCategory.jsx'
import ViewCategory from './Pages/Parent_Category/ViewCategory.jsx'
import AddSubCategory from './Pages/Sub Category/AddSubCategory.jsx'
import ViewSubCategory from './Pages/Sub Category/ViewSubCategory.jsx'
import ProductDetails from './Pages/Product/ProductDetails.jsx'
import ProductItems from './Pages/Product/ProductItems.jsx'
import StoryDetails from './Pages/Story/StoryDetails.jsx'
import StoryView from './Pages/Story/StoryView.jsx'
import Orders from './Pages/Orders/Orders.jsx'
import SliderDetails from './Pages/Slider/SliderDetails.jsx'
import SliderView from './Pages/Slider/SliderView.jsx'

const route=createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/Home",
    element: <Home/>
  },
  {
    path:"/Dashboard",
    element:<Dashboard/>
  },
  {
    path:"/Profile",
    element:<Profile/>
  },
  {
    path:"/Colors/Add-Color",
    element: <AddColor/>
  },
  {
    path:"/Colors/View-Color",
    element:<ViewColor/>
  },
  {
    path:"/Size/Size-Details",
    element:<SizeDetails/>
  },
  {
    path:"/Size/View-Size",
    element:<ViewSize/>
  },
  {
    path:"/ParentCategory/Add-Category",
    element:<AddCategory/>
  },
  {
    path:"/ParentCategory/View-Category",
    element:<ViewCategory/>
  },
  {
    path:"/SubCategory/Add-Sub-Category",
    element:<AddSubCategory/>
  },
  {
    path:"/SubCategory/View-Sub-Category",
    element:<ViewSubCategory/>
  },
  {
    path:"/Product/Product-Details",
    element:<ProductDetails/>
  },
  {
    path:"/Product/Product-Items",
    element:<ProductItems/>
  },
  {
    path:"/Story/Story-Details",
    element:<StoryDetails/>
  },
  {
    path:"/Story/Story-View",
    element:<StoryView/>
  },
  {
    path:"/Orders",
    element:<Orders/>
  },
  {
    path:"/Slider/Slider-Details",
    element:<SliderDetails/>
  },
  {
    path:"/Slider/Slider-View",
    element:<SliderView/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Home /> */}
    <RouterProvider router={route}>

    </RouterProvider>
  </StrictMode>,
)
