/**
 * @title EbookSection
 * @description Seção promocional para download gratuito do e-book de poker.
 */

export interface Props {
  /**
   * @title ID da seção
   * @default "ebook"
   */
  id?: string;

  /**
   * @title Título principal
   * @default "Do Iniciante ao Profissional"
   */
  title?: string;

  /**
   * @title Descrição
   * @default "O guia completo para dominar o poker. Aprenda tudo que você precisa saber para se tornar um jogador de sucesso."
   */
  description?: string;

  /**
   * @title Lista de tópicos
   * @description Itens de destaque do conteúdo do e-book.
   * @default ["Fundamentos do Texas Hold'em", "Estratégias para iniciantes", "Progressão para nível profissional", "Análise de mãos reais", "Gestão de bankroll", "Psicologia do poker"]
   */
  features?: string[];

  /**
   * @title Título do CTA
   * @default "Baixar E-book Grátis"
   */
  ctaText?: string;

  /**
   * @title URL do E-book
   * @default "https://ricksardella.substack.com/p/ebook-gratis-do-iniciante-ao-profissional"
   */
  ctaUrl?: string;

  /**
   * @title Título da Série
   * @default "Série: Jornada do Recreativo Lucrativo"
   */
  seriesTitle?: string;

  /**
   * @title Descrição da Série
   * @default "Acompanhe nossa série completa no YouTube com dicas práticas e estratégias avançadas para evoluir seu jogo."
   */
  seriesDescription?: string;

  /**
   * @title URL da Série no YouTube
   * @default "https://www.youtube.com/playlist?list=PLP2D4FJTio_EOGF8zgmmA0yRNMgoIVCN0"
   */
  seriesUrl?: string;
}

export default function EbookSection({
  id = "ebook",
  title = "Do Iniciante ao Profissional",
  description = "O guia completo para dominar o poker. Aprenda tudo que você precisa saber para se tornar um jogador de sucesso.",
  features = [
    "Fundamentos do Texas Hold'em",
    "Estratégias para iniciantes",
    "Progressão para nível profissional",
    "Análise de mãos reais",
    "Gestão de bankroll",
    "Psicologia do poker",
  ],
  ctaText = "Baixar E-book Grátis",
  ctaUrl = "https://ricksardella.substack.com/p/ebook-gratis-do-iniciante-ao-profissional",
  seriesTitle = "Série: Jornada do Recreativo Lucrativo",
  seriesDescription =
    "Acompanhe nossa série completa no YouTube com dicas práticas e estratégias avançadas para evoluir seu jogo.",
  seriesUrl = "https://www.youtube.com/playlist?list=PLP2D4FJTio_EOGF8zgmmA0yRNMgoIVCN0",
}: Props) {
  return (
    <section id={id} class="py-20 bg-background">
      <div class="container mx-auto px-4">
        <div class="max-w-5xl mx-auto">
          {/* Card principal */}
          <div class="bg-gradient-card border border-border rounded-xl overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-2">
              {/* Lado esquerdo - informações */}
              <div class="p-8 lg:p-12">
                <div class="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                  <span class="text-accent text-lg">⬇️</span>
                  <span class="text-sm font-medium text-accent">E-book Gratuito</span>
                </div>

                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                  {title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span class="text-primary">{title.split(" ").slice(-1)}</span>
                </h2>

                <p class="text-lg text-muted-foreground mb-8">{description}</p>

                <div class="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} class="flex items-center gap-3">
                      <span class="text-accent">✅</span>
                      <span class="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 bg-gradient-primary text-white font-semibold rounded-lg px-8 py-4 w-full lg:w-auto shadow-glow hover:shadow-accent transition-all duration-300"
                >
                  ⬇️ {ctaText}
                </a>
              </div>

              {/* Lado direito - destaque visual */}
              <div class="bg-gradient-primary/10 p-8 lg:p-12 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-border">
                <div class="text-center">
                  <div class="bg-card rounded-2xl p-8 shadow-card-custom mb-6 transform hover:scale-105 transition-transform duration-300">
                    <div class="text-primary text-7xl mb-4">📘</div>
                    <div class="text-6xl font-bold text-primary mb-2">100%</div>
                    <div class="text-muted-foreground">Gratuito</div>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="bg-card rounded-lg p-4">
                      <div class="text-2xl font-bold text-accent mb-1">200+</div>
                      <div class="text-xs text-muted-foreground">Páginas</div>
                    </div>
                    <div class="bg-card rounded-lg p-4">
                      <div class="text-2xl font-bold text-accent mb-1">10+</div>
                      <div class="text-xs text-muted-foreground">Capítulos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Série no YouTube */}
          <div class="mt-12 text-center bg-secondary/50 rounded-2xl p-8 border border-border">
            <h3 class="text-2xl font-bold mb-4">
              {seriesTitle.split(":")[0]}:
              <span class="text-primary">
                {seriesTitle.split(":")[1] ? seriesTitle.split(":")[1] : ""}
              </span>
            </h3>
            <p class="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {seriesDescription}
            </p>
            <a
              href={seriesUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block px-8 py-3 border-2 border-primary/30 text-primary font-semibold rounded-lg hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              ▶️ Assistir no YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
