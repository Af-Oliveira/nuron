<?php
$arrDados = array(

    'collection' => 'posts',
    'order' => 'id',
    'label' => 'posts',

    'fields' => array(
        'id' => array(
            'label' => 'ID',
            'type' => 'hidden',
            'key' => 1,
            'insert' => 0,
            'edit' => 0,
            'value' => uniqid(),
        ),

        'images' => array(
            'label' => 'Images',
            'type' => 'file',
            'filedetail' => array(
                'Mnumber' => 3,
                'type' => array('image/*'),
                'folder' => 'profiles/' . $_SESSION['uId'] . '/itens',
            ),
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'title' => array(
            'label' => 'Insert the tittle of post',
            'type' => 'textbox',
            'key' => 0,
            'insert' => 1,
            'edit' => 1
        ),

        'discription' => array(
            'label' => 'Insert the discription of your collection',
            'type' => 'textarea',
            'key' => 0,
            'insert' => 1,
            'edit' => 1
        ),

        'private' => array(
            'label' => 'Is this Post private?',
            'type' => 'active',
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'user' => array(
            'type' => 'hidden',
            'value' => '' . $_SESSION['uId'] . '',
            'insert' => 1,
        ),
        'date' => array(
            'type' => 'hidden',
            'value' => '' . time() . '',
            'insert' => 1,
        ),


    )
);
