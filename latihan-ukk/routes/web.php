<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
  return view('login', [
    'title' => 'Login'
  ]);
});
Route::get('/register', [RegisterController::class, 'index']);

Route::post('/login', [LoginController::class, 'auth']);
Route::post('/register', [RegisterController::class, 'auth']);


Route::get('/dashboard', [DashboardController::class, 'index']);
