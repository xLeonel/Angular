import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AtmService } from 'src/app/services/atm/atm.service';
import { Atm } from 'src/app/services/atm/model/atm';

@Component({
  selector: 'app-cadastro-atm',
  templateUrl: './cadastro-atm.component.html',
  styleUrls: ['./cadastro-atm.component.css']
})
export class CadastroAtmComponent implements OnInit {

  atm: Atm = new Atm(0, '', '', '', '', '');

  constructor(private atmService: AtmService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    this.atmService.save(this.atm).subscribe({
      next: atm => {
        console.log('Salvo', atm);
      },
      error: e => {
        console.log('Error', e);
      }
    });
  }

}
