<?php

namespace App\Http\Middleware;

use Closure;
use App\User;
use App\Company;
use App\IP;
class Apikey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if($request->header('x-api-key') && $request->header('x-certificate-repostock')) {
            $users = Company::where('publicApiKey','=',$request->header('x-api-key'))->orWhere('publicApiKeyLab','=',$request->header('x-api-key'))->count();
            $company = Company::where('publicApiKey','=',$request->header('x-api-key'))->orWhere('publicApiKeyLab','=',$request->header('x-api-key'))->first();
            if ($users < 0){ 
              return response("Invalid x-api-key");
            }else{ 
                $ip = IP::where('certificate', $request->header('x-certificate-repostock'))->where('idCompanyKf',$company->idCompany)->count();
                if ($ip != 1) { 
                  return response("Invalid x-certificate-repostock");
                }else{ 
                  return $next($request);
                }
            }
        }else{
            return response("Faltan parametros");
        } 
   }
}
