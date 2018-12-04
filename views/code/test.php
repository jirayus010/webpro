<html>
<div class="jumbotron">
<h1><center>Owner Website</center></h1>
<h2>Name: <%= fullname %></h2>
<h3>nickname : Nack </h3>
<h4>Age : 20 </h4>
<h4>Year : 3 </h4>
<h4>My hobbies </h4>
<ul>
    <% hobbies.forEach(function(hobby) { %>
        <li><%= hobby %></li>
    <% }); %>
</ul>
</div>
<center><img src="http://www.pngall.com/wp-content/uploads/2016/06/Cartoon.png" width="100" hight="200"></center>

</html>