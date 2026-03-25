export type Locale = "pt" | "en";

type Link = {
  label: string;
  href: string;
};

type Stat = {
  value: string;
  label: string;
};

type Service = {
  number: string;
  title: string;
  body: string;
};

type Quote = {
  type: string;
  title: string;
  body: string;
  price: string;
  featured?: boolean;
};

type Step = {
  number: string;
  title: string;
  body: string;
};

type Contact = {
  phone: string;
  email: string;
  address: string;
  hours: string;
};

export type SiteContent = {
  lang: string;
  title: string;
  description: string;
  brandTagline: string;
  nav: Link[];
  languageLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    stats: Stat[];
  };
  heroCard: {
    tag: string;
    title: string;
    points: string[];
    badgeLabel: string;
    badgeTitle: string;
  };
  intro: {
    tag: string;
    title: string;
    body: string;
    cards: Array<{ title: string; body: string }>;
  };
  services: {
    tag: string;
    title: string;
    items: Service[];
  };
  quotes: {
    tag: string;
    title: string;
    items: Quote[];
  };
  process: {
    tag: string;
    title: string;
    items: Step[];
  };
  contactSection: {
    tag: string;
    title: string;
    body: string;
    details: Contact;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  pt: {
    lang: "pt-PT",
    title: "RideIt Workshop | Reparacoes e Orcamentos MTB",
    description:
      "A RideIt Workshop faz reparacoes de bicicletas de montanha com diagnostico, orcamentos transparentes, servico de suspensao, travoes e oficina especializada.",
    brandTagline: "Reparacoes MTB e Orcamentos",
    nav: [
      { label: "Servicos", href: "#services" },
      { label: "Orcamentos", href: "#quotes" },
      { label: "Processo", href: "#process" },
      { label: "Contacto", href: "#contact" },
    ],
    languageLabel: "Idioma",
    hero: {
      eyebrow: "Especialistas em reparacao de bicicletas de montanha",
      title: "Uma oficina pensada para bicicletas que precisam de",
      highlight: "voltar a rolar bem.",
      body:
        "A RideIt e uma oficina de bicicletas de montanha focada em diagnostico, orcamentos transparentes e trabalho mecanico bem executado. Tratamos de suspensoes, travoes, transmissoes, rodas e reparacoes com resposta rapida sempre que possivel.",
      primaryCta: "Marcar Reparacao",
      secondaryCta: "Ver Servicos",
      stats: [
        { value: "24h", label: "Objetivo para envio de orcamento" },
        { value: "Oficina", label: "Sem venda de bicicletas, so reparacoes" },
        { value: "5 Estrelas", label: "Reputacao da oficina" },
      ],
    },
    heroCard: {
      tag: "Foco da Oficina",
      title: "Orcamentos rigorosos, trabalho limpo, sem distracoes de loja.",
      points: [
        "Servico e afinacao de suspensao",
        "Sangramento de travoes e afinacao precisa",
        "Alinhamento de rodas, substituicao de raios e tubeless",
      ],
      badgeLabel: "Aberto de Terca a Sabado",
      badgeTitle: "Oficina com apontamentos em madeira e servico orientado para o trilho",
    },
    intro: {
      tag: "O Que Fazemos Melhor",
      title: "A oficina e o centro do espaco.",
      body:
        "A nossa equipa mecanica esta focada em servico de performance, nao em afinacoes genericas nem em showroom. Cada entrada comeca com inspecao, orcamento claro e plano de reparacao ajustado ao teu tipo de uso.",
      cards: [
        {
          title: "Reparacoes de Precisao",
          body:
            "Manutencao completa para bicicletas de trail, enduro e downhill com ferramentas de oficina de qualidade e escolhas de componentes duraveis.",
        },
        {
          title: "Orcamentos Transparentes",
          body:
            "Avaliamos a bicicleta, identificamos os pontos de falha, explicamos o trabalho e apresentamos o valor de pecas e mao de obra antes de avancar.",
        },
      ],
    },
    services: {
      tag: "Servicos Principais",
      title: "Pacotes de oficina desenhados para problemas reais de utilizacao.",
      items: [
        {
          number: "01",
          title: "Diagnostico e Orcamentos",
          body:
            "Avaliacao completa da bicicleta com preco claro, notas de urgencia e um plano de reparacao coerente com o estado da bike.",
        },
        {
          number: "02",
          title: "Laboratorio de Suspensao",
          body:
            "Servico de forqueta e amortecedor, configuracao de SAG, afinacao de rebound e substituicao de vedantes para utilizacao agressiva.",
        },
        {
          number: "03",
          title: "Travoes e Transmissao",
          body:
            "Alinhamento de rotores, sangramento, afinacao do desviador, alinhamento de dropout e optimizacao de transmissao silenciosa.",
        },
        {
          number: "04",
          title: "Rodas e Pneus",
          body:
            "Conversoes tubeless, instalacao de inserts, alinhamento de rodas, substituicao de raios e aconselhamento para aderencia e durabilidade.",
        },
      ],
    },
    quotes: {
      tag: "Orcamentos de Oficina",
      title: "Alguns pacotes de servico que os clientes mais nos pedem.",
      items: [
        {
          type: "Pacote de Orcamento",
          title: "Revisao de Seguranca e Afinacao",
          body:
            "Inspecao de travoes, afinacao de transmissao, verificacao de aperto, avaliacao de rodas e um orcamento curto para os pontos encontrados.",
          price: "Desde EUR 45",
        },
        {
          type: "Pacote de Orcamento",
          title: "Servico Trail",
          body:
            "Verificacao de suspensao, sangramento de travoes, servico de transmissao, renovacao tubeless e relatorio completo de prontidao para trilho.",
          price: "Desde EUR 140",
          featured: true,
        },
        {
          type: "Pacote de Orcamento",
          title: "Revisao Integral de Oficina",
          body:
            "Avaliacao completa para bicicletas gastas que precisam de rolamentos, transmissao, travoes, rodas e servico de suspensao.",
          price: "Orcamento personalizado",
        },
      ],
    },
    process: {
      tag: "Como Funciona",
      title: "Entrada simples. Orcamento claro. Entrega afinada.",
      items: [
        {
          number: "01",
          title: "Traz a bicicleta",
          body:
            "Inspecionamos a bicicleta contigo, registamos os sintomas e sinalizamos o que pode tornar-se uma falha maior no trilho.",
        },
        {
          number: "02",
          title: "Aprovas o trabalho",
          body:
            "Recebes um orcamento transparente com pecas, mao de obra e prazo antes de a oficina comecar o servico.",
        },
        {
          number: "03",
          title: "Levas a bike pronta",
          body:
            "Na recolha damos notas de setup, sugestoes de pressao e uma entrega final para garantir que a bicicleta sai afinada.",
        },
      ],
    },
    contactSection: {
      tag: "Marcar na Oficina",
      title: "Entrega a tua bicicleta antes da proxima janela de ride.",
      body:
        "Fala connosco para reparacoes e orcamentos. Ajudamos-te a perceber o nivel de servico ideal e agendamos a entrega para inspecao.",
      details: {
        phone: "+351 000 000 000",
        email: "service@rideitworkshop.com",
        address: "Rua da Oficina 18, Lisboa",
        hours: "Terca a Sabado - 09:00-18:30",
      },
    },
  },
  en: {
    lang: "en",
    title: "RideIt Workshop | MTB Repairs & Quotes",
    description:
      "RideIt Workshop handles mountain bike repairs with diagnostics, transparent quotes, suspension service, brake work, and workshop-first mechanical care.",
    brandTagline: "MTB Repairs & Quotes",
    nav: [
      { label: "Services", href: "#services" },
      { label: "Quotes", href: "#quotes" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    languageLabel: "Language",
    hero: {
      eyebrow: "Mountain bike repair specialists",
      title: "A workshop built for bikes that need to",
      highlight: "ride right again.",
      body:
        "RideIt is a mountain bike workshop focused on diagnostics, transparent quotes, and properly executed mechanical work. We handle suspension, brakes, drivetrains, wheels, and fast-turnaround repairs whenever possible.",
      primaryCta: "Book a Repair",
      secondaryCta: "Explore Services",
      stats: [
        { value: "24h", label: "Quote turnaround target" },
        { value: "Workshop", label: "No bike sales, repairs only" },
        { value: "5-Star", label: "Workshop reputation" },
      ],
    },
    heroCard: {
      tag: "Workshop Focus",
      title: "Accurate quotes, clean work, no retail distraction.",
      points: [
        "Suspension service and setup",
        "Brake bleeding and precision tuning",
        "Wheel truing, spoke replacement, and tubeless setup",
      ],
      badgeLabel: "Open Tuesday to Saturday",
      badgeTitle: "Wood-accented workshop, trail-minded service",
    },
    intro: {
      tag: "What We Do Best",
      title: "The workshop is the center of the space.",
      body:
        "Our mechanics focus on performance service, not generic tune-ups or showroom sales. Every job starts with an inspection, a clear quote, and a repair plan built around how and where you ride.",
      cards: [
        {
          title: "Precision Repairs",
          body:
            "Full-service maintenance for trail, enduro, and downhill bikes with premium workshop tools and durable component choices.",
        },
        {
          title: "Transparent Quotes",
          body:
            "We assess the bike, identify failure points, explain the work, and quote parts and labor before the repair begins.",
        },
      ],
    },
    services: {
      tag: "Core Services",
      title: "Workshop packages designed around real riding problems.",
      items: [
        {
          number: "01",
          title: "Diagnostics & Quotes",
          body:
            "Full workshop assessment with clear pricing, urgency notes, and a repair path that matches the bike's condition.",
        },
        {
          number: "02",
          title: "Suspension Lab",
          body:
            "Fork and shock servicing, sag setup, rebound tuning, and seal replacements for aggressive trail riding.",
        },
        {
          number: "03",
          title: "Brake & Drivetrain",
          body:
            "Rotor alignment, bleed service, derailleur tuning, hanger straightening, and quiet drivetrain optimization.",
        },
        {
          number: "04",
          title: "Wheels & Tires",
          body:
            "Tubeless conversions, insert installs, wheel truing, spoke work, and setup advice for grip and durability.",
        },
      ],
    },
    quotes: {
      tag: "Workshop Quotes",
      title: "Common service packages riders ask us to price.",
      items: [
        {
          type: "Quote Package",
          title: "Safety Check & Tuning",
          body:
            "Brake inspection, drivetrain adjustment, bolt check, wheel review, and a short-form repair quote.",
          price: "From EUR 45",
        },
        {
          type: "Quote Package",
          title: "Trail Service",
          body:
            "Suspension check, brake bleed, drivetrain service, tubeless refresh, and a full ride-readiness workshop report.",
          price: "From EUR 140",
          featured: true,
        },
        {
          type: "Quote Package",
          title: "Workshop Overhaul",
          body:
            "Full teardown assessment for worn bikes needing bearings, drivetrain parts, brake work, wheel repairs, and suspension service.",
          price: "Custom quote",
        },
      ],
    },
    process: {
      tag: "How It Works",
      title: "Simple intake. Clear quote. Clean turnaround.",
      items: [
        {
          number: "01",
          title: "Bring the bike in",
          body:
            "We inspect the bike with you, note the symptoms, and flag anything that could become a bigger failure on trail.",
        },
        {
          number: "02",
          title: "Approve the work",
          body:
            "You get a transparent quote with parts, labor, and timing before the workshop starts the repair.",
        },
        {
          number: "03",
          title: "Pick it up ready",
          body:
            "Collection includes setup notes, pressure suggestions, and a final handover so the bike feels sorted immediately.",
        },
      ],
    },
    contactSection: {
      tag: "Book the Workshop",
      title: "Drop off your bike before the next ride window.",
      body:
        "Contact us for repairs and quotes. We will help you choose the right workshop package and schedule the inspection drop-off.",
      details: {
        phone: "+351 000 000 000",
        email: "service@rideitworkshop.com",
        address: "Rua da Oficina 18, Lisbon",
        hours: "Tuesday to Saturday - 09:00-18:30",
      },
    },
  },
};
