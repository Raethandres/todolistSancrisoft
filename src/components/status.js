import React, { Component } from 'react';
import {addList,fetchData} from "../redux/actions/listActions"


export default class Status extends Component {
    
	constructor(props){
    super(props)
    this.state={value:"",redirect:false}
	}


  render() {
   return (
     <div className="add">
     
    <div className="navigation">
    <div className="navigation">
     <p>{this.props.left}</p>
     <p>items left</p>
    </div>
    <div className="navigation">
     <p>all</p>
     <p>Active</p>
     <p>Compled</p>
    </div>
    <div className="navigation">
     <p>clear</p>
     <p>{this.props.complet}</p>
    </div>
    </div>
    </div>
    );
  }

  
}




