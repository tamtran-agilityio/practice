<?php
  getHeader();
  include 'header.php';
?>

  <div class="container form-wrapper ">

    <h2 class="form-title">Login form</h2>

    <div class="border-big"></div>

      <div class="row">
        <div class="col-lg-6">

          <h3 class="primary-linear">Login infomation</h3>

          <form method="post" action="/user/loginProcess" name="login_form" class="form-content login-form" role="form">

            <div class="form-group">
              <label for="email" class="control-label">*Email address: </label>
              <input type="text" class="form-control" name="email" id="emailLogin" placeholder="Email">
              <small class="label-error"></small>
            </div>

            <div class="form-group">
              <label for="password" class="control-label">*Password: </label>
              <input type="password" class="form-control" name="password" id="passwordLogin" placeholder="Password">
              <small class="label-error"></small>
            </div>

            <div class="form-group">
              <button type="submit" id="submitLogin" class="btn btn-info primary-linear primary-button">Login</button> or <a href="/user/register">Register</a>
            </div>

          </form>

        </div>
      </div>
    </div>

<?php
  getFooter();
?>