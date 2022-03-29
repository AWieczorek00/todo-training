import { ActivatedRoute } from '@angular/router';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../../application/ports/secondary/employee.dto';
import { GETS_ALL_EMPLOYEE_DTO, GetsAllEmployeeDtoPort } from '../../../../application/ports/secondary/gets-all-employee.dto-port';
import { GETS_ONE_EMPLOYEE_DTO, GetsOneEmployeeDtoPort } from '../../../../application/ports/secondary/gets-one-employee.dto-port';

@Component({ selector: 'lib-employee-details', templateUrl: './employee-details.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class EmployeeDetailsComponent {
  // param$ = this.activatedRoute.params;
  employees$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();
  employee$: Observable<EmployeeDTO> = this._getsOneEmployeeDto.getOne(
    this.activatedRoute.snapshot.params.employeeId
    );

  constructor(
    private activatedRoute: ActivatedRoute,
    @Inject(GETS_ALL_EMPLOYEE_DTO) private _getsAllEmployeeDto: GetsAllEmployeeDtoPort,
    @Inject(GETS_ONE_EMPLOYEE_DTO) private _getsOneEmployeeDto: GetsOneEmployeeDtoPort,
     ) {

  }
}
