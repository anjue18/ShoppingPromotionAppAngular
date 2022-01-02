import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { DeptartmentComponent } from './deptartment.component';
import { Promotion } from '../model/promotion';

describe('DeptartmentComponent', () => {
  let component: DeptartmentComponent;
  let fixture: ComponentFixture<DeptartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptartmentComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

 
  beforeEach(() => {
    fixture = TestBed.createComponent(DeptartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render Descriptions', () => {
    let promotion:Promotion;
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h6')?.textContent).toContain('Sour Cream Lays');
  });
});
