import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkBoxValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		let minChecked: number = 5;
		let countChecked: number = 0;
		let tempArr: boolean[] = control.value;

		tempArr.forEach((state) => {
			if (state) {
				countChecked++;
			}
		});

		const isValid = countChecked >= minChecked;

		return !isValid ? { checkBox: true } : null;
	};
}
