<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
  public function auth(Request $request)
  {
    $check = $request->validate([
      'username' => 'required',
      'password' => 'required'
    ]);

    if (Auth::attempt($check)) {
      $request->session()->regenerate();
      return redirect()->intended('/dashboard');
    }
    return back()->with('loginError', 'Login Error');
  }
}
