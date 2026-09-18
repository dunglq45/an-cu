export type ListingBadge = 'VIP' | 'Đã xác thực' | 'Cho thuê' | 'Giữ chỗ';

export interface ListingDistance {
  label: string;
  value: string;
}

export interface Listing {
  id: string;
  slug: string;
  title: string;
  type: 'mua' | 'thue';
  price: string;
  priceUnit?: string;
  address: string;
  district: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  floor?: string;
  direction?: string;
  furnishing?: string;
  legal?: string;
  code?: string;
  badges: ListingBadge[];
  agentId: string;
  postedLabel?: string;
  description: string[];
  amenities: string[];
  imageCaption: string;
  imageUrl?: string;
  distances: ListingDistance[];
  loanEstimate?: {
    downPayment: string;
    monthlyPayment: string;
    principalAndFirstInterest: string;
    totalInterest: string;
  };
  isSkeleton?: boolean;
}
