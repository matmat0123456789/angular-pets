import { OnInit } from '@angular/core';
export interface IGallery extends OnInit {
 public SetImage(url:string):void;
}