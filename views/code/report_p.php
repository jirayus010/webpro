<html>
<class="bg-dark">
<div class="jumbotron">
<h1 class="text-center">Report: Purchase by item</h1><br>
<table class="table ">
    <thead>
        <tr class="text-info bg-dark">
        <th>ITEM NAME</th>
        <th>QUANTITY PURCHASED</th>
        <th>AMOUNT</th>
        </tr>
    </thead>
    <tbody id="myTable">
    <% products.forEach(function(product) { %>
        <tr class="bg-info text-light">
            <td scope="row"><%= product.title %></font></td>
            <td><%= product.quantity %></font></td>
            <td>$<%= product.price %></font></td>
        </tr>
        <% }); %>
        <% sum.forEach(function(sum) { %>
        <tr class="bg-danger text-light">
            <td scope="row"><h5>Total</h5></td>
            <td id="quantity"><h5><%= sum.squantity %></h5></td>
            <td id="price"><h5>$<%= sum.sprice %></h5></td>
        </tr>
        <% }); %>
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