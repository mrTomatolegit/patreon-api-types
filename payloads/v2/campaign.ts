// https://docs.patreon.com/#campaign-v2

import { RelationshipObject, ResourceObject } from 'include-json-api';
import { APIBenefit } from './benefit';
import { APIGoal } from './goal';
import { APITier } from './tier';
import { APIUser } from './user';

export interface APICampaign extends ResourceObject {
    type: 'campaign';
    attributes: {
        /**
         * Datetime that the creator first began the campaign creation process. See `published_at`.
         * UTC ISO format
         */
        created_at: string;
        /**
         * The type of content the creator is creating, as in "`vanity` is creating `creation_name`".
         */
        creation_name: string | null;
        /**
         * The ID of the external discord server that is linked to this campaign.
         */
        discord_server_id: string | null;
        /**
         * The ID of the Google Analytics tracker that the creator wants metrics to be sent to.
         */
        google_analytics_id: string | null;
        /**
         * Whether this user has opted-in to rss feeds.
         */
        has_rss: boolean;
        /**
         * Whether or not the creator has sent a one-time rss notification email.
         */
        has_sent_rss_notify: boolean;
        /**
         * URL for the campaign's profile image.
         */
        image_small_url: string;
        /**
         * Banner image URL for the campaign.
         */
        image_url: string;
        /**
         * `true` if the campaign charges upfront, `false` otherwise.
         */
        is_charged_immediately: boolean | null;
        /**
         * `true` if the campaign charges per month, `false` if the campaign charges per-post.
         */
        is_monthly: boolean;
        /**
         * `true` if the creator has marked the campaign as containing nsfw content.
         */
        is_nsfw: boolean;
        /**
         * No description.
         */
        main_video_embed: string | null;
        /**
         * No description.
         */
        main_video_url: string | null;
        /**
         * Pithy one-liner for this campaign, displayed on the creator page.
         */
        one_liner: string | null;
        /**
         * Number of patrons pledging to this creator.
         */
        patron_count: number;
        /**
         * The thing which patrons are paying per, as in "`vanity` is making $1000 per `pay_per_name`".
         */
        pay_per_name: string | null;
        /**
         * Relative (to patreon.com) URL for the pledge checkout flow for this campaign.
         */
        pledge_url: string;
        /**
         * Datetime that the creator most recently published (made publicly visible) the campaign.
         * UTC ISO format
         */
        published_at: string | null;
        /**
         * The url for the rss album artwork.
         */
        rss_artwork_url: string | null;
        /**
         * The title of the campaigns rss feed.
         */
        rss_feed_title: string;
        /**
         * Whether the campaign's total earnings are shown publicly
         */
        show_earnings: boolean;
        /**
         * The creator's summary of their campaign.
         */
        summary: string | null;
        /**
         * No description.
         */
        thanks_embed: string | null;
        /**
         * Thank you message shown to patrons after they pledge to this campaign.
         */
        thanks_msg: string | null;
        /**
         * URL for the video shown to patrons after they pledge to this campaign.
         */
        thanks_video_url: string | null;
        /**
         * A URL to access this campaign on patreon.com
         */
        url: string;
        /**
         * The campaign's vanity.
         */
        vanity: string | null;
    };
    relationships: {
        /**
         * The campaign's benefits.
         */
        benefits: { data: APIBenefit[] };
        campaign_installations: RelationshipObject /* { data: APICampaignInstallation[] } */;
        /**
         * The campaign's categories.
         */
        categories: RelationshipObject /* { data: APICategory[] } */;
        /**
         * The campaign owner.
         */
        creator: { data: APIUser };
        /**
         * The campaign's goals.
         */
        goals: { data: APIGoal[] };
        /**
         * The campaign's tiers.
         */
        tiers: { data: APITier[] };
    };
}
