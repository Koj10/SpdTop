import { Footer } from "./Footer";
import { Header } from "./Header";
import { StageBackground } from "@/components/shared/StageBackground";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function PageShell({
  children,
  locale,
  dictionary,
}: {
  children: React.ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}) {
  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <StageBackground />
      <Header />
      <main className="relative z-10 min-h-screen w-full overflow-x-hidden pt-16">{children}</main>
      <Footer />
    </LocaleProvider>
  );
}
