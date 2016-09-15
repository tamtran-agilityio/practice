<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Connect data</title>
</head>
<body>

  <?php

    $link = mysqli_connect("127.0.0.1", "root", "root", "example");

    if (mysqli_connect_errno()) {
      throw new Exception("MySQL connection error: " . mysqli_connect_error());
    }

    echo "Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL;
    echo "Host information: " . mysqli_get_host_info($link) . PHP_EOL;


    $sql="SELECT * FROM dogs";
    $result=mysqli_query($con,$sql);
    echo "SDDDD" .$result;
    if ($result === null) {
      throw new Exception("No records retrieved from database");
    }
    
    $this ->dogs_array = mysqli_fetch_assoc($result);
    msql_free_result(result);
    mysqli_close($link);
  ?>

</body>
</html>