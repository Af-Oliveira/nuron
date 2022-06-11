<?php
include '../../config.inc.php';

$likeid = $_GET['likeid'];
$filter =  ['id' =>  $likeid];
$mongoCollection = $mongoClient->comments;
$resMongoQueryUser = $mongoCollection->findOne(
    $filter
);
$comment = $resMongoQueryUser;


if (in_array($_SESSION['uId'], (array) $comment['likes'])) {
    $key = array_search($_SESSION['uId'],  (array) $comment['likes']);
    unset($comment['likes'][$key]);
} else {
    $comment['likes'][] = $_SESSION['uId'];
}


$mongoCollection->updateOne(
    [
        'id' => $likeid
    ],
    [
        '$set' => $comment
    ]
);
