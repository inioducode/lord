import Tour from "../models/Tour.js";

// Create new tour
export const createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: newTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create. Please try again.",
    });
  }
};

// Update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update. Please try again.",
    });
  }
};

// Delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete. Please try again.",
    });
  }
};

// Get single tour
export const getSingleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const tour = await Tour.findById(id).populate("reviews");

    if (!tour) {
      res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Success",
        data: tour,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tour",
    });
  }
};

// Get all tours
export const getAllTour = async (req, res) => {
  const page = parseInt(req.query.page) || 0;
  const limit = 8;

  try {
    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * limit)
      .limit(limit);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Success",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tours",
    });
  }
};

// Get tour by search
export const getTourBySearch = async (req, res) => {
  const { city, distance, maxGroupSize } = req.query;

  try {
    const tours = await Tour.find({
      city: { $regex: new RegExp(city, "i") },
      distance: { $gte: parseInt(distance) },
      maxGroupSize: { $gte: parseInt(maxGroupSize) },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Success",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tours by search",
    });
  }
};

// Get featured tours
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Success",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch featured tours",
    });
  }
};

export const getothers = async (req, res) => {
  try {
    const tours = await Tour.find({ type: "others" })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Success",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch study visa tours",
    });
  }
};


// Get work visaTour tours
export const getTourist = async (req, res) => {
  try {
    const tours = await Tour.find({ type: "tour"})
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Success",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch Tourist visa tours",
    });
  }
};
// Get work visa tours
export const getWork = async (req, res) => {
  try {
    const tours = await Tour.find({ type: "work"})
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Success",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch work visa tours",
    });
  }
};
// Get work visa tours
export const getOthers = async (req, res) => {
  try {
    const tours = await Tour.find({ type: "others"})
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Success",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch work visa tours",
    });
  }
};

// Get study visa tours
export const getStudy = async (req, res) => {
  try {
    const tours = await Tour.find({ type: "study" })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Success",
      data: tours,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch study visa tours",
    });
  }
};



// Get tour count
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tour count",
    });
  }
};
