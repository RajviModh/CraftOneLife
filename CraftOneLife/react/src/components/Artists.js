import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import '../css/bootstrap.css';

import adrian from '../images/Adrian.png';

class Artists extends Component {
    render() {
        return (
            <div>
                <h1>MEET CRAFTONELIFE Artists</h1>
                <h3>CraftOneLife supports artists facing homelessness or disabilities. Browse stunning stories written by them and read their inspiring stories.</h3>
            <div className="col-sm-3 col-md-3">
                <a href="/artistDetails"><img style={{width:270, height:250}} src={adrian}/></a>
            </div>

            <div className="col-sm-3 col-md-3">
            <a href="/artistDetails"><img style={{width:270, height:250}} src={adrian}/></a>
        </div>
        <div className="col-sm-3 col-md-3">
            <a href="/artistDetails"><img style={{width:270, height:250}} src={adrian}/></a>
        </div>
        <div className="col-sm-3 col-md-3">
            <a href="/artistDetails"><img style={{width:270, height:250}} src={adrian}/></a>
        </div>
            </div>
        );

    }
}
export default Artists;