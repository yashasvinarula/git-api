const initialState = {
  user: {},
  loading: false,
  errors: {}
};

export default function(state = initialState, action){
  switch (action.type){
    case 'USER_LOADING':
      return {
        loading: true
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        errors: {},
        loading: false
      }
    case 'GET_ERRORS':
      return {
        user: {},
        errors: action.payload,
        loading: false
      }
      case 'CLEAR_USER':
        return initialState;
    default:
      return initialState;
  }
}
