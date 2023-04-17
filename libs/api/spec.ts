/**
 * @api (Posts) {get} /api/posts/:start/:end Get posts within a range
*  @apiParam {Number} start Start of the range
*  @apiParam {Number} end End of the range
 */

/**
 * @api (Posts) {get} /api/posts/:userId/:postId Get single post
*  @apiParam {Number} userId The relevant user id (author of post).
*  @apiParam {Number} postId The relevant post id.
 */

/**
 * @api (Posts) {patch} /api/posts/:ownerId/:userId/:postId Like a post
*  @apiParam {Number} userId The person liking the post
*  @apiParam {Number} postId The id of the specific post made by the user.
*  @apiParam {Number} ownerId The author of the post
 */

/**
 * @api (Posts) {put} /api/posts/:ownerId/:userId/:postId Add comment
*  @apiParam {Number} ownerId Owner of the post
*  @apiParam {Number} userId Commenter user id
*  @apiParam {Number} postId The id of the specific post made by the user.
 */
