import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'
import './Dashboard.css';
import { useStateValue } from '../Context/StateProvider';
import Login from './Login';

const Dashboard = () => {
    const page = 'Dashboard'
    const [{ user }] = useStateValue();

    return (
        <>
            {
                user ? (
                    <>
                        <Breadcrumb page={page} pagename={''} />
                        <section className="trending-product section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="single-product users-card">
                                            <Link to="/" className="title-container">
                                                <div className="product-info users-card">
                                                    <span className="category">Users</span>
                                                    <h4 className="title">
                                                        <hr />
                                                    </h4>
                                                    <div className="price">
                                                        <span className="users">
                                                            0.00
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="single-product">
                                            <Link to="/" className="title-container">
                                                <div className="product-info">
                                                    <span className="category">Bank Accounts</span>
                                                    <h4 className="title">
                                                        <hr />
                                                    </h4>
                                                    <div className="price">
                                                        <span>
                                                            0.00
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="single-product">
                                            <Link to="/" className="title-container">
                                                <div className="product-info">
                                                    <span className="category">G\L Accounts</span>
                                                    <h4 className="title">
                                                        <hr />
                                                    </h4>
                                                    <div className="price">
                                                        <span>
                                                            0.00
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-12">
                                        <div className="single-product inbox-card">
                                            <Link to="/" className="title-container">
                                                <div className="product-info inbox-card">
                                                    <span className="category">Bank Acc. Reconciliations</span>
                                                    <h4 className="title">
                                                        <hr />
                                                    </h4>
                                                    <div className="price">
                                                        <span className="inbox">
                                                            0.00
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </>
                ) : (
                    <>
                        <Login />
                    </>
                )
            }

        </>
    )
}

export default Dashboard
