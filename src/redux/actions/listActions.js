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

function Status(json) {
	return {
		type: "ITEM_LEFT",
		data: json
	}
};

function FilterUp() {
	return {
		type: "FILTER_UPDATE",
		data: 0
	}
};

function Filter(json) {
	return {
		type: "FILTER",
		data: json
	}
};



export function addList(item){
	return function(dispatch) {
		dispatch(addListT(item))
		dispatch(Status())
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
		dispatch(Status())
	}
}

export function updateList(item){
	console.log(item)
	return function(dispatch) {
		console.log("f")
		dispatch(updateL(item));
	}
}

export function updateFilter(){
	return function(dispatch) {
		dispatch(FilterUp());
	}
}

export function filterList(filter){
	return function(dispatch) {
		dispatch(Filter(filter));
	}
}

