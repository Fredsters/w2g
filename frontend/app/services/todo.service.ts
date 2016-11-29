import {Injectable} from '@angular/core';
import {Todo} from "./todo";
import {Observable} from "rxjs/Rx";
import {Response, Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class TodoService {
    constructor(private http: Http) {

    }

    private todoUrl = '/res/data/list_exa.json';

    getTodos(): Observable<JSON> {
        return this.http.get(this.todoUrl)
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}