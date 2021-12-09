import React from 'react'
import { Link } from 'react-router-dom'
import './UserProfile.css'

const UserProfile = () => {
    const [isActive, setIsActive] = React.useState(false)
    return (
        <div className="dropdown-cust">
            <div className="dropdown-cust-btn">
                <img src="https://via.placeholder.com/150" alt="user" />
            </div>
            {
                isActive && (
                    <div className="dropdown-cust-content">
                        <div className="dropdown-cust-content-item">
                            <Link to="/#">
                                <i className="fas fa-user"></i>
                                <span>Profile</span>
                            </Link>
                        </div>
                        <div className="dropdown-cust-content-item">
                            <Link to="/#">
                                <i className="fas fa-cog"></i>
                                <span>Settings</span>
                            </Link>
                        </div>
                        <div className="dropdown-cust-content-item">
                            <Link to="/#">
                                <i className="fas fa-sign-out-alt"></i>
                                <span>Logout</span>
                            </Link>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default UserProfile
