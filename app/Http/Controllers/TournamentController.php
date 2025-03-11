<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class TournamentController extends Controller
{
    public function __construct()
    {
        
    }

    public function index(): Response
    {
        return Inertia::render('Tournament/Tournament');
    }
}