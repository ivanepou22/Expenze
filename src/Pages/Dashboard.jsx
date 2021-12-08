import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'
import './Dashboard.css'

const Dashboard = () => {
    const page = 'Dashboard'
    return (
        <>
            <Breadcrumb page={page} pagename={''} />
            <section class="trending-product section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product users-card">
                                <Link to="/" className="title-container">
                                    <div class="product-info users-card">
                                        <span class="category">Users</span>
                                        <h4 class="title">
                                            <hr />
                                        </h4>
                                        <div class="price">
                                            <span className="users">
                                                0.00
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product">
                                <Link to="/" className="title-container">
                                    <div class="product-info">
                                        <span class="category">Bank Accounts</span>
                                        <h4 class="title">
                                            <hr />
                                        </h4>
                                        <div class="price">
                                            <span>
                                                0.00
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product">
                                <Link to="/" className="title-container">
                                    <div class="product-info">
                                        <span class="category">G\L Accounts</span>
                                        <h4 class="title">
                                            <hr />
                                        </h4>
                                        <div class="price">
                                            <span>
                                                0.00
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-product inbox-card">
                                <Link to="/" className="title-container">
                                    <div class="product-info inbox-card">
                                        <span class="category">Bank Acc. Reconciliations</span>
                                        <h4 class="title">
                                            <hr />
                                        </h4>
                                        <div class="price">
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
    )
}

export default Dashboard
