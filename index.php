<?php
include 'inc/config.inc.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Home || OnArt</title>
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

<body class="template-color-1 nft-body-connect">

  <!-- Start Header -->
  <?php
  echo menu($mongoClient, $googleClient, $config)
  ?>
  <!-- ENd Header Area -->
  <div class="banner-three slider-style-3 pt--70">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-5">

          <div class="wrapper" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
            <div id="demo" class="carousel slide" data-bs-ride="carousel">

              <?php
              $filter =  ['private' => "0"];
              $options = [
                "sort" => ['likes' => 1, 'id' => -1],
                "limit" => 3
              ];

              $mongoCollection = $mongoClient->itens;
              $displayI = $mongoCollection->find(
                $filter,
                $options
              );
              $displayI = $displayI->toArray();
              clog($displayI);
              ?>
              <!-- The slideshow/carousel -->
              <div class="carousel-inner">

                <?php
                foreach ($displayI as $key => $value) {
                  $filter =  ['id' => $value['user']];
                  $mongoCollection = $mongoClient->users;
                  $artist = $mongoCollection->findOne(
                    $filter,
                  );
                  echo ' <div style="    height: 36.5em; width: 36.6em;
                 "  class="carousel-item';
                  if ($key == 0) {
                    echo ' active';
                  }
                  echo ' thumbnail-overlay">
                  <a style="    height: 36.5em; width: 38.6em;" href="' . getUrlFriendly('product-details.php?id=' . $value['id'], $config, $mongoClient) . '">
                    <img style="width: 100%;
                    height: 100%;
                    object-fit: cover;"  class="w-100" src="' . $config['urls']['site'] . '/upload/profiles/' . $value['user'] . '/itens/' . $value['images'][0] . '" alt="NFT_portfolio" /></a>
                  <div class="read-wrapper" style="position: absolute;z-index: 2;text-align: left;left: 30px;bottom: 30px;">
                    <h5 style="font-size: 30px;margin-bottom: -10px;"><a style="display: block;position: relative;" href="' . getUrlFriendly('product-details.php?id=' . $value['id'], $config, $mongoClient) . '">' . $value['name'] . '</a></h5>
                    <span style="font-size: 14px;color: var(--color-primary);display: inline-block;margin-top: 20px;">' . $artist['name'] . '</span>
                  </div>
                  </div>';
                }

                ?>

                <!-- Left and right controls/icons -->
                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>




          </div>


        </div>
        <div class="col-lg-7">
          <div class="slider-one rn-section-gapTop">
            <div class="container">
              <div class="row row-reverce-sm align-items-center">
                <div class="col-lg-12 col-md-12 col-sm-12 mt_sm--50">
                  <h2 class="title" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
                    Collect, Discover Digital Art and Explore Your favourite artists.
                  </h2>
                  <p class="slide-disc" data-sal-delay="300" data-sal="slide-up" data-sal-duration="800">
                    Discover a digital world where you can view art pieces and collections from other artists.
                    At OnArt we inspire people to create art by nurturing their creativity.
                    We can't help it - it runs through our veins.
                  </p>
                  <div class="button-group">

                    <?php
                    if ($_SESSION['uId'] == -1) {
                      echo ' <a class="btn btn-large btn-primary" href="' . $googleClient->createAuthUrl() . '" data-sal-delay="400" data-sal="slide-up" data-sal-duration="800">Get Started</a>';
                    } else {
                      echo ' <a class="btn btn-large btn-primary" href="' . getUrlFriendly('about.php', $config, $mongoClient) . '" data-sal-delay="400" data-sal="slide-up" data-sal-duration="800">Get Started</a>';
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

    <!-- start service area -->
    <div class="rn-service-area rn-section-gapTop">
      <div class="container">
        <div class="row">
          <div class="col-12 mb--50">
            <h3 class="title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
              Create your own online gallery
            </h3>
          </div>
        </div>
        <div class="row g-5">
          <!-- start single service -->
          <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" class="rn-service-one color-shape-7">
              <div class="inner">
                <div class="icon">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/icons/shape-7.png" alt="Shape" />
                </div>
                <div class="subtitle">Step-01</div>
                <div class="content">
                  <h4 class="title"><a href="#">Create your account</a></h4>
                  <p class="description">
                    Login in our website to create your own gallery and artwork.
                  </p>

                  <a class="read-more-button" href="<?= getUrlFriendly('about.php', $config, $mongoClient) ?>"><i class="feather-arrow-right"></i></a>

                </div>
              </div>
              <a class="over-link" href="<?= getUrlFriendly('about.php', $config, $mongoClient) ?>"></a>
            </div>
          </div>
          <!-- End single service -->

          <!-- start single service -->
          <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" class="rn-service-one color-shape-7">
              <div class="inner">
                <div class="icon">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/icons/shape-7.png" alt="Shape" />
                </div>
                <div class="subtitle">Step-02</div>
                <div class="content">
                  <h4 class="title"><a href="#">Upload artwork</a></h4>
                  <p class="description">
                    Do you have awesome art that you want people to know about? Then submit your art! Click submit art and just follow the steps.
                  </p>

                  <a style="position: relative; top: 100%;" class="read-more-button" href="<?= getUrlFriendly('about.php', $config, $mongoClient) ?>"><i class="feather-arrow-right"></i></a>

                </div>
              </div>
              <a class="over-link" href="<?= getUrlFriendly('about.php', $config, $mongoClient) ?>"></a>
            </div>
          </div>
          <!-- End single service -->

          <!-- start single service -->
          <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div data-sal="slide-up" data-sal-delay="250" data-sal-duration="800" class="rn-service-one color-shape-5">
              <div class="inner">
                <div class="icon">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/icons/shape-5.png" alt="Shape" />
                </div>
                <div class="subtitle">Step-03</div>
                <div class="content">
                  <h4 class="title"><a href="#">Create your collections</a></h4>
                  <p class="description">
                    Create your own art collections and control your own galleries. Give free rein to your imagination and show the world your creativity.
                  </p>
                  <a class="read-more-button" href="<?= getUrlFriendly('about.php', $config, $mongoClient) ?>"><i class="feather-arrow-right"></i></a>
                </div>
              </div>
              <a class="over-link" href="<?= getUrlFriendly('about.php', $config, $mongoClient) ?>"></a>
            </div>
          </div>
          <!-- End single service -->

          <!-- start single service -->
          <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
            <div data-sal="slide-up" data-sal-delay="300" data-sal-duration="800" class="rn-service-one color-shape-6">
              <div class="inner">
                <div class="icon">
                  <img src="<?php echo $config['urls']['site'] ?>/assets/images/icons/shape-6.png" alt="Shape" />
                </div>
                <div class="subtitle">Step-04</div>
                <div class="content">
                  <h4 class="title"><a href="#">Explore other artist</a></h4>
                  <p class="description">
                    Explore other artists and give your opinion about their works and collections.
                  </p>
                  <a class="read-more-button" href="<?= getUrlFriendly('about.php', $config, $mongoClient) ?>"><i class="feather-arrow-right"></i></a>
                </div>
              </div>
              <a class="over-link" href="<?= getUrlFriendly('about.php', $config, $mongoClient) ?>"></a>
            </div>
          </div>
          <!-- End single service -->
        </div>
      </div>
    </div>

    <!-- top top-seller start -->


    <div class="rn-creator-title-area rn-section-gapTop">
      <div class="container">
        <div class="row mb--50 align-items-center">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12">
            <h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
              Top Artists
            </h3>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">

          </div>
        </div>
        <div class="row g-5 mt--30 creator-list-wrapper">
          <?php
          $TopA = array();
          $orderBy = array();
          $filter =  ['active' => 1];
          $mongoCollection = $mongoClient->users;
          $artist = $mongoCollection->find(
            $filter,
          );

          $artist = $artist->toArray();

          foreach ($artist as $key => $value) {
            $ArtistC = $value;
            $count = 1;
            foreach ($artist as $Search) {

              if (in_array($ArtistC['id'], (array) $Search['Following'])) {
                $count++;
              };
            };
            $TopA[] = [
              'id' => $ArtistC['id'],
              'count' => $count,
            ];
            $orderBy[$key] = $count;
          };
          array_multisort($orderBy, SORT_DESC, $TopA);
          if (count($TopA) > 8) {
            $number = 8;
          } else {
            $number = count($TopA);
          }

          for ($i = 0; $i < 4; $i++) {

            $filter =  ['active' => 1, 'id' => $TopA[$i]['id']];
            $mongoCollection = $mongoClient->users;
            $artist = $mongoCollection->findOne(
              $filter,
            );

            echo '   <div class="creator-single col-lg-3 col-md-4 col-sm-6">
            <div class="top-seller-inner-one explore">
              <div class="top-seller-wrapper">
                <div class="thumbnail " >
                  <a style="width: 5.5em;
                  height: 5.5em;" href="' . getUrlFriendly('author.php?id=' . $artist['id'], $config, $mongoClient) . '"><img style="width: 100%;
                  height: 100%;
                  object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $artist['id'] . '/avatars/' . $artist['avatar'] . '" alt="Nft_Profile" /></a>
                </div>
                <div class="top-seller-content">
                  <a href="' . getUrlFriendly('author.php?id=' . $artist['id'], $config, $mongoClient) . '">
                    <h6 class="name">' . $artist['name'] . '</h6>
                  </a>
                  <span style="font-weight: bolder;" class="count-number">Watchers: ' . $TopA[$i]['count'] . '</span>
                </div>
              </div>
              <a class="over-link" href="' . getUrlFriendly('author.php?id=' . $artist['id'], $config, $mongoClient) . '"></a>
            </div>
          </div>';
          }
          ?>
          <!-- start single top-seller -->


        </div>
      </div>
    </div>
    <!-- top top-seller end -->

    <!-- collection area Start -->


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



    <script>

    </script>
</body>

</html>