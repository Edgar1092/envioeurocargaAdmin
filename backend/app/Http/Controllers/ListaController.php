<?php

namespace App\Http\Controllers;

use App\Lista;
use App\ListasUsuarios;
use App\Archivo;
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
        function get(Request $request){
            try{
    
                DB::beginTransaction(); // Iniciar transaccion de la base de datos
                $result = Lista::find($request->id);
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
        function getActiva(Request $request){
            try{
    
                DB::beginTransaction(); // Iniciar transaccion de la base de datos
                $result = Lista::where('estatus',1)->first();
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
        function getActivaAPP(Request $request){
            try{
    $arreglo=array();
                DB::beginTransaction(); // Iniciar transaccion de la base de datos
                $result = Lista::
                join('tbl_listas_usuarios','tbl_listas.id', '=', 'tbl_listas_usuarios.id_lista')
                ->select('tbl_listas_usuarios.id as idListasUsuarios','tbl_listas.*')
                ->where('tbl_listas.estatus',1)->where('tbl_listas_usuarios.id_usuario',$request->id_usuario)->get();
                $response = $result;   

                foreach($response as $respo){

                	// var_dump($respo);
                	foreach($respo['Archivo'] as $arch){
						array_push($arreglo, $arch);
                	}
                	
                }
    
                DB::commit(); // Guardamos la transaccion
                return response()->json($arreglo);
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
        try{
            
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $lista = Lista::create([
                'nombre'    => $request->nombre,
                'descripcion'     => $request->descripcion,
                'estatus' => $request->status,
                'desde' => $request->desde,
                'hasta' => $request->hasta,

            ]);
            if($request->archivos){
              $archivos = json_decode($request->archivos);
              foreach ($archivos as $key => $value) {
                $n = str_replace(" ", "_", self::eliminar_acentos($value->nombre));
                if($value->tipo == 0){
                    $tipo=0;
                    $resized_image = Image::make($value->imagen_guardar)->stream('png', 60);
                    Storage::disk('local')->put('\\public\\archivos\\'.time()."_".strtolower($n), $resized_image);
                    $nombreImagen=strtolower($n);
                }else{
                    $tipo=1;
                    $resized_image = base64_decode($value->imagen_guardar);
                    Storage::disk('local')->put('\\public\\archivos\\'.time()."_".strtolower($n), $resized_image);
                    $nombreImagen=time()."_".strtolower($n);
                }

                $arch = Archivo::create([
                    'ruta'    => $nombreImagen,
                    'id_lista'     => $lista->id,
                    'tipo' => $tipo,
                    'tiempo' => $value->tiempo,
                    'tipoTiempo' => $value->tipoTiempo,
                    'orden' => $value->orden
    
                ]);
              } 
            }

            if($request->usuario_id){
                
                $usuarios = json_decode($request->usuario_id);
              
                foreach ($usuarios as $key => $value) {
                 
                  $arch1 = ListasUsuarios::create([
                      'id_usuario'    => $value->id,
                      'id_lista'     => $lista->id
      
                  ]);
                } 
              }
            
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
         try{
   
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $lista = Lista::find($request->id);
            $lista->nombre  = $request->nombre;
            $lista->descripcion = $request->descripcion;
            $lista->desde = $request->desde;
            $lista->hasta = $request->hasta;
            $lista->estatus = $request->status;

            if($request->archivos){
                $archivos = json_decode($request->archivos);
                foreach ($archivos as $key => $value) {
                $str =self::eliminar_acentos($value->nombre);
                $n = str_replace(" ", "_", $str);
                  if($value->tipo == 0){
                    $tipo=0;
                      $resized_image = Image::make($value->imagen_guardar)->stream('png', 60);
                      Storage::disk('local')->put('\\public\\archivos\\'.time()."_".strtolower($n), $resized_image);
                      $nombreImagen=time()."_".strtolower($n);
                  }else{
                    $tipo=1;
                      $resized_image = base64_decode($value->imagen_guardar);
                      Storage::disk('local')->put('\\public\\archivos\\'.time()."_".strtolower($n), $resized_image);
                      $nombreImagen=time()."_".strtolower($n);
                  }
                  $arch = Archivo::create([
                      'ruta'    => $nombreImagen,
                      'id_lista'     => $lista->id,
                      'tipo' => $tipo,
                      'tiempo' => $value->tiempo,
                      'tipoTiempo' => $value->tipoTiempo,
                      'orden' => $value->orden
      
                  ]);
                } 
              }

              if($request->usuario_id){
                $del=ListasUsuarios::where('id_lista',$lista->id)->delete();
                $usuarios = json_decode($request->usuario_id);
                foreach ($usuarios as $key => $value) {
                
                  $arch1 = ListasUsuarios::create([
                      'id_usuario'    => $value->id,
                      'id_lista'     => $lista->id
      
                  ]);
                } 
              }
            
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

      // Modificar estatus de las listas 
      function activarInactivar(Request $request){
   
         try{
   
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $lista = Lista::find($request->id);
     
            $lista->estatus = $request->status;
            
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
    function delete(Request $request){
        try{

            // var_dump('este es el id'.$request->id);
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $lista = Lista::find($request->id);
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

    // Eliminar archivos
    function borrar(Request $request){
        try{
    
                // var_dump('este es el id'.$request->id);
                DB::beginTransaction(); // Iniciar transaccion de la base de datos
                $archivo = Archivo::find($request->id);
                $archivo->delete();
                DB::commit(); // Guardamos la transaccion
                return response()->json("archivo Delete",200);
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
    //funcion editar orden archivo
    public function updateOrdenArchivo(Request $request){
        try{
            DB::beginTransaction(); // Iniciar transaccion de la base de datos
            $archivoUno = Archivo::find($request->idUno);
            $archivoDos = Archivo::find($request->idDos);
     
            $archivoUno->orden = $request->ordenUno;
            $archivoDos->orden = $request->ordenDos;
            
            $archivoUno->save();
            $archivoDos->save();

            DB::commit(); // Guardamos la transaccion
            return response()->json([
                'message' => 'Actualizacion correcta.',
            ],200);

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
    public function eliminar_acentos($cadena){
		
            //Reemplazamos la A y a
            $cadena = str_replace(
            array('Á', 'À', 'Â', 'Ä', 'á', 'à', 'ä', 'â', 'ª'),
            array('A', 'A', 'A', 'A', 'a', 'a', 'a', 'a', 'a'),
            $cadena
            );
    
            //Reemplazamos la E y e
            $cadena = str_replace(
            array('É', 'È', 'Ê', 'Ë', 'é', 'è', 'ë', 'ê'),
            array('E', 'E', 'E', 'E', 'e', 'e', 'e', 'e'),
            $cadena );
    
            //Reemplazamos la I y i
            $cadena = str_replace(
            array('Í', 'Ì', 'Ï', 'Î', 'í', 'ì', 'ï', 'î'),
            array('I', 'I', 'I', 'I', 'i', 'i', 'i', 'i'),
            $cadena );
    
            //Reemplazamos la O y o
            $cadena = str_replace(
            array('Ó', 'Ò', 'Ö', 'Ô', 'ó', 'ò', 'ö', 'ô'),
            array('O', 'O', 'O', 'O', 'o', 'o', 'o', 'o'),
            $cadena );
    
            //Reemplazamos la U y u
            $cadena = str_replace(
            array('Ú', 'Ù', 'Û', 'Ü', 'ú', 'ù', 'ü', 'û'),
            array('U', 'U', 'U', 'U', 'u', 'u', 'u', 'u'),
            $cadena );
    
            //Reemplazamos la N, n, C y c
            $cadena = str_replace(
            array('Ñ', 'ñ', 'Ç', 'ç'),
            array('N', 'n', 'C', 'c'),
            $cadena
            );
            
            return $cadena;
    }
   
}
