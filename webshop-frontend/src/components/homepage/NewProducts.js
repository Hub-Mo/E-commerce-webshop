import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const NewProducts = () => {
    var [newProductsData, setnewProductsData] = useState([]);
    var [productFound,setProductFound] = useState(false);
    
    // fixing .map is not a function with this line of code
    if(!Array.isArray(newProductsData)){
        newProductsData = [newProductsData];
    }
let test=[];
    useEffect(() => {
        //if(!productFound){
            getNewProductsData();
       // }
    }, [productFound]);
    
    function getNewProductsData() {
        axios.get(`http://localhost/E-commerce-webshop/server/Model/Products.php?newProducts`).then(function(response) {
            console.log('res', JSON.stringify(response.data))
            setnewProductsData(response.data);
           //setTimeout(setProductFound(true),4000,true);
        }).then(()=>{
            console.log(productFound);console.log(newProductsData);
             //if(newProductsData.length == 4 && productFound ==true){
                newProductsData.forEach(product=>{
                    test.push(product);
             })
             console.log("New test = ",test);
            // }
         });    
    }
    function addToCart(id) {
        //TODO: remove this function.
    }
    console.log('newproductdata', newProductsData);
    return (
        <div className='NewProducts'>
            {/* start of New products section */}
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto">
                    <h2 className="relative inline-block text-2xl font-bold text-left bg-white">
                        New Products
                    </h2>

                    <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-6">
                    {newProductsData.map((product,key) => 
                        <Link to={`/product-detail/${product.id}/`}  key={key}>
                            <div className="relative block border border-gray-100"  key={key}>
                                <div className='object-cover w-full h-72'>
                                    <img loading="lazy" alt={product.name} className='w-full h-full pl-6' 
                                    src="https://picsum.photos/200/300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="font-semibold text-sm">{product.name}<br/>
                                        <span className="font-normal">{product.name}</span>
                                    </h2>
                                    <p className="text-base font-bold">&euro; {product.price}</p>
                                </div>
                                <button type="submit" className="add-to-cart flex items-center justify-center
                                            w-full px-8 py-4 mt-4 rounded-sm bg-yellow-500" onClick={() => addToCart(product.id)}>
              <span className="text-sm font-medium">
                                    Add to Cart
                                    </span>
              <svg
                  className="w-5 h-5 ml-1.5"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
            </button>
                            </div>
                        </Link>
                        
                        )}
                    </div>
                </div>
            </section>
            {/* end of New products section */}
        </div>
    )
}

export default NewProducts