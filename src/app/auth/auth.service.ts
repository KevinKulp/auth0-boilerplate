import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
      clientID: 'x',
      domain: 'x',
      responseType: 'token id_token',
      audience: 'x',
      redirectUri: 'http://localhost:3000/#/',
      scope: 'openid'
    });

    constructor(public router: Router) {}
}
