import React from 'react';
import SidePanel from '../sidepanel';
import Routes from '../../routing';
import './style.css'
import Header from '../header';

export default function Dashboard (props) {
    const getFullScreenActiveState = (location) => {
        const routeToBeChecked = [
          '/',
          '/login'
        ];
        if((location.split('/').length > 3 &&
          location.split('/')[3] === 'edit') ||
          routeToBeChecked.includes(location)) {
          return true;
        }
        return false;
      };
      const pathName = props.location ? props.location.pathname : '';
        const isFullScreenActive = getFullScreenActiveState(pathName);
        return(
           <div className="row">
                { !isFullScreenActive &&
                    <div className="sidePanel-container">
                        <SidePanel />
                    </div> 
                }
                <>
                
                <div className={isFullScreenActive ? 'col-sm-12': 'right-containt'}>
                <Header />
                        <div className="component-content"><Routes /></div>
                </div>
                </>
           </div>
        )
}