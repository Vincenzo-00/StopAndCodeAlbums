import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosListComponent } from './photos-list.component';

describe('PhotosListComponent', () => {
  let component: PhotosListComponent;
  let fixture: ComponentFixture<PhotosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
