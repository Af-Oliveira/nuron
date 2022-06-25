<?php
include '../../config.inc.php';
$collection = $_GET['collection'];
include '../../models/' . $collection . '.php';

$id = $_GET['id'];
$newitem = array();
$mongoCollection = $mongoClient->$collection;

$item = $mongoCollection->findOne(
    [
        'id' => $id
    ],
);

foreach ($arrDados['fields'] as $k => $v) {
    if ($v['insert']) {
        if ($v['edit']) {
            $value = $_POST[$k];


            $isToDecode = isset($v['decode']) ? $v['decode'] : true;
            if ($isToDecode == true) {
                if (isJson($value)) {
                    $value = json_decode($value);
                }
            }

            $newitem[$k] = $value;
        } else {
            $newitem[$k] = $item[$k];
        }
    };
};


$mongoCollection->updateOne(
    [
        'id' => $id
    ],
    [
        '$set' => $newitem
    ]
);
header('Location: ' . $config['urls']['site']);
exit();
