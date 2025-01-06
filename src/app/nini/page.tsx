"use client";
import { useEffect } from "react";

export default function Home() {
    const nice = async () => {
        const response = await fetch(
            `https://app.geckoterminal.com/api/p1/zora-network/pools/0xea38a1e45cfdd6df9e55125b87be2672cf5cc80c?include=dex%2Cdex.network.explorers%2Cdex_link_services%2Cnetwork_link_services%2Cpairs%2Ctoken_link_services%2Ctokens.token_security_metric%2Ctokens.tags%2Cpool_locked_liquidities&base_token=0`,
        );

        console.log(response.body);
    };

    useEffect(() => {
        nice();
    }, []);

    return <div className=""></div>;
}