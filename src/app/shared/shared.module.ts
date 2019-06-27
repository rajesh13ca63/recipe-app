import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HighlightDirective
    ],
    exports: [
        CommonModule,
        HighlightDirective
    ]
})
export class SharedModule {

}
