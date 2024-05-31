import React, { useState } from 'react'
import '../styles/signup.css'
import Login from './login'

const SignupWindow = ({ onClose }) => {

    const [showLogin, setShowLogin] = useState(false);

    const toggleLogin = () => {
      setShowLogin(!showLogin);
    };

    return (
        <div className="login-overlay">
            <div className="login-popup">

                            <div class="boxSign">

                                <div>
                                    <a className="loginlogoPicsSgn" href="/"> <img src={'./images/investlylogo.jpg'} alt="" /></a>
                                    <a className="loginlogoNameSgn" href="/">Investly</a>
                                </div>

                                <div className="NameDetails">
                                    <div class="details_boxSgn"><input id="fistname" class="FirstN" type="name"
                                            placeholder="First Name" />
                                    </div>
                                    <div class="details_boxSgn"><input id="lastname" class="LastN" type="name"
                                            placeholder="Last Name" />
                                    </div>
                                </div>
                                
                                <div class="details_boxSgn"><input id="userid" class="borderSgn" type="email" pattern=".+@globex\.com"
                                        placeholder="Email id" />
                                </div>
                                <div class="details_boxSgn"><input id="setpassword" class="borderSgn" type="password"
                                        placeholder="Set Password" />
                                </div>
                                <div class="details_boxSgn"><input id="confirmpassword" class="borderSgn" type="password"
                                        placeholder="Confirm Password" />
                                </div>

                                <div className="signBtnBox">
                                    <a className="signBtn"    href=""  id="login" onclick="login()">Signup</a>
                                    <a className="CancelBtnSgn" href="/" id="cancel" onclick="login()">Cancel</a>
                                </div>

                                <div class="alreadyacc">
                                    <a onClick={toggleLogin}>Already have account? Login now</a>
                                    {showLogin && <Login onClose={toggleLogin} />}
                                </div>

                            </div>


            </div>
        </div>
    );
}

export default SignupWindow
