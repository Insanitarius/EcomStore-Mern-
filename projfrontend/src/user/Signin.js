import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signin = () => {
  const signIpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-white">Email</label>
              <input className="form-control" type="email" />
            </div>
            <div className="form-group">
              <label className="text-white">Password</label>
              <input className="form-control" type="passowrd" />
            </div>
            <button className="btn btn-success btn-block">Sign In</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign in Page" description="A page for user to sign in!">
      {signIpForm()}
    </Base>
  );
};

export default Signin;
