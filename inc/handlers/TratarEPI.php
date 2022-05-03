<?php
include '../config.inc.php';

$mongoCollection = $mongoClient->users;

$Uid = $_SESSION['uId'];

$user = $mongoCollection->findOne(
  [
    'id' => $Uid
  ],
);

if (isset($_POST['banner'])) {
  $user['banner'] = $_POST['banner'];
}
if (isset($_POST['avatar'])) {
  $user['avatar'] = $_POST['avatar'];
}


$mongoCollection->updateOne(
  [
    'id' => $Uid
  ],
  [
    '$set' => $user
  ]
);
