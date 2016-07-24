import actions from '../actions'
import '../lib/util'


const token = (state = '', action) => {
  switch (action.type) {
    case actions.SET_TOKEN:
      return action.token
    default:
      return state
  }
}

export default token
