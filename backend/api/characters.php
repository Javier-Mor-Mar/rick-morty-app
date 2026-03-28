<?php

header('Content-Type: application/json');

require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../helpers/Response.php';
require_once __DIR__ . '/../services/RickAndMortyService.php';

try {
    $service = new RickAndMortyService();
    $characters = $service->getCharacters();

    Response::success($characters, 'Personajes obtenidos correctamente');
} catch (Exception $e) {
    Response::error($e->getMessage(), 500);
}