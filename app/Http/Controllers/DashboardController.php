<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __construct()
    {
        
    }

    public function index(): Response
    {
        return Inertia::render('Dashboard/Dashboard');
    }
}