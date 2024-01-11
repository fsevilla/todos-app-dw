import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groups = [
    'Metallica',
    'Scorpions',
    'Pearl Jam',
    'Intocable',
    'Los Picadientes'
  ];

  getGroups() {
    return [...this.groups];
  }

  addGroup(groupName: string) {
    this.groups.push(groupName);
    return this.getGroups();
  }
}
