<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tb_users')->insert([
            'name' => 'ADMIN',
            'email' => 'Admin@admin.com',
            'password' => Hash::make('ADMIN'),
            'token' => ''     
            
        ]);
       
    }
}
