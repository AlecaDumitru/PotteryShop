import "./styles/product.css";
import {Link} from "react-router-dom";
import Chart from "../../components/Chart";
import {useEffect, useState} from "react";
import { Publish } from "@mui/icons-material";

const Product = (props:any) => {
    const [data, setData] = useState({id: "", name: "", description: "", price: "", currency: "", discount: "", category: "", productinventory: "", image: "" })
    useEffect( () => {
        fetch(`/product/${props.productId}`,
            {
                method:"GET",
            })
            .then(response => response.json())
            .then(response => setData(response))
    })
    return (
        <div className="product">
            <div className="productTitleContainer">Product</div>
            <Link to="/newProduct">
                <button className="productAddButton">Create</button>
            </Link>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={data} dataKey="Sales" title="Sales Performance" grid={undefined}/>
                </div>
                <div className="productTopRight"></div>
                <div className="productInfoTop"></div>
                <img src="https://cdn.webshopapp.com/shops/21919/files/300590352/round-blue-glazed-seifu-pot-148-x-148-x-69-mm.jpg"
                alt="" className="productInfoImg"/>
                <span className="productName">Glazed Pot</span>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">sales:</span>
                        <span className="productInfoValue">7123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">active</span>
                        <span className="productInfoValue">yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">in sales</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Pot"/>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://www.asian-ceramics.com/images/thumbs/0026444_vietnamese-large-planters_630.jpeg" className="productUploadImg" alt=""/>
                            <label htmlFor="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="productButton">Upload</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Product;