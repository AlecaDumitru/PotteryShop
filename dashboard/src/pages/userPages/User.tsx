import "./styles/user.css"
import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish} from "@mui/icons-material";
import {Link} from "react-router-dom";

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80" alt="" className="userShowImg"/>
                        <div className="userShowTop">
                            <span className="userShowUsername">Andrew Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">Andrew Becker</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.12.1994</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+0045 456 458</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">andrewBecker@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Bucharest | Romania</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="src/pages/userPages/User" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input type="text"
                                       className="userUpdateInput"
                                       placeholder="Andrew Becker"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">FullName</label>
                                <input type="text"
                                       className="userUpdateInput"
                                       placeholder="Andrew Becker"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input type="text"
                                       className="userUpdateInput"
                                       placeholder="andrewbecker94@gmail.com"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone</label>
                                <input type="text"
                                       className="userUpdateInput"
                                       placeholder="+0077 456 789"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Address</label>
                                <input type="text"
                                       className="userUpdateInput"
                                       placeholder="Bucharest | Romania"
                                />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=495&q=80" className="userUpdateImg" alt=""/>
                                <label htmlFor="file" id="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User;