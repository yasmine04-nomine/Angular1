import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-suggestions',
  templateUrl: './list-suggestions.component.html',
  styleUrls: ['./list-suggestions.component.css']
})
export class ListSuggestionsComponent implements OnInit {

  suggestions = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Renforcer les liens entre les membres de l\'équipe',
      category: 'Événements',
      date: new Date('2025-01-20')
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Système de confirmation automatique',
      category: 'Technologie',
      date: new Date('2025-01-15')
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Motiver les employés',
      category: 'RH',
      date: new Date('2025-01-25')
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}