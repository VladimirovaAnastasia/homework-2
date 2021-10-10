import React from 'react';
import {ReactComponent as LoaderSvg} from '@/assets/icons/loader.svg';

import styles from './Loader.module.scss';

const Loader = () => {
	return (
		<div className={styles.loader}>
			<LoaderSvg />
		</div>
	);
};

export default Loader;
