import "./styles/productList.css";
import { DataGrid, GridColDef} from '@mui/x-data-grid';
import  {DeleteOutline} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const ProductList = () => {
    let [data, setData] = useState([{id: "", name: "", description: "", price: "", currency: "", discount: "", category: "", productinventory: "", image: "" }])
    // @ts-ignore

    const HandleDelete = (id) => {
        console.log("intra")
        setData(data.filter((x) => x.id !== id));
        useEffect(() => {
            fetch(`/product/${id}`, { method: 'DELETE' })
                .then(response => console.log(response.status));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
        }, []);
    }
    useEffect(() => {
        fetch(`/product`,
            {
                method: "GET"
            })
            .then(response => response.json())
            .then((response) => setData(response))
    }, [])
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className="productListUser">
                        <img className="productListImg" src={params.row.image} alt=""/>
                        {params.row.name}
                    </div>
                )
            }
        },

        { field: 'productInventory', headerName: 'ProductInventory', width: 200 },
        {
            field: 'discount',
            headerName: 'Discount',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'currency',
            headerName: 'Currency',
            width: 160,
        },
        {
            field:"action",
            headerName: "Action",
            width: 350,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit Product</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={ () =>{
                            console.log("all gpood")
                            HandleDelete(params.row.id)}}/>
                        <Link to={"/sale/" + params.row.id}>
                            <button className="productListSale">Sale Product</button>
                        </Link>
                    </>
                )
            }
        }
    ];


    return (
        <div className="userList">
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data} disableSelectionOnClick
                    columns={columns}
                    pageSize={8}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    );
};

export default ProductList;