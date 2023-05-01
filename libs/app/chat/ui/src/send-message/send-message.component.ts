import { Component, HostListener } from '@angular/core';
import { actionsExecuting, ActionsExecuting } from '@ngxs-labs/actions-executing';
import { Select, Selector, Store } from '@ngxs/store';
import { Timestamp } from 'firebase-admin/firestore';
import { Observable } from 'rxjs';
import { IChat } from '@mp/api/chat/util';
import { ChatsStateModel, CreateChatState } from '@mp/app/chat/data-access';
import { CreateChat, IncrementCounter } from '@mp/app/chat/util';
import { FormBuilder } from '@angular/forms';


@Component({
  // selector: 'send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
})

export class SendMessageComponent {
  @Select(CreateChatState.chat) chat$!: Observable<IChat>;
  @Select(actionsExecuting([CreateChat])) busy$!: Observable<ActionsExecuting>;
  @Select(CreateChatState) count$!: Observable<ChatsStateModel>;

  createChatForm = this.fb.group({
    chat_id: [''],
    users: [''],
    messages: [''],
  });

  public file: File | null = null;
  public count: number;

   // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: Function | null = null;

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder
  ) {
    this.count=1;
  }

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.file = file;
    if (this.onChange) {
      this.onChange(file);
    }
  }

   // eslint-disable-next-line @typescript-eslint/ban-types
  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }

  public increment() {
    this.count++;
    this.store.dispatch(new IncrementCounter());
  }

  public decrement() {
    this.count--;
    this.store.dispatch(new IncrementCounter());
  }

  // public createChat() {
  //   this.createChatForm;
  //   this.store.dispatch(new CreateChat(chat:{chat_id: "1", users: ['user1', 'user2'], messages: ['message1', 'message2']}));
  // }
}
