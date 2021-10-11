import React from 'react';
import {Menu} from '../Menu';

import styles from './Footer.module.scss';

const Footer = ({links, copyright}) => (
	<div className={styles.footerContainer}>
		<div className={styles.footer}>
			<Menu links={links} />
			<p className={styles.footerText}>© 2021 {copyright}</p>
		</div>
	</div>
);

export default Footer;
