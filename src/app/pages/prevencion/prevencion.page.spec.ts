import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrevencionPage } from './prevencion.page';

describe('PrevencionPage', () => {
  let component: PrevencionPage;
  let fixture: ComponentFixture<PrevencionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevencionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrevencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
