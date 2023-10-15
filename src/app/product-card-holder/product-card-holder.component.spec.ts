import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardHolderComponent } from './product-card-holder.component';

describe('ProductCardHolderComponent', () => {
  let component: ProductCardHolderComponent;
  let fixture: ComponentFixture<ProductCardHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardHolderComponent]
    });
    fixture = TestBed.createComponent(ProductCardHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
