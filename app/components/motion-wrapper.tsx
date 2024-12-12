"use client";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import type { FC, ReactNode } from "react";

type Props = Readonly<{
	children: ReactNode;
}>;

export const MotionWrapper: FC<Props> = ({ children }) => {
	const pathName = usePathname();
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pathName}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 2 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};
