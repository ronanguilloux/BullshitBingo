export class BingoStore {
    constructor(){
        this.bingoList = [];
        this.theme = this.defaultTheme = 'Entrepreneuriat, Startup';
        this.language = this.defaultLanguage = 'fr';
        this.dictionaries = {
            'fr': {
                'Entrepreneuriat, Startup': [
                    'Levée de fonds',
                    'Enorme',
                    'Très',
                    'Complètement',
                    'Tour de table',
                    'Elevator pitch',
                    'Apple',
                    'Steve Jobs',
                    'Mark Zuckerberg',
                    'Agile',
                    'Incubateur',
                    'Gagnant-gagnant',
                    'Big Data',
                    'Burn rate',
                    'Acquisition',
                    'Twitter',
                    'Engagement',
                    'Licorne',
                    'Apple Watch',
                    'Pitch',
                    'Sass',
                    'Participatif',
                    'Bootstrapper',
                    'Echouer',
                    'Lean',
                    'The Family',
                    'Closing',
                    'Criteo',
                    'GAFA'
                ],
                'Expertise métier': [
                    'Stratégique',
                    'Immersif',
                    'Itération',
                    'Convergence',
                    'Facilitateur',
                    'Gamification',
                    'Agile',
                    'Big Data',
                    'Solution Automatisée'
                ],
                'Innovation Responsable': [
                    'Soutenable'
                ],
                'Internet des Objets': [],
                'Ressources Humaines': [
                    'Agile'
                ],
                'Technique': [
                    'Évangeliste',
                    'Très complexe',
                    'Docker!, Docker!, Docker!',
                    'Containeur',
                    'Virtulisation',
                    'Cross-platform',
                    'Modulaire',
                    'Dette technique',
                    'Scalable',
                    'Faiblement couplé',
                    'Micro-services',
                    'En continue',
                    'Déploiement',
                    '(une slide avec un GIF Meme)',
                    '(une slide avec un GIF animé)',
                    'Flexible',
                    'Continuel(le)',
                    'Intégration',
                    'Performance',
                    'Haute-disponibilité',
                    'Big Data'
                ]
            },
            'en': {
                'Entrepreneurship, Startup': [
                    'Fail Fast',
                    'Solving',
                    'Bootstrap',
                    'VC',
                    'fundraising',
                    'Apple',
                    'Steve Jobs',
                    'Agile',
                    'Think Outside the Box',
                    'Pivot',
                    'Business Angel',
                    'Self-incubator',
                    'Win-win',
                    'Big Data',
                    'ROI',
                    'Burn rate',
                    'Road map',
                    'Growth Hacking',
                    'Expectations',
                    'Acquisition',
                    'Twitter',
                    'Viral',
                    'Followers',
                    'Iphone app',
                    'Engagement',
                    'Licorn',
                    'Pitch',
                    'Crowdfunding',
                    'Lean',
                    'GAFA'
                ],
                'Responsible innovation': [
                    'Sustanable'
                ],
                'Business Expertise': [
                    'Stratégique',
                    'Usage',
                    'Big Data',
                    'Iterative',
                    'Gamification'
                ],
                'Tech': [
                    'Evangelist',
                    'Metrics',
                    'Very Complex',
                    'Docker!, Docker!, Docker!',
                    'Cross-platform',
                    'Container',
                    'Virtualization',
                    'Modular',
                    'Technical Debt',
                    'Big-O notation',
                    'Scalable',
                    'Loosely coupled',
                    'Micro-services',
                    'Continuous',
                    'Integration',
                    'Performance',
                    'Deploy',
                    'Pattern',
                    'Non-trivial',
                    'PHP',
                    'Scala',
                    'Haskell',
                    'NodeJs',
                    'Should Work',
                    'Framework',
                    'Bullshit',
                    'Delivery',
                    'Middleware',
                    'Flexible',
                    'Backward Compatible',
                    'Metadata',
                    'Big Data',
                    'User Friendly',
                    'UX/UI',
                    '(a slide with a GIF Meme)',
                    '(a slide with animated GIF)'
                ]
            }

        };

        this.dictionary = this.dictionaries[this.language][this.theme];
        for(var i=0; i<this.dictionary.length; i++){
            this.bingoList.push({
                text: this.dictionary[i],
                found: false
            });
        }
    }

    add(item){
        this.bingoList.unshift({text:item,found:false});
    }
}