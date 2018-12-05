<html>
<div class="jumbotron">
<table class="table">
    <h1><center>Report: Total sale users</center></h1><br>
    <thead>
        <tr class="text-info bg-dark">
            <th>Name</th>
            <th>Email</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Total Sales</th>
                       
        </tr>
    </thead>
    <tbody id="myTable">
    <% users.forEach(function(users){ %>
        <tr class="bg-info text-light">
            <td scope="row"><%= users.name %></td>           
            <td><%= users.email %></td>
            <td><%= users.title %></td>
            <td><%= users.quantity %></td>
            <td>$<%= users.total %></td>
            
        </tr>
    <%}); %>
    
    </tbody>
    </div>
</table>

</html>