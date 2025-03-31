import Image from "next/image";
import React from "react";
import styles from "./feature.module.css";

const Featured = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Hey, Sphinx devs are here!</b>
				<br />
				Discover thier stories and creative ideas
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src="/p1.jpeg" alt="" fill className={styles.image} />
				</div>
				<div className={styles.textContainer}>
					<h1 className={styles.postTitle}>Lorem nmnmnmeee</h1>
					<p className={styles.description}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
						asperiores modi suscipit perferendis, quasi delectus assumenda illum
						excepturi aliquam ipsam commodi laboriosam distinctio eligendi
						explicabo iure corporis nesciunt natus sunt.
					</p>
					<button className={styles.button}>Read More</button>
				</div>
			</div>
		</div>
	);
};

export default Featured;
