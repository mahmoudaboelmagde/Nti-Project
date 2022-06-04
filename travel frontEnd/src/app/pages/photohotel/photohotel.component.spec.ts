import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotohotelComponent } from './photohotel.component';

describe('PhotohotelComponent', () => {
  let component: PhotohotelComponent;
  let fixture: ComponentFixture<PhotohotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotohotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotohotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
