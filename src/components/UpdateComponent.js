import React, { useState, useEffect } from 'react'
import {useNavigate, useParams} from "react-router-dom"

function UpdateProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const navigate = useNavigate();

  // Whatever we define in :id in index.js will get store in the variable defined here
  const  params  = useParams();

  useEffect(() => {
    getProductDetails();
  }, [])

  const getProductDetails = async () => {
    console.log(params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  }


  const updateProduct = async () => {
    console.warn({ name, price, category, company });
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        'Content-Type': 'Application/json'
      }
    });
    result = await result.json();
    console.log(result);
    if(result)
      navigate('/');
  }

  return (
    <div className='product'>
      <h1>Update Product</h1>
      <input className="inputBox" type="text" placeholder='Enter Product Name'
          value={name} onChange = {(e) => setName(e.target.value)}
      ></input>

      <input className="inputBox" type="text" placeholder='Enter Product Price'
          value={price} onChange = {(e) => {setPrice(e.target.value)}}
      ></input>

      <input className="inputBox" type="text" placeholder='Enter Product Category'
          value={category} onChange = {(e) => setCategory(e.target.value)}
      ></input>

      <input className="inputBox" type="text" placeholder='Enter Product Company'
          value={company} onChange = {(e) => setCompany(e.target.value)}
      ></input>

          <button className = "appButton" type='button' onClick={updateProduct}>Update Product</button>
    </div>
  )
}

export default UpdateProduct