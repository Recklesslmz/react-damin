/**
 * Created by limuzi on 2017/8/28.
 */
import dva from 'dva'
export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, {payload: id}){
      return state.filter(item => item.id !== id)
    }
  }
}
