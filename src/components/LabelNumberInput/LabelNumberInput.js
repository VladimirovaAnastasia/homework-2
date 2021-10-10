import React from 'react';
import {NumberInput} from '../Input';
import {LabelComponent} from '../LabelComponent';

const LabelNumberInput = ({value, handleChange, placeholder, width, maxLength, label, unit}) => {
	return (
		<LabelComponent label={label} direction="row">
			<NumberInput
				value={value}
				handleChange={handleChange}
				width={width}
				maxLength={maxLength}
				placeholder={placeholder}
				unit={unit}
			/>
		</LabelComponent>
	);
};

export default LabelNumberInput;
