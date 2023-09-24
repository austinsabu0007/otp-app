import React from "react";
import { app } from "./config/firebase";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";

const auth = getAuth(app);
class App extends React.Component {
  handlechange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  configureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("recap verified");
      },
    });
  };
  onSignInSubmit = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = "+91" + this.state.mobile;
    console.log(phoneNumber);

    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("okey");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
      });
  };
  onSubmitOTP = (e) => {
    const code = this.state.otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("user okey");
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };
  render() {
    return (
      <div>
        <h2>Login form</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input
            type="number"
            name="mobile"
            placeholder="Moblie number"
            required
            onChange={this.handlechange}
          />
          <button type="submit">submit</button>
        </form>
        <h2>otp login</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input
            type="number"
            name="otp"
            placeholder="otp number"
            required
            onChange={this.handlechange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
export default App;
