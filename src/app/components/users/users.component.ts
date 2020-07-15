import {Component, Input, OnInit} from '@angular/core';
import {GetReposService} from "../repos/get-repos.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() AllUsers: any;
  constructor(private getReposService: GetReposService) { }

  ngOnInit() {
    this.getReposService.getAllUsers().subscribe((all)=>{
      this.AllUsers = all;
    })
  }


}
