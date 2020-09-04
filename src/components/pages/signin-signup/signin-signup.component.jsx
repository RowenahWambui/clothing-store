import React from "react";
import SignIn from "../../signin/signin.component";
import SignUp from "../../signup/signup.component";

import "./signin-signup.styles.scss";

const SignInSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUpPage;
