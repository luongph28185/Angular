import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuitmentComponent } from './recuitment.component';

describe('RecuitmentComponent', () => {
  let component: RecuitmentComponent;
  let fixture: ComponentFixture<RecuitmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuitmentComponent]
    });
    fixture = TestBed.createComponent(RecuitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
