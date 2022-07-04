<?php
include 'inc/config.inc.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Explore || OnArt</title>
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
    <header class="rn-header haeder-default header--sticky">
        <div class="container">
            <div class="header-inner">
                <div class="header-left">
                    <div class="logo-thumbnail logo-custom-css">
                        <a class="logo-light" href="index.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/logo/logo-white.png" alt="nft-logo"></a>
                        <a class="logo-dark" href="index.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/logo/logo-dark.png" alt="nft-logo"></a>
                    </div>
                    <div class="mainmenu-wrapper">
                        <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
                            <!-- Start Mainmanu Nav -->
                            <ul class="mainmenu">
                                <li class="has-droupdown has-menu-child-item">
                                    <a href="index.html">Home</a>
                                    <ul class="submenu">
                                        <li><a href="index.html">Home page One <i class="feather-home"></i></a></li>
                                        <li><a href="index-two.html">Home page Two<i class="feather-home"></i></a></li>
                                        <li><a href="index-three.html">Home page Three<i class="feather-home"></i></a></li>
                                        <li><a href="index-four.html">Home page Four<i class="feather-home"></i></a></li>
                                        <li><a href="index-five.html">Home page Five<i class="feather-home"></i></a></li>
                                        <li><a href="index-six.html">Home page Six<i class="feather-home"></i></a></li>
                                        <li><a href="index-seven.html">Home page Seven<i class="feather-home"></i></a></li>
                                        <li><a href="index-eight.html">Home page Eight<i class="feather-home"></i></a></li>
                                        <li><a href="index-nine.html">Home page Nine<i class="feather-home"></i></a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About</a>
                                </li>
                                <li class="has-droupdown has-menu-child-item">
                                    <a href="#">Explore</a>
                                    <ul class="submenu">
                                        <li><a href="explore-one.html">Explore Filter<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-two.html">Explore Isotop<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-three.html">Explore Carousel<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-four.html">Explore Simple<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-five.html">Explore Place Bid<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-six.html">Place Bid With Filter<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-seven.html">Place Bid With Isotop<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-eight.html">Place Bid With Carousel<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-list-style.html">Explore Style List<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="explore-list-column-two.html">Explore List Col-Two<i class="feather-fast-forward"></i></a></li>
                                        <li><a class="live-expo" href="explore-live.html">Live Explore</a></li>
                                        <li><a class="live-expo" href="explore-live-two.html">Live Explore Carousel</a></li>
                                        <li><a class="live-expo" href="explore-live-three.html">Live With Place Bid</a></li>
                                    </ul>
                                </li>
                                <li class="with-megamenu">
                                    <a href="#">Pages</a>
                                    <div class="rn-megamenu">
                                        <div class="wrapper">
                                            <div class="row row--0">
                                                <div class="col-lg-3 single-mega-item">
                                                    <ul class="mega-menu-item">
                                                        <li>
                                                            <a href="create.html">Create NFT<i data-feather="file-plus"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="upload-variants.html">Upload Type<i data-feather="layers"></i></a>
                                                        </li>
                                                        <li><a href="activity.html">Activity<i data-feather="activity"></i></a></li>
                                                        <li>
                                                            <a href="creator.html">Creators<i data-feather="users"></i></a>
                                                        </li>
                                                        <li><a href="collection.html">Our Collection<i data-feather="package"></i></a></li>
                                                        <li><a href="upcoming_projects.html">Upcoming Projects<i data-feather="loader"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-3 single-mega-item">
                                                    <ul class="mega-menu-item">
                                                        <li><a href="login.html">Log In <i data-feather="log-in"></i></a></li>
                                                        <li><a href="sign-up.html">Registration <i data-feather="user-plus"></i></a></li>
                                                        <li><a href="forget.html">Forget Password <i data-feather="key"></i></a></li>
                                                        <li>
                                                            <a href="author.html">Author/Profile(User) <i data-feather="user"></i></a>
                                                        </li>
                                                        <li>
                                                            <a href="connect.html">Connect to Wallet <i data-feather="pocket"></i></a>
                                                        </li>
                                                        <li><a href="privacy-policy.html">Privacy Policy <i data-feather="file-text"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-3 single-mega-item">
                                                    <ul class="mega-menu-item">

                                                        <li><a href="product.html">Product<i data-feather="folder"></i></a></li>
                                                        <li><a href="product-details.html">Product Details <i data-feather="layout"></i></a></li>
                                                        <li><a href="ranking.html">NFT Ranking<i data-feather="trending-up"></i></a></li>
                                                        <li><a href="edit-profile.html">Edit Profile<i data-feather="edit"></i></a></li>
                                                        <li><a href="blog-details.html">Blog Details<i data-feather="book-open"></i></a></li>
                                                        <li><a href="404.html">404 <i data-feather="alert-triangle"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-3 single-mega-item">
                                                    <ul class="mega-menu-item">
                                                        <li><a href="about.html">About Us<i data-feather="award"></i></a></li>
                                                        <li><a href="contact.html">Contact <i data-feather="headphones"></i></a></li>
                                                        <li><a href="support.html">Support/FAQ <i data-feather="help-circle"></i></a></li>
                                                        <li><a href="terms-condition.html">Terms & Condition <i data-feather="list"></i></a></li>
                                                        <li><a href="coming-soon.html">Coming Soon <i data-feather="clock"></i></a></li>
                                                        <li><a href="maintenance.html">Maintenance <i data-feather="cpu"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="has-droupdown has-menu-child-item">
                                    <a class="down" href="blog.html">Blog</a>
                                    <ul class="submenu">
                                        <li><a href="blog-single-col.html">Blog Single Column<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="blog-col-two.html">Blog Two Column<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="blog-col-three.html">Blog Three Column<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="blog.html">Blog Four Column<i class="feather-fast-forward"></i></a></li>
                                        <li><a href="blog-details.html">Blog Details<i class="feather-fast-forward"></i></a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                            <!-- End Mainmanu Nav -->
                        </nav>
                    </div>
                </div>
                <div class="header-right">
                    <div class="setting-option d-none d-lg-block">
                        <form class="search-form-wrapper" action="#">
                            <input type="search" placeholder="Search Here" aria-label="Search">
                            <div class="search-icon">
                                <button><i class="feather-search"></i></button>
                            </div>
                        </form>
                    </div>
                    <div class="setting-option rn-icon-list d-block d-lg-none">
                        <div class="icon-box search-mobile-icon">
                            <button><i class="feather-search"></i></button>
                        </div>
                        <form id="header-search-1" action="#" method="GET" class="large-mobile-blog-search">
                            <div class="rn-search-mobile form-group">
                                <button type="submit" class="search-button"><i class="feather-search"></i></button>
                                <input type="text" placeholder="Search ...">
                            </div>
                        </form>
                    </div>

                    <div class="setting-option header-btn rbt-site-header" id="rbt-site-header">
                        <div class="icon-box">
                            <a id="connectbtn" class="btn btn-primary-alta btn-small" href="connect.html">Wallet connect</a>
                        </div>
                    </div>

                    <div class="setting-option rn-icon-list notification-badge">
                        <div class="icon-box">
                            <a href="activity.html"><i class="feather-bell"></i><span class="badge">6</span></a>
                        </div>
                    </div>

                    <div class="header_admin" id="header_admin">
                        <div class="setting-option rn-icon-list user-account">
                            <div class="icon-box">
                                <a href="author.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/icons/boy-avater.png" alt="Images"></a>
                                <div class="rn-dropdown">
                                    <div class="rn-inner-top">
                                        <h4 class="title"><a href="product-details.html">Christopher William</a></h4>
                                        <span><a href="#">Set Display Name</a></span>
                                    </div>
                                    <div class="rn-product-inner">
                                        <ul class="product-list">
                                            <li class="single-product-list">
                                                <div class="thumbnail">
                                                    <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-07.jpg" alt="Nft Product Images"></a>
                                                </div>
                                                <div class="content">
                                                    <h6 class="title"><a href="product-details.html">Balance</a></h6>
                                                    <span class="price">25 ETH</span>
                                                </div>
                                                <div class="button"></div>
                                            </li>
                                            <li class="single-product-list">
                                                <div class="thumbnail">
                                                    <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-01.jpg" alt="Nft Product Images"></a>
                                                </div>
                                                <div class="content">
                                                    <h6 class="title"><a href="product-details.html">Balance</a></h6>
                                                    <span class="price">25 ETH</span>
                                                </div>
                                                <div class="button"></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="add-fund-button mt--20 pb--20">
                                        <a class="btn btn-primary-alta w-100" href="connect.html">Add Your More Funds</a>
                                    </div>
                                    <ul class="list-inner">
                                        <li><a href="author.html">My Profile</a></li>
                                        <li><a href="edit-profile.html">Edit Profile</a></li>
                                        <li><a href="connect.html">Manage funds</a></li>
                                        <li><a href="login.html">Sign Out</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="setting-option mobile-menu-bar d-block d-xl-none">
                        <div class="hamberger">
                            <button class="hamberger-button">
                                <i class="feather-menu"></i>
                            </button>
                        </div>
                    </div>

                    <div id="my_switcher" class="my_switcher setting-option">
                        <ul>
                            <li>
                                <a href="javascript: void(0);" data-theme="light" class="setColor light">
                                    <img class="sun-image" src="<?php echo $config['urls']['site'] ?>/assets/images/icons/sun-01.svg" alt="Sun images">
                                </a>
                            </li>
                            <li>
                                <a href="javascript: void(0);" data-theme="dark" class="setColor dark">
                                    <img class="Victor Image" src="<?php echo $config['urls']['site'] ?>/assets/images/icons/vector.svg" alt="Vector Images">
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    </header>
    <!-- End Header Area -->

    <div class="popup-mobile-menu">
        <div class="inner">
            <div class="header-top">
                <div class="logo logo-custom-css">
                    <a class="logo-light" href="index.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/logo/logo-white.png" alt="nft-logo"></a>
                    <a class="logo-dark" href="index.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/logo/logo-dark.png" alt="nft-logo"></a>
                </div>
                <div class="close-menu">
                    <button class="close-button">
                        <i class="feather-x"></i>
                    </button>
                </div>
            </div>
            <nav>
                <!-- Start Mainmanu Nav -->
                <ul class="mainmenu">
                    <li class="has-droupdown">
                        <a class="nav-link its_new" href="#">Home</a>
                        <ul class="submenu">
                            <li><a href="index.html">Home page One <i class="feather-home"></i></a></li>
                            <li><a href="index-two.html">Home page Two<i class="feather-home"></i></a></li>
                            <li><a href="index-three.html">Home page Three<i class="feather-home"></i></a></li>
                            <li><a href="index-four.html">Home page Four<i class="feather-home"></i></a></li>
                            <li><a href="index-five.html">Home page Five<i class="feather-home"></i></a></li>
                            <li><a href="index-six.html">Home page Six<i class="feather-home"></i></a></li>
                            <li><a href="index-seven.html">Home page Seven<i class="feather-home"></i></a></li>
                            <li><a href="index-eight.html">Home page Eight<i class="feather-home"></i></a></li>
                            <li><a href="index-nine.html">Home page Nine<i class="feather-home"></i></a></li>
                        </ul>
                    </li>
                    <li><a href="about.html">About</a>
                    </li>
                    <li class="has-droupdown">
                        <a class="nav-link its_new" href="#">Explore</a>
                        <ul class="submenu">
                            <li><a href="explore-one.html">Explore Filter<i class="feather-fast-forward"></i></a></li>
                            <li><a href="explore-two.html">Explore Isotop<i class="feather-fast-forward"></i></a></li>
                            <li><a href="explore-three.html">Explore Carousel<i class="feather-fast-forward"></i></a></li>
                            <li><a href="explore-four.html">Explore Simple<i class="feather-fast-forward"></i></a></li>
                            <li><a href="explore-five.html">Explore Place Bid<i class="feather-fast-forward"></i></a></li>
                            <li><a href="explore-six.html">Place Bid With Filter<i class="feather-fast-forward"></i></a></li>
                            <li><a href="explore-seven.html">Place Bid With Isotop<i class="feather-fast-forward"></i></a></li>
                            <li><a href="explore-eight.html">Place Bid With Carousel<i class="feather-fast-forward"></i></a></li>
                            <li><a href="explore-list-style.html">Explore List Style<i class="feather-fast-forward"></i></a></li>
                            <li><a href="explore-list-column-two.html">Explore List Col-Two<i class="feather-fast-forward"></i></a></li>
                            <li><a class="live-expo" href="explore-live.html">Live Explore</a></li>
                            <li><a class="live-expo" href="explore-live-two.html">Live Explore Carousel</a></li>
                            <li><a class="live-expo" href="explore-live-three.html">Live With Place Bid</a></li>
                        </ul>
                    </li>
                    <li class="with-megamenu">
                        <a class="nav-link its_new" href="#">Pages</a>
                        <div class="rn-megamenu">
                            <div class="wrapper">
                                <div class="row row--0">
                                    <div class="col-lg-3 single-mega-item">
                                        <ul class="mega-menu-item">
                                            <li>
                                                <a href="create.html">Create NFT<i data-feather="file-plus"></i></a>
                                            </li>
                                            <li>
                                                <a href="upload-variants.html">Upload Type<i data-feather="layers"></i></a>
                                            </li>
                                            <li><a href="activity.html">Activity<i data-feather="activity"></i></a></li>
                                            <li>
                                                <a href="creator.html">Creators<i data-feather="users"></i></a>
                                            </li>
                                            <li><a href="collection.html">Our Collection<i data-feather="package"></i></a></li>
                                            <li><a href="upcoming_projects.html">Upcoming Projects<i data-feather="loader"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3 single-mega-item">
                                        <ul class="mega-menu-item">
                                            <li><a href="login.html">Log In <i data-feather="log-in"></i></a></li>
                                            <li><a href="sign-up.html">Registration <i data-feather="user-plus"></i></a></li>
                                            <li><a href="forget.html">Forget Password <i data-feather="key"></i></a></li>
                                            <li>
                                                <a href="author.html">Author/Profile(User) <i data-feather="user"></i></a>
                                            </li>
                                            <li>
                                                <a href="connect.html">Connect to Wallet <i data-feather="pocket"></i></a>
                                            </li>
                                            <li><a href="privacy-policy.html">Privacy Policy <i data-feather="file-text"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3 single-mega-item">
                                        <ul class="mega-menu-item">

                                            <li><a href="product.html">Product<i data-feather="folder"></i></a></li>
                                            <li><a href="product-details.html">Product Details <i data-feather="layout"></i></a></li>
                                            <li><a href="ranking.html">NFT Ranking<i data-feather="trending-up"></i></a></li>
                                            <li><a href="blog.html">Our News <i data-feather="message-square"></i></a></li>
                                            <li><a href="blog-details.html">Blog Details<i data-feather="book-open"></i></a></li>
                                            <li><a href="404.html">404 <i data-feather="alert-triangle"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-3 single-mega-item">
                                        <ul class="mega-menu-item">
                                            <li><a href="about.html">About Us<i data-feather="award"></i></a></li>
                                            <li><a href="contact.html">Contact <i data-feather="headphones"></i></a></li>
                                            <li><a href="support.html">Support/FAQ <i data-feather="help-circle"></i></a></li>
                                            <li><a href="terms-condition.html">Terms & Condition <i data-feather="list"></i></a></li>
                                            <li><a href="coming-soon.html">Coming Soon <i data-feather="clock"></i></a></li>
                                            <li><a href="maintenance.html">Maintenance <i data-feather="cpu"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="has-droupdown has-menu-child-item">
                        <a class="nav-link its_new" href="blog.html">Blog</a>
                        <ul class="submenu">
                            <li><a href="blog-single-col.html">Blog Single Column<i class="feather-fast-forward"></i></a></li>
                            <li><a href="blog-col-two.html">Blog Two Column<i class="feather-fast-forward"></i></a></li>
                            <li><a href="blog-col-three.html">Blog Three Column<i class="feather-fast-forward"></i></a></li>
                            <li><a href="blog.html">Blog Four Column<i class="feather-fast-forward"></i></a></li>
                            <li><a href="blog-details.html">Blog Details<i class="feather-fast-forward"></i></a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <!-- End Mainmanu Nav -->
            </nav>
        </div>
    </div>
    <!-- start page title area -->
    <div class="rn-breadcrumb-inner ptb--30">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6 col-12">
                    <h5 class="title text-center text-md-start">Explore Filter</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-list">
                        <li class="item"><a href="index.html">Home</a></li>
                        <li class="separator"><i class="feather-chevron-right"></i></li>
                        <li class="item current">Explore With Filter</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end page title area -->

    <div class="en-product-area rn-section-gap">
        <div class="container">
            <div class="row mb--30">
                <div class="col-12">
                    <h3 class="title">Explore Carousel With Arrow</h3>
                </div>
            </div>
            <div class="row">
                <div class="banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15">
                    <!-- start single product -->
                    <div class="single-slide-product">
                        <div class="product-style-one no-overlay">
                            <div class="card-thumbnail">
                                <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-01.jpg" alt="NFT_portfolio"></a>
                            </div>
                            <div class="product-share-wrapper">
                                <div class="profile-share">
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile"></a>
                                    <a class="more-author-text" href="#">9+ Place Bit.</a>
                                </div>
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
                        <div class="product-style-one no-overlay">
                            <div class="card-thumbnail">
                                <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-02.jpg" alt="NFT_portfolio"></a>
                            </div>
                            <div class="product-share-wrapper">
                                <div class="profile-share">
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile"></a>
                                    <a class="more-author-text" href="#">10+ Place Bit.</a>
                                </div>
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
                        <div class="product-style-one no-overlay">
                            <div class="card-thumbnail">
                                <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-03.jpg" alt="NFT_portfolio"></a>
                            </div>
                            <div class="product-share-wrapper">
                                <div class="profile-share">
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile"></a>

                                    <a class="more-author-text" href="#">8+ Place Bit.</a>
                                </div>
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
                        <div class="product-style-one no-overlay">
                            <div class="card-thumbnail">
                                <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio"></a>
                            </div>
                            <div class="product-share-wrapper">
                                <div class="profile-share">
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile"></a>
                                    <a class="more-author-text" href="#">15+ Place Bit.</a>
                                </div>
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
                        <div class="product-style-one no-overlay">
                            <div class="card-thumbnail">
                                <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio"></a>
                            </div>
                            <div class="product-share-wrapper">
                                <div class="profile-share">
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile"></a>
                                    <a class="more-author-text" href="#">25+ Place Bit.</a>
                                </div>
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
                        <div class="product-style-one no-overlay">
                            <div class="card-thumbnail">
                                <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio"></a>
                            </div>
                            <div class="product-share-wrapper">
                                <div class="profile-share">
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="John Due"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-7.png" alt="Nft_Profile"></a>
                                    <a class="more-author-text" href="#">3+ Place Bit.</a>
                                </div>
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
                        <!-- end single product -->
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- Start product area -->
    <div class="rn-product-area rn-section-gapTop">
        <div class="container">
            <div class="row mb--50 align-items-center">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Explore Product</h3>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                    <div class="view-more-btn text-start text-sm-end" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <button class="discover-filter-button discover-filter-activation btn btn-primary">Filter<i class="feather-filter"></i></button>
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
                                            <span>Price :</span><input type="text" id="amount" readonly>
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
                            <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-01.jpg" alt="NFT_portfolio"></a>
                        </div>
                        <div class="product-share-wrapper">
                            <div class="profile-share">
                                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile"></a>
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
                            <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-02.jpg" alt="NFT_portfolio"></a>
                        </div>
                        <div class="product-share-wrapper">
                            <div class="profile-share">
                                <a href="author.html" class="avatar" data-tooltip="mr. Davei"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-4.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Mrs.Laumi"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-5.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Shanon"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile"></a>
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
                            <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-03.jpg" alt="NFT_portfolio"></a>
                        </div>
                        <div class="product-share-wrapper">
                            <div class="profile-share">
                                <a href="author.html" class="avatar" data-tooltip="mr. Jone"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-7.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Laumi"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Tom"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile"></a>
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
                            <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-04.jpg" alt="NFT_portfolio"></a>
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
                                <a href="author.html" class="avatar" data-tooltip="mr. Davei"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Mrs.Laumi"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Shanon"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-11.png" alt="Nft_Profile"></a>
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
                            <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio"></a>
                        </div>
                        <div class="product-share-wrapper">
                            <div class="profile-share">
                                <a href="author.html" class="avatar" data-tooltip="Terasa"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Sakib"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-7.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Miraj"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-3.png" alt="Nft_Profile"></a>
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
                            <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-06.jpg" alt="NFT_portfolio"></a>

                        </div>
                        <div class="product-share-wrapper">
                            <div class="profile-share">
                                <a href="author.html" class="avatar" data-tooltip="Moris"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Jsufia"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Mordan"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-2.png" alt="Nft_Profile"></a>
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
                            <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-07.jpg" alt="NFT_portfolio"></a>
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
                                <a href="author.html" class="avatar" data-tooltip="Thinm"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Jubin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Nautial"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile"></a>
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
                            <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-10.jpg" alt="NFT_portfolio"></a>
                        </div>
                        <div class="product-share-wrapper">
                            <div class="profile-share">
                                <a href="author.html" class="avatar" data-tooltip="Tabriz"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Juskin"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Money"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-9.png" alt="Nft_Profile"></a>
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
                            <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-09.jpg" alt="NFT_portfolio"></a>
                        </div>
                        <div class="product-share-wrapper">
                            <div class="profile-share">
                                <a href="author.html" class="avatar" data-tooltip="Morokko"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-6.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Levnon"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Trim sawdi"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-10.png" alt="Nft_Profile"></a>
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
                            <a href="product-details.html"><img src="<?php echo $config['urls']['site'] ?>/assets/images/portfolio/portfolio-11.jpg" alt="NFT_portfolio"></a>
                        </div>
                        <div class="product-share-wrapper">
                            <div class="profile-share">
                                <a href="author.html" class="avatar" data-tooltip="Mark David"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-1.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Sunil Satti"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-8.png" alt="Nft_Profile"></a>
                                <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="<?php echo $config['urls']['site'] ?>/assets/images/client/client-7.png" alt="Nft_Profile"></a>
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
                <div class="row">
                    <div class="col-lg-6">
                        <div class="view-more-btn mt--50">
                            <a class="btn btn-primary-alta btn-large w-100" href="#">View More Items</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="view-more-btn mt--50">
                            <a class="btn btn-primary-alta btn-large w-100" href="#">View More Items</a>
                        </div>
                    </div>
                </div>
                <!-- end single product -->
            </div>
        </div>
    </div>
    <!-- end product area -->
    <!-- Modal -->
    <div class="rn-popup-modal share-modal-wrapper modal fade" id="shareModal" tabindex="-1" aria-hidden="true">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content share-wrapper">
                <div class="modal-header share-area">
                    <h5 class="modal-title">Share this NFT</h5>
                </div>
                <div class="modal-body">
                    <ul class="social-share-default">
                        <li><a href="#"><span class="icon"><i data-feather="facebook"></i></span><span class="text">facebook</span></a></li>
                        <li><a href="#"><span class="icon"><i data-feather="twitter"></i></span><span class="text">twitter</span></a></li>
                        <li><a href="#"><span class="icon"><i data-feather="linkedin"></i></span><span class="text">linkedin</span></a></li>
                        <li><a href="#"><span class="icon"><i data-feather="instagram"></i></span><span class="text">instagram</span></a></li>
                        <li><a href="#"><span class="icon"><i data-feather="youtube"></i></span><span class="text">youtube</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="rn-popup-modal report-modal-wrapper modal fade" id="reportModal" tabindex="-1" aria-hidden="true">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content report-content-wrapper">
                <div class="modal-header report-modal-header">
                    <h5 class="modal-title">Why are you reporting?
                    </h5>
                </div>
                <div class="modal-body">
                    <p>Describe why you think this item should be removed from marketplace</p>
                    <div class="report-form-box">
                        <h6 class="title">Message</h6>
                        <textarea name="message" placeholder="Write issues"></textarea>
                        <div class="report-button">
                            <button type="button" class="btn btn-primary mr--10 w-auto">Report</button>
                            <button type="button" class="btn btn-primary-alta w-auto" data-bs-dismiss="modal">Cancel</button>
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

</html>