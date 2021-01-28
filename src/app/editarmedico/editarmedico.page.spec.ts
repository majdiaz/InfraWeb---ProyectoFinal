import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarmedicoPage } from './editarmedico.page';

describe('EditarmedicoPage', () => {
  let component: EditarmedicoPage;
  let fixture: ComponentFixture<EditarmedicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarmedicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarmedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
