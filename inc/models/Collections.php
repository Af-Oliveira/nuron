<?php
$arrDados = array(

    'collection' => 'collections',
    'order' => 'id',
    'label' => 'collections',

    'fields' => array(
        'id' => array(
            'label' => 'ID',
            'type' => 'hidden',
            'key' => 1,
            'insert' => 1,
            'edit' => 0,
            'value' => uniqid(),
        ),

        'name' => array(
            'label' => 'Insert the name of your item.',
            'type' => 'textbox',
            'Max_length' => 70,
            'validation' => 'Please, provide a valid name.',
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'description' => array(
            'label' => 'Insert the discription of your item',
            'type' => 'textarea',
            'Max_length' => 500,
            'validation' => 'Please, provide a valid description.',
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'user' => array(
            'type' => 'hidden',
            'value' => '' . $_SESSION['uId'] . '',
            'decode' => false,
            'insert' => 1,
            'edit' => 0,
        ),

        'private' => array(
            'label' => 'Is this item private?',
            'type' => 'active',
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'date' => array(
            'type' => 'hidden',
            'value' => '' . time() . '',
            'insert' => 1,
            'edit' => 0,
        ),


    )
);
