import React, {Component} from 'react';
import * as API from '../api/API';
import ImageGridList from "./ImageGridList";
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

class BooksAdventure extends Component{

    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    componentDidMount() {
        API.getImages()
            .then((data) => {
                alert(JSON.stringify(data));
                this.setState({
                    images: data
                });
            });
    };

    render() {
        return (
            <div>
                <ImageGridList images={this.state.images}/>
            </div>
        );
    }
}
export default BooksAdventure;