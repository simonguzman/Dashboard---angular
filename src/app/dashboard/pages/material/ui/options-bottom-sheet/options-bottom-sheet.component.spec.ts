import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsBottomSheetComponent } from './options-bottom-sheet.component';

describe('OptionsBottomSheetComponent', () => {
  let component: OptionsBottomSheetComponent;
  let fixture: ComponentFixture<OptionsBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsBottomSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
