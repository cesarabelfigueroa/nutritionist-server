/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /entries': { action: 'entries/list' },
  'POST /entries': { action: 'entries/create' },
  'DELETE /entries': { action: 'entries/delete' },
  'PATCH /entries': { action: 'entries/update' }

  /*
  
    '/': { view: 'pages/homepage' },
    'GET /users': {action: 'users/list'},
    'POST /users': {action: 'users/create'},
    'DELETE /users': {action: 'users/delete'},
    'PATCH /users': {action: 'users/update'}
  
    '/': { view: 'pages/homepage' },
    'GET /entries': {action: 'entries/list'},
    'POST /entries': {action: 'entries/create'},
    'DELETE /entries': {action: 'entries/delete'},
    'PATCH /entries': {action: 'entries/update'}
  */

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
