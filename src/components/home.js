import React, { Component } from 'react';
import List from './list'
import Status from './status.js'
import {addList,checkAll} from "../redux/actions/listActions"

export default class Home extends Component {
    
	constructor(props){
		super(props)
    this.state={value:"",redirect:false,list:this.props.list}
    this.handleChange = this.handleChange.bind(this)
  }

	add(){
    this.props.dispatch(addList(this.state.value))
    this.setState({value:""});
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  onKeyPress(e){
    if (e.key === 'Enter') {
        this.setState({upd:false})
        this.props.dispatch(addList(this.state.value))
        this.setState({value:""});
    }
}

onClick(){
 this.props.dispatch(checkAll())

}


  render() {
   return (
    <div className="col">
      <Status left={this.props.left} complet={this.props.complet} dispatch={this.props.dispatch}/>    
     <div className="row">
     <p  className="item ch" onClick={this.onClick.bind(this)} ><i className="fa fa-check" aria-hidden="true"></i></p>
      <input className="form-control" type="text" placeholder="new item and key enter" value={this.state.value} onChange={this.handleChange} onKeyPress={this.onKeyPress.bind(this)}/>
      </div>
      <div className="col">
      	<ul className="col">
      	 {this.props.list.map((title,i)=><List  id={title.id} key ={title.id} title={title.name} check={title.uready} dispatch={this.props.dispatch} />)}
      
      	</ul>
      </div>
      </div>
    );
  }

  
}




