<?php
include '../config.inc.php';

$likeid = $_GET['likeID'];
$id = $_GET['user_id'];
$filter =  ['id' =>  $likeid];
$mongoCollection = $mongoClient->itens;
$resMongoQueryUser = $mongoCollection->findOne(
    $filter
);
$itens = $resMongoQueryUser;

if (in_array($id, (array) $itens['likes'])) {
    //remove this index from $user['Following']
    $key = array_search($id,  (array) $itens['likes']);
    unset($itens['likes'][$key]);
} else {
    //add this index to $user['Following']
    $itens['likes'][] = $id;
}


$mongoCollection->updateOne(
    [
        'id' => $likeid
    ],
    [

        '$set' => $itens
    ]
);
