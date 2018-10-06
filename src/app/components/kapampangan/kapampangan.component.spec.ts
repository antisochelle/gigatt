import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KapampanganComponent } from './kapampangan.component';

describe('DialectComponent', () => {
  let component: KapampanganComponent;
  let fixture: ComponentFixture<KapampanganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KapampanganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KapampanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
