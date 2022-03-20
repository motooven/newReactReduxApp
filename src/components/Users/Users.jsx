import React from 'react'
import * as axios from "axios";


class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        debugger
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} alt="ph"/>
                    </div>
                    <div>
                        {u.followed
                        ? <button onClick={ ()=> {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={ () => {
                                this.props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users