import express from "express";
import {addHistory, deletePatient, insertPatient, showPatientDetail, showPatientSingle, showPatientWaiting, updatePatient } from "../controllers/patient.js";

const router = express.Router();

router.get("/getpatient",showPatientDetail);
router.get("/getpatientwaiting",showPatientWaiting);
router.get("/getpatient/:id",showPatientSingle);
router.put("/updatepatient",updatePatient)

router.post("/insertpatient",insertPatient);
router.post("/addhistory",addHistory);

router.delete("/deletepatient/:id",deletePatient);

export { router as patientRoutes };
