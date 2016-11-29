import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../services/todo";
import {TodoService} from "../../services/todo.service";

@Component({
    selector: 'list',
    templateUrl: 'app/components/todo/list.component.html'
})
export class ListComponent implements OnInit {
    todos: any[];

    constructor(private todoService : TodoService){

    }

    ngOnInit(): void {
        this.todos = [];
        console.log(this.todoService.getTodos().first.length);
        this.todoService.getTodos().subscribe(value=>this.todos.push(value))

    }

}