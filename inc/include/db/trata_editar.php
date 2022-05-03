<?php
include '../../../inc/config.inc.php';
$table = $_GET['tabela'];

include '../../db/models/' . $table . '.php';


$strKey = $_POST['pkey'];

$strNomeCampos = '';

foreach ($arrDados['fields'] as $k => $v) {
    if ($v['edit']) {
        switch ($v['type']) {
            case 'active':
            case 'checkbox':
                if (!isset($_POST[$k])) {
                    $valorCheckbox = 0;
                } else {
                    $valorCheckbox = 1;
                }
                $strNomeCampos .= "$k = '" . $valorCheckbox . "', ";
                break;
            case 'password':
                if ($_POST[$k] != '') {
                    $valorPassword = password_hash($_POST[$k], PASSWORD_DEFAULT);
                    $strNomeCampos .= "$k = '" . $valorPassword . "', ";
                }
                break;
            default:
                if (isset($_POST[$k]))
                    $strNomeCampos .= "$k = '" . $_POST[$k] . "', ";
                break;
        }
    }
}

$strNomeCampos = substr($strNomeCampos, 0, strlen($strNomeCampos) - 2);

$query  = "UPDATE " . $arrDados['table'] . " SET $strNomeCampos WHERE $strKey";
$res    = my_query($query);

header('Location: ' . $arrConfig['url_admin'] . '/dashboard/tables_regular.php?tabela=' . $arrDados['table']);
exit();
