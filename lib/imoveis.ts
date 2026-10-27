import { Imovel } from '@/types/imovel';

export interface Spec {
  label: string;
  value: string | number;
  icon: string;
}

export function getSpecs(imovel: Imovel): Spec[] {
  const specs: Spec[] = [];

  // Quartos: Ocultar se valor for 0 ou tipo for comercial
  if (imovel.quartos > 0 && imovel.tipoImovel !== 'comercial') {
    specs.push({ label: 'Quartos', value: imovel.quartos, icon: 'Bed' });
  }

  // Banheiros: Ocultar se 0
  if (imovel.banheiros > 0) {
    specs.push({ label: 'Banheiros', value: imovel.banheiros, icon: 'Bath' });
  }

  // Vagas: Ocultar se 0
  if (imovel.vagas > 0) {
    specs.push({ label: 'Vagas', value: imovel.vagas, icon: 'Car' });
  }

  // Área Privativa: Ocultar se 0
  if (imovel.areaPrivativa > 0) {
    specs.push({ label: 'Área', value: `${imovel.areaPrivativa}m²`, icon: 'Maximize2' });
  }

  return specs;
}
