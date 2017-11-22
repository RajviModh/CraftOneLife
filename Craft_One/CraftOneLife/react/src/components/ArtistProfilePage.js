import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import * as API from '../api/API';

class ArtistProfilePage extends Component{

    state = {
        fname : '',
        lname : '',
        email:'',
        contact_no:'',
        about_me:''
    };

    componentWillMount(){
         API.fetchUserProfile({}).then((response) => {
             alert("fetch profile response" + JSON.stringify(response.data))
             this.setState({
                 //profile_pic:response.data.profile_pic,
                 fname:response.data.fname,
                 lname:response.data.lname,
                 contact_no:response.data.contact_no,
                 email: response.data.email,
                 about_me: response.data.about_me
             })
             console.log("current state ",this.state)
         });

    };
    saveUserProfile = (userdata) => {
        alert("I am going to save profile" + JSON.stringify(userdata))
        const payload = new FormData();
        payload.append('mypic', this.refs.mypic.files[0]);
        payload.append('fname',this.state.fname)
        payload.append('lname',this.state.lname)
        payload.append('email',this.state.email)
        payload.append('contact_no',this.state.contact_no)
        payload.append('about_me',this.state.about_me)



        //var data = {userdata:userdata,payload:payload}

        API.saveUserProfile(payload)
            .then((status) => {
                console.log("response after saving profile ",status)
                if (status.status === '201') {
                    console.log("User Profile Updated.")
                    alert("Your Profile has been updated.")
                } else if (status === 401) {
                    console.log("Error in user profile update")
                }
            });
    };
    render(){
        return(
            <div className="col-sm-7 col-md-7">
                <form>
                    <div className="form-group">
                        <hr/>
                    </div>
                    <div className="input-field">

                        <input className="form-control"
                                                    placeholder="First Name"
                                                    type="text"
                                                    value={this.state.fname}
                                                    onChange={(event)=>{
                                                        this.setState({
                                                            fname:event.target.value
                                                        });
                                                    }}
                                                    required
                                                    autoFocus
                />
                    </div>
                    <br/>
                    <div className="input-field">
                        <input className="form-control"
                               placeholder="Last Name"
                               type="text"
                               value={this.state.lname}
                               onChange={(event)=>{
                                   this.setState({
                                       lname:event.target.value
                                   });
                               }}
                               required
                        />
                    </div>
                    <br/>

                    <br/>
                    <div className="input-field">
                        <input className="form-control"
                               placeholder="Email no"
                               type="text"
                               value={this.state.email}
                               onChange={(event)=>{
                                   this.setState({
                                       email:event.target.value
                                   });
                               }}
                               required

                        />

                    </div>
                    <br/>

                    <br/>

                    <div className="input-field">
                        <input className="form-control"
                            placeholder="Phone number"
                            type="text"
                            value={this.state.contact_no}
                            onChange={(event)=>{
                                this.setState({
                                    contact_no:event.target.value
                                });
                            }}
                            required
                        />
                    </div>
                    <br/>

                    <br/>

                    <div className="input-field">
                        <input className="form-control"
                               placeholder="Give your brief description"
                               type="text"
                               value={this.state.about_me}
                               onChange={(event)=>{
                                   this.setState({
                                       about_me:event.target.value
                                   });
                               }}
                               required

                        />
                    </div>
                    <br/>

                    <br/>
                    <div className="input-field">
                        <input
                               className={'fileupload'}
                               type="file"
                               ref="mypic"
                               name="mypic"
                        />

                    </div>
                    <br/>

                    <br/>

                    <div className="input-field">
                        <button className="btn btn-success" onClick={() => this.saveUserProfile(this.state)}>Update
                        </button>
                    </div>
                </form>
            </div>

        );
    }
}
export default ArtistProfilePage;