using TravelService from '../srv/travel-service';

annotate TravelService.Travel with @data.draft.enable;
annotate TravelService.Travel with @Common.SemanticKey: ['TravelID'];
annotate TravelService.Booking with @Common.SemanticKey: ['BookingID'];
annotate TravelService.BookingSupplement with @Common.SemanticKey: ['BookingSupplementID'];