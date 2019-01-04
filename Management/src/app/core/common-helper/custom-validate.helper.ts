import { AbstractControl } from "@angular/forms";

const DEFAULT_INVALID_DIGITS = {
    Digits: true,
    message: 'Please enter number'
};

const DEFAULT_INVALID_LENGTH_NUMBER = {
    Lengthh: true,
    message: 'Max length is 16 and min length is 10'
};

const DEFAULT_INVALID_LENGTH_TEXT = {
    Lengthh: true,
    message: 'Max length is 50 and min length is 10'
}

const DEFAULT_INVALID_LENGTH_KTP_NPWP = {
    Lengthh: true,
    message: 'Max length is 17 and min length is 12'
}

const DEFAULT_INVALID_EMAIL = {
    Email: true,
    message: 'Please enter follow by format email'
};

const DEFAULT_INVALID_REQUIRED = {
    Required: true,
    message: 'This field is required'
};

const DEFAULT_SALARY_REQUIRED = {
    Salary: true,
    message: 'Salary must bigger than 3500000'
};

const ERRORS_FILE = {
    Errors: true,
    message: 'Please insert file'
};

const INVALID_BIRTHDAY = {
    Birthday: true,
    message: 'Must bigger than 18 years old'
};

const DEFAULT_INVALID_SPECIAL_CHAR = {
    Special: true,
    message: 'Do not contain special characters'
}

const DIGITS_PATTERN = '^\\d+$';
const SALARY_PATTEN = '^[0-9, ]*$';
const NOT_SPECIAL_CHARACTERS_FOR_EMAIL = '^[a-zA-Z0-9-. ]*$';
const NOT_SPECIAL_CHARACTERS = '^[a-zA-Z0-9 ]*$';
// /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/ /^[0-9,.]*$/
const NOT_SPECIAL_CHARACTERS_CONTAIN_DOT = '^[a-zA-Z0-9,./_ ]*$';
const EMAIL_PATTERN = /[a-z0-9-.]+@([a-z0-9]+\.){1,}([a-z]{2,16})/;


export function salaryInput(control: AbstractControl) {
    let pattern = new RegExp(DIGITS_PATTERN);
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }
    if (pattern.test(control.value) == false && control.value != "") {
        return DEFAULT_SALARY_REQUIRED;
    }
    return null;
}

export function notRequiredButDigits(control: AbstractControl) {
    let pattern = new RegExp(DIGITS_PATTERN);
    if (pattern.test(control.value) == false && control.value != "") {
        return DEFAULT_INVALID_DIGITS;
    }
    if (control.value.length > 0) {
        if ((control.value.length < 10 || control.value.length > 15)) {
            return DEFAULT_INVALID_LENGTH_NUMBER;
        }
    } else return null
    return null;
}

export function notContainSpecialCharacters(control: AbstractControl) {
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }
    let pattern = new RegExp(NOT_SPECIAL_CHARACTERS);
    if (pattern.test(control.value) == false && control.value != "") {
        return DEFAULT_INVALID_SPECIAL_CHAR;
    }
    return null;
}

export function notContainSpecialCharactersForName(control: AbstractControl) {
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }
    if ((control.value.length < 3 || control.value.length > 50)) {
        return {
            Lengthh: true,
            message: 'Max length is 50 and min length is 3'
        };
    }

    let pattern2 = new RegExp(DIGITS_PATTERN);
    if (pattern2.test(control.value) == true && control.value != "") {
        return {
            Special: true,
            message: 'Must contain alphabet'
        };
    }
    let pattern = new RegExp(NOT_SPECIAL_CHARACTERS_CONTAIN_DOT);
    if (pattern.test(control.value) == false && control.value != "") {
        return DEFAULT_INVALID_SPECIAL_CHAR;
    }

    return null;
}

export function onlyDigit(control: AbstractControl) {
    let pattern = new RegExp(DIGITS_PATTERN);
    if (pattern.test(control.value) == false) {
        return DEFAULT_INVALID_DIGITS;
    }
    return null;
}

export function validateForMonthlySalary(control: AbstractControl) {
    let pattern = new RegExp(SALARY_PATTEN);
    if (pattern.test(control.value) == false) {
        return DEFAULT_INVALID_DIGITS;
    }
    return null;
}

export function emailValidation(control: AbstractControl) {
    let str1 = control.value.split("@")[0];
    let pattern = new RegExp(EMAIL_PATTERN);
    let pattern2 = new RegExp(NOT_SPECIAL_CHARACTERS_FOR_EMAIL);
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }
    if (pattern2.test(str1) == false) {
        return DEFAULT_INVALID_EMAIL;
    }
    if (pattern.test(control.value) == false) {
        return DEFAULT_INVALID_EMAIL;
    }
    return;
}

export function requiredInput(control: AbstractControl) {
    // let response = control.value.trim();
    // if(control.value == '' || control.value == null || control.value == undefined) {
    //     return DEFAULT_INVALID_REQUIRED;
    // } else if(control.value.trim() != '' || control.value.trim() != null || control.value.trim() != undefined) 
    // {
    //     return DEFAULT_INVALID_REQUIRED;
    // }
    // return null;
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }

    return null;
}

export function salaryRequired(control: AbstractControl) {
    let pattern = new RegExp(SALARY_PATTEN);
    if (pattern.test(control.value) == false) {
        return DEFAULT_INVALID_DIGITS;
    }
    let controlValue = control.value.toString();
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }
    else if ((parseFloat(controlValue.replace(/,/g, '')) < 3500000 || parseFloat(controlValue.replace(/,/g, '')) > 100000000) && control.value != "") {
        return {
            Salary: true,
            message: 'Salary must bigger than 3500000 and lower than 100,000,000'
        }
    }
    return null;
}

export function allErrorsFile(control: AbstractControl) {
    return ERRORS_FILE;
}

export function Null(control: AbstractControl) {
    return null;
}

export function validateBirthDay(control: AbstractControl) {
    let birthDay: Date;
    let now = new Date();
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }
    if (control.value != "" || control.value == undefined) {
        birthDay = control.value;
        if (birthDay.getFullYear() < 1930) {
            return {
                Birthday: true,
                message: 'Min year of birth is 1930'
            }
        }
        if ((now.getFullYear() - birthDay.getFullYear()) < 18) {
            return INVALID_BIRTHDAY;
        }
    }
    return null;
}

// export function validLength(control : AbstractControl) {

// }


export function validLength(control: AbstractControl) {
    let pattern = new RegExp(DIGITS_PATTERN);
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }
    if (pattern.test(control.value) == true) {
        if ((control.value.length < 10 || control.value.length > 15)) {
            return DEFAULT_INVALID_LENGTH_NUMBER;
        }
    }
    return null;
}

export function validLengthForText(control: AbstractControl) {
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }
    let pattern = new RegExp(NOT_SPECIAL_CHARACTERS);
    if (pattern.test(control.value) == false && control.value != "") {
        return DEFAULT_INVALID_SPECIAL_CHAR;
    }
    if ((control.value.length < 10 || control.value.length > 50)) {
        return DEFAULT_INVALID_LENGTH_TEXT;
    }

    return null;
}

export function validateLengthForNpwp(control: AbstractControl) {
    let pattern = new RegExp(DIGITS_PATTERN);
    if (pattern.test(control.value) == false) {
        return {
            Digits: true,
            message: 'Please enter number (Do not contain space)'
        }
    }
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }
    if ((control.value.length != 15)) {
        return {
            Lengthh: true,
            message: 'Length is 15'
        };
    } else
        return null;
}

export function validateLengthForKTP(control: AbstractControl) {
    let pattern = new RegExp(DIGITS_PATTERN);
    if (pattern.test(control.value) == false) {
        return {
            Digits: true,
            message: 'Please enter number (Do not contain space)'
        }
    }
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }
    if ((control.value.length != 16)) {
        return {
            Lengthh: true,
            message: 'Length is 16'
        };
    } else
        return null;
}

export function validateLengthPayrollBank(control: AbstractControl) {
    let pattern = new RegExp(DIGITS_PATTERN);
    if (pattern.test(control.value) == false) {
        return DEFAULT_INVALID_DIGITS;
    }
    if (!control.value || typeof control.value === 'string' && !control.value.trim()) {
        return DEFAULT_INVALID_REQUIRED;
    }
    if ((control.value.length < 10 || control.value.length > 18)) {
        return {
            Lengthh: true,
            message: 'Max length is 18 and min length is 10'
        };
    } else
        return null;
}
// export function minLength(length: number) {
//     return (control: AbstractControl) => {
//       if (!control.value || typeof control.value === 'string' && control.value.trim().length < length) {
//         return {
//           minlength: true
//         };
//       }

//       return null;
//     };
//   }

//   export function maxLength(length: number) {
//     return (control: AbstractControl) => {
//       if (control.value && typeof control.value === 'string' && control.value.trim().length > length) {
//         return {
//           maxlength: true
//         };
//       }

//       return null;
//     };
//   }
// export function validateByRegex(string: string, patterns: string) {
//     let pattern = new RegExp(patterns);
//     return pattern.test(string);
//   }
