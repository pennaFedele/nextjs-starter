"use client";
import { NavIcon, Flex, Text, Row, Column, Logo, ToggleButton, Line } from "@/once-ui/components";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useT } from "@/app/i18n/client";

export default function Header() {
  const params = useParams();
  const lng = typeof params?.lng === "string" ? params.lng : "it";
  const [isActive, setIsActive] = useState(false);
  const { t } = useT("translation");

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
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
              <ToggleButton
                className="s-flex-hide"
                prefixIcon="home"
                href={`/${lng}`}
                label={t("menu")}
              />
              <ToggleButton className="s-flex-show" prefixIcon="home" href={`/${lng}`} />
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              <ToggleButton
                className="s-flex-hide"
                prefixIcon="allergens"
                href={`/${lng}/allergeni`}
                label={t("allergeni")}
              />
              <ToggleButton
                className="s-flex-show"
                prefixIcon="allergens"
                href={`/${lng}/allergeni`}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
