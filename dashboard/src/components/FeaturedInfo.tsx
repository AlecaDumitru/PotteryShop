import "./styles/FeaturedInfo.css";
import {ArrowDownward} from '@mui/icons-material';
const FeaturedInfo = () => {
    return (
        <div>
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Revenue</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$14</span>
                        <span className="featuredMoneyRate">14<ArrowDownward/></span>
                    </div>
                    <span className="featuredSub">Compare to last month</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Revenue</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$14</span>
                        <span className="featuredMoneyRate">14<ArrowDownward/></span>
                    </div>
                    <span className="featuredSub">Compare to last month</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Revenue</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$14</span>
                        <span className="featuredMoneyRate">14<ArrowDownward/></span>
                    </div>
                    <span className="featuredSub">Compare to last month</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Revenue</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$14</span>
                        <span className="featuredMoneyRate">14<ArrowDownward/></span>
                    </div>
                    <span className="featuredSub">Compare to last month</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Revenue</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$14</span>
                        <span className="featuredMoneyRate">14<ArrowDownward/></span>
                    </div>
                    <span className="featuredSub">Compare to last month</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Revenue</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$14</span>
                        <span className="featuredMoneyRate">14<ArrowDownward className="featuredIcon negative"/></span>
                    </div>
                    <span className="featuredSub">Compare to last month</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedInfo;