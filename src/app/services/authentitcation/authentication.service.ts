import { inject, Injectable } from '@angular/core';
import { SupabaseService } from '../supabase/supabase.service'; // Import SupabaseService
import { UserModel } from '../../models/student-model';

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
    const { user, session, error } = await this.supabase.auth.signUp({
      email: studentObj.email,
      password: studentObj.password,
    });

    if (error) {
      console.error('Error during sign up:', error);
      // Handle the error appropriately (e.g., display an error message)
      return error;
    }

    // After successful sign-up, insert user data into your Supabase database
    const { data: dbUser, error: dbError } = await this.supabase
      .from('your_user_table_name') // Replace with your actual table name
      .insert({
        name: studentObj.name,
        email: studentObj.email,
        phone: studentObj.phone,
        // ... other user data
      });

    if (dbError) {
      console.error('Error inserting user data:', dbError);
      // Handle the database error
      return dbError;
    }

    return { user, session };
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
}

