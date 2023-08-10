const { Logger } = require('../config')
const {FlightServices}=require('../services')

const {StatusCodes}=require('http-status-codes')

const {ErrorResponse,SuccessResponse}=require('../utils/common')

/**
 * POST:/flights
 * req-body{flightNumber,airplaneId,departureAirportId,arrivalAirportId,arrivalTime,departureTime,price,
 * boardingGate,totalSeats}
 */

async function createFlight(req,res){
    try {
        const flight=await FlightServices.createFlight({
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price,
            boardingGate:req.body.boardingGate,
            totalSeats:req.body.totalSeats,
            });
            SuccessResponse.data=flight;
            return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    } catch (error) {
        Logger.error(error);
        ErrorResponse.error=error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

/**
 * get:/flights?trips=BOM-DEL
 */

async function getAllFlights(req,res){
    try {
        const flights=await FlightServices.getAllFlights(req.query);
            SuccessResponse.data=flights;
            return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        console.log(error);
        Logger.error(error);
        ErrorResponse.error=error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


module.exports={
    createFlight,
    getAllFlights
}