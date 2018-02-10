import {list} from "../../Data.js"

export function fetchList() {
	return{
		type:"FETTCH_LIST",
	}
}

function receiveData(json) {
	return{
		type: "FETTCH_LIST_FULFIELLED",
		payload: json
	}
};

export function addListT(json){
	return{
		type:"ADD_LIST",
		payload:json
		}
}

export function updateL(json){
	return{
		type:"UPDATE_LIST",
		payload:json
		}
}


function deleteL(json) {
	console.log(json,"del")
	return{
		type: "DELETE_LIST",
		payload: json
	}
};

function receiveError(json) {
	return {
		type: "FETTCH_ERR",
		data: json
	}
};


export function addList(item){
	return function(dispatch) {
		dispatch(addListT(item))
	}
}


export function deleteList(item){
	return function(dispatch) {
		dispatch(deleteL(item))
		
	}
}
export function fetchData() {
	return function(dispatch) {
		dispatch(receiveData(list.list));
	}
}

export function updateList(item){
	console.log(item)
	return function(dispatch) {
		console.log("f")
		dispatch(updateL(item));
	}
}

