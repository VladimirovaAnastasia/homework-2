import React from 'react';
import {LabelComponent} from '../LabelComponent';
import {TextInput} from '../Input';

const LabelTextInput = ({value, handleChange, placeholder, width, maxLength, label, error, isRequired = false}) => {
	return (
		<LabelComponent label={label} direction="col" isRequired={isRequired}>
			<TextInput
				value={value}
				width={width}
				maxLength={maxLength}
				handleChange={handleChange}
				placeholder={placeholder}
				error={error}
				isRequired={isRequired}
			/>
		</LabelComponent>
	);
};

export default LabelTextInput;
