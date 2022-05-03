<?php

include '../config.inc.php';


$collection = $_GET['name'];
$filter = urldecode($_GET['filter']);
$filter = json_decode($filter);

$mongoCollection = $mongoClient->$collection;


$data = $mongoCollection->find(
    $filter,
);

$data = $data->toArray();

echo json_encode($data);
