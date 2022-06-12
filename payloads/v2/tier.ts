// https://docs.patreon.com/#tier

import { ResourceObject } from 'include-json-api';
import { APIBenefit } from './benefit';
import { APICampaign } from './campaign';
import { APIMedia } from './media';

export interface APITier extends ResourceObject {
    type: 'tier';
    attributes: {
        /**
         * Monetary amount associated with this tier (in U.S. cents).
         */
        amount_cents: number;
        /**
         * Datetime this tier was created.
         * UTC ISO format
         */
        created_at: string;
        /**
         * Tier display description.
         */
        description: string;
        /**
         * The discord role IDs granted by this tier.
         */
        discord_role_ids: object | null;
        /**
         * Datetime tier was last modified.
         */
        edited_at: string;
        /**
         * Full qualified image URL associated with this tier.
         */
        image_url: string | null;
        /**
         * Number of patrons currently registered for this tier.
         */
        patron_count: number;
        /**
         * Number of posts published to this tier.
         */
        post_count: number | null;
        /**
         * `true` if the tier is currently published.
         */
        published: boolean;
        /**
         * Datetime this tier was last published.
         * UTC ISO format
         */
        published_at: string | null;
        /**
         * Remaining number of patrons who may subscribe, if there is a `user_limit`.
         */
        remaining: number | null;
        /**
         * `true` if this tier requires a shipping address from patrons.
         */
        requires_shipping: boolean;
        /**
         * Tier display title.
         */
        title: string;
        /**
         * Datetime tier was unpublished, while applicable.
         * UTC ISO format
         */
        unpublished_at: string | null;
        /**
         * Fully qualified URL associated with this tier.
         */
        url: string;
        /**
         * Maximum number of patrons this tier is limited to, if applicable.
         */
        user_limit: number | null;
    };
    relationships: {
        /**
         * The benefits attached to the tier, which are used for generating deliverables.
         */
        benefits: { data: APIBenefit[] };
        /**
         * The campaign the tier belongs to.
         */
        campaign: { data: APICampaign };
        /**
         * The image file associated with the tier.
         */
        tier_image: { data: APIMedia };
    };
}
