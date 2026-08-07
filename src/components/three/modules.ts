export interface ModuleDef {
  id: string;
  label: string;
  color: string;
  radius: number;
  speed: number;
  phase: number;
  y: number;
  size: number;
  /** Page anchor the module navigates to when clicked. */
  anchor: string;
}

export const MODULES: readonly ModuleDef[] = [
  { id: "api", label: "APIs", color: "#4d7cfe", radius: 3.1, speed: 0.22, phase: 0, y: 0.3, size: 0.34, anchor: "servicos" },
  { id: "web", label: "Aplicações Web", color: "#35d8ff", radius: 3.6, speed: 0.17, phase: 1.05, y: -0.5, size: 0.3, anchor: "servicos" },
  { id: "data", label: "Dados", color: "#8c67ff", radius: 3.3, speed: 0.2, phase: 2.1, y: 0.9, size: 0.32, anchor: "tecnologias" },
  { id: "cloud", label: "Cloud", color: "#35d8ff", radius: 3.9, speed: 0.14, phase: 3.14, y: 0.1, size: 0.3, anchor: "tecnologias" },
  { id: "auth", label: "Segurança", color: "#38d996", radius: 3.4, speed: 0.19, phase: 4.2, y: -0.9, size: 0.28, anchor: "servicos" },
  { id: "obs", label: "Observabilidade", color: "#8c67ff", radius: 3.7, speed: 0.16, phase: 5.24, y: 0.6, size: 0.28, anchor: "servicos" },
];
