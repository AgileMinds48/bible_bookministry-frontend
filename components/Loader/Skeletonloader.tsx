
import React from "react";
import styles from "./Skeletonloader.module.css";

const SkeletonCard = () => (
	<div className={styles.skeletonCard}>
		<div className={styles.skeletonImage} />
		<div className={styles.skeletonTitle} />
		<div className={styles.skeletonText} />
	</div>
);


// Responsive: 2 columns on small screens, more on large screens, matching Book grid
const SkeletonLoader = ({ count = 8 }) => {
	return (
		<div className={styles.skeletonGrid}>
			{Array.from({ length: count }).map((_, idx) => (
				<SkeletonCard key={idx} />
			))}
		</div>
	);
};

export default SkeletonLoader;
