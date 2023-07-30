import React , {useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import AdminMenu from '../../components/Layout/AdminMenu'

const AdminDashboard = () => {
    const Navigate=useNavigate();

    const [auth] = useAuth();

    useEffect(()=>{
        const data = localStorage.getItem("auth");
        let another = JSON.parse(data);
        if(another.user.role === 1){
            // console.log(another.user.role);
        }
        else{
            Navigate("/login");
        }

    } , [])

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard
