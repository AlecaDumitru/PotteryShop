import React from 'react';
import FeaturedInfo from "../../components/FeaturedInfo";
import Chart from "../../components/Chart";
import {data} from "../../DummyData";
import WidgetSmall from "../../components/WidgetSmall";
import WidgetLarge from "../../components/WidgetLarge";
const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={data} title="UserAnalytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    );
};

export default Home;