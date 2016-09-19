<?php

    /* Require config file */
    require_once "../../config/config.php";

    /* New connection */
    $db = new PDO('mysql:host='.DB_HOST.';charset=utf8', DB_USER, DB_PASS);

    $db->setAttribute(PDO::ERRMODE_EXCEPTION, TRUE);

    try {
        /* Create new database if database name not exist. */
        $db->exec("CREATE DATABASE IF NOT EXISTS ".DB_NAME);
        $db->__construct('mysql:host='.DB_HOST.';dbname='.DB_NAME.';charset=utf8',DB_USER,DB_PASS);

    } catch ( PDOException $e ) {
        /* Through error message */
        die($e->getMessage());
    }

    echo "All done";
?>