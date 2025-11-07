import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

/** CTA genérica para botões de ação */
export interface CTA {
  /**
   * @title ID do botão
   * @description Identificador único opcional para o CTA.
   */
  id?: string;

  /**
   * @title Link do botão
   * @description URL de destino ou âncora interna.
   * @format url
   */
  href: string;

  /**
   * @title Texto do botão
   * @description Texto exibido dentro do botão.
   */
  text: string;

  /**
   * @title Contorno
   * @description Define se o botão é do tipo "outline".
   * @default false
   */
  outline?: boolean;
}

/** Estrutura de estatísticas exibidas no rodapé do herói */
export interface Stat {
  /**
   * @title Ícone
   * @description Nome do ícone (ex: "clock", "users", "spade").
   * @default "spade"
   */
  icon: "clock" | "users" | "spade";

  /**
   * @title Valor principal
   * @description Valor numérico ou texto principal.
   * @default "24/7"
   */
  value: string;

  /**
   * @title Descrição
   * @description Texto de apoio abaixo do valor.
   * @default "Disponível Online"
   */
  label: string;
}

export interface Props {
  /**
   * @title ID da seção
   * @description Âncora HTML da seção principal.
   * @default "inicio"
   */
  id?: string;

  /**
   * @title Imagem de fundo
   * @description Fundo principal do hero.
   * @format image
   */
  backgroundImage?: ImageWidget;

  /**
   * @title Selo
   * @description Texto exibido no badge principal.
   * @default "Desde 2011"
   */
  badgeText?: string;

  /**
   * @title Título principal
   * @description Título em destaque do hero.
   * @default "Associação Texas Holdem"
   */
  title?: string;

  /**
   * @title Destaque do título
   * @description Parte do título destacada com cor primária.
   * @default "Friburgo"
   */
  highlight?: string;

  /**
   * @title Subtítulo
   * @description Texto explicativo abaixo do título.
   * @default "O Poker é um jogo de estratégia e habilidade. Aprenda, pratique e domine com os melhores."
   */
  subtitle?: string;

  /**
   * @title Chamada para ação (CTA)
   * @description Lista de botões com links configuráveis.
   */
  cta?: CTA[];

  /**
   * @title Estatísticas
   * @description Blocos informativos exibidos no rodapé do hero.
   */
  stats?: Stat[];
}

/**
 * @title HeroPoker
 * @description Seção heroica com fundo, título, botões e estatísticas.
 */
export default function HeroPoker({
  id = "inicio",
  backgroundImage,
  badgeText = "Desde 2011",
  title = "Associação Texas Holdem",
  highlight = "Friburgo",
  subtitle = "O Poker é um jogo de estratégia e habilidade. Aprenda, pratique e domine com os melhores.",
  cta = [
    {
      href: "#",
      text: "Entrar no Clube Agora",
    },
    {
      href: "#",
      text: "Ver Próximos Eventos",
      outline: true,
    },
  ],
  stats = [
    { icon: "clock", value: "24/7", label: "Disponível Online" },
    { icon: "users", value: "4.906", label: "Seguidores" },
    { icon: "spade", value: "13+", label: "Anos de História" },
  ],
}: Props) {
  return (
    <section
      id={id}
      class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0"
    >
      {/* Fundo com imagem e gradiente */}
      <div class="absolute inset-0 bg-cover bg-center">
        {backgroundImage && (
          <Image
            width={1920}
            height={1080}
            src={backgroundImage}
            alt={title}
            class="w-full h-full object-cover"
            decoding="async"
            loading="lazy"
          />
        )}
        <div class="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>

      {/* Conteúdo principal */}
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          {badgeText && (
            <div class="inline-flex items-center gap-2 bg-secondary border border-primary/20 rounded-full px-6 py-2 mb-8">
              <span class="text-primary text-lg">♠</span>
              <span class="text-sm font-medium">{badgeText}</span>
            </div>
          )}

          {/* Título */}
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {title}
            {highlight && <span class="text-primary block mt-2">{highlight}</span>}
          </h1>

          {/* Subtítulo */}
          {subtitle && (
            <p class="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          {/* Botões CTA */}
          {cta && cta.length > 0 && (
            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {cta.map((item) => (
                <a
                  key={item?.id}
                  id={item?.id}
                  href={item?.href}
                  target={item?.href.includes("http") ? "_blank" : "_self"}
                  class={`text-lg px-8 py-6 rounded-lg font-medium transition-all duration-300 ${
                    item.outline
                      ? "border-2 border-primary/30 hover:border-primary hover:bg-primary/10"
                      : "bg-gradient-primary text-white shadow-glow hover:shadow-accent hover:scale-105"
                  }`}
                >
                  {item?.text}
                </a>
              ))}
            </div>
          )}

          {/* Estatísticas */}
          {stats && stats.length > 0 && (
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {stats.map((item) => (
                <div
                  class="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div class="text-accent mx-auto mb-3 text-4xl">
                    {item.icon === "clock" && "🕒"}
                    {item.icon === "users" && "👥"}
                    {item.icon === "spade" && "♠"}
                  </div>
                  <div class="text-3xl font-bold text-primary mb-1">
                    {item.value}
                  </div>
                  <div class="text-sm text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Gradiente decorativo inferior */}
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
