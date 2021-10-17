import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import classNames from 'classnames';
import {EmptySettings} from './components/EmptySettings';
import {BuildCard} from './components/BuildCard';
import ButtonSM from '@/components/Button/ButtonSM';
import {ReactComponent as SettingsSvg} from '@/assets/icons/settings.svg';
import {ReactComponent as BuildSvg} from '@/assets/icons/play.svg';
import {Header} from '@/components/Header';
import {Modal} from '@/components/Modal';
import {ThemeSwitcher} from '@/components/ThemeSwitcher';
import {BUILDS} from '@/const';
import {fetchBuilds, runBuild} from '@/store/actions/builds';
import {Loader} from '../../components/Loader';
import {Error} from '../../components/Error';

import styles from './MainPage.module.scss';

const MainPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const cardsPerPage = window.innerWidth <= 768 ? 6 : 9;
	const [isLightTheme, setLightTheme] = useState(document.body.className === 'theme-light');

	const {loading: isLoading, error: isError, items: buildCards, repository} = useSelector((state) => state.builds);

	const [isOpenModal, setOpenModal] = useState(false);
	const [showedCardsCount, setShowedCardsCount] = useState(cardsPerPage);

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
		return <Error />;
	}

	if (isLoading && !isOpenModal) {
		return <Loader />;
	}

	const handleSwitchTheme = () => {
		if (!isLightTheme) {
			document.body.className = 'theme-light';
		} else {
			document.body.className = 'theme-dark';
		}

		setLightTheme((prev) => !prev);
	};

	return (
		<>
			<Header>
				{repository ? (
					<>
						<h1 className={styles.headerTitle}>{repository}</h1>
						<div className={styles.headerButtons}>
							<ButtonSM icon={<BuildSvg />} handleClick={handleClick} hasNextButton>
								Run Build
							</ButtonSM>
							<ButtonSM icon={<SettingsSvg />} handleClick={openSettingsPage} />
						</div>
					</>
				) : (
					<>
						<h1 className={classNames(styles.headerTitle, styles.headerTitleEmpty)}>School CI server</h1>
						<ButtonSM icon={<SettingsSvg />} handleClick={openSettingsPage}>
							Settings
						</ButtonSM>
					</>
				)}
				<ThemeSwitcher isLight={isLightTheme} handleClick={handleSwitchTheme} />
			</Header>
			{isOpenModal && <Modal handleClose={handleCloseClick} handleSave={handleSaveClick} isLoading={isLoading} />}

			{repository && buildCards.length > 0 ? (
				<div className={styles.mainPage}>
					{buildCards.map(
						(buildCard, index) =>
							index < showedCardsCount && <BuildCard key={buildCard + index} build={buildCard} />
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
