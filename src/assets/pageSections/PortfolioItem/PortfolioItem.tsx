
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";

import './PortfolioItem.css';

function PortfolioItem(props: { title: string; description: string; image: string; link: string; }) {
    return (
        <Card className="portfolio-item">
            <CardMedia
                component="img"
                height="140"
                image={props.image}
                alt={props.title}
            />
            <CardContent sx={{ paddingBottom: "8px" }}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </CardContent>

            <CardActions>
                <Button href={props.link} sx={{ margin: "auto" }} target=" _blank" FullWidth="true" variant="contained">Visit Site</Button>
            </CardActions>

        </Card >
    );
}

export default PortfolioItem;