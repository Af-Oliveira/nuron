<?php
include '../config.inc.php';
$id = $_GET['ID'];
if (in_array($id, $_SESSION['arrSavedAccounts'])) {

    $filter =  ['id' => $id];
    $mongoCollection = $mongoClient->users;
    $resMongoQueryUser = $mongoCollection->findOne(
        $filter
    );

    $_SESSION['uName'] = $resMongoQueryUser['usernameF'] . ' ' . $resMongoQueryUser['usernameL'];
    $_SESSION['uId'] = $id;
}
header('Location: ' . $config['urls']['site']);
