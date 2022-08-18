import React, { useState } from 'react'

import SignIn from "./SignIn"
import {Box, Paper, Tab, Tabs, Typography} from "@mui/material";



const SignInOutContainer=()=>{
    const [value,setValue]=useState(0)
    const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
        setValue(newValue);
    };

    const paperStyle={width:340,margin:"20px auto"}
    function TabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Paper elevation={20} style={paperStyle}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Sign In" />

                <Tab label="Sign Up" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <SignIn handleChange={handleChange}/>
            </TabPanel>
        </Paper>

    )
}

export default SignInOutContainer;