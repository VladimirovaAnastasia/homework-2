import React from 'react';
import classNames from 'classnames';
import {ReactComponent as LoaderSvg} from '@/assets/icons/loader.svg';

import styles from './Loader.module.scss';

const Loader = ({isContainer}) => {
	return (
		<div className={classNames(styles.loader, {[styles.loaderContainer]: isContainer})}>
			<LoaderSvg />
		</div>
	);
};

export default Loader;
