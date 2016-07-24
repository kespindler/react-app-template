import { HOSTNAME } from '../constants'
import axios from 'axios'


export const UPDATE_TASK = 'UPDATE_TASK'


export function updateTask(token, uuid, params) {
  return dispatch => {
    params.uuid = uuid
    dispatch({type: UPDATE_TASK, task: params})
    axios({
      url: `${HOSTNAME}tasks/${uuid}?token=${token}`,
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      data: params
    }).then(data => dispatch({type: UPDATE_TASK, task: data.data}))
  }
}
