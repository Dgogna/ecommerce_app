import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';

const Login = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            //   marginTop:"10vh",
            paddingTop: "120px"
            //   height: '100vh',
        },
        form: {
            width: '100%',
            maxWidth: '450px',
            padding: '15px',
            //   border: '1px solid #ccc',
            //   borderRight: '1px solid #ccc'
        },
        field: {
            marginBottom: '15px',
        },
        button: {
            backgroundColor: '#000',
            borderColor: '#000',
            marginLeft: "40%"
        },
        // buttonHover: {
        //   backgroundColor: '#323232',
        //   borderColor: '#323232',
        // },
    };

    const [auth,setAuth] = useAuth();
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Navigate=useNavigate();

    const handleSumit=async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password})
            if(res && res.data.success){
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                  });
                  localStorage.setItem("auth", JSON.stringify(res.data));
                // console.log(res.data)
                Navigate("/");
            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went Wrong")
        }
    }
  return (
    <Layout>

            <div style={styles.container}>
                <form style={styles.form} onSubmit={handleSumit}>
                    <h2 className="text-center mb-4">Login Page</h2>
                    
                    <div className="form-group" style={styles.field}>
                        {/* <label htmlFor="email">Email address</label> */}
                        <input type="email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} className="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group" style={styles.field}>
                        {/* <label htmlFor="password">Password</label> */}
                        <input type="password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} className="form-control" id="password" placeholder="Enter your password" required />
                    </div>
                    

                    <button type="submit" className="btn btn-primary btn-block" style={styles.button} >Login</button>
                </form>
            </div>
        </Layout>
  )
}

export default Login
