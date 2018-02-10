import React, { Component } from 'react';
import List from './list'
import Status from './status.js'
import {addList,fetchData} from "../redux/actions/listActions"
import {Redirect} from "react-router-dom"


export default class Home extends Component {
    
	constructor(props){
		super(props)
    this.state={value:"",redirect:false}
    this.handleChange = this.handleChange.bind(this)
  
	}

	add(){
    this.props.dispatch(addList(this.state.value))
    this.setState({value:""});
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }



  render() {
    console.log(this.props.list)
   return (
    <div>
     <div className="add">
      <input className="form-control" type="text" value={this.state.value} onChange={this.handleChange}/>
      <p className="btn btn-default" onClick={this.add.bind(this)} >add</p>
      </div>
      <div>
      	<ul className="flex-container">
      	 {this.props.list.map((title,i)=><List  id={title.id} key ={i} title={title.name}  dispatch={this.props.dispatch} />)}
      
      	</ul>
      <Status/>
      </div>
      </div>
    );
  }

  
}




