import React from 'react';
import {Header} from '@/components/Header';
import {SettingsForm} from './components/SettingsForm';

import styles from './SettingsPage.module.scss';

const SettingsPage = () => {
	return (
		<>
			<Header>
				<h1 className={styles.settingsPageTitle}>School CI server</h1>
			</Header>
			<div className={styles.settingsPageBody}>
				<SettingsForm />
			</div>
		</>
	);
};

export default SettingsPage;
