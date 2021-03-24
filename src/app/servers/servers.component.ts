import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverCreationStatus ='No Server was created!';
  allowedServer: boolean= false;
  constructor() {}
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus ="Server was created";
     this.allowedServer = true;
  }
  onUpdateServer(event: any) {
console.log(event);
  }

}
