import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor() { }

  getBase64Image(img: any) {
    var canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    var ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(img, 0, 0);
    }

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
}
