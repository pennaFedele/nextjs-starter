import { ExtendedAreaCompetenza } from "@/lib/types";
import MenuDetailClient from "@/components/menu-detail-client";
import { Column, Line, Row, Text } from "@/once-ui/components";

export default async function MenuPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/areaCompetenza/${id}?details=true`);
    const data: ExtendedAreaCompetenza = await response.json();

    return (
        <Column maxWidth="s" gap="16">
            <Text variant="heading-default-m">{data?.descrizione}</Text>
            <Text variant="body-default-s">{data?.note}</Text>
            <Line />
            <Column fillWidth flex={1} gap="8">
                <MenuDetailClient menu={data} />
            </Column>
        </Column>
    );
}
