import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import acceptLanguage from 'accept-language'
import { languages, fallbackLng } from './i18n/settings'
import { HeaderPages } from '@/components/header'

export default async function RootPage() {
  const link: HeaderPages[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/areaCompetenza/links`).then(res => res.json())
  const headerList = await headers()
  const accept = headerList.get('Accept-Language') || ''
  acceptLanguage.languages(languages)
  let lng = acceptLanguage.get(accept) as string | undefined
  if (!lng) lng = fallbackLng
  if (!languages.includes(lng)) lng = fallbackLng
  redirect(`/${lng}/menu/${link[0].id}`)
}
