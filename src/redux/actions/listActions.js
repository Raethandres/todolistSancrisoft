import {list} from "../../Data.json"

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
		payload: json
	}
};

function clear() {
	return {
		type: "CLEAR",
		payload: 0
	}
};


function Status(json) {
	return {
		type: "ITEM_LEFT",
		payload: json
	}
};

function FilterUp() {
	return {
		type: "FILTER_UPDATE",
		payload: 0
	}
};

function Filter(json) {
	console.log(json)
	return {
		type: "FILTER",
		payload: json
	}
};

function chALL() {

	return {
		type: "CHECK_ALL",
		payload: 0
	}
};

function update(dispatch){
	dispatch(Status())
	dispatch(FilterUp());
	
}

export function addList(item){
	return function(dispatch) {
		dispatch(addListT(item))
		update(dispatch)
	}
}


export function deleteList(item){
	return function(dispatch) {
		dispatch(deleteL(item))
		update(dispatch)
		
		
	}
}
export function fetchData() {
	return function(dispatch) {
		dispatch(receiveData(list));
		update(dispatch)
		dispatch(Status())
	}
}

export function updateList(item){
	return function(dispatch) {
		dispatch(updateL(item));
		update(dispatch)
		
	}
}

export function filterList(filter){
	console.log(filter)
	return function(dispatch) {
		dispatch(Filter(filter));
	}
}

export function clr(filter){
	console.log(filter)
	return function(dispatch) {
		dispatch(clear(filter))
		update(dispatch)
	}
}

export function checkAll(){
	return function(dispatch) {
		dispatch(chALL())
		update(dispatch)
	}
}
