import { Component, OnInit } from '@angular/core';


export interface PetElement {
  name: string;
  kind: string;
  age: number;
}

const ELEMENT_DATA: PetElement[] = [
{image:"https://envato-shoebox-0.imgix.net/a953/9324-9678-11e0-9f56-842b2b692e1a/2011_034_024.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=500&s=146f16a09e60d8d5ed71302ad7c72e76", name: "zibi", kind: 'Hydrogen', age: 12, profile:'/PetProfile'},
  {name: "zibi", kind: 'Helium', age: 12, profile:'/PetProfile'},
  {name: "zibi", kind: 'Lithium', age: 12, profile:'/PetProfile'},
  {name: "zibi", kind: 'Beryllium',age: 12, profile:'/PetProfile'},
  {name: "zibi", kind: 'Boron', age: 12, profile:'/PetProfile'},
  {name:"zibi", kind: 'Carbon', age: 12, profile:'/PetProfile'},
  {name: "zibi", kind: 'Nitrogen', age: 12, profile:'/PetProfile'},
  {name:"zibi", kind: 'Oxygen', age: 12, profile:'/PetProfile'},
  {name: "zibi", kind: 'Fluorine', age: 12, profile:'/PetProfile'},
  {name: "zibi", kind: 'Neon', age: 12, profile:'/PetProfile'},
];


@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  displayedColumns: string[] = ['image', 'name', 'kind', 'age', 'profile'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}