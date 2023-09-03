export enum ContentType {
  ARTICLE,
  FAQ,
}

export const getContentType = (layout: string) => {
  if (layout.includes("faq")) {
    return ContentType.FAQ;
  }

  return ContentType.ARTICLE;
};
