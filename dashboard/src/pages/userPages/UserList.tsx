import "./styles/userList.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import  {DeleteOutline} from "@mui/icons-material";
import {Userrows} from "../../DummyData";
import {Link} from "react-router-dom";
import {useState} from "react";

const UserList = () => {
    const [data, setData] = useState(Userrows);
    // @ts-ignore
    const handleDelete = (id) => {
        setData(data.filter((x) => x.id !== id));
    }
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 200, renderCell: (params) => {
            return (
                <div className="userListUsername">
                    <img className="userListImg" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
        }
        },

        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 100,
        },
        {
            field:"action",
            headerName: "Action",
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={"/userPage/" + params.row.id}>
                            <button className="userListEdit">Edit User</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={ () => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
    ];


    return (
        <>
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
            <div className="userTitleContainer">
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
        </>
    );
};

export default UserList;