/* Dyna Enquêtes — les enquêtes.
 * Une enquête = des lieux à fouiller, des personnes à interroger, des indices,
 * des rapports qui arrivent quand on a trouvé ce qu'il faut, des « points d'enquête »
 * où chacun donne son avis, puis l'accusation finale.
 * Pour ajouter une enquête : copier le bloc de la première et changer l'histoire. */
window.DYNA_ENQUETES = [
{
  id: 'reine',
  num: 1,
  title: 'La Reine des Truffes',
  place: 'La Peyrade, en Périgord noir',
  tagline: 'Une truffe d\'un kilo a disparu la veille du grand marché.',
  color: '#E3CFA4',

  call: [
    { who: 'Gendarmerie', text: 'Allô, Dylan ? Léna ? Ici l\'adjudante Mercier, gendarmerie du Bugue. Désolée de vous déranger un dimanche matin.' },
    { who: 'Gendarmerie', text: 'Marcel Delpech, le trufficulteur de La Peyrade, s\'est fait voler sa plus belle truffe cette nuit. Un kilo cent. Il l\'appelle « la Reine ». Elle devait partir aux enchères au marché de Noël, aujourd\'hui à quatorze heures.' },
    { who: 'Gendarmerie', text: 'Pas d\'effraction, et son chien a dormi toute la nuit comme une pierre. J\'ai trois cambriolages sur les bras, alors je vous confie l\'affaire. Trouvez qui a fait le coup avant la vente.' }
  ],
  intro: 'Dimanche, 7 h 30. Marcel Delpech, 71 ans, vous attend devant sa ferme. Sa truffe record était rangée dans le frigo de la cave. Ce matin, le frigo était vide et Pistache, son chien truffier, dormait encore.',

  clues: {
    frigo:     { name: 'Le frigo vide', icon: 'box', text: 'Le frigo de la cave est vide. Pas de trace d\'effraction : la porte de la cave a été ouverte avec le bon code du cadenas.' },
    journal:   { name: 'Le journal du frigo', icon: 'clock', text: 'Le thermomètre connecté du frigo enregistre chaque ouverture. Dernière ouverture : samedi à 22 h 48. Marcel jure qu\'il dormait depuis 21 h 30.' },
    code:      { name: 'Le code du cadenas', icon: 'lock', text: 'Marcel a changé le code de la cave il y a trois semaines. Il ne l\'a donné qu\'à une seule personne : Lucas, son employé.' },
    gamelle:   { name: 'La gamelle de Pistache', icon: 'bowl', text: 'Il reste quelques croquettes au fond de la gamelle, avec une poudre blanche collée dessus.' },
    flacon:    { name: 'Le flacon de calmant', icon: 'drop', text: 'Dans le placard de la cuisine : un flacon de calmant prescrit pour Pistache, qui a peur en voiture. Il est à moitié vide alors que Marcel ne s\'en est servi qu\'une fois.' },
    bottes:    { name: 'Des traces de bottes', icon: 'foot', text: 'Dans la truffière, des traces de bottes et de pattes de chien. Quelqu\'un a creusé au pied de trois chênes cette nuit. Les traces ne vont pas vers la maison.' },
    trous:     { name: 'Les trous frais', icon: 'leaf', text: 'Trois trous fraîchement rebouchés au pied des chênes. Quelqu\'un a « cavé » des truffes chez Marcel, en douce.' },
    voiture:   { name: 'Le 4×4 du chemin', icon: 'car', text: 'La voisine, Mme Laval, a vu un 4×4 vert garé sur le chemin des Combes samedi à 22 h 15. C\'est la voiture de Bastien Roux.' },
    photos:    { name: 'Les photos du bal', icon: 'camera', text: 'Sylvie apparaît sur les photos du bal de la salle des fêtes à 22 h 05, 22 h 50 et 23 h 30. Elle n\'a pas quitté le bal.' },
    dettes:    { name: 'Les dettes de Sylvie', icon: 'paper', text: 'Sylvie doit 6 000 € à sa banque pour son salon de coiffure. Elle l\'a dit elle-même : la Reine vaut à peu près cette somme.' },
    analyse:   { name: 'L\'analyse de la vétérinaire', icon: 'flask', text: 'Résultat de la Dr Fabre : la poudre de la gamelle est le calmant du flacon. Il a été mélangé au repas du soir. Pistache s\'est endormi une heure plus tard environ.' },
    repas:     { name: 'Le repas du soir', icon: 'bowl', text: 'C\'est Lucas qui donne à manger à Pistache tous les soirs, à 21 h. Samedi aussi, d\'après lui.' },
    billet:    { name: 'Le billet du concert', icon: 'ticket', text: 'Le billet de Lucas pour le concert de Périgueux a été scanné à l\'entrée à 23 h 41. Le concert avait commencé à 21 h.' },
    annonce:   { name: 'L\'annonce en ligne', icon: 'phone', text: 'Une annonce a été publiée dimanche à 1 h 03 : « Truffe noire exceptionnelle, plus d\'un kilo, remise en main propre à Bordeaux ». Le compte s\'appelle « lmor24 ».' }
  },

  locations: [
    { id: 'cave', name: 'La cave', text: 'Une cave voûtée, fraîche, avec un vieux frigo pour les truffes et un cadenas à code sur la porte.',
      spots: [
        { id: 'c1', name: 'Le frigo', text: 'Vide. Juste le panier en osier et le torchon où dormait la Reine.', clue: 'frigo' },
        { id: 'c2', name: 'Le thermomètre connecté', text: 'Un petit boîtier collé dans le frigo. Marcel vous montre l\'appli sur son téléphone.', clue: 'journal' },
        { id: 'c3', name: 'Le cadenas', text: 'Intact. Ouvert avec le code, sans forcer.', clue: 'code' }
      ] },
    { id: 'cour', name: 'La cour et la niche', text: 'Pistache, un lagotto aux poils bouclés, est encore tout mou dans sa niche.',
      spots: [
        { id: 'n1', name: 'La gamelle', text: 'Vous mettez la gamelle dans un sac pour la vétérinaire.', clue: 'gamelle' },
        { id: 'n2', name: 'Pistache', text: 'Il remue la queue, mais il a du mal à se lever. Ce chien a été endormi.' }
      ] },
    { id: 'cuisine', name: 'La cuisine', text: 'Une grande table en chêne, des bocaux partout, et une odeur de café.',
      spots: [
        { id: 'k1', name: 'Le placard à pharmacie', text: 'Entre l\'aspirine et les pansements, un flacon au nom de Pistache.', clue: 'flacon' },
        { id: 'k2', name: 'Le calendrier', text: 'Samedi : « Lucas : concert Périgueux, part après la soupe du chien ». Dimanche : « MARCHÉ 14 h — LA REINE ».' }
      ] },
    { id: 'truffiere', name: 'La truffière', text: 'Une rangée de chênes derrière la ferme, la terre encore humide de la pluie de vendredi.',
      spots: [
        { id: 't1', name: 'Le pied des chênes', text: 'De la terre retournée, de frais.', clue: 'trous' },
        { id: 't2', name: 'Le chemin de terre', text: 'Des empreintes de bottes taille 44 et de pattes de chien, qui repartent vers le chemin des Combes.', clue: 'bottes' }
      ] },
    { id: 'voisine', name: 'Chez la voisine', text: 'Mme Laval, 84 ans, voit tout depuis sa fenêtre.',
      spots: [
        { id: 'v1', name: 'Discuter avec Mme Laval', text: '« Ah ça, j\'ai bien vu le 4×4 vert du petit Roux, garé sur le chemin à 22 h 15. Je regardais mon feuilleton. »', clue: 'voiture' }
      ] }
  ],

  suspects: [
    { id: 'sylvie', name: 'Sylvie Delpech', role: 'La nièce de Marcel', age: 38, color: '#C9A27E',
      intro: 'Coiffeuse au Bugue. Elle aide son oncle à la ferme le week-end et a les clés de la maison.',
      questions: [
        { id: 's1', q: 'Où étiez-vous samedi soir ?', a: 'Au bal de la salle des fêtes, de 22 h à presque 2 h. Tout le village m\'a vue. Regardez les photos sur la page de la mairie si vous voulez.', clue: 'photos' },
        { id: 's2', q: 'Vous connaissez le code de la cave ?', a: 'L\'ancien, oui. Mais tonton l\'a changé le mois dernier, et il ne me l\'a pas donné. Il dit que je perds tout.' },
        { id: 's3', q: 'Comment vont vos affaires ?', a: 'Mal, je ne vais pas vous mentir. Je dois 6 000 € à la banque. Je sais ce que vous pensez… mais jamais je ne volerais tonton.', clue: 'dettes' }
      ] },
    { id: 'bastien', name: 'Bastien Roux', role: 'Le trufficulteur d\'à côté', age: 45, color: '#8FB08A',
      intro: 'Le grand rival de Marcel. Ses truffes perdent tous les concours face à celles de La Peyrade.',
      questions: [
        { id: 'b1', q: 'Où étiez-vous samedi soir ?', a: 'Chez moi, devant la télé. Toute la soirée. Pourquoi ?' },
        { id: 'b2', q: 'Votre 4×4 a été vu sur le chemin des Combes à 22 h 15.', needs: ['voiture'], a: '… Bon. D\'accord. J\'y étais. Mais je n\'ai jamais mis les pieds dans sa cave !' },
        { id: 'b3', q: 'Les traces dans la truffière, ce sont les vôtres ?', needs: ['bottes', 'trous'], a: 'Oui… J\'ai cavé trois truffes au pied de ses chênes, avec ma chienne. Ce n\'est pas glorieux, je sais. Mais je suis reparti par le chemin, je ne suis pas allé vers la maison. Et la cave, je ne connais même pas le code !' },
        { id: 'b4', q: 'Avez-vous vu quelqu\'un d\'autre cette nuit ?', needs: ['voiture'], a: 'En repartant, vers 22 h 40, j\'ai croisé une petite voiture blanche qui montait vers la ferme, phares éteints. Je me suis dit que c\'était bizarre.' }
      ] },
    { id: 'ines', name: 'Dr Inès Fabre', role: 'La vétérinaire', age: 34, color: '#9FC3D6',
      intro: 'Elle soigne Pistache depuis qu\'il est chiot. Elle l\'a vacciné jeudi.',
      questions: [
        { id: 'i1', q: 'Pistache a été endormi. Qu\'en pensez-vous ?', a: 'Donnez-moi la gamelle, je l\'analyse tout de suite à la clinique.', needs: ['gamelle'] },
        { id: 'i2', q: 'Vous avez des calmants à la clinique ?', a: 'Bien sûr, mais tout est sous clé et compté. Par contre, j\'ai prescrit un flacon à Marcel en septembre, pour les trajets en voiture de Pistache.' },
        { id: 'i3', q: 'Où étiez-vous samedi soir ?', a: 'De garde à la clinique jusqu\'à minuit. Il y a eu un chat renversé à 22 h 30, la propriétaire peut le confirmer.' }
      ] },
    { id: 'lucas', name: 'Lucas Moreau', role: 'L\'employé de la ferme', age: 24, color: '#D6B35C',
      intro: 'Il travaille pour Marcel depuis deux ans : il entretient la truffière et s\'occupe de Pistache. Il conduit une petite Clio blanche.',
      questions: [
        { id: 'l1', q: 'Qu\'avez-vous fait samedi soir ?', a: 'J\'ai donné à manger à Pistache à 21 h, comme tous les soirs, puis je suis parti au concert à Périgueux. Je suis arrivé vers 21 h 45, avant le début du deuxième groupe.', clue: 'repas' },
        { id: 'l2', q: 'Vous avez votre billet ?', needs: ['repas'], a: 'Euh… oui, il est dans mon téléphone. Tenez.', clue: 'billet' },
        { id: 'l3', q: 'Votre billet a été scanné à 23 h 41, pas à 21 h 45.', needs: ['billet'], a: 'J\'ai… j\'ai traîné sur le parking avec des potes. On a bu un coup avant d\'entrer. C\'est tout.' },
        { id: 'l4', q: 'Vous connaissez le code de la cave ?', needs: ['code'], a: 'Oui, Marcel me l\'a donné. Mais je ne suis pas le seul à pouvoir le deviner, c\'est sa date de mariage !' },
        { id: 'l5', q: 'Le compte « lmor24 », ça vous dit quelque chose ?', needs: ['annonce'], a: '… Je veux un avocat. Enfin… je veux dire… je n\'ai rien à dire.' }
      ] }
  ],

  reports: [
    { id: 'r1', needs: ['gamelle'], from: 'Dr Inès Fabre', title: 'Analyse de la gamelle', clue: 'analyse',
      text: 'C\'est le calmant que j\'ai prescrit à Marcel, à forte dose. Mélangé aux croquettes du soir. Pistache a dû s\'endormir vers 22 h. Celui qui a préparé ce repas savait ce qu\'il faisait.' },
    { id: 'r2', needs: ['billet', 'journal'], from: 'Adjudante Mercier', title: 'Une annonce suspecte', clue: 'annonce',
      text: 'On surveille les sites de vente avant le marché. Une truffe de plus d\'un kilo a été mise en vente cette nuit, à 1 h 03, pour une remise à Bordeaux. Le compte : « lmor24 ». Ça vous parle ?' }
  ],

  checkpoints: [
    { id: 'p1', needs: ['journal', 'analyse'], title: 'Point d\'enquête n°1',
      q: 'Pistache s\'est endormi vers 22 h et le frigo a été ouvert à 22 h 48. Qu\'est-ce que ça veut dire ?',
      options: ['Le voleur a profité du hasard : le chien dormait déjà', 'Le voleur a endormi le chien exprès, en préparant le vol à l\'avance', 'Marcel s\'est trompé, la truffe a été volée le matin'],
      answer: 1,
      explain: 'Le calmant était dans le repas de 21 h. Le vol était préparé : quelqu\'un a endormi Pistache pour qu\'il n\'aboie pas.' },
    { id: 'p2', needs: ['photos', 'bottes', 'voiture'], title: 'Point d\'enquête n°2',
      q: 'Sylvie et Bastien ont un mobile. Qui peut-on écarter du vol de la cave ?',
      options: ['Seulement Sylvie', 'Seulement Bastien', 'Les deux', 'Aucun des deux'],
      answer: 2,
      explain: 'Sylvie était au bal à 22 h 50 (photo) quand le frigo s\'est ouvert. Bastien était dans la truffière, ses traces ne vont pas vers la maison, et il ne connaît pas le nouveau code.' },
    { id: 'p3', needs: ['billet', 'repas'], title: 'Point d\'enquête n°3',
      q: 'Lucas dit être arrivé au concert vers 21 h 45. Son billet a été scanné à 23 h 41. Qu\'est-ce que ça change ?',
      options: ['Rien, il était sur le parking avec des amis', 'Il avait largement le temps de revenir à la ferme à 22 h 48', 'Il ne pouvait pas être à la ferme, Périgueux est trop loin'],
      answer: 1,
      explain: 'La ferme est à 45 minutes de Périgueux. Parti juste après le vol, vers 22 h 55, il arrive au concert vers 23 h 40… pile à l\'heure du scan.' }
  ],

  final: {
    culprit: 'lucas',
    whoQ: 'Qui a volé la Reine ?',
    howQ: 'Comment s\'y est-il pris ?',
    how: ['Il a forcé la porte de la cave pendant le bal', 'Il a mis le calmant dans le repas de 21 h, est revenu à 22 h 48 et a ouvert la cave avec le code', 'Il a demandé à Bastien de voler la truffe pour lui'],
    howAnswer: 1,
    proofQ: 'Quelle est la preuve qui le fait tomber ?',
    proofs: ['annonce', 'billet', 'code', 'dettes', 'bottes'],
    proofAnswers: ['annonce', 'billet', 'code'],
    confession: 'Lucas baisse la tête. « Un type de Bordeaux m\'a proposé 5 000 € en liquide. Marcel me paie au lance-pierre, je voulais juste m\'en sortir. La truffe est dans la glacière, dans le coffre de ma Clio. Elle n\'a rien, je vous jure. »',
    fateQ: 'La Reine est retrouvée intacte. Que décidez-vous pour Lucas ?',
    fates: [
      { label: 'Le remettre aux gendarmes', text: 'L\'adjudante Mercier embarque Lucas. Marcel, lui, arrive au marché à 13 h 58, la Reine dans les bras. Elle part pour un record : 4 200 €.' },
      { label: 'Lui laisser une chance', text: 'Lucas rend la truffe et s\'excuse devant Marcel. Le vieux trufficulteur le garde à l\'essai… mais change le code de la cave le soir même. La Reine part à 4 200 € au marché.' }
    ],
    wrong: 'Ce n\'est pas la bonne personne. La vraie coupable ou le vrai coupable court toujours… et la Reine est partie pour Bordeaux.'
  }
}
];

/* Les prochaines enquêtes, affichées « bientôt » dans le menu */
window.DYNA_ENQUETES_BIENTOT = [
  { num: 2, title: 'Le Mariage de Domme', tagline: 'Une bague disparaît pendant le vin d\'honneur.' },
  { num: 3, title: 'Le Fantôme du Château', tagline: 'Des bruits la nuit, et un tableau qui change de place.' }
];
