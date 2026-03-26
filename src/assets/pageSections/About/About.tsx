import valPixel from './img/val-forward.png';
import { Grid } from '@mui/material';

function About() {
    return (
        <div>

            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }} textAlign={{ xs: "center", sm: "left" }}>
                    <div><img src={valPixel} alt="Val" /></div>
                </Grid>
                <Grid size={{ xs: 12, sm: 8 }} textAlign={{ xs: "center", sm: "left" }}>
                    <div>
                        <p>Hi, I'm Valerie!</p>
                        <p>I'm a web developer with a passion for creating beautiful, functional, and maintainable websites. I'm knowledgable in a great many web technologies. Please <a href="#contact-anchor">reach out</a> if you would like to work with me!</p>
                        <p>In a distant past life, I was an educator who taught English classes to students in the US south from grades six to twelve.</p>
                        <p>In my spare time I practice <a target="_blank" href="https://www.flickr.com/photos/ampitts/">photography</a>, do some writing, and run <a target="_blank" href="https://twitch.tv/gameswithfrands">tabletop RPGs</a>. </p>
                        <p>I currently reside in central Virginia. </p>
                    </div>
                </Grid>

            </Grid>
        </div>
    );
}

export default About;