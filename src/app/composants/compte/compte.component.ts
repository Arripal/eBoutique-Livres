import { Component, OnInit } from '@angular/core';
import { Client } from '../../../client.type';
import { ClientService } from '../../services/client.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css',
})
export class CompteComponent implements OnInit {
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.client = this.clientService.recupererClientLocalStorage();
  }

  client: Client | null = null;
}
