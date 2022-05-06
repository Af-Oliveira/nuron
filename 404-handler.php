<?php

include 'inc/config.inc.php';


include 'inc/config.inc.php';
$request = $_SERVER['REQUEST_URI'];
$url = trim($request, '/');
$url = explode('/', $url);
$id_strg='';

//Finding id
foreach ($url as $key => $value) {

  $collections = ['itens','collections','users','blogs'];
       foreach ($collections as $k => $v) {
        $filter =  ['id' => $value];
        $mongoCollection = $mongoClient->$v;
        $MDB_id = $mongoCollection->findOne(
          $filter
        );
        $MDB_id = $MDB_id->toArray();
     if(count($MDB_id)){
      $id_str='/'.$MDB_id['id'].'/'.$MDB_id['name'];
      }
}


foreach ($url as $key => $value) {

    $filter =  ['id_UrlF' => '/'.$value];
    $mongoCollection = $mongoClient->SEO;
    $SEO_url = $mongoCollection->findOne(
      $filter
    );
    $SEO_url=$SEO_url->toArray();
    if(count($MDB_id)){{
      require
    }
}

       }

       


        if(isset($_GET['id'])){
            require 'views/index.php';
        }
        require __DIR__ . '/views/index.php';
    }
    switch ($$value) {

        case 'index.ph': 
            require __DIR__ . '/views/index.php';
            break;
        case '' :
            require __DIR__ . '/views/index.php';
            break;
        case '/about' :
            require __DIR__ . '/views/about.php';
            break;
        default:
            http_response_code(404);
            require __DIR__ . '/views/404.php';
            break;
    }

}

?>
