import {Component, Input} from '@angular/core';
import {Todo} from "../../services/todo";

@Component({
    selector: 'list',
    templateUrl: 'app/components/todo/list.component.html'
})
export class ListComponent implements onInit{
    todos : Array<Todo>


}