import './App.css';
import Nav from './components/Nav';
// Browser router is used to make links to route on a browser which is in react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* We can only put route inside routes to route the link of a particular element */}
        <Routes>
          <Route element = {<PrivateComponent/>}>
          <Route path='/' element={<h1>This is home page</h1> } />
          <Route path='/add' element={<AddProduct/> } />
          <Route path='/update' element={<h1>This is Update Product Page</h1> } />
          <Route path='/logout' element={<h1>This is logout</h1> } />
          <Route path='/profile' element={<h1>This is profile</h1> } />
          </Route>
          <Route path='/signup' element={<SignUp/> } />
          <Route path='/login' element={<Login/> } />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
