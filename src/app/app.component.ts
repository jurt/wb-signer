import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    Array = Array;
    window = window;

    line1 = 'Зошит';
    line2 = 'для робіт з %предмету%';
    line3 = 'учня 4-В класу';
    line4 = 'ЗОШ №18';
    line5 = 'м. Біла Церква';
    line6 = 'Іванова Вані';

    addingDiscipline = false;


    disciplines = [{
        name: 'математики',
        amount: 2
    },{
        name: 'української мови',
        amount: 2
    }];
    newDisciplineName  = '';

    add() {
        this.disciplines.push({
            name: this.newDisciplineName,
            amount: 2
        });
        this.newDisciplineName = '';
        this.addingDiscipline = false;
    }
}
