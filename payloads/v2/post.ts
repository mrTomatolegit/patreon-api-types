// https://docs.patreon.com/#oauthclient

import { ResourceObject } from 'include-json-api';
import { APICampaign } from './campaign';
import { APIUser } from './user';

export interface APIPost extends ResourceObject {
    type: 'post'; // unknown
    attributes: {
        /**
         * Platform app id.
         */
        app_id: number | null;
        /**
         * Processing status of the post.
         */
        app_status: string | null;
        /**
         * No description.
         */
        content: string | null;
        /**
         * An object containing embed data if media is embedded in the post,None if there is no embed
         */
        embed_data: object | null;
        /**
         * Embed media url
         */
        embed_url: string | null;
        /**
         * True if the post incurs a bill as part of a pay-per-post campaign
         */
        is_paid: boolean | null;
        /**
         * 	True if the post is viewable by anyone,False if only patrons (or a subset of patrons) can view
         */
        is_public: boolean | null;
        /**
         * Datetime that the creator most recently published (made publicly visible) the post.
         * UTC ISO format
         */
        published_at: string | null;
        /**
         * No description.
         */
        title: string | null;
        /**
         * A URL to access this post on patreon.com
         */
        url: string;
    };
    relationships: {
        /**
         * The author of the post.
         */
        user: { data: APIUser };
        /**
         * The campaign that the membership is for.
         */
        campaign: { data: APICampaign };
    };
}
