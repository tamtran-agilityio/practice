<?php
  class Database extends PDO {
    protected static $instance;

    protected $cache;

    /**
     * Get instance of the PDO
     */
    public static function getInstance($dsn=NULL, $dbname=NULL, $dbpass=NULL) {
      if (!self::$instance) {
        self::$instance = new Database($dsn, $dbname, $dbpass);
      }

      return self::$instance;
    }

    public function _construct($dsn, $dbname, $dbpass) {
      parent::__construct($dsn, $dbname, $dbpass);
      $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ATTR_EXCEPTION);
      $this->cache = array();
    }

    public function getPreparedStatement($query) {
      $hash = md5($query);

      if (!isset($this->cache[$hash])) {
        $this->cache[$hash] = $this->prepare($query);
      }

      return $this->cache[$hash];
    }

    public function __destruct() {
      $this->cache = NULL;
    }
  }
?>