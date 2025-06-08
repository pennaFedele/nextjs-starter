import { getT } from "../../i18n";
import { ExtendedAreaCompetenza } from "@/lib/types";
import MenuDetailClient from "@/components/menu-detail-client";
import { Column, Row, Text } from "@/once-ui/components";

export default async function MenuPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const { t } = await getT("translation");

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/areaCompetenza/${id}?details=true`);
    const data: ExtendedAreaCompetenza = await response.json();

    return (
        <Column fillWidth>
            <Row fillWidth padding="8">
                <Text variant="heading-default-s">{data?.descrizione}</Text>
            </Row>
            <Row fillWidth padding="8">
                <Text variant="body-default-s">{data?.note}</Text>
            </Row>
            <MenuDetailClient menu={data} t={t} />
        </Column>
    );
}
