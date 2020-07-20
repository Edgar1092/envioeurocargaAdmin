<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\PartListExport;


// Route::get('/', function () {
//     return Excel::download(new PartlistExport, 'Partlist.xlsx');
// });


Route::get('/Api/auth/users/exportCertificate', function () {
    return \File::get(public_path() . '/docs/index.html');
});