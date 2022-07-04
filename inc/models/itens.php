<?php
$arrDados = array(

    'collection' => 'itens',
    'order' => 'id',
    'label' => 'art',

    'fields' => array(
        'id' => array(
            'label' => 'ID',
            'type' => 'hidden',
            'key' => 1,
            'insert' => 1,
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
                'collection' => 'itens',
            ),
            'validation' => 'Please, provide at least one valid image.',
            'min_select' => 1,
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
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

        'tags-regular' => array(
            'label' => 'Insert some tags that discrive your item',
            'accept_in' => array(
                'min' => '0',
                'max' => '10',
            ),
            'min_select' => 3,
            'validation' => 'Please, provide at least three valid tag.',
            'type' => 'tag_multiselect',
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'categories' => array(
            'label' => 'Select the categories of your item',
            'type' => 'multiselect',
            'select_colletion' => array(
                'collection' => 'categories',
                'field' => 'label',
                'filter' => array('active' => 1),
                'to_save' => 'id',
                'key' => 'id',
                'max_selected_options' => 5,
            ),
            'validation' => 'Please, provide at leat one valid category.',
            'min_select' => 1,
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'collection' => array(
            'label' => 'Does this item belong to a collection?',
            'type' => 'multiselect',
            'select_colletion' => array(
                'collection' => 'collections',
                'field' => 'name',
                'filter' => array('user' => $_SESSION['uId']),
                'to_save' => 'id',
                'key' => 'id',
                'missing' => 'No collections',
            ),
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'private' => array(
            'label' => 'Is this item private?',
            'type' => 'active',
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
        'likes' => array(
            'type' => 'hidden',
            'value' => '[]',
            'insert' => 1,
            'edit' => 0,
        ),
        'views' => array(
            'type' => 'hidden',
            'value' => '[]',
            'insert' => 1,
            'edit' => 0,
        ),
        'date' => array(
            'type' => 'hidden',
            'value' => '' . time() . '',
            'insert' => 1,
            'edit' => 0,
        ),

    ),
);
