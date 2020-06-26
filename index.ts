import Apachev2 from './data/Apachev2.0.json'
import MIT from './data/MIT.json'
import MPL20 from './data/MozzilaPublicLicense2.0.json'
import ISC from './data/ISC.json'
import GPL3 from './data/GPL3.json'
import BDS3Clause from './data/BSD3Clause.json'
import Unlicense from './data/Unlicense.json'
import MS_PL from './data/MS-PL.json'

export type LicensesData = typeof Licenses
export const Licenses = {
  Apachev2: Apachev2 as LicenseData,
  MIT: MIT as LicenseData,
  MPL20: MPL20 as LicenseData,
  ISC: ISC as LicenseData,
  GPL3: GPL3 as LicenseData,
  BDS3Clause: BDS3Clause as LicenseData,
  Unlicense: Unlicense as LicenseData,
  MS_PL: MS_PL as LicenseData
}

export type LicenseTagType = 'can' | 'cannot' | 'must'
export type LicenseAlign = 'center' | 'left'
export type LicenseTagTitle = keyof typeof TAGS_DESCRIPTIONS

export type LicenseTag = {
    title: LicenseTagTitle
    description?: string
}
export type LicenseTags = {
  [key in LicenseTagType]: LicenseTag[]
}

export type LicenseInnerData = {
  text?: string
  newline?: boolean
  align?: LicenseAlign
  tags?: string[]
}[]

export type LicenseData = {
  title: string
  overview: string
  tags: LicenseTags
  data: LicenseInnerData
}

export const TAGS_DESCRIPTIONS = {
  "Commercial use": "Describes the ability to use the software for commercial purposes",
  "Modify": "Describes the ability to modify the software and create derivatives.",
  "Distribute": "Describes the ability to distribute original or modified (derivative) works.",
  "Sublicense": "Describes the ability for you to grant/extend a license to the software.",
  "Private use": "Describes the ability to use/modify software freely without distributing it.",
  "Derivative work": "Describes whether you can modify the software in order to make derivative works.",
  "Liability": "Describes the warranty and if the software/license owner can be charged for damages.",
  "Copyright": "Describes whether the original copyright must be retained.",
  "Permission notice": "Describes whether the permission notice shall be included in all copies or substantial parts of the software.",
  "Warranty": "Describes the ability to place a warranty on the software licensed.",
  "Use patent claims": "Describes the rights to practice patent claims of contributors to the code.",
  "Trademark use": "Describes the allowance of using contributors' names, trademarks, or logos.",
  "Disclose source": "All modified files containing software code must be disclosed under the software.",
  "Include original": "Describes whether copies of the original software or instructions to obtain copies must be distributed with the software.",
  "Include license": "Including the full text of license in modified software.",
  "State changes": "Stating significant changes made to the software.",
  "Include install instructions": "If the software is part of a consumer device, you must include the installation information necessary to modify and reinstall the software.",
  "Give credit": "Describes the need to give explicit credit to the author when distributing the software."
}
