<?php
error_reporting(E_ALL);
ini_set('display errors', 1);
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include "GP_DBConnect.php";

$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER["REQUEST_METHOD"];
switch ($method) {





    case "GET":
        $path = explode('/', $_SERVER["REQUEST_URI"]);
        if (isset($path[3])) {
            $sql = "SELECT * FROM Patients WHERE NHSNumber = :NHSNumber";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':NHSNumber', $path[3]);
            $stmt->execute();
            $cars = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $sql = "SELECT * FROM Patients";
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $cars = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($cars);
        break;
}
