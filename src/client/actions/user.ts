import axios from 'axios'

export const FETCH_USER = 'FETCH_USER'

export const fetchUsers = () => async (dispatch: any) => {
  const res = await axios.get('https://react-ssr-api.herokuapp.com/users')
  
  dispatch({
    type: FETCH_USER,
    payload: res
  })
}