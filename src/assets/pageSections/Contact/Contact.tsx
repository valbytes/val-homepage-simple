
import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import InputAdornment from '@mui/material/InputAdornment';
import NumberField from "../../Components/NumberField";

import "./Contact.css"

function Contact() {
    return (
        <Box
            component="form"
            padding={3}
            align="left"
            sx={{
                boxShadow: "0px 0px 1px grey",
                flexGrow: "1"
            }}
        >
            <Grid size="{12}" sx={{ display: "flex", gap: "25px" }} >
                <TextField className="formInput" label="Name" required={true} sx={{ flexGrow: "1" }} />
                <TextField className="formInput" label="Email" sx={{ flexGrow: "1" }} />
            </Grid>
            <Grid size="{12}" sx={{ display: "flex", gap: "25px", alignItems: "center" }} >
                <div className="numberInputWrapper">
                    <NumberField
                        label="Air Speed Velocity of a Swallow"
                        name="Air Speed Velocity of a Swallow"
                        min={1}
                        max={1000}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">knots</InputAdornment>,
                        }}
                    />
                </div>



            </Grid>
            <Grid size="{12}" sx={{ display: "flex", gap: "25px" }} >
                <TextField className="formInput" label="Message" sx={{ flexGrow: "1" }} />
            </Grid>





        </Box >
    );
}


export default Contact;