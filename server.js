var express = require('express');
var pgp = require('pg-promise')();
//var db = pgp(process.env.DATABASE_URL);
var db = pgp('postgres://asbyzajzahyvzq:dd76877a7bfb807b339e11706d3a830ab7a83905f7f24443b1013dc4f2f8e089@ec2-107-20-249-48.compute-1.amazonaws.com:5432/dcttm3rv7gk25q=true');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index');
});
app.get('/education', function (req, res) {
    res.render('pages/education');
});

app.get('/about', function (req, res) {
    var name = 'Jirayus Phithaksan';
    var hobbies = ['Game', 'Movie',]
    var bd = '04/04/1998'
    res.render('pages/about', { fullname: name, hobbies: hobbies, bd: bd });
});
//Display all products

app.get('/products', function (req, res) {
    var id = req.param('id');
    var sql = 'select * from products';
    if (id) {
        sql += ' where id =' + id;

    }
    db.any(sql)
        .then(function (data) {
            console.log('DATA:' + data);
            res.render('pages/products', { products: data });
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })

});
app.get('/products/:pid', function (req, res) {
    var pid = req.params.pid;
    var sql = "select * from products where id=" + pid;
    db.any(sql)
        .then(function (data) {

            res.render('pages/product_edit', { product: data[0] });
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })
    // res.render('pages/product_edit');
});
app.get('/products/:ptitle', function (req, res) {
    var pid = req.params.ptitle;
    var sql = "select * from products where title=" + ptitle;
    db.any(sql)
        .then(function (data) {

            res.render('pages/product_edit', { product: data[0] });
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })
    // res.render('pages/product_edit');
});

app.get('/products/:pprice', function (req, res) {
    var pid = req.params.pprice;
    var sql = "select * from products where price=" + pprice;
    db.any(sql)
        .then(function (data) {

            res.render('pages/product_edit', { product: data[0] });
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })
    // res.render('pages/product_edit');
});



//     app.get('/products/:id', function(req, res) {
//         var id = req.param('id');
//         var sql = 'select * from products';
//         if(id){
//             sql +=' where id =' +id;

//         }
//         db.any(sql)
//             .then(function(data){
//                 console.log('DATA:'+data);
//                 res.render('pages/products',{products : data});
//             })
//             .catch(function(error){
//                 console.log('ERROR:'+error);
//             })

// });
app.get('/users/', function (req, res) {
    var sql = 'select * from users';
    db.any(sql)
        .then(function (data) {
            console.log('DATA:' + data);
            res.render('pages/users', { users: data });
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })

});
app.get('/users/:id', function (req, res) {
    var id = req.param('id');
    var sql = 'select * from users';
    if (id) {
        sql += ' where id =' + id;

    }
    db.any(sql)
        .then(function (data) {
            console.log('DATA:' + data);
            res.render('pages/users', { users: data });
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })

});
//Update data
app.post('/product/update', function (req, res) {
    var id = req.body.id;
    var title = req.body.title;
    var price = req.body.price;
    var sql = `update products set title= ${title}, price = ${price} where id=${id}`;
    //การใช้db.none

    console.log('UPDATE:' +sql);
    res.redirect('/products');
});

app.get('/newproduct', function (req, res) {
    res.render('pages/addnewproduct');
})
app.post('/addnewproduct', function (req, res) {
    var id = req.body.id;
    var title = req.body.title;
    var price = req.body.price;
    var sql = `INSERT INTO products (id, title, price)
    VALUES ('${id}', '${title}', '${price}')`;
    //db.none
    console.log('UPDATE:' + sql);
    db.any(sql)
        .then(function (data) {
            console.log('DATA:' + data);
            res.redirect('/products')

        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })

})
//addnewuser
app.get('/newuser', function (req, res) {
    res.render('pages/addnewuser');
})

app.post('/addnewuser', function (req, res) {
    var id = req.body.id;
    var email = req.body.email;
    var password = req.body.password;
    var sql = `INSERT INTO users (id, email, password)
    VALUES ('${id}', '${email}', '${password}')`;
    //db.none
    console.log('UPDATE:' + sql);
    db.any(sql)
        .then(function (data) {
            console.log('DATA:' + data);
            res.redirect('/users')
        })

        .catch(function (error) {
            console.log('ERROR:' + error);
        })
});
//datetime

var port = process.env.PORT || 8080;
app.listen(port, function() {
console.log('App is running on http://localhost:' + port);
});
