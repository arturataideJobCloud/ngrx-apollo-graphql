import { NgModule } from '@angular/core';
import { EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { environment } from 'environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25, // retains last 25 states
        })
      : [],
  ],
})
export class MainStoreModule {}
