import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Menu.module.scss';

const MENU = [
	{
		title: 'Support',
		to: '#',
	},
	{
		title: 'Learning',
		to: '#',
	},
	{
		title: 'Русская версия',
		to: '#',
	},
];

const Menu = ({isActive, onClickButton}) => {
	const handleClick = () => {
		onClickButton && onClickButton();
	};

	return (
		<ul className={styles.menu}>
			{MENU.map(({title, to}, index) => (
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
