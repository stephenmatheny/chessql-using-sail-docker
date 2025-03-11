<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ToolsController extends Controller
{
    public function __construct()
    {
        
    }

    public function index(): Response
    {
        return Inertia::render('Tools/Tools');
    }
}