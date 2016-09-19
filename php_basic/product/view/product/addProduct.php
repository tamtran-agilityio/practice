<?php
  getHeader();
  include 'header.php';
?>

    <div class="container form-wrapper ">

      <h2 class="form-title">Add new products</h2>

      <div class="border-big"></div>

        <div class="row">

          <div class="col-lg-9">

            <h3 class="primary-linear">Product infomation</h3>

            <form method="post" action="/product/addProcess" enctype="multipart/form-data" name="frm-add-product" class="form-horizontal form-content">

              <div class="form-group required">
                <label for="productName" class="col-lg-4 control-label">*Product name: </label>
                <div class="col-lg-8">
                  <input type="text" class="form-control" id="productName" placeholder="Product name"  name="productName">
                  <small class="label-error">This field is required</small>
                </div>
              </div>

              <div class="form-group">
                <label for="description" class="col-lg-4 control-label">Description: </label>
                <div class="col-lg-8">
                  <textarea class="form-control" id="description" name="description" rows="5" placeholder="Description"></textarea>
                </div>
              </div>

              <div class="form-group">
                <label for="category" class="col-lg-4 control-label">*Category: </label>
                <div class="col-lg-8">
                  <select name="category" id="category" class="form-control select-category">
                    <?php
                      $categories = Category::getAll();

                      foreach ( $categories as $category ) {

                    ?>

                      <option value="<?php echo $category->getId();?>"><?php echo $category->getName();?></option>

                    <?php
                      }
                    ?>

                  </select>
                  <!-- <input type="text" class="form-control" id="category" name="category" placeholder="Category"> -->
                  <small class="label-error">This field is required</small>
                </div>
              </div>

              <div class="form-group required numeric">
                <label for="price" class="col-lg-4 control-label">*Price: </label>
                <div class="col-lg-8">
                  <input type="text" class="form-control" id="price" name="price" placeholder="Price">
                  <small class="label-error">This field is required</small>
                </div>
              </div>

              <div class="form-group required">
                <label for="productImage" class="col-lg-4 control-label">*Chose image to upload: </label>
                <div class="col-lg-8">
                  <input type="file" id="productImage" name="productImage">
                  <small class="label-error">This field is required</small>
                </div>
              </div>

              <div class="form-group required numeric">
                <label for="productQuantity" class="col-lg-4 control-label">*Quantity: </label>
                <div class="col-lg-8">
                  <input type="text" class="form-control" id="productQuantity" name="productQuantity" placeholder="Quantity">
                  <small class="label-error">This field is required</small>
                </div>
              </div>

              <div class="form-group">
                <div class="col-lg-8">
                  <button type="submit" id="btnAddProduct" class="btn btn-info primary-linear primary-button">Add</button>
                </div>
              </div>

              <input type="hidden" name="currentUrl" value="<?php echo $current_url; ?>">
            </form>

          </div>
        </div>

      </div>
    </div>

<?php
  getFooter();
?>