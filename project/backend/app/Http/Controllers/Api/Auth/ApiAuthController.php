<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Requests\ApiRequest;

class ApiAuthController extends ApiController{
    public function sync(ApiRequest $request){
        // Logic to sync and check if user is logged in
    }

    public function login(ApiRequest $request){
        // Logic for logging in the user
    }

    public function logout(ApiRequest $request){
        // Logic for logging out the user
    }
}
