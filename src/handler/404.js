function do404(req, res) {
  res.status(404).body(`404 not found: ${req.url}`);
}

module.exports = {
  do404,
};
