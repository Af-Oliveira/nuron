<?php
include 'inc/config.inc.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>About || OnArt</title>
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

    <!-- Start Header -->
    <?php
    echo menu($mongoClient, $googleClient, $config);
    ?>

    <!-- About banner area -->
    <div class="rn-about-banner-area rn-section-gapTop">
        <div class="container mb--30">
            <div class="row">
                <div class="col-12">
                    <h2 class="title about-title-m" data-sal="slide-up" data-sal-duration="800" data-sal-delay="150">About us <br>Bleed and Breed Art</h2>
                </div>
            </div>
        </div>
        <div class="container-fluid about-fluidimg ">
            <div class="row">
                <div class="img-wrapper">
                    <div class="bg_image--22 bg_image">

                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="margin-top: -200px;">
            <div class="row g-12">
                <div class="col-lg-6">
                    <div class="rn-about-card ">
                        <div class="inner">
                            <h3 class="title" data-sal="slide-up" data-sal-duration="800" data-sal-delay="150">
                                Who are we?
                            </h3>
                            <p class="about-disc mb--0" data-sal="slide-up" data-sal-duration="800" data-sal-delay="150">
                                We are where art starts, but that's only the beginning. We are the movement for the liberation of creative expression. We believe that art is for everyone, and we're creating the cultural context for how it is created, discovered, and shared.
                                Founded in December 2021, OnArt is a online social network for artists and art enthusiasts, and a platform for emerging and established artists to exhibit, promote, and share their works with an enthusiastic, art-centric community.
                                Our members upload original pieces of art every day, everything from painting and sculpture to digital art, pixel art, films, and anime.

                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="rn-about-card " style="padding-top: 45px;">
                        <div class="inner">
                            <h3 class="title" data-sal="slide-up" data-sal-duration="800" data-sal-delay="150">
                                What we do?
                            </h3>
                            <p class="about-disc mb--0" data-sal="slide-up" data-sal-duration="800" data-sal-delay="150">
                                Artists love us because we are an inclusive and supportive community. We help them find their identity through self-expression. We provide the tools, resources, and exposure to enable them to become better, more successful artists.
                                We inspire people to create art by feeding their creativity. We can't help it, runs through our veins and compels us to nurture it in others. This is OnArt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <!-- About banner area End -->



    <!-- rn stastic area -->
    <div class="rn-statistick-area rn-section-gapTop">
        <div class="container">
            <div class="row mb--30">
                <div class="col-12 text-center">
                    <h3>OnArt Statistics</h3>
                </div>
            </div>
            <div class="row g-5">


                <?php
                $filter =  ['active' => 1];
                $mongoCollection = $mongoClient->users;
                $resMongoQueryuser = $mongoCollection->find(
                    $filter
                );
                $user = $resMongoQueryuser->ToArray();

                $mongoCollection = $mongoClient->itens;
                $resMongoQueryitens = $mongoCollection->find();
                $itens = $resMongoQueryitens->ToArray();



                $mongoCollection = $mongoClient->collections;
                $resMongoQuerycollections = $mongoCollection->find();
                $collections = $resMongoQuerycollections->toArray();

                ?>

                <div class="offset-lg-2 col-lg-4 col-md-6">
                    <div class="single-counter-up text-center">
                        <h3 class="counter"><span class="odometer" data-count="<?= count($itens) ?>">00</span>
                        </h3>
                        <div class="botton-title">OnArt All Arts</div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-counter-up text-center">
                        <h3 class="counter"><span class="odometer" data-count="<?= count($collections) ?>">00</span>
                        </h3>
                        <div class="botton-title">OnArt All Collections</div>
                    </div>
                </div>

                <div class="offset-lg-2 col-lg-8 col-md-12">
                    <div class="single-counter-up text-center">
                        <h3 class="counter"><span class="odometer" data-count="<?= count($user) ?>">00</span>
                        </h3>
                        <div class="botton-title">OnArt All Creators</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- rn stastic area -->

    <!-- call to action area -->
    <div class="rn-callto-action rn-section-gapTop">
        <div class="container-fluid about-fluidimg-cta">
            <div class="row">
                <div class="col-lg-12">
                    <div class="bg_image--6 bg_image bg-image-border" data-black-overlay="7">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="call-to-action-wrapper">
                                    <h3 data-sal="slide-up" data-sal-duration="800" data-sal-delay="150">Discover
                                        Collect, Discover Digital Art <br>
                                        and Explore Your favourite artists.</h3>
                                    <p data-sal="slide-up" data-sal-duration="800" data-sal-delay="150"> Discover a digital world where you can view art pieces and collections from other artists.
                                        At OnArt we inspire people to create art by nurturing their creativity.
                                        We can't help it - it runs through our veins.</p>
                                    <div class="callto-action-btn-wrapper" data-sal="slide-up" data-sal-duration="800" data-sal-delay="150">

                                        <?php
                                        if ($_SESSION['uId'] == -1) {
                                            echo ' <a class="btn btn-large btn-primary" href="' . $googleClient->createAuthUrl() . '" data-sal-delay="400" data-sal="slide-up" data-sal-duration="800">Create</a>';
                                        } else {
                                            echo ' <a class="btn btn-large btn-primary" href="' . getUrlFriendly('upload-variants.php', $config, $mongoClient) . '" data-sal-delay="400" data-sal="slide-up" data-sal-duration="800">Create</a>';
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
    </div>
    <!-- call to action area End -->


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