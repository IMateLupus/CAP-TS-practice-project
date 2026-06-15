// This is an automatically generated file. Please do not change its contents manually!
const { createEntityProxy } = require('./../_')
// service
const TravelService = { name: 'TravelService' }
module.exports = TravelService
module.exports.TravelService = TravelService
// Travel
module.exports.Travel = createEntityProxy(['TravelService', 'Travel'], { target: { is_singular: true } })
module.exports.Travel_ = createEntityProxy(['TravelService', 'Travel'], { target: { is_singular: false }})
// Currencies
module.exports.Currency = createEntityProxy(['TravelService', 'Currencies'], { target: { is_singular: true } })
module.exports.Currencies = createEntityProxy(['TravelService', 'Currencies'], { target: { is_singular: false }})
// TravelStatus
module.exports.TravelStatu = createEntityProxy(['TravelService', 'TravelStatus'], { target: { is_singular: true } })
module.exports.TravelStatus = createEntityProxy(['TravelService', 'TravelStatus'], { target: { is_singular: false }})
// TravelAgency
module.exports.TravelAgency = createEntityProxy(['TravelService', 'TravelAgency'], { target: { is_singular: true } })
module.exports.TravelAgency_ = createEntityProxy(['TravelService', 'TravelAgency'], { target: { is_singular: false }})
// Passenger
module.exports.Passenger = createEntityProxy(['TravelService', 'Passenger'], { target: { is_singular: true } })
module.exports.Passenger_ = createEntityProxy(['TravelService', 'Passenger'], { target: { is_singular: false }})
// Booking
module.exports.Booking = createEntityProxy(['TravelService', 'Booking'], { target: { is_singular: true } })
module.exports.Booking_ = createEntityProxy(['TravelService', 'Booking'], { target: { is_singular: false }})
// Countries
module.exports.Country = createEntityProxy(['TravelService', 'Countries'], { target: { is_singular: true } })
module.exports.Countries = createEntityProxy(['TravelService', 'Countries'], { target: { is_singular: false }})
// BookingStatus
module.exports.BookingStatu = createEntityProxy(['TravelService', 'BookingStatus'], { target: { is_singular: true } })
module.exports.BookingStatus = createEntityProxy(['TravelService', 'BookingStatus'], { target: { is_singular: false }})
// BookingSupplement
module.exports.BookingSupplement = createEntityProxy(['TravelService', 'BookingSupplement'], { target: { is_singular: true } })
module.exports.BookingSupplement_ = createEntityProxy(['TravelService', 'BookingSupplement'], { target: { is_singular: false }})
// Airline
module.exports.Airline = createEntityProxy(['TravelService', 'Airline'], { target: { is_singular: true } })
module.exports.Airline_ = createEntityProxy(['TravelService', 'Airline'], { target: { is_singular: false }})
// Flight
module.exports.Flight = createEntityProxy(['TravelService', 'Flight'], { target: { is_singular: true } })
module.exports.Flight_ = createEntityProxy(['TravelService', 'Flight'], { target: { is_singular: false }})
// Supplement
module.exports.Supplement = createEntityProxy(['TravelService', 'Supplement'], { target: { is_singular: true } })
module.exports.Supplement_ = createEntityProxy(['TravelService', 'Supplement'], { target: { is_singular: false }})
// FlightConnection
module.exports.FlightConnection = createEntityProxy(['TravelService', 'FlightConnection'], { target: { is_singular: true } })
module.exports.FlightConnection_ = createEntityProxy(['TravelService', 'FlightConnection'], { target: { is_singular: false }})
// SupplementType
module.exports.SupplementType = createEntityProxy(['TravelService', 'SupplementType'], { target: { is_singular: true }, customProps: ["code"] })
module.exports.SupplementType_ = createEntityProxy(['TravelService', 'SupplementType'], { target: { is_singular: false }})
// Airport
module.exports.Airport = createEntityProxy(['TravelService', 'Airport'], { target: { is_singular: true } })
module.exports.Airport_ = createEntityProxy(['TravelService', 'Airport'], { target: { is_singular: false }})
// Currencies.texts
module.exports.Currencies.text = createEntityProxy(['TravelService', 'Currencies.texts'], { target: { is_singular: true } })
module.exports.Currencies.texts = createEntityProxy(['TravelService', 'Currencies.texts'], { target: { is_singular: false }})
// TravelStatus.texts
module.exports.TravelStatus.text = createEntityProxy(['TravelService', 'TravelStatus.texts'], { target: { is_singular: true } })
module.exports.TravelStatus.texts = createEntityProxy(['TravelService', 'TravelStatus.texts'], { target: { is_singular: false }})
// Countries.texts
module.exports.Countries.text = createEntityProxy(['TravelService', 'Countries.texts'], { target: { is_singular: true } })
module.exports.Countries.texts = createEntityProxy(['TravelService', 'Countries.texts'], { target: { is_singular: false }})
// BookingStatus.texts
module.exports.BookingStatus.text = createEntityProxy(['TravelService', 'BookingStatus.texts'], { target: { is_singular: true } })
module.exports.BookingStatus.texts = createEntityProxy(['TravelService', 'BookingStatus.texts'], { target: { is_singular: false }})
// Supplement.texts
module.exports.Supplement.text = createEntityProxy(['TravelService', 'Supplement.texts'], { target: { is_singular: true } })
module.exports.Supplement.texts = createEntityProxy(['TravelService', 'Supplement.texts'], { target: { is_singular: false }})
// SupplementType.texts
module.exports.SupplementType.text = createEntityProxy(['TravelService', 'SupplementType.texts'], { target: { is_singular: true }, customProps: ["code"] })
module.exports.SupplementType.texts = createEntityProxy(['TravelService', 'SupplementType.texts'], { target: { is_singular: false }})
// events
// actions
// enums
module.exports.SupplementType.code ??= { Beverage: "BV", Meal: "ML", Luggage: "LU", Extra: "EX" }
module.exports.SupplementType.text.code ??= { Beverage: "BV", Meal: "ML", Luggage: "LU", Extra: "EX" }
