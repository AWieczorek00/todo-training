import { ActivatedRoute } from '@angular/router';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../../application/ports/secondary/employee.dto';
import { GETS_ALL_EMPLOYEE_DTO, GetsAllEmployeeDtoPort } from '../../../../application/ports/secondary/gets-all-employee.dto-port';
import { GETS_ONE_EMPLOYEE_DTO, GetsOneEmployeeDtoPort } from '../../../../application/ports/secondary/gets-one-employee.dto-port';
import { switchMap } from 'rxjs/operators';
import { CONTEXT_DTO_STORAGE, ContextDtoStoragePort } from '../../../../application/ports/secondary/context-dto.storage-port';

@Component({ selector: 'lib-employee-details', templateUrl: './employee-details.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class EmployeeDetailsComponent {
  // param$ = this.activatedRoute.params;
  employee$: Observable<EmployeeDTO> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap(data => this._getsOneEmployeeDto
        .getOne(data.employeeId)));
  employees$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();

  constructor(
    @Inject(GETS_ALL_EMPLOYEE_DTO) private _getsAllEmployeeDto: GetsAllEmployeeDtoPort,
    @Inject(GETS_ONE_EMPLOYEE_DTO) private _getsOneEmployeeDto: GetsOneEmployeeDtoPort,
    @Inject(CONTEXT_DTO_STORAGE) private _contextDtoStoragePort: ContextDtoStoragePort
  ) {

  }
}
