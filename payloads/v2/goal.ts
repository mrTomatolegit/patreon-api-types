// https://docs.patreon.com/#goal

import { ResourceObject } from 'include-json-api';
import { APICampaign } from './campaign';

export interface APIGoal extends ResourceObject {
    type: 'goal';
    attributes: {
        /**
         * Goal amount in USD cents.
         */
        amount_cents: number;
        /**
         * Equal to (pledge_sum/goal amount)*100, helpful when a creator
         */
        completed_percentage: number;
        /**
         * When the goal was created for the campaign.
         * UTC ISO format
         */
        created_at: string;
        /**
         * Goal description.
         */
        description: string | null;
        /**
         * When the campaign reached the goal.
         * UTC ISO format
         */
        reached_at: string | null;
        /**
         *	Goal title.
         */
        title: string;
    };
    relationships: {
        /**
         * The campaign trying to reach the goal
         */
        campaign: { data: APICampaign };
    };
}
