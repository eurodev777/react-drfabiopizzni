export interface CredentialItem {
  id: string;
  title: string;
  institution: string;
  badge?: string;
}

export interface ClinicService {
  title: string;
  description: string;
  iconName: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    points: number;
  }[];
}

export interface QuizResult {
  title: string;
  description: string;
  recommendation: string;
}
