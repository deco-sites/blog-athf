/**
 * @title ClubsSection
 * @description Seção que apresenta os clubes online (PPPoker e KKPoker) e a comunidade WhatsApp da ATHF.
 */

export interface Club {
  /** @title Nome do Clube */
  name: string;
  /** @title Descrição */
  description: string;
  /** @title Disponibilidade */
  availability: string;
  /** @title Link de acesso */
  link: string;
  /** @title Gradiente do topo */
  gradient?: string;
}

export interface Props {
  /**
   * @title ID da seção
   * @default "clubs"
   */
  id?: string;

  /**
   * @title Título principal
   * @default "Jogue Online"
   */
  title?: string;

  /**
   * @title Subtítulo
   * @default "Acesse nossos clubes online e jogue poker a qualquer hora, de qualquer lugar."
   */
  subtitle?: string;

  /**
   * @title Lista de clubes
   * @default [{ name: "PPPoker", description: "Clube CSP RJ", availability: "24/7 disponível", link: "https://pppoker.club/poker/api/share.php?share_type=club&time=1716238070&lang=pt&uid=1980972&club_id=453868&club_name=CSP+RJ&id=453868_0&lan=pt&type=1", gradient: "from-primary/20 to-accent/20" }, { name: "KKPoker", description: "Clube ID: 153128", availability: "Jogue a qualquer hora", link: "https://kkpoker.club/153128", gradient: "from-accent/20 to-primary/20" }]
   */
  clubs?: Club[];

  /**
   * @title URL do grupo WhatsApp
   * @default "https://chat.whatsapp.com/KUSoNIIyGwz7V7xaEQgCoU"
   */
  whatsappUrl?: string;
}

export default function ClubsSection({
  id = "clubs",
  title = "Jogue Online",
  subtitle = "Acesse nossos clubes online e jogue poker a qualquer hora, de qualquer lugar.",
  clubs = [
    {
      name: "PPPoker",
      description: "Clube CSP RJ",
      availability: "24/7 disponível",
      link: "https://pppoker.club/poker/api/share.php?share_type=club&time=1716238070&lang=pt&uid=1980972&club_id=453868&club_name=CSP+RJ&id=453868_0&lan=pt&type=1",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      name: "KKPoker",
      description: "Clube ID: 153128",
      availability: "Jogue a qualquer hora",
      link: "https://kkpoker.club/153128",
      gradient: "from-accent/20 to-primary/20",
    },
  ],
  whatsappUrl = "https://chat.whatsapp.com/KUSoNIIyGwz7V7xaEQgCoU",
}: Props) {
  return (
    <section id={id} class="py-20 bg-secondary/30">
      <div class="container mx-auto px-4">
        {/* Título */}
        <div class="text-center mb-12">
          <div class="inline-block bg-primary/20 text-primary border border-primary/30 rounded-full px-4 py-1 text-sm font-medium mb-4">
            Poker Online
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            {title.split(" ")[0]} <span class="text-primary">{title.split(" ")[1]}</span>
          </h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Lista de clubes */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {clubs.map((club, index) => (
            <div
              key={index}
              class="bg-gradient-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
            >
              <div class={`h-2 bg-gradient-to-r ${club.gradient ?? "from-primary to-accent"}`} />

              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-primary text-2xl">📱</span>
                  <span class="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Online
                  </span>
                </div>

                <h3 class="text-2xl font-semibold mb-1 text-foreground">{club.name}</h3>
                <p class="text-sm text-muted-foreground mb-4">{club.description}</p>

                <div class="flex items-center gap-2 text-muted-foreground mb-6">
                  <span class="text-accent">⏰</span>
                  <span class="text-sm">{club.availability}</span>
                </div>

                <a
                  href={club.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block w-full text-center bg-gradient-primary text-white font-semibold py-3 rounded-lg shadow-glow hover:shadow-accent transition-all duration-300"
                >
                  Entrar no Clube
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Comunidade WhatsApp */}
        <div class="max-w-2xl mx-auto bg-gradient-card border border-border rounded-2xl p-8 text-center">
          <div class="text-accent text-4xl mb-4">🌍</div>
          <h3 class="text-2xl font-bold mb-4">
            Time de Poker <span class="text-primary">ATHF</span>
          </h3>
          <p class="text-muted-foreground mb-6">
            Entre para nossa comunidade no WhatsApp e conecte-se com outros jogadores,
            receba dicas exclusivas e fique por dentro de todos os eventos.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-gradient-accent text-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300"
          >
            💬 Entrar no Grupo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
