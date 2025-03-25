import express from "express"
const router = express.Router()
import { auth } from "../middleware/auth.js"
import {
  deleteAccount,
  updateProfile,
  updateDisplayPicture,
} from "../controllers/Profile.js"

router.delete("/deleteProfile", auth, deleteAccount)
router.put("/updateProfile", auth, updateProfile)
router.put("/updateDisplayPicture", auth, updateDisplayPicture)

export default router