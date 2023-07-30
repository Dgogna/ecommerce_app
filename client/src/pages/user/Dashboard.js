import React , {useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import UserMenu from '../../components/Layout/UserMenu'

const Dashboard = () => {
    const Navigate=useNavigate();
    const [auth] = useAuth();
    useEffect(()=>{
        const data = localStorage.getItem("auth");
        let another = JSON.parse(data);
        if (another.user.role === 0) {
            // console.log(data)
        
        }else{
            Navigate("/login");
        }


    },[])

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
