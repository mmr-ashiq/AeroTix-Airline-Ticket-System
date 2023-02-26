const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);

    return res.status(200).json({
      data: flight,
      success: true,
      message: `Flight created successfully`,
    });
  } catch (error) {
    console.log(`something went wrong in the controller layer \n${error}`);

    return res.status(500).json({
      data: {},
      success: false,
      message: `Not able to create flight`,
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlightData(req.query);

    return res.status(200).json({
      data: flights,
      success: true,
      message: `Flights fetched successfully`,
    });
  } catch (error) {
    console.log(`something went wrong in the controller layer \n${error}`);

    return res.status(500).json({
      data: {},
      success: false,
      message: `Not able to fetch flights`,
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
