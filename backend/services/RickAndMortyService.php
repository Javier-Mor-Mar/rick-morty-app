<?php

class RickAndMortyService
{
    public function getCharacters()
    {
        $response = file_get_contents(RICK_AND_MORTY_API_URL);

        if ($response === false) {
            throw new Exception('No se pudo consumir la API externa');
        }

        $data = json_decode($response, true);

        if (!isset($data['results'])) {
            throw new Exception('Respuesta inválida de la API externa');
        }

        $characters = [];

        foreach ($data['results'] as $character) {
            $characters[] = [
                'id' => $character['id'],
                'name' => $character['name'],
                'species' => $character['species'],
                'status' => $character['status'],
                'image' => $character['image']
            ];
        }

        return $characters;
    }
}