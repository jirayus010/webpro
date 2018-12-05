<html>
<div class="jumbotron">
<h1><center>Your Products</center></h1><br>
                <input class="form-control" id="myInput" type="text" placeholder="Search.." ><br>

<table class="table">
    <thead>
        <tr class="text-info bg-dark">
            <th ><h5>ID</h5></th>
            <th ><h5>Title</h5></th>
            <th ><h5>Price</h5></th>
            <th ><a  class="btn btn-danger" href="/newproduct" role="button">ADD NEW</a></th >
        </tr>
    </thead>
    <tbody id="myTable">
    <% products.forEach(function(products){ %>
        <tr class="bg-info text-light">
            <td scope="row" ><%= products.product_id %></td>
            <td ><%= products.title %></td>
            <td ><%= products.price %></td>
            <td ><a class="btn btn-warning" href="/products/<%= products.product_id %>" role="button">EDIT</a></td>
        </tr>
    <%}); %>
    </tbody>
</table>

<script>
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

</script>
</div>
</html>