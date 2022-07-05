<?php

include '../config.inc.php';



$date = json_decode($_GET['date']);
$likes = json_decode($_GET['likes']);
$tag = $_GET['tags'];
$catg = json_decode($_GET['catg']);
$search = isset($_GET['search']) ? $_GET['search'] : '';

if ($date == null) $date = 'all';
if ($likes == null) $likes = 'all';

if ($likes == '-1') $likes = -1;
if ($likes == '1') $likes = 1;

if ($date == '-1') $date = -1;
if ($date == '1') $date = 1;

if ($date == "all" && $likes == "all") {
  $options = [];
} else if ($date != "all" && $likes == "all") {

  $options =  [
    "sort" =>  ['date' =>  $date]
  ];
} else if ($date == "all" && $likes != "all") {

  $options =  [
    "sort" =>  ['likes' => $likes]
  ];
} else if ($date != "all" && $likes != "all") {


  $options = [
    "sort" =>  ['date' =>  $date, 'likes' =>  $likes]
  ];
}
clog($options);
$filter =  ['private' => "0"];
$mongoCollection = $mongoClient->itens;
$All_Art = $mongoCollection->find(
  $filter,
  $options
);
$All_Art = $All_Art->toArray();

if ($tag != "NON") {
  $filter = array();
  foreach ($All_Art as $key => $value) {

    foreach ($value['tags-regular'] as $Search) {

      if ($tag == $Search) {
        $filter[] = $value;
      };
    };
  };

  $All_Art = $filter;
}


if (count($catg) > 0) {
  $filter = array();

  foreach ($All_Art as $key => $value) {
    $isToPass = false;
    foreach ($catg as $Search) {
      if (in_array((string) $Search, (array) $value['categories'])) {
        $isToPass = true;
      };
    };
    if ($isToPass) {
      $filter[] = $value;
    }
  };
  $All_Art = $filter;
}

$resFinal = array();



foreach ($All_Art as $key => $value) {
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


writeArt($resFinal, $config, $mongoClient);

function writeArt($All_Art, $config, $mongoClient)
{
  $string = "";
  foreach ($All_Art as $key => $value) {


    $filter =  ['id' => $value['user'], 'active' => 1];
    $mongoCollection = $mongoClient->users;
    $resMongoQueryuser = $mongoCollection->findOne(
      $filter
    );
    $user = $resMongoQueryuser;

    $url = getUrlFriendly('product-details.php?id=' . $value['id'], $config, $mongoClient);

    $author = getUrlFriendly('author.php?id=' . $user['id'], $config, $mongoClient);
    $string .= ' <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12 sal-animate">
              <div class="product-style-one no-overlay ">
                <div class="card-thumbnail" style="
                height: 17.5em;">
                  <a href="' . $url . '">
                    <img style="width: 100%;
                    height: 100%;
                    object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $user['id'] . '\itens/' . $value['images'][0] . '" alt="NFT_portfolio" />
                  </a>
  
                </div>
                <div class="product-share-wrapper">
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


    $string .= '   </div>
                <a href="' . $url . '"><span class="product-name">' . $value['name'] . '</span></a>
  
                <div class="bid-react-area">
  
                  <div class="">
                    <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                      <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                    </svg>
                    <span class="number">' . count($value['likes']) . '</span>
                  </div>
                </div>
              </div>
            </div>';
  }
  if ($string == "") {
    $string = '<div class="col-12 col-lg-12 col-md-12 col-sm-12 col-12 sal-animate">
        <div class="rn-not-found-wrapper">
                     
                        <h1 style="font-size: 30px;"class="title">No itens were not found!</h1>
                   
                        
                    </div>';
  }


  echo $string;
}
