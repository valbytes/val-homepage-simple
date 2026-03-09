import Stack from "@mui/material/Stack";
import { Card, CardContent } from "@mui/material";

function Services() {
    return (
        <Stack spacing={2} direction="row" sx={{ justifyContent: "center", alignItems: "stretch" }}>
            <Card variant="outlined">
                <CardContent>Web Development</CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>Web Development</CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>Web Development</CardContent>
            </Card>
        </Stack>
    );
}

export default Services;