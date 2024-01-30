// Myprofile.js

import React from 'react';
import './myprofile.css'; // Import the CSS file

function Myprofile() {
    return (
        <div className="profile">
        <div className="container">
            <div className="row">
            <div className="top_div_edit">
            <div className="top">
            <h1>Edit Profile</h1>
            <p className='update_pad'>Update your information</p>
            </div>
            <div className="top">
            <button className="btn-Save">Save Changes</button>
            <button className="btn-cancel">Cancel</button>
            </div>
            </div>
                {/* First Column */}
                <div className="col-md-6 first_col">
                    {/* Basic Info Form */}
                    <h5>Basic Information</h5>
                    <div className="mb-5 basic_div">
                        
                        <form>
                            <div className="mb-3">
                                
                                <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
                            </div>
                            <div className="mb-3">
                                
                                <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" />
                            </div>
                           
                        </form>
                    </div>

                    {/* Change Password Form */}
                    <div>
                        <h5>SECURITY</h5>
                        <form>
                        <div className="Password_div">

                            <div className="mb-3">
                                
                                <input type="password" className="form-control" id="currentPassword" placeholder="Enter Current Password" />
                            </div>
                            <div className="mb-3">
                                
                                <input type="password" className="form-control" id="newPassword" placeholder="Enter New Password" />
                            </div>
                            <div className="mb-3">
                                
                                <input type="password" className="form-control" id="confirmNewPassword" placeholder="Confirm New Password" />
                            </div>
                            </div>
                           
                        </form>
                    </div>
                </div>

                {/* Second Column */}
                <div className="col-md-5  sec_col">
                
                    {/* Profile Avatar Section */}
                    <h5>Profile Avatar</h5>
                    <div className="mb-5 avtar_div">
                       
                        <div className="mb-3">
                            <img src="asset/Ellipse.png" alt="Profile Avatar" className="img-fluid profile-image" />
                        </div>
                        <div className="mb-3">
                            <button className="btn-secondary">Upload</button>
                            <button className="btn-danger">Remove</button>
                        </div>
                       
                    </div>
                    
                    <div className="plan_main_div">
                    <h5 className='plans'>PLANS</h5>
                    <div class="row plan_div">
        <div class="col-4">
            <p>Current Plan </p>
            <p>Expiring at </p>
            <p>Price </p>
        </div>
        <div class="col-2">
            <p>:</p>
            <p>:</p>
            <p>:</p>
        </div>
        <div class="col-4">
            <p>Basic</p>
            <p>29/10/2023</p>
            <p>₹399</p>
        </div>
        <div className="btn_plan">
        <button className="btn-Upgrade">Upgrade Plan</button>
        <button className="btn-Renew">Renew Plan</button>
        </div>
        </div>


    </div>



                    {/* <div class="col">
            <div class="d-flex align-items-center">
                <span class="me-2">Current Plan:</span>
                <span class="fw-bold">Basic</span>
            </div>
            <div class="d-flex align-items-center">
                <span class="me-2">Expiring at :</span>
                <span class="fw-bold">29/10/2023</span>
            </div>
            
        </div> */}




                </div>

               
            </div>
            
        </div>
        </div>
    );
}

export default Myprofile;
