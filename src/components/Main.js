require('normalize.css/normalize.css');
require('styles/App.css');

import React, { Component } from 'react';
import UserList from './UserList';
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';


class AppComponent extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            selectedUser: null,
            showUserEdit: false
        };
        console.log('Const');
    }

    componentWillMount() {
        console.log('Will Mount');
        this.getUsers();
    }

    componentDidMount() {
        console.log('Mount');
    }

    getUsers() {

        let users = [
            {id: 1, name: 'Ayberk Akici', address: 'Reinickendorfer Str. 49', age: 32},
            {id: 2, name: 'Ersin Keser', address: 'Tempelhofer Damm 36', age: 34}
        ];

        setTimeout( () => {
            this.setState({
                users: users,
                selectedUser: users[0]
            });
        }, 1000);
    }





    render() {

        console.log('render');

        return (
                <div>
                    <UserList users={this.state.users}
                              onUserSelect={(selectedUser) => {
                                  this.setState({selectedUser});
                                  this.setState({showUserEdit: false});
                              }} />
                    <UserDetail user={this.state.selectedUser}
                                onUserEdit={this.setState.bind(this)} />
                    {
                     this.state.showUserEdit ? <UserEdit user={this.state.selectedUser} /> : null
                    }
                </div>
        );
    }
}

/*AppComponent.defaultProps = {};*/

export default AppComponent;
