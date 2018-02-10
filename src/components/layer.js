import React, { Component } from 'react';

import {Switch,Route,BrowserRouter,Link} from "react-router-dom"
import Home from './home'
import { withRouter } from 'react-router-dom'

import {fetchData} from "../redux/actions/listActions"
import {connect} from "react-redux"
import Router from 'react-router-dom/Router';

class Layer extends Component {

  componentWillMount(){
    this.props.dispatch(fetchData())
  }
  render() {
    return (
      
    	<div>
        <h1>TODOS</h1>
    	<Switch>
       
    	<Route exact path="/" render={props => <Home {...this.props} />}/>
       </Switch>
       

     	
     
     	</div>
        
    );
  }
}
export default withRouter(connect((store)=>{return{list:store.list.list,left:store.list.left,complet:store.list.complet}})(Layer))
