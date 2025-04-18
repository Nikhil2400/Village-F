import React from "react";
import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, Divider, Container } from "@mui/material";
import { motion } from "framer-motion";
import "../styles/RulesRegulations.css";  

function RulesRegulations() {
    return (
        <Container className="rules-container">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="rules-card">
                    <CardContent>
                        <Typography variant="h4" className="rules-title">📜 ग्रामपंचायत नियम आणि नियमावली</Typography>

                        <Divider sx={{ my: 2 }} />

                        {/* ग्रामपंचायत कार्यप्रणाली आणि धोरणे */}
                        <Box className="section">
                            <Typography variant="h6">🏛️ ग्रामपंचायत कार्यप्रणाली आणि धोरणे</Typography>
                            <Typography>ग्रामपंचायत **ग्रामपंचायत अधिनियम** अंतर्गत कार्य करते. गावाच्या विकासासाठी पारदर्शक व जबाबदारीने प्रशासन केले जाते.</Typography>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        {/* जमिनी व मालमत्ता नियम */}
                        <Box className="section">
                            <Typography variant="h6">🏠 जमिनी व मालमत्ता नियम</Typography>
                            <List>
                                <ListItem><ListItemText primary="संपत्ती विक्री किंवा खरेदी करताना नोंदणी अनिवार्य आहे." /></ListItem>
                                <ListItem><ListItemText primary="अनधिकृत अतिक्रमण करण्यास सक्त मनाई आहे." /></ListItem>
                                <ListItem><ListItemText primary="घर बांधण्यापूर्वी ग्रामपंचायतीकडून परवानगी घेणे आवश्यक आहे." /></ListItem>
                            </List>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        {/* कर संकलन नियम */}
                        <Box className="section">
                            <Typography variant="h6">💰 कर संकलन नियम</Typography>
                            <List>
                                <ListItem><ListItemText primary="मालमत्ता कर दरवर्षी ३१ मार्चपूर्वी भरावा लागतो." /></ListItem>
                                <ListItem><ListItemText primary="पाणी वापराच्या प्रमाणावर पाणी कर आकारला जातो." /></ListItem>
                                <ListItem><ListItemText primary="उशिरा कर भरल्यास दंड आकारला जाईल." /></ListItem>
                            </List>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        {/* पर्यावरण व स्वच्छता नियम */}
                        <Box className="section">
                            <Typography variant="h6">🌱 पर्यावरण व स्वच्छता नियम</Typography>
                            <List>
                                <ListItem><ListItemText primary="घरगुती कचऱ्याचे **ओल्या व सुका कचरा** याप्रमाणे वर्गीकरण करणे आवश्यक आहे." /></ListItem>
                                <ListItem><ListItemText primary="ग्रामपंचायत **झाडे लावा, झाडे जगवा** मोहीम राबवते." /></ListItem>
                                <ListItem><ListItemText primary="गावात प्लास्टिक वापरावर निर्बंध लावण्यात आले आहेत." /></ListItem>
                            </List>
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        {/* वाद निराकरण नियम */}
                        <Box className="section">
                            <Typography variant="h6">⚖️ वाद निराकरण नियम</Typography>
                            <Typography>गावातील वाद **ग्रामसभा बैठकांमध्ये किंवा कायदेशीर पातळीवर** सोडवले जातात.</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </motion.div>
        </Container>
    );
}

export default RulesRegulations;
