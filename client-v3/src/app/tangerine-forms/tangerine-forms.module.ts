import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyBootstrapModule } from 'ng-formly';
import { tangerineFormSessionReducer } from './reducers/tangerine-session';
import { TangerineFormComponent } from './containers/tangerine-form/tangerine-form.component';
// import { TangerineFormPageComponent } from './components/tangerine-form-page/tangerine-form-page.component';
import { TangerineFormsRoutingModule } from './tangerine-forms-routing.module';
import { TangerineFormsDemoComponent } from './routes/tangerine-forms-demo/tangerine-forms-demo.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TangerineFormsRoutingModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    StoreModule.provideStore({ tangerineFormSession: tangerineFormSessionReducer })
  ],
  declarations: [
    TangerineFormComponent,
//    TangerineFormPageComponent,
    TangerineFormsDemoComponent
  ]
})
export class TangerineFormsModule { }
