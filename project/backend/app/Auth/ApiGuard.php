<?php

namespace App\Auth;

use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\UserProvider;
use Illuminate\Contracts\Auth\Authenticatable;

use Illuminate\Http\Request;
use App\Models\User;

use Str;

class ApiGuard implements Guard {

  // Properties
  protected $request;
  protected $provider;
  protected $user;

  // Constructor
  public function __construct(UserProvider $provider, Request $request) {
    $this->provider = $provider;
    $this->request = $request;
  }

  // Check if user is logged in
  public function check() {
    return !is_null($this->user());
  }

  // Check if user is not logged in
  public function guest() {
    return !$this->check();
  }

  // Get user
  public function user() {
    if (!is_null($this->user)) {
      return $this->user;
    }

    $token = $this->request->header('Authorization');
    if (!empty($token)) {
      $this->user = User::where('api_token', $token)->first();
    }

    return $this->user;
  }

  // Get user ID
  public function id() {
    if ($user = $this->user()) {
      return $user->getAuthIdentifier();
    }
  }

  // Validate creds
  public function validate(array $credentials = []) {
    if (empty($credentials['email']) || empty($credentials['password'])) {
      return false;
    }

    $user = $this->provider->retrieveByCredentials($credentials);
    if ($user && $this->provider->validateCredentials($user, $credentials)) {
      $this->setUser($user);
      return true;
    }

    return false;
  }

  // hard set user
  public function setUser(Authenticatable $user) {
    $this->user = $user;
    return $this;
  }

  // Login Attempt
  public function attempt(array $credentials = []) {
    if ($this->validate($credentials)) {
      $user = $this->user();
      $token = Str::random(60);
      $user->forceFill([
        'api_token' => hash('sha256', $token),
      ])->save();

      $this->setUser($user);
      return true;
    }

    return false;
  }

  // Logout
  public function logout() {
    if ($user = $this->user()) {
      $user->forceFill(['api_token' => null])->save();
      $this->user = null;
    }
  }
  
}
