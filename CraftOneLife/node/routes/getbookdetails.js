var mysql=require("./mysql");

var getBookDetails =  function (req,res) {

var bookname = req.body.book_name

    console.log("in node of getbookdetails" + bookname);

    var get_profile = "select * from books where book_name="+"'"+bookname+"'";

    try {
        mysql.fetchData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Book Details ",results[0]);

                var data={
                    bookName:results[0].book_name,
                    bookPrice:results[0].user_price
                }
                res.status(201).json({status:'201',data:data});

            }
        }, get_profile)
    }

    catch(err){
        console.log(err);
    }

};


exports.getBookDetails = getBookDetails;
