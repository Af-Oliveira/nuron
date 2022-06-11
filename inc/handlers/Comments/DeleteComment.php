<?php
include '../../config.inc.php';
$idC = $_GET['idC'];
$mongoCollection = $mongoClient->comments;
$mongoCollection->DeleteOne([
    'id' => $idC
]);

DeleteComments($idC, $mongoClient);

function DeleteComments($parent, $mongoClient)
{
    $filter =  ['parent' => $parent];
    $mongoCollection = $mongoClient->comments;
    $resMongoQuery = $mongoCollection->find(
        $filter
    );

    $arrComments = $resMongoQuery->toArray();
    foreach ($arrComments as $key => $value) {

        $filter =  ['parent' => $value['id']];
        $mongoCollection = $mongoClient->comments;
        $resMongoQuery = $mongoCollection->find(
            $filter
        );
        $arrsons = $resMongoQuery->toArray();
        $mongoCollection->DeleteOne([
            'id' => $value['id']
        ]);
        if (count($arrsons) > 0) {
            DeleteComments($value['id'], $mongoClient);
        }
    }
}
