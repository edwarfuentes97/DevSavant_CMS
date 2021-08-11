import {Component, Input, OnInit} from '@angular/core';
import {FileUploadService} from "../../services/file-upload.service";

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.scss']
})
export class WidgetImageComponent implements OnInit {

  selectedFiles?: FileList;
  selectedFileNames: string[] = [];

  progressInfos: any[] = [];
  message: string[] = [];

  previews: string[] = [];
  imageInfos?: any;

  @Input() index: number | undefined;
  private currentImage: any;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.imageInfos = this.uploadService.getFiles();
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFileNames = [];
    this.selectedFiles = event.target.files;

    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.currentImage = e.target.result;
          console.log(e.target.result);
          this.previews.push(e.target.result);
        };

        reader.readAsDataURL(this.selectedFiles[i]);

        this.selectedFileNames.push(this.selectedFiles[i].name);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file && this.currentImage) {
      const msg = 'Uploaded the file successfully: ' + file.name;
      this.message.push(msg);
      this.uploadService.upload(this.currentImage, this.index)
    }
  }

  uploadFiles(): void {
    // TODO Implementation for multiple images
    this.message = [];
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

}
