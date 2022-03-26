import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './Cards.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardColumns, Button } from "react-bootstrap";
function Cards() {
    const [item ,setItem] =useState(0);
    const [products,setProducts] = useState();
    const [images,setImages] = useState();
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/prod/')
        .then(response=>{
            setProducts(response.data.products);
            console.log(response.data.products);
            
        });
    },[]);
        const addtocart=(product,image)=>{
            let i=0;
            let flag = false;
            let cartitems=localStorage.getItem("cartitems")?JSON.parse(localStorage.getItem("cartitems")):[];
                for(i;i<cartitems.length;i++){
                    if(cartitems[i].id ===product.id)
                    {
                        cartitems[i].quantity+=1;
                        flag = true;
                        localStorage.setItem("cartitems",JSON.stringify(cartitems));
                        let userinfo=JSON.parse(localStorage.getItem("loggeduser"));
                        userinfo['cart']=cartitems;
                        localStorage.setItem("loggeduser",JSON.stringify(userinfo));
                    }
                }
                if (!flag){
                    product.quantity=1;
                    cartitems.push(product);
                    localStorage.setItem("cartitems",JSON.stringify(cartitems));
                    let userinfo=JSON.parse(localStorage.getItem("loggeduser"));
                    userinfo['cart']=cartitems;
                    localStorage.setItem("loggeduser",JSON.stringify(userinfo));
                }
            }
        return (
            <>
      
      <nav class="navbar navbar-expand-sm navbar-light bg-white border-bottom"> <a class="navbar-brand ml-2 font-weight-bold" href="#">FORCEPAUSED</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor" aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
    <div class="collapse navbar-collapse" id="navbarColor">
        <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Women's</a> </li>
            <li class="nav-item"><a class="nav-link" href="#">Men's</a> </li>
            <li class="nav-item "><a class="nav-link" href="#">Home</a> </li>
            <li class="nav-item "><a class="nav-link" href="#">Sale</a> </li>
        </ul>
    </div>
</nav>
<div class="filter"> <button class="btn btn-default" type="button" data-toggle="collapse" data-target="#mobile-filter" aria-expanded="false" aria-controls="mobile-filter">Filters<span class="fa fa-filter pl-1"></span></button>
</div>
<div id="mobile-filter">
    <div>
        <h6 class="p-1 border-bottom">Home Furniture</h6>
        <ul>
            <li><a href="#">Living</a></li>
            <li><a href="#">Gaming</a></li>
            <li><a href="#">Office</a></li>
            <li><a href="#">Bedroom</a></li>
            <li><a href="#">Desk</a></li>
        </ul>
    </div>
    <div>
        <h6 class="p-1 border-bottom">Filter By</h6>
        <p class="mb-2">Color</p>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span class="fa fa-circle pr-1" id="red"></span>Red </a></li>
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span class="fa fa-circle pr-1" id="teal"></span>Teal </a></li>
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span class="fa fa-circle pr-1" id="blue"></span>Blue </a></li>
        </ul>
    </div>   
</div>
<section id="sidebar">
    <div>
        <h6 class="p-1 border-bottom">Home Furniture</h6>
        <ul>
            <li><a href="#">Living</a></li>
            <li><a href="#">Dining</a></li>
            <li><a href="#">Office</a></li>
            <li><a href="#">Bedroom</a></li>
            <li><a href="#">Kitchen</a></li>
        </ul>
    </div>
    <div>
        <h6 class="p-1 border-bottom">Filter By</h6>
        <p class="mb-2">Color</p>
        <ul class="list-group">
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span class="fa fa-circle pr-1" id="red"></span>Red </a></li>
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span class="fa fa-circle pr-1" id="teal"></span>Teal </a></li>
            <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#"> <span class="fa fa-circle pr-1" id="blue"></span>Blue </a></li>
        </ul>
    </div>
   
</section>
<section id="products">
    <div class="container">
        <div class="row">
        <div className='container-shop'>
            <div className='container-card'>
           {products && products.map((element,index) => { return(
               <div className='each-card'>
               <div><Link to={`/single/${element.id}`}>
            <img src={element.image1}/>
            <h5>{element.name}</h5></Link>
            <hr/>
            <h4>{element.price}$</h4>
            <button className='card-btn' onClick={()=>addtocart(element)}><b>+ Add to Cart</b></button>
           </div>

           </div>)
            }) }
                  
            </div>
   
        </div>
           
        </div>
    </div>
</section>
      
        </>
    )
}

export default Cards
