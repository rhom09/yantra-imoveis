interface PropertyMapProps {
  latitude: number;
  longitude: number;
}

export default function PropertyMap({ latitude, longitude }: PropertyMapProps) {
  const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`;

  return (
    <div className="mt-12">
      <h3 className="text-xl font-serif text-verde-escuro mb-6">Localização</h3>
      <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border-yantra shadow-sm">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          title="Mapa de localização do imóvel"
        />
      </div>
    </div>
  );
}
