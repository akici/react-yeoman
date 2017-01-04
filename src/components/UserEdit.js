'use strict';

import React, { Component } from 'react';

class UserEdit extends Component {
    
    constructor(props) {
        super(props);
        this.state = {selectedUser: this.props.user};
    }

    render() {
        console.log(this.state.selectedUser);
        return (
            <div>
                <div className="user-edit">
                    <p>Name: <input
                        value={this.state.selectedUser.name}
                        onChange={event => this.setState({selectedUser: {name: event.target.value}})} />
                    </p>
                    <p>Address: <input
                        value={this.state.selectedUser.address}
                        onChange={event => this.setState({selectedUser: {address: event.target.value}})} />
                    </p>
                    <p>Age: <input
                        value={this.state.selectedUser.age}
                        onChange={event => this.setState({selectedUser: {age: event.target.value}})} />
                    </p>
                </div>
            </div>
        )
    }
}

export default UserEdit;