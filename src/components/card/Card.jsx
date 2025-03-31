import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./card.module.css";

const Card = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image src="/p1.jpeg" alt="" fill className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>11.08.2023 - </span>
					<span className={styles.category}>CULTURE</span>
				</div>
				<Link href="/">
					<h1>Lorem Ipsum</h1>
				</Link>
				<p className={styles.description}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio saepe
					incidunt expedita cumque libero. Dolor aspernatur perferendis odio,
					non doloremque saepe sapiente dolorum blanditiis tenetur at obcaecati
					minus sequi architecto.
				</p>
				<Link href="/" className={styles.link}>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Card;
