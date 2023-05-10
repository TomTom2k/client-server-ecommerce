const multer = require('multer');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const fileTypes = {
			'image/jpeg': 'images',
			'image/png': 'images',
			'image/jpg': 'images',
			'text/markdown': 'markdown',
		};
		const uploadPath = 'public/' + fileTypes[file.mimetype];
		cb(null, uploadPath);
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
