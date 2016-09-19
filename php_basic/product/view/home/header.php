<div class="main-header">
  <div class="container">

    <!-- Header top section -->
    <div class="header-top row">

      <!-- Logo here -->
      <div class="col-lg-6">
        <a href="/home" class="ecommer-logo">
          <img src="/site/images/logo-icon.png" alt="">
          <h1>Ecommer</h1>
        </a>
      </div>

      <div class="col-lg-6">

        <!-- Link to acount and login page -->
        <div class="row header-login">

          <div class="col-lg-12 text-right">

            <?php
              if ( isset($_COOKIE['adminLogin']) ) {
                echo $_COOKIE['adminLogin'].'<a href="/user/logoutProcess">Logout</a>';

              } elseif ( isset($_COOKIE['userLogin']) ) {
                echo $_COOKIE['userLogin'].'<a href="/user/logoutProcess">Logout</a>';

              } else {
                echo "<a href='/user/login'>Login</a>";
              }

            ?>
          </div>
        </div>

        <!-- Shopping cart button at header -->
        <div class="row">
          <div class="col-lg-12 text-right">
            <a href="/cart/view" class="shopping-cart-button btn btn-default">
              <i class="fa fa-shopping-cart"></i> Shopping cart
              <span class="create-space"></span>
              (<span class="cart-number">

                <?php

                  if ( !isset($_SESSION['cart']) ) {
                    echo '0';

                  } else {

                    $cart = $_SESSION['cart'];
                    $items = $cart->getItems();
                    $quantity = 0;

                    foreach ( $items as $item ) {
                      $quantity += $item->getQuantity();
                    }

                    echo $quantity;
                  }

                ?>

              </span>)
            </a>
          </div>
        </div>

      </div>

    </div>

    <!-- Navigation header -->
    <ul class="nav navbar-nav nav-header primary-linear ">

      <li><a href="/home" class="primary-link"><i class="fa fa-home"></i></a></li>

      <?php

        $categories = Category::getAll();

        foreach ( $categories as $category ) {

      ?>
          <li><a href="/category/<?php echo $category->getSlug(); ?>" class="primary-link"><?php echo $category->getName();?></a></li>
      <?php

        }
      ?>

      <?php

        if ( isset($_COOKIE['adminLogin']) ) {

          echo '
            <li><a href="/product/add" class="primary-link">Add product</a></li>
            <li><a href="/order/view" class="primary-link">View orders</a></li>
          ';

        }

      ?>
    </ul>

  </div>
</div>
