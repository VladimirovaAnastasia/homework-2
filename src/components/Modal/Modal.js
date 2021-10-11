import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {LabelText} from '../LabelText';
import {ButtonMD} from '../Button';
import {LabelTextInput} from '../LabelTextInput';
import useInput from '@/hooks/useInput';

import styles from './Modal.module.scss';

const Modal = ({handleSave, handleClose, isLoading}) => {
	const hash = useInput('', {isEmpty: true, minLength: 4});

	const [onValidation, setValidation] = useState(false);

	const handleSaveClick = () => {
		setValidation(true);
		if (!hash.isEmpty && !hash.minLengthError) {
			handleSave();
		}
	};

	return ReactDOM.createPortal(
		<div className={styles.modalContainer}>
			<div className={styles.Modal}>
				<LabelText
					label="New build"
					text="Enter the commit hash which you want to build."
					className="textMain"
				/>
				<LabelTextInput
					value={hash.value}
					handleChange={hash.onChange}
					placeholder="Commit hash"
					error={onValidation && (hash.isEmpty || hash.minLengthError)}
				/>

				<div className={styles.modalButtons}>
					<ButtonMD
						handleClick={handleSaveClick}
						type="action"
						hasNextButton={true}
						isMobileFull={true}
						isLoading={isLoading}
					>
						Run Build
					</ButtonMD>
					<ButtonMD handleClick={handleClose} isMobileFull={true} isLoading={isLoading}>
						Cancel
					</ButtonMD>
				</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
