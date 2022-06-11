<?php

include 'inc/config.inc.php';

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Product Details || Nuron - NFT Marketplace Template</title>
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
  <style>
    HTML CSS JSResult Skip Results Iframe EDIT ON
    /* 
    Body, button, comment-thread, and utilities

    Notes:
        - This section sets some basic styles. You can ignore this part and 
        go directly to the comment styles.
*/

    * {
      box-sizing: border-box;
    }



    button {
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      font-size: 14px;
      padding: 4px 8px;
      color: rgba(0, 0, 0, 0.85);
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }

    button:hover,
    button:focus,
    button:active {
      cursor: pointer;
      background-color: #ecf0f1;
    }

    .comment-thread {
      width: 700px;
      max-width: 100%;
      margin: auto;
      padding: 0 30px;
      background-color: #fff;
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
      display: flex;
      align-items: center;
      height: 50px;
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
      color: rgba(0, 0, 0, 0.85);
      font-weight: bold;
      text-decoration: none;
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
      top: 50px;
      left: 0;
      width: 12px;
      height: calc(100% - 50px);
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      background-color: rgba(0, 0, 0, 0.1);
      background-clip: padding-box;
    }

    .comment-border-link:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }

    .comment-body {
      padding: 0 20px;
      padding-left: 28px;
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
      content: "Click to hide";
    }

    details.comment:not([open]) .comment-heading::after {
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
  </style>
</head>

<body class="template-color-1 nft-body-connect">
  <!-- Start Header -->

  <!-- End Header Area -->

  <!-- start page title area -->

  <!-- end page title area -->

  <!-- start product details area -->
  <div class="product-details-area rn-section-gapTop">
    <div class="container">
      <div class="row g-5">
        <!-- product image area -->

        <div class="col-lg-7 col-md-12 col-sm-12">


          <div class="product-tab-wrapper rbt-sticky-top-adjust">
            <div class="pd-tab-inner">


              <div class="nav rn-pd-nav rn-pd-rt-content nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                  <span class="rn-pd-sm-thumbnail">
                    <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/sm/portfolio-01.jpg" alt="Nft_Profile" />
                  </span>
                </button>
                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                  <span class="rn-pd-sm-thumbnail">
                    <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/sm/portfolio-02.jpg" alt="Nft_Profile" />
                  </span>
                </button>
                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                  <span class="rn-pd-sm-thumbnail">
                    <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/sm/portfolio-03.jpg" alt="Nft_Profile" />
                  </span>
                </button>
              </div>

              <div class="tab-content rn-pd-content" id="v-pills-tabContent">

                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div class="rn-pd-thumbnail">
                    <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/lg/portfolio-01.jpg" alt="Nft_Profile" />
                  </div>
                </div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <div class="rn-pd-thumbnail">
                    <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/lg/portfolio-02.jpg" alt="Nft_Profile" />
                  </div>
                </div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                  <div class="rn-pd-thumbnail">
                    <img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/lg/portfolio-03.jpg" alt="Nft_Profile" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <!-- product image area end -->

        <div class="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
          <div class="rn-pd-content-area">
            <div class="pd-title-area">
              <h4 class="title">The Amazing Game</h4>
              <div class="pd-react-area">
                <div class="heart-count">
                  <i data-feather="heart"></i>
                  <span>33</span>
                </div>
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
            <span class="bid">Height bid <span class="price">0.11wETH</span></span>
            <h6 class="title-name">#22 Portal , Info bellow</h6>
            <div class="catagory-collection">
              <div class="catagory">
                <span>Catagory
                  <span class="color-body"> 10% royalties</span></span>
                <div class="top-seller-inner-one">
                  <div class="top-seller-wrapper">
                    <div class="thumbnail">
                      <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                    </div>
                    <div class="top-seller-content">
                      <a href="#">
                        <h6 class="name">Brodband</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collection">
                <span>Collections</span>
                <div class="top-seller-inner-one">
                  <div class="top-seller-wrapper">
                    <div class="thumbnail">
                      <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                    </div>
                    <div class="top-seller-content">
                      <a href="#">
                        <h6 class="name">Brodband</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="btn btn-primary-alta" href="#">Unlockable content included</a>
            <div class="rn-bid-details">
              <div class="tab-wrapper-one">
                <nav class="tab-button-one">
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">
                      Bids
                    </button>
                    <button class="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">
                      Details
                    </button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                      History
                    </button>
                  </div>
                </nav>
                <div class="tab-content rn-bid-content" id="nav-tabContent">
                  <div class="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <!-- single creator -->
                    <div class="top-seller-inner-one">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span>0.11wETH by <a href="#">Allen Waltker</a></span>
                          <span class="count-number"> 1 hours ago </span>
                        </div>
                      </div>
                    </div>
                    <!-- single creator -->
                    <!-- single creator -->
                    <div class="top-seller-inner-one">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span>0.09wETH by <a href="#">Joe Biden</a></span>
                          <span class="count-number"> 1.30 hours ago </span>
                        </div>
                      </div>
                    </div>
                    <!-- single creator -->
                    <!-- single creator -->
                    <div class="top-seller-inner-one">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span>0.07wETH by <a href="#">Sonial mridha</a></span>
                          <span class="count-number"> 1.35 hours ago </span>
                        </div>
                      </div>
                    </div>
                    <!-- single creator -->
                    <!-- single creator -->
                    <div class="top-seller-inner-one">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span>0.07wETH by <a href="#">Tribute Dhusra</a></span>
                          <span class="count-number"> 1.55 hours ago </span>
                        </div>
                      </div>
                    </div>
                    <!-- single creator -->
                    <!-- single creator -->
                    <div class="top-seller-inner-one">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-7.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span>0.07wETH by <a href="#">Sonia Sobnom</a></span>
                          <span class="count-number"> 2 hours ago </span>
                        </div>
                      </div>
                    </div>
                    <!-- single creator -->
                    <!-- single creator -->
                    <div class="top-seller-inner-one">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span>0.02wETH by <a href="#">Sadia Rummon</a></span>
                          <span class="count-number"> 2.5 hours ago </span>
                        </div>
                      </div>
                    </div>
                    <!-- single creator -->
                  </div>
                  <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <!-- single -->
                    <div class="rn-pd-bd-wrapper">
                      <div class="top-seller-inner-one">
                        <!-- <p class="disc">Lorem ipsum dolor, sit amet consectetur adipisicing
                                                    elit. Doloribus debitis nemo deserunt.</p> -->
                        <h6 class="name-title">Owner</h6>
                        <div class="top-seller-wrapper">
                          <div class="thumbnail">
                            <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile" /></a>
                          </div>
                          <div class="top-seller-content">
                            <a href="#">
                              <h6 class="name">Brodband</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <!-- single -->
                      <div class="rn-pd-sm-property-wrapper">
                        <h6 class="pd-property-title">Property</h6>
                        <div class="property-wrapper">
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">HYPE TYPE</span>
                            <span class="color-white value">CALM AF (STILL)</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">BASTARDNESS</span>
                            <span class="color-white value">C00LIO BASTARD</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">TYPE</span>
                            <span class="color-white value">APE</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">ASTARDNESS</span>
                            <span class="color-white value">BASTARD</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">BAD HABIT(S)</span>
                            <span class="color-white value">PIPE</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">BID</span>
                            <span class="color-white value">BPEYti</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">ASTRAGENAKAR</span>
                            <span class="color-white value">BASTARD</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">CITY</span>
                            <span class="color-white value">TOKYO</span>
                          </div>
                          <!-- single property End -->
                        </div>
                      </div>
                      <!-- single -->
                      <!-- single -->
                      <div class="rn-pd-sm-property-wrapper">
                        <h6 class="pd-property-title">Catagory</h6>
                        <div class="catagory-wrapper">
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">ZARY</span>
                            <span class="color-white value">APP</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">SOMALIAN</span>
                            <span class="color-white value">TRIBUTE</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">TUNA</span>
                            <span class="color-white value">PIPE</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">BID</span>
                            <span class="color-white value">BPEYti</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">ASTRAGENAKAR</span>
                            <span class="color-white value">BASTARD</span>
                          </div>
                          <!-- single property End -->
                          <!-- single property -->
                          <div class="pd-property-inner">
                            <span class="color-body type">CITY</span>
                            <span class="color-white value">TOKYO</span>
                          </div>
                          <!-- single property End -->
                        </div>
                      </div>
                      <!-- single -->
                    </div>
                    <!-- single -->
                  </div>
                  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <!-- single creator -->
                    <div class="top-seller-inner-one">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span>0.11wETH by<a href="#">Allen Waltker</a></span>
                          <span class="count-number"> 1 hours ago </span>
                        </div>
                      </div>
                    </div>
                    <!-- single creator -->
                    <!-- single creator -->
                    <div class="top-seller-inner-one mt--20">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span>0.11wETH by<a href="#">Allen Waltker</a></span>
                          <span class="count-number"> 1 hours ago </span>
                        </div>
                      </div>
                    </div>
                    <!-- single creator -->
                    <!-- single creator -->
                    <div class="top-seller-inner-one mt--20">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span>0.11wETH by<a href="#">Allen Waltker</a></span>
                          <span class="count-number"> 1 hours ago </span>
                        </div>
                      </div>
                    </div>
                    <!-- single creator -->
                    <!-- single creator -->
                    <div class="top-seller-inner-one mt--20">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span>0.11wETH by<a href="#">Allen Waltker</a></span>
                          <span class="count-number"> 1 hours ago </span>
                        </div>
                      </div>
                    </div>
                    <!-- single creator -->
                    <!-- single creator -->
                    <div class="top-seller-inner-one mt--20">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span>0.11wETH by<a href="#">Allen Waltker</a></span>
                          <span class="count-number"> 1 hours ago </span>
                        </div>
                      </div>
                    </div>
                    <!-- single creator -->
                  </div>
                </div>
              </div>
              <div class="place-bet-area">
                <div class="rn-bet-create">
                  <div class="bid-list winning-bid">
                    <h6 class="title">Winning bit</h6>
                    <div class="top-seller-inner-one">
                      <div class="top-seller-wrapper">
                        <div class="thumbnail">
                          <a href="#"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-7.png" alt="Nft_Profile" /></a>
                        </div>
                        <div class="top-seller-content">
                          <span class="heighest-bid">Heighest bid <a href="#">Atif aslam</a></span>
                          <span class="count-number"> 0.115wETH </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bid-list left-bid">
                    <h6 class="title">Auction has ended</h6>
                    <div class="countdown mt--15" data-date="2025-12-09">
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
                </div>
                <!-- <a class="btn btn-primary-alta mt--30" href="#">Place a Bid</a> -->
                <button type="button" class="btn btn-primary-alta mt--30" data-bs-toggle="modal" data-bs-target="#placebidModal">
                  Place a Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End product details area -->
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

        </ul>
        <!-- End Coment List  -->
      </div>
    </div>
  </div>


  <div class="comment-thread">
    <!-- Comment 1 start -->
    <details open class="comment">

      <summary>
        <div class="comment-heading">
          <div class="comment-voting">
            <button type="button">
              <span aria-hidden="true">&#9650;</span>
              <span class="sr-only">Vote up</span>
            </button>
            <button type="button">
              <span aria-hidden="true">&#9660;</span>
              <span class="sr-only">Vote down</span>
            </button>
          </div>
          <div class="comment-info">
            <a href="#" class="comment-author">someguy14</a>
            <p class="m-0">
              22 points &bull; 4 days ago
            </p>
          </div>

      </summary>

      <div class="comment-body" style="">
        <p>
          This is really great! I fully agree with what you wrote, and this is sure to help me out in the future. Thank you for posting this.
        </p>
        <button type="button" data-toggle="reply-form" data-target="comment-1-reply-form">Reply</button>
        <button type="button">Flag</button>

        <!-- Reply form start -->
        <form method="POST" class="reply-form d-none" id="comment-1-reply-form">
          <textarea placeholder="Reply to comment" rows="4"></textarea>
          <button type="submit">Submit</button>
          <button type="button" data-toggle="reply-form" data-target="comment-1-reply-form">Cancel</button>
        </form>
        <!-- Reply form end -->
      </div>



      <div class="replies">
        <!-- Comment 2 start -->
        <details open class="comment">
          <a href="#comment-2" class="comment-border-link">
            <span class="sr-only">Jump to comment-2</span>
          </a>
          <summary>
            <div class="comment-heading">
              <div class="comment-voting">
                <button type="button">
                  <span aria-hidden="true">&#9650;</span>
                  <span class="sr-only">Vote up</span>
                </button>
                <button type="button">
                  <span aria-hidden="true">&#9660;</span>
                  <span class="sr-only">Vote down</span>
                </button>
              </div>
              <div class="comment-info">
                <a href="#" class="comment-author">randomperson81</a>
                <p class="m-0">
                  4 points &bull; 3 days ago
                </p>
              </div>
            </div>
          </summary>

          <div class="comment-body">
            <p>
              Took the words right out of my mouth!
            </p>
            <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Reply</button>
            <button type="button">Flag</button>

            <!-- Reply form start -->
            <form method="POST" class="reply-form d-none" id="comment-2-reply-form">
              <textarea placeholder="Reply to comment" rows="4"></textarea>
              <button type="submit">Submit</button>
              <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Cancel</button>
            </form>
            <!-- Reply form end -->
          </div>

          <!-- Comment 2 end -->
          <div class="replies">
            <!-- Comment 2 start -->
            <details open class="comment">
              <a href="#comment-2" class="comment-border-link">
                <span class="sr-only">Jump to comment-2</span>
              </a>
              <summary>
                <div class="comment-heading">
                  <div class="comment-voting">
                    <button type="button">
                      <span aria-hidden="true">&#9650;</span>
                      <span class="sr-only">Vote up</span>
                    </button>
                    <button type="button">
                      <span aria-hidden="true">&#9660;</span>
                      <span class="sr-only">Vote down</span>
                    </button>
                  </div>
                  <div class="comment-info">
                    <a href="#" class="comment-author">randomperson81</a>
                    <p class="m-0">
                      4 points &bull; 3 days ago
                    </p>
                  </div>
                </div>
              </summary>

              <div class="comment-body">
                <p>
                  Took the words right out of my mouth!
                </p>
                <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Reply</button>
                <button type="button">Flag</button>

                <!-- Reply form start -->
                <form method="POST" class="reply-form d-none" id="comment-2-reply-form">
                  <textarea placeholder="Reply to comment" rows="4"></textarea>
                  <button type="submit">Submit</button>
                  <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Cancel</button>
                </form>
                <!-- Reply form end -->
              </div>
            </details>
            <!-- Comment 2 end -->


          </div>
        </details>

      </div>
    </details>
    <details open class="comment">
      <a href="#comment-2" class="comment-border-link">
        <span class="sr-only">Jump to comment-2</span>
      </a>
      <summary>
        <div class="comment-heading">
          <div class="comment-voting">
            <button type="button">
              <span aria-hidden="true">&#9650;</span>
              <span class="sr-only">Vote up</span>
            </button>
            <button type="button">
              <span aria-hidden="true">&#9660;</span>
              <span class="sr-only">Vote down</span>
            </button>
          </div>
          <div class="comment-info">
            <a href="#" class="comment-author">randomperson81</a>
            <p class="m-0">
              4 points &bull; 3 days ago
            </p>
          </div>
        </div>
      </summary>

      <div class="comment-body">
        <p>
          Took the words right out of my mouth!
        </p>
        <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Reply</button>
        <button type="button">Flag</button>

        <!-- Reply form start -->
        <form method="POST" class="reply-form d-none" id="comment-2-reply-form">
          <textarea placeholder="Reply to comment" rows="4"></textarea>
          <button type="submit">Submit</button>
          <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Cancel</button>
        </form>
        <!-- Reply form end -->
      </div>

      <!-- Comment 2 end -->
      <div class="replies">
        <!-- Comment 2 start -->
        <details open class="comment">
          <a href="#comment-2" class="comment-border-link">
            <span class="sr-only">Jump to comment-2</span>
          </a>
          <summary>
            <div class="comment-heading">
              <div class="comment-voting">
                <button type="button">
                  <span aria-hidden="true">&#9650;</span>
                  <span class="sr-only">Vote up</span>
                </button>
                <button type="button">
                  <span aria-hidden="true">&#9660;</span>
                  <span class="sr-only">Vote down</span>
                </button>
              </div>
              <div class="comment-info">
                <a href="#" class="comment-author">randomperson81</a>
                <p class="m-0">
                  4 points &bull; 3 days ago
                </p>
              </div>
            </div>
          </summary>

          <div class="comment-body">
            <p>
              Took the words right out of my mouth!
            </p>
            <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Reply</button>
            <button type="button">Flag</button>

            <!-- Reply form start -->
            <form method="POST" class="reply-form d-none" id="comment-2-reply-form">
              <textarea placeholder="Reply to comment" rows="4"></textarea>
              <button type="submit">Submit</button>
              <button type="button" data-toggle="reply-form" data-target="comment-2-reply-form">Cancel</button>
            </form>
            <!-- Reply form end -->
          </div>
        </details>
        <!-- Comment 2 end -->


      </div>
    </details>

  </div>
  </details>
  <!-- Comment 1 end -->
  </div>

  <script>
    document.addEventListener(
      "click",
      function(event) {
        var target = event.target;
        var replyForm;
        if (target.matches("[data-toggle='reply-form']")) {
          replyForm = document.getElementById(target.getAttribute("data-target"));
          replyForm.classList.toggle("d-none");
        }
      },
      false
    );
  </script>


  <!-- New items Start -->
  <div class="rn-new-items rn-section-gapTop">
    <div class="container">
      <div class="row mb--30 align-items-center">
        <div class="col-12">
          <h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            Recent View
          </h3>
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

  <!-- New items Start -->
  <div class="rn-new-items rn-section-gapTop">
    <div class="container">
      <div class="row mb--30 align-items-center">
        <div class="col-12">
          <h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            Related Item
          </h3>
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
  <!-- Modal -->
  <div class="rn-popup-modal placebid-modal-wrapper modal fade" id="placebidModal" tabindex="-1" aria-hidden="true">
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
      <i data-feather="x"></i>
    </button>
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Place a bid</h3>
        </div>
        <div class="modal-body">
          <p>You are about to purchase This Product Form Nuron</p>
          <div class="placebid-form-box">
            <h5 class="title">Your bid</h5>
            <div class="bid-content">
              <div class="bid-content-top">
                <div class="bid-content-left">
                  <input id="value" type="text" name="value" />
                  <span>wETH</span>
                </div>
              </div>

              <div class="bid-content-mid">
                <div class="bid-content-left">
                  <span>Your Balance</span>
                  <span>Service fee</span>
                  <span>Total bid amount</span>
                </div>
                <div class="bid-content-right">
                  <span>9578 wETH</span>
                  <span>10 wETH</span>
                  <span>9588 wETH</span>
                </div>
              </div>
            </div>
            <div class="bit-continue-button">
              <a href="connect.html" class="btn btn-primary w-100">Place a bid</a>
              <button type="button" class="btn btn-primary-alta mt--10" data-bs-dismiss="modal">
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
</body>

</html>