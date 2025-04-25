import React, { useEffect } from "react";
import {
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useWebshop } from "../provider/WebshopProvider";

const Purchases = () => {
    const { getPurchases, purchases, formatPrice } = useWebshop();

    useEffect(() => {
        getPurchases();
        // eslint-disable-next-line
    }, []);

    const sortedPurchases = [...purchases].sort(
        (a, b) => new Date(b.paid_date) - new Date(a.paid_date)
    );

    return (
        <Container maxWidth="lg" sx={{ minHeight: "90vh", my: 10 }} >
            <Typography variant="h4" sx={{ mb: 4, color: "primary.main" }} data-aos="fade-up">
                Megrendelések
            </Typography>
            {purchases.length === 0 ? (
                <Typography data-aos="fade-down">Még nem adtál le merendelést!</Typography>
            ) : (
                <div data-aos="zoom-in">
                    {sortedPurchases.map((purchase, index) => (
                        <Accordion key={purchase.id + "purchase"} >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                    <Typography variant="h6" >
                                        Rendelés #{sortedPurchases.length - index}
                                    </Typography>
                                    <Typography variant="caption">
                                        Dátum: {new Date(purchase.paid_date).toLocaleString()}
                                    </Typography>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" sx={{ mb: 1, fontWeight: "bold" }}>
                                    Borok:
                                </Typography>
                                <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
                                    {purchase.wines.split(", ").map((wine, index) => (
                                        <Typography
                                            key={index}
                                            variant="body2"
                                            color="text.primary"
                                            sx={{ display: "flex", justifyContent: "space-between" }}
                                        >
                                            {wine}
                                        </Typography>
                                    ))}
                                </Box>
                                <Typography variant="body1">
                                    <strong>Végösszeg:</strong> {formatPrice(purchase.price)} Ft
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            )}
        </Container>
    );
};

export default Purchases;
