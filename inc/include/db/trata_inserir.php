<?php
include '../../config.inc.php';
$collection = $_GET['collection'];
include '../../models/' . $collection . '.php';

$iten = array();
$mongoCollection = $mongoClient->$collection;



foreach ($arrDados['fields'] as $k => $v) {
    if ($v['insert']) {
        $value = $_POST[$k];

        if ($v['type'] == "active") {
            if ($value == "on") {
                $value = "1";
            } else {
                $value = "0";
            }
        }

        $isToDecode = isset($v['decode']) ? $v['decode'] : true;
        if ($isToDecode == true) {
            if (isJson($value)) {
                $value = json_decode($value);
            }
        }

        $iten[$k] = $value;
    }
}


$mongoCollection->insertOne($iten);
header('Location: ' . $config['urls']['site']);
exit();
