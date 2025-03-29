<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Score extends Model
{
    /** @use HasFactory<\Database\Factories\ScoreFactory> */
    use HasFactory;

    protected $fillable = [
        'category_id',
        'user_id',
        'candidate_id',
        'round',
        'score'
    ];

    // Relationship with Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // Relationship with User (Judge)
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relationship with Candidate (Assuming you have a Candidate model)
    public function candidate()
    {
        return $this->belongsTo(Candidate::class);
    }
}
