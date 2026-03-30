import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { Stack } from "@mui/material";

import funTownRV from "../../img/funtown-rv.png";
import newellCoach from "../../img/newell.png";
import waterdogRV from "../../img/waterdog-rv.png";
import southernRV from "../../img/southern-rv.png";

import './Portfolio.css';

function Portfolio() {
    return (
        <Stack gap={4} direction="row" className="portfolio-stack">
            <PortfolioItem title="FunTown RV" description="Website for FunTown RV dealership group." image={funTownRV} link="https://funtownrv.com" />
            <PortfolioItem title="Newell Coach" description="Website for Newell Coach RV Manufacturers." image={newellCoach} link="https://newellcoach.com" />
            <PortfolioItem title="Waterdog RV" description="Website for Waterdog RV dealership." image={waterdogRV} link="https://waterdogrv.com" />
            <PortfolioItem title="Southern RV" description="Website for Southern RV dealership." image={southernRV} link="https://southernrv.com" />
            {/* <PortfolioItem title="Mike Thompson's RV" description="Description" image="./img/mike-thompsons-rv.png" /> */}
            {/* <PortfolioItem title="CampNorth RV" description="Description" image="./img/camp-north-rv.png" /> */}
        </Stack>
    );
}

export default Portfolio;