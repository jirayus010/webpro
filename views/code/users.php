<html>

<div class="jumbotron">
<h1><center>List of Users</center></h1><br>
                <input class="form-control" id="myInput" type="text" placeholder="Search.." ><br>
<table class="table">
    <thead>
        <tr class="text-info bg-dark" >
            <th ><h5>ID</h5></th >
            <th ><h5>Email</h5></th >
            <th ><h5>password</h5></th >
             
            <th ><a  class="btn btn-danger" href="/newuser" role="button">ADD NEW</a></th >
        </font></tr>
    </thead>
    <tbody id="myTable">
    <%users.forEach(function(users){ %>
<tr class="bg-info text-light">
            <td scope="row"><%= users.user_id %></td>
            <td ><%= users.email %></td>
            <td ><%= users.password %></td>
            <td >
            <a  class="btn btn-warning" href="/users/<%= users.user_id %>" role="button">EDIT</a>
            </td>
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