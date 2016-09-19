<?php
  define('DEVELOPMENT_ENVIRONMENT', TRUE);
  define('DEFAULT_CONROLLER', 'home');
  define('DEFAULT_ACTION', 'home');
  define('URL_PUBLIC_FOLDER', 'public');
  define('URL_PROTOCOL', '//');
  define('URL_DOMAIN', $_SERVER['HTTP_HOST']);
  define('URL_SUB_FOLDER', str_replace(URL_PUBLIC_FOLDER, '', dirname($_SERVER['SCRIPT_NAME'])));
  define('URL', URL_PROTOCOL . URL_DOMAIN . URL_SUB_FOLDER);
  define('DB_HOST','127.0.0.1');
  define('DB_NAME','product');
  define('DB_USER','root');
  define('DB_PASS','root');

  define('TABLE_SETTINGS','settings');
  define('TABLE_USERS','users');
  define('DB_CHARSET', 'utf8');
?>