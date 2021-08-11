import { Injectable } from '@angular/core';
import {DataServiceService} from "./data-service.service";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  formData: FormData = new FormData();

  constructor(private dataService: DataServiceService) { }

  upload(file: any , index?: number) {
    this.formData.append('file', file);
    const ImageTextEditor = this.dataService.dataPayload.find( elemento => elemento.index === index);
    if (ImageTextEditor){
      ImageTextEditor.images = file;
    }
  }

  getFiles(){
    return this.formData;
  }
}
