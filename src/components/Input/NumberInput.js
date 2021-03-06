import React from 'react';
import InputBase from './InputBase';

import styles from './Input.module.scss';

const pattern = /\D/g;

const NumberInput = ({value, handleChange, width, unit, placeholder, maxLength}) => {
	const handleNumberInputChange = (value) => {
		if (value.match(pattern)) {
			return;
		}
		handleChange(value);
	};

	return (
		<>
			<InputBase
				value={value}
				handleChange={handleNumberInputChange}
				width={width}
				maxLength={maxLength}
				placeholder={placeholder}
				className="numberInput"
			/>
			{unit && <p className={styles.textUnit}>{unit}</p>}
		</>
	);
};

export default NumberInput;
