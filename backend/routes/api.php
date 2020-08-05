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
Route::post('auth/loginAPP','UserController@authAPP')->middleware('cors');
 Route::post('auth/register','UserController@create');
  Route::post('auth/users/update','UserController@update');
    Route::delete('auth/users/delete/{idUser}','UserController@delete');
	Route::get('users','UserController@getAll');
	Route::get('users/{id}','UserController@get');
	Route::post('users/update','UserController@update');
	Route::post('users/create','UserController@create');
	Route::delete('users/{id}','UserController@delete');
	Route::post('users/usuarios','UserController@getUsuarios');
Route::group(['middleware' => ['cors']], function () {// Todo lo que esta adentro de este middleware requeire auteticacion

	
	Route::post('lista/getLista','ListaController@get');
	Route::get('lista/getActiva','ListaController@getActiva');
	Route::post('lista/get/activa/app','ListaController@getActivaAPP');
	Route::get('lista/get','ListaController@getAll');
	Route::post('lista/create','ListaController@create');
	Route::post('lista/update','ListaController@update');
	Route::post('lista/delete','ListaController@delete');
	Route::post('lista/borrar','ListaController@borrar');
	Route::post('lista/activarInactivar','ListaController@activarInactivar');
	Route::post('lista/updateOrden','ListaController@updateOrden');
	Route::post('lista/updateOrdenArchivo','ListaController@updateOrdenArchivo');

});
