import { Column, Text } from "@/once-ui/components";
import { getT } from "../../i18n";

export default async function AboutPage() {
  const { t } = await getT('translation');
  return (
    <Column padding="8" gap="8">
      <Text variant="heading-default-m">{t('home_chi_siamo_title')}</Text>
      <Text variant="body-default-s">{t('home_chi_siamo_text')}</Text>
    </Column>
  );
}
