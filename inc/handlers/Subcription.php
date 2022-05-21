<?php
include '../config.inc.php';

$artist = $_GET['WatchID'];

$filter =  ['id' => $_SESSION['uId']];
$mongoCollection = $mongoClient->users;
$resMongoQueryUser = $mongoCollection->findOne(
    $filter
);
$user = $resMongoQueryUser;

if (in_array($artist, (array)$user['Following'])) {
    //remove this index from $user['Following']
    $key = array_search($artist,  (array)$user['Following']);
    unset($user['Following'][$key]);
} else {
    //add this index to $user['Following']
    $user['Following'][] = $artist;
}

$mongoCollection->updateOne(
    [
        'id' => $_SESSION['uId']
    ],
    [
        '$set' => $user
    ]
);
