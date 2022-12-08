import { Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName: string;
  newServerContent: string;
  @ViewChild('serverNameInput') viewChildServeName: ElementRef;
  @ViewChild('serverContent') viewChildServeContent: ElementRef;

  onAddServer()
  {
    this.serverCreated.emit({
      serverName: this.viewChildServeName.nativeElement.value,
      serverContent: this.viewChildServeContent.nativeElement.value,
    });
  }

  onAddBlueprint()
  {
    this.blueprintCreated.emit({
      serverName: this.viewChildServeName.nativeElement.value,
      serverContent: this.viewChildServeContent.nativeElement.value,
    });
  }
}
