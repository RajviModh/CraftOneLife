import React, {Component} from 'react';
import * as API from '../api/API';
import ImageGridList from "./ImageGridList";
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

class BooksAdventure extends Component{

    state={
        books:[]
    };


    componentDidMount() {

        API.getBookDetails()
            .then((res) => {
               // alert(JSON.stringify(res));
                this.setState({
                    books: res.data
                });
            });


    };

    addToCart = (bookdata) => {
        bookdata.user_id=localStorage.getItem("user_id");
        API.addToCart(bookdata)
            .then((res) => {
                alert("back in newer homepage : " + JSON.stringify(res));
                if (res.status === '201') {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        //username: userdata.username
                    });
                    //this.props.history.push("/artistwelcomepage");
                } else if (res.status === '401') {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-8">

                    { this.state.books.map(tile => (

                        <div>
                            {tile.bookName}
                        <img src={"data:image/jpeg;base64,"+tile.bookTilePath} height={100} width={200} alt={tile.bookTilePath}/>
                            <button onClick={()=>this.props.getBookDetails(tile)}></button>
                            <button onClick={()=>this.addToCart(tile)}>Add To Cart</button>
                        </div>


                    ))}




                </div>
            </div>
        );
    }
}
export default BooksAdventure;