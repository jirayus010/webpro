<html>
<form action ="/user/update" method = "post">
<div class="jumbotron">
<h1 class="display-4">USER</h1>
<div class="form-group">
  <label for="">ID</label>
  <input type="number"
    class="form-control" value="<%= user.user_id %>" name="user_id" id="" aria-describedby="helpId" placeholder="">
  <small id="helpId" class="form-text text-muted">User ID</small>
</div>
<div class="form-group">
  <label for="">Email</label>
  <input type="text"
    class="form-control" value="<%= user.email %>" name="email" id="" aria-describedby="helpId" placeholder="">
  <small id="helpId" class="form-text text-muted">User Email</small>
</div>
<div class="form-group">
  <label for="">Password</label>
  <input type="text"
    class="form-control" value="<%= user.password %>" name="password" id="" aria-describedby="helpId" placeholder="">
  <small id="helpId" class="form-text text-muted">User Password</small>
</div>

<div class="form-group">
  <label for="">Time</label>
  <input type="text"
    class="form-control" value="<%= time %>" name="time" id="input" aria-describedby="helpId" placeholder="" disable>
  <script>
        $('#input').datetimepicker({ footer: true, modal: true });
    </script>
</div>




<a name="" id="" class="btn btn-secondary" href="/users" role="button">CANCEL</a>
<button type="submit" class="btn btn-success">SAVE</button>
<a name="btnConfirm" value="confirm"  OnClick="return confirm('Do you want to Delete?')" class="btn btn-danger" href="/users_delete/<%= user.user_id %>" role="button">DELETE</a>
</div>
</form>

</html>