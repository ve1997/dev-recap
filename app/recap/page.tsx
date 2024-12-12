import { auth } from "@/auth";
import { MotionWrapper } from "../components/motion-wrapper";

export const runtime = "edge";

export default async function Page() {
	const session = await auth();
	if (!session?.user) return null;
	console.debug({ session });

	return (
		<MotionWrapper>
			<div>
				<h1>Recap</h1>
			</div>
		</MotionWrapper>
	);
}
