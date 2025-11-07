/**
 * @title BlogSection
 * @description Seção de dicas e estratégias para o jogador de poker.
 */

export interface BlogPost {
  /**
   * @title Título
   * @description Título do post ou dica.
   * @default "Conheça as Regras"
   */
  title: string;

  /**
   * @title Descrição
   * @description Texto principal explicativo.
   * @default "Antes de sentar à mesa, demonstre entender completamente as regras do jogo."
   */
  description: string;

  /**
   * @title Dica Extra
   * @description Texto destacado com uma dica prática.
   * @default "Cada variante de poker tem seus especialistas, e dominar as regras é o primeiro passo para o sucesso."
   */
  tip: string;

  /**
   * @title Ícone
   * @description Emoji representativo do conteúdo.
   * @default "📘"
   */
  icon: string;

  /**
   * @title Cor do Ícone
   * @description Classe Tailwind aplicada ao ícone.
   * @default "text-accent"
   */
  color: string;
}

export interface Props {
  /**
   * @title ID da seção
   * @default "blog"
   */
  id?: string;

  /**
   * @title Título principal
   * @default "Como se Tornar um Campeão"
   */
  title?: string;

  /**
   * @title Subtítulo
   * @default "Dicas & Estratégias"
   */
  subtitle?: string;

  /**
   * @title Descrição
   * @default "Dicas essenciais para evoluir seu jogo e dominar as mesas de poker."
   */
  description?: string;

  /**
   * @title Lista de posts
   */
  blogPosts?: BlogPost[];

  /**
   * @title CTA Título
   * @default "Quer Aprender Mais?"
   */
  ctaTitle?: string;

  /**
   * @title CTA Descrição
   * @default "Acesse nosso material de estudo completo e gratuito no blog."
   */
  ctaDescription?: string;

  /**
   * @title Link do Blog
   * @default "http://ricksardella.substack.com"
   */
  ctaUrl?: string;
}

export default function BlogSection({
  id = "blog",
  subtitle = "Dicas & Estratégias",
  title = "Como se Tornar um Campeão",
  description = "Dicas essenciais para evoluir seu jogo e dominar as mesas de poker.",
  blogPosts = [
    {
      title: "Conheça as Regras",
      description:
        "Antes de sentar à mesa, demonstre entender completamente as regras do jogo.",
      tip: "Cada variante de poker tem seus especialistas, e dominar as regras é o primeiro passo para o sucesso.",
      icon: "📘",
      color: "text-accent",
    },
    {
      title: "Estude Estratégias",
      description:
        "Existem inúmeras estratégias de poker que podem ajudá-lo a melhorar seu jogo.",
      tip: "Quanto mais você aprender, mais preparado estará para tomar decisões informadas durante os jogos.",
      icon: "🧠",
      color: "text-primary",
    },
    {
      title: "Pratique Regularmente",
      description:
        "A prática leva à perfeição! Jogue com frequência no KKPoker.",
      tip: "É útil aplicar o que você aprendeu e desenvolver seu estilo de jogo. A experiência prática é inestimável.",
      icon: "📈",
      color: "text-accent",
    },
    {
      title: "Analise Suas Jogadas",
      description:
        "Após as partidas, reserve um tempo para refletir sobre suas decisões.",
      tip: "O que deu certo? O que poderia ter sido diferente? A autoavaliação é uma ferramenta poderosa para o aprimoramento contínuo.",
      icon: "👥",
      color: "text-primary",
    },
  ],
  ctaTitle = "Quer Aprender Mais?",
  ctaDescription = "Acesse nosso material de estudo completo e gratuito no blog.",
  ctaUrl = "http://ricksardella.substack.com",
}: Props) {
  return (
    <section id={id} class="py-20 bg-secondary/30">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12 animate-fade-in">
          <div class="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium">
            {subtitle}
          </div>
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span class="text-primary">{title.split(" ").slice(-1)}</span>
          </h2>
          <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Blog cards */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <div
              class="bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-slide-up rounded-xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div class="p-6">
                <div class="flex items-start gap-4 mb-4">
                  <div class="bg-secondary p-3 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <span class={`${post.color} text-3xl`}>{post.icon}</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="text-xs uppercase tracking-wide border border-border rounded px-2 py-0.5 text-muted-foreground">
                        Dica {index + 1}
                      </span>
                    </div>
                    <h3 class="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <p class="text-muted-foreground leading-relaxed mb-4">
                  {post.description}
                </p>

                <div class="bg-primary/5 border-l-4 border-primary p-4 rounded">
                  <p class="text-sm text-foreground italic">💡 {post.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div class="text-center bg-gradient-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold mb-4">
            {ctaTitle.split(" ").slice(0, -1).join(" ")}{" "}
            <span class="text-primary">{ctaTitle.split(" ").slice(-1)}</span>
          </h3>
          <p class="text-muted-foreground mb-6">{ctaDescription}</p>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-glow hover:shadow-accent transition-all duration-300"
          >
            Visitar Blog Completo
          </a>
        </div>
      </div>
    </section>
  );
}
