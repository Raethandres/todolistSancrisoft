import React, { Component } from 'react';
import {filterList,clr} from "../redux/actions/listActions"


export default class Status extends Component {
    
	constructor(props){
    super(props)
    this.state={value:"",redirect:false,A:"btn sel",true:"btn",false:"btn"}
  }
  
  onClick(v){
    this.props.dispatch(filterList(v))
    this.setState({A:"btn",true:"btn",false:"btn"})
    this.setState({[v]:"btn sel"})
  }

  Clear(){
    this.props.dispatch(clr())
    
  }


  render() {
   return (
     <div className="col">
     <div className="row item">
     <p className="letf">{this.props.left} items left</p>
    </div>
    <div className="row">
    
    <div className="row item">
     <p  className={this.state.A} onClick={this.onClick.bind(this,"A")} >All</p>
     <p  className={this.state.false} onClick={this.onClick.bind(this,false)} >Active</p>
     <p  className={this.state.true} onClick={this.onClick.bind(this,true)} >Compled</p>
    </div>
    <div className="row item">
     <p className="btn" onClick={this.Clear.bind(this,false)}>Clear({this.props.complet})</p>
    </div>
    </div>
    </div>
    );
  }

  
}




