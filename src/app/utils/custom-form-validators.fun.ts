import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function sumGreaterThanTenValidator( scoreOneFormControl: string, scoreTwoFormControl: string ): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const firstValue = control.get(scoreOneFormControl)?.value;
    const secondValue = control.get(scoreTwoFormControl)?.value;

    if (firstValue + secondValue > 10) {
      return { sumGreaterThanTen: true }; // Validation fails
    } else {
      return null;
    }
  };
}
