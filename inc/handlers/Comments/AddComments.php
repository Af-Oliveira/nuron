<?php
include '../../config.inc.php';
$idC = $_GET['idC'];
$Comment = $_GET['Comment'];
$id_user = $_GET['id_user'];
$id_itens = $_GET['id_itens'];
$replyid = $_GET['replyid'];

$mongoCollection = $mongoClient->comments;
$mongoCollection->insertOne([
    'id' => $idC,
    'description' => $Comment,
    'id_user' => $id_user,
    'id_itens' => $id_itens,
    'parent' => $replyid,
    'date' => time(),
    'likes' => array()

]);
