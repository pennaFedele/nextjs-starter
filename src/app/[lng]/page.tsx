"use client";

import React, { useState, useEffect, forwardRef } from "react";
import classNames from "classnames";
import { Flex } from "@/once-ui/components";
import { useT } from "../i18n/client";

export default function Home() {
    const { t } = useT('translation');
    const [menu, setMenu] = useState<any[]>([]); // Using empty array as initial value
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch('/api/areaCompetenza/');
            const data = await response.json();
            setMenu(data); // data is already an array from the API
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
    )
}