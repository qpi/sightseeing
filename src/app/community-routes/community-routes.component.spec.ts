import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityRoutesComponent } from './community-routes.component';

describe('CommunityRoutesComponent', () => {
  let component: CommunityRoutesComponent;
  let fixture: ComponentFixture<CommunityRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
