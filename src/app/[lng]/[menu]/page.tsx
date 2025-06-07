import PietanzaCard from "@/components/pietanza-card";
import { ExtendedAreaCompetenza } from "@/lib/types";
import { Accordion, AccordionGroup, Column, Row, Text } from "@/once-ui/components";

export default async function MenuPage({ params }: { params: { menu: string } }) {
    const { menu } = await params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/areaCompetenza/${menu}?details=true`);
    const data: ExtendedAreaCompetenza = await response.json();

    console.log(data);
    return (
        <Column fillWidth>
            <Row fillWidth padding="8">
                <Text variant="heading-default-s">{data?.descrizione}</Text>
            </Row>
            <Row fillWidth padding="8">
                <Text variant="body-default-s">{data?.note}</Text>
            </Row>
            <Row fillWidth>
                <Column fillWidth>
                    {data?.Categoria?.map((categoria: any) => (
                        <Accordion title={categoria?.descrizioneLingua1} key={categoria.id}>
                            {categoria.Pietanza.map((pietanza: any) => (
                                <PietanzaCard key={pietanza.id} pietanza={pietanza} />
                            ))}
                        </Accordion>
                    ))}
                </Column>
            </Row>
        </Column>
    )
}