<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Connect data</title>
</head>
<body>

  <?php

    // include 'database.php';
    // // $foo = new Database;

    // Database::getConnection();
    
    // $mysqli = $db->getConnection(); 
    // $sql_query = "SELECT * FROM  dogs";
    // $result = $mysqli->query($sql_query);
    // var_dump($result);
    $link = mysqli_connect("127.0.0.1", "root", "root", "example");

    if (mysqli_connect_errno()) {
      throw new Exception("MySQL connection error: " . mysqli_connect_error());
    }

    echo "Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL;
    echo "Host information: " . mysqli_get_host_info($link) . PHP_EOL;

    /* Select queries return a resultset on tables */
    if ($result = $link->query("SELECT * FROM dogs LIMIT 10")) {
      printf("Select returned %d rows.\n", $result->num_rows);
      if ($result->num_rows > 0) {
       // output data of each row
        while($row = $result->fetch_assoc()) {
          echo "<br> id: ". $row["id"]. " - Name: ". $row["name"]. " Description:" . $row["description"] . "<br>";
        }
      } else {
        echo "0 results";
      }
      /* free result set */
      $result->close();
    }

    msql_free_result(result);
    mysqli_close($mysqli);
  ?>

</body>
</html>