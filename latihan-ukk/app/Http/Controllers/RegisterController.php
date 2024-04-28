<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
  public function index()
  {
    return view('register', [
      'title' => 'register'
    ]);
  }

  public function auth(Request $request)
  {
    $validateData = $request->validate([
      'name' => 'required',
      'username' => 'required',
      'email' => 'required',
      'password' => 'required'
    ]);
    $validateData['password'] = Hash::make($validateData['password']);
    User::create($validateData);
    return redirect('/login')->
  }
}
