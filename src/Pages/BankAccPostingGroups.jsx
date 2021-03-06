import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'
import { useStateValue } from '../Context/StateProvider';
import { db } from '../firebase';
import BankAccPostCard from '../Components/BankAccPostCard';
import './BankAccPostingGroups.css';
import Login from './Login';

const BankAccPostingGroups = () => {
    const [{ user }] = useStateValue();
    const [bankAccPostingGrps, setBankAccPostingGrps] = useState([]);
    //get data from firebase
    useEffect(() => {
        db.collection('bankAccPostingGroups')
            .onSnapshot(snapshot => {
                setBankAccPostingGrps(snapshot.docs.map(doc => ({
                    id: doc.id,
                    bankAccPostGrp: doc.data()
                })))
            })
    }, [])

    return (
        <>
            {
                user ? (
                    <>
                        <Breadcrumb page={'Bank Acc. Posting Groups'} pagename={'Bank Acc. Posting Groups'} />
                        <div className="shopping-cart section">
                            <div className="container">
                                <div className="cart-list-head">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 col-12 row-admd">
                                            <div className="cart-list-head-right row-add">
                                                <Link to="/"><i className="lni lni-plus"></i> Add Posting Group</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-list-title">
                                        <div className="row">
                                            <div className="col-lg-1 col-md-3 col-12">
                                                <p> No.</p>
                                            </div>
                                            <div className="col-lg-2 col-md-1 col-12">
                                                <p>Codes</p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-12">
                                                <p>Description</p>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-12">
                                                <p>GL Account</p>
                                            </div>
                                            <div className="col-lg-2 col-md-3 col-12">
                                                <p>Created By</p>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-12">
                                                <p>Created At</p>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        bankAccPostingGrps.map(({ id, bankAccPostGrp }, index) => (
                                            <BankAccPostCard key={id} index={index} bankAccPostGrp={bankAccPostGrp} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
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

export default BankAccPostingGroups
