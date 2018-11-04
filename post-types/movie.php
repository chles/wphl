<?php

/**
 * Registers the `movie` post type.
 */
function movie_init() {
	register_post_type( 'movie', array(
		'labels'                => array(
			'name'                  => __( 'Movies', 'wphl' ),
			'singular_name'         => __( 'Movie', 'wphl' ),
			'all_items'             => __( 'All Movies', 'wphl' ),
			'archives'              => __( 'Movie Archives', 'wphl' ),
			'attributes'            => __( 'Movie Attributes', 'wphl' ),
			'insert_into_item'      => __( 'Insert into movie', 'wphl' ),
			'uploaded_to_this_item' => __( 'Uploaded to this movie', 'wphl' ),
			'featured_image'        => _x( 'Featured Image', 'movie', 'wphl' ),
			'set_featured_image'    => _x( 'Set featured image', 'movie', 'wphl' ),
			'remove_featured_image' => _x( 'Remove featured image', 'movie', 'wphl' ),
			'use_featured_image'    => _x( 'Use as featured image', 'movie', 'wphl' ),
			'filter_items_list'     => __( 'Filter movies list', 'wphl' ),
			'items_list_navigation' => __( 'Movies list navigation', 'wphl' ),
			'items_list'            => __( 'Movies list', 'wphl' ),
			'new_item'              => __( 'New Movie', 'wphl' ),
			'add_new'               => __( 'Add New', 'wphl' ),
			'add_new_item'          => __( 'Add New Movie', 'wphl' ),
			'edit_item'             => __( 'Edit Movie', 'wphl' ),
			'view_item'             => __( 'View Movie', 'wphl' ),
			'view_items'            => __( 'View Movies', 'wphl' ),
			'search_items'          => __( 'Search movies', 'wphl' ),
			'not_found'             => __( 'No movies found', 'wphl' ),
			'not_found_in_trash'    => __( 'No movies found in trash', 'wphl' ),
			'parent_item_colon'     => __( 'Parent Movie:', 'wphl' ),
			'menu_name'             => __( 'Movies', 'wphl' ),
		),
		'public'                => true,
		'hierarchical'          => false,
		'show_ui'               => true,
		'show_in_nav_menus'     => true,
		'supports'              => array( 'title', 'editor' ),
		'has_archive'           => true,
		'rewrite'               => true,
		'query_var'             => true,
		'menu_icon'             => 'dashicons-admin-post',
		'show_in_rest'          => true,
		'rest_base'             => 'movie',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	) );

}
add_action( 'init', 'movie_init' );

/**
 * Sets the post updated messages for the `movie` post type.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `movie` post type.
 */
function movie_updated_messages( $messages ) {
	global $post;

	$permalink = get_permalink( $post );

	$messages['movie'] = array(
		0  => '', // Unused. Messages start at index 1.
		/* translators: %s: post permalink */
		1  => sprintf( __( 'Movie updated. <a target="_blank" href="%s">View movie</a>', 'wphl' ), esc_url( $permalink ) ),
		2  => __( 'Custom field updated.', 'wphl' ),
		3  => __( 'Custom field deleted.', 'wphl' ),
		4  => __( 'Movie updated.', 'wphl' ),
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( __( 'Movie restored to revision from %s', 'wphl' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		/* translators: %s: post permalink */
		6  => sprintf( __( 'Movie published. <a href="%s">View movie</a>', 'wphl' ), esc_url( $permalink ) ),
		7  => __( 'Movie saved.', 'wphl' ),
		/* translators: %s: post permalink */
		8  => sprintf( __( 'Movie submitted. <a target="_blank" href="%s">Preview movie</a>', 'wphl' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
		/* translators: 1: Publish box date format, see https://secure.php.net/date 2: Post permalink */
		9  => sprintf( __( 'Movie scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview movie</a>', 'wphl' ),
		date_i18n( __( 'M j, Y @ G:i' ), strtotime( $post->post_date ) ), esc_url( $permalink ) ),
		/* translators: %s: post permalink */
		10 => sprintf( __( 'Movie draft updated. <a target="_blank" href="%s">Preview movie</a>', 'wphl' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
	);

	return $messages;
}
add_filter( 'post_updated_messages', 'movie_updated_messages' );
