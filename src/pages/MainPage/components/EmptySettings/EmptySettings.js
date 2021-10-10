import React from 'react';
import {useHistory} from 'react-router-dom';
import {ButtonMD} from '@/components/Button';
import {ReactComponent as EmptySettingsSvg} from '@/assets/icons/need-config.svg';

import styles from './EmptySettings.module.scss';

const EmptySettings = () => {
	const history = useHistory();

	const openSettingsPage = () => {
		history.push('/settings');
	};

	return (
		<div className={styles.emptySettings}>
			<EmptySettingsSvg className={styles.img} />
			<p className={styles.text}>
				Configure repository connection <br /> and synchronization settings
			</p>
			<ButtonMD handleClick={openSettingsPage} type="action">
				Open settings
			</ButtonMD>
		</div>
	);
};

export default EmptySettings;
