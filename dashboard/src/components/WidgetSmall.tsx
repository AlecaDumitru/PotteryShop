import "./styles/widgetSmall.css"
import {Visibility} from "@mui/icons-material";

const WidgetSmall = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Anna</span>
                            <span className="widgetSmUserTitle">Software Developer</span>
                        </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Anna</span>
                        <span className="widgetSmUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetSmall;