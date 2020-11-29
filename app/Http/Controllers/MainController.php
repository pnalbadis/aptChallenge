<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use Response;
use Redis;

class MainController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->all();

        $validation = $this->validate(request(), [
            'name' => 'required|min:4|max:255',
            'address' => 'required'
        ]);

        $redis = Redis::connection();

        foreach ($data as $key => $value) {
            if(!empty($value)){
                Redis::set($key, $value);
            }
        }
        
        return redirect()->to('/')->with('success', true);
    }

}
