@extends('layouts/main')
@section('container')

@if(session()->has('loginError'))
<p>error login</p>
@endif
<div class="container">
  <form action="/login" method="post">
    @csrf
    <input type="text" name="username" placeholder="username">
    <input type="password" name="password" placeholder="password">
    <button type="submit">Login</button>
  </form>
  <a href="/register">Register</a>
</div>
@endsection