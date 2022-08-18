import React, {useEffect, useState} from "react";



const Product=(props:any)=>{
    const [product, getProductById] = useState({id: "", name: "", description: "", price: "", currency: "", discount: "", category: "", productinventory: "", image: "" })
    useEffect( () => {
        fetch(`/product/${props.productId}`,
            {
                method:"GET",
            })
            .then(response => response.json())
            .then(response => getProductById(response))
    })
    return(
       <div>
           <h1>{product.id}</h1>
           <h1>{product.name}</h1>
           <h1>{product.price}</h1>
           <h1>{product.description}</h1>
           <h1>{product.currency}</h1>
       </div>
    )
}
export default Product;