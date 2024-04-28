@extends('layouts/main')
@section('container')
<div class="container">
  <form action="/register" method="post">
    @csrf
    <input type="text" placeholder="name" name="name">
    <input type="text" placeholder="username" name="username">
    <input type="text" placeholder="email" name="email">
    <input type="password" placeholder="password" name="password">
    <button type="submit">Register</button>
  </form>
</div>
@endsection