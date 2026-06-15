import cds from '@sap/cds';
import { Booking, BookingSupplement as Suppliment, Travel } from '#cds-models/TravelService';
import { TravelStatusCode } from '#cds-models/sap/fe/cap/travel';
import { CdsDate } from '#cds-models/_';

export class TravelService extends cds.ApplicationService { 
    init() {

        const { acceptTravel, rejectTravel, deductDiscount } = Travel.actions;

        this.before([acceptTravel, rejectTravel], [Travel, Travel.drafts], async (req) => {
            const existingDraft = await SELECT.one(Travel.drafts.name).where(req.params[0])
                .columns(travel => { travel.DraftAdministrativeData.InProcessByUser.as('InProcessByUser')});
            const isDraft = req.target.name.endsWith('.drafts');
            if (isDraft && existingDraft || isDraft && existingDraft?.inProcessByUser !== req.user.id) 
                throw req.reject(409, 'Travel is locked by $(existingDraft.inProcessByUser)');
        });

        this.on(acceptTravel, req=> UPDATE(req.subject)
                    .with({ TravelStatus_code: TravelStatusCode.Accepted }));

        this.on(rejectTravel, req=> UPDATE(req.subject)
                    .with({ TravelStatus_code: TravelStatusCode.Canceled }));

        this.on(deductDiscount, async (req) => {
            let discount = req.data.percent / 100;
            let succeeded = await UPDATE(req.subject).where`TravelStatus.code != 'A'`.and`BookingFee != null`
                .with`TotalPrice = round (TotalPrice - TotalPrice * ${discount}, 3)`
                .with`BookingFee = round (BookingFee - BookingFee * ${discount}, 3)`;
            if (!succeeded) {
                let travel = await SELECT.one`TravelID as ID, TravelStatus.code as status, BookingFee`
                    .from(req.subject)

                if (!travel) throw req.reject(404, `Travel not found, with ID ${travel.ID}`);

                if (travel.status === TravelStatusCode.Accepted) {
                    throw req.reject(400, `Discount cannot be applied to accepted travels`);
                } else if (travel.BookingFee == null) {
                    throw req.reject(400, `Discount cannot be applied to travels without booking fee`);
                }
            } else return SELECT(req.subject)
        });
    
    return super.init();
} }