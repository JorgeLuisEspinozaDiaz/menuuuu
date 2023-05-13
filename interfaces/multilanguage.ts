export interface Multilanguage {
   data: MultilanguageData;
   meta: MultilanguageMeta;
}

export interface MultilanguageData {
   id: number;
   lbl_see_articles:string;
   lbl_tips:string;
   lbl_get_quote: string;
   lbl_see_products:string;
   lbl_follow_us:string;
   lbl_send: string;
   lbl_contact_us: string;
   menu: Menu[];
   lang_es: string;
   lbl_get_peace:string
   lang_en: string;
   createdAt: string;
   updatedAt: string;
   publishedAt: string;
}

export interface Menu {
   id: number;
   label: string;
   url: string;
}

export interface MultilanguageMeta {}
