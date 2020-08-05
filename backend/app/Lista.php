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
        'nombre','descripcion', 'estatus','desde','hasta','orden'
    ];

    protected $appends = [
        'Archivo',
        'Usuario'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

    ];
    public function archivo()
    {
        return $this->hasMany(Archivo::class, 'id_lista');
    }

    public function getArchivoAttribute()
    {
        $archivo = $this->archivo()->orderBy('orden','asc')->get();

        if(!empty($archivo))
        {
            return $archivo;
        }else{
            return '';
        }

    }

    public function usuario()
    {
        return $this->hasMany(ListasUsuarios::class, 'id_lista');
    }

    public function getUsuarioAttribute()
    {
        $usuario = $this->usuario()
        ->join('tbl_users','tbl_users.id', '=', 'tbl_listas_usuarios.id_usuario')
        ->select('tbl_listas_usuarios.id as idListasUsuarios','tbl_users.*')
        ->get();

        if(!empty($usuario))
        {
            return $usuario;
        }else{
            return '';
        }

    }
}
