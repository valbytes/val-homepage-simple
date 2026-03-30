import { useState, useEffect } from 'react';
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { Stack } from "@mui/material";

import './Portfolio.css';

interface PortfolioData {
    id: string | number;
    title: string;
    description: string;
    imageUrl: string;
    url: string;
}

async function getPortfolioItems() {
    const response = await fetch('http://nodered.localhost/db');
    const data = await response.json();

    let portfolioData: PortfolioData[] = [];
    for (let i = 0; i < data.length; i++) {
        portfolioData.push({
            id: data[i].id || i, // Fallback to index if no ID to satisfy React's key requirement
            title: data[i].title,
            description: data[i].description,
            imageUrl: data[i].imageUrl,
            url: data[i].url,
        });
    }
    return portfolioData;
}

function Portfolio() {
    const [portfolioData, setPortfolioData] = useState<PortfolioData[]>([]);
    useEffect(() => {
        getPortfolioItems().then(data => setPortfolioData(data));
    }, []);

    return (
        <Stack gap={4} direction="row" className="portfolio-stack">
            {portfolioData.map((item) => (
                <PortfolioItem key={item.id} title={item.title} description={item.description} image={`src/assets/img/${item.imageUrl}`} link={item.url} />
            ))}
        </Stack>
    );
}

export default Portfolio;