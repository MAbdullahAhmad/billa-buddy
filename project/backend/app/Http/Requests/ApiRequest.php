<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ApiRequest extends FormRequest {
    public function authorize(){
        // Logic to determine if the user is authorized to make this request
        return true;
    }

    public function rules(){
        // Define your validation rules here
        return [];
    }
}
