<?php
  /**
  * Site home controller
  */
  session_start();

  class HomeController extends Controller {
    
    public function __construct() {
      parent::__construct();
    }

    public function home() {
      
      /* Get all products*/
      $products = Product::getAll();
      $this->setVariable('products', $products);
    
      /* Set page to view */
      $this->setView('', 'home'); 
    }
  }
?>