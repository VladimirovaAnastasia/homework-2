import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {LabelText} from '../LabelText';
import {ButtonMD} from '../Button';
import {LabelTextInput} from '../LabelTextInput';
import useInput from '@/hooks/useInput';

import styles from './Modal.module.scss';

const Modal = ({handleSave, handleClose, isLoading}) => {
	const modalContainer = React.createRef();

	const hash = useInput('', {isEmpty: true, minLength: 4});

	const [onValidation, setValidation] = useState(false);

	const handleSaveClick = () => {
		setValidation(true);
		if (!hash.isEmpty && !hash.minLengthError) {
			handleSave();
		}
	};

	const handleUserKeyPress = (event) => {
		if (event.keyCode === 27) {
			handleClose();
		}
	};

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		document.addEventListener('keydown', handleUserKeyPress);
		return () => {
			document.removeEventListener('keydown', handleUserKeyPress);
			document.body.style.overflow = 'unset';
		};
	}, []);

	const handleModalContainerClick = (event) => {
		if (modalContainer.current === event.target) {
			handleClose();
		}
	};

	return ReactDOM.createPortal(
		<div className={styles.modalContainer} onClick={handleModalContainerClick} ref={modalContainer}>
			<div className={styles.Modal}>
				<LabelText
					label="New build"
					text="Enter the commit hash which you want to build."
					className="textMain"
				/>
				<LabelTextInput
					autoFocus
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
