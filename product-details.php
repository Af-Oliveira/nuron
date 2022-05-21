<?php
include 'inc/config.inc.php';

$vars = isset($params) ?  $params : $_GET;

$author = $vars['author'];
$name = $vars['name'];
$id = $vars['id'];

$filter =  ['id' => $id];
$mongoCollection = $mongoClient->itens;
$resMongoQueryUser = $mongoCollection->findOne(
  $filter
);
$data = $resMongoQueryUser;
$slide_big = ['v-pills-home-tab', 'v-pills-profile-tab', 'v-pills-messages-tab'];
$slide_small = ['v-pills-home', 'v-pills-profile', 'v-pills-messages'];

$filter =  ['id' => $data['user']];
$mongoCollection = $mongoClient->users;
$resMongoQueryUser = $mongoCollection->findOne(
  $filter
);
$artist = $resMongoQueryUser;
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
  <style>
    .blueColor {
      color: blue;
    }

    .blueColor2 {
      background: blue !important;
    }
  </style>




  <!-- Start Header -->
  <?php
  echo menu($mongoClient, $googleClient, $config)
  ?>
  <!-- end page title area -->

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
                    justify-content: center;" class="nav rn-pd-nav rn-pd-rt-content nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                        <?php
                        $count = 0;
                        foreach ($data['images'] as $key => $value) {
                          echo '    <button class="nav-link';
                          echo ($count == 0) ? '  active ' : '';
                          echo '" active" id="' . $slide_big[$key] . '" data-bs-toggle="pill" data-bs-target="#' . $slide_small[$key] . '" type="button" role="tab" aria-controls="' . $slide_small[$key] . '" aria-selected="true">
                          <span class="rn-pd-sm-thumbnail " >
                            <img style="width: 134px;
                            height: 134px;
                            object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $data['user'] . '/itens/' . $value . '" alt="Nft_Profile" />
                          </span>
                        </button>';
                          $count++;
                        }
                        ?>
                      </div>

                      <div class="tab-content rn-pd-content" id="v-pills-tabContent">
                        <?php
                        $count = 0;
                        foreach ($data['images'] as $key => $value) {


                          echo '    <div class="tab-pane fade ';
                          echo ($count == 0) ? ' show active' : '';
                          echo '" id="' . $slide_small[$key] . '" role="tabpanel" aria-labelledby="' . $slide_big[$key] . '">
                          <div class="rn-pd-thumbnail" style="display:flex;align-items: center;
                          justify-content: center;">
                            <img  style="width: 462px;
                            height: 462px;
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
              <div class="pd-title-area">
                <h4 class="title"><?= $data['name'] ?></h4>
                <div class="pd-react-area">

                  <!--likes-->
                  <a href="#" id="like">

                    <?php
                    $likes = count((array)$data['likes']);

                    if (in_array($_SESSION['uId'], (array) $data['likes'])) {
                      echo '    <div class="heart-count name blueColor2"id="btnlike">
                        <i data-feather="heart"></i>
                        <span id="Nlikes" class="name" >' . $likes . '</span> </div>';
                    } else {
                      echo ' <div class="heart-count name "id="btnlike">
                        <i data-feather="heart"></i><span id="Nlikes"  class="name">' . $likes . '</span> </div> ';
                    }
                    ?>



                  </a>

                  <!--share and report-->
                  <div class="count">
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



                </div>
              </div>
              <!--date-->


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

                        <a href="#" id="Watch">
                          <?php
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
                          ?>


                        </a>


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
                    echo '<a href="esplore.php?types=0&tags=' . $value . '">' . $value . '</a>';
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

                  <h4 class="title"><a >More by: ' . $artist['name'] . ' <i class="feather-arrow-up-right"></i></a></h4>
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
              clog($value);
              echo '
         <div class="inner pt-5">
         <div class="thumbnail">
           <a href="' .  getUrlFriendly('product-details.php?author=' . $artist['name'] . '&id=' . $itens[$value]['id'] . '&name=' . $itens[$value]['name'], $config, $mongoClient) . '" style="display: flex;
         align-items: center;
             justify-content: center;">
             <img style="width: 100%;
height: 140px;
object-fit: cover;
border-radius: 7px;" src="' . $config['urls']['site'] . '/upload/profiles/' . $artist['id'] . '/itens/' . $itens[$value]['images'][0] . '" alt="Personal Portfolio Images">
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
  <div class="rn-blog-area rn-blog-details-default rn-section-gapTop" style="background-color:rgb(16, 19, 25);padding: top 46px;">
    <div class="container">
      <div class="row g-6">

        <div class="col-xl-8 col-lg-8">

          <div class="rn-blog-listen">




            <div class="news-details">
              <h4>Nobis eleifend option conguenes.</h4>
              <p>Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat
                facer
                possim assum.
                Typi non
                habent claritatem insitam; est usus legentis in iis qui facit eorum
                claritatem.
                Investigationes
                demonstraverunt
                lectores legere me lius quod ii legunt saepius. Claritas est etiam processus
                dynamicus, qui
                sequitur
                mutationem consuetudium lectorum.</p>
              imperdiet purus, in ornare odio. Quisque odio felis, vestibulum
              et.</p>
            </div>
            <div class="comments-wrapper pt--40">
              <div class="comments-area">
                <div class="trydo-blog-comment">
                  <h5 class="comment-title mb--40">9 replies on “Have You Heard?
                    Agency Is Your Best
                    Bet To Grow”</h5>
                  <!-- Start Coment List  -->
                  <ul class="comment-list">

                    <!-- Start Single Comment  -->
                    <li class="comment parent">
                      <div class="single-comment">
                        <div class="comment-author comment-img">
                          <img class="comment-avatar" src="<?php echo $config['urls']['site'] ?>/assets/images/blog/comment/comment-01.png" alt="Comment Image">
                          <div class="m-b-20">
                            <div class="commenter">Parent</div>
                            <div class="time-spent"> August 20, at 8:44
                              pm</div>
                          </div>
                        </div>
                        <div class="comment-text">
                          <p>A component that allows for easy creation of menu
                            items, quickly
                            creating paragraphs of “Lorem Ipsum” and
                            pictures with custom
                            sizes.</p>
                        </div>
                        <div class="reply-edit">
                          <div class="reply">
                            <a class="comment-reply-link" href="#">
                              <i class="rbt feather-corner-down-right"></i>
                              Reply
                            </a>
                          </div>
                        </div>
                      </div>
                      <ul class="children">
                        <li class="comment byuser ">
                          <div class="single-comment">
                            <div class="comment-author comment-img">
                              <img class="comment-avatar" src="<?php echo $config['urls']['site'] ?>/assets/images/blog/comment/comment-01.png" alt="Comment Image">
                              <div class="m-b-20">
                                <div class="commenter">Admin Comment
                                </div>
                                <div class="time-spent"> August 20,
                                  at 8:44 pm
                                </div>
                              </div>
                            </div>
                            <div class="comment-text">
                              <p>A component that allows for easy creation
                                of menu items,
                                quickly creating paragraphs of “Lorem
                                Ipsum” and
                                pictures with custom sizes.</p>
                            </div>
                            <div class="reply-edit">
                              <div class="reply">
                                <a class="comment-reply-link" href="#">
                                  <i class="rbt feather-corner-down-right"></i>
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <!-- End Single Comment  -->


                    <!-- End Single Comment  -->


                  </ul>
                  <!-- End Coment List  -->
                </div>
              </div>
            </div>

            <!-- comment form area Start -->

            <!-- Start Contact Form Area  -->
            <div class="rn-comment-form pt--60">
              <div class="inner">
                <div class="section-title">
                  <span class="subtitle">Have a Comment?</span>
                  <h2 class="title">Leave a Reply</h2>
                </div>
                <form class="mt--40" action="#">

                  <div class="col-lg-12 col-md-12 col-12">
                    <div class="rnform-group"><textarea placeholder="Comment"></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="blog-btn">
                      <a class="btn btn-primary-alta btn-large w-100" href="#"><span>SEND
                          MESSAGE</span></a>
                    </div>
                  </div>
              </div>
              </form>
            </div>
          </div>
          <!-- End Contact Form Area  -->

          <!-- comment form area End -->
          <div class="row g-5 pt--60">
            <div class="col-lg-12">
              <h3 class="title">Related Post</h3>
            </div>
            <!-- start single blog -->
            <div class="col-xl-4 col-lg-6 col-md-6 col-12">
              <div class="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
                <div class="inner">
                  <div class="thumbnail">
                    <a href="blog-details.html">
                      <img src="<?php echo $config['urls']['site'] ?>/assets/images/blog/blog-02.jpg" alt="Personal Portfolio Images">
                    </a>
                  </div>
                  <div class="content">
                    <div class="category-info">
                      <div class="category-list">
                        <a href="blog-details.html">Development</a>
                      </div>
                      <div class="meta">
                        <span><i class="feather-clock"></i> 2 hour read</span>
                      </div>
                    </div>
                    <h4 class="title"><a href="blog-details.html">The services provide for
                        design <i class="feather-arrow-up-right"></i></a></h4>
                  </div>
                </div>
              </div>
            </div>
            <!-- end single blog -->
            <!-- start single blog -->
            <div class="col-xl-4 col-lg-6 col-md-6 col-12">
              <div class="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
                <div class="inner">
                  <div class="thumbnail">
                    <a href="blog-details.html">
                      <img src="<?php echo $config['urls']['site'] ?>/assets/images/blog/blog-03.jpg" alt="Personal Portfolio Images">
                    </a>
                  </div>
                  <div class="content">
                    <div class="category-info">
                      <div class="category-list">
                        <a href="blog-details.html">Design</a>
                      </div>
                      <div class="meta">
                        <span><i class="feather-clock"></i> 5 min read</span>
                      </div>
                    </div>
                    <h4 class="title"><a href="blog-details.html">More important feature for
                        designer<i class="feather-arrow-up-right"></i></a></h4>
                  </div>
                </div>
              </div>
            </div>
            <!-- end single blog -->
            <!-- start single blog -->
            <div class="col-xl-4 col-lg-6 col-md-6 col-12">
              <div class="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
                <div class="inner">
                  <div class="thumbnail">
                    <a href="blog-details.html">
                      <img src="<?php echo $config['urls']['site'] ?>/assets/images/blog/blog-04.jpg" alt="Personal Portfolio Images">
                    </a>
                  </div>
                  <div class="content">
                    <div class="category-info">
                      <div class="category-list">
                        <a href="blog-details.html">Marketing</a>
                      </div>
                      <div class="meta">
                        <span><i class="feather-clock"></i> 10 min read</span>
                      </div>
                    </div>
                    <h4 class="title"><a href="blog-details.html">Inavalide purpose classes &
                        motivation.<i class="feather-arrow-up-right"></i></a></h4>
                  </div>
                </div>
              </div>
            </div>
            <!-- end single blog -->

          </div>
        </div>



        <div class="col-xl-4 col-lg-4 mt_md--40 mt_sm--40">
          <aside class="rwt-sidebar">

            <div class="rbt-single-widget widget_categories">
              <h3 class="title">Categories</h3>
              <div class="inner">
                <ul class="category-list ">
                  <li><a href="#"><span class="left-content">Development</span><span class="count-text">300</span></a></li>
                  <li><a href="#"><span class="left-content">Company</span><span class="count-text">275</span></a></li>
                  <li><a href="#"><span class="left-content">Marketing</span><span class="count-text">625</span></a></li>
                  <li><a href="#"><span class="left-content">UX
                        Design</span><span class="count-text">556</span></a></li>
                  <li><a href="#"><span class="left-content">Business</span><span class="count-text">247</span></a></li>
                  <li><a href="#"><span class="left-content">App
                        Development</span><span class="count-text">457</span></a></li>
                  <li><a href="#"><span class="left-content">Application</span><span class="count-text">423</span></a></li>
                  <li><a href="#"><span class="left-content">Art</span><span class="count-text">235</span></a></li>
                </ul>
              </div>
            </div>





          </aside>
        </div>

      </div>
    </div>


    <!-- blog details area end -->

    <!-- Start Footer Area -->
    <div class="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
      <div class="container">
        <div class="row gx-5">
          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="widget-content-wrapper">
              <div class="footer-left">
                <div class="logo-thumbnail logo-custom-css">
                  <a class="logo-light" href="index.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/logo/logo-white.png" alt="nft-logo"></a>
                  <a class="logo-dark" href="index.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/logo/logo-dark.png" alt="nft-logo"></a>
                </div>
                <p class="rn-footer-describe">
                  Created with the collaboration of over 60 of the world's best Nuron Artists.
                </p>
              </div>
              <div class="widget-bottom mt--40 pt--40">
                <h6 class="title">Get The Latest Nuron Updates </h6>
                <div class="input-group">
                  <input type="text" class="form-control bg-color--2" placeholder="Your username" aria-label="Recipient's username">
                  <div class="input-group-append">
                    <button class="btn btn-primary-alta btn-outline-secondary" type="button">Subscribe</button>
                  </div>
                </div>
                <div class="newsletter-dsc">
                  <p>Email is safe. We don't spam.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
            <div class="footer-widget widget-quicklink">
              <h6 class="widget-title">Nuron</h6>
              <ul class="footer-list-one">
                <li class="single-list"><a href="#">Protocol Explore</a></li>
                <li class="single-list"><a href="#">System Token</a></li>
                <li class="single-list"><a href="#">Otimize Time</a></li>
                <li class="single-list"><a href="#">Visual Checking</a></li>
                <li class="single-list"><a href="#">Fadeup System</a></li>
                <li class="single-list"><a href="#">Activity Log</a></li>
                <li class="single-list"><a href="#">System Auto Since</a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
            <div class="footer-widget widget-information">
              <h6 class="widget-title">Information</h6>
              <ul class="footer-list-one">
                <li class="single-list"><a href="#">Market Explore</a></li>
                <li class="single-list"><a href="#">Ready Token</a></li>
                <li class="single-list"><a href="#">Main Option</a></li>
                <li class="single-list"><a href="#">Product Checking</a></li>
                <li class="single-list"><a href="blog.html">Blog Grid</a></li>
                <li class="single-list"><a href="about.html">About Us</a></li>
                <li class="single-list"><a href="#">Fix Bug </a></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
            <div class="footer-widget">
              <h6 class="widget-title">Recent Sold Out</h6>
              <ul class="footer-recent-post">
                <li class="recent-post">
                  <div class="thumbnail">
                    <a href="product-details.html">
                      <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-01.jpg" alt="Product Images">
                    </a>
                  </div>
                  <div class="content">
                    <h6 class="title"><a href="product-details.html">#21 The Wonder</a></h6>
                    <p>Highest bid 1/20</p>
                    <span class="price">0.244wETH</span>
                  </div>
                </li>
                <li class="recent-post">
                  <div class="thumbnail">
                    <a href="product-details.html">
                      <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-02.jpg" alt="Product Images">
                    </a>
                  </div>
                  <div class="content">
                    <h6 class="title"><a href="product-details.html">Diamond Dog</a></h6>
                    <p>Highest bid 1/20</p>
                    <span class="price">0.022wETH</span>
                  </div>
                </li>
                <li class="recent-post">
                  <div class="thumbnail">
                    <a href="product-details.html">
                      <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-03.jpg" alt="Product Images">
                    </a>
                  </div>
                  <div class="content">
                    <h6 class="title"><a href="product-details.html">Morgan11</a></h6>
                    <p>Highest bid 1/20</p>
                    <span class="price">0.892wETH</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Footer Area -->
    <!-- Start Footer Area -->
    <div class="copy-right-one ptb--20 bg-color--1">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="copyright-left">
              <span>©2022 Nuron, Inc. All rights reserved.</span>
              <ul class="privacy">
                <li><a href="terms-condition.html">Terms</a></li>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="copyright-right">
              <ul class="social-copyright">
                <li><a href="#"><i data-feather="facebook"></i></a></li>
                <li><a href="#"><i data-feather="twitter"></i></a></li>
                <li><a href="#"><i data-feather="instagram"></i></a></li>
                <li><a href="#"><i data-feather="linkedin"></i></a></li>
                <li><a href="#"><i data-feather="mail"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
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


    <script>
      $("#Watch").on("click", function(e) {
        e.preventDefault();
        data = $("#ID").html();


        const btnWatch = document.getElementById("btnWatch");
        if (btnWatch.classList.contains("blueColor")) {
          btnWatch.classList.remove("blueColor");
        } else {
          btnWatch.classList.add("blueColor");
        }

        $.ajax({
          url: `inc/handlers/Subcription.php?WatchID=${data}`,
          type: "GET",
        });
      });

      $("#like").on("click", function(e) {
        e.preventDefault();
        data = $("#art_ID").html();
        Nl = $("#Nlikes").html();
        const Nlikes = document.getElementById("Nlikes");
        const btnlike = document.getElementById("btnlike");
        if (btnlike.classList.contains("blueColor2")) {
          btnlike.classList.remove("blueColor2");

          Nlikes.textContent = (+Nl) - 1;
        } else {
          btnlike.classList.add("blueColor2");
          Nlikes.textContent = (+Nl) + 1;
        }

        $.ajax({
          url: `inc/handlers/like.php?likeID=${data}`,
          type: "GET",
        });
      });
    </script>
</body>

</html>