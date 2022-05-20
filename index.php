<?php
include 'inc/config.inc.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Home Default || Nuron - NFT Marketplace Template</title>
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

  <!-- start banner area -->
  <div class="slider-one rn-section-gapTop">
    <div class="container">
      <div class="row row-reverce-sm align-items-center">
        <div class="col-lg-5 col-md-6 col-sm-12 mt_sm--50">
          <h2 class="title" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
            Discover Digital Art, Collect and Sell Your Specific NFTs.
          </h2>
          <p class="slide-disc" data-sal-delay="300" data-sal="slide-up" data-sal-duration="800">
            Partner with one of the world’s largest retailers to showcase your
            brand and products.
          </p>
          <div class="button-group">
            <a class="btn btn-large btn-primary" href="#" data-sal-delay="400" data-sal="slide-up" data-sal-duration="800">Get Started</a>
            <a class="btn btn-large btn-primary-alta" href="create.html" data-sal-delay="500" data-sal="slide-up" data-sal-duration="800">Create</a>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12 offset-lg-1">
          <div class="slider-thumbnail">
            <img src="<?php echo $config['urls']['site'] ?>/assets/images/slider/slider-1.png" alt="Slider Images" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End banner area -->
  <div class="banner-three slider-style-3 pt--70">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-5">
          <div class="wrapper">
            <div class="slider slider-activation-banner-3">
              <div class="slider-thumbnail thumbnail-overlay">
                <a href="product-details.html">
                  <img class="w-100" src="<?php echo $config['urls']['site'] ?>/assets/images/banner/h-three-banner-01.jpg" alt="NFT_portfolio" /></a>
                <div class="read-wrapper">
                  <h5><a href="product-details.html">HasLivbe</a></h5>
                  <span>Md. Master</span>
                </div>
              </div>
              <div class="slider-thumbnail thumbnail-overlay">
                <a href="product-details.html"><img class="w-100" src="<?php echo $config['urls']['site'] ?>/assets/images/banner/h-three-banner-02.jpg" alt="NFT_portfolio" /></a>
                <div class="read-wrapper">
                  <h5><a href="product-details.html">Ladicon Mos</a></h5>
                  <span>John Lee</span>
                </div>
              </div>
              <div class="slider-thumbnail thumbnail-overlay">
                <a href="product-details.html"><img class="w-100" src="<?php echo $config['urls']['site'] ?>/assets/images/banner/h-three-banner-03.jpg" alt="NFT_portfolio" /></a>
                <div class="read-wrapper">
                  <h5><a href="product-details.html">Masters</a></h5>
                  <span>Keenlee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="slide-small-wrapper">
                <div class="thumbnail thumbnail-overlay">
                  <a href="product-details.html">
                    <img class="w-100" src="<?php echo $config['urls']['site'] ?>/assets/images/banner/banner-sm-01.jpg" alt="Nft_Profile" />
                  </a>
                </div>
                <div class="read-wrapper">
                  <h5 class="title"><a href="#">HasLivbe</a></h5>
                  <span>Md. Master</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="slide-small-wrapper">
                <div class="thumbnail thumbnail-overlay">
                  <a href="product-details.html">
                    <img class="w-100" src="<?php echo $config['urls']['site'] ?>/assets/images/banner/banner-sm-02.jpg" alt="Nft_Profile" />
                  </a>
                </div>
                <div class="read-wrapper">
                  <h5 class="title"><a href="#">Ladicorn Mos</a></h5>
                  <span>Md. Master</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="slide-small-wrapper">
                <div class="thumbnail thumbnail-overlay">
                  <a href="product-details.html">
                    <img class="w-100" src="<?php echo $config['urls']['site'] ?>/assets/images/banner/banner-sm-03.jpg" alt="Nft_Profile" />
                  </a>
                </div>
                <div class="read-wrapper">
                  <h5 class="title"><a href="#">Twinkle</a></h5>
                  <span>Latis Hook</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="slide-small-wrapper">
                <div class="thumbnail thumbnail-overlay">
                  <a href="product-details.html">
                    <img class="w-100" src="<?php echo $config['urls']['site'] ?>/assets/images/banner/banner-sm-04.jpg" alt="Nft_Profile" />
                  </a>
                </div>
                <div class="read-wrapper">
                  <h5 class="title"><a href="#">Monster</a></h5>
                  <span>Decruse</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="slide-small-wrapper">
                <div class="thumbnail thumbnail-overlay">
                  <a href="product-details.html">
                    <img class="w-100" src="<?php echo $config['urls']['site'] ?>/assets/images/banner/banner-sm-05.jpg" alt="Nft_Profile" />
                  </a>
                </div>
                <div class="read-wrapper">
                  <h5 class="title"><a href="#">Labibas Had</a></h5>
                  <span>Kenlee</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="slide-small-wrapper">
                <div class="thumbnail thumbnail-overlay">
                  <a href="product-details.html">
                    <img class="w-100" src="<?php echo $config['urls']['site'] ?>/assets/images/banner/banner-sm-06.jpg" alt="Nft_Profile" />
                  </a>
                </div>
                <div class="read-wrapper">
                  <h5 class="title"><a href="#">OperaHub</a></h5>
                  <span>Lathis Hook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Explore Style Carousel -->
  <div class="rn-live-bidding-area rn-section-gapTop">
    <div class="container">
      <div class="row mb--50">
        <div class="col-lg-12">
          <div class="section-title">
            <h3 class="title mb--0 live-bidding-title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
              Live Bidding
            </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15">
            <!-- start single product -->
            <div class="single-slide-product">
              <div class="product-style-one">
                <div class="card-thumbnail">
                  <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" /></a>
                  <div class="countdown" data-date="2022-11-09">
                    <div class="countdown-container days">
                      <span class="countdown-value">87</span>
                      <span class="countdown-heading">D's</span>
                    </div>
                    <div class="countdown-container hours">
                      <span class="countdown-value">23</span>
                      <span class="countdown-heading">H's</span>
                    </div>
                    <div class="countdown-container minutes">
                      <span class="countdown-value">38</span>
                      <span class="countdown-heading">Min's</span>
                    </div>
                    <div class="countdown-container seconds">
                      <span class="countdown-value">27</span>
                      <span class="countdown-heading">Sec</span>
                    </div>
                  </div>
                </div>
                <div class="product-share-wrapper">
                  <div class="profile-share">
                    <a href="author.html" class="avatar" data-tooltip="Mark JOrdan"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Mark"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Jordan"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                    <a class="more-author-text" href="#">20+ Place Bit.</a>
                  </div>
                  <div class="share-btn share-btn-activation dropdown">
                    <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <div class="single-slide-product">
              <div class="product-style-one">
                <div class="card-thumbnail">
                  <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" /></a>
                  <div class="countdown" data-date="2022-10-09">
                    <div class="countdown-container days">
                      <span class="countdown-value">87</span>
                      <span class="countdown-heading">D's</span>
                    </div>
                    <div class="countdown-container hours">
                      <span class="countdown-value">23</span>
                      <span class="countdown-heading">H's</span>
                    </div>
                    <div class="countdown-container minutes">
                      <span class="countdown-value">38</span>
                      <span class="countdown-heading">Min's</span>
                    </div>
                    <div class="countdown-container seconds">
                      <span class="countdown-value">27</span>
                      <span class="countdown-heading">Sec</span>
                    </div>
                  </div>
                </div>
                <div class="product-share-wrapper">
                  <div class="profile-share">
                    <a href="author.html" class="avatar" data-tooltip="Farik Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Shaikh"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Farik"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                    <a class="more-author-text" href="#">15+ Place Bit.</a>
                  </div>

                  <div class="share-btn share-btn-activation dropdown">
                    <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
                <a href="product-details.html"><span class="product-name">#21 The Wonder</span></a>
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
            <div class="single-slide-product">
              <div class="product-style-one">
                <div class="card-thumbnail">
                  <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-03.jpg" alt="NFT_portfolio" /></a>
                  <div class="countdown" data-date="2023-12-09">
                    <div class="countdown-container days">
                      <span class="countdown-value">87</span>
                      <span class="countdown-heading">D's</span>
                    </div>
                    <div class="countdown-container hours">
                      <span class="countdown-value">23</span>
                      <span class="countdown-heading">H's</span>
                    </div>
                    <div class="countdown-container minutes">
                      <span class="countdown-value">38</span>
                      <span class="countdown-heading">Min's</span>
                    </div>
                    <div class="countdown-container seconds">
                      <span class="countdown-value">27</span>
                      <span class="countdown-heading">Sec</span>
                    </div>
                  </div>
                </div>
                <div class="product-share-wrapper">
                  <div class="profile-share">
                    <a href="author.html" class="avatar" data-tooltip="Mona Lisa"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Lisa"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Mona"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                    <a class="more-author-text" href="#">12+ Place Bit.</a>
                  </div>
                  <div class="share-btn share-btn-activation dropdown">
                    <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
                <a href="product-details.html"><span class="product-name">OrBid6</span></a>
                <span class="latest-bid">Highest bid 2/31</span>
                <div class="bid-react-area">
                  <div class="last-bid">0.2128wETH</div>
                  <div class="react-area">
                    <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                      <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                    </svg>
                    <span class="number">12</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end single product -->

            <!-- start single product -->
            <div class="single-slide-product">
              <div class="product-style-one">
                <div class="card-thumbnail">
                  <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio" /></a>
                  <div class="countdown" data-date="2024-10-08">
                    <div class="countdown-container days">
                      <span class="countdown-value">87</span>
                      <span class="countdown-heading">D's</span>
                    </div>
                    <div class="countdown-container hours">
                      <span class="countdown-value">23</span>
                      <span class="countdown-heading">H's</span>
                    </div>
                    <div class="countdown-container minutes">
                      <span class="countdown-value">38</span>
                      <span class="countdown-heading">Min's</span>
                    </div>
                    <div class="countdown-container seconds">
                      <span class="countdown-value">27</span>
                      <span class="countdown-heading">Sec</span>
                    </div>
                  </div>
                </div>
                <div class="product-share-wrapper">
                  <div class="profile-share">
                    <a href="author.html" class="avatar" data-tooltip="Falak Sabbir"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Sabbir"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Falak"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                    <a class="more-author-text" href="#">16+ Place Bit.</a>
                  </div>
                  <div class="share-btn share-btn-activation dropdown">
                    <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
                <a href="product-details.html"><span class="product-name">Morgan11</span></a>
                <span class="latest-bid">Highest bid 3/16</span>
                <div class="bid-react-area">
                  <div class="last-bid">0.265wETH</div>
                  <div class="react-area">
                    <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                      <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                    </svg>
                    <span class="number">20</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end single product -->

            <!-- start single product -->
            <div class="single-slide-product">
              <div class="product-style-one">
                <div class="card-thumbnail">
                  <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" /></a>
                  <div class="countdown" data-date="2023-11-08">
                    <div class="countdown-container days">
                      <span class="countdown-value">87</span>
                      <span class="countdown-heading">D's</span>
                    </div>
                    <div class="countdown-container hours">
                      <span class="countdown-value">23</span>
                      <span class="countdown-heading">H's</span>
                    </div>
                    <div class="countdown-container minutes">
                      <span class="countdown-value">38</span>
                      <span class="countdown-heading">Min's</span>
                    </div>
                    <div class="countdown-container seconds">
                      <span class="countdown-value">27</span>
                      <span class="countdown-heading">Sec</span>
                    </div>
                  </div>
                </div>
                <div class="product-share-wrapper">
                  <div class="profile-share">
                    <a href="author.html" class="avatar" data-tooltip="Oram Kasin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Kasin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Oram"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                    <a class="more-author-text" href="#">10+ Place Bit.</a>
                  </div>
                  <div class="share-btn share-btn-activation dropdown">
                    <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
                <a href="product-details.html"><span class="product-name">mAtal8</span></a>
                <span class="latest-bid">Highest bid 6/50</span>
                <div class="bid-react-area">
                  <div class="last-bid">0.244wETH</div>
                  <div class="react-area">
                    <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                      <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                    </svg>
                    <span class="number">205</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end single product -->
            <!-- start single product -->
            <div class="single-slide-product">
              <div class="product-style-one">
                <div class="card-thumbnail">
                  <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" /></a>
                  <div class="countdown" data-date="2023-11-08">
                    <div class="countdown-container days">
                      <span class="countdown-value">87</span>
                      <span class="countdown-heading">D's</span>
                    </div>
                    <div class="countdown-container hours">
                      <span class="countdown-value">23</span>
                      <span class="countdown-heading">H's</span>
                    </div>
                    <div class="countdown-container minutes">
                      <span class="countdown-value">38</span>
                      <span class="countdown-heading">Min's</span>
                    </div>
                    <div class="countdown-container seconds">
                      <span class="countdown-value">27</span>
                      <span class="countdown-heading">Sec</span>
                    </div>
                  </div>
                </div>
                <div class="product-share-wrapper">
                  <div class="profile-share">
                    <a href="author.html" class="avatar" data-tooltip="Oram Kasin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Kasin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                    <a href="author.html" class="avatar" data-tooltip="Oram"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                    <a class="more-author-text" href="#">11+ Place Bit.</a>
                  </div>
                  <div class="share-btn share-btn-activation dropdown">
                    <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
                <a href="product-details.html"><span class="product-name">Delta25</span></a>
                <span class="latest-bid">Highest bid 6/30</span>
                <div class="bid-react-area">
                  <div class="last-bid">0.234wETH</div>
                  <div class="react-area">
                    <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                      <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                    </svg>
                    <span class="number">205</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- end single product -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Explore Style Carousel End-->

  <!-- start service area -->
  <div class="rn-service-area rn-section-gapTop">
    <div class="container">
      <div class="row">
        <div class="col-12 mb--50">
          <h3 class="title" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            Create and sell your NFTs
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
                <h4 class="title"><a href="#">Set up your wallet</a></h4>
                <p class="description">
                  Powerful features and inclusions, which makes Nuron
                  standout, easily customizable and scalable.
                </p>
                <a class="read-more-button" href="#"><i class="feather-arrow-right"></i></a>
              </div>
            </div>
            <a class="over-link" href="#"></a>
          </div>
        </div>
        <!-- End single service -->
        <!-- start single service -->
        <div class="col-xxl-3 col-lg-4 col-md-6 col-sm-6 col-12">
          <div data-sal="slide-up" data-sal-delay="200" data-sal-duration="800" class="rn-service-one color-shape-1">
            <div class="inner">
              <div class="icon">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/icons/shape-1.png" alt="Shape" />
              </div>
              <div class="subtitle">Step-02</div>
              <div class="content">
                <h4 class="title"><a href="#">Create your collection</a></h4>
                <p class="description">
                  A great collection of beautiful website templates for your
                  need. Choose the best suitable template.
                </p>
                <a class="read-more-button" href="#"><i class="feather-arrow-right"></i></a>
              </div>
            </div>
            <a class="over-link" href="#"></a>
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
                <h4 class="title"><a href="#">Add your NFT's</a></h4>
                <p class="description">
                  We've made the template fully responsive, so it looks great
                  on all devices: desktop, tablets and.
                </p>
                <a class="read-more-button" href="#"><i class="feather-arrow-right"></i></a>
              </div>
            </div>
            <a class="over-link" href="#"></a>
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
                <h4 class="title"><a href="#">Sell Your NFT's</a></h4>
                <p class="description">
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth NFT's.
                </p>
                <a class="read-more-button" href="#"><i class="feather-arrow-right"></i></a>
              </div>
            </div>
            <a class="over-link" href="#"></a>
          </div>
        </div>
        <!-- End single service -->
      </div>
    </div>
  </div>
  <!-- End service area -->
  <!-- New items Start -->
  <div class="rn-new-items rn-section-gapTop">
    <div class="container">
      <div class="row mb--50 align-items-center">
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            Newest Items
          </h3>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
          <div class="view-more-btn text-start text-sm-end" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <a class="btn-transparent" href="#">VIEW ALL<i data-feather="arrow-right"></i></a>
          </div>
        </div>
      </div>
      <div class="row g-5">
        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-01.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Jone Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Nisat Tara"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">9+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
        <div data-sal="slide-up" data-sal-delay="200" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-02.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Nira Ara"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Fatima Afrafy"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">10+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">Diamond Dog</span></a>
            <span class="latest-bid">Highest bid 5/11</span>
            <div class="bid-react-area">
              <div class="last-bid">0.892wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">420</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->

        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="250" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-03.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Janin Ara"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Atif Islam"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">10+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">OrBid6</span></a>
            <span class="latest-bid">Highest bid 2/31</span>
            <div class="bid-react-area">
              <div class="last-bid">0.2128wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">12</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->

        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="300" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">8+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">Morgan11</span></a>
            <span class="latest-bid">Highest bid 3/16</span>
            <div class="bid-react-area">
              <div class="last-bid">0.265wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">20</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->

        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-7.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">15+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">mAtal8</span></a>
            <span class="latest-bid">Highest bid 6/50</span>
            <div class="bid-react-area">
              <div class="last-bid">0.244wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">205</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->
      </div>
    </div>
  </div>
  <!-- New items End -->
  <!-- top top-seller start -->
  <div class="rn-banner-area rn-section-gapTop">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-12">
          <div class="slider-style-6 wide-wrapper slick-activation-06 slick-arrow-between">
            <!-- Start Single Portfolio  -->
            <div class="slide bg_image bg_image--19">
              <div class="banner-read-thumb-lg">
                <h4>
                  The way to find any <br />
                  Digital content
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores expedita beatae exercitationem quasi ullam esse?
                </p>
                <div class="button-group">
                  <a href="create.html" class="btn btn-large btn-primary mr--15">Get Started</a>
                  <a href="create.html" class="btn btn-large btn-primary-alta">Create</a>
                </div>
              </div>
            </div>
            <!-- Start Single Portfolio  -->

            <!-- Start Single Portfolio  -->
            <div class="slide bg_image bg_image--18">
              <div class="banner-read-thumb-lg">
                <h4>
                  The way to find any <br />
                  Digital content
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores expedita beatae exercitationem quasi ullam esse?
                </p>
                <div class="button-group">
                  <a href="create.html" class="btn btn-large btn-primary mr--15">Get Started</a>
                  <a href="create.html" class="btn btn-large btn-primary-alta">Create</a>
                </div>
              </div>
            </div>
            <!-- Start Single Portfolio  -->

            <!-- Start Single Portfolio  -->
            <div class="slide bg_image bg_image--20">
              <div class="banner-read-thumb-lg">
                <h4>
                  The way to find any <br />
                  Digital content
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores expedita beatae exercitationem quasi ullam esse?
                </p>
                <div class="button-group">
                  <a href="create.html" class="btn btn-large btn-primary mr--15">Get Started</a>
                  <a href="create.html" class="btn btn-large btn-primary-alta">Create</a>
                </div>
              </div>
            </div>
            <!-- Start Single Portfolio  -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="rn-creator-title-area rn-section-gapTop">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <h2 class="title mb--0">Our Best Creators</h2>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
          <div class="shortby-default text-start text-sm-end">
            <label class="filter-leble">SHOT BY:</label>
            <select>
              <option data-display="Top Rated">Top Rated</option>
              <option value="1">Best Seller</option>
              <option value="2">Recent Added</option>
              <option value="3">Varified</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row g-5 mt--30 creator-list-wrapper">
        <!-- start single top-seller -->
        <div class="creator-single col-lg-3 col-md-4 col-sm-6">
          <div class="top-seller-inner-one explore">
            <div class="top-seller-wrapper">
              <div class="thumbnail varified">
                <a href="author.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
              </div>
              <div class="top-seller-content">
                <a href="author.html">
                  <h6 class="name">Brodband</h6>
                </a>
                <span class="count-number"> $2500,000 </span>
              </div>
            </div>
            <a class="over-link" href="author.html"></a>
          </div>
        </div>
        <!-- End single top-seller -->
        <!-- start single top-seller -->
        <div class="creator-single col-lg-3 col-md-4 col-sm-6">
          <div class="top-seller-inner-one explore">
            <div class="top-seller-wrapper">
              <div class="thumbnail varified">
                <a href="author.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile" /></a>
              </div>
              <div class="top-seller-content">
                <a href="author.html">
                  <h6 class="name">Marks</h6>
                </a>
                <span class="count-number"> $2200,000 </span>
              </div>
            </div>
            <a class="over-link" href="author.html"></a>
          </div>
        </div>
        <!-- End single top-seller -->
        <!-- start single top-seller -->
        <div class="creator-single col-lg-3 col-md-4 col-sm-6">
          <div class="top-seller-inner-one explore">
            <div class="top-seller-wrapper">
              <div class="thumbnail varified">
                <a href="author.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile" /></a>
              </div>
              <div class="top-seller-content">
                <a href="author.html">
                  <h6 class="name">JOne Lee</h6>
                </a>
                <span class="count-number"> $900,000 </span>
              </div>
            </div>
            <a class="over-link" href="author.html"></a>
          </div>
        </div>
        <!-- End single top-seller -->
        <!-- start single top-seller -->
        <div class="creator-single col-lg-3 col-md-4 col-sm-6">
          <div class="top-seller-inner-one explore">
            <div class="top-seller-wrapper">
              <div class="thumbnail varified">
                <a href="author.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
              </div>
              <div class="top-seller-content">
                <a href="author.html">
                  <h6 class="name">Malinga</h6>
                </a>
                <span class="count-number"> $2400,000 </span>
              </div>
            </div>
            <a class="over-link" href="author.html"></a>
          </div>
        </div>
        <!-- End single top-seller -->
        <!-- start single top-seller -->
        <div class="creator-single col-lg-3 col-md-4 col-sm-6">
          <div class="top-seller-inner-one explore">
            <div class="top-seller-wrapper">
              <div class="thumbnail varified">
                <a href="author.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
              </div>
              <div class="top-seller-content">
                <a href="author.html">
                  <h6 class="name">Favis</h6>
                </a>
                <span class="count-number"> $290,000 </span>
              </div>
            </div>
            <a class="over-link" href="author.html"></a>
          </div>
        </div>
        <!-- End single top-seller -->
        <!-- start single top-seller -->
        <div class="creator-single col-lg-3 col-md-4 col-sm-6">
          <div class="top-seller-inner-one explore">
            <div class="top-seller-wrapper">
              <div class="thumbnail varified">
                <a href="author.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
              </div>
              <div class="top-seller-content">
                <a href="author.html">
                  <h6 class="name">Fakir</h6>
                </a>
                <span class="count-number"> $299,00,000 </span>
              </div>
            </div>
            <a class="over-link" href="author.html"></a>
          </div>
        </div>
        <!-- End single top-seller -->
        <!-- start single top-seller -->
        <div class="creator-single col-lg-3 col-md-4 col-sm-6">
          <div class="top-seller-inner-one explore">
            <div class="top-seller-wrapper">
              <div class="thumbnail varified">
                <a href="author.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-7.png" alt="Nft_Profile" /></a>
              </div>
              <div class="top-seller-content">
                <a href="author.html">
                  <h6 class="name">Sajib</h6>
                </a>
                <span class="count-number"> $1100,000 </span>
              </div>
            </div>
            <a class="over-link" href="author.html"></a>
          </div>
        </div>
        <!-- End single top-seller -->
        <!-- start single top-seller -->
        <div class="creator-single col-lg-3 col-md-4 col-sm-6">
          <div class="top-seller-inner-one explore">
            <div class="top-seller-wrapper">
              <div class="thumbnail varified">
                <a href="author.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile" /></a>
              </div>
              <div class="top-seller-content">
                <a href="author.html">
                  <h6 class="name">Mikel</h6>
                </a>
                <span class="count-number"> $2500,000 </span>
              </div>
            </div>
            <a class="over-link" href="author.html"></a>
          </div>
        </div>
        <!-- End single top-seller -->
      </div>
    </div>
  </div>
  <!-- top top-seller end -->
  <!-- Start product area -->
  <div class="rn-product-area rn-section-gapTop">
    <div class="container">
      <div class="row mb--50 align-items-center">
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            Explore Product
          </h3>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
          <div class="view-more-btn text-start text-sm-end" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <button class="discover-filter-button discover-filter-activation btn btn-primary">
              Filter<i class="feather-filter"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="default-exp-wrapper default-exp-expand">
        <div class="inner">
          <div class="filter-select-option">
            <label class="filter-leble">LIKES</label>
            <select>
              <option data-display="Most liked">Most liked</option>
              <option value="1">Least liked</option>
            </select>
          </div>

          <div class="filter-select-option">
            <label class="filter-leble">Category</label>
            <select>
              <option data-display="Category">Category</option>
              <option value="1">Art</option>
              <option value="1">Photograph</option>
              <option value="2">Metaverses</option>
              <option value="4">Potato</option>
              <option value="4">Photos</option>
            </select>
          </div>

          <div class="filter-select-option">
            <label class="filter-leble">Collections</label>
            <select>
              <option data-display="Collections">Collections</option>
              <option value="1">BoredApeYachtClub</option>
              <option value="2">MutantApeYachtClub</option>
              <option value="4">Art Blocks Factory</option>
            </select>
          </div>

          <div class="filter-select-option">
            <label class="filter-leble">Sale type</label>
            <select>
              <option data-display="Sale type">Sale type</option>
              <option value="1">Fixed price</option>
              <option value="2">Timed auction</option>
              <option value="4">Not for sale</option>
              <option value="4">Open for offers</option>
            </select>
          </div>

          <div class="filter-select-option">
            <label class="filter-leble">Price Range</label>
            <div class="price_filter s-filter clear">
              <form action="#" method="GET">
                <div id="slider-range"></div>
                <div class="slider__range--output">
                  <div class="price__output--wrap">
                    <div class="price--output">
                      <span>Price :</span><input type="text" id="amount" readonly />
                    </div>
                    <div class="price--filter">
                      <a class="btn btn-primary btn-small" href="#">Filter</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-5">
        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-01.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">9+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
        <div data-sal="slide-up" data-sal-delay="200" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-02.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="mr. Davei"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Mrs.Laumi"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Shanon"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">11+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">Diamond Dog</span></a>
            <span class="latest-bid">Highest bid 5/11</span>
            <div class="bid-react-area">
              <div class="last-bid">0.892wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">420</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->
        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="250" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-03.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="mr. Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-7.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Laumi"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Tom"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">12+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">OrBid6</span></a>
            <span class="latest-bid">Highest bid 2/31</span>
            <div class="bid-react-area">
              <div class="last-bid">0.2128wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">12</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->
        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="300" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio" /></a>
              <div class="countdown" data-date="2022-11-09">
                <div class="countdown-container days">
                  <span class="countdown-value">87</span>
                  <span class="countdown-heading">D's</span>
                </div>
                <div class="countdown-container hours">
                  <span class="countdown-value">23</span>
                  <span class="countdown-heading">H's</span>
                </div>
                <div class="countdown-container minutes">
                  <span class="countdown-value">38</span>
                  <span class="countdown-heading">Min's</span>
                </div>
                <div class="countdown-container seconds">
                  <span class="countdown-value">27</span>
                  <span class="countdown-heading">Sec</span>
                </div>
              </div>
            </div>

            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="mr. Davei"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Mrs.Laumi"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Shanon"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">13+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">Morgan11</span></a>
            <span class="latest-bid">Highest bid 3/16</span>
            <div class="bid-react-area">
              <div class="last-bid">0.265wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">20</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->
        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Terasa"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Sakib"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-7.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Miraj"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">15+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">mAtal8</span></a>
            <span class="latest-bid">Highest bid 6/50</span>
            <div class="bid-react-area">
              <div class="last-bid">0.244wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">205</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->

        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="400" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Moris"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Jsufia"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Mordan"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">9+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">Platonum</span></a>
            <span class="latest-bid">Highest bid 1/10</span>
            <div class="bid-react-area">
              <div class="last-bid">0.450wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">65</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->
        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="450" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio" /></a>
              <div class="countdown" data-date="2022-12-09">
                <div class="countdown-container days">
                  <span class="countdown-value">35</span>
                  <span class="countdown-heading">D's</span>
                </div>
                <div class="countdown-container hours">
                  <span class="countdown-value">42</span>
                  <span class="countdown-heading">H's</span>
                </div>
                <div class="countdown-container minutes">
                  <span class="countdown-value">10</span>
                  <span class="countdown-heading">Min's</span>
                </div>
                <div class="countdown-container seconds">
                  <span class="countdown-value">23</span>
                  <span class="countdown-heading">Sec</span>
                </div>
              </div>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Thinm"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Jubin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Nautial"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">14+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">PlatOrgan</span></a>
            <span class="latest-bid">Highest bid 2/22</span>
            <div class="bid-react-area">
              <div class="last-bid">0.311wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">56</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->
        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="500" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Tabriz"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Juskin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Money"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">14+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">Orgajis</span></a>
            <span class="latest-bid">Highest bid 2/10</span>
            <div class="bid-react-area">
              <div class="last-bid">0.244wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">89</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->
        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="550" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Morokko"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Levnon"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Trim sawdi"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">12+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">#720</span></a>
            <span class="latest-bid">Highest bid 1/1</span>
            <div class="bid-react-area">
              <div class="last-bid">0.244wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">502</span>
              </div>
            </div>
          </div>
        </div>
        <!-- start single product -->
        <div data-sal="slide-up" data-sal-delay="600" data-sal-duration="800" class="col-5 col-lg-4 col-md-6 col-sm-6 col-12">
          <div class="product-style-one no-overlay">
            <div class="card-thumbnail">
              <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-11.jpg" alt="NFT_portfolio" /></a>
            </div>
            <div class="product-share-wrapper">
              <div class="profile-share">
                <a href="author.html" class="avatar" data-tooltip="Mark David"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Sunil Satti"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-7.png" alt="Nft_Profile" /></a>
                <a class="more-author-text" href="#">5+ Place Bit.</a>
              </div>
              <div class="share-btn share-btn-activation dropdown">
                <button class="icon" data-bs-toggle="dropdown" aria-expanded="false">
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
            <a href="product-details.html"><span class="product-name">Orthogon#720</span></a>
            <span class="latest-bid">Highest bid 1/1</span>
            <div class="bid-react-area">
              <div class="last-bid">0.244wETH</div>
              <div class="react-area">
                <svg viewBox="0 0 17 16" fill="none" width="16" height="16" class="sc-bdnxRM sc-hKFxyN kBvkOu">
                  <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor" stroke-width="2"></path>
                </svg>
                <span class="number">308</span>
              </div>
            </div>
          </div>
        </div>
        <!-- end single product -->
      </div>
    </div>
  </div>
  <!-- end product area -->
  <!-- collection area Start -->
  <div class="rn-collection-area rn-section-gapTop">
    <div class="container">
      <div class="row mb--50 align-items-center">
        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
          <h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            Top Collection
          </h3>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
          <div class="view-more-btn text-start text-sm-end" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <a class="btn-transparent" href="#">VIEW ALL<i data-feather="arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div class="row g-5">
        <!-- start single collention -->
        <div data-sal="slide-up" data-sal-delay="150" data-sal-duration="800" class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
          <a href="product-details.html" class="rn-collection-inner-one">
            <div class="collection-wrapper">
              <div class="collection-big-thumbnail">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-lg-01.jpg" alt="Nft_Profile" />
              </div>
              <div class="collenction-small-thumbnail">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-01.jpg" alt="Nft_Profile" />
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-02.jpg" alt="Nft_Profile" />
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-03.jpg" alt="Nft_Profile" />
              </div>
              <div class="collection-profile">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-15.png" alt="Nft_Profile" />
              </div>
              <div class="collection-deg">
                <h6 class="title">Cubic Trad</h6>
                <span class="items">27 Items</span>
              </div>
            </div>
          </a>
        </div>
        <!-- End single collention -->
        <!-- start single collention -->
        <div data-sal="slide-up" data-sal-delay="200" data-sal-duration="800" class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
          <a href="product-details.html" class="rn-collection-inner-one">
            <div class="collection-wrapper">
              <div class="collection-big-thumbnail">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-lg-02.jpg" alt="Nft_Profile" />
              </div>
              <div class="collenction-small-thumbnail">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-04.jpg" alt="Nft_Profile" />
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-05.jpg" alt="Nft_Profile" />
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-06.jpg" alt="Nft_Profile" />
              </div>
              <div class="collection-profile">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-12.png" alt="Nft_Profile" />
              </div>
              <div class="collection-deg">
                <h6 class="title">Diamond Dog</h6>
                <span class="items">20 Items</span>
              </div>
            </div>
          </a>
        </div>
        <!-- End single collention -->
        <!-- start single collention -->
        <div data-sal="slide-up" data-sal-delay="250" data-sal-duration="800" class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
          <a href="product-details.html" class="rn-collection-inner-one">
            <div class="collection-wrapper">
              <div class="collection-big-thumbnail">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-lg-03.jpg" alt="Nft_Profile" />
              </div>
              <div class="collenction-small-thumbnail">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-07.jpg" alt="Nft_Profile" />
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-08.jpg" alt="Nft_Profile" />
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-09.jpg" alt="Nft_Profile" />
              </div>
              <div class="collection-profile">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-13.png" alt="Nft_Profile" />
              </div>
              <div class="collection-deg">
                <h6 class="title">Morgan11</h6>
                <span class="items">15 Items</span>
              </div>
            </div>
          </a>
        </div>
        <!-- End single collention -->
        <!-- start single collention -->
        <div data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" class="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12">
          <a href="product-details.html" class="rn-collection-inner-one">
            <div class="collection-wrapper">
              <div class="collection-big-thumbnail">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-lg-05.jpg" alt="Nft_Profile" />
              </div>
              <div class="collenction-small-thumbnail">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-10.jpg" alt="Nft_Profile" />
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-11.jpg" alt="Nft_Profile" />
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/collection/collection-sm-12.jpg" alt="Nft_Profile" />
              </div>
              <div class="collection-profile">
                <img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-14.png" alt="Nft_Profile" />
              </div>
              <div class="collection-deg">
                <h6 class="title">Orthogon#720</h6>
                <span class="items">10 Items</span>
              </div>
            </div>
          </a>
        </div>
        <!-- End single collention -->
      </div>
    </div>
  </div>
  <!-- collection area End -->
  <!-- Modal -->
  <div class="rn-popup-modal share-modal-wrapper modal fade" id="shareModal" tabindex="-1" aria-hidden="true">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
      <i data-feather="x"></i>
    </button>
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content share-wrapper">
        <div class="modal-header share-area">
          <h5 class="modal-title">Share this NFT</h5>
        </div>
        <div class="modal-body">
          <ul class="social-share-default">
            <li>
              <a href="#"><span class="icon"><i data-feather="facebook"></i></span><span class="text">facebook</span></a>
            </li>
            <li>
              <a href="#"><span class="icon"><i data-feather="twitter"></i></span><span class="text">twitter</span></a>
            </li>
            <li>
              <a href="#"><span class="icon"><i data-feather="linkedin"></i></span><span class="text">linkedin</span></a>
            </li>
            <li>
              <a href="#"><span class="icon"><i data-feather="instagram"></i></span><span class="text">instagram</span></a>
            </li>
            <li>
              <a href="#"><span class="icon"><i data-feather="youtube"></i></span><span class="text">youtube</span></a>
            </li>
          </ul>
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
  <div class="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
    <div class="container">
      <div class="row gx-5">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="widget-content-wrapper">
            <div class="footer-left">
              <div class="logo-thumbnail logo-custom-css">
                <a class="logo-light" href="index.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/logo/logo-white.png" alt="nft-logo" /></a>
                <a class="logo-dark" href="index.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/logo/logo-dark.png" alt="nft-logo" /></a>
              </div>
              <p class="rn-footer-describe">
                Created with the collaboration of over 60 of the world's best
                Nuron Artists.
              </p>
            </div>
            <div class="widget-bottom mt--40 pt--40">
              <h6 class="title">Get The Latest Nuron Updates</h6>
              <div class="input-group">
                <input type="text" class="form-control bg-color--2" placeholder="Your username" aria-label="Recipient's username" />
                <div class="input-group-append">
                  <button class="btn btn-primary-alta btn-outline-secondary" type="button">
                    Subscribe
                  </button>
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
                    <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-01.jpg" alt="Product Images" />
                  </a>
                </div>
                <div class="content">
                  <h6 class="title">
                    <a href="product-details.html">#21 The Wonder</a>
                  </h6>
                  <p>Highest bid 1/20</p>
                  <span class="price">0.244wETH</span>
                </div>
              </li>
              <li class="recent-post">
                <div class="thumbnail">
                  <a href="product-details.html">
                    <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-02.jpg" alt="Product Images" />
                  </a>
                </div>
                <div class="content">
                  <h6 class="title">
                    <a href="product-details.html">Diamond Dog</a>
                  </h6>
                  <p>Highest bid 1/20</p>
                  <span class="price">0.022wETH</span>
                </div>
              </li>
              <li class="recent-post">
                <div class="thumbnail">
                  <a href="product-details.html">
                    <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-03.jpg" alt="Product Images" />
                  </a>
                </div>
                <div class="content">
                  <h6 class="title">
                    <a href="product-details.html">Morgan11</a>
                  </h6>
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
              <li>
                <a href="#"><i data-feather="facebook"></i></a>
              </li>
              <li>
                <a href="#"><i data-feather="twitter"></i></a>
              </li>
              <li>
                <a href="#"><i data-feather="instagram"></i></a>
              </li>
              <li>
                <a href="#"><i data-feather="linkedin"></i></a>
              </li>
              <li>
                <a href="#"><i data-feather="mail"></i></a>
              </li>
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

  <script></script>
</body>

</html>