export interface MapPin {
  id: string;
  price: string;
  top: string;
  left: string;
  active?: boolean;
}

export const MOCK_MAP_PINS: MapPin[] = [
  { id: 'pin-1', price: '6,8 tỷ', top: '214px', left: '16%', active: true },
  { id: 'pin-2', price: '5,45 tỷ', top: '352px', left: '44%' },
  { id: 'pin-3', price: '2,3 tỷ', top: '452px', left: '10%' },
  { id: 'pin-4', price: '7,1 tỷ', top: '296px', left: '58%' },
  { id: 'pin-5', price: '4,9 tỷ', top: '560px', left: '34%' },
];

export const MAP_PIN_PREVIEW = {
  price: '6,8 tỷ',
  title: 'Căn hộ 2PN view sông — Golden River',
  meta: '72 m² · 2 PN · Quận 1',
};

export const MAP_CLUSTER_LABEL = '+12 tin';
