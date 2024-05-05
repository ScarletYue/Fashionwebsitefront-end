import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.css']
})
export class LienheComponent {
  constructor(private router: Router) {}

  navigateToFormLog() {
    this.router.navigate(['/formlog']);
  }
}
