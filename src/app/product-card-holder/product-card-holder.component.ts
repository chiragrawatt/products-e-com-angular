import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-card-holder',
  templateUrl: './product-card-holder.component.html',
  styleUrls: ['./product-card-holder.component.css']
})
export class ProductCardHolderComponent {
  @Input() products : Product[] = [];
}
