import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import './globals.scss'
import { Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Татьяна Маркина | Психолог',
	description: 'Психолог - профессиональный переводчик с детского беззубого на наш человеческий, а также с языка подростков на родительский диалект и обратно',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body className={oswald.className}>
				{children}
				<Script id="metrika-counter" strategy="afterInteractive">
					{`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(94884901, "init", {
	  defer: true,
	  clickmap:true,
	  trackLinks:true,
	  accurateTrackBounce:true,
	  webvisor:true
});`}
				</Script>
			</body>
		</html>
	)
}
