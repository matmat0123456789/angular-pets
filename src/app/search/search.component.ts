import { Component, OnInit, Input } from '@angular/core';
import {SearchViewModel} from '../ViewModels/search-view-model';
import {Region} from '../../Models/region';
import {RegionService} from '../../Services/region.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

public SearchViewModel:SearchViewModel=new SearchViewModel();
 
  //_regionService:RegionService;

  constructor(private service:RegionService) { 
  //  this._regionService=service;
  }

  ngOnInit() {
    
  }

Regions:Region[];


  public Test()
  {
    //this._regionService.GetAllRegions().subscribe(x=>this.Regions=x);
    alert(this.SearchViewModel.Kind);
  }
  public onSubmit():void
  {
alert("Szukaj");
  }
}