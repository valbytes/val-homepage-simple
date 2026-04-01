import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
// import InputAdornment from '@mui/material/InputAdornment';
// import NumberField from "../../Components/NumberField";

import "./Contact.css"

function Contact() {
    const [statusMessage, setStatusMessage] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://nodered.localhost/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // e.currentTarget.reset();
                setStatusMessage("Message sent successfully!");
            } else {
                setStatusMessage("Failed to send message.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatusMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            padding={3}
            textAlign="left"
            sx={{
                boxShadow: "0px 0px 1px grey",
                flexGrow: "1"
            }}
        >
            <Grid size="{12}" sx={{ display: "flex", gap: "25px", flexDirection: "column" }} >
                <FormGroup sx={{ gap: "15px" }}>
                    <TextField className="formInput" name="name" label="Name" required={true} sx={{ flexGrow: "1" }} />
                    <TextField className="formInput" name="email" type="email" label="Email" required={true} sx={{ flexGrow: "1" }} />
                    <TextField className="formInput" name="message" label="Message" multiline rows={4} required={true} sx={{ flexGrow: "1" }} />
                </FormGroup>
                <div className="formStatus">{statusMessage}</div>
                <Box>

                    <Button variant="contained" type="submit">Submit</Button>
                </Box>
            </Grid>




        </Box >
    );
}


export default Contact;