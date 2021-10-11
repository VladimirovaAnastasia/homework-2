import React from 'react';
import {ReactComponent as Lamp} from '@/assets/icons/lightbulb.svg';
import {ReactComponent as LampLight} from '@/assets/icons/lightbulb--dark.svg';

import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = ({isLight, handleClick}) => {
	return isLight ? (
		<Lamp className={styles.icon} onClick={handleClick} />
	) : (
		<LampLight className={styles.icon} onClick={handleClick} />
	);
};

export default ThemeSwitcher;
