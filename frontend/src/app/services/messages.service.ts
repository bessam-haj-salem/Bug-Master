import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../models/Message.model';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: Message[] = [];
  messageSubject = new Subject<Message[]>();
  constructor() {}
  emitMessages() {
    this.messageSubject.next(this.messages);
  }
  saveMessages() {
    firebase
      .database()
      .ref('/messages')
      .set(this.messages);
  }
  getMessages() {
    firebase
      .database()
      .ref('/messages')
      .on('value', data => {
        this.messages = data.val() ? data.val() : [];
        this.emitMessages();
      });
  }
  getSingleMessage(id: number) {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref('/messages/' + id)
        .once('value')
        .then(
          data => {
            resolve(data.val());
          },
          error => {
            reject(error);
          }
        );
    });
  }
  createNewMessage(newMessage: Message) {
    this.messages.push(newMessage);
    this.saveMessages();
    this.emitMessages();
  }

  removeMessage(message: Message) {
    const messageIndexToRemove = this.messages.findIndex(messageEl => {
      if (messageEl === message) {
        return true;
      }
    });
    this.messages.splice(messageIndexToRemove, 1);
    this.saveMessages();
    this.emitMessages();
  }
}
