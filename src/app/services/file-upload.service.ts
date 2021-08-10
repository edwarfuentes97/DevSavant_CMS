import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  formData: FormData = new FormData();

  constructor() { }

  upload(file: File) {
    this.formData.append('file', file);
  }

  getFiles(){
    return this.formData;
  }
}
