import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Message } from '../models/Message.model';
import { DialogService } from '../services/dialog.service';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  messages: Message[];
  messagesSubscription: Subscription;

  constructor(
    private messagesService: MessagesService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.messagesSubscription = this.messagesService.messageSubject.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
    this.messagesService.getMessages();
    this.messagesService.emitMessages();
  }
  onNewMessage() {
    this.router.navigate(['/messages', 'new']);
  }
  onDeleteMessage(message: Message) {
    this.dialogService
      .openConfirmDialog('Are you sure to delete this message')
      .afterClosed()
      .subscribe(res => {
        if (res) {
          this.messagesService.removeMessage(message);
        }
      });
  }
  onViewMessage(id: number) {
    this.router.navigate(['/messages', 'view', id]);
  }
  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
  }
}
