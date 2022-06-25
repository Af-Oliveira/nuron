<?php
include 'inc/config.inc.php';
?>

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Upload Variants || Nuron - NFT Marketplace Template</title>
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="theme-style-mode" content="1"> <!-- 0 == light, 1 == dark -->

    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="<?= $config['urls']['site'] ?>/assets/images/favicon.png">
    <!-- CSS 
    ============================================ -->
    <link rel="stylesheet" href="<?= $config['urls']['site'] ?>/assets/css/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="<?= $config['urls']['site'] ?>/assets/css/vendor/slick.css">
    <link rel="stylesheet" href="<?= $config['urls']['site'] ?>/assets/css/vendor/slick-theme.css">
    <link rel="stylesheet" href="<?= $config['urls']['site'] ?>/assets/css/vendor/nice-select.css">
    <link rel="stylesheet" href="<?= $config['urls']['site'] ?>/assets/css/plugins/feature.css">
    <link rel="stylesheet" href="<?= $config['urls']['site'] ?>/assets/css/plugins/jquery-ui.min.css">
    <link rel="stylesheet" href="<?= $config['urls']['site'] ?>/assets/css/vendor/odometer.css">

    <!-- Style css -->
    <link rel="stylesheet" href="<?= $config['urls']['site'] ?>/assets/css/style.css">
</head>

<body class="template-color-1 nft-body-connect">
    <!-- Start Header -->
    <?php
    echo menu($mongoClient, $googleClient, $config)
    ?>


    <!-- Upload variants style start -->
    <div class="rn-upload-variant-area varient rn-section-gap">
        <div class="container">
            <div class="row">
                <div class="upload-variant-title-wrapper">
                    <h3 class="title text-center">
                        Time to Upload Your Creativity
                    </h3>
                    <p class="text-center s20">Create Your own art and upload it here, you can chosse between uploading a single image or create your collection of art. </p>
                </div>
            </div>
            <div class="row g-5 mt--40">
                <div class="offset-lg-3 col-lg-3 col-md-6 col-12">
                    <div class="upload-variant-wrapper">
                        <div class="variant-preview">
                            <img src="<?= $config['urls']['site'] ?>/assets/images/upload-variants/single.jpg" alt="nuron-single">
                        </div>
                        <a href="<?= getUrlFriendly('create_item.php?model=itens', $config, $mongoClient) ?>" class="btn btn-primary mt--20">Create Single</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-12">
                    <div class="upload-variant-wrapper">
                        <div class="variant-preview">
                            <img src="<?= $config['urls']['site'] ?>/assets/images/upload-variants/multiple.jpg" alt="nuron-single">
                        </div>
                        <a href="<?= getUrlFriendly('create_item.php?model=collections', $config, $mongoClient) ?>" class="btn btn-primary mt--20">Create Collection</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Upload variants style End -->


    <!-- Start Footer Area -->
    <?php
    echo footer($mongoClient, $config);
    ?>
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
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/jquery.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/jquery.nice-select.min.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/jquery-ui.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/modernizer.min.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/feather.min.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/slick.min.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/bootstrap.min.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/sal.min.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/particles.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/jquery.style.swicher.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/js.cookie.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/count-down.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/isotop.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/imageloaded.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/backtoTop.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/odometer.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/jquery-appear.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/scrolltrigger.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/jquery.custom-file-input.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/savePopup.js"></script>

    <!-- main JS -->
    <script src="<?= $config['urls']['site'] ?>/assets/js/main.js"></script>
    <!-- Meta Mask  -->
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/web3.min.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/maralis.js"></script>
    <script src="<?= $config['urls']['site'] ?>/assets/js/vendor/nft.js"></script>
</body>

</html>