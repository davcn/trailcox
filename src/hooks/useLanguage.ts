import { useState } from "react";
import type { Lang } from "../content/siteContent";

export function useLanguage() {
  const [lang, setLang] = useState<Lang>("es");
  return { lang, setLang };
}
