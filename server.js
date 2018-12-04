var express = require('express');
var pgp = require('pg-promise')();
//var db = pgp(process.env.DATABASE_URL);
var db = pgp('postgres://asbyzajzahyvzq:dd76877a7bfb807b339e11706d3a830ab7a83905f7f24443b1013dc4f2f8e089@ec2-107-20-249-48.compute-1.amazonaws.com:5432/dcttm3rv7gk25q?ssl=true');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');

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
    var name1 = 'Jirayus Phithaksan';
    var hobbies = ['Game', 'Movie',]
    var bd = '04/04/1998'
    res.render('pages/about', { fullname: name1, hobbies: hobbies, bd: bd });
});
//Display all products

app.get('/products', function (req,res) {
    var product_id = req.param('product_id');
    var sql = 'select * from products';
    if (product_id) {
        sql += ' where product_id =' + product_id;

    }
    db.any(sql+' order by product_id ASC')
        .then(function (data) {
            console.log('DATA:' +data);
            res.render('pages/products', { products: data });
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })

});



app.get('/users', function (req, res) {
    var user_id = req.param('user_id');
    var sql = 'select * from users';
    if (user_id) {
        sql += ' where user_id =' + user_id;

    }
    db.any(sql+' order by user_id ASC')
        .then(function (data) {
            console.log('DATA:' + data);
            res.render('pages/users', { users: data });
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })

});

//Update data


app.get('/products/:pid', function (req, res) {
    var pid = req.params.pid;
    var time = moment().format('MMMM Do YYYYY, h:mm:ss a');
    var sql = "select * from products where product_id=" + pid;
    db.any(sql)
        .then(function (data) {

            res.render('pages/product_edit', { product: data[0], time: time })
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })
    
});

app.post('/product/update', function (req, res) {
    var product_id = req.body.product_id;
    var title = req.body.title;
    var price = req.body.price;
    var sql = `update products set title= '${title}', price = '${price}' where product_id='${product_id}'`;
    //การใช้db.none
db.any(sql)
    .then(function(data){
        console.log('UPDATE:' +sql);
    res.redirect('/products')    
})
    .catch(function(error){
        console.log('ERROR:' +error);
    })
});

app.get('/users/:uid', function (req, res) {
    var uid = req.params.uid;
    var time=moment().format('MMMM Do YYYY, h:mm:ss a');
    var sql = "select * from users where user_id=" + uid;
    db.any(sql)
        .then(function (data) {

            res.render('pages/user_edit', { user: data[0], time : time })
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })
    
});
app.post('/user/update', function (req, res) {
    var user_id = req.body.user_id;
    var email = req.body.email;
    var password = req.body.password;
    var sql = `update users set email= '${email}', password = '${password}' where user_id='${user_id}'`;
    //การใช้db.none
     db.none(sql);
db.any(sql)
    .then(function(data){
        console.log('UPDATE:' +sql);
    res.redirect('/users')    
})
    .catch(function(error){
        console.log('ERROR:' +error);
    })
});

app.get('/users_delete/:user_id', function (req, res) {
    var user_id = req.param('user_id');
    var sql = 'DELETE FROM users';
    if (user_id) {
        sql += ' where user_id =' + user_id;

    }
    db.any(sql)
        .then(function (data) {
            console.log('DATA:' + data);
            res.redirect('/users');
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })
        

});
app.get('/products_delete/:product_id', function (req, res) {
    var product_id = req.params.product_id;
    var sql = 'DELETE FROM products';
    if (product_id) {
        sql += ' where product_id =' + product_id;

    }
    db.any(sql)
        .then(function (data) {
            console.log('DATA:' + data);
            res.redirect('/products');
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })

});
app.get('/newproduct', function (req, res) {
    res.render('pages/addnewproduct');
})
app.post('/addnewproduct', function (req, res) {
    var product_id = req.body.product_id;
    var title = req.body.title;
    var price = req.body.price;
    var sql = `INSERT INTO products (product_id, title, price)
    VALUES('${product_id}', '${title}', '${price}')`;  
    console.log('UPDATE:' +sql);
    db.any(sql)
    .then(function(data){
        console.log('DATA:' +sql);
    res.redirect('/products')    
})
    .catch(function(error){
        console.log('ERROR:' +error);
    })
});

app.get('/newuser', function (req, res) {
    res.render('pages/addnewuser');
})
app.post('/addnewuser', function (req, res) {
    var user_id = req.body.user_id;
    var email = req.body.email;
    var password = req.body.password;
    var sql = `INSERT INTO users (user_id, email, password)
    VALUES('${user_id}', '${email}', '${password}')`;  
    console.log('UPDATE:' +sql);
    db.any(sql)
    .then(function(data){
        console.log('DATA:' +sql);
    res.redirect('/users')    
})
    .catch(function(error){
        console.log('ERROR:' +error);
    })
});

app.get('/report_p', function (req,res) {
 
    var sql ='select products.product_id,products.title,sum(purchase_items.quantity) as quantity,sum(purchase_items.price) as price from products inner join purchase_items on purchase_items.product_id=products.product_id group by products.product_id;select sum(quantity) as squantity,sum(price) as sprice from purchase_items';
    db.multi(sql)
    .then(function  (data) 
    {
 
        // console.log('DATA' + data);
        res.render('pages/report_p', { products: data[0],sum: data[1]});
    })
    .catch(function (data) 
    {
        console.log('ERROR' + error);
    })

});

app.get('/report_u', function (req,res) {
 
    var sql = 'select users.email,purchases.name,products.title,purchase_items.quantity,purchase_items.price*purchase_items.quantity as total  from users INNER JOIN purchases ON purchases.user_id = users.user_id INNER JOIN purchase_items ON purchase_items.purchase_id=purchases.purchase_id   INNER JOIN products ON products.product_id = purchase_items.product_id order by purchase_items.price*purchase_items.quantity DESC limit 25';
    
    db.any(sql)
        .then(function (data) {
            console.log('DATA:' +data);
            res.render('pages/report_u', { users: data });
        })
        .catch(function (error) {
            console.log('ERROR:' + error);
        })

}); 

var port = process.env.PORT || 8080;
app.listen(port, function() {
console.log('App is running on http://localhost:' + port);
});
