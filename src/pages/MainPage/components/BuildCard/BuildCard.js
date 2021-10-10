import React from 'react';
import classNames from 'classnames';

import styles from './BuildCard.module.scss';

const BuildCard = ({status}) => {
	return (
		<div className={classNames(styles.buildCard, styles.build)}>
			<div className={styles.info}>
				<div className={styles.description}>
					<span className={classNames(styles.number, styles[status])}>#1234</span>
					<p className={styles.commitMessage}>add documentation for postgres scaler</p>
				</div>

				<div className={styles.additionalInfo}>
					<div className={styles.branch}>
						<p className={styles.branchName}>
							master <span className={styles.commitHash}>9c5s5d</span>
						</p>
					</div>
					<p className={styles.commitAuthor}>Philip Kirkorov</p>
				</div>
			</div>

			<div className={styles.time}>
				<p className={styles.date}>21 янв, 03:06</p>
				<p className={styles.duration}>1 ч 20 мин</p>
			</div>
		</div>
	);
};

export default BuildCard;
