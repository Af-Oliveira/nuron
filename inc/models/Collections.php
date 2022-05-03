<?php
$arrDados = array(

    'collection' => 'Colletions',
    'order' => 'id',
    'label' => 'Colletions',

    'fields' => array(
        'id' => array(
            'label' => 'ID',
            'type' => 'hidden',
            'key' => 1,
            'insert' => 0,
            'edit' => 0,
            'value' => uniqid(),
        ),

        'name' => array(
            'label' => 'Insert the name of your collection',
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
            'label' => 'Is this collection private?',
            'type' => 'active',
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'user' => array(
            'label' => 'User id',
            'type' => 'Textbox',
            'key' => 0,
            'insert' => 0,
            'edit' => 0
        ),


    )
);
