import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Settings, ApiResponse } from '../models/interfaces';
import { environment } from '../../environments/environment'; // تأكدي من المسار

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private http = inject(HttpClient);
  // ربط الـ API بالـ environment
  private apiUrl = `${environment.apiUrl}/settings`;

  getSettings(): Observable<ApiResponse<{ settings: Settings }>> {
    return this.http.get<ApiResponse<{ settings: Settings }>>(this.apiUrl);
  }

  updateSettings(settings: FormData): Observable<ApiResponse<{ settings: Settings }>> {
    return this.http.patch<ApiResponse<{ settings: Settings }>>(this.apiUrl, settings);
  }
}