import React, { Component } from 'react';
import './App.css';
import Profile from './Profile';
import axios from 'axios';
import Loader from './Loader';

class App extends Component {
    state={data:[],Loader:true}
    componentDidMount=async()=>
   {
       const res=await axios.get('https://jsonplaceholder.typicode.com/users');
       //console.log(res.data);
       
       this.setState({data:res.data,Loader:false});
   }
   removeItem=(id1)=>{
    
    console.log(id1);
    const dataSource = this.state.data.filter(item =>{
      return item.name !== id1
    })
    //console.log(dataSource);
   this.setState({data:[...dataSource]});
   console.log(dataSource);
   

  
   }


  render() {

    if(this.state.Loader)
       {
           return(
               <Loader />
           );
       }
       
    return (
      

        <Profile data={this.state.data} removeItem={this.removeItem} />
    
    );
  }
}

export default App;