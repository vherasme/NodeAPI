/**
 * @desc      Get all bootcamps
 * @route     GET /api/v1/bootcamps
 * @access    public
 * @param     {*} req
 * @param     {*} res
 * @param     {*} next
 */
exports.getBootCamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: "Show all bootcamps", hello: req.hello });
};

/**
 * @desc      Get single bootcamp
 * @route     GET /api/v1/bootcamps/:id
 * @access    public
 * @param     {*} req
 * @param     {*} res
 * @param     {*} next
 */
exports.getBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Display bootcamp ${req.params.id}` });
};

/**
 * @desc      Create new bootcamp
 * @route     POST /api/v1/bootcamps
 * @access    private
 * @param     {*} req
 * @param     {*} res
 * @param     {*} next
 */
exports.createBootCamp = (req, res, next) => {
  res.status(200).json({ success: true, message: "Create new bootcamp" });
};

/**
 * @desc      Update bootcamp
 * @route     PUT /api/v1/bootcamps/:id
 * @access    private
 * @param     {*} req
 * @param     {*} res
 * @param     {*} next
 */
exports.updateBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Update bootcamp ${req.params.id}` });
};

/**
 * @desc      Delete a bootcamp
 * @route     DELETE /api/v1/bootcamps/:id
 * @access    public
 * @param     {*} req
 * @param     {*} res
 * @param     {*} next
 */
exports.deleteBootCamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `Delete bootcamp ${req.params.id}` });
};
