import React, { useState } from 'react'

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  return (
    <div className='product'>
      <h1>AddProduct</h1>
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

          <button className = "appButton" type='button' >Add Product</button>
    </div>
  )
}

export default AddProduct