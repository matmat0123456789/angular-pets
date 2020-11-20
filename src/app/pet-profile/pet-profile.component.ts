import { Component, OnInit, ViewChild } from '@angular/core';
import {ImagesGalleryComponent} from '../../Components/images-gallery/images-gallery.component';
import {PetCardComponent} from '../pet-card/pet-card.component';
@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.css']
})
export class PetProfileComponent implements OnInit {
/*
@ViewChild(ImagesGalleryComponent)
Gallery:ImagesGalleryComponent;

@ViewChild(PetCardComponent)
PetCard:PetCardComponent;

ImageChanged(src:string)
{
  this.PetCard.CurrentImage=src;
}*/
  constructor() { }

  ngOnInit() {
    //this.Gallery.Images= this.PetCard.Images;
  }

}