import { Injectable } from '@angular/core';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { environment } from 'src/environments/environment';
import { DocumentSendPayload } from '../models/documents';

@Injectable({
  providedIn: 'root'
})
export class DocumentsRequiredService {
  public url: string = 'documentUpload'; 
  constructor(public httpApi: HttpApiService) { }

  public uploadAndSaveDocuments(basicDetailsFormData: DocumentSendPayload){  
    return this.httpApi.create<any>(basicDetailsFormData, this.url);  
  }

  public getDocuments(){
    return this.httpApi.get<any>(this.url);  
  }
}
