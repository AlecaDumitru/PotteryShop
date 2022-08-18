import React from 'react'
import "./styles/signIn.css"

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import {Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from '@mui/material'
import {Link} from "react-router-dom";
import LockOpenIcon from '@mui/icons-material/LockOpen';
// @ts-ignore
const SignIn = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values: any, props: { resetForm: () => void; setSubmitting: (arg0: boolean) => void; }) => {
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    return (
        <Grid className="grid">
            <Paper style={paperStyle}>
                <Grid>
                    <Avatar style={avatarStyle}><LockOpenIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props: { isSubmitting: boolean | undefined; }) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username"
                                   placeholder='Enter username' fullWidth required
                                   helperText={<ErrorMessage name="username" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                   placeholder='Enter password' type='password' fullWidth required
                                   helperText={<ErrorMessage name="password" />} />
                            <Field as={FormControlLabel}
                                   name='remember'
                                   control={
                                       <Checkbox
                                           color="primary"
                                       />
                                   }
                                   label="Remember me"
                            />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                    style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>

                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link to="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link to="#" onClick={() => handleChange("event", 1)} >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SignIn