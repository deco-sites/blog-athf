import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title Feature
 * @description Bloco de destaque sobre benefícios ou valores da associação.
 */
export interface Feature {
  /**
   * @title Ícone
   * @description Nome do ícone representativo (ex: "target", "users", "award").
   * @default "target"
   */
  icon: "target" | "users" | "award";

  /**
   * @title Título
   * @description Título do recurso destacado.
   * @default "Estratégia"
   */
  title: string;

  /**
   * @title Descrição
   * @description Texto explicativo sobre o recurso.
   * @default "Aprenda técnicas avançadas e desenvolva seu estilo único de jogo."
   */
  description: string;
}

/**
 * @title Contato WhatsApp
 * @description Estrutura de informações para exibir um contato.
 */
export interface WhatsAppContact {
  /**
   * @title Nome
   * @description Nome da pessoa de contato.
   * @default "Nina"
   */
  name: string;

  /**
   * @title Número do WhatsApp
   * @description Número completo com DDI, usado para gerar o link do WhatsApp.
   * @default "5522988096612"
   * @format phone
   */
  number: string;

  /**
   * @title Rótulo
   * @description Texto auxiliar, como "WhatsApp 1 - Nina (Novo!)"
   * @default "WhatsApp 1 - Nina (Novo!)"
   */
  label: string;
}

/**
 * @title Props
 * @description Propriedades do componente AboutSection.
 */
export interface Props {
  /**
   * @title ID da seção
   * @description Identificador HTML da seção principal.
   * @default "sobre"
   */
  id?: string;

  /**
   * @title Título principal
   * @description Título de destaque da seção.
   * @default "Sobre a ATHF"
   */
  title?: string;

  /**
   * @title Destaque do título
   * @description Palavra em destaque no título.
   * @default "ATHF"
   */
  highlight?: string;

  /**
   * @title Parágrafo introdutório
   * @description Texto explicando o propósito da associação.
   * @default "A Associação Texas Holdem Friburgo é uma comunidade apaixonada por poker desde 2011."
   */
  intro?: string;

  /**
   * @title Parágrafo complementar
   * @description Texto sobre o objetivo e os valores do grupo.
   * @default "Nosso objetivo é promover o poker como um esporte da mente, baseado em estratégia, habilidade e disciplina."
   */
  objective?: string;

  /**
   * @title Lista de benefícios
   * @description Itens de destaque exibidos em formato de lista com ícones.
   */
  benefits?: string[];

  /**
   * @title Blocos de recursos
   * @description Lista de features principais da associação.
   */
  features?: Feature[];

  /**
   * @title Contatos de WhatsApp
   * @description Lista de contatos disponíveis para comunicação.
   */
  whatsappLinks?: WhatsAppContact[];
}

/**
 * @title AboutSection
 * @description Seção "Sobre" da Associação Texas Holdem Friburgo.
 */
export default function AboutSection({
  id = "sobre",
  title = "Sobre a",
  highlight = "ATHF",
  intro = "A Associação Texas Holdem Friburgo é uma comunidade apaixonada por poker desde 2011. Oferecemos um ambiente profissional e acolhedor para jogadores de todos os níveis.",
  objective = "Nosso objetivo é promover o poker como um esporte da mente, baseado em estratégia, habilidade e disciplina. Organizamos torneios presenciais e oferecemos acesso a clubes online 24/7.",
  benefits = [
    "Treinamentos e material de estudo gratuito",
    "Comunidade ativa no WhatsApp",
    "Acesso a clubes online (PPPoker e KKPoker)",
    "Série educativa no YouTube",
  ],
  features = [
    {
      icon: "target",
      title: "Estratégia",
      description:
        "Aprenda técnicas avançadas e desenvolva seu estilo único de jogo.",
    },
    {
      icon: "users",
      title: "Comunidade",
      description:
        "Mais de 4.900 membros compartilhando experiências e conhecimento.",
    },
    {
      icon: "award",
      title: "Torneios",
      description:
        "Eventos regulares com premiações atrativas e competição de alto nível.",
    },
  ],
  whatsappLinks = [
    { name: "Nina", number: "5522988096612", label: "WHATSAPP 1 - Nina (Novo!)" },
    { name: "Jony", number: "5522981111232", label: "WHATSAPP 2 - Jony" },
    { name: "Paschoal", number: "5522988146460", label: "WHATSAPP 3 - Paschoal" },
    { name: "Rick", number: "5522992675747", label: "WHATSAPP 4 - Rick" },
  ],
}: Props) {
  return (
    <section id={id} class="py-20 bg-background">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Texto principal */}
          <div class="animate-fade-in">
            <h2 class="text-4xl md:text-5xl font-bold mb-6">
              {title} <span class="text-primary">{highlight}</span>
            </h2>

            <p class="text-lg text-muted-foreground mb-6">{intro}</p>

            <p class="text-lg text-muted-foreground mb-8">{objective}</p>

            {/* Lista de benefícios */}
            <div class="space-y-3">
              {benefits.map((item) => (
                <div class="flex items-center gap-3">
                  <span class="text-accent text-xl">✔️</span>
                  <span class="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div class="grid grid-cols-1 gap-6 animate-slide-up">
            {features.map((feature) => (
              <div class="bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 p-6 group hover:shadow-glow rounded-xl">
                <div class="flex items-start gap-4">
                  <div class="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <span class="text-primary text-2xl">
                      {feature.icon === "target" && "🎯"}
                      {feature.icon === "users" && "👥"}
                      {feature.icon === "award" && "🏆"}
                    </span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p class="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contatos WhatsApp */}
        <div class="bg-secondary/50 rounded-2xl p-8 border border-border">
          <h3 class="text-2xl font-bold mb-6 text-center">
            Entre em <span class="text-primary">Contato</span>
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatsappLinks.map((contact) => (
              <a
                href={`https://wa.me/${contact.number}`}
                target="_blank"
                rel="noopener noreferrer"
                class="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-glow transition-all duration-300 flex flex-col items-center gap-4 group"
              >
                <div class="h-20 w-20 border-2 border-primary/20 group-hover:border-primary/50 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <span class="text-primary text-3xl">👤</span>
                </div>

                <div class="text-center">
                  <div class="font-semibold text-lg group-hover:text-primary transition-colors">
                    {contact.name}
                  </div>

                  {contact.label.includes("Novo") && (
                    <div class="text-xs text-accent mt-1">★ Novo!</div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
