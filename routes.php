<?php
include 'inc/config.inc.php';
$route = new Route();
$filter =  ['active' => 1];
$mongoCollection = $mongoClient->SEO;
$resMongoQueryUser = $mongoCollection->find(
    $filter
);
$resMongoQueryUser = $resMongoQueryUser->toArray();


foreach ($resMongoQueryUser as $key => $value) {

    $route->add($value['UrlF'], $value['url']);
}

$route->notFound("404.php");
