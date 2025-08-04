import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Routes from "./app/routes/api.js";

dotenv.config({ quiet: true }); // TODO : Créer un logger plus tard

const APP = express();
const PORT = process.env.PORT || 3000;
APP.use(express.json());
APP.use(cors()); // TODO : Dev uniquement pas en prod !!!!

APP.use('/api', Routes); // TODO : Charger dynamiquement les routes.

APP.listen(PORT, () => console.log(`Server running on port ${PORT}`));