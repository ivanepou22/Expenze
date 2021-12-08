import React from 'react'
import { Link } from 'react-router-dom'
import './Haeder.css'
import Logo from '../assets/images/Logo.png';

const Header = () => {
    return (
        <>
            {/* <!-- Start Header Area --> */}
            <header className="header navbar-area admin-header">

                {/* <!-- Start Topbar --> */}
                <div className="topbar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-left">
                                    {/* Left Menus */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-middle">
                                    <ul className="useful-links">
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="top-end right-menu">
                                    <div className="nav-social">
                                        <ul className="user-login">
                                            <li>
                                                <Link to="/"><i className="lni lni-search-alt"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="/"><i className="lni lni-alarm"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="/"><i className="lni lni-cog"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="/"><i className="lni lni-help"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="/"><i className="lni lni-users"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Topbar --> */}

                {/* <!-- Start Header Bottom --> */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-6 col-12 middle-menu">
                            <div className="nav-inner">
                                {/* <!-- Start Mega Category Menu --> */}
                                <div className="header-logo">
                                    {/* Company name */}
                                    <div className="logo">
                                        <Link to="/"><img src={Logo} alt="Logo" /></Link>
                                    </div>
                                </div>
                                {/* <!-- End Mega Category Menu --> */}
                                {/* <!-- Start Navbar --> */}
                                <nav className="navbar navbar-expand-lg">
                                    <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <Link to="/" className="active" aria-label="Toggle navigation">Home</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="dd-menu collapsed" to="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Administration</Link>
                                                <ul className="sub-menu collapse" id="submenu-1-2">
                                                    <li className="nav-item"><Link to="/">Chart of Accounts</Link></li>
                                                    <li className="nav-item"><Link to="/">Journal Templates</Link></li>
                                                    <li className="nav-item"><Link to="/bankaccountpostinggroups">Bank Acc. Posting Groups</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="dd-menu collapsed" to="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Journals</Link>
                                                <ul className="sub-menu collapse" id="submenu-1-2">
                                                    <li className="nav-item"><Link to="/">General Journals</Link></li>
                                                    <li className="nav-item"><Link to="/">Cash Receipts Journals</Link></li>
                                                    <li className="nav-item"><Link to="/">Payment Journals</Link></li>
                                                    <li className="nav-item"><Link to="/">Sales Journals</Link></li>
                                                    <li className="nav-item"><Link to="/">Purchase Journals</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="dd-menu collapsed" to="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Cash Management</Link>
                                                <ul className="sub-menu collapse" id="submenu-1-3">
                                                    <li className="nav-item"><Link to="/">Bank Accounts</Link></li>
                                                    <li className="nav-item"><Link to="/bankaccountpostinggroups">Bank Acc. Posting Groups</Link></li>
                                                    <li className="nav-item"><Link to="/">Bank Acc. Ledger Entries</Link></li>
                                                    <li className="nav-item"><Link to="/">Bank Acc. Reconciliations</Link></li>
                                                    <li className="nav-item"><Link to="/">Posted Bank Acc. Recons.</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="dd-menu collapsed" to="/" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Posted Documents</Link>
                                                <ul className="sub-menu collapse" id="submenu-1-3">
                                                    <li className="nav-item"><Link to="/">General Ledger Entries</Link></li>
                                                    <li className="nav-item"><Link to="/">Bank Acc. Ledger Entries</Link></li>
                                                    <li className="nav-item"><Link to="/">Posted Bank Acc. Recons.</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <!-- navbar collapse --> */}
                                </nav>
                                {/* <!-- End Navbar --> */}
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- End Header Bottom --> */}
            </header>
            {/* <!-- End Header Area --> */}
        </>
    )
}

export default Header
