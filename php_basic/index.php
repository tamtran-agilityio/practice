<?php 
  define('ROOT', dirname(realpath(__FILE__)).'/');
  $thisDir = explode('/', ROOT); // 0
  var_dump($thisDir);
  $conStrLen = strlen(array_pop($thisDir));
  $strPos = substr(__FILE__, 0,strrpos( __FILE__, '/')); //javascript-training/php_basic/shopcart"
  $docRoot = substr($SERVER['DOCUMENT_ROOT'], strrpos($SERVER['DOCUMENT_ROOT'], $SERVER['PHP_SELF'])); // ""
  $conbineString = substr($strPos, strlen($docRoot));
  // /javascript-training/php_basic/shopcart
  $posConf = strlen($conbineString) - $conStrLen; // 39
  $conLink = substr($conbineString, $posConf); // ""
  $host = 'http://' . $SERVER['SERVER_NAME'] . '/' .$conLink; // http://

  define('ROOT_URL', $host);

  include(ROOT . 'config/config.php');
  include(ROOT .'lib/Function.php');

  /**
  * Set error reporting
  */

function setErrorLogging() {

    if ( DEVELOPMENT_ENVIRONMENT == true ) {
        error_reporting(E_ALL);
        ini_set('display_errors', "1");

    } else {
        error_reporting(E_ALL);
        ini_set('display_errors', "0");
    }

    ini_set('log_errors', "1");
    ini_set('error_log',ROOT . 'system/log/error_log.php');
}


/** Main Call Function **/
function callHook() {

    global $url;
    global $area;

    $url = rtrim($url,"/");
    $urlArray = array();
    $urlArray = explode("/",$url);
    $controller = DEFAULT_CONROLLER;
    $action = DEFAULT_ACTION;

    //Check if the call is to admin area
    if ( $urlArray[0] === "admin" ) {
        $area = "admin";
        array_shift($urlArray);
    }

    //Controller
    if ( isset($urlArray[0]) && !empty($urlArray[0]) ) {
        $controller = array_shift($urlArray);
    }

    //Action
    if ( isset($urlArray[0]) && !empty($urlArray[0]) ) {

        $action = array_shift($urlArray);

        // echo $area . "-->".$controller."--->".$action; exit;

        if ( $controller === "product" && !in_array($action, array('category', 'add', 'addToCart', 'addProcess')) ) {
            $action = "productDetail";
        }

        if ( $controller === "category") {
            $action = "category";
        }
    }

    //Setup database
    Database::getInstance('mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset=utf8', DB_USER, DB_PASS);


    //LOAD THE CONTROLLER
    $controllerName = $controller;
    $controller = ucwords($controller);
    $model = rtrim($controller, 's');
    $controller .= 'Controller';
    $dispatch = new $controller();

    // echo $area . "-->".$controller."--->".$action;

    if ( (int)method_exists($controller, $action) ) {
        call_user_func(array($dispatch,$action));

    } else {
        error_log("Unknown page/action, Controller = ".$controller.", action = ".$action);
    }
}

function __autoload($className) {

    $paths = array(
        ROOT."/lib/",
        ROOT."/site/controller/",
        ROOT."/admin/controller/",
        ROOT."/common/",
        ROOT."/common/model/"
    );

    foreach ( $paths as $path ) {

        if ( file_exists($path.$className.".class.php") ) {

            require_once($path.$className.".class.php");
            break;
        }
    }
}

$area = "site";

setErrorLogging();
callHook();

?>