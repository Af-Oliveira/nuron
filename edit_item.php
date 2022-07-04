    <?php
    include 'inc/config.inc.php';

    ?>
    <!DOCTYPE html>
    <html lang="en">


    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Create New || OnArt</title>
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
        <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/plugins/filepond-plugin-image-preview.css">
        <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/plugins/filepond.css">


        <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/plugins/jquery-ui.min.css">
        <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/odometer.css">

        <link href="https://unpkg.com/@yaireo/tagify/dist/tagify.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">

        <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/vendor/bootstrap-select.css" />
        <script src="https://unpkg.com/@yaireo/tagify"></script>
        <script src="https://unpkg.com/@yaireo/tagify/dist/tagify.polyfills.min.js"></script>
        <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/jquery.js"></script>
        <!-- Style css -->
        <link rel="stylesheet" href="<?php echo $config['urls']['site'] ?>/assets/css/style.css">



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
                --placeholder-color: rgb(254, 254, 254);
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
                $vars = isset($params) ?  $params : $_GET;

                include 'inc/models/' . $vars['model'] . '.php';
                include 'inc/include/db/edit.php';
                ?>
                <!-- </div>-->
            </div>
        </div>
        <!-- create new product area -->


        <!-- Modal -->

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
        <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/bundle.min.js"></script>
        <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/nft.js"></script>

        <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/filepond.js"></script>

        <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/filepond-plugin-image-preview.js"></script>
        <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/FilePondPluginFileValidateType.js"></script>
        <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/axios.js"></script>


        <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
        <!-- main JS -->
        <script src="<?php echo $config['urls']['site'] ?>/assets/js/main.js"></script>

        <!-- Meta Mask  -->
        <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/web3.min.js"></script>
        <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/maralis.js"></script>
        <script src="https://cdn.metroui.org.ua/v4/js/metro.min.js"></script>



    </body>

    </html>