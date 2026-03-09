
import { Box, TextField } from "@mui/material";

import "./Contact.css"

function Contact() {
    return (
        <Box
            component="form"
            padding={3}
            align="left"
            sx={{
                boxShadow: "0px 0px 1px grey",
            }}>
            <div>
                <TextField className="formInput" label="Name" />
                <TextField className="formInput" label="Email" />
            </div>
            <div><TextField className="formInput" label="Message" /></div>
        </Box>
    );
}


export default Contact;