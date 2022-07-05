<?php
include 'inc/config.inc.php';
$vars = isset($params) ?  $params : $_GET;
$id = $vars['id'];
$filter =  ['id' => $id];
$mongoCollection = $mongoClient->users;
$resMongoQueryuser = $mongoCollection->findOne(
  $filter
);
$user = $resMongoQueryuser;
$url = $config['urls']['site'] . '/upload/profiles/' . $user['id'] . '/banners/' . $user['banner'];
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Author || Nuron - NFT Marketplace Template</title>
  <meta name="robots" content="noindex, follow" />
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  <meta name="theme-style-mode" content="1" />
  <!-- 0 == light, 1 == dark -->

  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="<?php echo $config['urls']['site'] ?>/assets/images/favicon.png" />
  <!-- CSS 
    ============================================ -->
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/bootstrap.min.css" />
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/slick.css" />
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/slick-theme.css" />
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/nice-select.css" />
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/plugins/feature.css" />
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/plugins/jquery-ui.min.css" />
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/odometer.css" />

  <!-- Style css -->
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/style.css" />
</head>
<span style="display:none" id="ID"><?= $user['id'] ?></span>
<span style="display:none" id="user_ID"><?= $_SESSION['uId'] ?></span>

<style type="text/css">
  .Banner {
    background-image: url("<?php echo $url ?>");
    height: 30em;

  }

  .blueColor {
    font-weight: bold;
    color: #000000c2 !important;
    display: block !important;
    background-color: #188fe4c2 !important;
  }
</style>

<body class="template-color-1 nft-body-connect">
  <?php
  echo menu($mongoClient, $googleClient, $config)
  ?>
  <div id="banner" class="rn-author-bg-area Banner bg_image ptb--150">
    <div class="container">
      <div class="row"></div>
    </div>
  </div>'

  <div class="rn-author-area mb--30 mt_dec--120">
    <div class="container">
      <div class="row padding-tb-50 align-items-center d-flex">
        <div class="col-lg-12">
          <div class="author-wrapper">
            <div class="author-inner">
              <div class="user-thumbnail">
                <img src="<?php echo $config['urls']['site'] . '/upload/profiles/' . $user['id'] . '\avatars/' . $user['avatar'] ?>" alt="" />
              </div>
              <div class="rn-author-info-content">
                <h4 class="title"><?= $user['name'] ?></h4>
                <div class="follow-area">
                  <div class="follow followers">
                    <?php
                    //find the number of followers
                    $filter =  ['active' => 1, 'following' => $user['id']];
                    $mongoCollection = $mongoClient->users;
                    $resMongoQueryuser = $mongoCollection->find(
                      $filter
                    );
                    $following = $resMongoQueryuser;
                    $following = $following->toArray();
                    $followersCount = count($following);
                    ?>
                    <span><?= $followersCount ?><a href="#" class="color-body"> Watchers</a></span>
                  </div>
                </div>
                <div class="author-button-area">

                  <?php
                  if ($_SESSION['uId'] != -1) {
                    echo ' <a id="Watch">';

                    $filter =  ['id' => $_SESSION['uId']];
                    $mongoCollection = $mongoClient->users;
                    $resMongoQueryUser = $mongoCollection->findOne(
                      $filter
                    );
                    $followers = $resMongoQueryUser;
                    if ($user['id'] != $_SESSION['uId'] && $_SESSION['uId'] != -1) {
                      if (in_array($user['id'], (array) $followers['Following'])) {
                        echo '<span id="btnWatch" class="btn at-follw follow-button name blueColor"><i data-feather="user-plus"></i>  WATCH';
                      } else {
                        echo '<span id="btnWatch" class="btn at-follw follow-button name "><i data-feather="user-plus"></i>  WATCH';
                      }

                      echo ' </a>';
                    }
                  }


                  if ($user['id'] == $_SESSION['uId']) {
                    echo '    <a href="' . getUrlFriendly('edit-profile.php?idforms=' . $user['id'], $config, $mongoClient) . '" class="btn at-follw follow-button edit-btn"><i data-feather="edit"></i></a>';
                  }
                  ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rn-authore-profile-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="tab-wrapper-one">
            <nav class="tab-button-one">
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button class="nav-link active" id="Arts-tab" data-bs-toggle="tab" data-bs-target="#Arts" type="button" role="tab" aria-controls="Arts" aria-selected="false">
                  Arts
                </button>
                <button class="nav-link " id="Collection-tab" data-bs-toggle="tab" data-bs-target="#Collection" type="button" role="tab" aria-controls="Collection" aria-selected="true">
                  Collection
                </button>
                <button class="nav-link" id="Subscriptions-tab" data-bs-toggle="tab" data-bs-target="#Subscriptions" type="button" role="tab" aria-controls="
                " aria-selected="false">
                  Subscriptions
                </button>
                <button class="nav-link" id="Liked-tab" data-bs-toggle="tab" data-bs-target="#Liked" type="button" role="tab" aria-controls="Liked" aria-selected="false">
                  Liked
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div class="tab-content rn-bid-content" id="nav-tabContent">
        <div class="tab-pane row g-5 d-flex fade show active" id="Arts" role="tabpanel" aria-labelledby="Arts-tab">
          <!-- start single product -->
          <?php


          $filter =  ['user' => $user['id']];
          $mongoCollection = $mongoClient->itens;
          $resMongoQueryuser = $mongoCollection->find(
            $filter
          );
          $items = $resMongoQueryuser;
          $items = $items->toArray();

          foreach ($items as $key => $value) {
            if ($value['private'] != "1") {
              $url = getUrlFriendly('product-details.php?id=' . $value['id'], $config, $mongoClient);
              $edit = getUrlFriendly('edit_item.php?model=itens&id=' . $value['id'], $config, $mongoClient);
              $author = getUrlFriendly('author.php?id=' . $user['id'], $config, $mongoClient);
              echo ' <div class="col-5 col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
              <div class="product-style-one no-overlay with-placeBid">
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

              if ($user['id'] == $_SESSION['uId']) {
                echo '
                  <div " class="share-btn share-btn-activation dropdown">
                    <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                      </svg>
                    </button>
  
                    <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                      <a href="' . $edit . '" type="button" class="btn-setting-text share-text">
                        Edit
                      </a>
  
                    </div>
                  </div>';
              }
              echo '
                </div>
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
          }
          ?>
        </div>

        <div class="tab-pane row g-5 d-flex fade " id="Collection" role="tabpanel" aria-labelledby="Collection-tab">
          <?php
          //find all collectrions from user['id']
          $filter =  ['user' => $user['id']];
          $mongoCollection = $mongoClient->collections;
          $resMongoQuerycollections = $mongoCollection->find(
            $filter
          );
          $collectionsUser = $resMongoQuerycollections->toArray();

          //supportr variables
          $orderBy = array();

          //find all items 
          $filter =  ['private' => "0", 'user' => $user['id']];
          $mongoCollection = $mongoClient->itens;
          $allItens = $mongoCollection->find(
            $filter,
          );

          $allItens = $allItens->toArray();
          clog($allItens);
          //find all items from collection
          foreach ($collectionsUser as $key => $Search) {
            $count = 0;
            $Collection = array();
            foreach ($allItens as $key => $value) {
              clog($value['id']);
              //if items is inside collection
              if (in_array($Search['id'], (array) $value['collection'])) {
                clog("entrei dentro do if");
                //Update collection array
                $Collection[] = [
                  'id' => $value['id'],
                  'date' => $value['date']
                ];

                //Allow to order Collection array by date
                $orderBy[$count] = $value['date'];
                $count++;
              };
              clog(count($Collection));
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
              $edit = getUrlFriendly('edit_item.php?model=collections&id=' . $value['id'], $config, $mongoClient);
              echo '<div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
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

                echo ' <img style="width: 100%;
                height: 100%;
                object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $user['id'] . '\itens/' . $CItem['images'][0] . '" alt="NFT_portfolio" />';
              }
              echo ' </div>
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
                       </div> </div>';

              if ($user['id'] == $_SESSION['uId']) {
                echo '
                       <div " class="share-btn share-btn-activation dropdown">
                         <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                             <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                           </svg>
                         </button>
       
                         <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                           <a href="' . $edit . '" type="button" class="btn-setting-text share-text">
                             Edit
                           </a>
       
                         </div>
                       </div>';
              }
              echo '
                    
                      </div>

                       </a>                   
                   </div>';
            };
          };
          ?>

          <!-- end single product -->
        </div>
        <div class="tab-pane row g-5 d-flex fade" id="Subscriptions" role="tabpanel" aria-labelledby="Subscriptions-tab">
          <!-- start single product -->

          <?php

          $filter =  ['id' => $user['id']];
          $mongoCollection = $mongoClient->users;
          $resMongoQueryuser = $mongoCollection->findOne(
            $filter
          );
          clog($resMongoQueryuser);
          $ArrFollowing = (isset($resMongoQueryuser['Following']) ? $resMongoQueryuser['Following'] : array());
          foreach ($ArrFollowing as $key => $value) {

            $filter =  ['id' => '' . $value . ''];
            $mongoCollection = $mongoClient->users;
            $Following = $mongoCollection->findOne(
              $filter
            );

            echo '  <div class="col-5 col-lg-3 col-xl-3 col-md-4 col-sm-3 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail" style="height: 17em;">
                <a href="' . getUrlFriendly('author.php?id=' . $Following['id'], $config, $mongoClient) . '">
                  <img style="border: 5px solid white;width: 100%;height: 100%;object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $Following['id'] . '\avatars/' . $Following['avatar'] . '" alt="NFT_portfolio" />
                </a>

              </div> 
              <div style="padding-top:25px">           
              <span class="latest-bid">Artist:</span>
              <a href="' . getUrlFriendly('author.php?id=' . $Following['id'], $config, $mongoClient) . '"><span class="product-name">' . $Following['name'] . '</span></a>
              </div>
            </div>
          </div>';
          }
          ?>
          <!-- end single product -->
        </div>
        <div class="tab-pane row g-5 d-flex fade" id="Liked" role="tabpanel" aria-labelledby="Subscriptions-tab">
          <!-- start single product -->

          <!-- end single product -->
        </div>
      </div>
    </div>
  </div>

  <?php
  echo footer($mongoClient, $config);
  ?>
  <!-- End Footer Area -->
  <div class="mouse-cursor cursor-outer"></div>
  <div class="mouse-cursor cursor-inner"></div>
  <!-- Start Top To Bottom Area  -->
  <div class="rn-progress-parent">
    <svg class="rn-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
  <!-- End Top To Bottom Area  -->
  <!-- JS ============================================ -->
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/jquery.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/jquery.nice-select.min.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/jquery-ui.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/modernizer.min.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/feather.min.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/slick.min.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/bootstrap.min.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/sal.min.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/particles.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/jquery.style.swicher.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/js.cookie.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/count-down.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/isotop.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/imageloaded.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/backtoTop.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/odometer.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/jquery-appear.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/scrolltrigger.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/jquery.custom-file-input.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/savePopup.js"></script>

  <!-- main JS -->
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/main.js"></script>
  <!-- Meta Mask  -->
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/web3.min.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/maralis.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/nft.js"></script>
</body>

<script>
  $("#Watch").on("click", function(e) {
    e.preventDefault();
    const data = $("#ID").html();
    const config = '<?= $config['urls']['site'] ?>';
    const id = $("#user_ID").html();
    const btnWatch = document.getElementById("btnWatch");
    if (btnWatch.classList.contains("blueColor")) {
      btnWatch.classList.remove("blueColor");
    } else {
      btnWatch.classList.add("blueColor");
    }

    $.ajax({
      url: `<?= $config['urls']['site'] ?>/inc/handlers/Subcription.php?WatchID=${data}&user_id=${id}`,
      type: "GET",
    });
  });
</script>

</html>