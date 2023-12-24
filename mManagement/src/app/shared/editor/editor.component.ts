import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  htmlContent:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getHtmlContent():String{
    return this.htmlContent;
  }

}
