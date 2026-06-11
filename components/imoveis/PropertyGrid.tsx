import PropertyCard from './PropertyCard';
import { MOCK_IMOVEIS } from '@/lib/mockData';

export default function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {MOCK_IMOVEIS.map(imovel => (
        <PropertyCard key={imovel._id} imovel={imovel} />
      ))}
    </div>
  );
}
