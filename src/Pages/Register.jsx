import React from 'react'
import { useHistory } from 'react-router';
import { auth } from '../firebase';
import './Register.css';

const Register = () => {
    const history = useHistory()
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [displayName, SetDisplayName] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('');
    // const [photoURL, setPhotoURL] = React.useState('');

    //register function
    const register = (event) => {
        event.preventDefault(); //stops the fresh of the page
        //firebase login logic
        //verify password matches
        if (password !== confirmPassword) {
            alert('Passwords do not match')
            setPassword('');
            setConfirmPassword('');
        } else {
            if (password.length < 8) {
                alert('Password Can not be less then 8 Characters')
                setPassword('');
                setConfirmPassword('');
            } else {
                auth.createUserWithEmailAndPassword(email, password)
                    .then(auth => {
                        //Create a user in your own accessible database
                        auth.user.updateProfile({
                            displayName: displayName,
                            phoneNumber: phoneNumber
                        })
                        history.push('/');
                    })
                    .catch((error) => {
                        alert(error.message)
                    })
            }
        }
    }

    return (
        <>
            <div className="account-login section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12 reg-form">
                            <div className="register-form">
                                <div className="title">
                                    <h3>No Account? Register</h3>
                                    <p>Registration takes less than a minute but gives you full control over your orders.</p>
                                </div>
                                <form className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <input placeholder="Display Name" value={displayName} onChange={event => SetDisplayName(event.target.value)} className="form-control" type="text" id="reg-fn" required="" />
                                        </div>
                                    </div>
                                    {/* <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="reg-ln">Picture</label>
                                            <input value={photoURL} onChange={event => setPhotoURL(event.target.value)} className="form-control" type="file" id="reg-ln" required="" />
                                        </div>
                                    </div> */}
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input placeholder="Phone Number" value={phoneNumber} onChange={event => setPhoneNumber(event.target.value)} className="form-control" type="text" id="reg-phone" required="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input placeholder="Email Address" value={email} onChange={event => setEmail(event.target.value)} className="form-control" type="email" id="reg-email" required />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} className="form-control" type="password" id="reg-pass" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input placeholder="Confirm Password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} className="form-control" type="password" id="reg-pass-confirm" required />
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button className="btn" type="submit" onClick={register} >Register</button>
                                    </div>
                                    <p className="outer-link">Already have an account? <a href="/login">Login Now</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register
