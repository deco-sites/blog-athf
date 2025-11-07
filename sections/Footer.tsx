import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon, { AvailableIcons } from "site/components/ui/Icon.tsx";
/**
 * @title FooterSection
 * @description Rodapé institucional da Associação Texas Holdem Friburgo (ATHF)
 */

export interface FooterLink {
  /** @title Texto do link */
  label: string;
  /** @title URL do link */
  href: string;
}

export interface FooterCategory {
  /** @title Título da categoria */
  title: string;
  /** @title Lista de links */
  links: FooterLink[];
}

export interface Props {
  /**
   * @title Nome da marca
   * @default "ATHF"
   */
  brandName?: string;

  /**
   * @title Slogan
   * @default "Associação Texas Holdem Friburgo - Sua comunidade de poker profissional"
   */
  slogan?: string;

  /**
   * @title Logo da marca
   * @format image
   */
  logo?: ImageWidget;

  /**
   * @title Links de navegação e recursos
   */
  sections?: FooterCategory[];

  /**
   * @title Links de redes sociais
   */
  socialLinks?: {
    instagram?: string;
    youtube?: string;
    email?: string;
  };

  /**
   * @title Estatísticas do rodapé
   */
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function FooterSection({
  brandName = "ATHF",
  slogan = "Associação Texas Holdem Friburgo - Sua comunidade de poker profissional",
  logo = "/logo.jpg",
  sections = [
    {
      title: "Navegação",
      links: [
        { label: "Início", href: "#inicio" },
        { label: "Eventos", href: "#eventos" },
        { label: "Sobre", href: "#sobre" },
        { label: "Blog", href: "#blog" },
      ],
    },
    {
      title: "Recursos",
      links: [
        { label: "E-book Gratuito", href: "https://ricksardella.substack.com/p/ebook-gratis-do-iniciante-ao-profissional" },
        { label: "Material de Estudo", href: "http://ricksardella.substack.com" },
        { label: "Série YouTube", href: "https://www.youtube.com/playlist?list=PLP2D4FJTio_EOGF8zgmmA0yRNMgoIVCN0" },
      ],
    },
    {
      title: "Clubes Online",
      links: [
        { label: "PPPoker", href: "https://pppoker.club/poker/api/share.php?share_type=club&time=1716238070&lang=pt&uid=1980972&club_id=453868&club_name=CSP+RJ&id=453868_0&lan=pt&type=1" },
        { label: "KKPoker", href: "https://kkpoker.club/153128" },
        { label: "Grupo WhatsApp", href: "https://chat.whatsapp.com/KUSoNIIyGwz7V7xaEQgCoU" },
      ],
    },
  ],
  socialLinks = {
    instagram: "https://www.instagram.com/athfoficial",
    youtube: "https://www.youtube.com/playlist?list=PLP2D4FJTio_EOGF8zgmmA0yRNMgoIVCN0",
  },
  stats = [
    { label: "Seguidores", value: "4.906" },
    { label: "Seguindo", value: "5.282" },
    { label: "Posts", value: "1.362" },
  ],
}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer class="bg-secondary/50 border-t border-border pt-16 pb-8">
      <div class="container mx-auto px-4">
        {/* Topo */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Marca */}
          <div>
            <div class="flex items-center gap-3 mb-4">
              <img src={logo} alt={brandName} class="h-12 w-12 rounded-md" />
              <div>
                <div class="text-xl font-bold text-primary">{brandName}</div>
                <div class="text-xs text-muted-foreground">Desde 2011</div>
              </div>
            </div>
            <p class="text-muted-foreground text-sm mb-4">{slogan}</p>
            <div class="flex gap-3">
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-card p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  📸
                </a>
              )}
              {socialLinks.youtube && (
                <a
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-card p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="YouTube"
                >
                  ▶️
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  class="bg-card p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="E-mail"
                >
                  ✉️
                </a>
              )}
            </div>
          </div>

          {/* Categorias */}
          {sections.map((section) => (
            <div>
              <h3 class="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul class="space-y-2">
                {section.links.map((link) => (
                  <li>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                      class="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 py-8 border-y border-border mb-8">
          {stats.map((item) => (
            <div class="text-center">
              <div class="text-2xl font-bold text-primary mb-1">{item.value}</div>
              <div class="text-xs text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Base */}
        <div class="text-center text-sm text-muted-foreground">
          <p>© {year} {brandName}. Todos os direitos reservados.</p>
          <p class="mt-2">
            Desenvolvido com <span class="text-primary">♠</span> para a comunidade de poker.
          </p>
        </div>
      </div>
    </footer>
  );
}
