<?php

class Response
{
    public static function success($data = [], $message = 'OK')
    {
        http_response_code(200);

        echo json_encode([
            'success' => true,
            'message' => $message,
            'data' => $data
        ]);
    }

    public static function error($message = 'Ocurrió un error', $statusCode = 500)
    {
        http_response_code($statusCode);

        echo json_encode([
            'success' => false,
            'message' => $message
        ]);
    }
}