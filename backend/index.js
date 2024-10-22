const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const app = express();
app.use(cors());
app.use(express.json());
const Product = require('./db/Product');


app.post('/register',async(req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    result= result.toObject();
    delete result.password
    resp.send(result);
});


app.post('/login',async(req,resp)=>{

    if(req.body.email && req.body.password){

        let user = await User.findOne(req.body).select("-password");
        if(user){
            resp.send(user);
        }else{
            resp.send({result:'No User Found'});
        }
    }else{
        resp.send({result:'No User Found'});
    }
});

app.post('/add-product',async(req,resp)=>{
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
});

app.get('/products',async(req,resp)=>{
    let products = await Product.find();
    if(products.length>0){
        resp.send(products);
    }else{
        resp.send({result:"No Product Found"});
    }
})

app.listen(5000);