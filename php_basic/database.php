<?php
  /*
  * Mysql database class - only one connection alowed
  */
  class Database {
    public $_connection;
    public static $_instance;
    public $_host = "127.0.0.1";
    public $_username = "root";
    public $_password = "root";
    public $_database = "example";

    /* Get an instance of the database 
     * return instance
     */
    public static function getInstance() {
      if (!self:: $_instance) {
        self:: $_instance = new self();
      }
      
      return selt:: $_instance;
    }

    // Constructor
    private function __construct() {
      Datatabse::_connection = mysqli_connect($this->_host, $this->_username, $this->_password, $this->_database);
      // Error handling
      if (mysqli_connect_errno()) {
        throw new Exception("MySQL connection error: " . mysqli_connect_error());
      }
    }
    
    // Magic method clone is empty to prevent duplication of connection
    private function __clone() { }
    
    // Get mysqli connection
    public static function getConnection() {
      echo "string";
      return Database::_connection;
    }
  }

?>
