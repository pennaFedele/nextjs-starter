import { getT } from "../i18n";
import { Column, Row, Text, Button } from "@/once-ui/components";

export const dynamic = "force-dynamic";

export default async function MenuHome() {
  const { t } = await getT("translation");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/areaCompetenza/`, { cache: 'no-store' });
  const menu = await res.json();
  return (
    <Column gap="8" padding="8" as="main">
      {menu.map((item: any) => (
        <Row key={item.id} fillWidth horizontal="space-between" vertical="center" paddingY="4">
          <Text variant="body-default-m">{item.descrizione}</Text>
          <Button href={`menu/${item.id}`}>{t('visiona')}</Button>
        </Row>
      ))}
    </Column>
  );
}
