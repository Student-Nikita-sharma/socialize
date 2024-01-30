import React,{useState} from 'react'
// import { Link } from 'react-router-dom';
import '../../pages/home/signup.css'


function Signup() {

{
    const[ name,setName]= useState("")
    const[ email,setEmail]= useState("")
    const[ password,setpassword]= useState("")
   

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

                        
   <input className="account-input" placeholder="Full Name" name="name" type="text" required="" />
                                    
                              
   <input className="account-input" placeholder="Email Address" name="email" type="text" required="" />
                              
   <input className="account-input" placeholder="Password" name="password" type="text" required=""
  />


   <input className="account-input" placeholder="Confirm Password" name="pass" type="text" required="" />
 
              
             <button className='sign_btn'>Sign Up</button> 
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Signup;