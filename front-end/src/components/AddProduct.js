import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const addProduct = async() => {
        if(!name||!price||!category||!company){
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;

        let result = await fetch('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({ name, price,category,company }),
            headers: {
                'Content-Type': 'application/json',
                authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
            },
            
        });
        result = await result.json();
        navigate('/');
    }

    return (<div className="product">
        <h1>Add Product</h1>
        <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" />
       { error && !name && <span className="invalid-input">Enter valid Name</span>}
        <input className="inputBox" type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Product price" />
        { error && !price && <span className="invalid-input">Enter valid Price</span>}
        <input className="inputBox" type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Enter Product category" />
        { error && !category && <span className="invalid-input">Enter valid Price</span>}
        <input className="inputBox" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Enter Product company" />
        { error && !company && <span className="invalid-input">Enter valid Price</span>}
        <button type="button" onClick={addProduct} className="app-button">Add Product</button>
    </div>)
}

export default AddProduct;