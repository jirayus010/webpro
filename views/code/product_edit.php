<html>
<form action ="/product/update" method = "post">
<div class="jumbotron">
<h1 class="display-4">PRODUCT</h1>
<div class="form-group">
  <label for="">ID</label>
  <input type="number"
    class="form-control" value="<%= product.product_id %>" name="product_id" id="" aria-describedby="helpId" placeholder="">
  <small id="helpId" class="form-text text-muted">Product ID</small>
</div>
<div class="form-group">
  <label for="">Title</label>
  <input type="text"
    class="form-control" value="<%= product.title %>" name="title" id="" aria-describedby="helpId" placeholder="">
  <small id="helpId" class="form-text text-muted">Product Title</small>
</div>
<div class="form-group">
  <label for="">Price</label>
  <input type="number"
    class="form-control" value="<%= product.price %>" name="price" id="" aria-describedby="helpId" placeholder="">
  <small id="helpId" class="form-text text-muted">Product Price</small>
</div>

<div class="form-group">
  <label for="">Time</label>
  <input type="text"
    class="form-control" value="<%= time %>" name="time" id="input" aria-describedby="helpId" placeholder="" disabled>
  <script>
        $('#input').datetimepicker({ footer: true, modal: true });
    </script>
</div>

<a name="" id="" class="btn btn-secondary" href="/products" role="button">CANCEL</a>
<button type="submit" class="btn btn-success">SAVE</button>
<a name="btnConfirm" value="confirm"  OnClick="return confirm('Do you want to Delete?')" class="btn btn-danger" href="/products_delete/<%= product.product_id %>" role="button">DELETE</a>

</div>
</form>

</html>