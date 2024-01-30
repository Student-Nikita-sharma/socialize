import React from "react";
import Header from "../../components/header/Header";
import Footerr from "../../components/footer/footerr";
import "../../pages/home/contact.css";

function contact() {
  return (
    <>
      <Header />

      <section className="contact_sec">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-7">
              <img src="asset/Contact.png" alt="" />
            </div>

            <div className="col-12 col-md-7 col-lg-4">
              <h1>How can we help you?</h1>
              <p>
                We love hearing from you. Reach out below and let us know how we
                can help.
              </p>

    <form className="user-form">
                <div className="form-group">
                  <input type="text" name="fullName" placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="emailAddress"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea name="message" placeholder="Message"></textarea>
                </div>
                <button className="btn_cont" type="submit">Submit</button>
    </form>
            </div>
          </div>
        </div>
      </section>

      <Footerr />
    </>
  );
}

export default contact;
