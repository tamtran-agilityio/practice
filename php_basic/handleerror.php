<?php
  function errorHandler($severity, $message, $file, $line) {
    throw new errorException($message, 0, $severity, $file, $line);
  }
  class userException extends Exception { }
  Set_error_handler("errorHandler");
    try {
      require_once("testerror.php");
      $tester = new testerror();
      $tester->produceerror();
      echo "This line does not display";
      $tester->throwexception(); // will not execute if produceerror() is executed
      echo "This line does not displa" ;
   }
   catch (errorException $e ){
     echo $e->getMessage(); 
   }
   catch (userException $e) {
     echo $e->getMessage();
   }
   catch (Exception $e) {
     echo $e->getMessage();
   }
     echo "This line will display";
?>
