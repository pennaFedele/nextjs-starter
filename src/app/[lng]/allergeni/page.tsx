import { Column, Row, Text, Line } from "@/once-ui/components";
import { getT } from "../../i18n";

export default async function AllergeniPage() {
  const { t, i18n } = await getT(['translation', 'allergeni']);
  const items = i18n.t('allergeni.items', { returnObjects: true }) as string[];
  return (
    <Column gap="8" padding="8">
      <Text variant="heading-default-m">{t('allergeni')}</Text>
      <Text variant="body-default-s">{i18n.t('allergeni.description')}</Text>
      <Line />
      {items.map((item, idx) => (
        <Row key={idx} paddingY="2">
          <Text variant="body-default-s">{idx + 1}. {item}</Text>
        </Row>
      ))}
    </Column>
  );
}
