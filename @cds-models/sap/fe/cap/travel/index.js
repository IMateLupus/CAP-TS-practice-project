// This is an automatically generated file. Please do not change its contents manually!
const { createEntityProxy } = require('./../../../../_')
// Airline
module.exports.Airline = createEntityProxy(['sap.fe.cap.travel', 'Airline'], { target: { is_singular: true } })
module.exports.Airline_ = createEntityProxy(['sap.fe.cap.travel', 'Airline'], { target: { is_singular: false }})
// Airport
module.exports.Airport = createEntityProxy(['sap.fe.cap.travel', 'Airport'], { target: { is_singular: true } })
module.exports.Airport_ = createEntityProxy(['sap.fe.cap.travel', 'Airport'], { target: { is_singular: false }})
// Supplement
module.exports.Supplement = createEntityProxy(['sap.fe.cap.travel', 'Supplement'], { target: { is_singular: true } })
module.exports.Supplement_ = createEntityProxy(['sap.fe.cap.travel', 'Supplement'], { target: { is_singular: false }})
// Flight
module.exports.Flight = createEntityProxy(['sap.fe.cap.travel', 'Flight'], { target: { is_singular: true } })
module.exports.Flight_ = createEntityProxy(['sap.fe.cap.travel', 'Flight'], { target: { is_singular: false }})
// FlightConnection
module.exports.FlightConnection = createEntityProxy(['sap.fe.cap.travel', 'FlightConnection'], { target: { is_singular: true } })
module.exports.FlightConnection_ = createEntityProxy(['sap.fe.cap.travel', 'FlightConnection'], { target: { is_singular: false }})
// Passenger
module.exports.Passenger = createEntityProxy(['sap.fe.cap.travel', 'Passenger'], { target: { is_singular: true } })
module.exports.Passenger_ = createEntityProxy(['sap.fe.cap.travel', 'Passenger'], { target: { is_singular: false }})
// TravelAgency
module.exports.TravelAgency = createEntityProxy(['sap.fe.cap.travel', 'TravelAgency'], { target: { is_singular: true } })
module.exports.TravelAgency_ = createEntityProxy(['sap.fe.cap.travel', 'TravelAgency'], { target: { is_singular: false }})
// SupplementType
module.exports.SupplementType = createEntityProxy(['sap.fe.cap.travel', 'SupplementType'], { target: { is_singular: true }, customProps: ["code"] })
module.exports.SupplementType_ = createEntityProxy(['sap.fe.cap.travel', 'SupplementType'], { target: { is_singular: false }})
// Travel
module.exports.Travel = createEntityProxy(['sap.fe.cap.travel', 'Travel'], { target: { is_singular: true } })
module.exports.Travel_ = createEntityProxy(['sap.fe.cap.travel', 'Travel'], { target: { is_singular: false }})
// Booking
module.exports.Booking = createEntityProxy(['sap.fe.cap.travel', 'Booking'], { target: { is_singular: true } })
module.exports.Booking_ = createEntityProxy(['sap.fe.cap.travel', 'Booking'], { target: { is_singular: false }})
// BookingSupplement
module.exports.BookingSupplement = createEntityProxy(['sap.fe.cap.travel', 'BookingSupplement'], { target: { is_singular: true } })
module.exports.BookingSupplement_ = createEntityProxy(['sap.fe.cap.travel', 'BookingSupplement'], { target: { is_singular: false }})
// BookingStatus
module.exports.BookingStatu = createEntityProxy(['sap.fe.cap.travel', 'BookingStatus'], { target: { is_singular: true } })
module.exports.BookingStatus = createEntityProxy(['sap.fe.cap.travel', 'BookingStatus'], { target: { is_singular: false }})
// TravelStatus
module.exports.TravelStatu = createEntityProxy(['sap.fe.cap.travel', 'TravelStatus'], { target: { is_singular: true } })
module.exports.TravelStatus = createEntityProxy(['sap.fe.cap.travel', 'TravelStatus'], { target: { is_singular: false }})
// Supplement.texts
module.exports.Supplement.text = createEntityProxy(['sap.fe.cap.travel', 'Supplement.texts'], { target: { is_singular: true } })
module.exports.Supplement.texts = createEntityProxy(['sap.fe.cap.travel', 'Supplement.texts'], { target: { is_singular: false }})
// SupplementType.texts
module.exports.SupplementType.text = createEntityProxy(['sap.fe.cap.travel', 'SupplementType.texts'], { target: { is_singular: true }, customProps: ["code"] })
module.exports.SupplementType.texts = createEntityProxy(['sap.fe.cap.travel', 'SupplementType.texts'], { target: { is_singular: false }})
// BookingStatus.texts
module.exports.BookingStatus.text = createEntityProxy(['sap.fe.cap.travel', 'BookingStatus.texts'], { target: { is_singular: true } })
module.exports.BookingStatus.texts = createEntityProxy(['sap.fe.cap.travel', 'BookingStatus.texts'], { target: { is_singular: false }})
// TravelStatus.texts
module.exports.TravelStatus.text = createEntityProxy(['sap.fe.cap.travel', 'TravelStatus.texts'], { target: { is_singular: true } })
module.exports.TravelStatus.texts = createEntityProxy(['sap.fe.cap.travel', 'TravelStatus.texts'], { target: { is_singular: false }})
// events
// actions
// enums
module.exports.SupplementType.code ??= { Beverage: "BV", Meal: "ML", Luggage: "LU", Extra: "EX" }
module.exports.BookingStatusCode ??= { New: "N", Booked: "B", Canceled: "X" }
module.exports.TravelStatusCode ??= { Open: "0", Accepted: "A", Canceled: "X" }
module.exports.SupplementType.text.code ??= { Beverage: "BV", Meal: "ML", Luggage: "LU", Extra: "EX" }
