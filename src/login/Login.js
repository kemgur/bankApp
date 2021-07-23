import React from 'react'
import { Formik,Form,Field } from 'formik';
 import * as Yup from 'yup';
 import {toast, ToastController } from 'react-toastify';
 import {Container} from "react-bootstrap";

const LoginForm=(props)=>{
    return(
        <Container>
            <Form>
                <label htmlFor="username">User Name</label>
                <Field name="firstName" type="text" />
 
                <label htmlFor="password">Password</label>
                <Field name="password" type="text" />              
 
                <button type="submit">Submit</button>
             </Form> 
        </Container>      
    )}

const Login = () => {
    return (
        <div>
            <Formik
              initialValues={{ username: '', password: ''}}
              validationSchema={Yup.object({
                username: Yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
                password: Yup.string()
                  .max(20, 'Must be 20 characters or less')
                  .min(8, 'Must be at least 8 characters')
                  .required('Required'),
            })}
              onSubmit={(values, action) => {
                // servis.login(values).then((res)=>{
                //   if(res.status===200){
                //     const userInfo=res.data;
                //   }  
                // })
                // if(userInfo && idAdmin){
                //     history.push("/admin");
                // }else{
                //     history.push("/user")
                // }
              toast.success("Login Successful",{
                  position: toast.POSITION.TOP_CENTER
              });
              action.resetForm();
              action.setSubmitting(false); 
            }}
            >
            component={LoginForm}  
            </Formik>
        </div>
    )
}

export default Login
