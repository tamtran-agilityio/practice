<?php 
  class CategoryController extends Controller {
    public function __construct() {
      parent::__construct();
    }

    private function getRequestUrl() {
      $_URI = parse_url($_SERVER["REQUEST_URI"]);
      $_ARGUMENTS = explode("/", $_URI["path"]);
      $slug = end($_ARGUMENTS);

      return $slug;
    }

    /* Convert string to slug format */

    private function slug($string) {
      $slug = preg_replace('/[^A-Za-z0-9-]+/', '-', $string);
      return $slug;
    }

    /* List products by category */

    public function category() {
      $slug = $this->getRequestUrl();
      $products = Product::getByCategory($slug);

      $this->setView('','home');
      $this->setVariable('products', products);
    }
  }
?>