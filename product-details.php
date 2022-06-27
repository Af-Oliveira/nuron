<?php
include 'inc/config.inc.php';

$vars = isset($params) ?  $params : $_GET;
$id = $vars['id'];
$filter =  ['id' => $id];
$mongoCollection = $mongoClient->itens;
$resMongoQueryitem = $mongoCollection->findOne(
  $filter
);
$data = $resMongoQueryitem;
$slide_big = ['v-pills-home-tab', 'v-pills-profile-tab', 'v-pills-messages-tab'];
$slide_small = ['v-pills-home', 'v-pills-profile', 'v-pills-messages'];

$filter =  ['id' => $data['user']];
$mongoCollection = $mongoClient->users;
$resMongoQueryUser = $mongoCollection->findOne(
  $filter
);
$artist = $resMongoQueryUser;


clog($data);
clog($artist);

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Blog Details || Nuron - NFT Marketplace Template</title>
  <meta name="robots" content="noindex, follow" />
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <meta name="theme-style-mode" content="1"> <!-- 0 == light, 1 == dark -->

  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="<?php echo $config['urls']['site'] ?>/assets/images/favicon.png">
  <!-- CSS 
    ============================================ -->
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/bootstrap.min.css">
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/slick.css">
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/slick-theme.css">
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/nice-select.css">
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/plugins/feature.css">
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/plugins/jquery-ui.min.css">
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/odometer.css">

  <!-- Style css -->
  <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/style.css">

</head>

<body class="template-color-1 nft-body-connect">
  <span style="display:none" id="ID"><?= $artist['id'] ?></span>
  <span style="display:none" id="art_ID"><?= $data['id'] ?></span>
  <span style="display:none" id="user_ID"><?= $_SESSION['uId'] ?></span>
  <style>
    .blueColor {
      color: blue;
    }

    .blueColor2 {
      background: blue !important;
    }

    .BtnR:hover {
      background-color: rgb(47, 191, 206) !important;
    }

    .like-dislike-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: right;
    }

    .R {
      text-align: right !important;
    }


    * {
      box-sizing: border-box;
    }

    button>* {
      pointer-events: none;
    }

    button {

      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      font-size: 14px;
      padding: 4px 8px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }

    button:hover,
    button:focus,
    button:active {
      cursor: pointer;

    }

    .comment-thread {
      width: 100%;

      margin: auto;


      border: 1px solid transparent;
      /* Removes margin collapse */
    }

    .m-0 {
      margin: 0;
    }

    .sr-only {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }

    /* Comment */

    .comment {
      position: relative;
      margin: 20px auto;
    }

    .comment-heading {
      background: #3C475E;
      border-radius: 7px;
      display: flex;
      align-items: center;
      height: 63px;
      font-size: 14px;
    }

    .comment-voting {
      width: 20px;
      height: 32px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }

    .comment-voting button {
      display: block;
      width: 100%;
      height: 50%;
      padding: 0;
      border: 0;
      font-size: 10px;
    }

    .comment-info {
      color: rgba(0, 0, 0, 0.5);
      margin-left: 10px;
    }

    .comment-author {
      color: rgb(255 255 255 / 85%);
      font-weight: bold;
      text-decoration: none;
      font-size: 17px;
    }

    .comment-author:hover {
      text-decoration: underline;
    }

    .replies {
      margin-left: 20px;
    }

    /* Adjustments for the comment border links */

    .comment-border-link {
      display: block;
      position: absolute;
      top: 63px;
      left: 0;
      width: 12px;
      height: calc(100% - 63px);
      border-left: 9px solid transparent;
      border-right: 4px solid transparent;
      background-color: rgb(255 255 255 / 10%);
      background-clip: padding-box;
      padding-left: 7px;
    }

    .comment-border-link:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }

    .comment-body {
      border-radius: 7px;
      background: #212E48;
      padding: 0 20px;
      padding-left: 28px;
      padding-bottom: 15px;
      margin-top: -10px;
      padding-top: 15px;
    }

    .replies {
      margin-left: 28px;
    }

    /* Adjustments for toggleable comments */

    details.comment summary {
      position: relative;
      list-style: none;
      cursor: pointer;
    }

    details.comment summary::-webkit-details-marker {
      display: none;
    }

    details.comment:not([open]) .comment-heading {
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    .comment-heading::after {
      display: inline-block;
      position: absolute;
      right: 5px;
      align-self: center;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.55);
    }

    details.comment[open] .comment-heading::after {
      color: white;
      font-weight: bold;
      font-size: 15px;
      margin-top: -30px;
      content: "Click to hide";
    }

    details.comment:not([open]) .comment-heading::after {
      color: white;
      font-weight: bold;
      font-size: 15px;
      margin-top: -30px;
      content: "Click to show";
    }

    /* Adjustment for Internet Explorer */

    @media screen and (-ms-high-contrast: active),
    (-ms-high-contrast: none) {

      /* Resets cursor, and removes prompt text on Internet Explorer */
      .comment-heading {
        cursor: default;
      }

      details.comment[open] .comment-heading::after,
      details.comment:not([open]) .comment-heading::after {
        content: " ";
      }
    }

    /* Styling the reply to comment form */

    .reply-form textarea {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 16px;
      width: 100%;
      max-width: 100%;
      margin-top: 15px;
      margin-bottom: 5px;
    }

    .d-none {
      display: none;
    }

    .smallB {
      width: 10em;
      height: 10em;
    }

    .bigB {
      flex-basis: 80%;
      height: 38em !important;
      width: 38em;
      padding-left: 0px;
      margin-right: -10px;
    }

    @media (max-width: 770px) {

      .smallB {
        width: 6.5em;
        height: 6.5em;
      }

      .bigB {
        flex-basis: 80%;
        height: 25em !important;
        width: 38em;
        padding-left: 0px;
        margin-right: -10px;
      }
    }

    @media (max-width: 500px) {

      .smallB {
        width: 6.5em;
        height: 6.5em;
      }

      .bigB {
        flex-basis: 80%;
        height: 20em !important;
        width: 38em;
        margin-bottom: 10px !important;
        margin-right: -10px !important;
      }
    }

    @media (max-width: 500px) {

      .smallB {
        width: 5.5em;
        height: 5.5em;
      }

      .bigB {
        flex-basis: 80%;
        height: 15em !important;
        width: 38em;
        margin-bottom: 10px !important;
        margin-right: -10px !important;
      }
    }
  </style>




  <!-- Start Header -->
  <?php
  echo menu($mongoClient, $googleClient, $config)
  ?>
  <!-- end page title area -->
  <div class="product-share-wrapper">
    <div class="share-btn share-btn-activation dropdown">
      <button class="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <svg viewBox="0 0 14 4" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN hOiKLt">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
        </svg>
      </button>

      <div class="share-btn-setting dropdown-menu dropdown-menu-end">

        <button type="button" class="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
          Report
        </button>
      </div>
    </div>
  </div>

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
  <!-- blog details area start -->
  <div class="rn-blog-area rn-blog-details-default rn-section-gapTop" style=" background-image: url(&quot;https://st.deviantart.net/eclipse/global/svg/p13-stage-dark_v2.svg&quot;);padding-top:45px">
    <div class="container">
      <div class="row g-6">
        <div class="col-xl-8 col-lg-8">
          <div class="rn-blog-listen">
            <div class="bd-thumbnail">
              <div class="large-img mb--30">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="product-tab-wrapper rbt-sticky-top-adjust">
                    <div class="pd-tab-inner" style="align-items: center;
                    justify-content: center;">

                      <div style="margin-top: auto;display:flex;align-items: center;
                    justify-content: center;padding-right: 0px;" class="nav rn-pd-nav rn-pd-rt-content nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                        <?php
                        $count = 0;
                        foreach ($data['images'] as $key => $value) {
                          echo '    <button class="nav-link';
                          echo ($count == 0) ? '  active ' : '';
                          echo ' " id="' . $slide_big[$key] . '" data-bs-toggle="pill" data-bs-target="#' . $slide_small[$key] . '" type="button" role="tab" aria-controls="' . $slide_small[$key] . '" aria-selected="true">
                          <span class="rn-pd-sm-thumbnail smallB " >
                            <img style="
                          width: 100%;
                          height: 100%;

                            object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $data['user'] . '/itens/' . $value . '" alt="Nft_Profile" />
                          </span>
                        </button>';
                          $count++;
                        }
                        ?>
                      </div>

                      <div class="tab-content rn-pd-content bigB" id="v-pills-tabContent">
                        <?php
                        $count = 0;
                        foreach ($data['images'] as $key => $value) {


                          echo '    <div class="tab-pane fade  ';
                          echo ($count == 0) ? ' show active' : '';
                          echo '" id="' . $slide_small[$key] . '" role="tabpanel" aria-labelledby="' . $slide_big[$key] . '" >
                          <div class="rn-pd-thumbnail" style="display: flex;
                          align-items: center;
                          justify-content: center;
                          height: 100%;
                          width: 100%;">
                            <img  style="width: 100%;
                            height: 100%;
                            object-fit: contain;" src="' . $config['urls']['site'] . '/upload/profiles/' . $data['user'] . '/itens/' . $value . '" alt="Nft_Profile" />
                          </div>
                        </div>';
                          $count++;
                        }
                        ?>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="rn-pd-content-area">
              <div class="pd-title-area" style="display: flex;">
                <h4 class="title"><?= $data['name'] ?></h4>
                <div class="pd-react-area">

                  <!--likes-->
                  <?php
                  if ($_SESSION['uId'] != -1) {
                    echo ' <a href="#" id="heart" class="ps-3">';

                    $likes = count((array)$data['likes']);

                    if (in_array($_SESSION['uId'], (array) $data['likes'])) {
                      echo '    <div class="heart-count name blueColor2"id="btnheart">
                        <i data-feather="heart"></i>
                        <span id="Nheart" class="name" >' . $likes . '</span> </div>';
                    } else {
                      echo ' <div class="heart-count name "id="btnheart">
                        <i data-feather="heart"></i><span id="Nheart"  class="name">' . $likes . '</span> </div> ';
                    }

                    echo '  </a>';
                  }
                  ?>

                </div>
              </div>

              <div class="catagory-collection">

                <div class="catagory">
                  <div class="top-seller-inner-one" style="display: flex;">
                    <div class="top-seller-wrapper pe-4">
                      <div class="thumbnail" style="max-width: 70px;">
                        <?php
                        echo '<a href="' . getUrlFriendly('author.php?id=' . $artist['id'], $config, $mongoClient) . '"><img src="' . $config['urls']['site'] . '/upload/profiles/' . $artist['id'] . '\avatars/' . $artist['avatar'] . '" alt="Nft_Profile" /></a>';
                        ?>

                      </div>

                    </div>
                    <div class="top-seller-wrapper" style="display: table-row;">
                      <div class="top-seller-content">
                        <?php
                        echo '<a href="' . getUrlFriendly('author.php?id=' . $artist['id'], $config, $mongoClient) . '">';
                        ?>
                        <h6 class="name">By <?= $artist['name'] ?></h6>
                        </a>
                      </div>
                      <div class="top-seller-content">
                        <?php
                        if ($_SESSION['uId'] != -1) {
                          echo ' <a href="#" id="Watch">';

                          $filter =  ['id' => $_SESSION['uId']];
                          $mongoCollection = $mongoClient->users;
                          $resMongoQueryUser = $mongoCollection->findOne(
                            $filter
                          );
                          $user = $resMongoQueryUser;

                          if (in_array($artist['id'], (array) $user['Following'])) {
                            echo '<h6 id="btnWatch" class="name blueColor" style="padding-top: 10px; font-size:small">+ WATCH</h6>';
                          } else {
                            echo '<h6 id="btnWatch" class="name" style="padding-top: 10px; font-size:small">+ WATCH</h6>';
                          }

                          echo ' </a>';
                        }
                        ?>

                      </div>
                    </div>


                  </div>
                </div>

              </div>

              <div class="rn-bid-details">
                <div class="tab-wrapper-one">

                  <div class="tab-content rn-bid-content">
                    <h6 class="title" style="margin-bottom: 11px;">Image details:</h6>
                    <div>

                      <div class="mt-2">
                        <div class="top-seller-wrapper">
                          <h7 class="title" style="font-weight: bold;font-size:18px">Upload date:</h7> <strong><?= formatTimeStamp($data['date']) ?></strong>
                        </div>
                      </div>

                      <div class="mt-2">
                        <div class="top-seller-wrapper">
                          <h7 class="title" style="font-weight: bold;font-size:18px">Number of Views:</h7>
                        </div>
                      </div>

                      <div class="top-seller-inner-one">
                        <div class="top-seller-wrapper">
                        </div>
                      </div>
                      <!-- single creator -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
          <aside class="rwt-sidebar">

            <div class="rbt-single-widget widget_tag_cloud mt--40">
              <h3 class="title">Tags</h3>
              <div class="inner mt--20">
                <div class="tagcloud">

                  <?php
                  foreach ($data['tags-regular'] as $key => $value) {

                    echo '<a href=" ' . getUrlFriendly('explore.php?tag=' . $value . '&catg=all&type=art', $config, $mongoClient) . 'type=art" >' . $value . '</a>';
                  }
                  ?>
                </div>
              </div>
            </div>
          </aside>

          <?php
          $filter =  ['user' => (string) $artist['id']];
          $mongoCollection = $mongoClient->itens;
          $resMongoQueryUser = $mongoCollection->find(
            $filter
          );
          $itens = $resMongoQueryUser->toArray();

          $index = array_search($data['id'], array_column($itens, 'id'));
          unset($itens[$index]);

          $itensGamers = array();
          foreach ($itens as $key => $value) {
            $itensGamers[] = $value;
          }

          $itens = $itensGamers;

          if (count($itens) >= 1) {
            echo '<div class="col-xl-12 col-lg-12 col-md-12 col-12 pt-5 pb-5">
            <aside class="rwt-sidebar">
              <div class="rbt-single-widget widget_tag_cloud mt--40">
            
                <div class="content">

                  <h3 class="title">More by: ' . $artist['name'] . ' <i class="feather-arrow-up-right"></i></h3>
                </div>';

            $max = count($itens) - 1;
            $min = 0;
            $randNumbers = array();

            for ($i = 0; $i < (count($itens) == 1 ? 1 : 2); $i++) {
              $rand = rand($min, $max);
              while (in_array($rand, $randNumbers) == true) {
                $rand = rand($min, $max);
              }
              array_push($randNumbers, $rand);
            }

            foreach ($randNumbers as $key => $value) {
              echo '
         <div class="inner pt-5">
         <div class="thumbnail">
           <a href="' .  getUrlFriendly('product-details.php?author=' . $artist['name'] . '&id=' . $itens[$value]['id'] . '&name=' . $itens[$value]['name'], $config, $mongoClient) . '" style="display: flex;
         align-items: center;
             justify-content: center;">
             <img style="width: 100%; height: 140px; object-fit: cover; border-radius: 7px;" src="' . $config['urls']['site'] . '/upload/profiles/' . $artist['id'] . '/itens/' . $itens[$value]['images'][0] . '" alt="Personal Portfolio Images">
           </a>
         </div>

       </div>';
            }
            echo ' </div>
       </aside>
     </div>';
          }

          ?>
        </div>
      </div>
    </div>
  </div>

  <div class="rn-blog-area rn-blog-details-default rn-section-gapTop" style="background-color:rgb(16, 19, 25);padding-top: 25px;">
    <div class="container">
      <div class="row g-6">

        <div class="col-xl-8 col-lg-8">

          <div class="rn-blog-listen">

            <div class="news-details">
              <p>
                <?= $data['description'] ?>
              </p>
            </div>



            <div class="comments-wrapper pt--40">
              <div class="comments-area">
                <div class="trydo-blog-comment">

                  <!-- Start Coment List  -->

                  <div class="comment-thread" id="C-container">



                  </div>

                  <!-- End Coment List  -->
                </div>
              </div>
            </div>

            <!-- comment form area Start -->

            <!-- Start Contact Form Area  -->
            <?php
            if ($_SESSION['uId'] != -1) {
              $id = uniqid();
              echo '<div class="rn-comment-form pt--60">
<div class="inner">
  <div class="section-title">
    <span class="subtitle">Have a Comment?</span>
    <h2 class="title">Leave a Reply</h2>
  </div>
  <form onSubmit="sendComment(`' . $id . '`,0); return false;" class="mt--40" name="formsC">
    <div class="col-lg-12 col-md-12 col-12">
      <div class="rnform-group"><textarea id="comment-' . $id . '-R" name="comment" placeholder="Leave a Comment"></textarea>
      </div>
    </div>
    <div class="col-lg-12">
      <div class="blog-btn">
        <button type="submit" class="btn btn-primary-alta btn-large w-100">Submit</button>
      </div>
    </div>
  </form>
</div>
</div>';
            }
            ?>


          </div>
          <!-- End Contact Form Area  -->

          <!-- comment form area End -->

        </div>



        <div class="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
          <aside class="rwt-sidebar">

            <div class="rbt-single-widget widget_categories">
              <h3 class="title">Categories</h3>
              <div class="inner">




                <ul class="category-list ">
                  <?php
                  foreach ($data['categories'] as $key => $value) {
                    $filter =  ['categories' => $value];
                    $mongoCollection = $mongoClient->itens;
                    $resMongoQueryitem = $mongoCollection->find(
                      $filter
                    );
                    $itens = $resMongoQueryitem->toArray();
                    $filter =  ['id' => $value];
                    $mongoCollection = $mongoClient->categories;
                    $resMongoQuerycat = $mongoCollection->findOne(
                      $filter
                    );
                    $categories = $resMongoQuerycat['label'];
                    echo '    <li><a href=" ' . getUrlFriendly('explore.php?tag=all&catg=' . $value . '&type=art', $config, $mongoClient) . '"><span class="left-content">' . $categories . '</span><span class="count-text">' . count($itens) . '</span></a></li>';
                  }
                  ?>

                </ul>
              </div>
            </div>
          </aside>

          <div class="row g-5 pt--60">
            <div class="col-xl-12 col-lg-12 col-md-12 col-12">
              <div class="rbt-single-widget widget_categories">
                <h3 class="title">You Might Like ...</h3>


                <div class="inner">
                  <div class="row g-6">

                    <?php
                    //do a cicle to get the tags in the item
                    $tags = array();
                    foreach ($data['tags-regular'] as $key => $value) {
                      $tags[] = $value;
                    }

                    //do a cicle to get the categories in the item
                    $categories = array();
                    foreach ($data['categories'] as $key => $value) {

                      $categories[] = $value;
                    }
                    $relate = array();

                    $allPosts = $mongoClient->itens->find();
                    $allPosts = $allPosts->toArray();
                    foreach ($allPosts as $key => $value) {
                      $isToPass = false;
                      foreach ($value['tags-regular'] as $key => $tag) {
                        if (in_array($tag, $tags) == true) {
                          $isToPass = true;
                        }
                      }

                      foreach ($value['categories'] as $key => $cat) {
                        if (in_array($cat, $categories) == true) {
                          $isToPass = true;
                        }
                      }


                      if ($value['user'] == $data['user']) {
                        $isToPass = false;
                      }

                      clog($isToPass);
                      if ($isToPass) {
                        $relate[] = $value;
                      }
                    }
                    $relate = array_slice($relate, 0, 5);

                    foreach ($relate as $key => $item) {
                      echo '
                      <div class="col-6 col-lg-6 col-md-6 col-sm-6 col-6" style="padding-top: 20px;padding-bottom: 20px;">
                        <div class="inner">
                          <div class="thumbnail">
                            <a href="' . getUrlFriendly('product-details.php?author=' . $item['user'] . '&id=' .  $item['id'] . '&name=' . $item['name'], $config, $mongoClient) . '">
                            <img style="width: 168px; height: 140px; object-fit: cover; border-radius: 7px;" src="' . $config['urls']['site'] . '/upload/profiles/' . $item['user'] . '/itens/' . $item['images'][0] . '" alt="Personal Portfolio Images">
                            </a>
                            </div>
                          </div>
                          </div>';
                    }
                    ?>
                  </div>
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
      <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/axios.js"></script>
      <!-- main JS -->
      <script src="<?php echo $config['urls']['site'] ?>/assets/js/main.js"></script>
      <!-- Meta Mask  -->
      <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/web3.min.js"></script>
      <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/maralis.js"></script>
      <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/nft.js"></script>


      <script>
        async function writeComments() {
          const id_itens = $("#art_ID").html();
          const htmlComments = await axios.get(
            `<?= $config['urls']['site'] ?>/inc/handlers/Comments/writeComments.php?id_itens=${id_itens}`,
          );
          const htmlStr = htmlComments.data;
          $('#C-container').html(htmlStr);
          return;
        }

        function sendComment(idC, reply = "0") {
          const id_user = $("#user_ID").html();
          const id_itens = $("#art_ID").html();

          const comment = $(`#comment-${idC}-R`).val();

          const config = '<?= $config['urls']['site'] ?>';
          $.ajax({
            url: `${config}/inc/handlers/Comments/AddComments.php?idC=${idC}&Comment=${comment}&id_user=${id_user}&id_itens=${id_itens}&replyid=${reply}`,
            type: "GET",
            success: async () => {
              await writeComments();
            },
          });
        }

        function EditComment(idC) {

          const Comment = $(`#comment-${idC}-E`).val();

          const config = '<?= $config['urls']['site'] ?>';
          $.ajax({
            url: `${config}/inc/handlers/Comments/EditComments.php?idC=${idC}&Comment=${Comment}`,
            type: "GET",
            success: async () => {
              await writeComments();
            },
          });
        }

        function deleteComment(idC) {
          console.log("ola");
          const config = '<?= $config['urls']['site'] ?>';
          $.ajax({
            url: `${config}/inc/handlers/Comments/DeleteComment.php?idC=${idC}`,
            type: "GET",
            success: async () => {
              await writeComments();
            },
          });
        }

        function sendlike(idc) {
          try {
            const config = '<?= $config['urls']['site'] ?>';
            const likeBTN = document.getElementById(`btn-like-${idc}`);

            if (likeBTN.classList.contains("btnLike")) {

              const spanL = document.getElementById(`l-${idc}`)
              const NL = spanL.textContent;

              if (likeBTN.classList.contains("blueColor2")) {
                likeBTN.classList.remove("blueColor2");
                spanL.textContent = (+NL) - 1;
              } else {
                likeBTN.classList.add("blueColor2");
                spanL.textContent = (+NL) + 1;
              }

              $.ajax({
                url: `${config}/inc/handlers/Comments/AddLike.php?likeid=${idc}`,
                type: "GET",
                success: (data) => {



                },
              });
            }
          } catch (err) {
            console.error(err);
            return false;
          }
        }

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




        $("#heart").on("click", function(e) {
          e.preventDefault();
          const data = $("#art_ID").html();
          const id = $("#user_ID").html();
          const Nh = $("#Nheart").html();
          const config = '<?= $config['urls']['site'] ?>';
          const Nheart = document.getElementById("Nheart");
          const btnheart = document.getElementById("btnheart");
          if (btnheart.classList.contains("blueColor2")) {
            btnheart.classList.remove("blueColor2");

            Nheart.textContent = (+Nh) - 1;
          } else {
            btnheart.classList.add("blueColor2");
            Nheart.textContent = (+Nh) + 1;
          }

          $.ajax({
            url: `<?= $config['urls']['site'] ?>/inc/handlers/AddHeart.php?likeID=${data}&user_id=${id}`,
            type: "GET",
          });
        });

        document.addEventListener(
          "click",
          function(event) {


            const target = event.target;
            const id = target.commentId = event.target.id;
            let replyForm;

            if (target.matches(`[data-toggle='reply-form-${id}']`)) {
              replyForm = document.getElementById(`R-${id}`);
              var editForm = $(`#E-${id}`);
              if (editForm.hasClass("d-none")) {} else {
                editForm.addClass("d-none");
              }
              replyForm.classList.toggle("d-none");
            }
          },
          false
        );

        document.addEventListener(
          "click",
          function(event) {



            const target = event.target;
            const id = target.commentId = event.target.id;
            let editForm;

            if (target.matches(`[data-toggle='edit-form-${id}']`)) {
              console.log("ola");
              var comment = $(`#desc-${id}`).html();
              $(`#comment-${id}-E`).val(comment);
              editForm = document.getElementById(`E-${id}`);

              var replyForm = $(`#R-${id}`);
              if (replyForm.hasClass("d-none")) {

              } else {
                replyForm.addClass("d-none");
              }
              editForm.classList.toggle("d-none");

            }


          },
          false
        );


        window.onload = async () => {
          await writeComments();

        }
      </script>


</body>

</html>