import React from 'react';

import styles from './Header.module.scss';

const Header = ({children}) => {
	return (
		<div className={styles.headerWrapper}>
			<div className={styles.header}>{children}</div>
		</div>
	);
};

export default Header;
