<?php
  class Template {
    protected $file;
    protected $folder;
    protected $variables;

    public function __construct() {
      $this->variables = array();
    }

    /**
     * Set the folder and filename for the view template file
     */

    public function set($folder, $file) {
      $this->folder = $folder;
      $this->file = $file;
    }

    /**
     * Set the variables
     */

    public function setVariable($key, $value) {
      $this->variables[$key] = $value;
    }

    public function render() {
      global $area;
      extract($this->variables);

      $filename = ROOT.$area.'/view'.$this->folder.'/'.$this->file.'.php';
      if (file_exists($filename)) {
        include($filename);
      }
    }
  }
?>