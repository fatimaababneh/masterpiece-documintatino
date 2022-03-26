import React from "react";
import './SingleProduct.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import { useParams } from "react-router-dom";
function SingleProduct(){
    const [products,setProducts] = useState();
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/prod/${id}`)
        .then(response=>{
            setProducts(response.data.products);
            console.log(response.data.products);
            
        });
    },[]);
    const addtocart=(product)=>{
        let i=0;
        let flag = false;
        let cartitems=localStorage.getItem("cartitems")?JSON.parse(localStorage.getItem("cartitems")):[];
            for(i;i<cartitems.length;i++){
                if(cartitems[i].id ===product.id)
                {
                    cartitems[i].quantity+=1;
                    flag = true;
                    localStorage.setItem("cartitems",JSON.stringify(cartitems));
                }
            }
            if (!flag){
                product.quantity=1;
                cartitems.push(product);
                localStorage.setItem("cartitems",JSON.stringify(cartitems));
            }
        }
return( <div>{products &&
    <div class="container-fluid mt-5">
    <div class="row">
        <div class="col-md-5 mr-1" style={{marginRight:"4%",marginLeft:"4%"}}>
            
        
      
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src={products.image1}
            alt="Image One"
          />
      
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src={products.image2}
            alt="Image Two"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src={products.image3}
            alt="Image One"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src={products.image4}
            alt="Image One"
          />
        </Carousel.Item>
      </Carousel>
      </div>
          <div class="col-md-6">

          
            
           
                {/* <div >
                    <a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
                    <div class="carousel-item"><img class="img-thumbnail w-100 d-block" src={products.image2} alt="Slide Image"/></div>  
                    <span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon"></span><span class="sr-only">Next</span>
                        </a>
                    </div> */}

                

        <div class="col-md-12">
            <h4>{products.name}</h4>
            <div class="price"><span class="mr-2 cut">65,000</span><span class="text-success">25% OFF</span></div>
            <div class="d-flex flex-row">
                <div class="icons mr-2"><i class="fa fa-star"></i><i class="fa fa-star"></i></div><span>1200 ratings &amp; 564 reviews</span>
            </div>
            <div class="d-flex align-items-center mt-4 offers mb-1"><span class="ml-2 font-weight-bold">{products.description}</span></div>
            <div class="d-flex align-items-center mt-5 delivery"><i class="fa fa-map-marker"></i><span class="ml-2">Delivery by 23 Jul, Tuesday<br/></span><span class="ml-2 mr-2">|<br/></span><span class="ml-2 mr-2 text-success">FREE<br/></span></div>
            <hr/>
            <div class="d-flex align-items-center mt-2"> <label class="radio"> <input type="radio" name="ram" value="128GB" checked/></label> <label class="radio"> <input type="radio" name="ram" value="256GB"/> </label> <label class="radio">
                 <input type="radio" name="ram" value="256GB"/> </label> </div>
            <h4>{products.price}$</h4><button className='card-btn' onClick={()=>addtocart(products)}><b>+ Add to Cart</b></button>
        </div>
        </div>
           
            </div>
            
            </div>
}
</div>);
}
export default SingleProduct;