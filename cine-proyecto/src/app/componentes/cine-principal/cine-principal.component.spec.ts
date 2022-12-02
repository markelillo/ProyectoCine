import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinePrincipalComponent } from './cine-principal.component';

describe('CinePrincipalComponent', () => {
  let component: CinePrincipalComponent;
  let fixture: ComponentFixture<CinePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinePrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CinePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
