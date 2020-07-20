<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tbl_listas', function (Blueprint $table) {
            $table->bigIncrements('id')->unique();
            $table->string('nombre')->nullable();
            $table->string('descripcion')->nullable();
            $table->date('desde');
            $table->date('hasta');
            $table->integer('estatus')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tbl_listas');
    }
}
