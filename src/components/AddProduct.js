import React, { useState } from 'react'

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {

    if (!price || !name || !category || !company)
    {
      setError(true);
      return false;
    }

    // console.warn({ name, price, category, company })
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    // console.warn(userId);
    let result = await fetch("http://localhost:5000/add-products", {
      method: "post",
      body: JSON.stringify({name, price, category, company, userId}),
      headers: {
        "Content-type" : "application/json"
      }
    })

    result = await result.json();
    console.warn(result);
    alert("Product added successfully");
  }

  return (
    <div className='product'>
      <h1>AddProduct</h1>
          <input className="inputBox" type="text" placeholder='Enter Product Name'
          value={name} onChange = {(e) => setName(e.target.value)}
      ></input>
      {error && !name && <span className='invalid-input'>Enter valid name</span>}
          <input className="inputBox" type="text" placeholder='Enter Product Price'
          value={price} onChange = {(e) => {setPrice(e.target.value)}}
      ></input>
      {error && !price && <span className='invalid-input'>Enter valid Price</span>}
          <input className="inputBox" type="text" placeholder='Enter Product Category'
          value={category} onChange = {(e) => setCategory(e.target.value)}
      ></input>
      {error && !category && <span className='invalid-input'>Enter valid Category</span>}
      <input className="inputBox" type="text" placeholder='Enter Product Company'
          value={company} onChange = {(e) => setCompany(e.target.value)}
      ></input>
      {error && !company && <span className='invalid-input'>Enter valid Company</span>}

          <button className = "appButton" type='button' onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct