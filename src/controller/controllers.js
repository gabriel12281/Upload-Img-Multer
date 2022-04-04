exports.index = async(req, res) => {

	const img = await Images.find();

	res.render("index", {img});
}

exports.indexForm = async(req, res) => {
	const { originalname, mimetype, destination, filename } = req.file;
	const path = "/uploads/img/" + filename;
	
	await Images.create({originalname, mimetype, destination, filename, path});
	res.redirect("/");
}