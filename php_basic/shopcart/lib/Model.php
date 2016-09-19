<?php
  /**
   * @details [Model base class]
   * @return [description]
   */
  class Model {
    protected static $tableName = '';
    protected static $primaryKey = '';
    protected columns;
    function __construct() {
      $this->columns = array();
    }

    public function setColumnValue($column, $value) {
      $this->columns[$column] = $value;
    }

    public function getColumnValue($column) {
      return $this->columns[$column];
    }

    /**
     * @details [Save and update information in data]
     */
    public function save() {
      $class = get_called_class();
      $query = 'REPLACE' . static::$tableName . '('. implode(',', array_keys($this->columns)) ') VALUES('; 
      $keys= array();

      $query .= implode(',', array_keys($keys)).')';
      $db = Database::getInstance();
      $s = $db->getPreparedStatment($query);
      $s->execute($keys);
    }

    /**
     * @details [Delete information in data]
     */
    public function delete() {
      $class = get_called_class();
      $query = "DELETE FROM " . static::$tableName . " WHERE ".static::$primaryKey."=:id LIMIT 1";
      $db = Database::getInstance();
      $s = $db->getPreparedStatment($query);
      $s->execute(array(':id'=>$this->columns[static::$primaryKey]));
    }

    /**
     * Create an instance of this Model from the database row
     */
    public function createRow($column) {
      foreach ( $column as $key => $value ) {
        $this->columns[$key] = $value;
      }
    }
    public static function getAll($condition=array(), $order=NULL, $startIndex=NULL, $count=NULL) {
      $query = "SELECT * FROM " . static::$tableName;

      if ( !empty($condition) ) {

        $query .= " WHERE ";

        foreach ($condition as $key => $value) {
            $query .= $key . "=:".$key." AND ";
        }
      }

      $query = rtrim($query,' AND ');

      if ( $order ) {
        $query .= " ORDER BY " . $order;
      }

      if ( $startIndex !== NULL ) {

        $query .= " LIMIT " . $startIndex;

        if ($count) {
          $query .= "," . $count;
        }
      }

      return self::get($query,$condition);
    }

    public static function get($query,$condition=array())
    {

      $db = Database::getInstance();
      $s = $db->getPreparedStatment($query);

      foreach ( $condition as $key => $value ) {

          $condition[':'.$key] = $value;
          unset($condition[$key]);

      }

      $s->execute($condition);
      $result = $s->fetchAll(PDO::FETCH_ASSOC);
      $collection = array();
      $className = get_called_class();

      foreach ( $result as $row ) {

        $item = new $className();
        $item->createFromDb($row);
        array_push($collection, $item);

      }

      return $collection;
    }

    /**
     * Get a single item
     */
    public static function getOne($condition=array(), $order=NULL, $startIndex=NULL) {

      $query = "SELECT * FROM " . static::$tableName;

      if ( !empty($condition) ) {

        $query .= " WHERE ";

        foreach ( $condition as $key => $value ) {
          $query .= $key . "=:".$key." AND ";
        }

      }

      $query = rtrim($query,' AND ');
      if ( $order ) {
        $query .= " ORDER BY " . $order;
      }

      if ( $startIndex !== NULL ) {
        $query .= " LIMIT " . $startIndex . ",1";
      }

      $db = Database::getInstance();
      $s = $db->getPreparedStatment($query);

      foreach ( $condition as $key => $value ) {
        $condition[':'.$key] = $value;
        unset($condition[$key]);
      }

      $s->execute($condition);
      $row = $s->fetch(PDO::FETCH_ASSOC);
      $className = get_called_class();
      $item = new $className();
      $item->createFromDb($row);

      return $item;
    }

  }