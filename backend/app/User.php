<?php

namespace App;
use Illuminate\Database\Eloquent\Model;


class User extends Model
{

    protected $table = 'tbl_users';
    protected $primaryKey = 'id';
    public $timestamps = false;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id','first_name','last_name', 'email', 'password','token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        // 'password',
        // 'created_at',
        // 'updated_at'
    ];


}
