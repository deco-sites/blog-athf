import type { ImageWidget } from "apps/admin/widgets.ts";

/**
 * @title Opção de Ficha
 * @description Valor de ficha disponível para compra.
 */
export interface ChipOption {
  /**
   * @title Rótulo
   * @description Valor exibido no botão.
   * @default "R$ 10"
   */
  label: string;

  /**
   * @title Mensagem personalizada
   * @description Texto que será enviado no WhatsApp ao clicar nesta opção.
   * @default "Olá! Gostaria de comprar R$10 em fichas."
   */
  message: string;
}

/**
 * @title Props do componente WhatsAppButton
 */
export interface Props {
  /**
   * @title Número do WhatsApp
   * @description Número para onde as mensagens serão enviadas (somente dígitos, com DDI, ex: 5511999999999)
   * @default "5511999999999"
   */
  phone: string;

  /**
   * @title Ícone do botão
   * @description Imagem do botão flutuante (ícone do WhatsApp, por exemplo)
   */
  icon: ImageWidget;

  /**
   * @title Opções de fichas
   * @description Lista de valores disponíveis para compra.
   */
  options?: ChipOption[];

  /**
   * @title Mensagem de ajuda
   * @description Mensagem enviada ao clicar em "Ajuda".
   * @default "Olá! Preciso de ajuda com o torneio."
   */
  helpMessage?: string;

  /**
   * @title Posição do botão
   * @enum ["right", "left"]
   * @default "right"
   */
  position?: "right" | "left";
}
 
/**
 * @title WhatsAppButton
 * @description Botão flutuante do WhatsApp com opções de compra de fichas e suporte.
 */
export default function WhatsAppButton({
  phone = "5511999999999",
  icon = "https://assets.decocache.com/blog-athf/ac86e606-7938-4df6-9bd6-d54d44b233a1/Screenshot_17.png",
  options = [
    { label: "R$ 10", message: "Olá! Gostaria de comprar R$10 em fichas." },
    { label: "R$ 25", message: "Olá! Gostaria de comprar R$25 em fichas." },
    { label: "R$ 50", message: "Olá! Gostaria de comprar R$50 em fichas." },
  ],
  helpMessage = "Olá! Preciso de ajuda com o torneio.",
  position = "right",
}: Props) {

  return (
    <div
      id="wpp"
      class={`fixed bottom-6 ${
        position === "right" ? "right-6" : "left-6"
      } z-50 group`}
    >
      {/* Área expansível */}
      <div class="flex flex-col items-end mb-3 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
        {/* Lista de opções de compra */}
        {options.map((option) => (
          <a
            target="_blank"
            href={`https://wa.me/${phone}?text=${encodeURIComponent(option.message)}`}
            class="mb-2 bg-white text-primary font-semibold rounded-full shadow-md hover:bg-primary hover:text-white transition-all duration-200 text-sm px-4 py-2 whitespace-nowrap"
          >
            {option.label}
          </a>
        ))}

        {/* Botão de ajuda */}
        <button
          onClick={() => handleClick(helpMessage)}
          class="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full shadow-md transition-all duration-200 text-sm px-4 py-2 whitespace-nowrap"
        >
          Ajuda
        </button>
      </div> 

      {/* Botão principal (círculo flutuante) */}  
      <a 
      target="_blank"
      href={`https://wa.me/${phone}`}
        class="z-20 w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 border border-green-500 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 relative overflow-hidden"
        aria-label="Abrir WhatsApp" 
      >
        <img src={icon} alt="WhatsApp" class="w-full h-full absolute z-20 top-0 left-0" />
      </a>
        <div id="wpp-msg" className="absolute overflow-hidden z-10">
          <p className="text-green-500 font-bold">Precisa de ajuda ?</p>
          <p className="text-black text-xs">Compre fichas comigo !</p>
        </div>
    </div>
  );
}
