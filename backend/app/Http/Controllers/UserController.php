<?php

namespace App\Http\Controllers;


use App\User;
use App\Company;
use App\ProfileModule;
use App\Profile;
use App\PartList;
use App\Remitos;
use App\Mail\Prueba;
use App\HistorialJobs;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Config;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    private $NAME_CONTROLLER = 'UserController';
    // Obtener todos los usuarios //
    function getAll(Request $request){
        try{
            $request->validate([
                'per_page'      =>  'nullable|integer',
                'page'          =>  'nullable|integer'
            ]);  
            $per_page = (!empty($request->per_page)) ? $request->per_page : User::count();
            $result = User::orderBy('id','desc')->paginate($per_page);
            $response = $result;   

            if($result->isEmpty()){
                return response()->json([
                    'msj' => 'No se encontraron registros.',
                ], 200); 
            }
            return response()->json($response);
        }catch (\Exception $e) {
            Log::error('Ha ocurrido un error en '.$this->NAME_CONTROLLER.': '.$e->getMessage().', Linea: '.$e->getLine());
            return response()->json([
                'message' => 'Ha ocurrido un error al tratar de guardar los datos.',
            ], 500);
        }
    }
    function getUsuarios(Request $request){
        try{

            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $result = User::get();
            $response = $result;   

            DB::commit(); // Guardamos la transaccion
            return response()->json($response);
        }catch (\Exception $e) {
            if($e instanceof ValidationException) {
                return response()->json($e->errors(),402);
            }
            DB::rollback(); // Retrocedemos la transaccion
            Log::error('Ha ocurrido un error en '.$this->NAME_CONTROLLER.': '.$e->getMessage().', Linea: '.$e->getLine());
            return response()->json([
                'message' => 'Ha ocurrido un error al tratar de guardar los datos.',
            ], 500);
        }
    }
    function get($id){
        try{

            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $result = User::find($id);
            $response = $result;   

            DB::commit(); // Guardamos la transaccion
            return response()->json($response);
        }catch (\Exception $e) {
            if($e instanceof ValidationException) {
                return response()->json($e->errors(),402);
            }
            DB::rollback(); // Retrocedemos la transaccion
            Log::error('Ha ocurrido un error en '.$this->NAME_CONTROLLER.': '.$e->getMessage().', Linea: '.$e->getLine());
            return response()->json([
                'message' => 'Ha ocurrido un error al tratar de guardar los datos.',
            ], 500);
        }
    }
    // Crear usuario //
    function create(Request $request){
        try{
            if (User::where('email', '=', $request->email)->exists()){  
                return response()->json(['message' => 'Este usuario ya existe y se encuentra activo.',], 402);

            }  
            // Validador //
       
       
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $user = User::create([
                'name'    => $request->name,
                'email'     => $request->email,
                'password'  => Hash::make($request->password),
                'token'  => '',
      


            ]);
            DB::commit(); // Guardamos la transaccion
            return response()->json($user,201);
        }catch (\Exception $e) {
            if($e instanceof ValidationException) {
                return response()->json($e->errors(),402);
            }
            DB::rollback(); // Retrocedemos la transaccion
            Log::error('Ha ocurrido un error en '.$this->NAME_CONTROLLER.': '.$e->getMessage().', Linea: '.$e->getLine());
            return response()->json([
                'message' => 'Ha ocurrido un error al tratar de guardar los datos.',
            ], 500);
        }
    }


   
    // Modificar usuarios
    function update(Request $request){
         try{
            $userVal = User::find($request->id);      
            // Validador //
            $request->validate([
                'id' => 'required|Numeric',
                'name' => 'required|max:124',
                'email' => 'required|email|max:124'
            ]);  
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $user = User::find($request->id);
            $user->name  = $request->name;
            $user->email = $request->email;
            if($user->password !=''){
            $user->password = Hash::make($request->password);
            }
            $user->save();
            DB::commit(); // Guardamos la transaccion

            return response()->json($user,200);
        }catch (\Exception $e) {
            if($e instanceof ValidationException) {
                return response()->json($e->errors(),402);
            }
            DB::rollback(); // Retrocedemos la transaccion
            Log::error('Ha ocurrido un error en '.$this->NAME_CONTROLLER.': '.$e->getMessage().', Linea: '.$e->getLine());
            return response()->json([
                'message' => 'Ha ocurrido un error al tratar de guardar los datos.',
            ], 500);
        }
    }


        // Validar clave actual usuarios
    function ValidadorPass(Request $request){
               $userVal = User::find($request->idUser);
               if (Hash::check($request->pswdAct, $userVal->password))
               {
                   echo true;
               }else{
                   echo "false";
               }
     
    }


    // Eliminar usuarios
    function delete($idUser){
        try{
            if($idUser < 1){
                return response()->json(['message' => 'id is required.',], 402);
            }
            $confirm = User::find($idUser);

            // if($confirm->token!=''){
            //     return response()->json(['message' => 'No se puede eliminar un usuario Autenticado.',], 402);
            // }
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $user = User::find($idUser);
            $user->delete();
            DB::commit(); // Guardamos la transaccion
            return response()->json("User Delete",200);
        }catch (\Exception $e) {
            if($e instanceof ValidationException) {
                return response()->json($e->errors(),402);
            }
            DB::rollback(); // Retrocedemos la transaccion
            Log::error('Ha ocurrido un error en '.$this->NAME_CONTROLLER.': '.$e->getMessage().', Linea: '.$e->getLine());
            return response()->json([
                'message' => 'Ha ocurrido un error al tratar de guardar los datos.',
            ], 500);
        }
    }


    // Buscar usuarios por id
    function first($idUser){
        try{
            if($idUser < 1){
                return response()->json(['message' => 'id is required.',], 402);
            }
             DB::beginTransaction(); // Iniciar transaccion de la base de datos
             $user = User::find($idUser);
             DB::commit(); // Guardamos la transaccion
             return response()->json($user,200);
         }catch (\Exception $e) {
             if($e instanceof ValidationException) {
                 return response()->json($e->errors(),402);
             }
             DB::rollback(); // Retrocedemos la transaccion
             Log::error('Ha ocurrido un error en '.$this->NAME_CONTROLLER.': '.$e->getMessage().', Linea: '.$e->getLine());
             return response()->json([
                 'message' => 'Ha ocurrido un error al tratar de guardar los datos.',
             ], 500);
         }
    }

    function auth(Request $request){
        try{
            $request->validate([
                'password' => 'required|max:124',
                'email' => 'required|email|max:124',
                ]);
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $user =  User::where('email',$request->email)->first();
            if($user == null){
                return response()->json(['message' => 'Usuario o clave invalida.',], 402);
            }
            $user->token = str_random(30);
            $user->save();
            DB::commit(); // Guardamos la transaccion
            if($user && Hash::check($request->password,$user->password)){
                return response()->json($user,200);
            }else{
                return response()->json(['message' => 'Usuario o clave invalida.',], 402);
            }
        }catch (\Exception $e) {
            if($e instanceof ValidationException) {
                return response()->json($e->errors(),402);
            }
            DB::rollback(); // Retrocedemos la transaccion
            Log::error('Ha ocurrido un error en '.$this->NAME_CONTROLLER.': '.$e->getMessage().', Linea: '.$e->getLine());
            return response()->json([
                'message' => 'Ha ocurrido un error al tratar de guardar los datos.',
            ], 500);
        }
    }

    function authAPP(Request $request){
        try{
            $request->validate([
             
                'email' => 'required|email|max:124',
                ]);
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $user =  User::where('email',$request->email)->first();
            if($user == null){
                return response()->json(['message' => 'Usuario no existe.',], 402);
            }
            $user->token = str_random(30);
            $user->save();
            DB::commit(); // Guardamos la transaccion
            if($user){
                return response()->json($user,200);
            }else{
                return response()->json(['message' => 'Usuario no existe.',], 402);
            }
        }catch (\Exception $e) {
            if($e instanceof ValidationException) {
                return response()->json($e->errors(),402);
            }
            DB::rollback(); // Retrocedemos la transaccion
            Log::error('Ha ocurrido un error en '.$this->NAME_CONTROLLER.': '.$e->getMessage().', Linea: '.$e->getLine());
            return response()->json([
                'message' => 'Ha ocurrido un error al tratar de guardar los datos.',
            ], 500);
        }
    }


    // Validamos token
    static function validateToken($token){
        try{
            if($token == null){
                return false;
            }
             DB::beginTransaction(); // Iniciar transaccion de la base de datos
             $user = User::where('token','=',$token)->count();
             DB::commit(); // Guardamos la transaccion
             if($user > 0){
                return true;
             }else{
                return false;
             }
         }catch (\Exception $e) {
             if($e instanceof ValidationException) {
                 return response()->json($e->errors(),402);
             }
             DB::rollback(); // Retrocedemos la transaccion
             Log::error('Ha ocurrido un error en UserController: '.$e->getMessage().', Linea: '.$e->getLine());
             return response()->json([
                 'message' => 'Ha ocurrido un error al tratar de guardar los datos.',
             ], 500);
         }
    }


    // Modificar Contrasena
        function changePassword(Request $request){
                if($request ==''){   
                     return response()->json(['message' => 'Parametro Email es requerido.',], 402);
                }
                $clave= str_random(10);
                if (User::where('email', '=', $request->email)->exists()) {                
                    $email=$request->email;
                    //DB::beginTransaction(); // Iniciar transaccion de la base de datos
                    $user = User::where('email',$email)->first();
                    $user->password = Hash::make($clave);
                    $user->save();
                    $data = ['clave' => $clave,
                            'Nombre' => $user->name   
                            ];
                    Mail::send('Mail.password',$data, function($msj) use ($email){
                            $msj->subject('Contraseña');
                            $msj->to($email);
                    });
                    $response = [
                        'msj'       => 'Si eres un usuario de RepoStock, verifica tu dirección de correo:"' .$request->email.'"'
                    ];
                    return response()->json($response, 200);
                }else{
                    $response = [
                        'msj'       => 'Si eres un usuario de RepoStock, verifica tu dirección de correo:"' .$request->email.'"'
                    ];
                    return response()->json($response, 200);               
                }

             }



    
}
