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
    case "POST":
        $user = json_decode(file_get_contents("php://Input"));
        $sql = "INSERT INTO vaccines(NHSNumber,DoseNo,VaccinationDate,VaccineManufacturer,DiseaseTargeted,VaccineType,Product,VaccineBatchNumber
        ,CountryOfVaccination,Authority,Site,TotalSeriesOfDoses,DisplayName,SnomedCode,DateEntered,ProcedureCode,Booster) 
        VALUES (:NHSNumber,:DoseNo,:VaccinationDate,:VaccineManufacturer,:DiseaseTargeted,:VaccineType,:Product,:VaccineBatchNumber
        ,:CountryOfVaccination,:Authority,:Site,:TotalSeriesOfDoses,:DisplayName,:SnomedCode,:DateEntered,:ProcedureCode,:Booster)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':NHSNumber', $user->NHSNumber);
        $stmt->bindParam(':DoseNo', $user->DoseNo);
        $stmt->bindParam(':VaccinationDate', $user->VaccinationDate);
        $stmt->bindParam(':VaccineManufacturer', $user->VaccineManufacturer);
        $stmt->bindParam(':DiseaseTargeted', $user->DiseaseTargeted);
        $stmt->bindParam(':VaccineType', $user->VaccineType);
        $stmt->bindParam(':Product', $user->Product);
        $stmt->bindParam(':VaccineBatchNumber', $user->VaccineBatchNumber);
        $stmt->bindParam(':CountryOfVaccination', $user->CountryOfVaccination);
        $stmt->bindParam(':Authority', $user->Authority);
        $stmt->bindParam(':Site', $user->Site);
        $stmt->bindParam(':TotalSeriesOfDoses', $user->TotalSeriesOfDoses);
        $stmt->bindParam(':DisplayName', $user->DisplayName);
        $stmt->bindParam(':SnomedCode', $user->SnomedCode);

        $stmt->bindParam(':DateEntered', $user->DateEntered);
        $stmt->bindParam(':ProcedureCode', $user->ProcedureCode);
        $stmt->bindParam(':Booster', $user->Booster);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record'];
        }

        echo json_encode($response);

        break;

    case "GET":
        $path = explode('/', $_SERVER["REQUEST_URI"]);
        $sql = "SELECT NHSNumber, DoseNo, VaccinationDate, VaccineManufacturer, DiseaseTargeted, VaccineType, 
        Product, VaccineBatchNumber, CountryOfVaccination, Authority, Site, TotalSeriesOfDoses, DisplayName,
        SnomedCode, DateEntered, ProcedureCode, Booster FROM vaccines WHERE NHSNumber = :NHSNumber";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':NHSNumber', $path[3]);
        $stmt->execute();
        $appointments = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($appointments);
        break;

    case "PUT":
        $user = json_decode(file_get_contents("php://Input"));
        $sql = "UPDATE vaccines
                SET Booster = :Booster
                WHERE NHSNumber = :NHSNumber AND DoseNo = 2";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':NHSNumber', $user->NHSNumber);
        $stmt->bindParam(':Booster', $user->Booster);
        $stmt->execute();
        $appointments = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($appointments);
        break;
}
