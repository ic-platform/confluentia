import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UserModel } from '../../models/student-model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = environment.server;

  constructor() { }

  /* Sign-up:
    - Create the user in Supabase Auth.
    - Create the user in Supabase DB.
    - Get Supabase Access Token for the session:
  ==============================================================================*/
    async signUp(studentObj: UserModel) {
      return await axios.post(this.url + '/student', { studentObj });
    }

  /* Sign-in:
    - Sign-in the user in Supabase Auth.
    - Get Supabase Access Token for the session:
  ==============================================================================*/
    async signIn(email: string, password: string) {
      return await axios.post(this.url + '/login', { email, password });
    }

  /* Logouting user:
    - Logouting the user from Supabase Auth.
    - Destroy the Supabase Access Token for the session:
  ==============================================================================*/
    async logout() {
      return await axios.get(this.url + '/logout');
    }
}
