const multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'public/markdown/');
	},
	filename: function (req, file, cb) {
		const extension = file.mimetype.split('/')[1];
		cb(null, `${file.fieldname}-${Date.now()}.${extension}`);
	},
});

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 4 * 1024 * 1024,
	},
});

module.exports = upload;
