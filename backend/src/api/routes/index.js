import { Router } from "express";
import controller from "../controllers";

const router = Router();

router.get("/", (req, res, next) => {
	res.send("Apeksha Hospital Engagement System API");
	next();
});

// Staff endpoints
router.post("/staff/register", controller.registerStaff);
router.post("/staff/login", controller.loginStaff);
router.get("/staff", controller.getAllStaff);
router.get("/staff/:id", controller.getOneStaff);
router.put("/staff/:id", controller.updateStaff);
router.delete("/staff/:id", controller.deleteStaff);

// Donor endpoints
router.post("/donor/register", controller.registerDonor);
router.post("/donor/login", controller.loginDonor);
router.get("/donor", controller.getAllDonor);
router.get("/donor/:id", controller.getOneDonor);
router.put("/donor/:id", controller.updateDonor);
router.delete("/donor/:id", controller.deleteDonor);


export default router;
