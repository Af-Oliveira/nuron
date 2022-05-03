<?php
include '../config.inc.php';

$mongoCollection = $mongoClient->users;

$Uid = $_SESSION['uId'];

$user = $mongoCollection->findOne(
  [
    'id' => $Uid
  ],
);

foreach ($_POST as $key => $value) {
  if (isset($_POST[$key])) {
    $user[$key] = $value;
  }
}

$mongoCollection->updateOne(
  [
    'id' => $Uid
  ],
  [
    '$set' => $user
  ]
);
