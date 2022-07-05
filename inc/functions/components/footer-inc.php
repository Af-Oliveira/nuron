
<?php

function footer($mongoClient, $config)
{

  $filter =  ['active' => 1, 'dad' => "0", 'type' => 'menu', 'side' => 'left'];
  $options = ['sort' => ['order' => 1]];

  $mongomenus = $mongoClient->menu;

  $resMongoQueryM = $mongomenus->find(
    $filter,
    $options
  );


  $filter =  ['active' => 1];
  $options = ['sort' => ['date' => 1], 'limit' => 3];
  $mongousers = $mongoClient->users;
  $resMongoQueryU = $mongousers->find(
    $filter,
    $options
  );

  $filter =  ['active' => 1];
  $mongoSM = $mongoClient->socialMedia;
  $resMongoQuerySM = $mongoSM->find(
    $filter
  );

  $string = '<div class="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
      <div class="container">
        <div class="row gx-5">


   
          <div class="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="widget-content-wrapper">
              <div class="footer-left">
                <div class="logo-thumbnail logo-custom-css">

                <a class="logo-light" href="' . getUrlFriendly("index.php", $config, $mongoClient) . '"><img src="' . $config['urls']['site'] . '/assets/images/logo/logo-white.png" alt="nft-logo"></a>
                 

                </div>
                <p class="rn-footer-describe">
                Collect, Discover Digital Art and Explore Your favourite artists.
                </p>
              </div>
              
            </div>
          </div>
   

   
          <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
            <div class="footer-widget widget-information">
              <h6 class="widget-title">Information</h6>
              <ul class="footer-list-one">';
  foreach ($resMongoQueryM as $key => $value) {
    $string .= '<li class="single-list"><a href="' . getUrlFriendly($value['url'], $config, $mongoClient) . '">' . $value['name'] . '</a></li>';
  }


  $string .=            '</ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
            <div class="footer-widget">
              <h6 class="widget-title">Recent artists</h6>
              <ul class="footer-recent-post">';

  foreach ($resMongoQueryU as $key => $value) {
    $string .= '<li class="recent-post">
                <div class="thumbnail" style="    width: 3.5em;
                height: 3.5em;">
                  <a href="' . getUrlFriendly('author.php?id=' . $value['id'], $config, $mongoClient) . '">
                    <img img style="
                    width: 100%;
                    height: 100%;

                      object-fit: cover;" src="' . $config['urls']['site'] . '/upload/profiles/' . $value['id'] . '\avatars/' . $value['avatar'] . '" alt="Product Images"></a>
                </div>
                <div class="content">
                  <h6 class="title"><a href="' . getUrlFriendly('author.php?id=' . $value['id'], $config, $mongoClient) . '">' . $value["name"] . '</a></h6>          
                  <p>Created acount on:</p>   
                  <span>' . formatTimeStamp($value['date']) . '</span>    
                </div>
                
              </li>';
    clog(getUrlFriendly("terms-condition.php", $config, $mongoClient));
  }

  $string .= '</ul>
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
              <span>©2022 ON-Art. All rights reserved.</span>
              <ul class="privacy">
              
                <li><a href="' . getUrlFriendly('terms-condition.php', $config, $mongoClient) . '">Terms</a></li>
                <li><a href="' . getUrlFriendly('privacyPolicy.php', $config, $mongoClient) . '">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="copyright-right">
              <ul class="social-copyright">';
  foreach ($resMongoQuerySM as $key => $value) {
    $string .= '   <li><a href="' . $value['url'] . '"><i data-feather="' . $value['icon'] . '"></i></a></li>';
  }
  $string .= '    </ul>
            </div>
          </div>
        </div>
      </div>
    </div>';

  echo $string;
}
