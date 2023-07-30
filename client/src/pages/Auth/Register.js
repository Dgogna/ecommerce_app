import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'

import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            //   marginTop:"5vh"
            padding: "40px"
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
            marginLeft: "30%"
        },
        // buttonHover: {
        //   backgroundColor: '#323232',
        //   borderColor: '#323232',
        // },
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const Navigate=useNavigate();

    const handleSumit=async (e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address})
            if(res && res.data.success){
                toast.success(res.data.message);
                Navigate("/login");
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
                <form style={styles.form} onSubmit={handleSumit} >
                    <h2 className="text-center mb-4">Create an Account</h2>
                    <div className="form-group" style={styles.field}>
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} className="form-control" id="name" placeholder="Enter your name" required />
                    </div>
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
                    <div className="form-group" style={styles.field}>
                        {/* <label htmlFor="phone">Phone No.</label> */}
                        <input type="phome" value={phone} onChange={(e) => {
                            setPhone(e.target.value)
                        }} className="form-control" id="phone" placeholder="Enter your Phone no." required />
                    </div>
                    <div className="form-group" style={styles.field}>
                        {/* <label htmlFor="address">Address</label> */}
                        <input type="text" value={address} onChange={(e) => {
                            setAddress(e.target.value)
                        }} className="form-control" id="address" placeholder="Enter your Address" required />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" style={styles.button} >Create Account</button>
                </form>
            </div>
        </Layout>
    )
}

export default Register
