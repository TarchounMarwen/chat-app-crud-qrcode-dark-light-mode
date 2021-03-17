import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatsService } from '../services/chats.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})

export class RoomPage implements OnInit {
  @ViewChild('content') content: any;
  messages: Observable<any[]>;
  newMsg = '';

  constructor(private chatService: ChatsService , private router: Router){}

  ngOnInit() {
    this.messages = this.chatService.getChatMessages();
  }

  sendMessage() {
    this.chatService.addChatMessage(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }
}
