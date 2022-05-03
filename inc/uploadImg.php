
<?php
include 'config.inc.php';
$pasta = $_GET['pasta'];


$uploaddir = $config['dirs']['site'] . '/upload/' . $pasta . '/';
$uploadfile = $uploaddir . basename($_FILES['file']['name']);

if (!is_dir($uploaddir)) {
    echo $uploaddir;

    echo 'a pasta n existe';
    mkdir($uploaddir, 0777, true);
}

echo '<pre>';
if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadfile)) {
    echo "Arquivo válido e enviado com sucesso.\n";
} else {
    echo "Possível ataque de upload de arquivo!\n";
}

echo 'Aqui está mais informações de debug:';

print "</pre>";




?>
