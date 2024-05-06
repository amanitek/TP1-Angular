import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  message:string='bonjour,monde! ';
  constructor(){}

  ngOnInit():void{}

  changerMessage(): void {
    this.message = 'Nouveau message!';
    }
}