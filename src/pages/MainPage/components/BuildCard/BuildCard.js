import React from 'react';
import classNames from 'classnames';

import styles from './BuildCard.module.scss';

const BuildCard = ({data}) => {
	const {status, number, message, branch, hash, author, date, duration} = data;
	return (
		<div className={classNames(styles.buildCard, styles.build)}>
			<div className={styles.info}>
				<div className={styles.description}>
					<span className={classNames(styles.number, styles[status])}>#{number}</span>
					<p className={styles.commitMessage}>{message}</p>
				</div>

				<div className={styles.additionalInfo}>
					<div className={styles.branch}>
						<p className={styles.branchName}>
							{branch} <span className={styles.commitHash}>{hash}</span>
						</p>
					</div>
					<p className={styles.commitAuthor}>{author}</p>
				</div>
			</div>

			<div className={styles.time}>
				<p className={styles.date}>{date}</p>
				<p className={styles.duration}>{duration}</p>
			</div>
		</div>
	);
};

export default BuildCard;
