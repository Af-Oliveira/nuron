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

                    if (in_array($user['id'], (array) $followers['Following'])) {
                      echo '<span id="btnWatch" class="btn at-follw follow-button name blueColor"><i data-feather="user-plus"></i>  WATCH';
                    } else {
                      echo '<span id="btnWatch" class="btn at-follw follow-button name "><i data-feather="user-plus"></i>  WATCH';
                    }

                    echo ' </a>';
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
                <button class="nav-link" id="Arts-tab" data-bs-toggle="tab" data-bs-target="#Arts" type="button" role="tab" aria-controls="Arts" aria-selected="false">
                  Arts
                </button>
                <button class="nav-link active" id="Collection-tab" data-bs-toggle="tab" data-bs-target="#Collection" type="button" role="tab" aria-controls="Collection" aria-selected="true">
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
        <div class="tab-pane row g-5 d-flex fade" id="Arts" role="tabpanel" aria-labelledby="Arts-tab">
          <!-- start single product -->
          <?php

          //fin all item that belong to user['id']
          $filter =  ['user' => $user['id']];
          $mongoCollection = $mongoClient->itens;
          $resMongoQueryuser = $mongoCollection->find(
            $filter
          );
          $items = $resMongoQueryuser;
          $items = $items->toArray();
          clog($items);
          foreach ($items as $key => $value) {
            if ($value['private'] != "1") {
              $url = getUrlFriendly('product-details.php?id=' . $value['id'], $config, $mongoClient);
              $edit = getUrlFriendly('edit_item.php?model=itens&id=' . $value['id'], $config, $mongoClient);
              $author = getUrlFriendly('author.php?id=' . $user['id'], $config, $mongoClient);
              echo ' <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="product-style-one no-overlay with-placeBid">
                <div class="card-thumbnail">
                  <a href="' . $url . '">
                    <img src="' . $config['urls']['site'] . '/upload/profiles/' . $user['id'] . '\itens/' . $value['images'][0] . '" alt="NFT_portfolio" />
                  </a>
  
                </div>
                <div class="product-share-wrapper">
                  <div class="thumbnail" style="display:flex">
                    <div style="margin-right: 12px;width: 3.5em; height: 3.5em;">
                      <a href="' . $author . '" class="avatar" data-tooltip="' . $user['name'] . '"><img style="border-radius: 100px;width: 100%;height: 100%; object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $user['id'] . '\avatars/' . $user['avatar'] . '" alt="Nft_Profile" /></a>
                      
                    </div>
                    <a class="more-author-text" href="' . $author . '">Created by: ' . $user['name'] . '</a>
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

        <div class="tab-pane row g-5 d-flex fade show active" id="Collection" role="tabpanel" aria-labelledby="Collection-tab">
          <!-- start single product -->

          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Total Mars"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Total"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Mars"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">9+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Scourd</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>

          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="David Worner"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Worner"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="David"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">16+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Resord</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.264wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">622</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Sobuj Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sobuj"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">22+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Jackpot</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="MArk Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="MArk"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">13+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Xtreames</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">922</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Tawhid Sabir"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Tawhid"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sabir"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">5+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">NameStroam</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">532</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Total Mars"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Total"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Mars"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">9+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Scourd</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="David Worner"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Worner"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="David"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">16+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Resord</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.264wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">622</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Sobuj Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sobuj"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">22+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Jackpot</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="MArk Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="MArk"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">13+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Xtreames</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">922</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
        </div>
        <div class="tab-pane row g-5 d-flex fade" id="Subscriptions" role="tabpanel" aria-labelledby="Subscriptions-tab">
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Sadikur Ali"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Ali"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sadikur"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">9+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">BadBo66</span></a>
              <span class="latest-bid">Highest bid 6/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.234wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Updane Jack"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Jack"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Updane"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">10+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Preatent</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Rabbanin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sadik Rabbanin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sadika"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">10+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">ModaL6</span></a>
              <span class="latest-bid">Highest bid 2/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.344wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Saladin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="David Saladin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="David"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">21+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Tabs38</span></a>
              <span class="latest-bid">Highest bid 3/30</span>
              <div class="bid-react-area">
                <div class="last-bid">0.544wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">422</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Jope Baiden"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Jope"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Baiden"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">12+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">TopBad</span></a>
              <span class="latest-bid">Highest bid 6/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">124</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Tawhid Sabir"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Tawhid"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sabir"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">5+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">NameStroam</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">532</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Total Mars"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Total"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Mars"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">9+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Scourd</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="David Worner"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Worner"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="David"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">16+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Resord</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.264wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">622</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Sobuj Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sobuj"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">22+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Jackpot</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="MArk Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="MArk"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">13+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Xtreames</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">922</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
        </div>
        <div class="tab-pane row g-5 d-flex fade" id="Liked" role="tabpanel" aria-labelledby="Subscriptions-tab">
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Tawhid Sabir"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Tawhid"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sabir"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">5+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">NameStroam</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">532</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Total Mars"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Total"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Mars"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">9+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Scourd</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="David Worner"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Worner"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="David"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">16+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Resord</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.264wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">622</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Sobuj Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sobuj"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">22+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Jackpot</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="MArk Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="MArk"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">13+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Xtreames</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">922</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Tawhid Sabir"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Tawhid"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sabir"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">5+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">NameStroam</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">532</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Total Mars"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Total"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Mars"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">9+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Scourd</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="David Worner"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Worner"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="David"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">16+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Resord</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.264wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">622</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="Sobuj Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Sobuj"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">22+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Jackpot</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">322</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
          <!-- start single product -->
          <div class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="product-style-one no-overlay with-placeBid">
              <div class="card-thumbnail">
                <a href="product-details.html">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" />
                </a>
                <a href="product-details.html" class="btn btn-primary">Place Bid</a>
              </div>
              <div class="product-share-wrapper">
                <div class="profile-share">
                  <a href="author.html" class="avatar" data-tooltip="MArk Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="MArk"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                  <a href="author.html" class="avatar" data-tooltip="Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                  <a class="more-author-text" href="#">13+ Place Bit.</a>
                </div>
                <div class="share-btn share-btn-activation dropdown">
                  <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                    </svg>
                  </button>

                  <div class="share-btn-setting dropdown-menu dropdown-menu-end">
                    <button type="button" class="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                      Share
                    </button>
                    <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                      Report
                    </button>
                  </div>
                </div>
              </div>
              <a href="product-details.html"><span class="product-name">Xtreames</span></a>
              <span class="latest-bid">Highest bid 1/20</span>
              <div class="bid-react-area">
                <div class="last-bid">0.244wETH</div>
                <div class="react-area">
                  <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                  </svg>
                  <span class="number">922</span>
                </div>
              </div>
            </div>
          </div>
          <!-- end single product -->
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="rn-popup-modal report-modal-wrapper modal fade" id="reportModal" tabindex="-1" aria-hidden="true">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
      <i data-feather="x"></i>
    </button>
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content report-content-wrapper">
        <div class="modal-header report-modal-header">
          <h5 class="modal-title">Why are you reporting?</h5>
        </div>
        <div class="modal-body">
          <p>
            Describe why you think this item should be removed from
            marketplace
          </p>
          <div class="report-form-box">
            <h6 class="title">Message</h6>
            <textarea name="message" placeholder="Write issues"></textarea>
            <div class="report-button">
              <button type="button" class="btn btn-primary mr--10 w-auto">
                Report
              </button>
              <button type="button" class="btn btn-primary-alta w-auto" data-bs-dismiss="modal">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Start Footer Area -->
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