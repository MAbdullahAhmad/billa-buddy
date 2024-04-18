<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;
use App\Auth\ApiGuard;

class AuthServiceProvider extends ServiceProvider {

  // boot method
  public function boot() {

    $this->registerPolicies();

    // register 'api-guard'
    Auth::extend('api-guard', function ($app, $name, array $config) {
      return new ApiGuard(
        Auth::createUserProvider($config['provider']),
        $app['request']
      );
    });

  }
}
