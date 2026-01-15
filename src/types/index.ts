import { ReactElement } from "react";
export interface NavIn {
  name: string;
  href: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  href: string;
  icon: ReactElement;
}

export interface Btn {
  icon: string;
  title: string;
}

export interface TestimonialIn {
  quote: string;
  author: string;
  img: string;
}

export interface PoweringIn {
  img: string;
  title: string;
  des: string;
  href: string;
  item: {
    img: string;
    name: string;
  };
}

export interface HarnessIn {
  title: string;
  des: string;
}

export interface UninterruptedIn {
  icon: string;
  title: string;
  des: string;
  energy: number;
}

export interface FeatureSectionProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface Data {
  title: string;
  des: string;
}

export interface Infos {
  icon: string;
  des: string;
}

export interface PackageInfo {
  img: string;
  title: string;
  des1: string;
  des2?: string;
  Button: string;
}

export interface AboutUs {
  icon: React.JSX.Element;
  title: string;
  des: string;
}
export interface Solar {
  img: string;
  title: string;
  des: string;
}
export interface ImpactData {
  title: string;
  data: string;
  color: string;
  color1: string;
  progress: number;
}
export interface PackageInfoProps {
  img: string;
  title: string;
  des1: string;
  des2?: string;
  Button: string;
}
export interface Card {
  icon: string;
  des: string;
}

export interface AboutUsCardProps {
  icon: React.JSX.Element;
  title: string;
  des: string;
}
export interface MeasuredChangeProps {
  title: string;
  data: string;
  unit?: string;
  color: string;
  color1: string;
  progress: number;
}

export interface ContactFormIn {
  fullName: string;
  email: string;
  contactNumber: string;
  homeAddress: string;
  powerBill: string;
  solarUnits: string;
  dateDay: string;
  dateMonth: string;
  dateYear: string;
  timeHours: string;
  timeMinutes: string;
  timePeriod: string;
  hasSolar: string | null;
}

export interface FormDataIn {
  fullName: string;
  homeAddress: string;
  contactNumber: string;
  averagePowerBill: string;
  property: string;
  existingSolar: string;
  solarCount: string;
}