import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class About extends Component {
  render() {
    return (
     <div className="add">
     	<h3>Welcome, this is a todo list, where you can login and store your pending list, giving you on the list you will have a sublist, thanks for whatching it and here the repo's</h3>
     	<ul className="flex-container">
     		<li className="rep btn btn-default"><Link to="https://github.com/Raethandres/todolist-firebase">FRONT</Link></li>
     		<li className="rep btn btn-default"><Link to="https://github.com/Raethandres/todolist-back">BACK</Link></li>
     	</ul>
     	<h4>just in the login enter a email and password and start</h4>
     	
      </div>
    );
  }
}

