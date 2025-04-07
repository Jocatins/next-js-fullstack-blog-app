import Comments from "@/components/comments/Comments";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import React from "react";
import styles from "./singlePage.module.css";

const SinglePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit..
					</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>Nico Sphinx</span>
							<span className={styles.date}>12-12-2019</span>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src="" alt="" fill className={styles.image} />
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.description}>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
							quam dolorem nesciunt! Amet expedita nam tempore aut iure
							doloremque, ipsam, incidunt non deserunt nisi atque earum sed
							ullam dolorum! Rerum?
						</p>
						<h2>Lorem ipsum dolor sit amet</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
							quam dolorem nesciunt! Amet expedita nam tempore aut iure
							doloremque, ipsam, incidunt non deserunt nisi atque earum sed
							ullam dolorum! Rerum?
						</p>
					</div>
					<div className={styles.comment}>
						<Comments />
					</div>
				</div>
				<Menu />
			</div>
		</div>
	);
};

export default SinglePage;
