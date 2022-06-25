<?php
include 'inc/config.inc.php';

if (isset($_GET['code'])) {
    $token = $googleClient->fetchAccessTokenWithAuthCode($_GET['code']);
    $_SESSION['access_token'] = $token;
    $googleClient->setAccessToken($token['access_token']);

    // Get profile info
    $google_oauth = new Google_Service_Oauth2($googleClient);
    $google_account_info = $google_oauth->userinfo->get();

    $_SESSION['isLoggedIn'] = $config['isLoggedIn'];

    $_SESSION['uName'] = $google_account_info['givenName'] . ' ' . $google_account_info['familyName'];
    $_SESSION['uId'] = $google_account_info['id'];


    $mongoCollection = $mongoClient->users;

    $resMongoQuery = $mongoCollection->findOne(
        [
            'id' => $google_account_info['id']
        ],
    );

    if (!count($resMongoQuery)) {
        $mongoCollection->insertOne([
            'id' => $google_account_info['id'],
            'name' => $google_account_info['givenName'] . ' ' . $google_account_info['familyName'],
            'usernameF' => $google_account_info['givenName'],
            'usernameL' => $google_account_info['familyName'],
            'email' => $google_account_info['email'],
            'role' => 'User',
            'biography' => '',
            'banner' => 'bg-image-9.jpg',
            'avatar' => 'banner-06.png',
            'gender' => '',
            'Dad' => '',
            'Following' => array(),
            'date' => time(),
            'active' => 1
        ]);
    }
    $bannerdir = $config['dirs']['site'] . '/assets/images/default/bg-image-9.jpg';
    $avatardir = $config['dirs']['site'] . '/assets/images/default/banner-06.png';

    $uploaddirB = $config['dirs']['site'] . '/upload/profiles/' . $google_account_info['id'] . '/banners';
    if (!is_dir($uploaddirB)) {

        echo 'a pasta n existe';
        mkdir($uploaddirB, 0777, true);
    }
    $uploaddirA = $config['dirs']['site'] . '/upload/profiles/' . $google_account_info['id'] . '/avatars';
    if (!is_dir($uploaddirA)) {

        echo 'a pasta n existe';
        mkdir($uploaddirA, 0777, true);
    };

    copy($bannerdir, $uploaddirB . '/bg-image-9.jpg');
    copy($avatardir, $uploaddirA . '/banner-06.png');


    if (!in_array($_SESSION['uId'], $_SESSION['arrSavedAccounts'])) {
        array_push($_SESSION['arrSavedAccounts'], $_SESSION['uId']);
    }
}

header('Location: index.php');
