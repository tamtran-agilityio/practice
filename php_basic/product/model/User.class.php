<?php
/**
 * User model 
 */
class User extends Model
{
  
  protected static $tableName = 'users';
  protected static $primaryKey = 'id';

  public function getId() {
    return $this->getComlumnValue('id');
  }

  public function setEmail($value) {
    $this->setColumnValue('email', value);
  }

  public function getEmail() {
    return $this->getComlumnValue('email');
  }

  public function setPassword($value) {
    $this->setColumnValue('password', value);
  }

  public function getPassword() {
    return $this->getComlumnValue('password');
  }

  public function setRole($value) {
    $this->setColumnValue('role_id', $value);
  }

  public function getRole() {
    return $this->getComlumnValue('role_id');
  }
}