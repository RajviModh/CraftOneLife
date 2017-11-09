import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import '../css/bootstrap.css';
import adrian from '../images/Adrian.png';

class artistDetails extends Component{
    render() {
        return (
            <div>
            <div className="col-sm-4 col-md-4">
                <img style={{width:270, height:250}} src={adrian}/>
            </div>
            <div className="col-sm-8 col-md-8">

            </div>
            </div>
        );
    }
}
export default artistDetails;