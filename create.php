    <?php
    include 'inc/config.inc.php';
    ?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Create New || Nuron - NFT Marketplace Template</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <meta name="theme-style-mode" content="1"> <!-- 0 == light, 1 == dark -->

        <!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png">
        <!-- CSS 
    ============================================ -->
        <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/vendor/slick.css">
        <link rel="stylesheet" href="assets/css/vendor/slick-theme.css">
        <link rel="stylesheet" href="assets/css/vendor/nice-select.css">
        <link rel="stylesheet" href="assets/css/plugins/feature.css">
        <link rel="stylesheet" href="assets/css/plugins/filepond-plugin-image-preview.css">
        <link rel="stylesheet" href="assets/css/plugins/filepond.css">


        <link rel="stylesheet" href="assets/css/plugins/jquery-ui.min.css">
        <link rel="stylesheet" href="assets/css/vendor/odometer.css">

        <link href="https://unpkg.com/@yaireo/tagify/dist/tagify.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">

        <link rel="stylesheet" href="assets/css/vendor/bootstrap-select.css" />
        <script src="https://unpkg.com/@yaireo/tagify"></script>
        <script src="https://unpkg.com/@yaireo/tagify/dist/tagify.polyfills.min.js"></script>
        <script src="assets/js/vendor/jquery.js"></script>
        <!-- Style css -->
        <link rel="stylesheet" href="assets/css/style.css">



        <style>
            .multi-select__select {

                align-items: center;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
                box-sizing: border-box;
                cursor: pointer;
                display: flex;
                font-size: 16px;
                font-weight: 500;
                justify-content: left;
                min-height: 44px;
                padding: 5px 10px;
                position: relative;
                transition: 0.2s;
                width: 100%;

                border-radius: 6px;
                border: none;
                border: 1px solid #aaaaaa;
                background: transparent;
                color: #aaaaaa;
            }

            .multi-select__autocomplete::placeholder {
                color: red;
            }

            .multi-select__options {
                border-radius: 4px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
                box-sizing: border-box;
                color: #363b3e;
                display: none;
                left: 0;
                max-height: 221px;
                position: absolute;
                top: 50px;
                width: 100%;
                z-index: 5;
                overflow-y: scroll;
            }

            .multi-select__option:hover {
                background-color: #e9e9e9;
            }

            .multi-select__select--opened .multi-select__options {
                display: block;
            }

            .multi-select__option {
                background: #fff;
                border-bottom: 1px solid #e4e4e4;
                box-sizing: border-box;
                height: 44px;
                line-height: 25px;
                padding: 10px;
            }

            .multi-select__option-active {
                background-color: #59d9d4 !important;
                color: #ffffff;
            }

            .multi-select__option--selected {
                color: #e4e4e4;
                cursor: initial;
                pointer-events: none;
            }

            .multi-select__option--hidden {
                display: none;
            }

            .multi-select__selected-label {
                background: #58d8d3;
                border-radius: 4px;
                color: #fff;
                cursor: initial;
                display: inline-block;
                margin: 5px;
                padding: 3px 7px;
                font-size: 12px;
            }

            .multi-select__selected-label:last-of-type {
                margin-right: 0;
            }

            .multi-select__selected-label i {
                cursor: pointer;
                display: inline-block;
                margin-left: 7px;
            }

            .multi-select__selected-label i:hover {
                color: #e4e4e4;
            }

            .multi-select__autocomplete {
                background: #f9f9f8;
                border-bottom: 1px solid #e4e4e4;
                border-left: none;
                border-right: none;
                border-top: none;
                box-sizing: border-box;
                font-size: 16px;
                outline: none;
                padding: 10px;
                width: 100%;
            }



            .tags-look .tagify__dropdown__item {
                display: inline-block;
                border-radius: 3px;
                padding: .3em .5em;
                border: 1px solid #CCC;
                background: #F3F3F3;
                margin: .2em;
                font-size: .85em;
                color: black;
                transition: 0s;
            }

            .tags-look .tagify__dropdown__item--active {
                color: black;
                background: black;
            }

            .tags-look .tagify__dropdown__item:hover {
                background: lightyellow;
                border-color: gold;
            }

            .tagify {
                font-style: bold;
                --tags-disabled-bg: #F1F1F1;
                --tags-border-color: #DDD;
                --tags-hover-border-color: #CCC;
                --tags-focus-border-color: #6b6b70;
                --tag-bg: #E5E5E5;
                --tag-hover: #D3E2E2;
                --tag-text-color: black;
                --tag-text-color: black;
                --tag-text-color--edit: white;
                --tag-pad: 0.3em 0.5em;
                --tag-inset-shadow-size: 1.1em;
                --tag-invalid-color: #D39494;
                --tag-invalid-bg: rgb(219 26 26 / 90%);
                --tag-remove-bg: rgba(211, 148, 148, 0.3);
                --tag-remove-btn-color: black;
                --tag-remove-btn-bg: none;
                --tag-remove-btn-bg--hover: #c77777;
                --input-color: inherit;
                --tag--min-width: 1ch;
                --tag--max-width: auto;
                --tag-hide-transition: 0.3s;
                --placeholder-color: rgba(0, 0, 0, 0.4);
                --placeholder-color-focus: rgba(0, 0, 0, 0.25);
                --loader-size: .8em;
                --readonly-striped: 1;
                display: flex;
                align-items: flex-start;
                flex-wrap: wrap;
                border: 1px solid #ddd;
                border: 1px solid var(--tags-border-color);
                padding: 0;
                line-height: 0;
                cursor: text;
                outline: 0;
                position: relative;
                box-sizing: border-box;
                transition: .1s;
            }
        </style>
    </head>

    <body class="template-color-1 nft-body-connect">

        <!-- Start Header -->
        <span id="iduser" style="display: none;"><?= $_SESSION['uId'] ?></span>
        <!-- Start Header -->
        <?php
        echo menu($mongoClient, $googleClient, $config)
        ?>
        <!-- end page title area -->
        <!-- create new product area -->

        <div class="create-area rn-section-gapTop">
            <div class="container">
                <?php
                $model = $_GET['model'];
                include 'inc/models/' . $model . '.php';
                include 'inc/include/db/inserir.php';
                ?>
                <!-- </div>-->
            </div>
        </div>
        <!-- create new product area -->


        <!-- Modal -->
        <div class="rn-popup-modal upload-modal-wrapper modal fade" id="uploadModal" tabindex="-1" aria-hidden="true">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content share-wrapper">
                    <div class="modal-body">
                        <div class="product-style-one no-overlay">
                            <div class="card-thumbnail">
                                <a href="product-details.html"><img src="assets/images/portfolio/portfolio-05.jpg" alt="NFT_portfolio"></a>
                            </div>
                            <div class="product-share-wrapper">
                                <div class="profile-share">
                                    <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="assets/images/client/client-1.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="assets/images/client/client-2.png" alt="Nft_Profile"></a>
                                    <a href="author.html" class="avatar" data-tooltip="Jone lee"><img src="assets/images/client/client-3.png" alt="Nft_Profile"></a>
                                    <a class="more-author-text" href="#">9+ Place Bit.</a>
                                </div>
                                <div class="share-btn share-btn-activation dropdown">

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
                                    <a class="logo-light" href="index.html"><img src="assets/images/logo/logo-white.png" alt="nft-logo"></a>
                                    <a class="logo-dark" href="index.html"><img src="assets/images/logo/logo-dark.png" alt="nft-logo"></a>
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
                                            <img src="assets/images/portfolio/portfolio-01.jpg" alt="Product Images">
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
                                            <img src="assets/images/portfolio/portfolio-02.jpg" alt="Product Images">
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
                                            <img src="assets/images/portfolio/portfolio-03.jpg" alt="Product Images">
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

        <script src="assets/js/vendor/jquery.nice-select.min.js"></script>
        <script src="assets/js/vendor/jquery-ui.js"></script>
        <script src="assets/js/vendor/modernizer.min.js"></script>
        <script src="assets/js/vendor/feather.min.js"></script>
        <script src="assets/js/vendor/slick.min.js"></script>
        <script src="assets/js/vendor/bootstrap.min.js"></script>
        <script src="assets/js/vendor/sal.min.js"></script>
        <script src="assets/js/vendor/particles.js"></script>
        <script src="assets/js/vendor/jquery.style.swicher.js"></script>
        <script src="assets/js/vendor/js.cookie.js"></script>
        <script src="assets/js/vendor/count-down.js"></script>
        <script src="assets/js/vendor/isotop.js"></script>
        <script src="assets/js/vendor/imageloaded.js"></script>
        <script src="assets/js/vendor/backtoTop.js"></script>
        <script src="assets/js/vendor/odometer.js"></script>
        <script src="assets/js/vendor/jquery-appear.js"></script>
        <script src="assets/js/vendor/scrolltrigger.js"></script>
        <script src="assets/js/vendor/jquery.custom-file-input.js"></script>
        <script src="assets/js/vendor/savePopup.js"></script>
        <script src="assets/js/vendor/bundle.min.js"></script>
        <script src="assets/js/vendor/nft.js"></script>

        <script src="assets/js/vendor/filepond.js"></script>

        <script src="assets/js/vendor/filepond-plugin-image-preview.js"></script>
        <script src="assets/js/vendor/FilePondPluginFileValidateType.js"></script>
        <script src="assets/js/vendor/axios.js"></script>


        <script src="assets/js/vendor/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <!-- main JS -->
        <script src="assets/js/main.js"></script>

        <!-- Meta Mask  -->
        <script src="assets/js/vendor/web3.min.js"></script>
        <script src="assets/js/vendor/maralis.js"></script>
        <script src="https://cdn.metroui.org.ua/v4/js/metro.min.js"></script>



    </body>

    </html>