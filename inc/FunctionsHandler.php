<?php
$folderName = 'functions';

/*$path = $arrConfig['dir_admin'] . "/inc/$folderName";
$di = new RecursiveDirectoryIterator($path);
foreach (new RecursiveIteratorIterator($di) as $filename => $file) {
    if (!is_dir($filename)) {
        include $filename;
    }
}*/

$path = $config['dirs']['site'] . "/inc/$folderName";

$di = new RecursiveDirectoryIterator($path);
foreach (new RecursiveIteratorIterator($di) as $filename => $file) {
    if (!is_dir($filename)) {
        include $filename;
    }
}
