<?php
function leftmenu($mongoClient, $config)
{

  $filter =  ['active' => 1, 'dad' => 0, 'type' => 'menu', 'side' => 'left'];
  $options = ['sort' => ['order' => 1]];

  $mongoCollection = $mongoClient->menu;

  $resMongoQuery = $mongoCollection->find(
    $filter,
    $options
  );

  //Start Mainmanu Nav                      
  foreach ($resMongoQuery as $key => $value) {



    $filter =  ['dad' => $value['id'], 'type' => 'menu', 'side' => 'left'];
    $options = ['sort' => ['order' => 1]];
    $mongoCollection = $mongoClient->menu;
    $resMQ = $mongoCollection->find(
      $filter,
      $options
    );



    $resMQ = $resMQ->toArray();

    if (count($resMQ) > 0) {

      echo '  <li class="has-droupdown has-menu-child-item">
        <a href="' . $value['name'] . '">' . $value['name'] . '</a>
        <ul class="submenu">';

      foreach ($resMQ as $key => $value) {



        echo '<li >
            <a href=" ' . getUrlFriendly($value['url'], $config, $mongoClient) . '  ">' . $value['name'] . '<i class="feather-fast-forward"></i></a>
            </li>';
      }
      echo '</ul>';
      echo '</li>';
    } else {
      echo ' <li><a href="  ' . getUrlFriendly($value['url'], $config, $mongoClient)  . '   ">' . $value['name'] . '</a></li>';
    }
  }
}

function rightmenu($mongoClient, $googleClient, $config)
{
  $filter =  ['active' => 1, 'type' => 'menu', 'side' => 'right'];
  $options = ['sort' => ['order' => 1]];

  $mongoCollection = $mongoClient->menu;

  $resMongoQuery = $mongoCollection->find(
    $filter,
    $options
  );


  echo '  <div class="header-right">
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
  </div>';

  foreach ($resMongoQuery as $key => $value) {



    if (isset($_SESSION['uId']) && $_SESSION['uId'] !== -1) {

      echo '    <div class="setting-option rn-icon-list notification-badge">
                <div class="icon-box">
                  <a href="   ' . getUrlFriendly($value['url'], $config, $mongoClient) . '  "><i class="' . $value['icon'] . '" style="scale: 1.3;width: inherit;height: 50%;"></i>';
      echo '</a>
                 </div>
              </div>';
    }
  }

  echo accmenu($mongoClient, $googleClient, $config);


  echo ' <div class="setting-option mobile-menu-bar d-block d-xl-none">
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
                  <img class="sun-image" src="assets/images/icons/sun-01.svg" alt="Sun images">
              </a>
          </li>
          <li>
              <a href="javascript: void(0);" data-theme="dark" class="setColor dark">
                  <img class="Victor Image" src="assets/images/icons/vector.svg" alt="Vector Images">
              </a>
          </li>
      </ul>
  </div>
</div>';
}

function accmenu($mongoClient, $googleClient, $config)
{
  if (isset($_SESSION['uId'])) {
    $idLog = $_SESSION['uId'];
  }

  if (!count($_SESSION['arrSavedAccounts'])) {
    echo '<div class="setting-option rn-icon-list user-account">
    <div class="icon-box">
    <a href="' . $googleClient->createAuthUrl() . '">
    <img src="assets/images/icons/boy-avater.png" alt="Images"></a>
</div>
</div>';
  } else {
    if ($idLog == -1) {
      echo '
      <div class="setting-option rn-icon-list user-account">
      <div class="icon-box">
        <a href="' . $googleClient->createAuthUrl() . '">
        <img src="assets/images/icons/boy-avater.png" alt="Images"></a>';

      $nome = 'Guest';
    } else {

      $id = $_SESSION['uId'];
      $filter =  ['id' => $id];

      $mongoCollection = $mongoClient->users;

      $resMongoQueryUser = $mongoCollection->findOne(
        $filter
      );

      echo '<div class="setting-option rn-icon-list user-account">
      <div class="icon-box">';
      if ($resMongoQueryUser['avatar'] == "") {
        echo '<a><img src="assets/images/slider/banner-06.png" alt="Images"></a>';
      } else {
        echo '<a><img src="upload/profiles/' . $id . '/avatars/' . $resMongoQueryUser['avatar'] . '" alt="Images"></a>';
      }
      $nome = $resMongoQueryUser['usernameF'] . ' ' . $resMongoQueryUser['usernameL'];
    }


    echo '
    
    <div class="rn-dropdown">
      <div class="rn-inner-top">
        <h4 class="title">' . $nome . '</h4>
        <span>Saved accounts</span>
      </div>
      <div class="rn-product-inner">
        <ul class="product-list">';
    $arrSavedAccounts = $_SESSION['arrSavedAccounts'];
    foreach ($arrSavedAccounts as $id) {

      $filter =  ['id' => $id];
      $mongoCollection = $mongoClient->users;
      $resMongoQueryUser = $mongoCollection->findOne(
        $filter
      );
      echo '<li class="single-product-list">
          <div class="thumbnail">';
      if ($resMongoQueryUser['avatar'] == "") {
        echo '<a href="#"><img src="assets/images/slider/banner-06.png"></a>';
      } else {
        echo '<a href="#"><img src="upload/profiles/' . $id . '/avatars/' . $resMongoQueryUser['avatar'] . '" style="width: 50px;border-radius: 100%;object-fit: cover;max-height: 50px;"></a>';
      }
      echo '</div>
          <div class="content">
              <h6 class="title"><a style="' . ($idLog == $id ? ' color: #00a3ff;' : '') . '" href="' . $config['urls']['site'] . '/inc/handlers/ChangeAccount.php?ID=' . $id . '">' . $resMongoQueryUser['usernameF'] . ' ' . $resMongoQueryUser['usernameL'] . '</a></h6>
          </div>
          <div class="button"></div>
      </li>';
    }
    echo '</ul>
     </div>
      <div class="add-fund-button mt--20 pb--20">
        <a id="logout" href="logout.php?add=1" class="btn btn-primary-alta w-100">Add a new account</a>
      </div>

      <ul class="list-inner">';
    $filter =  ['type' => 'acc-menu'];
    $mongoCollection = $mongoClient->menu;
    $resMongoQueryUser = $mongoCollection->find(

      $filter
    );


    foreach ($resMongoQueryUser as $key => $value) {


      echo '  <li><a href="  ' . getUrlFriendly($value['url'], $config, $mongoClient)   . '   ">' . $value['name'] . '</a></li> ';
    };
    echo ' 
         
      </ul>

    </div>
  </div>
</div>';
  }
}

function menu($mongoClient, $googleClient, $config)
{

  if (isset($_SESSION['uId'])) {
    echo '  <span id="iduser" style="display: none;">' . $_SESSION['uId'] . '</span>';
  }
  echo '  <header class="rn-header haeder-default header--sticky">
    <div class="container" style="max-width: 1160px;">
      <div class="header-inner">
        <div class="header-left" style="flex-basis: 250%;">
          <div class="logo-thumbnail logo-custom-css">
            <a class="logo-light" href="index.html"><img src="assets/images/logo/logo-white.png" alt="nft-logo"></a>
            <a class="logo-dark" href="index.html"><img src="assets/images/logo/logo-dark.png" alt="nft-logo"></a>
          </div>
          <div class="mainmenu-wrapper">
            <nav id="sideNav" class="mainmenu-nav d-none d-xl-block">
              <!-- Start Mainmanu Nav -->
              <ul class="mainmenu">';

  echo leftmenu($mongoClient, $config);


  echo '  </ul>
           
             
            </nav>
          </div>
        </div>';




  echo rightmenu($mongoClient, $googleClient, $config);



  echo '    </div>
    </div>
  </header>


  <div class="popup-mobile-menu">
    <div class="inner">
      <div class="header-top">
        <div class="logo logo-custom-css">
          <a class="logo-light" href="index.html"><img src="assets/images/logo/logo-white.png" alt="nft-logo" /></a>
          <a class="logo-dark" href="index.html"><img src="assets/images/logo/logo-dark.png" alt="nft-logo" /></a>
        </div>
        <div class="close-menu">
          <button class="close-button">
            <i class="feather-x"></i>
          </button>
        </div>
      </div>
      <nav>
    
        <ul class="mainmenu">';

  echo leftmenu($mongoClient, $config);


  echo ' </ul>
        <!-- End Mainmanu Nav -->
      </nav>
    </div>
  </div>';
}
