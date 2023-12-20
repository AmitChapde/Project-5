import React, { Profiler } from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import { AuthProvider } from "./components/auth";
i
const LazyAbout=React.lazy(()=>import("./components/About"));


function App() {
  return (
    <AuthProvider>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={
        <React.Suspense fallback="Loading...">
          <LazyAbout/>
        </React.Suspense>
      
      }/>
      <Route path="order-summary" element={<OrderSummary/>}/>
      <Route path="Products" element={<Products/>}>
        {/* to render the path at the parent level use index prop */}
        <Route index element={<FeaturedProducts/>}/>
        <Route path="featured" element={<FeaturedProducts/>}/>
        <Route path="new" element={<NewProducts/>}/>
      </Route>
      <Route path="users" element={<Users/>}>
         {/* react will first look for specific route if not found then it will be
      searching for dynamic routes */}
      <Route path=":userId" element={<UserDetails/>}/>  
      <Route path="profile" element={<Profile/>}/>
      <Route path="admin" element={<Admin/>}/>
      </Route>
      <Route path="login" element={<Login/>}/>
      
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
    </AuthProvider>
  );
}

export default App;
