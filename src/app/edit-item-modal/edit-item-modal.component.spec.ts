import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemModalComponent } from './edit-item-model.component';

describe('EditItemModelComponent', () => {
  let component: EditItemModalComponent;
  let fixture: ComponentFixture<EditItemModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditItemModalComponent]
    });
    fixture = TestBed.createComponent(EditItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
