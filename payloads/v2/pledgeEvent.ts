// https://docs.patreon.com/#pledge-event

import { ResourceObject } from 'include-json-api';
import { APICampaign } from './campaign';
import { ChargeStatus } from './member';
import { APITier } from './tier';
import { APIUser } from './user';

export type APIPledgeEventType =
    | 'pledge_start'
    | 'pledge_upgrade'
    | 'pledge_downgrade'
    | 'pledge_deleted'
    | 'subscription';

export interface APIPledgeEvent extends ResourceObject {
    type: 'pledge_event'; // unknown
    attributes: {
        /**
         * Amount (in the currency in which the patron paid) of the underlying event.
         */
        amount_cents: number;
        /**
         * ISO code of the currency of the event.
         */
        currency_code: string;
        /**
         * The date which this event occurred.
         * UTC ISO format
         */
        date: string;
        /**
         * Status of underlying payment. One of `Paid`, `Declined`, `Deleted`, `Pending`, `Refunded`, `Fraud`, `Other`
         */
        payment_status: ChargeStatus;
        /**
         * Id of the tier associated with the pledge.
         */
        tier_id: string;
        /**
         * Title of the reward tier associated with the pledge.
         */
        tier_title: string;
        /**
         * Event type. One of `pledge_start`, `pledge_upgrade`, `pledge_downgrade`, `pledge_delete`, `subscription`
         */
        type: APIPledgeEventType;
    };
    relationships: {
        /**
         * The campaign being pledged to.
         */
        campaign: { data: APICampaign };
        /**
         * The pledging user
         */
        patron: { data: APIUser };
        /**
         * The tier associated with this pledge event.
         */
        tier: { data: APITier };
    };
}
