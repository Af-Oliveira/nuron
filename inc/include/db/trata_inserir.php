<?php
include '../../config.inc.php';
$collection = $_GET['collection'];
include '../../models/' . $collection . '.php';

$iten = array();
$mongoCollection = $mongoClient->$collection;
foreach ($arrDados['fields'] as $k => $v) {
    if ($v['insert']) {
        $value = $_POST[$k];
        if (isJson($value)) {
            $value = json_decode($value);
        }
        $iten[$k] = $value;
    }
}

$mongoCollection->insertOne($iten);
header('Location: ' . $config['urls']['site']);
exit();
