<?php
$client = new MongoDB\Client(
    'mongodb+srv://' . $config['mongo']['username'] . ':' . $config['mongo']['password'] . '@afonsocluster.cwlzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
);

$dbName = $config['mongo']['name'];
$mongoClient = $client->$dbName;
