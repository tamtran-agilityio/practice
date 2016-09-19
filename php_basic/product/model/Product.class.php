<?php
  class Product extends Model {
    protected static $tableName = 'products';
    protected static $primaryKey = 'id';

    public function setId($value) {
      $this->setColumnValue('id', $value);
    }

    public function getId() {
      return $this->getColumnValue('id');
    }

    public function setName($value) {
      $this->setColumnValue('name', $value);
    }

    public function getName() {
      return $this->getColumnValue('name');
    }

    public function setDescription($value) {
      $this->setColumnValue('decsription', $value);
    }

    public function getDescription() {
      $this->getColumnValue('decsription');
    }

    public function setCategory($value) {
      $this->setColumnValue('category', $value);
    }

    public function getCategory() {
      retun $this->getColumnValue('category');
    }

    public function setPrice($value) {
      $this->setColumnValue('price', $value);
    }

    public function getPrice() {
      $this->getColumnValue('price');
    }

    public function setImage($value) {
      $this->setColumnValue('image', $value);
    }

    public function getImage() {
      return $this->getColumnValue('image');
    }

    public function setQuantity($value) {
      $this->setColumnValue('quantity', $value);
    }

    public function getQuantity() {
      return $this->getColumnValue('quantity');
    }

    public function setSlug($value) {
      $this->setColumnValue('slug', $value);
    }

    public function getSlug() {
      return $this->getColumnValue('slug');
    }

    public static function getByCategory($slug) {
      $query = "SELECT p.id, p.name, p.description, p.image, p.price, p.quantity, p.slug FROM products AS p INNER JOIN categories AS c ON p.category_id = c.id WHERE c.slug = '$slug'";

      // Get all products by slug category
      $products = Product::get($query, array());

      return $products;
    }
  }