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
router.get("/staff/", controller.getAllStaff);
router.get("/staff/:id", controller.getOneStaff);
router.put("/staff/update/:id", controller.updateStaff);
router.delete("/staff/delete/:id", controller.deleteStaff);

// Donor endpoints
router.post("/donor/register", controller.registerDonor);
router.post("/donor/login", controller.loginDonor);
router.get("/donor/", controller.getAllDonor);
router.get("/donor/:id", controller.getOneDonor);
router.put("/donor/update/:id", controller.updateDonor);
router.delete("/donor/delete/:id", controller.deleteDonor);

// Organization endpoints
router.post("/org/register", controller.registerOrganization);
router.post("/org/login", controller.loginOrganization);
router.get("/org/", controller.getAllOrganization);
router.get("/org/:id", controller.getOneOrganization);
router.put("/org/update/:id", controller.updateOrganization);
router.delete("/org/delete/:id", controller.deleteOrganization);

export default router;
