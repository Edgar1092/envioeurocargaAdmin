<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListasUsuarios extends Model
{
    protected $table = 'tbl_listas_usuarios';
    protected $primaryKey = 'id';
    public $timestamps = false;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id','id_usuario', 'id_lista'
    ];

    // protected $appends = [
    //     'Archivo'
    // ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
    // public function archivo()
    // {
    //     return $this->hasMany(Archivo::class, 'id_lista');
    // }

    // public function getArchivoAttribute()
    // {
    //     $archivo = $this->archivo()->get();

    //     if(!empty($archivo))
    //     {
    //         return $archivo;
    //     }else{
    //         return '';
    //     }

    // }
}
