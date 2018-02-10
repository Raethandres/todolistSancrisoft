import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {deleteList,updateList} from '../redux/actions/listActions'

export default class List extends Component {
    constructor(props){
        console.log(props)
        super(props)
        this.state={done:false,value:props.title,upd:false}
    }

    onChange(event){
        let name=event.target.name
        let val=event.target.type === 'checkbox' ? event.target.checked : event.target.value
        console.log(val)
        this.setState({[name]:val})

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
            this.props.dispatch(updateList({name:this.state.value,id:this.props.id}))
        }
    }
  

	render() {
        let upd=this.state.upd
    	return (

     	<li className="navigation">
        <p onClick={this.onChange.bind(this)}  className="flex-item"><input name="done" type="checkbox" checked={this.state.done} onChange={this.onChange.bind(this)} /></p>
        {upd ? (
            <input name="value" value={this.state.value} type="text" onChange={this.onChange.bind(this)} onKeyPress={this.onKeyPress.bind(this)} />
            ) : (
            <p  className="flex-item" onDoubleClick={this.onClick.bind(this)}>{this.state.value}</p>
         )}
        <p  className="flex-item" onClick={this.Delete.bind(this)}><span className="glyphicon glyphicon-remove"></span></p>
     	</li>
    	);
  }
}

