import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
import { GET_DEVICE } from '../../services/constant';
import './styles.css';

const DeviceLists = ({data}) => {
  return(
      <div className="col-sm-3 group-card p-0 mb-2 mr-4">
      <div className="device-card-content">
        <div className="text-center w-100"><h6><i className="fa fa-desktop" aria-hidden="true"></i> {data.device_name}</h6></div>
        <div className="w-100">
          <div> <span className="mr-2"><i className="fa fa-android" aria-hidden="true"></i> Version: {data.softwareInfo.androidVersion} </span>
           <span><i class="fa fa-bandcamp" aria-hidden="true"></i> Brand: {data.hardwareInfo.brand}  </span>
           </div>
           <div> <span className="mr-2"><i class="fa fa-hand-o-right" aria-hidden="true"></i> Display: {data.displays.name} </span> <br/>
           <span ><i class="fa fa-hand-o-right" aria-hidden="true"></i> Manufacturer: {data.hardwareInfo.manufacturer} </span>
           </div>
        </div>
        <hr/>
        <div className="w-100 text-center">
          <button className="btn btn-primary btn-sm ">More Info</button>
        </div>
       
      </div>
  </div> 
  )
}

export default function Device() {
    const [deviceList, setDeviceList] = useState([]);
    useEffect(()=>{
        const USERINFO = localStorage && JSON.parse(localStorage.getItem('USERINFO'));
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${USERINFO.token}`
          }
        if(USERINFO){
            axios.get(GET_DEVICE + USERINFO.user.profile.enterprise + '/device/', {
                headers: headers
              })
              .then((response) => {
                  if(response && response.data) {
                    setDeviceList(response.data.results);
                    console.log('Devices', response);
                  }
              })
              .catch((error) => {
                console.log(error)
              })
        }
        }, [])
        return(
          <div className="row mt-4 m-0">
             <div className="col-sm-12"><h4>Devices</h4></div>
                <hr/>
              { deviceList.map(list => {
                  return(
                      <DeviceLists data = {list}></DeviceLists>
                  )   
              })}
          </div>
      );
}