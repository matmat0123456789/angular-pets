import { Component, OnInit, Input, Output, EventEmitter, ContentChild } from '@angular/core';
@Component({
  selector: 'app-images-galery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {
/*
  constructor() { 

    //this._images=
    this.Images=
    [   "https://envato-shoebox-0.imgix.net/a953/9324-9678-11e0-9f56-842b2b692e1a/2011_034_024.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=146f16a09e60d8d5ed71302ad7c72e76",
    "https://im.rediff.com/getahead/2017/aug/22kiyara3.jpg"
      ];
  }*/


  ngOnInit() {
  }

  private selectedIndex=0;
  private _imagesCount:number;
  private _images:string[];
  private nextEnabled=true;
  private previousEnabled=false;

  @Output() ImageChanged=new EventEmitter<any>();
  //@Output() OnNext=new EventEmitter<any>();
  //@Output() OnPrevious=new EventEmitter<any>();

  public get CurrentImage():string
  {
    //this.Gallery.
   return this._images[this.selectedIndex];
  }

  @Input() set Images(images:string[])
  {
    this._imagesCount=images.length;
    this._images=images;
    this.ImageChanged.emit(this.CurrentImage);
  }

  public Next(e):void
  {
    this.selectedIndex++;
    this.previousEnabled=true;

    if(this.selectedIndex>=this._imagesCount-1)
    { 
      this.nextEnabled=false;
    }
    this.ImageChanged.emit(this.CurrentImage);
  }
  public Previous(e):void
  {
    this.selectedIndex--;
    this.nextEnabled=true;
    if(this.selectedIndex<=0)
    {  
      this.previousEnabled=false;
    }
    this.ImageChanged.emit(this.CurrentImage);
  }
}