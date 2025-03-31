"use client";

import React, { useContext } from "react";

import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import styles from "./themeToggle.module.css";

const ThemeToggle = () => {
	const { theme, toggle } = useContext(ThemeContext);
	console.log(theme);
	return (
		<div
			className={styles.container}
			onClick={toggle}
			style={
				theme === "dark" ? { background: "white" } : { background: "#0f172a" }
			}
		>
			<Image src="/moon.png" alt="" width={14} height={14} />
			<div className={styles.ball}></div>
			<Image src="/sun.png" alt="" width={14} height={14} />
		</div>
	);
};

export default ThemeToggle;
