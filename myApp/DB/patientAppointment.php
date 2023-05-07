<?php
error_reporting(E_ALL);
ini_set('display errors', 1);
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-Methods:*");

include "GP_DBConnect.php";

$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER["REQUEST_METHOD"];
switch ($method) {

    case "GET":

        $path = explode('/', $_SERVER["REQUEST_URI"]);
        $sql = "SELECT date, time, doc_ID FROM appointment WHERE NHSNumber = :NHSNumber";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':NHSNumber', $path[3]);
        $stmt->execute();
        $appointments = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($appointments);
        break;


    case "DELETE":
        $sql = "DELETE From appointment WHERE NHSNumber = :NHSNumber";
        $path = explode('/', $_SERVER["REQUEST_URI"]);
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':NHSNumber', $path[3]);
        $stmt->execute();
        break;
}
