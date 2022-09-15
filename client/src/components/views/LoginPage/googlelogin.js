import React from "react";
import { GoogleLogin } from 'react-google-login';
import axios from "axios";

function LoginByGoogle(props) {
    const responseGoogleSuccess = async (response) => {
        try {
          const result = await  axios({
            method: 'POST',
            url: `${process.env.server_url}/googlelogin`,
            data: { idToken: response.tokenId }
          });
          console.log(result);
  
        } catch (error) {
          console.log(error);
        }
    }
    const responseGoogleError = (response) => {
            console.log(response)
    }
    return (
        <div style = {props.style}>
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                buttonText="login by google"
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleError}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    );
}

export default LoginByGoogle;