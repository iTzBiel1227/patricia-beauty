// Troque pelo WhatsApp real da Patricia: código do país + DDD + número, somente dígitos.
export const WHATSAPP_NUMBER = '5513974025705'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const INSTAGRAM_URL = 'https://www.instagram.com/patricialeonardo.beauty?mdxt=d2w3aWF2dDd2b2hi'
