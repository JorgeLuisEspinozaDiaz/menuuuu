import { Picture } from "./shared";

export interface Generals {
   data: GeneralsData;
   meta: GeneralsMeta;
}

export interface GeneralsData {
   id: number;
   phone: string;
   email: string;
   address: string;
   schedule: string;
   sms_phone: string;
   cell_phone: string;
   pixel_facebook: string;
   tag_manager: string;
   facebook_id: string;
   url_map: string;
   social_networks: SocialNetworks[];
   logo: Logo;
   logo_mobile: Logo;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
}

export interface Logo {
   id: number;
   name: string;
   alternativeText: string;
   caption: string;
   width: number;
   height: number;
   formats: null;
   hash: string;
   ext: string;
   mime: string;
   size: number;
   url: string;
   previewUrl: null;
   provider: string;
   provider_metadata: null;
   createdAt: string;
   updatedAt: string;
}

export interface SocialNetworks {
   id: number;
   type: string;
   url: string;
}

export interface GeneralsMeta { }
