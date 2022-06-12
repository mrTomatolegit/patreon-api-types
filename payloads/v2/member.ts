// https://docs.patreon.com/#member

import { ResourceObject } from 'include-json-api';
import { APIAddress } from './address';
import { APICampaign } from './campaign';
import { APIPledgeEvent } from './pledgeEvent';
import { APITier } from './tier';
import { APIUser } from './user';

export type ChargeStatus =
    | 'Paid'
    | 'Declined'
    | 'Deleted'
    | 'Pending'
    | 'Refunded'
    | 'Fraud'
    | 'Other';

export type PatronStatus = 'active_patron' | 'declined_patron' | 'former_patron';

export interface APIMember extends ResourceObject {
    type: 'member';
    attributes: {
        /**
         * The total amount that the member has ever paid to the campaign in campaign's currency. 0 if never paid.
         */
        campaign_lifetime_support_cents: number;
        /**
         * The amount in cents that the member is entitled to.This includes a current pledge, or payment that covers the current payment period.
         */
        currently_entitled_amount_cents: number;
        /**
         * The member's email address. Requires the `campaigns.members[email]` scope.
         */
        email: string;
        /**
         * Full name of the member user.
         */
        full_name: string;
        /**
         * The user is not a pledging patron but has subscribed to updates about public posts.
         */
        is_follower: boolean;
        /**
         * Datetime of last attempted charge. `null` if never charged.
         * UTC ISO format
         */
        last_charge_date: string | null;
        /**
         * The result of the last attempted charge.The only successful status is `Paid`.`null` if never charged. One of `Paid`, `Declined`, `Deleted`, `Pending`, `Refunded`, `Fraud`, `Other`.
         */
        last_charge_status: ChargeStatus | null;
        /**
         * The total amount that the member has ever paid to the campaign. `0` if never paid.
         */
        lifetime_support_cents: number;
        /**
         * Datetime of next charge. `null` if annual pledge downgrade.
         * UTC ISO format
         */
        next_charge_date: string | null;
        /**
         * The creator's notes on the member.
         */
        note: string;
        /**
         * One of `active_patron`, `declined_patron`, `former_patron`. A null value indicates the member has never pledged.
         */
        patron_status: PatronStatus | null;
        /**
         * Number of months between charges.
         */
        pledge_cadence: number;
        /**
         * Datetime of beginning of most recent pledge chainfrom this member to the campaign. Pledge updates do not change this value.
         * UTC ISO format
         */
        pledge_relationship_start: string | null;
        /**
         * The amount in cents the user will pay at the next pay cycle.
         */
        will_pay_amount_cents: number;
    };
    relationships: {
        /**
         * The member's shipping address that they entered for the campaign.Requires the `campaign.members.address` scope.
         */
        address: { data: APIAddress };
        /**
         * The campaign that the membership is for.
         */
        campaign: { data: APICampaign };
        /**
         * The tiers that the member is entitled to. This includes a current pledge, or payment that covers the current payment period.
         */
        currently_entitled_tiers: { data: APITier[] };
        /**
         * The pledge history of the member
         */
        pledge_history: { data: APIPledgeEvent[] };
        /**
         * The user who is pledging to the campaign.
         */
        user: { data: APIUser };
    };
}
