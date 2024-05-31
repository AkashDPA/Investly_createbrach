import React, { useState } from 'react'
import '../styles/login.css'
import Signup from './signup'

const LoginWindow = ({ onClose }) => {
    const [showSignup, setShowSignup] = useState(false);

    const toggleSignup = () => {
        setShowSignup(!showSignup);
    };

    return (
        <div className="login-overlay">
            <div className="login-popup">

                <div class="boxLogin">
                    <div>
                        <a className="loginlogoPicsLgn" href="/"> <img src={'./images/investlylogo.jpg'} alt="" /></a>
                        <a className="loginlogoNameLgn" href="/">Investly</a>
                    </div>

                    <div class="details_boxLgn"><input id="userid" class="borderLgn" type="email" pattern=".+@globex\.com"
                            placeholder="Email id" />
                    </div>
                    <div class="details_boxLgn"><input id="password" class="borderLgn" type="password"
                            placeholder="Password" />
                    </div>

                    <div className="loginBtnBox">
                        <a className="logBtn"    href=""  id="login" onclick="login()">Login</a>
                        <a className="CancelBtnLgn" href="/" id="cancel" onclick="login()">Cancel</a>
                    </div>

                    <div class="NoaccountLgn">
                        <a onClick={toggleSignup}>Don't have an account? Sign up now</a>
                        {showSignup && <Signup onClose={toggleSignup} />}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoginWindow
