<?php
include 'inc/config.inc.php';

$filter =  ['id' => $_SESSION['uId']];

$mongoCollection = $mongoClient->users;

$user = $mongoCollection->findOne(
  $filter,
);
?>
<!DOCTYPE php>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Edit Profile || Nuron - NFT Marketplace Template</title>
  <meta name="robots" content="noindex, follow" />
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <meta name="theme-style-mode" content="1"> <!-- 0 == light, 1 == dark -->

  <!-- Favicon -->
  <link rel="shortcut icon" type="image/x-icon" href="<?php echo $config['dirs']['site'] ?>/assets/images/favicon.png">
  <!-- CSS 
    ============================================ -->
  <link rel="stylesheet" href="<?php echo $config['dirs']['site'] ?>/assets/css/vendor/bootstrap.min.css">
  <link rel="stylesheet" href="<?php echo $config['dirs']['site'] ?>/assets/css/vendor/slick.css">
  <link rel="stylesheet" href="<?php echo $config['dirs']['site'] ?>/assets/css/vendor/slick-theme.css">
  <link rel="stylesheet" href="<?php echo $config['dirs']['site'] ?>/assets/css/vendor/nice-select.css">
  <link rel="stylesheet" href="<?php echo $config['dirs']['site'] ?>/assets/css/plugins/feature.css">
  <link rel="stylesheet" href="<?php echo $config['dirs']['site'] ?>/assets/css/plugins/jquery-ui.min.css">
  <link rel="stylesheet" href="<?php echo $config['dirs']['site'] ?>/assets/css/vendor/odometer.css">

  <!-- Style css -->
  <link rel="stylesheet" href="<?php echo $config['dirs']['site'] ?>/assets/css/style.css">
</head>

<body class="template-color-1 nft-body-connect">
  <span id="iduser" style="display: none;"><?= $_SESSION['uId'] ?></span>
  <!-- Start Header -->
  <?php
  echo menu($mongoClient, $googleClient, $config)
  ?>
  <!-- end page title area -->


  <!-- Start tabs area -->
  <div class="edit-profile-area rn-section-gapTop">
    <div class="container">
      <div class="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
        <div class="col-12 d-flex justify-content-between mb--30 align-items-center">
          <h4 class="title-left">Edit Your Profile</h4>
          <a href="author.html" class="btn btn-primary ml--10"><i class="feather-eye mr--5"></i> Preview</a>
        </div>
      </div>
      <div class="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
        <div class="col-lg-3 col-md-3 col-sm-12">
          <!-- Start tabs area -->
          <nav class="left-nav rbt-sticky-top-adjust-five">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" onclick="mudarheader('submitEPI')" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i class="feather-edit"></i>Edit Profile Image</button>
              <button class="nav-link" id="nav-home-tabs" onclick="mudarheader('submitPI')" data-bs-toggle="tab" data-bs-target="#nav-homes" type="button" role="tab" aria-controls="nav-homes" aria-selected="false"><i class="feather-user"></i>Personal Information</button>
              <button class="nav-link" id="nav-contact-tab" onclick="mudarheader('submitNS')" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"><i class="feather-bell"></i>Notification Setting</button>
              <script>
                window.history.replaceState("", "", "?idforms=submitEPI");

                function mudarheader(idforms) {

                  window.history.replaceState("", "", "?idforms=" + idforms);
                }
              </script>
            </div>
          </nav>
          <!-- End tabs area -->
        </div>
        <div class="col-lg-9 col-md-9 col-sm-12 mt_sm--30">

          <div class="tab-content tab-content-edit-wrapepr" id="nav-tabContent">


            <!-- sigle tab content -->
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <!-- start personal information -->
              <form method="post" id="submitEPI" name="forms">
                <!-- start personal information -->
                <div class="nuron-information">

                  <div class="profile-change row g-5">
                    <div class="profile-left col-lg-4">
                      <div class="profile-image mb--30">
                        <h6 class="title" style="font-size:15px">Change Your Profile Picture</h6>

                        <?php


                        if ($user['avatar'] != "") {
                          echo ' <img id="rbtinput1" src="upload/profiles/' . $_SESSION['uId'] . '/avatars/' . $user['avatar'] . '" alt="Profile-NFT" />';
                        } else {
                          echo ' <img id="rbtinput1" src="' . $config['dirs']['site'] . '/assets/images/slider/banner-06.png" />';
                        }

                        ?>
                      </div>
                      <div class="button-area">
                        <div class="brows-file-wrapper">
                          <!-- actual upload which is hidden -->
                          <input name="fatima" id="fatima" type="file">
                          <!-- our custom upload button -->

                        </div>
                        <!-- <a href="#" class="btn-primary-alta btn" onclick="customAlert.alert('Confirm to Delete Your Profile Picture?')">Delete</a> -->
                      </div>
                    </div>

                    <div class="profile-left right col-lg-8">
                      <div class="profile-image mb--30">
                        <h6 class="title" style="font-size:15px">Change Your Cover Photo</h6>
                        <?php
                        if ($user['banner'] != "") {
                          echo ' <img id="rbtinput2" src="upload/profiles/' . $_SESSION['uId'] . '/banners/' . $user['banner'] . '" alt="Profile-NFT" />';
                        } else {
                          echo ' <img id="rbtinput2" src="' . $config['dirs']['site'] . '/assets/images/bg/bg-image-9.jpg"/>';
                        }
                        ?>
                      </div>
                      <div class="button-area">
                        <div class="brows-file-wrapper">
                          <!-- actual upload which is hidden -->
                          <input name="nipa" id="nipa" type="file">
                          <!-- our custom upload button -->

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <!-- End personal information -->

            <!-- sigle tab content -->
            <div class="tab-pane fade" id="nav-homes" role="tabpanel" aria-labelledby="nav-home-tab">
              <!-- start personal information -->
              <form method="post" id="submitPI" name="forms">
                <div class="nuron-information">

                  <div class="profile-form-wrapper">

                    <div class="input-two-wrapper mb--15">
                      <div class="first-name half-wid">

                        <label for="contact-name" class="form-label">First Name</label>
                        <input name="usernameF" id="contact-name" type="text" value="<?= $user['usernameF'] ?>">
                      </div>

                      <div class=" last-name half-wid">
                        <label for="contact-name-last" class="form-label">Last Name</label>
                        <input name="usernameL" id="contact-name-last" type="text" value="<?= $user['usernameL'] ?>">
                      </div>
                    </div>
                  </div>


                  <!-- edit bio area Start-->
                  <div class="edit-bio-area mt--30">
                    <label for="Discription" class="form-label">Edit Your Bio</label>
                    <textarea id="Discription" name="biography"><?= $user['biography'] ?></textarea>
                  </div>
                  <!-- edit bio area End -->

                  <!--  -->
                  <div class="input-two-wrapepr-prifile">
                    <!-- start Role area -->
                    <div class="role-area mt--15">
                      <label for="Role" class="form-label mb--10">Your Role</label>
                      <input name="role" id="Role" type="text" value="<?= $user['role'] ?>">
                    </div>
                    <!-- End Role area -->
                    <!-- select gender -->
                    <select class="profile-edit-select" name="gender">
                      <?php
                      $genders = array(
                        'Private' => 'Private',
                        'Male' => 'Male',
                        'Female' => 'Female',
                        'Third Gender' => 'Third Gender'
                      );

                      echo '<option selected>' . $genders[$user['gender']] . '</option>';
                      foreach ($genders as $key => $value) {
                        if ($genders[$user['gender']] != $value) {
                          echo ' <option value="' . $key . '">' . $value . '</option>';
                        }
                      }
                      ?>

                    </select>
                    <!-- end gender -->
                  </div>
                </div>
                <!-- End personal information -->
              </form>
            </div>
            <!-- End single tabv content -->

            <div class="tab-pane fade " id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              <!-- start Notification Setting  -->
              <div class="nuron-information">
                <h5 class="title">Make Sure Your Notification setting </h5>
                <p class="notice-disc">
                  Notification Center is where you can find app notifications and Quick Settings—which
                  give you quick access to commonly used settings and apps. You can change your
                  notification settings at any time from the Settings app. Select Start , then select
                  Settings
                </p>
                <hr />
                <!-- start notice wrapper parrent -->
                <div class="notice-parent-wrapper d-flex">
                  <div class="notice-child-wrapper">
                    <!-- single notice wrapper -->
                    <div class="single-notice-setting">
                      <div class="input">
                        <input type="checkbox" id="themeSwitch" name="theme-switch" class="theme-switch__input" />
                        <label for="themeSwitch" class="theme-switch__label">
                          <span></span>
                        </label>
                      </div>
                      <div class="content-text">
                        <p>Order Confirmation Notice</p>
                      </div>
                    </div>
                    <!-- single notice wrapper End -->

                    <!-- single notice wrapper -->
                    <div class="single-notice-setting mt--15">
                      <div class="input">
                        <input type="checkbox" id="themeSwitchs" name="theme-switch" class="theme-switch__input" />
                        <label for="themeSwitchs" class="theme-switch__label">
                          <span></span>
                        </label>
                      </div>
                      <div class="content-text">
                        <p>New Items Notification</p>
                      </div>
                    </div>
                    <!-- single notice wrapper End -->

                    <!-- single notice wrapper -->
                    <div class="single-notice-setting mt--15">
                      <div class="input">
                        <input type="checkbox" id="OrderNotice" name="theme-switch" class="theme-switch__input" />
                        <label for="OrderNotice" class="theme-switch__label">
                          <span></span>
                        </label>
                      </div>
                      <div class="content-text">
                        <p>New Bid Notification</p>
                      </div>
                    </div>
                    <!-- single notice wrapper End -->

                    <!-- single notice wrapper -->
                    <div class="single-notice-setting mt--15">
                      <div class="input">
                        <input type="checkbox" id="newPAy" name="theme-switch" class="theme-switch__input" />
                        <label for="newPAy" class="theme-switch__label">
                          <span></span>
                        </label>
                      </div>
                      <div class="content-text">
                        <p>Payment Card Notification</p>
                      </div>
                    </div>
                    <!-- single notice wrapper End -->

                    <!-- single notice wrapper -->
                    <div class="single-notice-setting mt--15">
                      <div class="input">
                        <input type="checkbox" id="EndBid" name="theme-switch" class="theme-switch__input" />
                        <label for="EndBid" class="theme-switch__label">
                          <span></span>
                        </label>
                      </div>
                      <div class="content-text">
                        <p>Ending Bid Notification Before 5 min</p>
                      </div>
                    </div>
                    <!-- single notice wrapper End -->

                    <!-- single notice wrapper -->
                    <div class="single-notice-setting mt--15">
                      <div class="input">
                        <input type="checkbox" id="Approve" name="theme-switch" class="theme-switch__input" />
                        <label for="Approve" class="theme-switch__label">
                          <span></span>
                        </label>
                      </div>
                      <div class="content-text">
                        <p>Notification for approving product</p>
                      </div>
                    </div>
                    <!-- single notice wrapper End -->
                  </div>



                  <div class="notice-child-wrapper">
                  </div>
                </div>
                <!-- end notice wrapper parrent -->
                <a href="#" class="btn btn-primary save-btn-edit" onclick="customAlert.alert('Successfully saved Your Notificationm setting')">Save</a>
              </div>
              <!-- End Notification Setting  -->


            </div>
            <div class="col-12 d-flex justify-content-left mb--30 align-items-left">
              <a class="btn btn-primary save-btn-edit" onclick="sendF()">Submit your profile</a>

              <script>
                function sendF() {
                  const params = new Proxy(new URLSearchParams(window.location.search), {
                    get: (searchParams, prop) => searchParams.get(prop)
                  })
                  const formId = params.idforms;
                  $('#' + formId).submit();

                }
              </script>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  <!-- End tabs area -->


  <!-- Start Footer Area -->
  <div class="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
    <div class="container">
      <div class="row gx-5">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="widget-content-wrapper">
            <div class="footer-left">
              <div class="logo-thumbnail logo-custom-css">
                <a class="logo-light" href="index.html"><img src="<?php echo $config['dirs']['site'] ?>/assets/images/logo/logo-white.png" alt="nft-logo"></a>
                <a class="logo-dark" href="index.html"><img src="<?php echo $config['dirs']['site'] ?>/assets/images/logo/logo-dark.png" alt="nft-logo"></a>
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
                    <img src="<?php echo $config['dirs']['site'] ?>/assets/images/portfolio/portfolio-01.jpg" alt="Product Images">
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
                    <img src="<?php echo $config['dirs']['site'] ?>/assets/images/portfolio/portfolio-02.jpg" alt="Product Images">
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
                    <img src="<?php echo $config['dirs']['site'] ?>/assets/images/portfolio/portfolio-03.jpg" alt="Product Images">
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
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/jquery.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/jquery.nice-select.min.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/jquery-ui.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/modernizer.min.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/feather.min.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/slick.min.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/bootstrap.min.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/sal.min.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/particles.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/jquery.style.swicher.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/js.cookie.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/count-down.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/isotop.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/imageloaded.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/backtoTop.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/odometer.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/jquery-appear.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/scrolltrigger.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/jquery.custom-file-input.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/savePopup.js"></script>
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

  <!-- main JS -->
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/main.js"></script>
  <!-- Meta Mask  -->
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/web3.min.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/maralis.js"></script>
  <script src="<?php echo $config['dirs']['site'] ?>/assets/js/vendor/nft.js"></script>
</body>

</html>