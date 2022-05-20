<?php
include 'inc/config.inc.php';
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
                    <h5 class="title text-center text-md-start">Blog Details</h5>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                    <ul class="breadcrumb-list">
                        <li class="item"><a href="index.html">Home</a></li>
                        <li class="separator"><i class="feather-chevron-right"></i></li>
                        <li class="item current">Blog Details</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- end page title area -->

    <!-- blog details area start -->
    <div class="rn-blog-area rn-blog-details-default rn-section-gapTop">
        <div class="container">
            <div class="row g-6">
                <div class="col-xl-8 col-lg-8">
                    <div class="rn-blog-listen">
                        <div class="blog-content-top">
                            <h2 class="title">Digital Marketo to Their New Office.</h2>
                            <span class="date">2 Aug, </span>
                        </div>
                        <div class="bd-thumbnail">
                            <div class="large-img mb--30">
                                <img class="w-100" src="<?php echo $config['urls']['site'] ?>/assets/images/blog/lg/blog-01.jpg" alt="Blog Images">
                            </div>
                        </div>
                        <div class="news-details">

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
                            <h4>Nobis eleifend option conguenes.</h4>
                            <p>Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed
                                posuere
                                massa nunc quis
                                dui.
                                Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa
                                nisi.
                                Curabitur sit
                                amet
                                suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc
                                imperdiet risus
                                leo,
                                in rutrum erat dignissim id.</p>
                            <p>Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis.
                                Class aptent
                                taciti sociosqu
                                ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae
                                nisi
                                tortor. Morbi
                                leo
                                nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit
                                bibendum. Morbi
                                nec
                                efficitur ex.</p>
                            <h4>Mauris tempor, orci id pellentesque.</h4>
                            <p>Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla
                                dapibus dignissim.
                                Pellentesque
                                quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem
                                rhoncus dolor, a
                                facilisis
                                neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa
                                tristique.
                                Nullam in
                                aliquam
                                diam. Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed
                                efficitur
                                sollicitudin
                                auctor.
                                Quisque nec imperdiet purus, in ornare odio. Quisque odio felis, vestibulum
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

                                        <!-- Start Single Comment  -->
                                        <li class="comment parent">
                                            <div class="single-comment">
                                                <div class="comment-author comment-img">
                                                    <img class="comment-avatar" src="<?php echo $config['urls']['site'] ?>/assets/images/blog/comment/comment-01.png" alt="Comment Image">
                                                    <div class="m-b-20">
                                                        <div class="commenter">Craig E. Judge</div>
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
                                                <li class="comment">
                                                    <div class="single-comment">
                                                        <div class="comment-author comment-img">
                                                            <img class="comment-avatar" src="<?php echo $config['urls']['site'] ?>/assets/images/blog/comment/comment-01.png" alt="Comment Image">
                                                            <div class="m-b-20">
                                                                <div class="commenter"><a href="#">Child
                                                                        Comment</a>
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
                                                    <ul class="children">
                                                        <li class="comment">
                                                            <div class="single-comment">
                                                                <div class="comment-author comment-img">
                                                                    <img class="comment-avatar" src="<?php echo $config['urls']['site'] ?>/assets/images/blog/comment/comment-01.png" alt="Comment Image">
                                                                    <div class="m-b-20">
                                                                        <div class="commenter">
                                                                            <a href="#">Child
                                                                                Comment</a>
                                                                        </div>
                                                                        <div class="time-spent"> August
                                                                            20, at 8:44
                                                                            pm</div>
                                                                    </div>
                                                                </div>
                                                                <div class="comment-text">
                                                                    <p>A component that allows for easy
                                                                        creation of menu
                                                                        items,
                                                                        quickly creating paragraphs of
                                                                        “Lorem Ipsum” and
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
                                            </ul>
                                        </li>
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
                                    <div class="row">
                                        <div class="col-lg-6 col-md-12 col-12">
                                            <div class="rnform-group"><input type="text" placeholder="Name"></div>
                                            <div class="rnform-group"><input type="email" placeholder="Email"></div>
                                            <div class="rnform-group"><input type="text" placeholder="Website"></div>
                                        </div>
                                        <div class="col-lg-6 col-md-12 col-12">
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

                        <div class="rbt-single-widget widget_recent_entries mt--40">
                            <h3 class="title">Recent Posts</h3>
                            <div class="inner">
                                <ul>
                                    <li><a class="d-block" href="#">Best Corporate Tips You Will
                                            Read This Year.</a><span class="cate">Development</span></li>
                                    <li><a class="d-block" href="#">Should Fixing Corporate Take
                                            100 Steps.</a><span class="cate">UX Design</span></li>
                                    <li><a class="d-block" href="#">The Next 100 Things To
                                            Immediately Do About.</a><span class="cate">Development</span></li>
                                    <li><a class="d-block" href="#">Top 5 Lessons About
                                            Corporate
                                            To Learn Before.</a><span class="cate">Marketing</span></li>
                                </ul>
                            </div>
                        </div>


                        <div class="rbt-single-widget widget_tag_cloud mt--40">
                            <h3 class="title">Tags</h3>
                            <div class="inner mt--20">
                                <div class="tagcloud">
                                    <a href="#">Corporate</a>
                                    <a href="#">Agency</a>
                                    <a href="#">Creative</a>
                                    <a href="#">Design</a>
                                    <a href="#">Minimal</a>
                                    <a href="#">Company</a>
                                    <a href="#">Development</a>
                                    <a href="#">App Landing</a>
                                    <a href="#">Startup</a>
                                    <a href="#">App</a>
                                    <a href="#">Business</a>
                                    <a href="#">Software</a>
                                    <a href="#">Landing</a>
                                    <a href="#">Art</a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
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
</body>

</html>