<?php
$arrDados = array(

    'collection' => 'itens',
    'order' => 'id',
    'label' => 'itens',

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

        'name' => array(
            'label' => 'Insert the name of your item',
            'type' => 'textbox',
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'discription' => array(
            'label' => 'Insert the discription of your item',
            'type' => 'textarea',
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
            'type' => 'tag_multiselect',
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'catgories' => array(
            'label' => 'Select the catgories of your item',
            'type' => 'multiselect',
            'accept_in' => array(
                'min' => '1',
                'max' => '4',
            ),
            'select_colletion' => array(
                'collection' => 'categories',
                'field' => 'label',
                'filter' => array('active' => 1),
                'to_save' => 'id',
                'key' => 'id',
                'max_selected_options' => 5,
            ),
            'key' => 0,
            'insert' => 1,
            'edit' => 1,
        ),

        'collection' => array(
            'label' => 'Does this item belong to a collection?',
            'type' => 'multiselect',
            'select_colletion' => array(
                'collection' => 'collection',
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

        'NSFW' => array(
            'label' => 'Mature content',
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
