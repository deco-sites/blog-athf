import type { ImageWidget } from "apps/admin/widgets.ts";

/** 
 * @title Informações de cada torneio
 */
export interface Event {
  /**
   * @title Título do evento
   * @description Nome principal do torneio exibido no card.
   * @default "Torneio Bye Bye 2025"
   */
  title: string;

  /**
   * @title Data
   * @description Data e dia da semana do evento.
   * @default "13/12 - Sábado"
   */
  date: string;

  /**
   * @title Horário
   * @description Horário de início do evento.
   * @default "14h"
   */
  time: string;

  /**
   * @title Valor do Buy-in
   * @description Valor de entrada do torneio.
   * @default "R$ 200"
   */
  buyIn: string;

  /**
   * @title Fichas iniciais
   * @description Quantidade de fichas recebidas no buy-in.
   * @default "20K Fichas"
   */
  chips: string;

  /**
   * @title Rebuy
   * @description Condições e valor do rebuy.
   * @default "R$ 200 - 30K Fichas"
   */
  rebuy: string;

  /**
   * @title Add-on
   * @description Fichas adicionais ao final do período de rebuy.
   * @default "40K Fichas"
   */
  addon: string;

  /**
   * @title Duração dos blinds
   * @description Tempo entre as mudanças de blind.
   * @default "20 minutos"
   */
  blinds: string;

  /**
   * @title Duração da mesa final
   * @description Tempo dos blinds na mesa final.
   * @default "30 minutos"
   */
  finalTable: string;

  /**
   * @title Status
   * @description Indica se o torneio é o próximo, em andamento, etc.
   * @default "Próximo"
   */
  status: string;
}

/** 
 * @title Props do componente EventsSection
 */
export interface Props {
  /**
   * @title ID da seção
   * @description Identificador HTML da seção.
   * @default "eventos"
   */
  id?: string;

  /**
   * @title Título principal
   * @description Texto principal do cabeçalho da seção.
   * @default "Eventos Agendados"
   */
  title?: string;

  /**
   * @title Destaque do título
   * @description Parte do título que aparece colorida.
   * @default "Agendados"
   */
  highlight?: string;

  /**
   * @title Subtítulo
   * @description Texto de apoio exibido abaixo do título.
   * @default "Participe dos nossos torneios oficiais e mostre suas habilidades na mesa"
   */
  subtitle?: string;

  /**
   * @title Rótulo do selo
   * @description Texto do badge exibido acima do título.
   * @default "Próximos Torneios"
   */
  badgeText?: string;

  /**
   * @title Lista de eventos
   * @description Lista de torneios a serem exibidos em cards.
   */
  events?: Event[];
}

/**
 * @title EventsSection
 * @description Seção de eventos e torneios com cards informativos.
 */
export default function EventsSection({
  id = "eventos",
  badgeText = "Próximos Torneios",
  title = "Eventos",
  highlight = "Agendados",
  subtitle = "Participe dos nossos torneios oficiais e mostre suas habilidades na mesa",
  events = [
    {
      title: "Torneio Bye Bye 2025",
      date: "13/12 - Sábado",
      time: "14h",
      buyIn: "R$ 200",
      chips: "20K Fichas",
      rebuy: "R$ 200 - 30K Fichas",
      addon: "40K Fichas",
      blinds: "20 minutos",
      finalTable: "30 minutos",
      status: "Próximo",
    },
  ],
}: Props) {
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

        {/* Lista de eventos */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              class="bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up overflow-hidden group rounded-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div class="h-2 bg-gradient-primary" />

              <div class="p-6">
                <div class="flex items-start justify-between mb-3">
                  <div class="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {event.status}
                  </div>
                  <div class="text-2xl text-accent">🏆</div>
                </div>

                <h3 class="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                <div class="space-y-2 text-muted-foreground">
                  <div class="flex items-center gap-2">
                    <span class="text-primary text-lg">📅</span>
                    <span>{event.date}</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <span class="text-primary text-lg">⏰</span>
                    <span>{event.time}</span>
                  </div>
                </div>

                <div class="border-t border-border mt-4 pt-4 space-y-2">
                  <div class="flex justify-between">
                    <span class="text-sm text-muted-foreground">Buy-in:</span>
                    <span class="font-semibold text-accent">
                      {event.buyIn} - {event.chips}
                    </span>
                  </div>

                  <div class="flex justify-between">
                    <span class="text-sm text-muted-foreground">Rebuy:</span>
                    <span class="font-semibold">{event.rebuy}</span>
                  </div>

                  <div class="flex justify-between">
                    <span class="text-sm text-muted-foreground">Add-on:</span>
                    <span class="font-semibold">{event.addon}</span>
                  </div>

                  <div class="flex justify-between">
                    <span class="text-sm text-muted-foreground">Blinds:</span>
                    <span class="font-semibold">{event.blinds}</span>
                  </div>

                  <div class="flex justify-between">
                    <span class="text-sm text-muted-foreground">Mesa Final:</span>
                    <span class="font-semibold">{event.finalTable}</span>
                  </div>
                </div>

                <a
                  href="#"
                  class="block w-full text-center mt-6 bg-gradient-primary text-white font-medium rounded-lg py-3 shadow-glow hover:shadow-accent transition-all duration-300"
                >
                  Inscrever-se
                </a>
              </div>
            </div>
          ))}

          {/* Cards de placeholder */}
          <div class="bg-gradient-card border border-dashed border-border hover:border-primary/30 transition-all duration-300 flex items-center justify-center min-h-[400px] rounded-xl">
            <div class="text-center p-6">
              <div class="text-muted-foreground text-5xl mb-4">📅</div>
              <h3 class="text-xl font-semibold mb-2">Em Breve</h3>
              <p class="text-muted-foreground">
                Novos eventos serão anunciados
              </p>
            </div>
          </div>

          <div class="bg-gradient-card border border-dashed border-border hover:border-primary/30 transition-all duration-300 flex items-center justify-center min-h-[400px] rounded-xl">
            <div class="text-center p-6">
              <div class="text-muted-foreground text-5xl mb-4">🏆</div>
              <h3 class="text-xl font-semibold mb-2">Torneios Especiais</h3>
              <p class="text-muted-foreground">
                Fique atento às novidades
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
