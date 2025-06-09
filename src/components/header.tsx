"use client";
import { NavIcon, Flex, Text, Row, Column, Logo, ToggleButton, Line, Fade } from "@/once-ui/components";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { useT } from "@/app/i18n/client";

export interface HeaderPages {
  id: number;
  descrizione: string;
  descrizioneInglese: string;
}

export default function Header({ pages }: { pages: HeaderPages[] }) {
  const params = useParams();
  const lng = typeof params?.lng === "string" ? params.lng : "it";
  const { t } = useT("translation");
  const pathname = usePathname() ?? "";


  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />

      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />

      <Flex
        fitHeight
        position="unset"
        className="position:sticky;top:0"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-alpha-medium"
            radius="m-4"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              <ToggleButton href={`/${lng}`}>
                <Logo wordmark={false} size="m" />
              </ToggleButton>
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {pages && pages.map((page: any) => (
                <ToggleButton
                  key={page.id}
                  href={`/${lng}/menu/${page.id}`}
                  label={page.descrizione}
                  selected={pathname === `/${lng}/menu/${page.id}`}
                />
              ))}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <ToggleButton
                className="s-flex-hide"
                prefixIcon="allergens"
                href={`/${lng}/allergeni`}
                label={t("allergeni")}
                selected={pathname === `/${lng}/allergeni`}
              />
              <ToggleButton
                className="s-flex-show"
                prefixIcon="allergens"
                href={`/${lng}/allergeni`}
                selected={pathname === `/${lng}/allergeni`}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
