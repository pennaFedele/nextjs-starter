import { Button, Column, Logo, Media, Row, Text } from "@/once-ui/components";
import { getT } from "../i18n";

export default async function Home() {
  const { t } = await getT("translation");
  return (
    <Column as="main" fillWidth gap="48" horizontal="center">
      <Column
        as="section"
        paddingY="48"
        gap="12"
        horizontal="center"
        vertical="center"
        fillWidth
        style={{
          minHeight: "100vh",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Logo size="l" wordmark />
        <Text variant="display-strong-m" align="center">
          {t("home_hero_tagline")}
        </Text>
        <Row gap="4" horizontal="center">
          <Button href="prenota">{t("home_hero_book")}</Button>
          <Button variant="secondary" href="menu">
            {t("home_hero_menu")}
          </Button>
        </Row>
      </Column>

      <Column as="section" padding="20" gap="8" maxWidth="s" horizontal="center">
        <Text align="center" variant="body-default-m">
          {t("home_intro_p1")}
        </Text>
        <Text align="center" variant="body-default-m">
          {t("home_intro_p2")}
        </Text>
      </Column>

      <Column as="section" gap="8" maxWidth="m" horizontal="center">
        <Media src="/images/hero.jpg" alt={t("home_chi_siamo_title")} height={24} radius="l" />
        <Column padding="12" gap="4" horizontal="center">
          <Text variant="heading-default-m" align="center">
            {t("home_chi_siamo_title")}
          </Text>
          <Text variant="body-default-s" align="center">
            {t("home_chi_siamo_text")}
          </Text>
          <Button href="about-us">{t("home_chi_siamo_cta")}</Button>
        </Column>
      </Column>

      <Column as="section" gap="8" maxWidth="m" horizontal="center">
        <Media src="/images/demo.jpg" alt={t("home_filosofia_title")} height={24} radius="l" />
        <Column padding="12" gap="4" horizontal="center">
          <Text variant="heading-default-m" align="center">
            {t("home_filosofia_title")}
          </Text>
          <Text variant="body-default-s" align="center">
            {t("home_filosofia_text")}
          </Text>
          <Button href="menu">{t("home_filosofia_cta")}</Button>
        </Column>
      </Column>
    </Column>
  );
}
