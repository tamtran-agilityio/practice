<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php echo '<p>Examole PHP 5</p>'; ?>
    <?php 
      /* class constants */
      class MyClass {
        const SUCCESS = "Success \n";
        const FAILURE = "Failure";
      }
      echo MyClass::SUCCESS;
    ?>
    <?php
      /* static members */
      class Singleton {
        static private $instance = NULL;
        
        private function _construct() {
        }

        static public function getInstance() {
          if (self::$instance === NULL) {
            self::$instance = new Singleton();
          }
          return self::$instance;
        }
      }
      Singleton::getInstance();
    ?>
    <?php
      /* abstract class */
      abstract class MyBaseClass {
        function display() {
          $name = 'Tran';
          echo "Default display routime being called \n";
          if (isset($name)) {
            print "$name is set \n";
          }
          $arr1 = array(1, 2, 3);
          $arr2[] = 1;
          $arr2[] = 2;
          $arr2[] = 3;
          print_r($arr1);
          print_r($arr2);
          $arr3 = array("name" => "John", "age" => 28);
          $arr4["name"] = "John";
          $arr4["age"] = 28;
          if ($arr3 === $arr4) {
            print '$arr1 and $arr2 are the same' . "\n";
          }
          print $arr3["name"];
          $arr = array(1 => array("name" => "John", "age" => 28), array("name" => "Barbara", "age" => 67));
          print $arr[1]["age"];
          unset($name);
          if (isset($name)) {
            print "\n $name is set";
          }
        }
      }
      MyBaseClass::display();
    ?>
    <?php
      /* travelsing arrays using foreach */
      $players = array("John", "Barbara", "Bill", "Nancy");
      print "The players are:\n";
      foreach ($players as $key => $value) {
        print "<li>$value </li>";
      }

      $people = array(1 => array("name" => "John", "age" => 28), array("name" => "Barbara", "age" => 67));
      foreach ($people as &$person) {
        if ($person["age"] >= 35) {
          $person["age group"] = "Old";
        } else {
          $person["age group"] = "Young";
        }
      }
      print_r($people);

      /* travelsing arrays using list and each */
      $players = array("John", "Barbara", "Bill", "Nancy");
      reset($players);
      while (list($key, $val) = each($players)) {
        print "<li>#$key = $val\n</li>";
      }
    ?>

  </body>
</html>