import { Schema, model } from "mongoose";

const Images = new Schema({
	originalname:String,
	mimetype:String,
	destination:String,
	filename:String,
	path:String,
});

export default model("images", Images);