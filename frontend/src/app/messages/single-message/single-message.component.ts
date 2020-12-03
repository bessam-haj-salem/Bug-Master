import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../../models/Message.model';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-single-message',
  templateUrl: './single-message.component.html',
  styleUrls: ['./single-message.component.scss']
})
export class SingleMessageComponent implements OnInit {
  message: Message;
  constructor(
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = new Message('', '', '', '');
    const id = this.route.snapshot.params['id'];
    this.messagesService.getSingleMessage(+id).then((message: Message) => {
      this.message = message;
    });
  }
  onBack() {
    this.router.navigate(['/messages']);
  }
}
