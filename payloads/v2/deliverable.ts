// https://docs.patreon.com/#deliverable

import { ResourceObject } from 'include-json-api';
import { APIBenefit } from './benefit';
import { APICampaign } from './campaign';
import { APIMember } from './member';
import { APIUser } from './user';

export interface APIDeliverable extends ResourceObject {
    type: 'deliverable';
    attributes: {
        /**
         * When the creator marked the deliverable as completed or fulfilled to the patron.
         * UTC ISO format
         */
        completed_at: string | null;
        /**
         * One of `delivered`, `not_delivered`, `wont_deliver`.
         */
        delivery_status: 'delivered' | 'not_delivered' | 'wont_deliver';
        /**
         * When the deliverable is due to the patron.
         */
        due_at: string;
    };
    relationships: {
        /**
         * The Benefit the Deliverables were generated for.
         */
        benefit: { data: APIBenefit };
        /**
         * The Campaign the Deliverables were generated for.
         */
        campaign: { data: APICampaign };
        /**
         * The member who has been granted the deliverable.
         */
        member: { data: APIMember };
        /**
         * The user who has been granted the deliverable. This user is the same as the member user.
         */
        user: { data: APIUser };
    };
}
