export const NUMERO_WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5519999999999";
export const EMAIL_CONTATO = process.env.RESEND_TO_EMAIL || "contato@yantraimoveis.com.br";

export function gerarLinkWhatsApp(codigoImovel?: string): string {
  const mensagem = codigoImovel
    ? `Olá, tenho interesse no imóvel código ${codigoImovel} e gostaria de mais informações.`
    : `Olá! Gostaria de falar com um especialista da Yantra Negócios Imobiliários.`;
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}
