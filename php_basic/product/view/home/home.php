
<?php
  getHeader();
  include 'header.php';
?>

  <!-- List products -->
  <div class="container">

    <div class="row">

    <?php

      foreach ( $products as $product ) {
    ?>

      <div class="col-lg-3 list-products">

        <a href="/product/<?php echo $product->getSlug(); ?>" class="product">
          <div class="product-image">
            <div class="wrap-image">
              <img src="/site/images/products/<?php echo $product->getImage(); ?>" alt="">
            </div>
          </div>

          <p class="product-name text-center"><?php echo $product->getName(); ?></p>
          <p class="product-price text-center">Price: <span class="price-number">$<?php echo $product->getPrice(); ?></span> </p>
        </a>

      </div>

    <?php
      }
    ?>

    </div>

<?php
  getFooter();
?>