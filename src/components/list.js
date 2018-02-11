import React, { Component } from 'react';
import {deleteList,updateList} from '../redux/actions/listActions'

export default class List extends Component {
    constructor(props){
        console.log(3)
        super(props)
        this.state={done:!this.props.check,value:this.props.title,upd:false}
    }
    

    onChange(event){
        let name=event.target.name
        let val=event.target.type === 'checkbox' ? event.target.checked : event.target.value
        console.log(val)
        this.setState({[name]:val})
        if(name==="done"){
            this.props.dispatch(updateList({name:this.state.value,id:this.props.id,uready:!val}))  
        }

    }

    onClick(){
        this.setState({upd:true})
    }

    Delete(){
        this.props.dispatch(deleteList(this.props.id))
        
    }

    onKeyPress(e){
        if (e.key === 'Enter') {
            this.setState({upd:false})
            this.props.dispatch(updateList({name:this.state.value,id:this.props.id,uready:this.state.done}))
        }
    }
  

	render() {
        console.log(this.props)
        let upd=this.state.upd
    	return (

     	<li className={!this.props.check+" row"}>
        <p onClick={this.onChange.bind(this)}  className="item"><input name="done" type="checkbox" checked={!this.props.check} onChange={this.onChange.bind(this)} /></p>
        {upd ? (
            <input name="value" value={this.state.value} type="text" onChange={this.onChange.bind(this)} onKeyPress={this.onKeyPress.bind(this)} />
            ) : (
            <p  className=" item" onDoubleClick={this.onClick.bind(this)}>{this.state.value}</p>
         )}
        <p  className="item" onClick={this.Delete.bind(this)}><i className="fa fa-times" aria-hidden="true"></i></p>
     	</li>
    	);
  }
}

