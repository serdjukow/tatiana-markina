import { Metadata } from 'next'
import Link from 'next/link'
const TG_LINK = 'https://t.me/mama_psycholog'

export const metadata: Metadata = {
	title: 'Татьяна Маркина | Психолог',
	description: 'Психолог - профессиональный переводчик с детского беззубого на наш человеческий, а также с языка подростков на родительский диалект и обратно',
}

export default function Home() {
	return (
		<main className="page">
			<div className="page__content content">
				<div className="content__logo"></div>
				<h1 className="content__title">Мама хотела как лучше</h1>
				<p className="content__text">
					Психолог - профессиональный переводчик с детского беззубого на наш человеческий, а также с языка подростков на родительский диалект и обратно
				</p>
				<Link className="content__button" href={TG_LINK} target="blank">
					Перейти в телеграм
				</Link>
			</div>
		</main>
	)
}
