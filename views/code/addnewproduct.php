<html>
<form action="/addnewproduct"  method = "post">
<div class="jumbotron">
<h1 class="display-4">ADD NEW PRODUCT</h1>
<div class="form-group">
  <label for="">ID</label>
  <input type="number"
    class="form-control" name="product_id" id="" aria-describedby="helpId" placeholder="ID">
  <small id="helpId" class="form-text text-muted"></small>
</div>
<div class="form-group">
  <label for="">Title</label>
  <input type="text"
    class="form-control" name="title" id="" aria-describedby="helpId" placeholder="Title">
  <small id="helpId" class="form-text text-muted"></small>
</div>
<div class="form-group">
  <label for="">Price</label>
  <input type="number"
    class="form-control" name="price" id="" aria-describedby="helpId" placeholder="Price">
  <small id="helpId" class="form-text text-muted"></small>
</div>

<a name="" id="" class="btn btn-secondary" href="/products" role="button">CANCLE</a>
<button type="submit" class="btn btn-primary">ADD PRODUCT</button>

</div>
</form>
</html>