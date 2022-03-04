import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AtmService } from 'src/app/services/atm/atm.service';
import { Atm } from 'src/app/services/atm/model/atm';

@Component({
  selector: 'app-info-atm',
  templateUrl: './info-atm.component.html',
  styleUrls: ['./info-atm.component.css']
})
export class InfoAtmComponent implements OnInit {

  atm!: Atm;

  private atmId!: number;

  constructor(private route: ActivatedRoute, private atmService: AtmService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.atmId = +params['id'];
      }
    );

    this.getAtmById(this.atmId);
  }

  private getAtmById(id: number): void {
    this.atmService.getById(id).subscribe({
      next: atm => {
        this.atm = atm;
      },
      error: e => {
        console.log('Error', e);
      }
    });
  }
  
  salvar(): void {
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
