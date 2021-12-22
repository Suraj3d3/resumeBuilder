exports.home = (req, res) => {
  res.json({ msg: "you are on root page" });
};

exports.generateResume = (req, res) => {
  let resumeDetails = JSON.parse(req.body.resumeDetails);
  let templateId = req.query.templateId;
  console.log(templateId);
  // console.log(resumeDetails.basic);

  //render template1 of view and providing resumeDetails object to template1(i.e. available inside view)
  // res.render("template1", resumeDetails);
  res.render(templateId, resumeDetails);
};
