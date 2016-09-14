<?php
  class testerror {
    function produceerror() {
      trigger_error("User error", E_USER_ERROR);
      echo "This line will not display";
    }
    function throweception() {
      throw new userException("User Exception");
      echo "This line will not display";
   }
  }
?>
