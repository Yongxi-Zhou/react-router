import  NotFound  from './Pages/NotFound';
import React from 'react';
import { BrowserRouter , Route, Routes, useParams} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Invoices from './Pages/Invoices';
import Post from './Pages/Post'
import Invoice from './Pages/Invoice';
import Form from './Pages/Form';

function App() {
  return (
    <BrowserRouter>
      <div className= 'App'>
        <Header/>
      </div>
      <switch>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/about" element={<About/>} />
          <Route path = "/profile" element={<Profile/>} />
          <Route path = "*" element = {<NotFound />} />
          <Route path = "/invoices" element = {<Invoices/>}>
            <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice</p>
                  </main>
                }
              />
            <Route path = ":invoiceID" element = {<Invoice />} />
          </Route>
          <Route path = "/post/:id" element = {<Post/>} />
          <Route path = '/user/:username' element = {<User/>} />
          <Route path = '/form' element = {<Form/>} />
        </Routes>
      </switch>
    </BrowserRouter>
  );
}

export default App;


const User = () => {
  //Navigate 页面 => url
  //useParam url => 页面
  //点击跳转到新的url，再通过useParam获取url里的参数，:id为参数
  const par = useParams()
  return (
    <div>
      Hello {par.username}
    </div>
  )
}