<?php
include 'inc/config.inc.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Privacy Policy || OnArt</title>
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

<body class="template-color-1 nft-body-connect" style="text-align: justify;">
    <!-- Start Header -->
    <?php
    echo menu($mongoClient, $googleClient, $config)
    ?>
    <!-- end page title area -->

    <!-- start Privacy area -->
    <div class="rn-privacy-policy-area rn-section-gapTop">
        <div class="container">
            <div class="row mb_dec--50">
                <div class="offset-lg-2 col-lg-8 ">
                    <div class="privacy-wrapper">
                        <h4>Welcome to OnArt Privacy Policy</h4>
                        <p class="about-disc mb--0">
                            OnArt respects your privacy and is fully committed to protect your personal information and use it properly and in compliance with data privacy laws.
                            Policy explains what information we collect and use pertaining to each of our Account holders through the Site, how we use that information, and what choices you have with respect to the information we collect about you.
                            Please take a few moments to read this Privacy Policy before you access or use our Services. By using or accessing the OnArt Site, you acknowledge that you have read and fully understood this Privacy Policy and our Terms of Service and that they both apply to your use of the Services. If you do not read and fully understand this Privacy Policy, please do not use this site.


                        </p>
                        <h4>1-What information do we collect?</h4>
                        <p class="about-disc mb--0">

                            We collect Information in order to provide, operate and improve our Sites and Services, to administer your use of the Site or Services (including your Account), and to enable you to enjoy and easily navigate our Site and Services. Additionally, we collect your information to provide you with ongoing customer assistance and technical support, and to enhance our data security and fraud prevention capabilities.
                        </p>

                        <h4>1.1-Information you provide us.</h4>
                        <p>When you register for our Services and create a OnArt account via the OnArt Sites (an "Account"), when you register for special services, we collect certain information such as your name and email. If you create your Account using your login credentials from a third party site or service, we'll be able to access and collect your name and email but we don't receive or store passwords. </li>

                        <h4>1.2-Information collected through your use of the Site or Services. </h4>
                        <p>When you are visiting or using our Site or Services, including when you browse the Site or a User Account, edit your Account and upload information and content, and/or download and use any Site feature or services, we are aware of it and will usually gather, collect and record such uses, sessions and related information.</p>



                        <h4>2-How do we use such information?</h4>
                        <p>2.1-We use your information for the following purposes: to provide and operate the Services; to enhance our data security and fraud prevention capabilities; To create aggregated statistical data and other aggregated and/or inferred information, which we may use to provide and improve our respective Services;.</li>
                        <p>2.2-We will only use your Information for the purposes set out in Section 2 where you give us your permission and/or we are satisfied that:<br>
                            a. our use of your Information is necessary to the performance of the website, or<br>
                            b. our use of your Information is necessary to comply with a relevant legal or regulatory obligation that we have, or<br>
                            c. our use of your Information is necessary to support legitimate interests that we have as a business (for example, to maintain and improve our Services), provided it is conducted at all times in a way that is proportionate, and that respects your privacy rights<br>
                        </p>

                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- end Privacy area -->

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