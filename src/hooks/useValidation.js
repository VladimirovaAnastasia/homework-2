import {useState, useEffect} from 'react';

export default function useValidation(value, validations) {
	const [isEmpty, setEmpty] = useState(true);
	const [minLengthError, setMinLengthError] = useState(false);

	useEffect(() => {
		for (let validation in validations) {
			switch (validation) {
				case 'minLength':
					value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
					break;
				case 'isEmpty':
					value ? setEmpty(false) : setEmpty(true);
					break;
			}
		}
	}, [value]);

	return {
		isEmpty,
		minLengthError,
	};
}
