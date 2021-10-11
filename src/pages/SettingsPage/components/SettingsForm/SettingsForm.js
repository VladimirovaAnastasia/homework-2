import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {LabelNumberInput} from '@/components/LabelNumberInput';
import {LabelTextInput} from '@/components/LabelTextInput';
import {ButtonMD} from '@/components/Button';
import {LabelText} from '@/components/LabelText';
import {Error} from '../../../../components/Error';
import useInput from '@/hooks/useInput';
import {setSettings} from '@/store/actions/settings';
import {fetchBuilds} from '@/store/actions/builds';

import styles from './SettingsForm.module.scss';

const SettingsForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const settings = useSelector((state) => state.settings);
	const {loading: isLoading, error: isError} = useSelector((state) => state.builds);

	const repository = useInput(settings.repository, {isEmpty: true});
	const command = useInput(settings.command, {isEmpty: true});
	const branch = useInput(settings.branch);
	const minutes = useInput(settings.minutes);

	const [onValidation, setValidation] = useState(false);

	const openMainPage = async () => {
		await dispatch(fetchBuilds());
		!isError && history.push('/');
	};

	const save = () => {
		setValidation(true);
		if (!repository.isEmpty && !command.isEmpty) {
			dispatch(
				setSettings({
					repository: repository.value,
					command: command.value,
					branch: branch.value,
					minutes: minutes.value,
				})
			);
			openMainPage();
		}
	};

	const cancel = () => {
		openMainPage();
	};

	if (isError) {
		return <Error />;
	}

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
				<ButtonMD handleClick={cancel} isMobileFull={true}>
					{' '}
					Отмена
				</ButtonMD>
			</div>
		</div>
	);
};

export default SettingsForm;
