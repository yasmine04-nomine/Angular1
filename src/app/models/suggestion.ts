export interface Suggestion {
  id: number;
  title: string;
  description: string;
  category: string;
  date: Date;
  status: 'Acceptée' | 'Refusée' | 'En attente';
  author: string;
}