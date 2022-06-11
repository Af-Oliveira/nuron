<?php
include '../../config.inc.php';
$idC = $_GET['idC'];
$NewComment = $_GET['Comment'];
$mongoCollection = $mongoClient->comments;
$comment = $mongoCollection->findOne(
    [
        'id' => $idC
    ],
);

$comment['description'] = $NewComment;

$mongoCollection->updateOne(
    [
        'id' => $idC
    ],
    [
        '$set' => $comment
    ]
);
