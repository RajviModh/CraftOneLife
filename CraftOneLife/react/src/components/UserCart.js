import React, {Component} from 'react';
import * as API from '../api/API';

class UserCart extends Component{

    state={
        cartList:[],
        quantity:'',
        bookId:'',
        quantiy:''
    }
    componentWillMount() {

        this.getDetails();

    };
    getDetails = () =>{
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id};
        API.getCartDetails(payload)
        .then((res) => {
          //  alert("back in handle cart delete response : " + JSON.stringify(res));
            if(res.status==='201'){
                this.setState({
                    cartList: res.data
                })
            }
    });
    };

    handleCartDelete = (payload) =>{
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id, book_id:this.state.bookId};
        alert("in payload" + JSON.stringify(payload));
        API.doHandleCartDelete(payload)
            .then((res) => {
              //  alert("back in handle cart delete response : " + JSON.stringify(res));
                if (res.status === '201') {
                    alert("Deleted succesfully");
                }
                else if (res.status === '401') {
                    this.setState({
                        message: JSON.stringify(res.errors)
                    });
                    console.log(this.state.message);

                }

            })

    };

    render() {
        console.log("in render _--------" + this.state.cartList);
        return (
            <div className="col-sm-10 col-md-10">
                <h1>Continue Shopping</h1>
                <h3><i>With each sale a majority of the proceeds goes directly back to the artist who created the original work.</i></h3>

                <br/>
                <br/>
                <div className="row">
                <h5 style={{textAlign:'left'}}>Product</h5>
                    &nbsp;&nbsp;&nbsp;
                <h5 style={{textAlign:'left'}}>Desciption</h5>
                </div>
                <hr/>
                <div className="row">
                    { this.state.cartList.map(tile => (


                        <div className="col-md-12">
                            <div className="list-group-item clearfix">
                                <div className="pull-left">
                                    <img src={"data:image/jpeg;base64,"+tile.bookTilePath} height={100} width={200} alt={tile.bookTilePath} />
                                </div>
                                <div className="pull-left">
                                    <h4 className="list-group-item-heading">{tile.bookName}</h4>
                                    <p className="list-group-item-text">{tile.bookDesc}</p>
                                </div>
                                <div className="pull-right" style={{width:300}}>


                                    <input
                                        type="text"
                                        label="quantity"
                                        placeholder=""
                                        style={{width: 50}}
                                        value={tile.bookQty}
                                        onChange={(event) => {
                                            this.setState({
                                                quantity: event.target.value
                                            });
                                        }}
                                    />
                                    <button
                                        className="btn btn-success"
                                        type="button"
                                        onClick={() => this.handleCartDelete(this.state)}>
                                        +
                                    </button>
                                    <button
                                        className="btn btn-success"
                                        type="button"
                                        onClick={() => this.handleCartDelete(this.state)}>
                                        -
                                    </button>
                                    <button className="btn btn-success" onClick={()=>this.handleCartDelete(this.state)}> Delete </button>

                                </div>

                                <div className="row">



                                </div>





                            </div>
                            <br/>
                        </div>
                    ))}

                        {/*{this.state.cartList.map((book, i) =>*/}
                            {/*<tr key={i}>{*/}
                                {/*(*/}


                                        {/*{book.book_name}&nbsp; {book.book_desc}*/}


                                {/*)}*/}
                                {/*<td style={{textAlign:'right'}}>*/}
                                {/*<div style={{textAlign:'right'}}>*/}
                                {/*<button*/}
                                    {/*className="btn btn-success"*/}
                                    {/*type="button"*/}
                                    {/*onClick={() => this.handleCartDelete(this.state)}>*/}
                                    {/*+*/}
                                {/*</button>*/}
                                {/*&nbsp;*/}
                                {/*<input*/}
                                    {/*className="form-control"*/}
                                    {/*type="text"*/}
                                    {/*label="quantity"*/}
                                    {/*placeholder=""*/}
                                    {/*style={{width:30}}*/}
                                    {/*value={this.state.quantity}*/}
                                    {/*onChange={(event) => {*/}
                                        {/*this.setState({*/}
                                            {/*quantity: event.target.value*/}
                                        {/*});*/}
                                    {/*}}*/}
                                {/*/>*/}

                                {/*<button*/}
                                    {/*className="btn btn-success"*/}
                                    {/*type="button"*/}
                                    {/*onClick={() => this.handleCartDelete(this.state)}>*/}
                                    {/*-*/}
                                {/*</button>*/}
                                {/*&nbsp;*/}
                                {/*<button*/}
                                {/*className="btn btn-success"*/}
                                {/*type="button"*/}
                                {/*onClick={() => this.handleCartDelete(this.state)}>*/}
                                {/*Delete*/}
                            {/*</button>*/}
                                {/*</div>*/}


                        {/*)}*/}


                        <br/>



                </div>
            </div>
        )
    }
}
export default UserCart;