import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import PageBanner from '../PageBanner/PageBanner';
const Login = () => {
    const { loginWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleLogin = () => {
        loginWithGoogle().then((result) => {
          history.push(redirect_uri);
        });
    }
    return (
      <div className="bg-light ">
        <PageBanner text="Please Login Here"></PageBanner>
        <div className="d-flex justify-content-center align-item-center">
          <div className=" bg-dark text-center rounded  py-3 px-5 m-3">
            <h3 className="logo text-warning display-2">Connect with us</h3>
            <p className="text-white">Food Sender</p>
                    <button className="btn fw-normal btn-light"
                    onClick={handleLogin}>
              <img src="https://i.ibb.co/HPd5k52/pngwing-com.png" width='25' alt="" />{" "}
              Login with google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;