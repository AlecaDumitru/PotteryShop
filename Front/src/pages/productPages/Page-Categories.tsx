import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import './ProductCard.css'
import './Categories.css'
import Product from "./Product";

// export interface Props {

//     productName? : string
//     price? : number
//     currency? : string
//     description? : string
//     pictureUrl : string

// }

const Categories = () => {
    let [allProducts, GetAllProducts] = useState([{id: "", name: "", description: "", price: "", currency: "", discount: "", category: "", productinventory: "", image: "" }])
    let [product, getProduct]= useState(0);

    useEffect(() => {
        fetch(`/product`,
            {
                method: "GET"
            })
            .then(response => response.json())
            .then((response) => GetAllProducts(response))
    }, [])

    return(
        <div>
            {product === 0 &&
                <>
                <h1>Products Page</h1>
                <List className="grid">
            {allProducts.map((product) => (
                <div key={product.id} className="element">
                <ListItem  />
                    
                <ProductCard productId = {product.id} getProduct={getProduct} pictureUrl = {product.image} productName = {product.name}
                price = {product.price} currency = {product.currency} description = {product.description}/>
                </div>
                ))}
                </List>
                </>
            }{product !== 0 &&
            <>
                <Product productId={product}/>
            </>
            }


        </div>

    )
}
export default Categories;