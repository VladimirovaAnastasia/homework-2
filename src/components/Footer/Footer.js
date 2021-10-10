import React from 'react';
import {Menu} from '../Menu';

import styles from './Footer.module.scss';

const Footer = () => (
	<div className={styles.footerContainer}>
		<div className={styles.footer}>
			<Menu />
			<p className={styles.footerText}>© 2021 Anastasiya Vladimirova</p>
		</div>
	</div>
);

export default Footer;
