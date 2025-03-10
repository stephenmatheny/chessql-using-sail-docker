<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ClubController extends Controller
{
    public function __construct()
    {
        
    }

    public function index(): Response
    {
        return Inertia::render('Club');
    }
}