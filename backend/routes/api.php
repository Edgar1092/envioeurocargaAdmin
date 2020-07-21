<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
/*
|--------------------------------------------------------------------------
| Usuarios
|--------------------------------------------------------------------------
*/
Route::post('auth/login','UserController@auth')->middleware('cors');
 Route::post('auth/register','UserController@create');
  Route::post('auth/users/update','UserController@update');
    Route::delete('auth/users/delete/{idUser}','UserController@delete');
	Route::get('users','UserController@getAll');
	Route::get('users/{id}','UserController@get');
	Route::post('users/update','UserController@update');
	Route::post('users/create','UserController@create');
	Route::delete('users/{id}','UserController@delete');

Route::group(['middleware' => ['cors']], function () {// Todo lo que esta adentro de este middleware requeire auteticacion

	
	Route::get('lista/get/{id}','ListaController@get');
	Route::get('lista/get/activa','ListaController@getActiva');
	Route::get('lista/get','ListaController@getAll');
	Route::post('lista/create','ListaController@create');
	Route::post('lista/update','ListaController@update');
	Route::post('lista/delete','ListaController@delete');


});
