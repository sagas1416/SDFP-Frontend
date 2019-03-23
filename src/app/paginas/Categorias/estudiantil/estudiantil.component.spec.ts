import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantilComponent } from './estudiantil.component';

describe('EstudiantilComponent', () => {
  let component: EstudiantilComponent;
  let fixture: ComponentFixture<EstudiantilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiantilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
