<?php

include '../config.inc.php';

$date = json_decode($_GET['date']);
$search = isset($_GET['search']) ? $_GET['search'] : '';

if ($date == null) $date = 'all';

if ($date == '-1') $date = -1;
if ($date == '1') $date = 1;

if ($date == "all") {
  $options = [];
} else if ($date != "all") {

  $options =  [
    "sort" =>  ['date' =>  $date]
  ];
}


$filter =  ['private' => "0"];
$mongoCollection = $mongoClient->collections;
$All_Coll = $mongoCollection->find(
  $filter,
  $options
);
$All_Coll = $All_Coll->toArray();
$resFinal =  array();

foreach ($All_Coll as $key => $value) {

  $filter =  ['id' => $value['user'], 'active' => 1];
  $mongoCollection = $mongoClient->users;
  $resMongoQueryuser = $mongoCollection->findOne(
    $filter
  );
  $user = $resMongoQueryuser['name'];
  $isToPass = false;
  if ($search == "") {
    $isToPass = true;
  } else {
    if (strpos(strtolower($value['name']), strtolower($search)) !== false) {
      $isToPass = true;
    }
    if (strpos(strtolower($user), strtolower($search)) !== false) {
      $isToPass = true;
    }
  };
  if ($isToPass) {
    $resFinal[] = $value;
  }
}


writeColl($resFinal, $config, $mongoClient);

function writeColl($resFinal, $config, $mongoClient)
{


  $string = "";
  //find all items 
  $filter =  ['private' => "0",];
  $mongoCollection = $mongoClient->itens;
  $allItens = $mongoCollection->find(
    $filter,
  );
  $allItens = $allItens->toArray();


  //find all items from collection
  foreach ($resFinal as $key => $Search) {


    $filter =  ['id' => $Search['user'], 'active' => 1];
    $mongoCollection = $mongoClient->users;
    $resMongoQueryuser = $mongoCollection->findOne(
      $filter
    );
    $user = $resMongoQueryuser;

    $count = 0;
    $Collection = array();
    $orderBy = array();
    foreach ($allItens as $key => $value) {

      //if items is inside collection
      if (in_array($Search['id'], (array) $value['collection'])) {

        //Update collection array
        $Collection[] = [
          'id' => $value['id'],
          'date' => $value['date']
        ];

        //Allow to order Collection array by date
        $orderBy[] = $value['date'];
      };
    };

    //Number of pic that will be shown

    if (count($Collection) >= 4) {
      $number = 4;
    } else if (count($Collection) < 4) {
      if (count($Collection) == 0) {
        $number = 0;
      } else {
        $number = 1;
      }
    }

    //Oder array Collection by date
    array_multisort($orderBy, SORT_DESC, $Collection);

    clog($Collection[0]['id']);
    if ($number != 0) {
      $filter =  ['id' => $Collection[0]['id']];
      $mongoCollection = $mongoClient->itens;
      $CItem = $mongoCollection->findOne(
        $filter,
      );
      $author = getUrlFriendly('author.php?id=' .  $Search['user'], $config, $mongoClient);
      $string .= '<div class="col-4 col-lg-3 col-md-3 col-sm-12 col-12 sal-animate">
                     <a href="' . getUrlFriendly('collections-details.php?id=' . $Search['id'], $config, $mongoClient) . '" class="rn-collection-inner-one">
                       <div class="collection-wrapper">
                         <div class="card-thumbnail" style=";
                         height: 17.5em;">
                            <img style="width: 100%;
                            height: 100%;
                            object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $user['id'] . '\itens/' . $CItem['images'][0] . '" alt="NFT_portfolio" />
       
                          </div>
                          <div class="collenction-small-thumbnail" style="height: 5em;">';
      for ($i = 1; $i < $number; $i++) {
        $filter =  ['id' => $Collection[$i]['id']];
        $mongoCollection = $mongoClient->itens;
        $CItem = $mongoCollection->findOne(
          $filter,
        );

        $string .= ' <img style="width: 100%;
                height: 100%;
                object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $user['id'] . '\itens/' . $CItem['images'][0] . '" alt="NFT_portfolio" />';
      }
      $string .= ' </div>
                              <div class="collection-deg">
                                <h6 class="title">' . $Search['name'] . '</h6>
                                <span class="items">' . count($Collection) . ' Items</span>
                              </div>
                                

                              
                       </div>

                       <div style="position: relative;
                       padding: 18px;  margin-top: -18px;
                       background: var(--background-color-1);
                       border-radius: 5px;">

                       <div class="product-share-wrapper" style="justify-content: left;">
                       <div class="thumbnail" style="display:flex">
                         <div style="margin-right: 12px;width: 3em; height: 3em;">
                           <a href="' . $author . '" class="avatar" data-tooltip="' . $user['name'] . '"><img style="border-radius: 100px;width: 100%;height: 100%; object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $user['id'] . '\avatars/' . $user['avatar'] . '" alt="Nft_Profile" /></a>
                           
                         </div>
                         <div style="display:flex">
                         <ul style="display: inline;
                         list-style: none;
                         padding: 0px;
                         margin: 0px;">
                         <li style="
                         padding: 0px;">  <a class="more-author-text" href="' . $author . '">Created by:</a>    </li>
                         <li style="margin-top: -10px;
                         padding: 0px;">   <a class="more-author-text" href="' . $author . '">' . $user['name'] . '</a> </li>
                         </ul>
                         </div>
                       </div>';
      $string .= '
                     </div>
                      </div>

                       </a>                   
                   </div>';
    };
  };


  if ($string == "") {
    $string = '<div class="col-12 col-lg-12 col-md-12 col-sm-12 col-12 sal-animate">
        <div class="rn-not-found-wrapper">
                     
                        <h1 style="font-size: 30px;"class="title">No itens were not found!</h1>
                   
                        
                    </div>';
  }


  echo $string;
}
