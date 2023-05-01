import { Component, Input } from '@angular/core';
import { IUser } from '@mp/api/users/util'; 

@Component({
  selector: 'mp-create-new-chat',
  templateUrl: './create-new-chat.component.html',
  styleUrls: ['./create-new-chat.component.scss'],
})
export class CreateNewChatComponent {
  @Input() personList!: IUser[];

  
}
