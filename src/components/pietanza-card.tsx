import { Tag } from "@/app/generated/prisma";
import { ExtendedPietanza } from "@/lib/types";
import { Card, Column, Media, Row, Text, Line, Icon, Tag as OnceTag } from "@/once-ui/components";

export default function PietanzaCard({ pietanza }: { pietanza: ExtendedPietanza }) {

    const nonAllergeneTags = pietanza.tag?.filter((tag: Tag) => !tag.isAllergene)
    const allergens = pietanza.tag?.filter((tag: Tag) => tag.isAllergene)
    return (
        <Row  fillWidth>
            <Card radius="l-4" direction="row" border="neutral-alpha-medium" fillWidth borderStyle="dashed">
                
                <Column  fitWidth>
                    {pietanza.image && (
                        <Media
                            border="neutral-alpha-weak"
                            sizes="120px"
                            fillWidth
                            aspectRatio="4 / 3"
                            radius="l"
                            alt="Pietanza"
                            src={pietanza.image}
                        />
                    )}
                </Column>
                <Column fillWidth paddingX="20" paddingY="24" gap="8">
                    <Column fillWidth horizontal="space-between" vertical="center">
                        <Row horizontal="space-between">
                            <Text variant="body-default-l">{pietanza.descrizioneLingua1}</Text>
                            <Text variant="label-default-s">{pietanza.prezzo}</Text>
                        </Row>
                    </Column>
                    <Text onBackground="neutral-weak" variant="body-default-s">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: pietanza.note ? pietanza.note : "",
                            }}
                        />
                    </Text>
                    {allergens && (
                        <>
                            <Row
                                gap="8" vertical="center"
                                textVariant="label-default-s" onBackground="neutral-medium"
                            >
                                {allergens.map((tag: Tag) => (
                                    <OnceTag key={tag.id} textVariant="label-default-s" >
                                        {tag.descrizione}
                                    </OnceTag>
                                ))}
                            </Row>
                        </>
                    )}
                </Column>

            </Card>
        </Row>
    )
}
