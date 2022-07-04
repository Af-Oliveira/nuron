<?php
include 'inc/config.inc.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Terms & Condition || OnArt</title>
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
  <!-- End Header Area -->


  <!-- start page title area -->
  <div class="rn-breadcrumb-inner ptb--30">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6 col-12">
          <h5 class="title text-center text-md-start">Terms & Condition</h5>
        </div>
        <div class="col-lg-6 col-md-6 col-12">
          <ul class="breadcrumb-list">
            <li class="item"><a href="index.html">Home</a></li>
            <li class="separator"><i class="feather-chevron-right"></i></li>
            <li class="item current">Terms & Condition</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- end page title area -->
  <div class="terms-condition-area rn-section-gapTop">
    <div class="container">
      <div class="row">
        <div class="offset-lg-2 col-lg-8">
          <div class="condition-wrapper">
            <h2> Terms & Condition of OnArt</h2>
            <p>
              OnArt respects your privacy and is fully committed to protect your personal information and use it properly and in compliance with data privacy laws.Please read these Terms of Service ("Terms") carefully. They contain the legal terms and conditions that govern your use of services provided to you by OnArt.
            </p>
            <p>
              By using creating na account in our website, you agree to these Terms ("General Terms"), which contains provisions applicable to all users of our Service, including visitors to the OnArt website (the "Site").
            </p>
            <h2>1-Copyright</h2>
            <p>
              OnArt is, unless otherwise stated, the owner of all copyright and data rights in the Service and its contents. Individuals who have posted works to OnArt are either the copyright owners of the component parts of that work or are posting the work under license from a copyright owner or his or her agent or otherwise as permitted by law. You may not reproduce, distribute, publicly display or perform, or prepare derivative works based on any of the Content including any such works without the express, written consent of the appropriate owner of copyright in such works. OnArt does not claim ownership rights in your works or other materials posted by you to OnArt (Your Content).
            </p>
            <h2>2-Monitoring Content</h2>
            <p>
              OnArt has no ability to control the Content you may upload, post or otherwise transmit using the Service and does not have any obligation to monitor such Content for any purpose. You acknowledge that you are solely responsible for all Content and material you upload, post or otherwise transmit using the Service.
            </p>
            <h2>3-Conduct</h2>
            <p>
              You agree to be subject to and to conduct yourself in accordance with the OnArt Etiquette Policy.Em you register in our website, you are responsible for all of Your Content you upload, download, and otherwise copy, distribute and display using the Service. You must have the legal right to copy, distribute and display all parts of any content that you upload, download and otherwise copy, distribute and display. Content provided to you by others, or made available through websites, magazines, books and other sources, are protected by copyright and should not be uploaded, downloaded, or otherwise copied, distributed or displayed without the consent of the copyright owner or as otherwise permitted by law
            </p>

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

</html>