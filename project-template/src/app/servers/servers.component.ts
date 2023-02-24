import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverStatus = 'no one ser ver was created';
  serverName = 'testServer';
  serverCreated = false;

  servers = ['server1', 'server2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverStatus = 'Server was created, Name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  ngOnInit(): void {}
}
