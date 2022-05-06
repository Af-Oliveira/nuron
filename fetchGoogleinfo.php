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
            'banner' => '',
            'avatar' => '',
            'gender' => '',
            'Dad' => ''
        ]);
    }

    if (!in_array($_SESSION['uId'], $_SESSION['arrSavedAccounts'])) {
        array_push($_SESSION['arrSavedAccounts'], $_SESSION['uId']);
    }
}

header('Location: index.php');
