import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

/** 
 * Header configuration 
 */
export interface Props {
  /**
   * @title Logo
   * @description Imagem e texto principal do cabeçalho
   */
  logo?: {
    /**
     * @format image
     * @title Imagem do Logo
     * @default https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04
     */
    src?: ImageWidget;
    /** @default "ATHF Logo" */
    alt?: string;
    /** @default "ATHF" */
    title?: string;
    /** @default "Poker Club" */
    subtitle?: string;
  };

  /**
   * @title Links de navegação
   * @default [{"label":"Início","url":"#inicio"},{"label":"Eventos","url":"#eventos"},{"label":"Sobre","url":"#sobre"},{"label":"Blog","url":"#blog"},{"label":"E-book","url":"#ebook"},{"label":"Contato","url":"#contato"}]
   */
  links?: { label?: string; url?: string }[];

  /**
   * @title Botão principal
   * @default [{"id":"cta-1","href":"/entrar","text":"Entrar no Clube","outline":false}]
   */
  cta?: CTA[];

  /**
   * @title Cor de fundo
   * @default bg-background/95
   */
  background?: string;

  /**
   * @title Ativar borda inferior
   * @default true
   */
  border?: boolean;
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "ATHF Logo",
    title: "ATHF",
    subtitle: "Poker Club",
  },
  links = [
    { label: "Início", url: "#inicio" },
    { label: "Eventos", url: "#eventos" },
    { label: "Sobre", url: "#sobre" },
    { label: "Blog", url: "#blog" },
    { label: "E-book", url: "#ebook" },
    { label: "Contato", url: "#contato" },
  ],
  cta = [{ id: "cta-1", href: "/entrar", text: "Entrar no Clube" }],
  background = "bg-background/95",
  border = true,
}: Props) {
  return (
    <nav
      class={`fixed top-0 left-0 right-0 z-50 ${background} backdrop-blur-sm ${
        border ? "border-b border-border" : ""
      }`}
    >
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" class="flex items-center gap-3 group">
            <Image
              src={logo.src || ""}
              alt={logo.alt || "Logo"}
              width={48}
              height={48}
              class="h-12 w-12 rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <div class="flex flex-col">
              <span class="text-xl font-bold text-primary">
                {logo.title}
              </span>
              <span class="text-xs text-muted-foreground">
                {logo.subtitle}
              </span>
            </div>
          </a>

          {/* Mobile Menu Button */}
          <label
            for="menu-toggle"
            class="cursor-pointer md:hidden text-foreground hover:text-primary transition-colors"
          >
            <input id="menu-toggle" type="checkbox" class="hidden peer" />
            <div class="relative w-7 h-6 flex flex-col justify-between">
              <span class="block h-0.5 bg-foreground transition-all duration-300 peer-checked:rotate-45 peer-checked:translate-y-[10px]"></span>
              <span class="block h-0.5 bg-foreground transition-all duration-300 peer-checked:opacity-0"></span>
              <span class="block h-0.5 bg-foreground transition-all duration-300 peer-checked:-rotate-45 peer-checked:-translate-y-[10px]"></span>
            </div>

            {/* Mobile menu overlay */}
            <div class="peer-checked:block hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />

            {/* Mobile Menu */}
            <div class="fixed top-0 right-0 w-1/2 bg-base-100 shadow-2xl z-50 h-full translate-x-full peer-checked:translate-x-0 transition-transform duration-500 p-6 flex flex-col gap-6">
              {links.map((link) => (
                <a
                  href={link.url}
                  class="block text-foreground hover:text-primary transition-colors border-b border-border py-3"
                >
                  {link.label}
                </a>
              ))}
              {cta.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.href.includes("http") ? "_blank" : "_self"}
                  class={`w-full btn btn-primary ${
                    item.outline ? "btn-outline" : ""
                  }`}
                >
                  {item.text}
                </a>
              ))}
            </div>
          </label>

          {/* Desktop Menu */}
          <div class="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                class="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {link.label}
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            {cta.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.href.includes("http") ? "_blank" : "_self"}
                class={`btn btn-primary bg-gradient-primary shadow-glow hover:shadow-accent ${
                  item.outline ? "btn-outline" : ""
                }`}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
