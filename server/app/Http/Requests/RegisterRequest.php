<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    // bu method maydonlarni tekshiradi  
    public function rules()
    {
        return [
            'firstname' => 'required|min:6|max:100',
            'lastname' => 'required|min:6|max:100',
            'email' => 'required|unique:users',
            'phone' => 'required|min:13',
            'password' => 'required|min:8',
        ];
    }

    // bu method maydonlarni validateni xabarini ozgartiradi
    public function messages()
    {
        return [
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
        ];
    }
}
