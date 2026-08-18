export const slugify = (str: string) => 
  str.toLowerCase()
     .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/&/g, 'und')
     .replace(/[^a-z0-9\s-]/g, '')
     .trim()
     .replace(/[\s_]+/g, '-');