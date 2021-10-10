import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {EmptySettings} from './components/EmptySettings';
import {BuildCard} from './components/BuildCard';
import ButtonSM from '@/components/Button/ButtonSM';
import {ReactComponent as SettingsSvg} from '@/assets/icons/settings.svg';
import {ReactComponent as BuildSvg} from '@/assets/icons/play.svg';
import {Header} from '@/components/Header';
import {Modal} from '@/components/Modal';

import styles from './MainPage.module.scss';

const buildCards = [
	{
		status: 'fail',
	},
	{
		status: 'done',
	},
	{
		status: 'wait',
	},
	{
		status: 'fail',
	},
	{
		status: 'done',
	},
	{
		status: 'wait',
	},
	{
		status: 'fail',
	},
	{
		status: 'done',
	},
	{
		status: 'wait',
	},
	{
		status: 'fail',
	},
	{
		status: 'done',
	},
	{
		status: 'wait',
	},
];

const MainPage = () => {
	const history = useHistory();

	const isSettings = !localStorage.getItem('isEmpty');

	const cardsPerPage = window.innerWidth <= 768 ? 6 : 9;
	const [isOpenModal, setOpenModal] = useState(false);
	const [isLoadingModal, setLoadingModal] = useState(false);
	const [showedCardsCount, setShowedCardsCount] = useState(cardsPerPage);

	const handleClick = () => {
		setOpenModal((prev) => !prev);
	};

	const handleCloseClick = () => {
		setOpenModal((prev) => !prev);
	};

	const handleSaveClick = () => {
		setLoadingModal(true);
		setTimeout(() => {
			setLoadingModal(false);
			setOpenModal((prev) => !prev);
		}, 1000);
	};

	const openSettingsPage = () => {
		history.push('/settings');
	};

	const handleShowMoreClick = () => {
		setShowedCardsCount((prev) => prev + cardsPerPage);
	};

	return (
		<>
			<Header>
				{isSettings ? (
					<>
						<h1 className={styles.headerTitle}>philip1967/my-awesome-repo</h1>
						<div className={styles.headerButtons}>
							<ButtonSM icon={<BuildSvg />} handleClick={handleClick} hasNextButton={true}>
								Run Build
							</ButtonSM>
							<ButtonSM icon={<SettingsSvg />} handleClick={openSettingsPage} />
						</div>
					</>
				) : (
					<>
						<h1>School CI server</h1>
						<ButtonSM icon={<SettingsSvg />} handleClick={openSettingsPage}>
							Settings
						</ButtonSM>
					</>
				)}
			</Header>
			{isOpenModal && (
				<Modal handleClose={handleCloseClick} handleSave={handleSaveClick} isLoading={isLoadingModal} />
			)}

			{isSettings ? (
				<div className={styles.mainPage}>
					{buildCards.map(
						(buildCard, index) =>
							index < showedCardsCount && <BuildCard key={buildCard + index} status={buildCard.status} />
					)}
					{buildCards.length > showedCardsCount && (
						<div className={styles.showMoreButton}>
							<ButtonSM isMobileFull={true} onClick={handleShowMoreClick}>
								Show more
							</ButtonSM>
						</div>
					)}
				</div>
			) : (
				<EmptySettings />
			)}
		</>
	);
};

export default MainPage;
