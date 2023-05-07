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
        $sql = "SELECT firstName,doc_ID, lastName FROM doctor WHERE doc_ID = :docID";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':docID', $path[3]);
        $stmt->execute();
        $appointments = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($appointments);
        break;
}
