import {Component} from '@angular/core';

@Component({
    selector: 'app-emplist',
    templateUrl: './emplist.component.html',
    styleUrls: ['./emplist.component.css']

})


export class EmplistComponent{
    emp=[];
    constructor()
    {
        this.emp=[
            {"empid":101,"empname":"Gokool Paithane","empcity":"Nashik"},
            {"empid":102,"empname":"Yogesh Kumbhar","empcity":"Kolhapur"},
            {"empid":103,"empname":"Vishal Nankar","empcity":"Aurngabad"},
            {"empid":104,"empname":"Tushar Mulik","empcity":"Sangli"},
            {"empid":105,"empname":"Omkar Patil","empcity":"Kolhapur"}
        ];
    }
    // DoSomething()
    // {
    //     this.emp.push({})
    // }

    
}




  