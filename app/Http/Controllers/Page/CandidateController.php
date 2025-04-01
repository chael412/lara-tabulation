<?php

namespace App\Http\Controllers\Page;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CandidateController extends Controller
{
    public function getCandidates(){
        return Inertia::render("Admin/Candidate/Index", [
            'success' => session('success') ?? null
        ]);
    }
    public function setTopFive(Candidate $candidate)
    {
        try {
            $candidate->update([
                'top_five' => 'yes',
            ]);
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return to_route('admin.candidate.index')->with('success', "200");
    }
    public function setToNo(Candidate $candidate)
    {
        try {
            $candidate->update([
                'top_five' => 'no',
            ]);
        } catch (Exception $e) {
            dd($e->getMessage());
        }

        return to_route('admin.candidate.index')->with('success', "200");
    }
}
