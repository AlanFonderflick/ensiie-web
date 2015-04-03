<?php

require '../vendor/autoload.php';

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

$capsule->addConnection([
    'driver'    => 'sqlite',
    'host'      => 'localhost',
    'database'  => '../my_db',
    'username'  => '',
    'password'  => '',
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
]);

// Set the event dispatcher used by Eloquent models... (optional)
use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;
$capsule->setEventDispatcher(new Dispatcher(new Container));

// Make this Capsule instance available globally via static methods... (optional)
$capsule->setAsGlobal();

// Setup the Eloquent ORM... (optional; unless you've used setEventDispatcher())
$capsule->bootEloquent();

$app = new \Slim\Slim();

$app->get('/', function() use ($app) {
    readfile('index.html');
    $app->stop();
});


$app->get('/ecommerce/shoes', function() {
    $shoes = Shoe::all();
    echo $shoes->toJson();
});

$app->get('/ecommerce/shoes/:id', function($id) use($app) {
    $shoe = Shoe::find($id);
    if (is_null($shoe)) {
        $app->response->status(404);
        $app->stop();
    }
    echo $shoe->toJson();    
});

$app->post('/ecommerce/shoes', function() use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $shoe = new Shoe;
    
    $shoe->name = $obj->{'name'};
    $shoe->description = $obj->{'description'};
    $shoe->image = $obj->{'image'};
    $shoe->price = $obj->{'price'};
    $shoe->category = $obj->{'category'};
    $shoe->save();
    $app->response->status(201);
    echo $shoe->toJson();    
});

$app->put('/ecommerce/shoes/:id', function($id) use($app) {
    $body = $app->request->getBody();
    $obj = json_decode($body);
    $shoe = Shoe::find($id);
    if (is_null($shoe)) {
        $app->response->status(404);
        $app->stop();
    }
    
    $shoe->name = $obj->{'name'};
    $shoe->description = $obj->{'description'};
    $shoe->image = $obj->{'image'};
    $shoe->price = $obj->{'price'};
    $shoe->category = $obj->{'category'};
    $shoe->save();
    echo $shoe->toJson();    
});

$app->delete('/ecommerce/shoes/:id', function($id) use($app) {
    $shoe = Shoe::find($id);
    if (is_null($shoe)) {
        $app->response->status(404);
        $app->stop();
    }
    $shoe->delete();
    $app->response->status(204);
});



$app->run();
