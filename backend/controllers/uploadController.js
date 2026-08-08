exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No image uploaded",
      });
    }

    res.json({
      success: true,
      filename: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Upload failed",
    });
  }
};