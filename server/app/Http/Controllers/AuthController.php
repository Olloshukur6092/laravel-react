<?php

namespace App\Http\Controllers;

use App\Models\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function customRegister(Request $request)
    {
        $firstname = $request->firstname;
        $lastname = $request->lastname;
        $email = $request->email;
        $password = $request->password;

        $sql = "insert into auths (firstname, lastname, email, password) values (?, ?, ?, ?)";

        try {
            DB::insert($sql, [$firstname, $lastname, $email, $password]);
            return response()->json([
                'message' => 'Siz ro\'yhatdan o\'tdingiz'
            ]);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
            return response()->json([
                'message' => 'Xatolik bo\'ldi'
            ], 500);
        }
    }
}
