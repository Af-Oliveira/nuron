<?php
// create Client Request to access Google API
global $googleClient;

$googleClient = new Google_Client();
$googleClient->setClientId($config['goolgeApi']['clientID']);
$googleClient->setClientSecret($config['goolgeApi']['clientSecret']);
$googleClient->setRedirectUri($config['goolgeApi']['redirectUri']);
$googleClient->addScope("email");
$googleClient->addScope("profile");
