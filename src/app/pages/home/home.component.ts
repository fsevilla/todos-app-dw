import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GroupService } from '../../shared/services/group.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  groupName = 'test';

  groups: string[] = [];

  constructor(private groupService: GroupService) {
    this.getGroups();
  }

  getGroups() {
    this.groups = this.groupService.getGroups();
  }

  

  addGroup() {
    this.groupService.addGroup(this.groupName);
    this.groupName = '';
    this.groups = this.groupService.getGroups();
  }
}
