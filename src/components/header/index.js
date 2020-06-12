import React from 'react';
import './styles.css';
import { useHistory } from "react-router-dom";

export default function Header(props) {
        const history = useHistory();
        const handleSignOut = () => {
            localStorage.removeItem('USERINFO');
            history.push('/login')
        }
        return(
            <div className="header-container shadow">
                <div className="header-content row">
                    <div className="col-sm-9"> <h4>{'ESPER'}</h4></div>
                    <div className="col-sm-3 text-right profile_content"> <button onClick={handleSignOut} style={{float: 'left'}} className="btn btn-primary btn-sm">Sign Out</button></div>
                </div>
                
            </div>
        )
}