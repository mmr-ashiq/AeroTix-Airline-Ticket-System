const { CityService } = require("../services/index");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity({ name: req.body.name });

    res.status(200).json({
      success: true,
      data: city,
      message: "City created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);

    res.status(200).json({
      success: true,
      data: city,
      message: "City retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);

    res.status(200).json({
      success: true,
      data: city,
      message: "City updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

const remove = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);

    res.status(200).json({
      success: true,
      message: "City deleted successfully",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};
