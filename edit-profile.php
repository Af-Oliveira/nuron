<?php
include 'inc/config.inc.php';

$filter =  ['id' => $_SESSION['uId']];

$mongoCollection = $mongoClient->users;

$user = $mongoCollection->findOne(
  $filter,
);
?>
<!DOCTYPE php>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Edit Profile || OnArt</title>
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
  <span id="iduser" style="display: none;"><?= $_SESSION['uId'] ?></span>
  <!-- Start Header -->
  <?php
  echo menu($mongoClient, $googleClient, $config)
  ?>
  <!-- end page title area -->


  <!-- Start tabs area -->
  <div class="edit-profile-area rn-section-gapTop">
    <div class="container">
      <div class="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
        <div class="col-12 d-flex justify-content-between mb--30 align-items-center">
          <h4 class="title-left">Edit Your Profile</h4>
          <a href="<?= getUrlFriendly('author.php?id=' . $user['id'], $config, $mongoClient); ?>" class="btn btn-primary ml--10"><i class="feather-eye mr--5"></i> Preview</a>
        </div>
      </div>
      <div class="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
        <div class="col-lg-3 col-md-3 col-sm-12">
          <!-- Start tabs area -->
          <nav class="left-nav rbt-sticky-top-adjust-five">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-toggle="submitEPI" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i class="feather-edit"></i>Edit Profile Image</button>
              <button class="nav-link" id="nav-home-tabs" data-toggle="submitPI" data-bs-toggle="tab" data-bs-target="#nav-homes" type="button" role="tab" aria-controls="nav-homes" aria-selected="false"><i class="feather-user"></i>Personal Information</button>

            </div>
          </nav>
          <!-- End tabs area -->
        </div>
        <div class="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
          <div class="tab-content tab-content-edit-wrapepr" id="nav-tabContent">
            <!-- sigle tab content -->
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" name="DsubmitEPI" data-toggle="submitEPI" aria-labelledby="nav-home-tab">
              <!-- start personal information -->
              <form id="submitEPI" name="forms">
                <!-- start personal information -->
                <div class="nuron-information">
                  <div class="profile-change row g-5">
                    <div class="profile-left col-lg-4">
                      <div class="profile-image mb--30">
                        <h6 class="title" style="font-size:15px">Change Your Profile Picture</h6>
                        <?php
                        echo ' <img id="rbtinput1" src="' . $config['urls']['site'] . '/upload/profiles/' . $_SESSION['uId'] . '/avatars/' . $user['avatar'] . '" alt="Profile-NFT" />';
                        ?>
                      </div>
                      <div class="button-area">
                        <div class="brows-file-wrapper">
                          <!-- actual upload which is hidden -->
                          <input name="fatima" id="fatima" type="file">
                          <!-- our custom upload button -->
                        </div>
                        <!-- <a href="#" class="btn-primary-alta btn" onclick="customAlert.alert('Confirm to Delete Your Profile Picture?')">Delete</a> -->
                      </div>
                    </div>
                    <div class="profile-left right col-lg-8">
                      <div class="profile-image mb--30">
                        <h6 class="title" style="font-size:15px">Change Your Cover Photo</h6>
                        <?php
                        echo ' <img id="rbtinput2" src="' . $config['urls']['site'] . '/upload/profiles/' . $_SESSION['uId'] . '/banners/' . $user['banner'] . '" alt="Profile-NFT" />';
                        ?>
                      </div>
                      <div class="button-area">
                        <div class="brows-file-wrapper">
                          <!-- actual upload which is hidden -->
                          <input name="nipa" id="nipa" type="file">
                          <!-- our custom upload button -->

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 d-flex justify-content-left  align-items-left">
                  <button onclick="SubmitEPI()" class="btn btn-primary save-btn-edit">Submit your profile</button>
                </div>
              </form>
            </div>
            <!-- End personal information -->

            <!-- sigle tab content -->
            <div class="tab-pane fade" id="nav-homes" role="tabpanel" name="DsubmitPI" data-toggle="submitPI" aria-labelledby="nav-home-tab">
              <!-- start personal information -->
              <form id="submitPI" name="forms">
                <div class="nuron-information">
                  <div class="profile-form-wrapper">
                    <div class="input-two-wrapper mb--15">
                      <div class="first-name half-wid">
                        <label for="contact-name" class="form-label">First Name</label>
                        <input name="usernameF" id="contact-name" type="text" value="<?= $user['usernameF'] ?>">
                      </div>
                      <div class=" last-name half-wid">
                        <label for="contact-name-last" class="form-label">Last Name</label>
                        <input name="usernameL" id="contact-name-last" type="text" value="<?= $user['usernameL'] ?>">
                      </div>
                    </div>
                  </div>
                  <!-- edit bio area Start-->
                  <div class="edit-bio-area mt--30">
                    <label for="Discription" class="form-label">Edit Your Bio</label>
                    <textarea id="Discription" name="biography"><?= $user['biography'] ?></textarea>
                  </div>
                  <!-- edit bio area End -->
                  <!--  -->
                  <div class="input-two-wrapepr-prifile">
                    <!-- start Role area -->
                    <div class="role-area mt--15">
                      <label for="Role" class="form-label mb--10">Your Role</label>
                      <input name="role" id="Role" type="text" disabled="disabled" value="<?= $user['role'] ?>">
                    </div>
                    <!-- End Role area -->
                    <!-- select gender -->
                    <div class="role-area mt--15" style="display: grid;">
                      <label for="Role" class="form-label mb--10">Your Sexuality</label>
                      <select class="profile-edit-select" name="gender">
                        <?php
                        $genders = array(
                          'Private' => 'Private',
                          'Male' => 'Male',
                          'Female' => 'Female',
                          'Third Gender' => 'Third Gender',
                          '🤡' => '🤡'
                        );

                        echo '<option selected>' . $genders[$user['gender']] . '</option>';
                        foreach ($genders as $key => $value) {
                          if ($genders[$user['gender']] != $value) {
                            echo ' <option value="' . $key . '">' . $value . '</option>';
                          }
                        }
                        ?>

                      </select>
                    </div>
                    <!-- end gender -->
                  </div>
                </div>
                <!-- End personal information -->
                <div class="col-12 d-flex justify-content-left  align-items-left">
                  <button onclick="SubmitPI()" class="btn btn-primary save-btn-edit">Submit your profile</button>
                </div>
              </form>
            </div>
            <!-- End single tabv content -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End tabs area -->


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
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

  <!-- main JS -->
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/main.js"></script>
  <!-- Meta Mask  -->
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/web3.min.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/maralis.js"></script>
  <script src="<?php echo $config['urls']['site'] ?>/assets/js/vendor/nft.js"></script>



  <script>
    function SubmitPI() {
      sPI().then(() => {
        console.log('Deu certo');
      });
    }

    function SubmitEPI() {

      //$('#submitEPI').submit();
      sEPI().then(() => {
        console.log('Deu certo');
      });
    }

    document.addEventListener(
      "click",
      function(event) {


        const target = event.target;
        const id = target.commentId = event.target.id;


        if (target.matches(`[data-toggle="submitEPI"]`)) {

          var submitEPI = getElementsByClassName('DsubmitEPI');
          if (editForm.hasClass("show")) {

            submitEPI.removeClassName("show");
          } else {
            submitEPI.addClass("show");
          }

        } else if (target.matches(`[data-toggle="submitPI"]`)) {
          var submitPI = getElementsByClassName('DsubmitPI');
          if (editForm.hasClass("show")) {

            submitPI.removeClassName("show");
          } else {
            submitPI.addClass("show");
          }
        }
      },
      false
    );
  </script>
</body>

</html>