import React, {Component} from 'react';
import * as API from '../api/API';

class UserCart extends Component{

    state={
        cartList:[],
        quantity:'',
        bookId:'',
        quantiy:'',
        total:0
    }
    componentWillMount() {

        this.getDetails();


    };
    getDetails = () =>{
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id};
        alert("in get details");
        API.getCartDetails(payload)
        .then((res) => {
          //alert("back in handle cart delete response : " + JSON.stringify(res));
            if(res.status==='201'){
                alert("dgdgd");
                this.setState({
                    cartList: res.data
                });
                var total=0;
                for(var i=0;i<this.state.cartList.length;i++)
                {
                    alert(typeof this.state.cartList[i].bookPrice);
                    var book = parseInt(this.state.cartList[i].bookPrice)*parseInt(this.state.cartList[i].bookQty);
                    total+=book;
                    //alert(this.state.cartList[i].price);
                }
                this.setState({total:total})
                //this.state.total=total
               // alert(this.state.total)
            }
    });
    };



    handleAddQuantity = (payload) =>{
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id, book_id:this.state.bookId};
        console.log("in payload" + JSON.stringify(payload));
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

    handleCartDelete = (payload) =>{
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id, book_id:this.state.bookId};
       console.log("in payload" + JSON.stringify(payload));
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

    handleCheckOut = (data) => {
        var user_id=localStorage.getItem("user_id");
        var payload=[];
        for(var i=0;i<this.state.cartList.length;i++){
            var payloadArr={
                book_id:data[i].bookId,
                quantity:data[i].bookQty
            };
            payload.push(payloadArr);
        }


        var payload={total:this.state.total, user_id:user_id, payload:payload};
        alert("in handlecheckout " +JSON.stringify(payload));

        API.doHandleCheckOut(payload)
            .then((res) => {
                //  alert("back in handle cart delete response : " + JSON.stringify(res));
                if (res.status === '201') {
                    alert("Added succesfully");
                    this.doEmptyCart();
                }

                else if (res.status === '401') {
                    this.setState({
                        message: JSON.stringify(res.errors)
                    });
                    console.log(this.state.message);

                }

            })

    };
    doEmptyCart = () =>{
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id};
        alert("in payload" + JSON.stringify(payload));
        API.doEmptyCart(payload)
            .then((res) => {
                 alert("back in handle cart delete response : " + JSON.stringify(res));
                if (res.status === '201') {
                    alert("Deleted succesfully");
                    this.getDetails();
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
        var total=0;
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
                                    <p className="list-group-item-text">{tile.bookPrice}</p>
                                    <p className="list-group-item-text">{tile.bookQty}</p>

                                    <p className="list-group-item-text">{tile.price}</p>

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
                                        onClick={() => this.handleAddQuantity(this.state)}>
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

                    ))

                    }
                    <p className="list-group-item-text">total : $ {this.state.total}</p>

                        <br/>



                </div>
                <div ><button className="btn btn-success" onClick={()=>this.handleCheckOut(this.state.cartList)}>Proceed to checkout</button></div>
            </div>
        )
    }
}
export default UserCart;