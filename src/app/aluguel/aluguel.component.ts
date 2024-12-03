import { CommonModule, NgFor } from '@angular/common';
import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { MenuModule } from 'primeng/menu';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Page } from '../models/interfaces/Page';
import { Aluguel } from '../models/interfaces/Aluguel';
import { MenubarModule } from 'primeng/menubar';
import { DialogModule } from 'primeng/dialog';
import { MenuItem } from 'primeng/api';
import { NavBarComponent } from '../componentes/nav-bar/nav-bar.component';
import { AluguelService } from '../services/aluguel/aluguel.service';


export interface AluguelDTO {
  content: Aluguel[]
  page: Page
}

 export interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-aluguel',
  standalone: true,
  imports: [CommonModule, MenuModule, TableModule, TagModule, PaginatorModule, CalendarModule, FormsModule, MenubarModule, DialogModule, NavBarComponent],
  templateUrl: './aluguel.component.html',
  styleUrl: './aluguel.component.scss'
})
export class AluguelComponent implements OnInit, DoCheck{

  navegacao!: MenuItem[];

  constructor(private router: Router,public aluguelService: AluguelService) {} 
  
  first?: number = 0;
  
  rows?:number = 15 ;
  
  onPageChange(event: PaginatorState) {
    this.first = event.first;
    this.rows = event.rows;
    console.log(event);
    
    this.aluguelService.getAluguelApi(event.page, event.rows);
  }
  
  visible: boolean = false;
  
  showDialog(id:number){
    this.visible = true;
    this.aluguelService.getAluguelById(id);
  }
  
  alterarStatus(id:number) {
    this.aluguelService.putStatus(id);
    this.aluguelService.getAluguelById(id);
  }

ngOnInit(): void {
  console.log(this.aluguelService.getAluguelById);
  this.aluguelService.getAluguelApi();
}
ngDoCheck(): void {
}
}
