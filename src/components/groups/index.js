import React, {useEffect, useState} from 'react';
import axios from 'axios'; 
import { GET_GROUPS } from '../../services/constant';
import './styles.css'

const GroupLists = ({data}) => {
    return(
        <div className="col-sm-3 group-card p-0 mb-2 mr-4">
        <div className="group-card-content">
            <div className="group-card-icon">
                {data.name.charAt(0).toUpperCase()}
            </div>
            <div className="group-card-description ml-2">
                {data.name}
            </div>
        </div>
        <hr/>
        <div className="group-card-footer text-center">
            <a href="">View Details</a>
        </div>
    </div> 
    )
}

export default function Groups() {
    const [groupList, setGroupList] = useState([]);
    useEffect(()=>{
        debugger
        const USERINFO = localStorage && JSON.parse(localStorage.getItem('USERINFO'));
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${USERINFO.token}`
          }
        if(USERINFO){
            axios.get(GET_GROUPS + USERINFO.user.profile.enterprise + '/devicegroup/', {
                headers: headers
              })
              .then((response) => {
                  if(response && response.data) {
                    setGroupList(response.data.results);
                    console.log('Groups', response);
                  }
              })
              .catch((error) => {
                console.log(error)
              })
        }
        }, [])
        return(
            <div className="row mt-4 m-0">
                <div className="col-sm-12"><h4>Groups</h4></div>
                <hr/>
                { groupList.map(list => {
                    return(
                        <GroupLists data = {list}></GroupLists>
                    )   
                })}
            </div>
        );
}