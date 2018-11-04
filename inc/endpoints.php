<?php

/**
 * Add custom endpoint : GET movie CPT raw datas
 */
function get_raw_movies_list(){
    $args = array(
        'post_type'     => 'movie',
        'post_status'   => 'publish',
        'post_per_page' => -1,
        'numberposts'   => -1
    );
    $movies = get_posts($args);
    
    if( $movies ):
        $rawsmoviesdatas = array_map('get_raw_movies_datas', $movies);
        return $rawsmoviesdatas;
    endif;

    return NULL;
}
function get_raw_movies_datas($m){
    return [
        'id'    => strval($m->ID),
        'title' => $m->post_title
    ];
}
add_action( 'rest_api_init', function(){
    register_rest_route( 'wphl/v2' , 'rawmovieslist' , array(
        'method'   => 'GET',
        'callback' => 'get_raw_movies_list'
    ) );
} );