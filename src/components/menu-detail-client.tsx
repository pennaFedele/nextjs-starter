"use client";
import { useState } from "react";
import PietanzaCard from "./pietanza-card";
import { ExtendedAreaCompetenza } from "@/lib/types";
import { Column, Row, SegmentedControl, Input, Accordion, AccordionGroup } from "@/once-ui/components";
import { useT } from "@/app/i18n/client";

export default function MenuDetailClient({ menu }: { menu: ExtendedAreaCompetenza; }) {
  const { t } = useT("translation");
  const categories = menu?.Categoria ?? [];
  const [selected, setSelected] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter(c => selected === "all" || String(c?.id) === selected);

  const matchSearch = (p: any) => {
    const term = search.toLowerCase();
    if (!term) return true;
    const tags = p.Tag?.map((tag: any) => tag.descrizione).join(" ") || "";
    const text = `${p.descrizioneLingua1} ${p.note || ""} ${tags}`.toLowerCase();
    return text.includes(term);
  };

  return (
    <Column gap="8" fillWidth>
      <Row position="sticky" style={{ top: 0, zIndex: 2 }}>
        <SegmentedControl
          buttons={[{ label: t("tutte"), value: "all" }, ...categories.map(c => ({ label: c?.descrizioneLingua1, value: String(c?.id) }))]}
          onToggle={setSelected}
          selected={selected}
        />
      </Row>
      <Row paddingY="4" paddingX="8">
        <Input id="search" placeholder={t("cerca-pietanze") ?? ""} value={search} onChange={e => setSearch(e.target.value)} fillWidth />
      </Row>
      <Column gap="8">
        {filteredCategories.map(cat => (
          <AccordionGroup key={cat?.id}>
            <Accordion title={cat?.descrizioneLingua1}>
              {cat?.Pietanza?.filter(matchSearch).map(p => (
                <PietanzaCard key={p.id} pietanza={p} />
              ))}
            </Accordion>
          </AccordionGroup>
        ))}
      </Column>
    </Column>
  );
}
