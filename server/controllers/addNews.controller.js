import News from "../models/news.model.js";

export const addNews = async (req, res) => {
  try {
    const { title, description, author, category } = req.body;

    const news = new News({
      title,
      description,
      author,
      category
    });

    await news.save();

    res.status(201).json({
      success: true,
      message: "News added successfully",
      data: news
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add news",
      error: error.message
    });
  }
};