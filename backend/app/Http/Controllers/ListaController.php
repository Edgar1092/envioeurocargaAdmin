<?php

namespace App\Http\Controllers;

use App\Lista;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Config;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Image;

class ListaController extends Controller
{

    private $NAME_CONTROLLER = 'listaController';
        // Obtener todos los lista //
        function getAll(Request $request){
            try{
                $request->validate([
                    'per_page'      =>  'nullable|integer',
                    'page'          =>  'nullable|integer'
                ]);  
                $per_page = (!empty($request->per_page)) ? $request->per_page : Lista::count();
                $result = Lista::orderBy('id','desc')->paginate($per_page);
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
        // Obtener un lista
        function get($id){
            try{
    
                DB::beginTransaction(); // Iniciar transaccion de la base de datos
                $result = Lista::find($id);
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

        // Obtener un lista por  estatus activo
        function getActiva(){
            try{
    
                DB::beginTransaction(); // Iniciar transaccion de la base de datos
                $result = Lista::where('status',1)->first();
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

    // Crear noticia //
    function create(Request $request){
        if($request->imagen!=''){
            $nombreImagen=time().$request->nombre_imagen;
            $resized_image = Image::make($request->imagen)->stream('png', 60);
            
            Storage::disk('local')->put('\\public\\noticias\\'.$nombreImagen, $resized_image); // check return for success and failure
        }else{
            $nombreImagen='';
           
        }
        try{
         
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $lista = Lista::create([
                'titulo'    => $request->titulo,
                'descripcion'     => $request->descripcion,
                'imagen'  => $nombreImagen

            ]);

            DB::commit(); // Guardamos la transaccion
            return response()->json($lista,201);
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


   
    // Modificar listas
    function update(Request $request){
        if($request->imagen!=''){
            $nombreImagen=time().$request->nombre_imagen;
            $resized_image = Image::make($request->imagen)->stream('png', 60);
            
            Storage::disk('local')->put('\\public\\listas\\'.$nombreImagen, $resized_image); // check return for success and failure
        }else{
            $nombreImagen='';
           
        }
         try{
        
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $lista = Lista::find($request->id);
            $lista->titulo  = $request->titulo;
            $lista->descripcion = $request->descripcion;
            $lista->imagen = $nombreImagen;
            $lista->save();
            DB::commit(); // Guardamos la transaccion
            return response()->json($lista,200);
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


    // Eliminar lista
    function delete($id){
        try{

            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $lista = Lista::find($id);
            $lista->delete();
            DB::commit(); // Guardamos la transaccion
            return response()->json("lista Delete",200);
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
   
}
