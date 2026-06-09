import { CredentialItem, ClinicService, QuizQuestion } from "./types";

export const DR_INFO = {
  name: "Dr. Fábio Pizzini",
  title: "Médico do Esporte & Nutrólogo",
  rqe: "RQE 130.636",
  crm: "CRM-SP (Sob Consulta)",
  whatsappNumber: "5515999999999", // Can be customized by the patient
  whatsappDefaultMsg: "Olá, Dr. Fábio! Vi o seu site e gostaria de agendar uma consulta para avaliação.",
  address: "Av. Pres. Kennedy, Campolim, Sorocaba - SP, CEP 18048-110",
  phone: "(15) 99123-4567",
  email: "contato@drfabiopizzini.com.br",
  socials: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
    spotify: "https://spotify.com"
  }
};

export const CREDENTIALS: CredentialItem[] = [
  {
    id: "med",
    title: "Formado em Medicina",
    institution: "Pontifícia Universidade Católica de São Paulo – PUC/SP",
    badge: "Graduação"
  },
  {
    id: "esporte",
    title: "Médico do Esporte",
    institution: "Sociedade Brasileira de Medicina do Exercício e do Esporte - RQE 130.636",
    badge: "RQE 130.636"
  },
  {
    id: "nutrologia",
    title: "Pós-Graduação em Nutrologia",
    institution: "Associação Brasileira de Nutrologia – ABRAN",
    badge: "Pós-Graduação"
  },
  {
    id: "esportiva",
    title: "Pós-Graduação em Nutrologia Esportiva",
    institution: "Associação Brasileira de Nutrologia – ABRAN",
    badge: "Especialização"
  },
  {
    id: "exercicio",
    title: "Curso de Capacitação em Nutrologia do Exercício",
    institution: "Associação Brasileira de Nutrologia – ABRAN",
    badge: "Capacitação"
  },
  {
    id: "ifbb",
    title: "Advanced Nutrition Specialist",
    institution: "International Federation of Body Building and Fitness – IFBB",
    badge: "Certificação Internacional"
  }
];

export const CLINIC_SERVICES: ClinicService[] = [
  {
    title: "Emagrecimento Definitivo",
    description: "Abordagem médica científica focada em reestabelecer o metabolismo saudável, controle de apetite e estratégias personalizadas de perda de gordura sustentável.",
    iconName: "Flame"
  },
  {
    title: "Nutrologia Esportiva",
    description: "Planejamento alimentar e metabólico direcionado à otimização da performance atlética, hipertrofia muscular e aceleração da recuperação pós-treino.",
    iconName: "Activity"
  },
  {
    title: "Medicina do Exercício",
    description: "Avaliação do condicionamento físico atual e prescrição médica detalhada de rotinas que combinam saúde cardiovascular e fortalecimento esquelético.",
    iconName: "Dumbbell"
  },
  {
    title: "Longevidade e Vitalidade",
    description: "Modulação hormonal fisiológica, exames preventivos profundos e correção de carências vitamínicas para máxima energia diária.",
    iconName: "HeartPulse"
  }
];

export const ASSESSMENT_QUIZ: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é o seu principal objetivo de saúde atual?",
    options: [
      { text: "Emagrecimento saudável e perda de gordura sustentada", value: "emagrecimento", points: 10 },
      { text: "Ganho de massa muscular, definição e força", value: "hipertrofia", points: 20 },
      { text: "Melhorar a disposição física, performance e fôlego nos treinos", value: "performance", points: 30 },
      { text: "Cuidar da saúde metabólica, equilíbrio hormonal e longevidade", value: "longevidade", points: 40 }
    ]
  },
  {
    id: 2,
    question: "Como você classifica o seu nível de atividade física hoje?",
    options: [
      { text: "Sedentário (não pratico exercícios regularmente)", value: "sedentario", points: 5 },
      { text: "Moderado (treino de 2 a 3 vezes por semana)", value: "moderado", points: 15 },
      { text: "Ativo (treino de 4 a 5 vezes por semana de forma intensa)", value: "ativo", points: 25 },
      { text: "Atleta (compito ou tenho metas de rendimento profissional)", value: "atleta", points: 35 }
    ]
  },
  {
    id: 3,
    question: "Como está seu nível de energia e disposição durante o dia?",
    options: [
      { text: "Sinto cansaço extremo ou sono logo pela manhã / pós-almoço", value: "baixo", points: 5 },
      { text: "Mediano (oscila ao longo do dia, dependo de estimulantes como café)", value: "medio", points: 15 },
      { text: "Excelente (tenho energia constante do amanhecer ao anoitecer)", value: "alto", points: 25 }
    ]
  },
  {
    id: 4,
    question: "Como tem sido a sua rotina com alimentação e noites de sono?",
    options: [
      { text: "Alimentação desregulada e sono de baixa qualidade ou curto dms", value: "ruim", points: 5 },
      { text: "Tento me alimentar bem, mas peco na consistência; sono regular", value: "regular", points: 15 },
      { text: "Alimentação calculada e sono reparador todas as noites", value: "excelente", points: 25 }
    ]
  }
];
