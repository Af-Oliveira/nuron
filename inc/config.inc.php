<?php
require_once __DIR__ . '/../vendor/autoload.php';

@session_start();

global $config;

//? Config
$rootURl = 'http://localhost:8080/rainbowit.net/html/nuron';
#$rootURl = 'http://mysterious-tue-votes-summer.trycloudflare.com:8080/rainbowit.net/html/nuron';
$rootDir = 'C:\xampp\htdocs\rainbowit.net\html\nuron';

$config = [
    'mongo' => [
        'username' => 'AF2004',
        'password' => 'afonso2004',
        'name' => 'OnartDB'
    ],
    'goolgeApi' => [
        'clientID' => '946384828857-on4o92bv71c4j86b3ak8igj3a0dui2t1.apps.googleusercontent.com',
        'clientSecret' => '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',
        'redirectUri' => $rootURl . '/fetchGoogleinfo.php',
    ],
    'isLoggedIn' => '25A8FC2A-98F2-4B86-98F6-84324AF28611',
    'urls' => [
        'site' => $rootURl,
        'admin' => $rootURl . '/admin'
    ],
    'dirs' => [
        'site' => $rootDir,
        #'admin' => $rootDir . '\admin',
        #'adminIncludes' => $rootDir . '\admin\inc',
        #'pictures' => $rootDir . '\pictures',
        'upload' => $rootDir . '\upload',
        'includes' => $rootDir . '\inc',
        'handlers' => $rootDir . '\inc\handlers',
        'functions' => $rootDir . '\inc\functions',
        'auth' => $rootDir . '\inc\auth',
        'db' => $rootDir . '\inc\database'
    ]
];

//? Database & Utils
global $googleClient;
include_once $config['dirs']['auth'] . '\google.auth.php';
global $mongoClient;
include_once $config['dirs']['db'] . '\mongo.conn.php';

include_once $config['dirs']['includes'] . '\FunctionsHandler.php';
if (!isset($_SESSION['arrSavedAccounts'])) {
    $_SESSION['arrSavedAccounts'] = array();
}
