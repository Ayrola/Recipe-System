import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'testName', content: 'Just a test content.'},];
  title = 'recipe-system';

  onServerAdded(serverData: {serverName: string, serverContent: string})
  {
    this.serverElements.push(
      {
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      }
    );
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string})
  {
    this.serverElements.push(
      {
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      }
    );
  }
}
