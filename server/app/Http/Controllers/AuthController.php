<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    // Foydalanuvchilarni ro'yatdan o'tirish qismi
    public function register(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'firstname' => 'required|min:6|max:100',
            'lastname' => 'required|min:6|max:100',
            'email' => 'required|unique:users',
            'phone' => 'required|min:13',
            'password' => 'required|min:8',
        ], [
            'firstname.required' => 'Maydonga ismingizni yozing.',
            'firstname.min' => 'Ismingiz kamida 6ta belgidan iborat bo\'lsin.',
            'firstname.max' => 'Ismingiz 100 ta belgidan ortib ketdi.',
            'lastname.required' => 'Maydonga familiyangizni yozing.',
            'lastname.min' => 'Familiyangiz kamida 6ta belgidan iborat bo\'lsin.',
            'lastname.max' => 'Familiyangiz 100 ta belgidan ortib ketdi.',
            'email.required' => 'Emailingizni kiriting.',
            'email.unique' => 'Bu email avval ishlatilgan boshqa email kiriting.',
            'phone.required' => 'Telefon raqam kiriting.',
            'phone.min' => 'Telefon raqam 13 ta belgidan iborat bo\'lsin.',
            'password.required' => 'Parolingizni kiriting.',
            'password.min' => 'Parolingiz kamida 8 ta belgidan iborat bo\'lsin.'
        ]);

        if ($validate->fails()) {
            return response()->json([
                'errors' => $validate->errors()
            ]);
        } else {
            try {
                $users = User::query();
                $users->create($request->all());

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

    // Foydalanuvchilarni login qilish qismi
    public function login(Request $request)
    {
        $validate = Validator::make(
            $request->all(),
            [
                'email' => 'required',
                'password' => 'required'
            ],
            [
                'email.required' => 'Emailingizni kiriting.',
                'password.required' => 'Parolingizni kiriting.'
            ]
        );

        if ($validate->fails()) {
            return response()->json([
                'errors' => $validate->errors()
            ]);
        } else {

            try {
                $token = Str::random(40);
                $users = User::query();
                $user = $users->where(['email' => $request->email, 'password' => $request->password])->get();

                if ($user->isEmpty()) {
                    return response()->json([
                        'message' => 'Bunday foydalanuvchi mavjud emas'
                    ]);
                } else {
                    return response()->json([
                        'message' => 'Tizimga kirdingiz',
                        'token' => $token
                    ]);
                }
            } catch (\Exception $e) {
                Log::error($e->getMessage());
                return response()->json([
                    'message' => 'Xatolik bo\'ldi'
                ], 500);
            }
        }
    }
}
