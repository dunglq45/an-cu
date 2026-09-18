import { FaqItem } from './faq.model';

export type UnitStatus = 'available' | 'reserved' | 'sold' | 'selected';

export interface ProjectUnit {
  id: string;
  towerId: string;
  floor: number;
  code: string;
  status: UnitStatus;
  area: number;
  bedrooms: number;
  price: string;
  rect: { x: number; y: number; width: number; height: number };
}

export interface ProjectTower {
  id: string;
  name: string;
  floors: number[];
}

export interface ProjectStat {
  label: string;
  value: string;
  sublabel: string;
}

export interface ProjectOverviewCard {
  title: string;
  rows: { label: string; value: string }[];
}

export interface ProjectPriceRow {
  code: string;
  type: string;
  area: string;
  direction: string;
  price: string;
  status: string;
  gated: boolean;
}

export interface ProjectPaymentStage {
  title: string;
  percent: string;
  description: string;
}

export interface ProjectConstructionStep {
  label: string;
  date: string;
  status: 'done' | 'in-progress' | 'upcoming';
  description: string;
  isLatest?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  developer: string;
  developerLand: string;
  district: string;
  address: string;
  status: string;
  cardDescription: string;
  cardBadge?: 'VIP';
  imageUrl?: string;
  priceFrom: string;
  priceFromUnit: string;
  handoverLabel: string;
  unitTypeLabel: string;
  stats: ProjectStat[];
  overviewCards: ProjectOverviewCard[];
  legalChecklist: { label: string; pending?: boolean }[];
  legalNote: string;
  towers: ProjectTower[];
  units: ProjectUnit[];
  priceTable: ProjectPriceRow[];
  paymentSchedule: ProjectPaymentStage[];
  constructionSteps: ProjectConstructionStep[];
  faqs: FaqItem[];
}
