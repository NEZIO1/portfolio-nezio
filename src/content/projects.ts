import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "finansmart",
    name: "FinanSmart",
    description:
      "Aplicativo financeiro para gerenciamento de finanças pessoais.",
    technologies: ["Figma", "UX/UI", "Prototipação"],
    features: [
      "Login",
      "Cadastro",
      "Dashboard",
      "Extrato",
      "Relatórios",
      "Investimentos",
    ],
  },
  {
    slug: "fintech",
    name: "Fintech",
    description:
      "Sistema financeiro acadêmico desenvolvido com Java e Oracle Database.",
    technologies: ["Java", "Oracle", "SQL", "DAO Pattern"],
  },
  {
    slug: "agua-marinha",
    name: "Água Marinha",
    description:
      "Projeto Global Solution focado em conscientização ambiental e preservação dos oceanos.",
    technologies: ["Figma", "UX/UI", "Design Thinking"],
  },
  {
    slug: "healthapp",
    name: "HealthApp",
    description: "Aplicativo Android focado em monitoramento e bem-estar.",
    technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "Room Database"],
  },
  {
    slug: "dashboard-powerbi",
    name: "Dashboard Power BI",
    description:
      "Projeto de Business Intelligence para análise de dados e tomada de decisão.",
    technologies: ["Power BI", "DAX", "Power Query"],
  },
  {
    slug: "esg",
    name: "ESG",
    description: "Projeto voltado para gestão de resíduos e reciclagem.",
    technologies: ["Oracle", "SQL", "PL/SQL"],
  },
];
