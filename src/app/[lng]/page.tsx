import { Column, Row, Text, Button, Logo, Media } from "@/once-ui/components";
import { getT } from "../i18n";

export default async function Home() {
  const { t } = await getT('translation');
  return (
    <Column fillWidth gap="32">
      <Column as="section" paddingY="32" gap="8" horizontal="center" vertical="center" fillWidth>
        <Logo size="l" />
        <Text variant="display-strong-s" align="center">
          {t('home_hero_tagline')}
        </Text>
        <Row gap="4" horizontal="center">
          <Button href="prenota">{t('home_hero_book')}</Button>
          <Button variant="secondary" href="menu">{t('home_hero_menu')}</Button>
        </Row>
      </Column>

      <Column as="section" padding="8" gap="8">
        <Text variant="body-default-s">{t('home_intro_p1')}</Text>
        <Text variant="body-default-s">{t('home_intro_p2')}</Text>
      </Column>

      <Column as="section" gap="8">
        <Media src="/images/hero.jpg" alt={t('home_chi_siamo_title')} height={24} />
        <Column padding="8" gap="4">
          <Text variant="heading-default-m">{t('home_chi_siamo_title')}</Text>
          <Text variant="body-default-s">{t('home_chi_siamo_text')}</Text>
          <Button href="about-us">{t('home_chi_siamo_cta')}</Button>
        </Column>
      </Column>

      <Column as="section" gap="8">
        <Media src="/images/demo.jpg" alt={t('home_filosofia_title')} height={24} />
        <Column padding="8" gap="4">
          <Text variant="heading-default-m">{t('home_filosofia_title')}</Text>
          <Text variant="body-default-s">{t('home_filosofia_text')}</Text>
          <Button href="menu">{t('home_filosofia_cta')}</Button>
        </Column>
      </Column>
    </Column>
  );
}
