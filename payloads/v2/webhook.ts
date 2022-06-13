// https://docs.patreon.com/#webhook

import { ResourceObject } from 'include-json-api';
import { APICampaign } from './campaign';
import { APIOAuthClient } from './oAuthClient';

export type APIWebhookTrigger =
    | 'members:create'
    | 'members:update'
    | 'members:delete'
    | 'members:pledge:create'
    | 'members:pledge:update'
    | 'members:pledge:delete'
    | 'posts:publish'
    | 'posts:update'
    | 'posts:delete';

export interface APIWebhook extends ResourceObject {
    type: 'webhook';
    attributes: {
        /**
         * Last date that the webhook was attempted or used.
         * UTC ISO format
         */
        last_attempted_at: string;
        /**
         * Number of times the webhook has failed consecutively, when in an error state.
         */
        num_consecutive_times_failed: number;
        /**
         * `true` if the webhook is paused as a result of repeated failed attempts to post to `uri`. Set to `false` to attempt to re-enable a previously failing webhook.
         */
        paused: boolean;
        /**
         * Secret used to sign your webhook message body, so you can validate authenticity upon receipt.
         */
        secret: string;
        /**
         * List of events that will trigger this webhook.
         */
        triggers: APIWebhookTrigger[];
        /**
         * Fully qualified uri where webhook will be sent (e.g. https://www.example.com/webhooks/incoming).
         */
        uri: string;
    };
    relationships: {
        /**
         * The campaign whose events trigger the webhook.
         */
        campaign: { data: APICampaign };
        /**
         * The client which created the webhook
         */
        client: { data: APIOAuthClient };
    };
}
