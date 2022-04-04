import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
	destination: path.join(__dirname, "../public/uploads/img"),
	filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const fileFilter = (req, file, cb) => {
		if (file.mimetype === "image/jpg" || file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
			cb(null, true);
		} else {
			cb(null, false)
		}
	}

const upload = multer({
	storage,
	fileFilter,
	limits: 100000
}).single("img");

export default upload