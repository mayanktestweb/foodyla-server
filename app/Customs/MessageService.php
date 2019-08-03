<?php 

namespace App\Customs;

use Illuminate\Support\Facades\Log;

class MessageService
{
    static $apiKey = 'O5OMb0PTrSo-OqMfZr0A8XEN05RXwZNZKkxefybEiB';


    public static function sendMessageTo($mobile_number, $message)
    {
        $message = rawurlencode($message);

        $data = array('apikey' => self::$apiKey, 'numbers' => $mobile_number, 'sender' => urlencode('STRMGR'),
            "message" => $message);

        $ch = curl_init('https://api.textlocal.in/send/');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);
    }
}
