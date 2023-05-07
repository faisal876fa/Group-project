<?php
error_reporting(E_ALL);
ini_set('display errors', 1);
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include "GP_DBConnect.php";

date_default_timezone_set('Europe/London');
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER["REQUEST_METHOD"];
switch ($method) {

    case "GET":
        $date = date("Y-m-d");
        $time = date("H:i:s");
        $path = explode('/', $_SERVER["REQUEST_URI"]);
        $sql = "SELECT P.NHSNumber,P.Forename,P.Surname,A.doc_ID,A.date,A.time
                FROM Patients P JOIN Appointment A 
                ON P.NHSNumber=A.NHSNumber
                AND (A.date > '$date' OR (A.date = '$date' AND A.time > '$time')) AND A.doc_ID = :docID";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':docID', $path[3]);
        $stmt->execute();
        $appointments = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($appointments);
        break;
}
