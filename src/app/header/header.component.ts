import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component( {
    selector: 'app-header',
    templateUrl: 'header.Component.html'
})

export class HeaderComponent {
     color = '';
    constructor(private dataStorageService: DataStorageService) {}

    onSaveData() {
        console.log('save data called');
        this.dataStorageService.storeRecipes().
        subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

}
