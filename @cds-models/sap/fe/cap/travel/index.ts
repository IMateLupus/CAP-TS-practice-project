// This is an automatically generated file. Please do not change its contents manually!
import * as __ from './../../../../_';
import * as _ from './../../../..';
import * as _custom from './../../../../custom';
import * as _sap_common from './../../../common';

// enum
export const BookingStatusCode = {
  New: "N",
  Booked: "B",
  Canceled: "X",
} as const;
export type BookingStatusCode = "N" | "B" | "X"

// enum
export const TravelStatusCode = {
  Open: "0",
  Accepted: "A",
  Canceled: "X",
} as const;
export type TravelStatusCode = "0" | "A" | "X"

// enum
export const SupplementType_code = {
  Beverage: "BV",
  Meal: "ML",
  Luggage: "LU",
  Extra: "EX",
} as const;
export type SupplementType_code = "BV" | "ML" | "LU" | "EX"

// the following represents the CDS aspect 'MasterData'
export function _MasterDataAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class MasterData extends Base {
    static readonly kind: 'entity' | 'type' | 'aspect' = 'aspect';
    declare static readonly keys: __.KeysOf<MasterData>;
    declare static readonly elements: __.ElementsOf<MasterData>;
    declare static readonly actions: globalThis.Record<never, never>;
  };
}
export class MasterData extends _MasterDataAspect(__.Entity) {}
export class MasterData_ extends Array<MasterData> {$count?: number}
Object.defineProperty(MasterData_, 'name', { value: 'sap.fe.cap.travel.MasterData' })
// entity 'Airline'
export function _AirlineAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Airline extends _MasterDataAspect(Base) {
    declare AirlineID?: __.Key<string>
    declare Name?: string | null
    /**
    * Type for an association to Currencies
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-currency
    */
    declare CurrencyCode?: _.Currency | null
    declare CurrencyCode_code?: string | null
    declare AirlinePicURL?: string | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Airline>;
    declare static readonly elements: __.ElementsOf<Airline>;
    declare static readonly actions: typeof MasterData.actions & globalThis.Record<never, never>;
  };
}
export class Airline extends _AirlineAspect(__.Entity) {}
Object.defineProperty(Airline, 'name', { value: 'sap.fe.cap.travel.Airline' })
Object.defineProperty(Airline, 'is_singular', { value: true })
export class Airline_ extends Array<Airline> {$count?: number}
Object.defineProperty(Airline_, 'name', { value: 'sap.fe.cap.travel.Airline' })

// entity 'Airport'
export function _AirportAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Airport extends _MasterDataAspect(Base) {
    declare AirportID?: __.Key<string>
    declare Name?: string | null
    declare City?: string | null
    /**
    * Type for an association to Countries
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-country
    */
    declare CountryCode?: _.Country | null
    declare CountryCode_code?: string | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Airport>;
    declare static readonly elements: __.ElementsOf<Airport>;
    declare static readonly actions: typeof MasterData.actions & globalThis.Record<never, never>;
  };
}
export class Airport extends _AirportAspect(__.Entity) {}
Object.defineProperty(Airport, 'name', { value: 'sap.fe.cap.travel.Airport' })
Object.defineProperty(Airport, 'is_singular', { value: true })
export class Airport_ extends Array<Airport> {$count?: number}
Object.defineProperty(Airport_, 'name', { value: 'sap.fe.cap.travel.Airport' })

// entity 'Supplement'
export function _SupplementAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Supplement extends _custom._managedAspect(_MasterDataAspect(Base)) {
    declare SupplementID?: __.Key<string>
    declare Price?: number | null
    declare Type?: __.Association.to<SupplementType> | null
    declare Type_code?: SupplementType_code | null
    declare Description?: string | null
    /**
    * Type for an association to Currencies
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-currency
    */
    declare CurrencyCode?: _.Currency | null
    declare CurrencyCode_code?: string | null
    declare texts?: __.Composition.of.many<Supplement.texts>
    declare localized?: __.Association.to<Supplement.text> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Supplement>;
    declare static readonly elements: __.ElementsOf<Supplement>;
    declare static readonly actions: typeof MasterData.actions & typeof _custom.managed.actions & globalThis.Record<never, never>;
  };
}
export class Supplement extends _SupplementAspect(__.Entity) {}
Object.defineProperty(Supplement, 'name', { value: 'sap.fe.cap.travel.Supplement' })
Object.defineProperty(Supplement, 'is_singular', { value: true })
export class Supplement_ extends Array<Supplement> {$count?: number}
Object.defineProperty(Supplement_, 'name', { value: 'sap.fe.cap.travel.Supplement' })

// entity 'Flight'
export function _FlightAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Flight extends _MasterDataAspect(Base) {
    declare AirlineID?: __.Key<string>
    declare FlightDate?: __.Key<__.CdsDate>
    declare ConnectionID?: __.Key<string>
    declare Price?: number | null
    /**
    * Type for an association to Currencies
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-currency
    */
    declare CurrencyCode?: _.Currency | null
    declare CurrencyCode_code?: string | null
    declare PlaneType?: string | null
    declare MaximumSeats?: number | null
    declare OccupiedSeats?: number | null
    declare to_Airline?: __.Association.to<Airline> | null
    declare to_Connection?: __.Association.to<FlightConnection> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Flight>;
    declare static readonly elements: __.ElementsOf<Flight>;
    declare static readonly actions: typeof MasterData.actions & globalThis.Record<never, never>;
  };
}
export class Flight extends _FlightAspect(__.Entity) {}
Object.defineProperty(Flight, 'name', { value: 'sap.fe.cap.travel.Flight' })
Object.defineProperty(Flight, 'is_singular', { value: true })
export class Flight_ extends Array<Flight> {$count?: number}
Object.defineProperty(Flight_, 'name', { value: 'sap.fe.cap.travel.Flight' })

// entity 'FlightConnection'
export function _FlightConnectionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class FlightConnection extends _MasterDataAspect(Base) {
    declare ConnectionID?: __.Key<string>
    declare AirlineID?: __.Key<string>
    declare DepartureAirport?: __.Association.to<Airport> | null
    declare DepartureAirport_AirportID?: string | null
    declare DestinationAirport?: __.Association.to<Airport> | null
    declare DestinationAirport_AirportID?: string | null
    declare DepartureTime?: __.CdsTime | null
    declare ArrivalTime?: __.CdsTime | null
    declare Distance?: number | null
    declare DistanceUnit?: string | null
    declare to_Airline?: __.Association.to<Airline> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<FlightConnection>;
    declare static readonly elements: __.ElementsOf<FlightConnection>;
    declare static readonly actions: typeof MasterData.actions & globalThis.Record<never, never>;
  };
}
export class FlightConnection extends _FlightConnectionAspect(__.Entity) {}
Object.defineProperty(FlightConnection, 'name', { value: 'sap.fe.cap.travel.FlightConnection' })
Object.defineProperty(FlightConnection, 'is_singular', { value: true })
export class FlightConnection_ extends Array<FlightConnection> {$count?: number}
Object.defineProperty(FlightConnection_, 'name', { value: 'sap.fe.cap.travel.FlightConnection' })

// entity 'Passenger'
export function _PassengerAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Passenger extends _custom._managedAspect(_MasterDataAspect(Base)) {
    declare CustomerID?: __.Key<string>
    declare FirstName?: string | null
    declare LastName?: string | null
    declare Title?: string | null
    declare Street?: string | null
    declare PostalCode?: string | null
    declare City?: string | null
    /**
    * Type for an association to Countries
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-country
    */
    declare CountryCode?: _.Country | null
    declare CountryCode_code?: string | null
    declare PhoneNumber?: string | null
    declare EMailAddress?: string | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Passenger>;
    declare static readonly elements: __.ElementsOf<Passenger>;
    declare static readonly actions: typeof MasterData.actions & typeof _custom.managed.actions & globalThis.Record<never, never>;
  };
}
export class Passenger extends _PassengerAspect(__.Entity) {}
Object.defineProperty(Passenger, 'name', { value: 'sap.fe.cap.travel.Passenger' })
Object.defineProperty(Passenger, 'is_singular', { value: true })
export class Passenger_ extends Array<Passenger> {$count?: number}
Object.defineProperty(Passenger_, 'name', { value: 'sap.fe.cap.travel.Passenger' })

// entity 'TravelAgency'
export function _TravelAgencyAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class TravelAgency extends _MasterDataAspect(Base) {
    declare AgencyID?: __.Key<string>
    declare Name?: string | null
    declare Street?: string | null
    declare PostalCode?: string | null
    declare City?: string | null
    /**
    * Type for an association to Countries
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-country
    */
    declare CountryCode?: _.Country | null
    declare CountryCode_code?: string | null
    declare PhoneNumber?: string | null
    declare EMailAddress?: string | null
    declare WebAddress?: string | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<TravelAgency>;
    declare static readonly elements: __.ElementsOf<TravelAgency>;
    declare static readonly actions: typeof MasterData.actions & globalThis.Record<never, never>;
  };
}
export class TravelAgency extends _TravelAgencyAspect(__.Entity) {}
Object.defineProperty(TravelAgency, 'name', { value: 'sap.fe.cap.travel.TravelAgency' })
Object.defineProperty(TravelAgency, 'is_singular', { value: true })
export class TravelAgency_ extends Array<TravelAgency> {$count?: number}
Object.defineProperty(TravelAgency_, 'name', { value: 'sap.fe.cap.travel.TravelAgency' })

// entity 'SupplementType'
export function _SupplementTypeAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class SupplementType extends _sap_common._CodeListAspect(Base) {
    declare code?: __.Key<SupplementType_code>
    declare texts?: __.Composition.of.many<SupplementType.texts>
    declare localized?: __.Association.to<SupplementType.text> | null
    static code = SupplementType_code;
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<SupplementType>;
    declare static readonly elements: __.ElementsOf<SupplementType>;
    declare static readonly actions: typeof _sap_common.CodeList.actions & globalThis.Record<never, never>;
  };
}
export class SupplementType extends _SupplementTypeAspect(__.Entity) {}
Object.defineProperty(SupplementType, 'name', { value: 'sap.fe.cap.travel.SupplementType' })
Object.defineProperty(SupplementType, 'is_singular', { value: true })
export class SupplementType_ extends Array<SupplementType> {$count?: number}
Object.defineProperty(SupplementType_, 'name', { value: 'sap.fe.cap.travel.SupplementType' })

// entity 'Travel'
export function _TravelAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Travel extends _custom._managedAspect(Base) {
    declare TravelUUID?: __.Key<string>
    declare TravelID?: number | null
    declare BeginDate?: __.CdsDate | null
    declare EndDate?: __.CdsDate | null
    declare BookingFee?: number | null
    declare TotalPrice?: number | null
    /**
    * Type for an association to Currencies
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-currency
    */
    declare CurrencyCode?: _.Currency | null
    declare CurrencyCode_code?: string | null
    declare Description?: string | null
    declare TravelStatus?: __.Association.to<TravelStatu> | null
    declare TravelStatus_code?: TravelStatusCode | null
    declare to_Agency?: __.Association.to<TravelAgency> | null
    declare to_Agency_AgencyID?: string | null
    declare to_Customer?: __.Association.to<Passenger> | null
    declare to_Customer_CustomerID?: string | null
    declare to_Booking?: __.Composition.of.many<Booking_>
    declare GoGreen?: boolean | null
    declare GreenFee?: number | null
    declare TreesPlanted?: number | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Travel>;
    declare static readonly elements: __.ElementsOf<Travel>;
    declare static readonly actions: typeof _custom.managed.actions & globalThis.Record<never, never>;
  };
}
export class Travel extends _TravelAspect(__.Entity) {}
Object.defineProperty(Travel, 'name', { value: 'sap.fe.cap.travel.Travel' })
Object.defineProperty(Travel, 'is_singular', { value: true })
export class Travel_ extends Array<Travel> {$count?: number}
Object.defineProperty(Travel_, 'name', { value: 'sap.fe.cap.travel.Travel' })

// entity 'Booking'
export function _BookingAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Booking extends _custom._managedAspect(Base) {
    declare BookingUUID?: __.Key<string>
    declare BookingID?: number | null
    declare BookingDate?: __.CdsDate | null
    declare ConnectionID?: string | null
    declare FlightDate?: __.CdsDate | null
    declare FlightPrice?: number | null
    /**
    * Type for an association to Currencies
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-currency
    */
    declare CurrencyCode?: _.Currency | null
    declare CurrencyCode_code?: string | null
    declare BookingStatus?: __.Association.to<BookingStatu> | null
    declare BookingStatus_code?: BookingStatusCode | null
    declare to_BookSupplement?: __.Composition.of.many<BookingSupplement_>
    declare to_Carrier?: __.Association.to<Airline> | null
    declare to_Carrier_AirlineID?: string | null
    declare to_Customer?: __.Association.to<Passenger> | null
    declare to_Customer_CustomerID?: string | null
    declare to_Travel?: __.Association.to<Travel> | null
    declare to_Travel_TravelUUID?: string | null
    declare to_Flight?: __.Association.to<Flight> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Booking>;
    declare static readonly elements: __.ElementsOf<Booking>;
    declare static readonly actions: typeof _custom.managed.actions & globalThis.Record<never, never>;
  };
}
export class Booking extends _BookingAspect(__.Entity) {}
Object.defineProperty(Booking, 'name', { value: 'sap.fe.cap.travel.Booking' })
Object.defineProperty(Booking, 'is_singular', { value: true })
export class Booking_ extends Array<Booking> {$count?: number}
Object.defineProperty(Booking_, 'name', { value: 'sap.fe.cap.travel.Booking' })

// entity 'BookingSupplement'
export function _BookingSupplementAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BookingSupplement extends _custom._managedAspect(Base) {
    declare BookSupplUUID?: __.Key<string>
    declare BookingSupplementID?: number | null
    declare Price?: number | null
    /**
    * Type for an association to Currencies
    * 
    * See https://cap.cloud.sap/docs/cds/common#type-currency
    */
    declare CurrencyCode?: _.Currency | null
    declare CurrencyCode_code?: string | null
    declare to_Booking?: __.Association.to<Booking> | null
    declare to_Booking_BookingUUID?: string | null
    declare to_Travel?: __.Association.to<Travel> | null
    declare to_Travel_TravelUUID?: string | null
    declare to_Supplement?: __.Association.to<Supplement> | null
    declare to_Supplement_SupplementID?: string | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<BookingSupplement>;
    declare static readonly elements: __.ElementsOf<BookingSupplement>;
    declare static readonly actions: typeof _custom.managed.actions & globalThis.Record<never, never>;
  };
}
export class BookingSupplement extends _BookingSupplementAspect(__.Entity) {}
Object.defineProperty(BookingSupplement, 'name', { value: 'sap.fe.cap.travel.BookingSupplement' })
Object.defineProperty(BookingSupplement, 'is_singular', { value: true })
export class BookingSupplement_ extends Array<BookingSupplement> {$count?: number}
Object.defineProperty(BookingSupplement_, 'name', { value: 'sap.fe.cap.travel.BookingSupplement' })

// entity 'BookingStatu'
export function _BookingStatuAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class BookingStatu extends _sap_common._CodeListAspect(Base) {
    declare code?: __.Key<BookingStatusCode>
    declare texts?: __.Composition.of.many<BookingStatus.texts>
    declare localized?: __.Association.to<BookingStatus.text> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<BookingStatu>;
    declare static readonly elements: __.ElementsOf<BookingStatu>;
    declare static readonly actions: typeof _sap_common.CodeList.actions & globalThis.Record<never, never>;
  };
}
export class BookingStatu extends _BookingStatuAspect(__.Entity) {}
Object.defineProperty(BookingStatu, 'name', { value: 'sap.fe.cap.travel.BookingStatus' })
Object.defineProperty(BookingStatu, 'is_singular', { value: true })
export class BookingStatus extends Array<BookingStatu> {$count?: number}
Object.defineProperty(BookingStatus, 'name', { value: 'sap.fe.cap.travel.BookingStatus' })

// entity 'TravelStatu'
export function _TravelStatuAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class TravelStatu extends _sap_common._CodeListAspect(Base) {
    declare code?: __.Key<TravelStatusCode>
    declare texts?: __.Composition.of.many<TravelStatus.texts>
    declare localized?: __.Association.to<TravelStatus.text> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<TravelStatu>;
    declare static readonly elements: __.ElementsOf<TravelStatu>;
    declare static readonly actions: typeof _sap_common.CodeList.actions & globalThis.Record<never, never>;
  };
}
export class TravelStatu extends _TravelStatuAspect(__.Entity) {}
Object.defineProperty(TravelStatu, 'name', { value: 'sap.fe.cap.travel.TravelStatus' })
Object.defineProperty(TravelStatu, 'is_singular', { value: true })
export class TravelStatus extends Array<TravelStatu> {$count?: number}
Object.defineProperty(TravelStatus, 'name', { value: 'sap.fe.cap.travel.TravelStatus' })

export namespace Supplement {
  // entity 'text'
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends _sap_common._TextsAspectAspect(Base) {
      declare SupplementID?: __.Key<string>
      declare Description?: string | null
      static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text> & typeof _sap_common.TextsAspect.keys;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: typeof _sap_common.TextsAspect.actions & globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'sap.fe.cap.travel.Supplement.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'sap.fe.cap.travel.Supplement.texts' })
  
}
export namespace SupplementType {
  // enum
  const text_code = {
    Beverage: "BV",
    Meal: "ML",
    Luggage: "LU",
    Extra: "EX",
  } as const;
  type text_code = "BV" | "ML" | "LU" | "EX"
  
  // entity 'text'
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends _sap_common._TextsAspectAspect(Base) {
      declare name?: string | null
      declare descr?: string | null
      declare code?: __.Key<text_code>
      static code = text_code;
      static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text> & typeof _sap_common.TextsAspect.keys;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: typeof _sap_common.TextsAspect.actions & globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'sap.fe.cap.travel.SupplementType.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'sap.fe.cap.travel.SupplementType.texts' })
  
}
export namespace BookingStatus {
  // entity 'text'
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends _sap_common._TextsAspectAspect(Base) {
      declare name?: string | null
      declare descr?: string | null
      declare code?: __.Key<BookingStatusCode>
      static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text> & typeof _sap_common.TextsAspect.keys;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: typeof _sap_common.TextsAspect.actions & globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'sap.fe.cap.travel.BookingStatus.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'sap.fe.cap.travel.BookingStatus.texts' })
  
}
export namespace TravelStatus {
  // entity 'text'
  export function _textAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
    return class text extends _sap_common._TextsAspectAspect(Base) {
      declare name?: string | null
      declare descr?: string | null
      declare code?: __.Key<TravelStatusCode>
      static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
      declare static readonly keys: __.KeysOf<text> & typeof _sap_common.TextsAspect.keys;
      declare static readonly elements: __.ElementsOf<text>;
      declare static readonly actions: typeof _sap_common.TextsAspect.actions & globalThis.Record<never, never>;
    };
  }
  export class text extends _textAspect(__.Entity) {}
  Object.defineProperty(text, 'name', { value: 'sap.fe.cap.travel.TravelStatus.texts' })
  Object.defineProperty(text, 'is_singular', { value: true })
  export class texts extends Array<text> {$count?: number}
  Object.defineProperty(texts, 'name', { value: 'sap.fe.cap.travel.TravelStatus.texts' })
  
}