const initialState = {
	selectedTab : 'SIGN_IN',
	isFetching: false,
	error: false
};
let loginScreenReducer = (state=initialState,action)=>{
	switch(action.type){
		case 'SIGN_IN_TAB_CLICKED':
			state= {
				...state,
				selectedTab: 'SIGN_IN'
			}
			break;
		case 'SIGN_UP_TAB_CLICKED':
			state= {
				...state,
				selectedTab: 'SIGN_UP'
			}
			break;
		case 'SIGN_IN_BUTTON_CLICKED':
			state= {
				...state,
				isFetching: true,
				error:false
			}
			break;
		case 'SIGN_UP_BUTTON_CLICKED':
			state= {
				...state,
				isFetching: true,
				error:false
			}
			break;
		case 'SIGN_UP_SUCCESSFUL' :
			state = {
				...state,
				isFetching:false
			}	
			break;
		case 'SIGN_IN_SUCCESSFUL' :
			state = {
				...state,
				isFetching:false
			}	
			break;
		case 'SIGN_UP_FAIL':
			state={
				...state,
				error:true,
			}
			break;
		case 'SIGN_IN_FAIL':
			state={
				...state,
				error:true,
			}
			break;
	}
	return state;
}

export default loginScreenReducer;