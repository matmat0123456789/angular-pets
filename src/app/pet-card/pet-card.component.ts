import { Component, OnInit, ViewChild } from '@angular/core';
import {PetDetailsViewModel} from '../ViewModels/pet-details-view-model';
import {ImagesGalleryComponent} from '../../Components/images-gallery/images-gallery.component';

@Component({
  selector: 'app-pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css']
})
export class PetCardComponent implements OnInit {

get Images():string[] {
        return this.PetDetails.Images;
    }
public CurrentImage:string;
private PetDetails:PetDetailsViewModel=new PetDetailsViewModel();

  constructor() { 
    this.PetDetails.Name="Azor";
    this.PetDetails.Description="Azor lubi ruchac suki a jak mu nie daja to je skurwysyn gryzie";
    this.PetDetails.Age=12;
    this.PetDetails.Images=[   "https://envato-shoebox-0.imgix.net/a953/9324-9678-11e0-9f56-842b2b692e1a/2011_034_024.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=146f16a09e60d8d5ed71302ad7c72e76",
    "https://im.rediff.com/getahead/2017/aug/22kiyara3.jpg"
      ];
  }
@ViewChild(ImagesGalleryComponent)
Gallery:ImagesGalleryComponent;

ImageChanged(src:string)
{
  this.CurrentImage=src;
}
 ngOnInit() {
    this.Gallery.Images= this.Images;
  }

}