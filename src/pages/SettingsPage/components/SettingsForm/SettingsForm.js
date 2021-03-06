import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {LabelNumberInput} from '@/components/LabelNumberInput';
import {LabelTextInput} from '@/components/LabelTextInput';
import {ButtonMD} from '@/components/Button';
import {LabelText} from '@/components/LabelText';
import useInput from '@/hooks/useInput';

import styles from './SettingsForm.module.scss';

const SettingsForm = () => {
	const history = useHistory();

	const repository = useInput('', {isEmpty: true});
	const command = useInput('', {isEmpty: true});
	const branch = useInput('');
	const minutes = useInput('');

	const [onValidation, setValidation] = useState(false);
	const [isLoading, setLoading] = useState(false);

	const openMainPage = () => {
		history.push('/');
	};

	const save = () => {
		setValidation(true);
		setLoading(true);
		if (!repository.isEmpty && !command.isEmpty) {
			setTimeout(() => {
				openMainPage();
				setLoading(false);
			}, 1000);
		} else {
			setLoading(false);
		}
	};

	const cancel = () => {
		openMainPage();
	};

	return (
		<div className={styles.settingsForm}>
			<LabelText label="Settings" text="Configure repository connection and synchronization settings." />
			<LabelTextInput
				value={repository.value}
				handleChange={repository.onChange}
				label="GitHub repository"
				placeholder="user-name/repo-name"
				error={onValidation && repository.isEmpty}
				isRequired
			/>
			<LabelTextInput
				value={command.value}
				handleChange={command.onChange}
				label="Build command"
				placeholder="npm start"
				error={onValidation && command.isEmpty}
				isRequired
			/>
			<LabelTextInput
				value={branch.value}
				handleChange={branch.onChange}
				label="Main branch"
				placeholder="master"
			/>
			<LabelNumberInput
				value={minutes.value}
				handleChange={minutes.onChange}
				label="Synchronize every"
				placeholder="0"
				unit="minutes"
				width={52}
				maxLength={3}
			/>

			<div className={styles.buttons}>
				<ButtonMD
					handleClick={save}
					type="action"
					hasNextButton={true}
					isMobileFull={true}
					isLoading={isLoading}
				>
					Save
				</ButtonMD>
				<ButtonMD handleClick={cancel} isMobileFull={true} isLoading={isLoading}>
					Cancel
				</ButtonMD>
			</div>
		</div>
	);
};

export default SettingsForm;
