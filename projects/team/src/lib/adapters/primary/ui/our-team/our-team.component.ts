import { Observable, of } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
// import { EmployeeDTO } from 'projects/team/src/lib/application/ports/secondary/employee.dto';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { EmployeeDTO } from '../../../../application/ports/secondary/employee.dto';
import { GETS_ALL_EMPLOYEE_DTO, GetsAllEmployeeDtoPort } from '../../../../application/ports/secondary/gets-all-employee.dto-port';

@Component({
  selector: 'lib-our-team',
  templateUrl: './our-team.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OurTeamComponent {

  // employees$: Observable<EmployeeDTO[]> = of([
  //     {
  //         image: 'http://karboklinika.pl/wp-content/uploads/2020/04/elegancki-mezczyzna-682x1024.jpg',
  //         name: 'Adam Wieczorek',
  //         jobPosition: 'Główny programista',
  //         description: 'Spełniony programista, chetny na nowe wyzwania. Wolnym czasie od pracy uprawia sport.',
  //         department:{
  //             name:'CEO',
  //             employeeCount: 1
  //         }

  //     },
  //     {
  //         image: 'https://student.studentka.pl/img/wo/2/88/mezczyzna-obrazek_sredni_4025288.jpg',
  //         name: 'Dominik Jasiński',
  //         jobPosition: 'Data science, Programista',
  //         description: 'Bazy danych to mój konik. Jest jakiś błąd? Ja go rowiążę. W wolnym czasie tworzę gry mobilne.',
  //         department:{
  //             name:'Data science',
  //             employeeCount: 2
  //         }
  //     },
  //     {
  //         image: 'https://polki.pl/foto/4_3_LARGE_0200/garderoba-bizneswoman-od-nife-420736.jpg',
  //         name: 'Łucja Jasińska',
  //         jobPosition: 'Ui design, Programista',
  //         description: 'Wygląd aplikacji jest dla mnie najważniejsze. W wolnym czasie zajmuje się ogrodem.',
  //         department:{
  //             name:'Ui design',
  //             employeeCount: 3
  //         }
  //     }
  // ]);
  employees$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();

  constructor(@Inject(GETS_ALL_EMPLOYEE_DTO) private _getsAllEmployeeDto: GetsAllEmployeeDtoPort) {
  }
}
