import {
   Generals,
   GeneralsData,
   Multilanguage,
   MultilanguageData,
} from "@/interfaces";
import { baseApi } from "@/lib/baseApi";
import { create } from "zustand";

interface GeneralState {
   generals: GeneralsData;
   polylang: MultilanguageData;
   getGenerals: (locale: string | undefined) => Promise<void>;
}

export const useGeneralStore = create<GeneralState>((set) => ({
   generals: {
      id: 1,
      phone: "",
      phone_2: "",
      email: "",
      address: "",
      schedule: "",
      sms_phone: "",
      cell_phone: "",
      pixel_facebook: "",
      tag_manager: "",
      facebook_id: "",
      url_map: "",
      social_networks: [],
      logo: {
         id: 10,
         name: "",
         alternativeText: "",
         caption: "",
         width: 0,
         height: 0,
         formats: null,
         hash: "",
         ext: "",
         mime: "",
         size: 0,
         url: "",
         previewUrl: null,
         provider: "",
         provider_metadata: null,
         createdAt: "",
         updatedAt: "",
      },
      logo_mobile: {
         id: 10,
         name: "",
         alternativeText: "",
         caption: "",
         width: 0,
         height: 0,
         formats: null,
         hash: "",
         ext: "",
         mime: "",
         size: 0,
         url: "",
         previewUrl: null,
         provider: "",
         provider_metadata: null,
         createdAt: "",
         updatedAt: "",
      },
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
   },
   polylang: {
      id: 1,
      lbl_see_articles: "",
      lbl_tips: "",
      lbl_get_quote: "",
      lbl_see_products: "",
      lbl_follow_us: "",
      lbl_get_peace: "",
      lbl_send: "",
      lbl_contact_us: "",
      menu: [],
      lang_es: "",
      lang_en: "",
      createdAt: "",
      updatedAt: "",
      publishedAt: "",
   },
   getGenerals: async (locale: string | undefined) => {
      const [{ data: general }, { data: polylang }] = await Promise.all([
         baseApi.get<Generals>(`/general?locale=${locale}&populate=deep`),
         baseApi.get<Multilanguage>(
            `/multilanguage?locale=${locale}&populate=deep`
         ),
      ]);
      set((state) => ({
         ...state,
         generals: general.data,
         polylang: polylang.data,
      }));
   },
}));
