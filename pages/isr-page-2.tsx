import Link from "next/link"
import { GetStaticProps } from "next/types"

type Props = {
	time: string
}

const ISRPage = ({ time }: Props) => 
	<>
		<h1>ISR Page 2</h1>
		<p>{ new Date().toISOString() } - client</p>
		<p>{ time } - getStaticProps</p>
		<Link href="/isr-page-1">To ISR Page 1</Link>
	</>

export const getStaticProps: GetStaticProps<Props> = () => {
	return {
		props: {
			time: new Date().toISOString()
		},
		revalidate: 10
	}
}

export default ISRPage