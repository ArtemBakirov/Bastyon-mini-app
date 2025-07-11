import { Quote } from "../types";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

export default function RandomQuote({quote}: {quote: Quote | null}) {
  console.log("quote is", quote);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", maxWidth: 600, margin: "0 auto", padding: 2 }}>
      <Button variant="contained" color="primary" onClick={() => {}}>
        Another Quote
      </Button>

      {quote && (
        <Card sx={{ marginTop: 2 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              "{quote.q}"
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              — {quote.a}
            </Typography>
            {/*quote.sourceUrl && (
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                Источник:{" "}
                <Link
                  href={quote.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {quote.sourceTitle || quote.sourceUrl}
                </Link>
              </Typography>
            )*/}
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
