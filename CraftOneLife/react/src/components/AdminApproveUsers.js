import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import '../css/bootstrap.css';

import * as API from '../api/API'
import adrian from '../images/Adrian.png';

class AdminApproveUsers extends Component{

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: '',
        users:[]
    };

    componentWillMount(){
        API.getusersforapproval().then((res) => {
            this.setState({users:res});
        });
    }

    addApprovedUser(u)
    {

        API.approveuser(u.email).then((res) => {

            alert("User approved successfully");
        });
    }

    constructor(props)
    {
        super(props);
        //this.addApprovedUser=this.addApprovedUser.bind();


    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">

                    <div className="form-group">
                        <h1>Approve users</h1>
                    </div>

                    <tbody>
                    {this.state.users.map((u,index) =>
                        <tr className="row" key={u.email} >
                            <td>{u.email}</td>
                            <td><button onClick={()=>this.addApprovedUser(u)} className="btn btn-primary btn-sm"> Approve</button></td>
                        </tr>
                    )}
                    </tbody>


                </div>
            </div>
        );
    }
}

export default AdminApproveUsers;

/*import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API'

class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: '',
        users:[]
    };

    componentWillMount(){
        API.getusersforapproval().then((res) => {
            this.setState({users:res});
        });
    }

    addApprovedUser(u)
    {

        API.approveuser(u.email).then((res) => {

            alert("User approved successfully");
        });
    }

    constructor(props)
    {
        super(props);
        //this.addApprovedUser=this.addApprovedUser.bind();


    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">

                    <div className="form-group">
                        <h1>Approve users</h1>
                    </div>

                    <tbody>
                    {this.state.users.map((u,index) =>
                        <tr className="row" key={u.email} >
                            <td>{u.email}</td>
                            <td><button onClick={()=>this.addApprovedUser(u)} className="btn btn-primary btn-sm"> Approve</button></td>
                        </tr>
                    )}
                    </tbody>


                </div>
            </div>
        );
    }
}

export default Login;*/
