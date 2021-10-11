import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Menu.module.scss';

const Menu = ({links, onClickButton}) => {
	const handleClick = () => {
		onClickButton && onClickButton();
	};

	return (
		<ul className={styles.menu}>
			{links.map(({title, to}, index) => (
				<li key={index} className={styles.menuItem}>
					<Link className={styles.link} to={to} onClick={handleClick}>
						{title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Menu;
