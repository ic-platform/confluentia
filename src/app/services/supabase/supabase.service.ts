import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private url: string = environment.supabaseUrl;
  private key: string = environment.supabaseKey;
  
  constructor() {
    this.supabase = createClient(this.url, this.key);
  }

  onAuthStateChange(callback: (event: string, session: any) => void) {
    this.supabase.auth.onAuthStateChange(callback);
  }
}
