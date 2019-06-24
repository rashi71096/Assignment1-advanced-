import React from 'react';
import Cards from './Cards';

const Profile=(props)=>
{
    const prodata=props.data.map((info)=>{
        return <Cards key={info.id} data={info} removeItem={props.removeItem} />
                
    });
    return <div>{prodata}</div>
};

export default Profile;