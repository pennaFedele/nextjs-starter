import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import acceptLanguage from 'accept-language'
import { languages, fallbackLng } from './i18n/settings'

export default function RootPage() {
  const headerList = headers()
  const accept = headerList.get('Accept-Language') || ''
  acceptLanguage.languages(languages)
  let lng = acceptLanguage.get(accept) as string | undefined
  if (!lng) lng = fallbackLng
  if (!languages.includes(lng)) lng = fallbackLng
  redirect(`/${lng}`)
}
