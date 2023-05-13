// primary

export interface Picture {
   id: number;
   name: string;
   alternativeText: null;
   caption: null;
   width: number;
   height: number;
   formats: Formats | null;
   hash: string;
   ext: EXT;
   mime: MIME;
   size: number;
   url: string;
   previewUrl: null;
   provider: Provider;
   provider_metadata: null;
   createdAt: Date;
   updatedAt: Date;
}

export interface SEO {
   id: number;
   metaTitle: string;
   metaDescription: string;
   keywords: null;
   metaRobots: null;
   structuredData: null;
   metaViewport: string;
   canonicalURL: string;
   metaImage: Picture;
   // metaSocial: MetaSocial[];
}

// export interface Messages {
//    id: number;
//    mail_sent_ok: string;
//    mail_sent_ng: string;
//    validation_error: string;
//    spam: string;
//    accept_terms: string;
//    invalid_required: string;
//    invalid_too_long: string;
//    invalid_too_short: string;
//    upload_failed: string;
//    upload_file_type_invalid: string;
//    upload_file_too_large: string;
//    upload_failed_php_error: string;
//    invalid_date: string;
//    date_too_early: string;
//    date_too_late: string;
//    invalid_number: string;
//    number_too_small: string;
//    number_too_large: string;
//    quiz_answer_not_correct: string;
//    invalid_email: string;
//    invalid_url: string;
//    invalid_tel: string;
// }

export interface InputForm {
   id: number;
   name: string;
   placeholder: string;
   label: string;
}

export interface FormPersonal {
   id: number;
   names: InputForm;
   phone: InputForm;
   email: InputForm;
}

export interface Information {
   id: number;
   title: string;
   subtitle: string;
   content: string;
}

export interface Titles {
   id: number;
   title: string;
   subtitle: string;
}

//secondary

// export interface MetaSocial {
//    id: number;
//    socialNetwork: string;
//    title: string;
//    description: string;
//    image: Picture;
// }

export interface Formats {
   small?: Large;
   thumbnail: Large;
   large?: Large;
   medium?: Large;
}

export enum EXT {
   Jpg = ".jpg",
   PNG = ".png",
   SVG = ".svg",
}

export enum MIME {
   ImageJPEG = "image/jpeg",
   ImagePNG = "image/png",
   ImageSVGXML = "image/svg+xml",
}

export enum Provider {
   AwsS3 = "aws-s3",
}

export interface Large {
   ext: EXT;
   url: string;
   hash: string;
   mime: MIME;
   name: string;
   path: null;
   size: number;
   width: number;
   height: number;
}
