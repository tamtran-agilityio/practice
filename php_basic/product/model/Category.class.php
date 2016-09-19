<?php 
  class Category extends Model {
    protected static $tableName = 'categories';
    protected static $primaryKey = 'id';

    public function getId() {
      return $this->getColumnValue('id');
    }

    public function setName($value) {
      $this->setColumnValue('name', $value);
    }

    public function getName() {
      return $this->getColumnValue('name');
    }

    public function setSlug($value) {
      $this->setColumnValue('slug', $value);
    }

    public function getSlug() {
      return $this->getColumnValue('slug');
    }
  }