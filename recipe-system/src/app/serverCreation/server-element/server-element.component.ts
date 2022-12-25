import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterViewInit {
  @Input() element: {type: string, name: string, content: string};
  @ViewChild('headerInfo', { static: true }) header: ElementRef;

  ngOnInit()
  {
    console.log('ngOnInit called!');
    console.log("Text for header: " + this.header.nativeElement.textContent);
  }
  ngAfterViewInit()
  {
    console.log('ngAfterViewInit called!');
    console.log("Text for header: " + this.header.nativeElement.textContent);
  }
}
