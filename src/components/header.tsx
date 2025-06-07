"use client";
import { NavIcon, Flex, Text, Row, Column, Logo, ToggleButton, Line } from "@/once-ui/components";
import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  
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
            <ToggleButton href="/"> 
            <Logo wordmark={false} size="m"/>
            </ToggleButton>
            <Line background="neutral-alpha-medium" vert maxHeight="24" />
            <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="allergens"
                    href="/about"
                    label="Allergeni"
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="allergens"
                    href="/about"
                    
                  />
          </Flex>

        </Flex>
      </Flex>

    </Flex>

    <Column fillWidth>
      <Flex 
        paddingX="20" 
        paddingY="8" 
        background="surface"
        border="surface"
        radius="l" 
        horizontal="space-between" 
        vertical="center"
        fillWidth
      >
        <Logo wordmark={false} size="m"/>
        <NavIcon 
          isActive={isActive} 
          onClick={handleClick} 
          aria-label="Toggle navigation menu"
          aria-expanded={isActive}
          aria-controls="demo-nav"
        />
      </Flex>
      
      {isActive && (
        <Column 
          id="demo-nav"
          padding="16" 
          background="surface" 
          border="surface"
          radius="l" 
          marginTop="8"
          fillWidth
          gap="8"
        >
          <ToggleButton fillWidth horizontal="start" size="l">
            Menu
          </ToggleButton>
          <ToggleButton fillWidth horizontal="start" size="l">
            Allergeni
          </ToggleButton>
        </Column>
      )}
    </Column>
    </>);
}