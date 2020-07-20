<?php

namespace App\Http\Middleware;

use Closure;
use App\Http\Controllers\UserController;

class token
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
        $Authorization = $request->header('Authorization');

        if (!UserController::validateToken($Authorization)) {
            return response()->json(['error' => 'Not authorized.'],403);
        }

        return $next($request);
    }
}
