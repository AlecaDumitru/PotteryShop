import React, {useEffect, useState} from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {Link} from "react-router-dom";
import {DeleteOutline} from "@mui/icons-material";
import "./styles/categories.css"


const CategoriesList = () => {
    let [data, setData] = useState([{id: "", name: "", description: ""}])
    // @ts-ignore
    const handleDelete = (id) => {
        setData(data.filter((x) => x.id !== id));
    }

    useEffect(() => {
        fetch(`/category`,
            {
                method: "GET"
            })
            .then(response => response.json())
            .then((response) => setData(response))
    }, [])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'category', headerName: 'Category', width: 200, renderCell: (params) => {
                return (
                    <div className="categoryListUser">
                        <img className="categoryListImg" src={params.row.img} alt=""/>
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 360,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field:"action",
            headerName: "Action",
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={"/category/" + params.row.id}>
                            <button className="categoryListEdit">Edit Category</button>
                        </Link>
                        <DeleteOutline className="categoryListDelete" onClick={ () => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];


    return (
        <div className="categoryList">
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

export default CategoriesList;