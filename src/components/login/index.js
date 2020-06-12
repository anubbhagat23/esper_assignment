import React, {useState} from 'react';
import './styles.css';
import { LOGIN_URL } from '../../services/constant';
import axios from 'axios'; 
import { useHistory } from "react-router-dom";

export default function SignIn(props) {
    const [loginId, setLoginId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const history = useHistory();

    const headers = {
        'Content-Type': 'application/json'
      }
    
    const handleSubmit = (e) => {
        axios.post(LOGIN_URL, {username: loginId, password: userPassword}, {
            headers: headers
          })
          .then((response) => {
              if(response && response.data) {
                localStorage.setItem('USERINFO', JSON.stringify(response.data));
                history.push('/devices');
              }
          })
          .catch((error) => {
            console.log(error)
          })
    }

    return (
        <div className="loginScreen row">
            <div className="col-sm-2 mb-4">
                <img src="https://uhgsm.esper.cloud/static/media/shoonya-logo-white.84769a53.svg" alt="logo"/>
            </div>
            <div className="col-sm-3 text-center mb-2">
                <h2 className="text-white">Login to your account</h2>
            </div>
            <div className="login_container col-sm-3">
                <div className="col-sm-10">
                    <div className="form-group">
                        <input className="form-control" type="text" name="loginid" id="loginid" placeholder="Enter username"
                        value={loginId} onChange={(e)=>setLoginId(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="userpassword" id="userpassword" placeholder="Enter password"
                        value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}></input>
                    </div>
                    <button className="btn btn-primary w-100" id="submit" disabled={(loginId.length < 1 || userPassword.length < 1)} onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    );
}