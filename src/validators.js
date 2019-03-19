export const required = value => (value ? undefined : 'Required');

export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Cannot be empty';

export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';

export const minLength = min => value => 
    value && value.length < min ? `Must be at least ${min} characters long` : undefined;

export const maxLength = max => value => 
    value && value.length > max ? `Must be at most ${max} characters long` : undefined;

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim() ? undefined : 'Does not match';

export const phoneNumber = value =>
    value && !/^(0|[0-9]{3}-[0-9]{3}-[0-9]{4})$/i.test(value) ? 'Invalid phone number format. Please use xxx-xxx-xxxx' : undefined;

    export const faxNumber = value =>
    value && !/^(0|[0-9]{3}-[0-9]{3}-[0-9]{4})$/i.test(value) ? 'Invalid fax number format. Please use xxx-xxx-xxxx' : undefined;

export const zipCode = value =>
    value && !/^(0|[0-9]{5})$/i.test(value) ? 'Invalid zip code format. Please use 5 digits' : undefined;

export const alphabetic = value => 
    value && /[^a-zA-Z]/i.test(value) ? 'Characters only' : undefined;

export const ssn = value =>
    value && !/^\d{9}$/.test(value) ? 'Invalid SSN format. Please use 9 digits': undefined;

export const stateAbbrv = value => 
    value && !/^(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*$/.test(value) ? 'Invalid state abbreviation. Please use only 2 uppercase letters' : undefined;