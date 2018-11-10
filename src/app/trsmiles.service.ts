import {Injectable} from '@angular/core';

@Injectable()

export class Trsmiles {
    users = [{name: 'bob'},
            {name: 'dave'},
            {name: 'mike'}
        ];
    constructor() { }
    getusers(): {}[] {
        return this.users;
    }
}
