<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    /** @use HasFactory<\Database\Factories\CandidateFactory> */
    use HasFactory;

    protected $fillable = [
        'candidate_number',
        'candidate_name',
        'top_five'
    ];


    public function scores()
    {
        return $this->hasMany(Score::class);
    }
}
