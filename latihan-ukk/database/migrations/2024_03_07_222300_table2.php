<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up()
  {
    Schema::create('section', function (Blueprint $table) {
      $table->id();
      $table->bigInteger('student_id')->unsigned()->index()->nullable();
      $table->foreign('student_id')->references('id')->on('student')->onDelete('cascade');
      $table->string('section')->nullable();
      $table->string('stream')->nulable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    //
  }
};
