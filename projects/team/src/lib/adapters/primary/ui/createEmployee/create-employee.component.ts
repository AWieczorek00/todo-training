import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_EMPLOYEE_DTO, AddsEmployeeDtoPort } from '../../../../application/ports/secondary/adds-employee.dto-port';

@Component({ selector: 'lib-create-employee', templateUrl: './create-employee.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })
export class CreateEmployeeComponent {
  readonly createEmployee: FormGroup = new FormGroup({
    name: new FormControl(),
    jobPosition: new FormControl(),
    description: new FormControl(),
    education: new FormControl(),
    image: new FormControl()
  });

  constructor(@Inject(ADDS_EMPLOYEE_DTO) private _addsEmployeeDto: AddsEmployeeDtoPort) {
  }

  onCreateEmployeeSubmited(form: FormGroup): void {
    if (form.invalid) {
      return;
    }
    this._addsEmployeeDto.add({
      name: form.get('name').value,
      jobPosition: form.get('jobPosition').value,
      description: form.get('description').value,
      education: form.get('education').value,
      image: form.get('image').value
      

    });
    form.reset;
  }
}
