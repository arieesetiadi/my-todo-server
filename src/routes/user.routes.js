import express from "express";

const router = express.Router();

// Get users
router.get("/", (req, res) => {
    res.status(200).json({
        message: "Get users",
    });
});

// Get user by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Get user with id: " + id,
    });
});

export default router;
