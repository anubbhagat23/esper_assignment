import React from 'react';
import { Link } from "react-router-dom";
import './styless.css';

export default class SidePanel extends React.Component {
    render(){
        return(
            <div className="container sidepanel-container shadow">
               <ul>
                   <li>
                   <Link
                        to='/devices'
                        className="sidelist"
                    >
                       <i className="fa fa-tablet" aria-hidden="true"></i> Devices
                    </Link>
                   </li>
                   <li>
                   <Link
                        to='/groups'
                        className="sidelist"
                    >
                       <i class="fa fa-object-group" aria-hidden="true"></i> Groups
                    </Link>
                   </li>
               </ul>
            </div>
        )
    }
}