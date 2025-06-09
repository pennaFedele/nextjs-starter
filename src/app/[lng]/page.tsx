import { getT } from "../i18n";
import { Column, Row, Text, Button, Flex, Heading, Card, Line, ToggleButton } from "@/once-ui/components";

export const dynamic = "force-dynamic";


export default async function MenuHome({ params }: { params: { lng: string } }) {
  const { lng } = await params;
  const { t } = await getT("translation");
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/areaCompetenza/`, { cache: 'no-store' });
  const menu = await res.json();
  return (
    <Column maxWidth="s" gap="16" >
      <Heading marginBottom="1" variant="display-strong-s">
        Benvenuti
      </Heading>
      <Column fillWidth flex={1} gap="16">
        {menu.map((area: any) => (
          <Row key={area.id} maxWidth={64}>
            <Card radius="m-4" direction="row"
              border="neutral-alpha-medium"
              fillWidth
              style={{
                backgroundColor: "rgba(255,255,255,0.9)",
                
              }}
            >
              <Flex fillWidth horizontal="space-between">
              <Column padding="24" gap="8">
                <Text variant="heading-default-m">{area.descrizione}</Text>
                <Text variant="body-default-s">{area.note}</Text>
              </Column>
              
              <Column vertical="center" padding="24">
                <ToggleButton
                variant="outline"
                suffixIcon="chevronRight"
                href={`/${lng}/menu/${area.id}`}>Scopri</ToggleButton>
              </Column>
              </Flex>
            </Card>
          </Row>
        ))}
      </Column>
    </Column>
  );
}
