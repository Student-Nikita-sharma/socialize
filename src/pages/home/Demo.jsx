import React, { useState } from 'react';
import '../../pages/home/demo.css';

function Demo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    function signUp() {
        let item = { name, email, password, confirmpassword };
        console.warn(item);

        fetch('', {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {

            }
        });
    }

    return (
        <>
            <section className='user_us'>
                <div className="container">
                    <div className="row">
                        <div className="sign_main_col col-12 col-lg-6 col-md-6">
                            <img className="sign_up" src="asset/SignUp image.png" alt="" />
                        </div>
                        <div className="login_main_col col-12 col-lg-4 col-md-6">
                            <h1 className="">Sign Up</h1>
                            <p className="dont_acunt">Already have an account?<a href=""> Login</a></p>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="account-input"
                                placeholder="Full Name"
                                name="name"
                                required=""
                            />

                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="account-input"
                                placeholder="Email Address"
                                name="email"
                                required=""
                            />

                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="account-input"
                                placeholder="Password"
                                name="password"
                                required=""
                            />

                            <input
                                type="password"
                                value={confirmpassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="account-input"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                required=""
                            />


                            <button className='sign_btn' onClick={signUp}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Demo;