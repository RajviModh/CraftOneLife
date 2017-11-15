import React, {Component} from 'react';
import * as API from '../api/API';
import ImageGridList from "./ImageGridList";

class BookDetails extends Component{
    componentDidMount() {
        var data={book_name:"a"};
        alert("in book details " +JSON.stringify(data));
        API.getBookDetails(data)
            .then((data) => {
                alert(JSON.stringify(data));
                this.setState({
                    bookName: data.bookName
                });
            });
    };

    render() {
        return (
            <div className="row justify-content-md-center">
            <div className="col-md-5">

            </div>
            <div className="col-md-7">

            </div>
            </div>
        );
    }
}
export default BookDetails;