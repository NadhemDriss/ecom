import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitModifComponent } from './produit-modif.component';

describe('ProduitModifComponent', () => {
  let component: ProduitModifComponent;
  let fixture: ComponentFixture<ProduitModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
