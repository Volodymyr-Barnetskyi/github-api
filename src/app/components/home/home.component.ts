import {Component, Input, OnInit} from '@angular/core';
import {GetReposService} from "../repos/get-repos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  CurrentUser: any;
ngOnInit() {
}
constructor(private getReposService: GetReposService) {
}
  getUser(username: any){
    this.getReposService.getUsers(username).subscribe((data) => {
      this.CurrentUser = data;
    })
  }
}
