import React, {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {EmptySettings} from './components/EmptySettings';
import {BuildCard} from './components/BuildCard';
import ButtonSM from '@/components/Button/ButtonSM';
import {ReactComponent as SettingsSvg} from '@/assets/icons/settings.svg';
import {ReactComponent as BuildSvg} from '@/assets/icons/play.svg';
import {Header} from '@/components/Header';
import {Modal} from '@/components/Modal';
import {fetchBuilds, runBuild} from '@/store/actions/builds';

import styles from './MainPage.module.scss';
import {Loader} from '../../components/Loader';

const MainPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const cardsPerPage = window.innerWidth <= 768 ? 6 : 9;

	const {loading: isLoading, error: isError, items: buildCards, repository} = useSelector((state) => state.builds);

	const [isOpenModal, setOpenModal] = useState(false);
	const [showedCardsCount, setShowedCardsCount] = useState(cardsPerPage);

	useLayoutEffect(() => {
		dispatch(fetchBuilds());
	}, []);

	const handleClick = () => {
		setOpenModal((prev) => !prev);
	};

	const handleCloseClick = () => {
		setOpenModal((prev) => !prev);
	};

	const handleSaveClick = async (value) => {
		await dispatch(runBuild(value));
		setOpenModal((prev) => !prev);
		dispatch(fetchBuilds());
	};

	const openSettingsPage = () => {
		history.push('/settings');
	};

	const handleShowMoreClick = () => {
		setShowedCardsCount((prev) => prev + cardsPerPage);
	};

	if (isError) {
		return <p>Что-то пошло не так...</p>;
	}

	if (isLoading && !isOpenModal) {
		return <Loader />;
	}

	return (
		<>
			<Header>
				{repository ? (
					<>
						<h1 className={styles.headerTitle}>{repository}</h1>
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
			{isOpenModal && <Modal handleClose={handleCloseClick} handleSave={handleSaveClick} isLoading={isLoading} />}

			{repository && buildCards.length > 0 ? (
				<div className={styles.mainPage}>
					{buildCards.map(
						(buildCard, index) =>
							index < showedCardsCount && <BuildCard key={buildCard + index} data={buildCard} />
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
