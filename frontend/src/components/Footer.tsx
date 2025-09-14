import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            ✨ Made with Love by{" "}
            <a
              href="https://www.linkedin.com/in/yasser-albogami-650240291/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 hover:underline"
            >
              Yasser.A Albogami
            </a>{" "}
            DSC Club
          </p>
        </div>
      </div>
    </footer>
  );
}
