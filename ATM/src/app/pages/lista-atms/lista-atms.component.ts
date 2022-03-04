import { Component, OnInit } from '@angular/core';
import { AtmService } from 'src/app/services/atm/atm.service';
import { Atm } from 'src/app/services/atm/model/atm';

@Component({
  selector: 'app-lista-atms',
  templateUrl: './lista-atms.component.html',
  styleUrls: ['./lista-atms.component.css']
})
export class ListaAtmsComponent implements OnInit {

  atms: Atm[] = [];

  constructor(private atmService: AtmService) { }

  ngOnInit(): void {
    this.ObterAtms();
  }

  private ObterAtms(): void {
    this.atmService.getAll().subscribe({
      next: atms => {
        this.atms = atms;
      },
      error: e => {
        console.log('Error', e);
      }
    });
  }

  deletarATM(id: number): void {
    console.log(id);
    this.atmService.deleteById(id).subscribe({
      next: () => { 
        console.log('Deletado');

        this.ObterAtms();
      },
      error: e => {
        console.log('Error', e);
      }
    })
  }

}
