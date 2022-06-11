<?php
include 'inc/config.inc.php';

// Destroy $googleCLient
if (isset($_SESSION['access_token'])) {
    $googleClient->revokeToken($_SESSION['access_token']);
}

if (isset($_GET['add'])) {
    if ($_GET['add']) {
        header('Location: ' . $googleClient->createAuthUrl());
        exit();
    }
} else {
    $arrSavedAccounts = $_SESSION['arrSavedAccounts'];
    $key = array_search($_SESSION['uId'], $arrSavedAccounts);
    if ($key !== false) {
        unset($arrSavedAccounts[$key]);
    }
    session_destroy();
    @session_start();
    $_SESSION['arrSavedAccounts'] = $arrSavedAccounts;
    $_SESSION['uId'] = -1;
?>
    <script>
        window.onload = function() {
            window.location.replace("<?= $config['urls']['site'] ?>");
        }
    </script>
<?php
}
