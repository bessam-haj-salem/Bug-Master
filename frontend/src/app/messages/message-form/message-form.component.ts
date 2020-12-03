import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/Message.model';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  messageForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      content: ['', Validators.required]
    });
  }
  onSaveMessage() {
    const name = this.messageForm.get('name').value;
    const email = this.messageForm.get('email').value;
    const subject = this.messageForm.get('subject').value;
    const content = this.messageForm.get('content').value;

    const newMessage = new Message(name, email, subject, content);
    this.messagesService.createNewMessage(newMessage);
    //this.router.navigate(['/messages']);
    this.resetForm();
  }
  resetForm(value: any = undefined): void {
    this.messageForm.reset(value);
  }
}
