import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom"
import Home from './home'
import { withRouter } from 'react-router-dom'
import {fetchData} from "../redux/actions/listActions"
import {connect} from "react-redux"
import "../css/index.css"
import "../css/font-awesome-4.7.0/css/font-awesome.css"
class Layer extends Component {

  componentWillMount(){
    this.props.dispatch(fetchData())
  }//Here the contents of the json are mounted, this calls a function to apply the redux action
  

  render() {
    return (
      
    	<section className="col">
      <div className="section">
        <h1 className="col">TODOS</h1>
    	<Switch>
       
    	<Route exact path="/" render={props => <Home {...this.props} />}/>
       </Switch>
       

     	
     </div>
     	</section>
        
    );//i used the react-router-sun because I dont want lose the good habit
  }
}
export default withRouter(connect((store)=>{return{list:store.list.listShow,left:store.list.left,complet:store.list.complet}})(Layer))//redux conection
