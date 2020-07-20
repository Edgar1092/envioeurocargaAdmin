<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lista extends Model
{
    protected $table = 'tbl_listas';
    protected $primaryKey = 'id';
    public $timestamps = false;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre','descripcion', 'status','desde','hasta'
    ];

    // protected $appends = [
    //     'Detalle'
    // ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
    // public function detalle()
    // {
    //     return $this->hasOne(DetalleNoticia::class, 'idnoticia');
    // }

    // public function getDetalleAttribute()
    // {
    //     $detalle = $this->detalle()->first();

    //     if(!empty($detalle))
    //     {
    //         return $detalle;
    //     }else{
    //         return '';
    //     }

    // }
}
