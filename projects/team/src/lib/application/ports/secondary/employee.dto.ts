import { DepartmentDTO } from "./department.dto";

export interface EmployeeDTO {
  readonly id: string;
  readonly image: string;
  readonly name: string;
  readonly jobPosition: string;
  readonly description: string;
  readonly education?: string;
  readonly department?: DepartmentDTO;
}
