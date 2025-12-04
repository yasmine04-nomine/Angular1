import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.css']
})
export class SuggestionDetailsComponent implements OnInit {
  
  suggestionId: number = 0;
  suggestion: Suggestion | undefined;

  // Données mockées (en réalité, ça viendrait d'un service)
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe. Cette activité permettrait d\'améliorer la communication et la collaboration au sein de l\'équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'Acceptée',
      author: 'Alice Martin'
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique. Cela réduirait les erreurs et améliorerait l\'expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'Refusée',
      author: 'Bob Dupont'
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts. Inclut des bonus, des jours de congés supplémentaires et des reconnaissances publiques.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'Refusée',
      author: 'Charlie Durand'
    },
    {
      id: 4,
      title: 'Moderniser l\'interface utilisateur',
      description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur. Utilisation de frameworks modernes et amélioration de l\'accessibilité.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'En attente',
      author: 'Diana Leroy'
    },
    {
      id: 5,
      title: 'Formation à la sécurité informatique',
      description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés. Sensibilisation aux risques de phishing, gestion des mots de passe et protection des données.',
      category: 'Formation',
      date: new Date('2025-02-05'),
      status: 'Acceptée',
      author: 'Éric Bernard'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Récupérer l'id depuis l'URL et s'abonner aux changements
    this.route.paramMap.subscribe(params => {
      this.suggestionId = Number(params.get('id'));
      console.log('ID récupéré depuis l\'URL:', this.suggestionId);
      this.loadSuggestionDetails();
    });
  }

  loadSuggestionDetails(): void {
    // Trouver la suggestion correspondante
    this.suggestion = this.suggestions.find(s => s.id === this.suggestionId);
    
    // Si la suggestion n'existe pas, on pourrait rediriger vers 404
    if (!this.suggestion) {
      console.error('Suggestion non trouvée avec l\'ID:', this.suggestionId);
      // Optionnel : rediriger vers 404
      // this.router.navigate(['/404']);
    }
  }

  goBackToList(): void {
    // Retour à la liste des suggestions
    this.router.navigate(['/suggestions']);
  }

}