import Developer from "../../models/developer.schema";

export const createDeveloper = async (req, res) => {
  try {
    const { name, email, picture } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Please provide email",
      });
    }

    const alreadyExistingDeveloper = await Developer.findOne({ email });

    if (alreadyExistingDeveloper) {
      res.status(400).json({
        success: true,
        message: "User already exists",
        user: alreadyExistingDeveloper,
      });
    }

    const developer = await Developer.create({
      name,
      email,
      picture,
    });

    res.status(200).json({
      success: true,
      message: "User created successfully",
      user: developer,
    });
    
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, message: "User creation failed" });
  }
};
