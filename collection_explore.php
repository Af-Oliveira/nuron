<script>
    var arrMySelects = new Map();
</script>

<?php
include 'inc/config.inc.php';

$vars = isset($params) ?  $params : $_GET;
$date = $vars['filter_date'];


if ($date == "-1" || $date == "1" || $date == "all") {
    $filterD = $date;
} else {
    header('Location: ' . $config['urls']['site'] . '/404.php');
    exit();
}


$options_C = array(

    'select_date' => array(

        'multi' => false,
        'type' => 'date',

    )
);

$select_date = json_encode($options_C['select_date']);

echo '<script>

    arrMySelects.set(`date`, ' . $select_date . ');

</script>';
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
        z-index: 10;
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
</style>

<body class="template-color-1 nft-body-connect">
    <!-- Start Header -->
    <?php
    echo menu($mongoClient, $googleClient, $config)
    ?>
    <!-- end page title area -->





    <!-- Start product area -->
    <div class="rn-product-area rn-section-gapTop">
        <div class="container">
            <div class="row mb--50 align-items-center">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h3 class="title mb--0" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">Explore Art</h3>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
                    <div class="view-more-btn text-start text-sm-end" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <button class="discover-filter-button discover-filter-activation btn btn-primary">Filter<i class="feather-filter"></i></button>
                    </div>
                </div>
            </div>

            <div class="default-exp-wrapper default-exp-expand">
                <form onSubmit="write_ARt(); return false;">
                    <div class="inner" style="justify-content: normal;">



                        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div class="filter-select-option">
                                <label class="filter-leble">DATE</label>
                                <div class="col-md-12">
                                    <div class="mb--15">

                                        <div class="date_value"></div>
                                    </div>
                                    <input name="date" id="date" value="" type="hidden">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div class="filter-select-option">
                                <label class="filter-leble">Search</label>
                                <div class="col-md-12">
                                    <input id="search" value="" type="text" style="border: solid 1px; border-radius: 7px;height: 44px;">
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div class="filter-select-option">
                                <label class="filter-leble" style="color:transparent">.</label>
                                <div class="col-md-12">
                                    <div class="mb--15">
                                        <button type="submit" style="border-radius: 7px;color: white;min-width: 100px !important;padding: 11px 57px;" class="btn btn-primary " href="#">Filter</buttom>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
            <div class="row g-4" id="A-container">
                <!-- start single product -->


                <!-- end single product -->
            </div>


            <div class="row">
                <div class="col-lg-12" data-sal="slide-up" data-sal-delay="950" data-sal-duration="800">
                    <nav class="pagination-wrapper" aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link active" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>


    <!-- end product area -->
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
    <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/bundle.min.js"></script>

    <!-- main JS -->
    <script src="<?php echo $config['urls']['site'] ?>/assets/js/main.js"></script>
    <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/axios.js"></script>
    <!-- Meta Mask  -->
    <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/web3.min.js"></script>
    <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/maralis.js"></script>
    <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/nft.js"></script>

    <script>
        async function write_ARt() {

            const date = document.getElementById('date').value;
            const search = document.getElementById('search').value;


            const art_itens = await axios.get(
                `<?= $config['urls']['site'] ?>/inc/handlers/Write_Collections.php?date=${date}&search=${search}`,
            );
            const htmlStr = art_itens.data;
            $('#A-container').html(htmlStr);
            return;
        }

        window.onload = async () => {
            const date = document.getElementById('date');
            date.value = '<?= $filterD ?>';
            await write_ARt();
        };


        const fillValues = {
            date: '<?= $filterD ?>',
        };


        arrMySelects.forEach(async (value, key) => {
            const myData = [];
            let object_filter;
            if (value.type == "date") {

                object_filter = {
                    value: 'all',
                    label: 'None',
                };
                myData.push(object_filter);
                object_filter = {
                    value: '-1',
                    label: 'Most recent',
                };
                myData.push(object_filter);
                object_filter = {
                    value: '1',
                    label: 'Least recent',
                };
                myData.push(object_filter);

            }


            var mySelect = new MultiSelect2('.' + key + '_value', {
                value: fillValues[key],
                icon: 'fa fa-times',
                multiple: value.multi,
                options: myData,
                max_selected_options: value.max_selected_options ?? null,
                selected_options: new Map(),
                noOptions: value.missing ?? 'No options available',
                onChange: value => {
                    $(`#${key}`).val(JSON.stringify(value));
                }
            });

            value.MultiSelect2 = mySelect;
            arrMySelects.set(key, value);


        });
    </script>

</html>