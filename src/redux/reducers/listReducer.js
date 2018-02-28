export default function reducer(state={
	list:[],
	left:0,
	complet:0,
	listShow:[],
	filter:0,
	error:null,
	ch:false,
},action) {
	switch (action.type){
		case "FETTCH_LIST":{
			return{...state,fetching:true,list:[...state.list]}
		}
		
		case "FETTCH_ERR":{
			return{...state,fetching:true,list:[...state.list]}
		}
		
		case "FETTCH_LIST_FULFIELLED":{
			return{
				...state,
				fetching:false,
				feched:true,
				list:action.payload
			}
		}
		case "ADD_LIST":{
			let data=[...state.list]
			let newList={uready:true,name:action.payload,id:data[data.length-1]===undefined ? 0:data[data.length-1].id+1}
			data.push(newList)
			return{
				...state,
				list:data,

			}
		}
		case "CHECK_ALL":{
			let data=[...state.list]
			data.forEach(i=> {i.uready=state.ch})

			return{
				...state,
				list:data,
				ch:!state.ch,

			}
		}
		case "ITEM_LEFT":{
			let data=[...state.list]
			let count=0
			data.forEach(i=> {if (i.uready) {
				count++
			}})
			let countC=data.length-count

			return{
				...state,
				left:count,
				complet:countC,

			}
		}
		case "FILTER":{
			return{
				...state,
				listShow:state.list.filter(list=>list.uready!==action.payload),				
				filter:action.payload,
			}
		}

		case "FILTER_UPDATE":{
			return{
				...state,
				listShow:state.list.filter(list=>list.uready!==state.filter),
			}
		}
		
		
		case "UPDATE_LIST":{
			const{id}=action.payload
			const newList=[...state.list]
			const listToUpdate=newList.findIndex(list=>list.id===id)
			newList[listToUpdate]=action.payload;

			return{
				...state,
				list:newList,
			}

		}
		case "DELETE_LIST":{
			return{
				...state,
				list:state.list.filter(list=>list.id!==action.payload),
			}
		}

		case "CLEAR":{
			return{
				...state,
				list:state.list.filter(list=>list.uready!==false),
			}
		}
		
	}
	return state 
}
