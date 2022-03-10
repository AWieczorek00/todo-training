import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeDTO } from 'projects/team/src/lib/application/ports/secondary/employee.dto';

@Component({
    selector: 'lib-our-team',
    templateUrl: './our-team.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurTeamComponent {

    employees = of([
        {
            src: 'http://karboklinika.pl/wp-content/uploads/2020/04/elegancki-mezczyzna-682x1024.jpg',
            name: 'Adam Wieczorek',
            jobPosition: 'Główny programista',
            description: 'Spełniony programista, chetny na nowe wyzwania. Wolnym czasie od pracy uprawia sport.'
            
        },
        {
            src: 'https://student.studentka.pl/img/wo/2/88/mezczyzna-obrazek_sredni_4025288.jpg',
            name: 'Dominik Jasiński',
            jobPosition: 'Data science, Programista',
            description: 'Bazy danych to mój konik. Jest jakiś błąd? Ja go rowiążę. W wolnym czasie tworzę gry mobilne.'
        },
        {
            src: 'https://polki.pl/foto/4_3_LARGE_0200/garderoba-bizneswoman-od-nife-420736.jpg',
            name: 'Łucja Jasińska',
            jobPosition: 'Ui design, Programista',
            description: 'Wygląd aplikacji jest dla mnie najważniejsze. W wolnym czasie zajmuje się ogrodem.'
        }
    ]);
  
}