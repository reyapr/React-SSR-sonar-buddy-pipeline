import { FETCH_USER } from '../actions/user'

export default (state = [], action: any) => {
  switch(action.type){
    case FETCH_USER : {
      return action.payload.data
    }
    default: {
      return state
    }
  }
} 