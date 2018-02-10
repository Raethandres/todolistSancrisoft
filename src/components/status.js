import React, { Component } from 'react';
import {addList,fetchData} from "../redux/actions/listActions"


export default class Status extends Component {
    
	constructor(props){
    super(props)
    this.state={value:"",redirect:false}
	}


  render() {
   return (
    <div>
     <p>status</p>
     <p>conut</p>
     <p>filter</p>
     <p>clear</p>
    </div>
    );
  }

  
}




