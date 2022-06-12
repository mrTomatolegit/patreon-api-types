// https://docs.patreon.com/#goal

import { ResourceObject } from 'include-json-api';

export interface APIMedia extends ResourceObject {
    type: 'media';
    attributes: {
        /**
         * When the file was created.
         * UTC ISO format
         */
        created_at: string;
        /**
         * The URL to download this media. Valid for 24 hours.
         */
        download_url: string;
        /**
         * File name.
         */
        file_name: string;
        /**
         * The resized image URLs for this media. Valid for 2 weeks.
         */
        image_urls: object;
        /**
         * Metadata related to the file.
         */
        metadata: object | null;
        /**
         * Mimetype of uploaded file, eg: "application/jpeg".
         */
        mimetype: string;
        /**
         * Ownership id (See also `owner_type`).
         */
        owner_id: string;
        /**
         * Ownership relationship type for multi-relationship medias.
         */
        owner_relationship: string;
        /**
         * Type of the resource that owns the file.
         */
        owner_type: string;
        /**
         * Size of file in bytes.
         */
        size_bytes: number;
        /**
         * The state of the file.
         */
        state: string;
        /**
         * When the upload URL expires.
         * UTC ISO format
         */
        upload_expires_at: string;
        /**
         * All the parameters that have to be added to the upload form request.
         */
        upload_parameters: object;
        /**
         * The URL to perform a POST request to in order to upload the media file.
         */
        upload_url: string;
    };
}
