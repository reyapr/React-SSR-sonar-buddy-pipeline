import React from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/user'

const User: React.FC = ({ users, ...props } : any) => {
  return (
    <div>
      <div>
        {
          users.map((user: any, key: any) => (
            <ul key={key}>
              <li>{user.name}</li>
            </ul>
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  users: state.users
})

export const loadData = (store: any) => {
  return store.dispatch(fetchUsers())
}

export default connect(mapStateToProps, null)(User)