import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemuPrincipalComponent } from './memu-principal.component';

describe('MemuPrincipalComponent', () => {
  let component: MemuPrincipalComponent;
  let fixture: ComponentFixture<MemuPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemuPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemuPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
