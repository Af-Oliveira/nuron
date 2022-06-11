<?php
include '../../config.inc.php';
$id_itens = $_GET['id_itens'];
$strComments = '';

$filter =  ['id_itens' => $id_itens,];
$options = ['sort' => ['date' => -1]];
$mongoCollection = $mongoClient->comments;
$resMongoQuery = $mongoCollection->find(
  $filter,
  $options
);
$arrComments = $resMongoQuery->toArray();

$GLOBALS['strComments'] .= '<h5 class="comment-title mb--40">Comments ' . count($arrComments) . ' </h5>';
writeComments($id_itens, $config, $mongoClient);

function writeComments($id_itens, $config, $mongoClient, $parent = "0")
{
  $maxC = 500;
  //----------------
  $url = $config['urls']['site'];

  $filter =  ['id_itens' => $id_itens, 'parent' => $parent];
  $options = ['sort' => ['date' => -1]];
  $mongoCollection = $mongoClient->comments;
  $resMongoQuery = $mongoCollection->find(
    $filter,
    $options
  );
  $arrComments = $resMongoQuery->toArray();

  foreach ($arrComments as $key => $value) {
    $id = uniqid();
    $filter =  ['id' => $value['id_user']];
    $mongoCollection = $mongoClient->users;
    $resMongoQuery = $mongoCollection->findOne(
      $filter
    );

    $user = $resMongoQuery;

    $filter =  ['parent' => $value['id'], 'id_itens' => $id_itens];
    $mongoCollection = $mongoClient->comments;
    $resMongoQuery = $mongoCollection->find(
      $filter
    );

    $arrsons = $resMongoQuery->toArray();
    clog($arrsons);




    $GLOBALS['strComments'] .= '
    
    <details
    ' . (!$value['parent'] ? "open" : "") . '
    class="comment">

    <a  class="comment-border-link">
    <span class="sr-only">Jump to comment-2</span>
  </a>
    
      <summary>
        <div class="comment-heading">
        <div class="comment-author comment-img" >
        <div style="max-width: 70px;     padding-left: 5px;" class="thumbnail ">
          <img class="comment-avatar" style="    border-radius: 10px;
          width: 53px;
          height: 52px;
          object-fit: cover;" src="' . $url . '/upload/profiles/' . $user['id'] . '/avatars/' . $user['avatar'] . '" alt="Comment Image">
          </div>
          </div>
          <div class="comment-info">
         
            <a href="' . getUrlFriendly('author.php?id=' . $user['id'], $config, $mongoClient) . '" class="comment-author">' . $user['usernameF'] . '</a>
            <p class="m-0">
            ' . count($value['likes']) . ' likes &bull; ' . formatTimeStamp($value['date']) . '
            </p>
          </div>
    
      </summary>
    
      <div class="comment-body" style="">
        <p id="desc-' . $value['id'] . '">' . $value['description'] . '</p>
        <div class="reply" style="display:flex;display: flex;width: 100%;justify-content: space-between;">
        <div style="display:flex;">';

    if ($_SESSION['uId'] != -1) {
      $GLOBALS['strComments'] .= '  <button type="button" class="BtnR" style="border-radius: 20px; background: rgb(23, 139, 206);color: white;height: 30px;width: 85px;" data-toggle="reply-form-' . $value['id'] . '"    id="' . $value['id'] . '"> <i class="rbt feather-corner-down-right"></i>Reply</button>';
    }

    if ($_SESSION['uId'] == $user['id']) {

      $GLOBALS['strComments'] .= ' <button type="button" class="BtnR" style="margin-left: 5px;border-radius: 20px; background: rgb(23, 139, 206);color: white;height: 30px;width: 34px;" data-toggle="edit-form-' . $value['id'] . '"    id="' . $value['id'] . '"> <i class="fa fa-pencil" aria-hidden="true"></i></button>
 <form onSubmit="deleteComment(`' . $value['id'] . '`); return false;" id="D-' . $value['id'] . '">
  <button type="submit" class="BtnR" style="margin-left: 5px;border-radius: 20px; background: rgb(23, 139, 206);color: white;height: 30px;width: 34px;" ><i class="fa fa-trash" aria-hidden="true"></i></button></form>';
    }


    $GLOBALS['strComments'] .= ' </div>


        <div>';


    if ($_SESSION['uId'] != -1) {
      $GLOBALS['strComments'] .= ' <form onSubmit="sendlike(`' . $value['id'] . '`); return false;" >';
      if (in_array($_SESSION['uId'], (array) $value['likes'])) {
        $GLOBALS['strComments'] .= '<button type="submit" name="like" id="btn-like-' . $value['id'] . '" class="BtnR blueColor2 btnLike" style="border-radius: 20px; background: rgb(23, 139, 206);color: white;height: 30px;width: 85px;margin-left: 10px;" > <i class="fa fa-thumbs-up" aria-hidden="true"></i><span id="l-' . $value['id'] . '">' . count($value['likes']) . '</span></button>';
      } else {
        $GLOBALS['strComments'] .= '<button type="submit"  name="like" id="btn-like-' . $value['id'] . '" class="BtnR btnLike" style="border-radius: 20px; background: rgb(23, 139, 206);color: white;height: 30px;width: 85px;margin-left: 10px;" > <i class="fa fa-thumbs-up" aria-hidden="true"></i><span id="l-' . $value['id'] . '">' . count($value['likes']) . '</span></button>';
      }
      $GLOBALS['strComments'] .= ' </form>';
    }

    $GLOBALS['strComments'] .= '   </div>
        
        </div>
    
        <!-- Reply form start -->
        <form onSubmit="sendComment(`' . $id . '`, `' . $value['id'] . '`); return false;" class="reply-form d-none pt-3" id="R-' . $value['id'] . '">

            <textarea id="comment-' . $id . '-R" name="comment" data-span="span-' . $id . '-R" placeholder="Reply to comment" style="border: solid 1px;border-radius: 7px;" class="mb-3 textarea" rows="3" required maxlength="' . $maxC . '" oninvalid="this.setCustomValidity(`Please, insert some text`)" oninput="setCustomValidity(``)"></textarea>
            <div style=" display: flex;  justify-content: space-between;   ">
<button type="submit" data-toggle="reply-form" data-target="AddComment" class="BtnR" style="border-radius: 20px; background: rgb(23, 139, 206);color: white;height: 30px;width: 85px;">Submit</button>
            <span id="span-' . $id . '-R">0/' . $maxC . '</span>
            </div>
            </form>
        <!-- Reply form end -->

        <!-- edit form start -->

        <form onSubmit="EditComment( `' . $value['id'] . '`); return false;" class="reply-form d-none pt-3" id="E-' . $value['id'] . '">

            <textarea id="comment-' . $value['id'] . '-E" name="comment" data-span="span-' . $id . '-E" placeholder="Edit your comment" style="border: solid 1px;border-radius: 7px;" class="mb-3 textarea" rows="3" required maxlength="' . $maxC . '" oninvalid="this.setCustomValidity(`Please, insert some text`)" oninput="setCustomValidity(``)"></textarea>
            <div style=" display: flex;  justify-content: space-between;   ">
            <button type="submit" data-toggle="edit-form" data-target="AddComment" class="BtnR" style="border-radius: 20px; background: rgb(23, 139, 206);color: white;height: 30px;width: 85px;">Submit</button>
            <span id="span-' . $id . '-E">' . strlen($value['description']) . '/' . $maxC . '</span>
            </div>
          </form>


        <!-- edit form end -->
      </div>';

    if (count($arrsons) > 0) {

      $GLOBALS['strComments'] .= '<div class="replies">';

      writeComments($id_itens, $config, $mongoClient, $parent = $value['id']);

      $GLOBALS['strComments'] .=  '</div>';

      $GLOBALS['strComments'] .= '</details>';
    } else {

      $GLOBALS['strComments'] .= '</details>';
    }
  };
}
$GLOBALS['strComments'] .= '
<script>
$(`textarea`).on(`keyup`, (e) => {
  if ($(e.target).hasClass(`textarea`)) {
    var maxlength = e.target.getAttribute("maxlength");
    const textArea = $(e.target);
    console.log((textArea.val()).length);
    var spanid = e.target.getAttribute(`data-span`);
    span = document.getElementById(spanid);
    span.textContent = (textArea.val()).length + "/" + maxlength;

  }
});</script>';



echo $GLOBALS['strComments'];
