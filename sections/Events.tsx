import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title Classificado
 * @description Representa um jogador classificado em um torneio.
 */
export interface Player {
  /**
   * @title Posição
   * @description Colocação do jogador no torneio.
   * @default 1
   */
  position: number;

  /**
   * @title Nome
   * @description Nome completo ou apelido do jogador.
   * @default "João Silva"
   */
  name: string;

  /**
   * @title Fichas restantes
   * @description Quantidade de fichas que o jogador possui atualmente.
   * @default "120K"
   */
  chips: string;

  /**
   * @title Prêmio
   * @description Indica se o jogador recebeu prêmio.
   */
  prize: string;
}

/**
 * @title Evento
 * @description Estrutura de informações de um torneio.
 */
export interface Event {
  /**
   * @title Título do evento
   * @default "Torneio Bye Bye 2025"
   */
  title: string;

  /**
   * @title Data
   * @format date
   * @default "2025-11-14"
   */
  date: string;

  /**
   * @title Horário - (00 - 23)
   * @default "14"
   */
  time: string;

  /**
   * @title Valor do Buy-in
   * @default "R$ 200"
   */
  buyIn: string;

  /**
   * @title Fichas iniciais
   * @default "20K Fichas"
   */
  chips: string;

  /**
   * @title Rebuy
   * @default "R$ 200 - 30K Fichas"
   */
  rebuy: string;

  /**
   * @title Add-on
   * @default "40K Fichas"
   */
  addon: string;

  /**
   * @title Duração dos blinds
   * @default "20 minutos"
   */
  blinds: string;

  /**
   * @title Mesa final
   * @default "30 minutos"
   */
  finalTable: string;

  /**
   * @title Status
   * @description Ex: "Próximo", "Em andamento", "Finalizado"
   * @default "Main Event"
   */
  status: string;

  /**
   * @title Banner do evento
   * @description Imagem de destaque do torneio (largura recomendada 1200x400).
   */
  banner?: ImageWidget;
  /**
   * @title Link do Evento Principal
   * @description Imagem de destaque do torneio (largura recomendada 1200x400).
   */
  linkMainEvent?: ImageWidget;

  /**
   * @title Jogadores classificados
   * @description Lista dos jogadores classificados neste torneio.
   */
  players?: Player[];
}

/**
 * @title Props do componente EventsSection
 */
export interface Props {
  /**
   * @title ID da seção
   * @default "eventos"
   */
  id?: string;

  /**
   * @title Título principal
   * @default "Eventos"
   */
  title?: string;

  /**
   * @title Destaque do título
   * @default "Agendados"
   */
  highlight?: string;

  /**
   * @title Subtítulo
   * @default "Participe dos nossos torneios oficiais e mostre suas habilidades na mesa"
   */
  subtitle?: string;

  /**
   * @title Rótulo do selo
   * @default "Torneio em Destaque"
   */
  badgeText?: string;

  /**
   * @title Evento em destaque
   * @description Evento principal exibido com banner e classificados.
   */
  featuredEvent: Event;

  /**
   * @title Próximos eventos
   * @description Lista de eventos menores que aparecem abaixo do destaque.
   */
  upcomingEvents?: Event[];
}

/**
 * @title EventsSection
 * @description Seção de torneios com destaque e próximos eventos.
 */
export default function EventsSection({
  id = "eventos",
  badgeText = "Torneio em Destaque",
  title = "Eventos",
  highlight = "Agendados",
  subtitle = "Participe dos nossos torneios oficiais e mostre suas habilidades na mesa",
  featuredEvent = {
    title: "Satélite - Torneio Bye Bye 2025",
    date: "2025-11-09",
    time: "14",
    buyIn: "R$ 10",
    chips: "20K Fichas",
    rebuy: "R$ 20 - 30K Fichas",
    addon: "40K Fichas",
    blinds: "20 minutos",
    finalTable: "30 minutos",
    status: "Main Event",
    linkMainEvent:
      "https://pppoker.club/poker/api/share.php?share_type=share_2_mtt&uid=713650&lang=pt&lan=pt&time=1762880247&id=99165285_453868_2_16_0_&club_id=453868&club_name=CSP%20RJ",
    banner:
      "https://assets.decocache.com/blog-athf/44f8f3be-44ba-49a9-8900-06443227f10c/torneio.jpeg",
    players: [
      { position: 1, name: "Rafael", chips: "120K", prize: "Entrada Final - Bye Bye 2025" },
      { position: 2, name: "Piolho ", chips: "85K", prize: "Entrada Final - Bye Bye 2025" },
    ],
  },
  upcomingEvents = [
    {
      title: "Satélite de Verão",
      date: "20/12 - Sexta",
      time: "19h",
      buyIn: "R$ 100",
      chips: "15K Fichas",
      rebuy: "R$ 100 - 20K Fichas",
      addon: "30K Fichas",
      blinds: "15 minutos",
      finalTable: "25 minutos",
      status: "Próximo",
    },
  ],
}: Props) {
  // Combina data e hora em um objeto Date
  const eventDateTime = new Date(
    `${featuredEvent?.date}T${featuredEvent?.time.padStart(2, "0")}:00:00`
  );

  // Data e hora atuais
  const now = new Date();

  // Verifica se o evento já passou
  const hasPassed = eventDateTime < now;
  return (
    <section id={id} class="py-20 bg-secondary/30">
      <div class="container mx-auto px-4">
        {/* Cabeçalho */}
        <div class="text-center mb-12 animate-fade-in">
          <div class="inline-block mb-4 bg-primary/20 text-primary border border-primary/30 rounded-full px-4 py-1 text-sm font-medium">
            {badgeText}
          </div>

          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            {title} <span class="text-primary">{highlight}</span>
          </h2>

          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Evento em destaque */}
        <div class="bg-gradient-card border border-border rounded-xl overflow-hidden mb-16 shadow-lg animate-slide-up grid xl:grid-cols-3">
          {featuredEvent.banner && (
            <img
              src={featuredEvent.banner}
              alt={featuredEvent.title}
              class="w-full aspect-square"
            />
          )}

          <div class="p-6 md:p-8">
            <div class="flex items-center justify-between mb-4">
              <div class="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                {featuredEvent.status}
              </div>
              <div class="text-2xl text-accent">🏆</div>
            </div>
            <h3 class="text-3xl font-semibold mb-2">{featuredEvent.title}</h3>

            <div class="flex flex-wrap gap-4 text-muted-foreground mb-6">
              <div class="flex items-center gap-2">
                <span class="text-primary text-lg">📅</span>
                <span>{featuredEvent.date}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-primary text-lg">⏰</span>
                <span>{featuredEvent.time}</span>
              </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div>
                <p class="text-sm text-muted-foreground">Buy-in</p>
                <p class="font-semibold">{featuredEvent.buyIn}</p>
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Fichas</p>
                <p class="font-semibold">{featuredEvent.chips}</p>
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Rebuy</p>
                <p class="font-semibold">{featuredEvent.rebuy}</p>
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Add-on</p>
                <p class="font-semibold">{featuredEvent.addon}</p>
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Blinds</p>
                <p class="font-semibold">{featuredEvent.blinds}</p>
              </div>
              <div>
                <p class="text-sm text-muted-foreground">Mesa Final</p>
                <p class="font-semibold">{featuredEvent.finalTable}</p>
              </div>
            </div>

            {hasPassed ? (
              <p
                class="inline-block px-6 py-3 rounded-lg text-sm font-semibold
         bg-gray-300/50 text-gray-600 border border-gray-400/30
         cursor-not-allowed select-none
         shadow-inner transition-all duration-300"
              >
                Torneio Finalizado
              </p>
            ) : (
              <a
                href={featuredEvent.linkMainEvent}
                target={
                  featuredEvent.linkMainEvent.includes("http")
                    ? "_blank"
                    : "_self"
                }
                class={`btn btn-primary bg-gradient-primary shadow-glow hover:shadow-accent`}
              >
                Inscrever-se agora!
              </a>
            )}
          </div>

          {/* Classificados */}
          {featuredEvent.players && featuredEvent.players.length > 0 && (
            <div className="p-6 md:p-8">
              <h4 class="text-xl font-semibold mb-3">Classificados</h4>
              <div class="overflow-x-auto">
                <table class="w-full text-sm border-t border-border">
                  <thead>
                    <tr class="text-left text-muted-foreground border-b border-border">
                      <th class="py-2 px-2">Posição</th>
                      <th class="py-2 px-2">Nome</th>
                      <th class="py-2 px-2">Fichas</th>
                      <th class="py-2 px-2">Prêmio🏅</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featuredEvent.players.map((player) => (
                      <tr
                        class={`border-b border-border ${
                          player.prize ? "bg-primary/10" : ""
                        }`}
                      >
                        <td class="py-2 px-2 font-medium">
                          {player.position}º
                        </td>
                        <td class="py-2 px-2">{player.name}</td>
                        <td class="py-2 px-2">{player.chips}</td>
                        <td class="py-2 px-2">
                          {player.prize ? (
                            <span class="text-primary font-semibold">
                              {player.prize}{" "}
                            </span>
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Próximos eventos */}
        <h3 class="text-2xl font-bold mb-6">Próximos Torneios</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              class="bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow rounded-xl overflow-hidden"
            >
              <div class="h-2 bg-gradient-primary" />
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <div class="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {event.status}
                  </div>
                  <div class="text-2xl text-accent">🎯</div>
                </div>

                <h4 class="text-xl font-semibold mb-3">{event.title}</h4>

                <div class="space-y-1 text-muted-foreground text-sm">
                  <div>📅 {event.date}</div>
                  <div>⏰ {event.time}</div>
                  <div>💰 {event.buyIn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
