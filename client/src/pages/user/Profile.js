// import React from "react";
// import UserMenu from "../../components/Layout/UserMenu";
// import Layout from "./../../components/Layout/Layout";
import React, { useState, useEffect } from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
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
     //context
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/profile`, {
        name,
        email,
        password,
        phone,
        address,
      });
      if (data?.errro) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            {/* <h1>Your Profile</h1> */}
            <div style={styles.container}>
                <form style={styles.form} onSubmit={handleSubmit} >
                    <h2 className="text-center mb-4">User Profile</h2>
                    <div className="form-group" style={styles.field}>
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} className="form-control" id="name" placeholder="Enter your name"  />
                    </div>
                    <div className="form-group" style={styles.field}>
                        {/* <label htmlFor="email">Email address</label> */}
                        <input type="email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} className="form-control" id="email" placeholder="Enter your email"  disabled />
                    </div>
                    <div className="form-group" style={styles.field}>
                        {/* <label htmlFor="password">Password</label> */}
                        <input type="password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} className="form-control" id="password" placeholder="Enter your password"  />
                    </div>
                    <div className="form-group" style={styles.field}>
                        {/* <label htmlFor="phone">Phone No.</label> */}
                        <input type="phome" value={phone} onChange={(e) => {
                            setPhone(e.target.value)
                        }} className="form-control" id="phone" placeholder="Enter your Phone no."  />
                    </div>
                    <div className="form-group" style={styles.field}>
                        {/* <label htmlFor="address">Address</label> */}
                        <input type="text" value={address} onChange={(e) => {
                            setAddress(e.target.value)
                        }} className="form-control" id="address" placeholder="Enter your Address"  />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" style={styles.button} >Update</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;