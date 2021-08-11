import { Injectable } from '@angular/core';
import {DataPayloadInterface} from "../interfaces/data-payload";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  dataPayload: DataPayloadInterface[] = [
    {
      index: 0,
      greeting: undefined,
      images: '',
      text: ''
    }
  ]

  constructor() { }
}
