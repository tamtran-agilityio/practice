<?php
  /**
  * Product controller 
  */

  session_start();

  class ProductController extends Controller {
    
    public function __construct() {
      parent::__construct();     
    }

    /* Get slug for url */

    private function getRequesUrl() {
      $_URI = parse_url($_SERVER["REQUEST_URI"]);
      $_ARGUMENTS = explode("/", $_URI["path"]);
      $slug = end($_ARGUMENTS);

      return $slug;
    }

    /* Convert string */
    private function slug($string) {
      $slug = preg_replace('/[^A-Za-z0-9]+/', '-', $string);
      return $slug;
    }

    public function productDetail() {
      if (isset($POST['addToCart'])) {
        $this->addToCart();
      } else {
        $slug = $this->getRequesUrl();
        $products = Product::getOne(array('slug'=>$slug));
        $this->setView('','home');
        $this->setVariable('products', $products);
      }
    }

    /* View page add product */
    public function add() {
      $this->setView('', 'addProduct');
    }

    /* Process to add new product */
    public function addProcess() {
      if ( isset($_POST['productName'])
        && isset($_POST['description'])
        && isset($_POST['category'])
        && isset($_POST['price'])
        && isset($_FILES['productImage'])
        && isset($_POST['productQuantity'])
        && isset($_POST['currentUrl'])) {

        $name = $_POST['productName'];
        $description = $_POST['description'];
        $category = $_POST['category'];
        $price = $_POST['price'];
        $file = $_FILES['productImage'];
        $quantity = $_POST['productQuantity'];
        $slug = $this->slug($name);

        /* Checked file type upload */

        if ( $file['type'] === "image/gif"
          || $file['type'] === "image/jpeg"
          || $file['type'] === "image/jpg"
          || $file['type'] === "image/png") {

          /* Check size of image */
          if ($file['size'] < 1000000) {
            $product = new Product();
            $product->setName($name);
            $product->setDescription($description);
            $product->setCategory($category);
            $product->setPrice($price);
            $product->setImage($file['name']);
            $product->setQuantity($quantity);
            $product->setSlug($slug);
            $product->save();

            /* Move image uploader to assets folder */
            move_uploaded_file($file['tmp_name'], "/site/images/products/{$file['name']}");

            /* Redirect to home page */
            header('Localtion:/home');
          } else {
            echo 'Execute filesize limit';
          }
        } else {
          echo 'Invalid file format';
        }
      } else {
        echo 'Not exits $_POST[...] or $_FILES[...]!';
      }
    }
  }
?>