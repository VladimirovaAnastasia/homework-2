import {useState} from 'react';
import useValidation from './useValidation';

export default function useInput(initialValue, validations) {
	const [value, setValue] = useState(initialValue);
	const valid = useValidation(value, validations);

	const onChange = (value) => {
		setValue(value);
	};

	return {
		value,
		onChange,
		...valid,
	};
}
