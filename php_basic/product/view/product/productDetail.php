<?php
  getHeader();
  include 'header.php';
?>

  <!-- List products -->
  <div class="container">

    <h2 class="content-title">Product information</h2>

    <!-- Product detail -->
    <form action="/product/<?php echo $product->getSlug() ?>" method="post">

      <input type="hidden" name="addToCart" value="true">

      <div class="product-detail">

        <p class="product-name"><?php echo $product->getName(); ?></p>
        <p class="product-price"><span class="price-number">$<?php echo $product->getPrice(); ?></span></p>

        <div class="row product-informations">

          <div class="col-lg-6">
            <div class="image-present">
              <img src="/site/images/products/<?php echo $product->getImage(); ?>" alt="">
            </div>
          </div>

          <div class="col-lg-6">
            <p class="product-description"><?php echo $product->getDescription(); ?></p>
            <p class="product-price">Price: <span class="price-number">$<?php echo $product->getPrice(); ?></span></p>
            <button type="submit" class="btn btn-danger add-to-cart-button primary-button" >+ Add to cart</button>
          </div>

        </div>

      </div> <!-- End of product-detail -->

    </form>

  </div>

<?php
  getFooter();
?>