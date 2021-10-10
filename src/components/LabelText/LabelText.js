import React from 'react';
import classNames from 'classnames';
import {LabelComponent} from '../LabelComponent';

import styles from './LabelText.module.scss';

const LabelText = ({label, text, className}) => {
	return (
		<LabelComponent label={label} direction="col" className="title">
			<p className={classNames(styles.text, styles[className])}>{text}</p>
		</LabelComponent>
	);
};

export default LabelText;
