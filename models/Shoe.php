<?php

class Shoe extends Illuminate\Database\Eloquent\Model {

    protected $table = "shoes";
    public $timestamps = false;
    
    // need to explicitly cast attributes of type Integer, Float, Boolean 
    
    
    
    
    public function getPriceAttribute($value)
    {
        return (float) $value;
    }
    
    
}
