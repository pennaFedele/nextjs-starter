"use client";
import React, { useState, useEffect } from "react";
import { Flex } from "@/once-ui/components";
import { useT } from "../../i18n/client";

export default function MenuHome() {
  const { t } = useT('translation');
  const [menu, setMenu] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch('/api/areaCompetenza/');
      const data = await response.json();
      setMenu(data);
    };
    fetchMenu();
    setLoading(false);
  }, []);

  return (
    <Flex>
      {loading ? (
        <div>Loading...</div>
      ) : (
        menu?.map((item, index) => (
          <div key={index}>
            <h1>{item.descrizione}</h1>
          </div>
        ))
      )}
    </Flex>
  );
}
