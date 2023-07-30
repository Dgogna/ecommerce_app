import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import "./footer.css"

const Footer = () => {
    return (
        <div className="container footer">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary"><Link to="/" className='text-body-secondary' style={{textDecoration:"none"}} >&copy; 2023 Ecommerce App</Link></span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link ">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-link  ">
                            Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/policy" className="nav-link  ">
                            Policy
                        </NavLink>
                    </li>
                    {/* <li className="ms-3"><NavLink className="text-body-secondary" >About</NavLink></li> */}
                    {/* <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li> */}
                </ul>
            </footer>
        </div>
    )
}

export default Footer
