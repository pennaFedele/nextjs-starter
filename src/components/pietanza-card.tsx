import { Tag } from "@/app/generated/prisma";
import { ExtendedPietanza } from "@/lib/types";
import { Card, Column, Media, Row, Text, Line, Icon, Tag as OnceTag } from "@/once-ui/components";

export default function PietanzaCard({ pietanza }: { pietanza: ExtendedPietanza }) {

    const nonAllergeneTags = pietanza.tag?.filter((tag: Tag) => !tag.isAllergene)
    const allergens = pietanza.tag?.filter((tag: Tag) => tag.isAllergene)
    return (
        <Row maxWidth={24}>
            <Card radius="l-4" direction="column" border="neutral-alpha-medium">
                {nonAllergeneTags?.length > 0 && (
                    <Row fillWidth paddingX="20" horizontal="end" paddingY="12" gap="8" vertical="center">
                        {nonAllergeneTags.map((t: Tag) => (
                            <OnceTag key={t.id} style={{ backgroundColor: t.colore }}>
                                {t.descrizione}
                            </OnceTag>
                        ))}
                    </Row>
                )}
                {pietanza.image && (
                    <Media
                        border="neutral-alpha-weak"
                        sizes="400px"
                        fillWidth
                        aspectRatio="4 / 3"
                        radius="l"
                        alt="Pietanza"
                        src={pietanza.image}
                    />
                )}
                <Column fillWidth paddingX="20" paddingY="24" gap="8">
                    <Row fillWidth horizontal="space-between" vertical="center">
                        <Column>
                            <Text variant="body-default-l">{pietanza.descrizioneLingua1}</Text>
                        </Column>
                        <Column>
                            <Text variant="label-default-s">{pietanza.prezzo}</Text>
                        </Column>
                    </Row>
                    <Text onBackground="neutral-weak" variant="body-default-s">
                        {pietanza.note}
                    </Text>
                </Column>
                {allergens && (
                    <>
                        <Line background="neutral-alpha-medium" />
                        <Row
                            paddingX="20" paddingY="12" gap="8" vertical="center"
                            textVariant="label-default-s" onBackground="neutral-medium"
                        >
                            {allergens.map((tag: Tag) => (
                                <OnceTag key={tag.id} style={{ backgroundColor: tag.colore }}>
                                    {tag.descrizione}
                                </OnceTag>
                            ))}
                        </Row>
                    </>
                )}
            </Card>
        </Row>
    )
}
