import tasks from './tasks'
import { clone } from '../lib/util'


// add your actions here to make them accessible from the root action import
// import 'actions'; actions.foo
const actions = clone(
  tasks
)

export default actions
