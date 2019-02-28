export const required = value => (value ? undefined : 'Required');
export const nonEmpty = value => {
    // console.log('value', value);
    return value.trim() !== '' ? undefined : 'Cannot be empty';
};
export const isTrimmed = value =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';
    
export const minLength = min => value => 
    value && value.length < min ? `Must be at least ${min} characters long` : undefined;

export const maxLength = max => value => 
    value && value.length > max ? `Must be at most ${max} characters long` : undefined;

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';