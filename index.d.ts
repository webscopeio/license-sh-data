declare module "license-sh-data" {
  export const TAGS_DESCRIPTIONS: { [key: string]: string };
  export const Licenses: { [key: string]: LicenseData };
  export type LicensesData = typeof Licenses;
  export type LicenseTagType = "can" | "cannot" | "must";
  export type LicenseAlign = "center" | "left";
  export type LicenseTagTitle = keyof typeof TAGS_DESCRIPTIONS;
  export type LicenseTag = {
    title: LicenseTagTitle;
    description?: string;
  };
  export type LicenseTags = {
    [key in LicenseTagType]: LicenseTag[];
  };
  export type LicenseInnerData = {
    text?: string;
    newline?: boolean;
    align?: LicenseAlign;
    tags?: string[];
  }[];
  export type LicenseData = {
    title: string;
    overview: string;
    tags: LicenseTags;
    data: LicenseInnerData;
  };
}
