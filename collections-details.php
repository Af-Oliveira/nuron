<?php
include 'inc/config.inc.php';

$vars = isset($params) ?  $params : $_GET;
$id = $vars['id'];

//Collection Information
$filter =  ['id' => $id];
$mongoCollection = $mongoClient->collections;
$resMongoQueryCollection = $mongoCollection->findOne(
  $filter
);
$data_C = $resMongoQueryCollection;

//If no data, go to 404.php
if (!$data_C) {
  header('Location: ' . $config['urls']['site'] . '/404.php');
  exit();
}

//Collection Creator
$filter =  ['id' => $data_C['user']];
$mongoCollection = $mongoClient->users;
$resMongoQueryUser = $mongoCollection->findOne(
  $filter
);
$artist = $resMongoQueryUser;

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Collection Details || OnArt</title>
  <meta name="robots" content="noindex, follow" />
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <meta name="theme-style-mode" content="1">

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
  <span style="display:none" id="ID"><?= $artist['id'] ?></span>
  <span style="display:none" id="user_ID"><?= $_SESSION['uId'] ?></span>

  <?php
  echo menu($mongoClient, $googleClient, $config)
  ?>

  <!-- end page title area -->
  <style>
    .blueColor {
      color: blue;
    }

    .blueColor2 {
      background: blue !important;
    }

    .smallB {
      width: auto;
      height: 15em;
    }

    .bigB {
      flex-basis: 80%;
      height: 40em !important;
      width: auto;


    }


    @media (max-width: 1050px) {

      .smallB {
        width: auto;
        height: 11em;

      }

      .bigB {
        flex-basis: 80%;
        height: 36em !important;
        width: auto;


      }
    }

    @media (max-width: 800px) {

      .smallB {
        width: auto;
        height: 9em;

      }

      .bigB {
        flex-basis: 80%;
        height: 30em !important;
        width: auto;


      }
    }

    @media (max-width: 590px) {

      .smallB {
        width: auto;
        height: 7em;
      }

      .bigB {
        flex-basis: 80%;
        height: 22em !important;
        width: auto;


      }
    }

    @media (max-width: 500px) {

      .smallB {
        width: 5.5em;
        height: 5.5em;
      }

      .bigB {
        flex-basis: 80%;
        height: 18em !important;
        width: auto;

      }
    }



    body {
      font-family: Verdana, sans-serif;
      margin: 0;
    }

    * {
      box-sizing: border-box;
    }

    .row12>.column12 {
      padding: 0 8px;
    }

    .row12:after {
      content: "";
      display: table;
      clear: both;
    }

    .column12 {
      float: left;
      width: 23.9%;

    }

    /* The modal12 (background) */
    .modal12 {
      display: none;
      position: fixed;
      z-index: 1000;
      padding-top: 100px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: black;
    }

    /* modal12 Content */
    .modal12-content {
      position: relative;

      margin: auto;
      padding: 0;
      width: 90%;
      max-width: 1260px;
    }

    /* The close12 Button */
    .close12 {
      color: white;
      position: absolute;
      top: 20px;
      right: 25px;
      font-size: 35px;
      font-weight: bold;
    }

    .close12:hover,
    .close12:focus {
      color: #999;
      text-decoration: none;
      cursor: pointer;
    }

    .mySlides12 {
      display: none;
    }

    .cursor12 {
      cursor: pointer;
    }

    /* next12 & prev12ious buttons */
    .prev12,
    .next12 {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      padding: 16px;
      margin-top: -50px;
      color: white;
      font-weight: bold;
      font-size: 20px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
      -webkit-user-select: none;
    }

    /* Position the "next12 button" to the right */
    .next12 {
      right: 0;
      border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev12:hover,
    .next12:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    /* Number text (1/3 etc) */
    .numbertext12 {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: -35px;
    }



    .caption-container12 {
      text-align: center;
      background-color: black;
      padding: 2px 16px;
      color: white;
    }

    .demo12 {
      opacity: 0.6;
    }

    .active12,
    .demo12:hover {
      opacity: 1;
    }



    .hover-shadow12:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  </style>

  <body>
    <div class="rn-blog-area rn-blog-details-default rn-section-gapTop" style=" background-image: url(&quot;https://st.deviantart.net/eclipse/global/svg/p13-stage-dark_v2.svg&quot;);padding-top:45px;padding-bottom:30px">
      <div class="container">

        <div class="catagory-collection">

          <div class="catagory">
            <div class="top-seller-inner-one" style="display: flex;">
              <div class="top-seller-wrapper pe-4">
                <div class="thumbnail" style="max-width: 70px;">
                  <?php
                  echo '<a href="' . getUrlFriendly('author.php?id=' . $artist['id'], $config, $mongoClient) . '"><img src="' . $config['urls']['site'] . '/upload/profiles/' . $artist['id'] . '\avatars/' . $artist['avatar'] . '" alt="Nft_Profile" /></a>';
                  ?>

                </div>

              </div>
              <div class="top-seller-wrapper" style="display: table-row;">
                <div class="top-seller-content">
                  <?php
                  echo '<a href="' . getUrlFriendly('author.php?id=' . $artist['id'], $config, $mongoClient) . '">';
                  ?>
                  <h6 class="name">By <?= $artist['name'] ?></h6>
                  </a>
                </div>
                <div class="top-seller-content">
                  <?php
                  if ($_SESSION['uId'] != -1 || $_SESSION['uId'] != $artist['id']) {
                    echo ' <a href="#" id="Watch">';

                    $filter =  ['id' => $_SESSION['uId']];
                    $mongoCollection = $mongoClient->users;
                    $resMongoQueryUser = $mongoCollection->findOne(
                      $filter
                    );
                    $user = $resMongoQueryUser;

                    if (in_array($artist['id'], (array) $user['Following'])) {
                      echo '<h6 id="btnWatch" class="name blueColor" style="padding-top: 10px; font-size:small">+ WATCH</h6>';
                    } else {
                      echo '<h6 id="btnWatch" class="name" style="padding-top: 10px; font-size:small">+ WATCH</h6>';
                    }

                    echo ' </a>';
                  }
                  ?>

                </div>
              </div>


            </div>
          </div>

        </div>

        <div class="rn-bid-details">
          <div class="tab-wrapper-one">

            <div class="tab-content rn-bid-content">

              <div>

                <div class="mt-2">
                  <div class="top-seller-wrapper">
                    <h7 class="title" style="font-weight: bold;font-size:18px">Collection title:</h7><br>
                    <p style="font-size: medium;color: white;font-weight: bold;"><?= $data_C['name'] ?></p>
                  </div>
                </div>
                <?php
                $description = $data_C['description'];
                if ($description != "") {
                  echo '  <div class="mt-2">
                  <div class="top-seller-wrapper">
                    <h7 class="title" style="font-weight: bold;font-size:18px">Collection description:</h7><br>
                    <p style="font-size: medium;color: white;font-weight: bold;"> ' . $description . '</p>
                  </div>
                </div>';
                }

                ?>
                <div class="top-seller-inner-one">
                  <div class="top-seller-wrapper">
                  </div>
                </div>
                <!-- single creator -->
              </div>
            </div>
          </div>
        </div>

        <?php

        $filter =  ['private' => "0"];
        $mongoCollection = $mongoClient->itens;
        $resMongoQueryitem = $mongoCollection->find(
          $filter
        );
        $collection_I = array();
        foreach ($resMongoQueryitem as $key => $value) {

          if (in_array($data_C['id'], (array) $value['collection'])) {
            $collection_I[] = $value;
          };
        }

        if (count($collection_I) > 0) {
          clog('ola');

          echo '<div class="row g-4">';
          foreach ($collection_I as $key => $value) {

            echo '<div class=" col-4 col-lg-3 col-md-6 col-sm-6 col-12">
            <div style="padding: 15px; background: var(--background-color-1);border-radius: 7px;border: 2px solid transparent;border-top-color: transparent;border-right-color: transparent;border-bottom-color: transparent;border-left-color: transparent;border-color: var(--color-border);margin-right: 4px;margin-top: 10px;">
        <div style="height: 20em;">
           <img style="width:100%;height: 100%; object-fit:cover" src="' . $config['urls']['site'] . '/upload/profiles/' . $data_C['user'] . '/itens/' . $value['images'][0] . '"  onclick="openmodal();currentSlide(' . ($key + 1) . ')" class="hover-shadow12 cursor12">
        </div>
           <span style="font-weight: bold; font-size: initial;">' . $value['name'] . '</span>
         </div> </div>';
          }
          echo '</div>';
          echo '<div id="mymodal12" class="modal12">
          <div style="display: flex">
          <span class="close12 cursor12" onclick="close12modal12()">&times;</span>
          
        </div>
            <div class="modal12-content">';

          foreach ($collection_I as $key => $value) {
            echo ' <div class="mySlides12">
                     <div class="numbertext12">' . ($key + 1) . ' / ' . count($collection_I) . '</div>  
                        <div class="col-lg-12 col-md-12 col-sm-12">
                           <div class="product-tab-wrapper rbt-sticky-top-adjust">
                              <div class="pd-tab-inner">
                                 <div class="nav rn-pd-nav rn-pd-rt-content nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">';
            foreach ($value['images'] as $key => $images) {
              $class = 'active';
              if ($key > 0) {
                $class = '';
              }
              echo ' <button class="nav-link ' . $class . '" id="small-' . $key . '-' . $value['id'] . '" data-bs-toggle="pill" data-bs-target="#big-' . $key . '-' . $value['id'] . '" type="button" role="tab" aria-controls="big-' . $key . '-' . $value['id'] . '" aria-selected="true">
                                           <span style="background: #242435a6;" class="smallB rn-pd-sm-thumbnail">
                                             <img style="width: 100%;height: 100%; object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $data_C['user'] . '/itens/' . $images . '" alt="Nft_Profile">
                                           </span>
                                          </button>';
            }
            echo '</div>
                                <div class="tab-content rn-pd-content" id="v-pills-tabContent" style="padding-left: 20px;">';
            foreach ($value['images'] as $key => $images) {
              $class = 'show active';
              if ($key > 0) {
                $class = '';
              }
              echo '    <div style="background: #242435a6;border-radius: 7px;" class="tab-pane fade ' . $class . '" id="big-' . $key . '-' . $value['id'] . '" role="tabpanel" aria-labelledby="small-' . $key . '-' . $value['id'] . '">
              <div class="rn-pd-thumbnail">
              <div class="bigB">
                 <img style="width: 100%;height: 100%; object-fit: contain;" src="' . $config['urls']['site'] . '/upload/profiles/' . $data_C['user'] . '/itens/' . $images . '" alt="Nft_Profile">
               </div>
               </div>
               <div  style="display: flex;margin: 10px;">

               <a href="' . getUrlFriendly('product-details.php?id=' .  $value['id'], $config, $mongoClient) . '"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
               </svg></i></a>
                   
              <p style="padding-left: 10px;font-size: 15px;" >' . $value['name'] . '</p>
                </div>
                        </div>';
            }
            echo '</div>  
                             </div>
                           </div>
                        </div>
                     </div>';
          }


          echo '    
          <a class="prev12" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next12" onclick="plusSlides(1)">&#10095;</a>
    
            <div class="caption-container12" >
        
            </div>';

          echo ' </div>
        </div> </div>';
        }
        ?>

      </div>


      <!-- Start Footer Area -->
      <?php
      echo footer($mongoClient, $config);
      ?>
      <!-- End Footer Area -->
      <div class="mouse-cursor12 cursor12-outer"></div>
      <div class="mouse-cursor12 cursor12-inner"></div>
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
      <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/axios.js"></script>
      <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/index.bundle.min.js"></script>
      <!-- main JS -->
      <script src="<?php echo $config['urls']['site'] ?>/assets/js/main.js"></script>
      <!-- Meta Mask  -->
      <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/web3.min.js"></script>
      <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/maralis.js"></script>
      <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/nft.js"></script>


      <script>
        $("#Watch").on("click", function(e) {
          e.preventDefault();
          const data = $("#ID").html();
          const config = '<?= $config['urls']['site'] ?>';
          const id = $("#user_ID").html();
          const btnWatch = document.getElementById("btnWatch");
          if (btnWatch.classList.contains("blueColor")) {
            btnWatch.classList.remove("blueColor");
          } else {
            btnWatch.classList.add("blueColor");
          }

          $.ajax({
            url: `<?= $config['urls']['site'] ?>/inc/handlers/Subcription.php?WatchID=${data}&user_id=${id}`,
            type: "GET",
          });
        });

        function openmodal() {
          document.getElementById("mymodal12").style.display = "block";
        }



        function close12modal12() {
          document.getElementById("mymodal12").style.display = "none";
        }

        var slideIndex = 1;
        showSlides(slideIndex);



        function plusSlides(n) {
          showSlides(slideIndex += n);
        }



        function currentSlide(n) {
          showSlides(slideIndex = n);
        }



        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides12");
          var dots = document.getElementsByClassName("demo12");
          var captionText = document.getElementById("caption");
          if (n > slides.length) {
            slideIndex = 1
          }
          if (n < 1) {
            slideIndex = slides.length
          }
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active12", "");
          }
          slides[slideIndex - 1].style.display = "block";
          dots[slideIndex - 1].className += " active12";
          captionText.innerHTML = dots[slideIndex - 1].alt;
        }
      </script>


  </body>

</html>