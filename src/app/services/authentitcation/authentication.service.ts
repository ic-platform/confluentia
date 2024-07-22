import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service'; // Import SupabaseService
import { resultSignUp, UserModel } from '../../models/student-model';
import axios from 'axios';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private supabase: any;

  constructor(private supabaseService: SupabaseService) { // Inject SupabaseService
    this.supabase = this.supabaseService.supabaseClient;
  }

  /* Sign-up:
    - Create the user in Supabase Auth.
    - Create the user in Supabase DB.
    - Get Supabase Access Token for the session:
  ==============================================================================*/
  async signUp(studentObj: UserModel) {
    const { data , error } = await this.supabase.auth.signUp({
      email: studentObj.email,
      password: studentObj.password,
    });

    if (error) {
      console.error('Error during sign up:', error);
      // Handle the error appropriately (e.g., display an error message)
      return error;
    }

    // After successful sign-up, insert user data into your Supabase database
      const result: Promise<resultSignUp> = axios.post(environment.server, { studentObj });

      if ((await result).success == null ) {
        console.log(result);
        return ;
      } 

      return { data };
  }

  /* Sign-in:
    - Sign-in the user in Supabase Auth.
    - Get Supabase Access Token for the session:
  ==============================================================================*/
  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Error during sign in:', error);
      // Handle the error appropriately (e.g., display an error message)
      return error;
    }

    return { data };
  }

  /* Logouting user:
    - Logouting the user from Supabase Auth.
    - Destroy the Supabase Access Token for the session:
  ==============================================================================*/
  async logout() {
    const { error } = await this.supabase.auth.signOut();

    if (error) {
      console.error('Error during logout:', error);
      // Handle the error appropriately
      return error;
    }

    return null;
    
  }

  /* Forget Password:
   - Send a password reset email to the user's registered email address.
   - Get the email reset link from the Supabase Auth API:
  ==============================================================================*/
  async forgotPassword(email: string) {
    const { error } = await this.supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://confluentia.vercel.app/update-password'
    });
  
    if (error) {
      console.error('Error during forgot password:', error);
      // Handle the error appropriately (e.g., display an error message)
      return error;
    }
    
    const feedback = "A password reset link has been sent to your email address.";
    return feedback;
  }
}