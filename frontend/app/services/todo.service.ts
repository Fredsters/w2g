import {Injectable} from '@angular/core';
import {Todo} from "./todo";
import {Http, Response} from "@angular/http"
import {Observable} from "rxjs";

@Injectable()
export class TodoService {
    constructor(private http: Http) {

    }

    getTodos(): Observable<Todo> {
        return this.http.get('/res/data/list_exa.json')
            .map((res:Response) => res.json());
    }
}