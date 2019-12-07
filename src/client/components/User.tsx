import React from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/user'

const User: React.FC = ({ users, ...props } : any) => {
  
  React.useEffect(() => {
    props.fetchUsers()
  }, [])
  
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

const mapDispatchToProps = {
  fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(User)