import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Chart from "../../components/Chart";
import {Publish} from "@mui/icons-material";

const Category = (props:any) => {
    let [data, setData] = useState([{id: "", name: "", description: "", price: "", currency: "", discount: "", category: "", productinventory: "", image: "" }])

    useEffect(() => {
        fetch(`/category/${props.categoryId}`,
            {
                method: "GET"
            })
            .then(response => response.json())
            .then((response) => setData(response))
    }, [])
    return (
        <div className="category">
            <div className="categoryTitleContainer">category</div>
            <Link to="/newcategory">
                <button className="categoryAddButton">Create</button>
            </Link>
            <div className="categoryTop">
                <div className="categoryTopLeft">
                    <Chart data={data} dataKey="Sales" title="Sales Performance" grid={undefined}/>
                </div>
                <div className="categoryTopRight"></div>
                <div className="categoryInfoTop"></div>
                <img src="https://cdn.webshopapp.com/shops/21919/files/300590352/round-blue-glazed-seifu-pot-148-x-148-x-69-mm.jpg"
                     alt="" className="categoryInfoImg"/>
                <span className="categoryName">Glazed Pot</span>
                <div className="categoryInfoBottom">
                    <div className="categoryInfoItem">
                        <span className="categoryInfoKey">id:</span>
                        <span className="categoryInfoValue">123</span>
                    </div>
                    <div className="categoryInfoItem">
                        <span className="categoryInfoKey">sales:</span>
                        <span className="categoryInfoValue">7123</span>
                    </div>
                    <div className="categoryInfoItem">
                        <span className="categoryInfoKey">active</span>
                        <span className="categoryInfoValue">yes</span>
                    </div>
                    <div className="categoryInfoItem">
                        <span className="categoryInfoKey">in sales</span>
                        <span className="categoryInfoValue">no</span>
                    </div>
                </div>
            </div>
            <div className="categoryBottom">
                <form className="categoryForm">
                    <div className="categoryFormLeft">
                        <label>category Name</label>
                        <input type="text" placeholder="Pot"/>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="categoryFormRight">
                        <div className="categoryUpload">
                            <img src="https://www.asian-ceramics.com/images/thumbs/0026444_vietnamese-large-planters_630.jpeg" className="categoryUploadImg" alt=""/>
                            <label htmlFor="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}}/>
                        </div>
                        <button className="categoryButton">Upload</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Category;