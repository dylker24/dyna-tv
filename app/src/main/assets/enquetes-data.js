/* Dyna Enquêtes — les enquêtes.
 * Une enquête se joue en plusieurs actes. Chaque acte ouvre de nouveaux lieux et de nouveaux témoins.
 * Les rapports arrivent tout seuls quand on a trouvé les bons indices, et les « points d'enquête »
 * font répondre chacun à son tour. L'accusation n'ouvre qu'au dernier acte.
 * Pour ajouter une enquête : copier le bloc de la première et changer l'histoire.
 *
 * SOLUTION de « La Reine des Truffes » (pour aider sans jouer) :
 * Lucas, l'employé, a endormi Pistache avec le calmant dans le repas de 21 h, est revenu à 22 h 48 avec sa Clio
 * et a ouvert la cave avec le code. Le commanditaire est Hugo Castel, chef bordelais, qui avait annoncé
 * la truffe sur son menu dix jours avant le vol. Sylvie, Bastien, Inès et Marcel sont des fausses pistes. */
window.DYNA_ENQUETES = [
{
  id: 'reine',
  num: 1,
  title: 'La Reine des Truffes',
  place: 'La Peyrade, en Périgord noir',
  tagline: 'Une truffe d\'un kilo a disparu la veille du grand marché. Une enquête en trois actes.',
  duration: 'Environ 1 h 30',

  call: [
    { who: 'Gendarmerie', text: 'Allô, Dylan ? Léna ? Ici l\'adjudante Mercier, gendarmerie du Bugue. Désolée de vous déranger un dimanche matin.' },
    { who: 'Gendarmerie', text: 'Marcel Delpech, le trufficulteur de La Peyrade, s\'est fait voler sa plus belle truffe cette nuit. Un kilo cent. Il l\'appelle « la Reine ». Elle devait partir aux enchères au marché de Noël, aujourd\'hui à quatorze heures.' },
    { who: 'Gendarmerie', text: 'Pas d\'effraction, et son chien a dormi toute la nuit comme une pierre. J\'ai trois cambriolages sur les bras, alors je vous confie l\'affaire. Trouvez qui a fait le coup avant la vente.' }
  ],
  intro: 'Dimanche, 7 h 30. Marcel Delpech, 71 ans, vous attend devant sa ferme. Sa truffe record était rangée dans le frigo de la cave. Ce matin, le frigo était vide et Pistache, son chien truffier, dormait encore.',

  acts: [
    { num: 1, title: 'La ferme', text: '' },
    { num: 2, title: 'Le village', unlock: ['analyse', 'code', 'photos'],
      text: 'Le vol a été préparé, et par quelqu\'un qui connaissait la ferme par cœur. L\'adjudante Mercier vous rappelle : « Élargissez. Le bal, la mairie, l\'employé, et même Marcel. Personne n\'est au-dessus de tout soupçon. » De nouveaux lieux et de nouveaux témoins s\'ouvrent.' },
    { num: 3, title: 'Le rendez-vous', unlock: ['annonce', 'rdv'],
      text: '11 h 50. L\'annonce parle d\'une remise en main propre, et le mot trouvé chez Lucas donne un lieu et une heure : « H.C. — dim. 13 h — aire de Mussidan ». La Reine est peut-être encore en route. Il faut y aller, et ne pas tout faire rater.' }
  ],

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
    clio:      { name: 'La voiture blanche', icon: 'car', text: 'Bastien a croisé une petite voiture blanche qui montait vers la ferme vers 22 h 40, phares éteints. Lucas roule en Clio blanche.' },
    assurance: { name: 'Le contrat d\'assurance', icon: 'paper', text: 'Dans le bureau de Marcel : la Reine a été assurée pour 8 000 € il y a huit jours. Plus qu\'elle ne vaudrait aux enchères.' },
    lettre:    { name: 'La lettre de l\'hôtel des ventes', icon: 'mail', text: 'Lettre du commissaire-priseur : « Toute pièce de plus de 500 g doit être assurée à sa valeur d\'estimation haute avant la vente. » L\'assurance était obligatoire.' },
    nuit:      { name: 'La nuit de Marcel', icon: 'clock', text: 'Mme Laval a vu la lumière de la chambre de Marcel s\'éteindre à 21 h 30, et rien ne s\'est rallumé de la nuit. Sa montre connectée le confirme : sommeil profond de 21 h 40 à 6 h 10.' },
    camera:    { name: 'La caméra de la mairie', icon: 'camera', text: 'La caméra du rond-point filme une Clio blanche à 22 h 31 vers La Peyrade, puis à 22 h 57 dans l\'autre sens. La plaque est celle de Lucas.' },
    glaciere:  { name: 'Le ticket de la glacière', icon: 'paper', text: 'Chez Lucas : un ticket de caisse du vendredi, une glacière électrique pour voiture. La boîte est vide, la glacière a disparu.' },
    rdv:       { name: 'Le mot « H.C. »', icon: 'paper', text: 'Un post-it sur le frigo de Lucas : « H.C. — dim. 13 h — aire de Mussidan ». H.C., c\'est quelqu\'un qu\'il doit voir aujourd\'hui.' },
    chef:      { name: 'Le chef qui paie cash', icon: 'people', text: 'Théo, le copain de Lucas : « Il m\'a parlé d\'un chef de Bordeaux qui paie cash pour des belles pièces. Il disait qu\'il allait faire le coup de sa vie. »' },
    annonce:   { name: 'L\'annonce en ligne', icon: 'phone', text: 'Une annonce a été publiée dimanche à 1 h 03 : « Truffe noire exceptionnelle, plus d\'un kilo, remise en main propre ». Le compte s\'appelle « lmor24 ».' },
    menu:      { name: 'Le menu du Castel', icon: 'paper', text: 'Le restaurant « Le Castel », à Bordeaux, a publié son menu du Nouvel An il y a dix jours : « La Reine du Périgord, truffe d\'exception de plus d\'un kilo ». Dix jours avant le vol.' },
    echange:   { name: 'L\'échange sur l\'aire', icon: 'eye', text: 'Sur l\'aire de Mussidan, Lucas a sorti une glacière de sa Clio et l\'a tendue à un homme en veste de cuisinier, qui lui a donné une enveloppe épaisse.' },
    reine:     { name: 'La Reine retrouvée', icon: 'star', text: 'Dans la glacière : la Reine, intacte, dans son torchon. Dans l\'enveloppe : 5 000 € en billets. L\'homme s\'appelle Hugo Castel, chef du restaurant « Le Castel ».' }
  },

  locations: [
    { id: 'cave', act: 1, name: 'La cave', text: 'Une cave voûtée, fraîche, avec un vieux frigo pour les truffes et un cadenas à code sur la porte.',
      spots: [
        { id: 'c1', name: 'Le frigo', text: 'Vide. Juste le panier en osier et le torchon où dormait la Reine.', clue: 'frigo' },
        { id: 'c2', name: 'Le thermomètre connecté', text: 'Un petit boîtier collé dans le frigo. Marcel vous montre l\'appli sur son téléphone.', clue: 'journal' },
        { id: 'c3', name: 'Le cadenas', text: 'Intact. Ouvert avec le code, sans forcer. Marcel vous explique qu\'il a changé le code il y a trois semaines.', clue: 'code' }
      ] },
    { id: 'cour', act: 1, name: 'La cour et la niche', text: 'Pistache, un lagotto aux poils bouclés, est encore tout mou dans sa niche.',
      spots: [
        { id: 'n1', name: 'La gamelle', text: 'Vous mettez la gamelle dans un sac pour la vétérinaire.', clue: 'gamelle' },
        { id: 'n2', name: 'Pistache', text: 'Il remue la queue, mais il a du mal à se lever. Ce chien a été endormi.' }
      ] },
    { id: 'cuisine', act: 1, name: 'La cuisine', text: 'Une grande table en chêne, des bocaux partout, et une odeur de café.',
      spots: [
        { id: 'k1', name: 'Le placard à pharmacie', text: 'Entre l\'aspirine et les pansements, un flacon au nom de Pistache.', clue: 'flacon' },
        { id: 'k2', name: 'Le calendrier', text: 'Samedi : « Lucas : concert Périgueux, part après la soupe du chien ». Dimanche : « MARCHÉ 14 h — LA REINE ».' }
      ] },
    { id: 'truffiere', act: 1, name: 'La truffière', text: 'Une rangée de chênes derrière la ferme, la terre encore humide de la pluie de vendredi.',
      spots: [
        { id: 't1', name: 'Le pied des chênes', text: 'De la terre retournée, de frais.', clue: 'trous' },
        { id: 't2', name: 'Le chemin de terre', text: 'Des empreintes de bottes taille 44 et de pattes de chien, qui repartent vers le chemin des Combes.', clue: 'bottes' }
      ] },
    { id: 'voisine', act: 1, name: 'Chez la voisine', text: 'Mme Laval, 84 ans, voit tout depuis sa fenêtre.',
      spots: [
        { id: 'v1', name: 'Discuter avec Mme Laval', text: '« Ah ça, j\'ai bien vu le 4×4 vert du petit Roux, garé sur le chemin à 22 h 15. Je regardais mon feuilleton. »', clue: 'voiture' },
        { id: 'v2', name: 'Lui demander pour Marcel', act: 2, text: '« Marcel ? Couché comme les poules. Sa lumière s\'est éteinte à 21 h 30, comme tous les soirs, et elle ne s\'est pas rallumée. Il dort avec sa montre, là, celle qui compte le sommeil. »', clue: 'nuit' }
      ] },
    { id: 'bureau', act: 2, name: 'Le bureau de Marcel', text: 'Une petite pièce encombrée de classeurs, de diplômes de concours et de photos de truffes.',
      spots: [
        { id: 'o1', name: 'Le tiroir du bureau', text: 'Un contrat tout neuf, signé il y a huit jours. Marcel devient tout rouge quand vous le sortez.', clue: 'assurance' },
        { id: 'o2', name: 'Le courrier', text: 'Une enveloppe à l\'en-tête de l\'hôtel des ventes de Sarlat, ouverte.', clue: 'lettre' },
        { id: 'o3', name: 'Les diplômes', text: 'Médaille d\'or trois années de suite. Juste en dessous, au crayon : « Bastien, 2e. Encore. »' }
      ] },
    { id: 'salle', act: 2, name: 'La salle des fêtes', text: 'Les guirlandes du bal pendent encore. Le barman range les verres.',
      spots: [
        { id: 'a1', name: 'Parler au barman', text: '« Sylvie ? Elle a dansé toute la nuit, elle n\'a pas bougé d\'ici avant 2 h. Lucas ? Non, pas vu. Il m\'avait dit qu\'il allait au concert à Périgueux. »' },
        { id: 'a2', name: 'Le tableau des photos', text: 'Les photos du bal imprimées et punaisées. Sylvie est sur une bonne dizaine.' }
      ] },
    { id: 'mairie', act: 2, name: 'La mairie', text: 'Le secrétaire de mairie vous ouvre un dimanche, en pantoufles, pour vous montrer la caméra du rond-point.',
      spots: [
        { id: 'm1', name: 'Les images de la caméra', text: 'Vous faites défiler la soirée de samedi en accéléré. À 22 h 31, une petite voiture blanche. Vous zoomez sur la plaque.', clue: 'camera' }
      ] },
    { id: 'lucas', act: 2, name: 'Chez Lucas, au Bugue', text: 'Un petit studio au-dessus d\'une boulangerie. Lucas n\'est pas là. Sa logeuse vous ouvre, un peu inquiète.',
      spots: [
        { id: 'h1', name: 'La poubelle de la cuisine', text: 'Un carton vide de glacière électrique pour voiture, et le ticket de caisse.', clue: 'glaciere' },
        { id: 'h2', name: 'Le frigo', text: 'Presque vide. Un post-it jaune collé sur la porte.', clue: 'rdv' },
        { id: 'h3', name: 'Le bureau', text: 'Des factures impayées et un relevé de compte dans le rouge. Lucas a besoin d\'argent, et vite.' }
      ] },
    { id: 'aire', act: 3, name: 'L\'aire de Mussidan', text: '12 h 40. Une aire d\'autoroute, quelques camions, un distributeur de café. La Clio blanche de Lucas est garée tout au fond.',
      spots: [
        { id: 'x1', name: 'S\'approcher', clue: 'echange',
          choice: { q: 'Comment vous approchez-vous ?', options: [
            { label: 'Arriver avec l\'adjudante, gyrophare allumé', good: false, text: 'Lucas vous voit arriver de loin et referme son coffre. Il ne se passe plus rien. Vous repartez, et vous revenez discrètement dix minutes plus tard.' },
            { label: 'Se garer plus loin et attendre, comme des voyageurs', good: true, text: 'Vous prenez un café près du distributeur. À 13 h pile, un 4×4 noir se gare à côté de la Clio. Un homme en veste de cuisinier en descend.' },
            { label: 'Appeler Lucas pour lui demander où il est', good: false, text: 'Lucas ne décroche pas… et la Clio démarre. Vous la retrouvez garée un peu plus loin. Raté, mais rien n\'est perdu : il faut être plus discrets.' }
          ] } },
        { id: 'x2', name: 'Intervenir', needsSpot: 'x1', clue: 'reine',
          choice: { q: 'Lucas tend la glacière, l\'homme sort une enveloppe. Que faites-vous ?', options: [
            { label: 'Intervenir maintenant, pendant l\'échange', good: true, text: 'L\'adjudante Mercier surgit derrière vous. Lucas lâche la glacière, l\'homme en veste de cuisinier lève les mains. Pris sur le fait.' },
            { label: 'Attendre qu\'ils repartent pour les suivre', good: false, text: 'Le 4×4 noir part vers l\'autoroute avec la glacière. L\'adjudante le fait arrêter au péage… vous avez eu chaud. Recommencez la scène : cette fois, intervenez.' }
          ] } }
      ] }
  ],

  suspects: [
    { id: 'sylvie', act: 1, name: 'Sylvie Delpech', role: 'La nièce de Marcel', age: 38, color: '#C9A27E',
      intro: 'Coiffeuse au Bugue. Elle aide son oncle à la ferme le week-end et a les clés de la maison.',
      questions: [
        { id: 's1', q: 'Où étiez-vous samedi soir ?', a: 'Au bal de la salle des fêtes, de 22 h à presque 2 h. Tout le village m\'a vue. Regardez les photos sur la page de la mairie si vous voulez.', clue: 'photos' },
        { id: 's2', q: 'Vous connaissez le code de la cave ?', a: 'L\'ancien, oui. Mais tonton l\'a changé le mois dernier, et il ne me l\'a pas donné. Il dit que je perds tout.' },
        { id: 's3', q: 'Comment vont vos affaires ?', a: 'Mal, je ne vais pas vous mentir. Je dois 6 000 € à la banque. Je sais ce que vous pensez… mais jamais je ne volerais tonton.', clue: 'dettes' },
        { id: 's4', q: 'Que pensez-vous de Lucas ?', act: 2, a: 'Gentil, mais toujours fauché. Il m\'a emprunté 200 € le mois dernier et il ne me les a jamais rendus. Et il parlait beaucoup de Bordeaux, ces temps-ci.' }
      ] },
    { id: 'bastien', act: 1, name: 'Bastien Roux', role: 'Le trufficulteur d\'à côté', age: 45, color: '#8FB08A',
      intro: 'Le grand rival de Marcel. Ses truffes perdent tous les concours face à celles de La Peyrade.',
      questions: [
        { id: 'b1', q: 'Où étiez-vous samedi soir ?', a: 'Chez moi, devant la télé. Toute la soirée. Pourquoi ?' },
        { id: 'b2', q: 'Votre 4×4 a été vu sur le chemin des Combes à 22 h 15.', needs: ['voiture'], a: '… Bon. D\'accord. J\'y étais. Mais je n\'ai jamais mis les pieds dans sa cave !' },
        { id: 'b3', q: 'Les traces dans la truffière, ce sont les vôtres ?', needs: ['bottes', 'trous'], a: 'Oui… J\'ai cavé trois truffes au pied de ses chênes, avec ma chienne. Ce n\'est pas glorieux, je sais. Mais je suis reparti par le chemin, je ne suis pas allé vers la maison. Et la cave, je ne connais même pas le code !' },
        { id: 'b4', q: 'Avez-vous vu quelqu\'un d\'autre cette nuit ?', needs: ['voiture'], a: 'En repartant, vers 22 h 40, j\'ai croisé une petite voiture blanche qui montait vers la ferme, phares éteints. Je me suis dit que c\'était bizarre.', clue: 'clio' }
      ] },
    { id: 'ines', act: 1, name: 'Dr Inès Fabre', role: 'La vétérinaire', age: 34, color: '#9FC3D6',
      intro: 'Elle soigne Pistache depuis qu\'il est chiot. Elle l\'a vacciné jeudi.',
      questions: [
        { id: 'i1', q: 'Pistache a été endormi. Pouvez-vous analyser sa gamelle ?', needs: ['gamelle'], a: 'Donnez-la-moi, je file l\'analyser à la clinique. Je vous envoie le résultat dans la matinée.' },
        { id: 'i2', q: 'Vous avez des calmants à la clinique ?', a: 'Bien sûr, mais tout est sous clé et compté. Par contre, j\'ai prescrit un flacon à Marcel en septembre, pour les trajets en voiture de Pistache.' },
        { id: 'i3', q: 'Où étiez-vous samedi soir ?', a: 'De garde à la clinique jusqu\'à minuit. Il y a eu un chat renversé à 22 h 30, la propriétaire peut le confirmer.' },
        { id: 'i4', q: 'Qui sait doser ce calmant pour un chien ?', act: 2, needs: ['analyse'], a: 'Quelqu\'un qui connaît le chien et son poids. Marcel… ou celui qui le nourrit tous les jours. Lucas venait toujours avec Pistache aux rendez-vous, c\'est lui qui m\'a demandé la dose exacte, la dernière fois.' }
      ] },
    { id: 'lucas', act: 1, name: 'Lucas Moreau', role: 'L\'employé de la ferme', age: 24, color: '#D6B35C',
      intro: 'Il travaille pour Marcel depuis deux ans : il entretient la truffière et s\'occupe de Pistache. Il conduit une petite Clio blanche.',
      questions: [
        { id: 'l1', q: 'Qu\'avez-vous fait samedi soir ?', a: 'J\'ai donné à manger à Pistache à 21 h, comme tous les soirs, puis je suis parti au concert à Périgueux. Je suis arrivé vers 21 h 45, avant le début du deuxième groupe.', clue: 'repas' },
        { id: 'l2', q: 'Vous avez votre billet ?', needs: ['repas'], a: 'Euh… oui, il est dans mon téléphone. Tenez.', clue: 'billet' },
        { id: 'l3', q: 'Votre billet a été scanné à 23 h 41, pas à 21 h 45.', needs: ['billet'], a: 'J\'ai… j\'ai traîné sur le parking avec des potes. On a bu un coup avant d\'entrer. C\'est tout.' },
        { id: 'l4', q: 'Vous connaissez le code de la cave ?', needs: ['code'], a: 'Oui, Marcel me l\'a donné. Mais je ne suis pas le seul à pouvoir le deviner, c\'est sa date de mariage !' },
        { id: 'l5', q: 'Votre Clio a été filmée au rond-point à 22 h 31.', act: 2, needs: ['camera'], a: 'Je… j\'avais oublié mon portefeuille à la ferme. Je suis repassé vite fait. C\'est interdit ?' },
        { id: 'l6', q: 'Pourquoi avoir acheté une glacière vendredi ?', act: 2, needs: ['glaciere'], a: 'Pour… pour le pique-nique. En décembre. Bon, ça va, j\'ai le droit d\'acheter une glacière, non ?' },
        { id: 'l7', q: 'Le compte « lmor24 », ça vous dit quelque chose ?', act: 2, needs: ['annonce'], a: '… Je n\'ai plus rien à dire. Je veux parler à un avocat.' }
      ] },
    { id: 'marcel', act: 2, name: 'Marcel Delpech', role: 'Le propriétaire de la Reine', age: 71, color: '#B7A99A',
      intro: 'Trois médailles d\'or, cinquante ans de truffes. Il ne quitte pas sa casquette, même à l\'intérieur.',
      questions: [
        { id: 'r1q', q: 'À quelle heure vous êtes-vous couché samedi ?', a: 'À 21 h 30, comme toujours. Lucas a donné la soupe au chien, il m\'a dit bonsoir, et au lit. Je n\'ai rien entendu de la nuit, Pistache n\'a pas aboyé une seule fois.' },
        { id: 'r2q', q: 'Pourquoi avoir assuré la Reine pour 8 000 € ?', needs: ['assurance'], a: 'Parce que l\'hôtel des ventes me l\'a demandé, pardi ! Vous croyez que je volerais ma propre truffe ? Cinquante ans que j\'attends une pièce pareille. Regardez le courrier, tout y est.' },
        { id: 'r3q', q: 'Qui savait que la Reine était dans la cave ?', a: 'Tout le monde savait que je l\'avais. Mais qu\'elle était dans la cave, et le code… il n\'y avait que Lucas. Ce petit, je le considère comme mon fils.' },
        { id: 'r4q', q: 'Quelqu\'un vous a-t-il proposé de l\'acheter avant la vente ?', a: 'Oui ! Un chef de Bordeaux, à la foire de Sarlat il y a quinze jours. Castel, je crois. Il voulait l\'acheter direct, sans les enchères. Je l\'ai envoyé promener. Lucas était là, d\'ailleurs, il a discuté un moment avec lui.' }
      ] },
    { id: 'theo', act: 2, name: 'Théo Vergne', role: 'Le copain de Lucas', age: 25, color: '#A3B7E0',
      intro: 'Il était au concert de Périgueux samedi soir. Vous le joignez en visio, la tête encore dans le brouillard.',
      questions: [
        { id: 'o1q', q: 'À quelle heure Lucas est-il arrivé au concert ?', a: 'Tard. Vers minuit moins le quart, presque à la fin. Il était tout excité, et il avait de la boue sur ses baskets, je m\'en souviens.' },
        { id: 'o2q', q: 'Il vous a dit quelque chose ?', a: 'Il a dit qu\'il venait de faire « le coup de sa vie ». Qu\'il avait un chef de Bordeaux qui paie cash pour les belles pièces. J\'ai cru qu\'il parlait d\'un job.', clue: 'chef' },
        { id: 'o3q', q: 'Lucas avait des problèmes d\'argent ?', a: 'Toujours. Il doit de l\'argent à tout le monde, moi compris. Il voulait se payer une formation de cuisine à Bordeaux, justement.' }
      ] },
    { id: 'hugo', act: 3, name: 'Hugo Castel', role: 'Chef du restaurant « Le Castel », Bordeaux', age: 52, color: '#C98E8E',
      intro: 'Une étoile au guide, un restaurant réputé, et les mains encore en l\'air sur le parking de l\'aire de Mussidan.',
      questions: [
        { id: 'u1', q: 'Que faisiez-vous sur cette aire ?', needs: ['echange'], a: 'J\'achetais une truffe à un producteur. Tout à fait légal. Je ne savais absolument pas qu\'elle était volée.' },
        { id: 'u2', q: 'Un producteur qui vous livre sur un parking, en liquide ?', needs: ['reine'], a: 'C\'est… c\'est comme ça que ça marche dans le métier, vous savez. On ne pose pas trop de questions.' },
        { id: 'u3', q: 'Votre menu annonçait la Reine dix jours avant le vol.', needs: ['menu'], a: '… Bon. J\'ai dit au petit que s\'il me trouvait une pièce de plus d\'un kilo avant Noël, je le prendrais en cuisine. Je ne lui ai jamais dit de la voler. Pas comme ça, en tout cas.' }
      ] }
  ],

  reports: [
    { id: 'r1', needs: ['gamelle'], from: 'Dr Inès Fabre', title: 'Analyse de la gamelle', clue: 'analyse',
      text: 'C\'est le calmant que j\'ai prescrit à Marcel, à forte dose. Mélangé aux croquettes du soir. Pistache a dû s\'endormir vers 22 h. Celui qui a préparé ce repas savait ce qu\'il faisait.' },
    { id: 'r2', needs: ['billet', 'camera'], from: 'Adjudante Mercier', title: 'Une annonce suspecte', clue: 'annonce',
      text: 'On surveille les sites de vente avant le marché. Une truffe de plus d\'un kilo a été mise en vente cette nuit, à 1 h 03, pour une remise en main propre. Le compte : « lmor24 ». L. Mor., 24 ans… ça ne vous rappelle personne ?' },
    { id: 'r3', needs: ['chef', 'echange'], from: 'Adjudante Mercier', title: 'Le menu du Castel', clue: 'menu',
      text: 'J\'ai regardé le restaurant de votre chef. Son menu du Nouvel An est en ligne depuis dix jours : « La Reine du Périgord, truffe d\'exception de plus d\'un kilo ». Il savait qu\'il l\'aurait avant même qu\'elle disparaisse.' }
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
      explain: 'La ferme est à 45 minutes de Périgueux. Parti juste après le vol, vers 22 h 55, il arrive au concert vers 23 h 40… pile à l\'heure du scan.' },
    { id: 'p4', needs: ['assurance', 'lettre', 'nuit'], title: 'Point d\'enquête n°4',
      q: 'Marcel a assuré la Reine pour 8 000 € huit jours avant le vol. Faut-il le soupçonner d\'une fraude à l\'assurance ?',
      options: ['Oui : il touche plus avec l\'assurance qu\'aux enchères', 'Non : l\'assurance était obligatoire, et il dormait au moment du vol', 'Impossible à dire pour l\'instant'],
      answer: 1,
      explain: 'L\'hôtel des ventes exigeait cette assurance, et la voisine comme sa montre confirment qu\'il dormait de 21 h 30 au matin. Marcel est une fausse piste.' },
    { id: 'p5', needs: ['camera', 'glaciere', 'clio'], title: 'Point d\'enquête n°5',
      q: 'La caméra filme la Clio de Lucas à 22 h 31 et 22 h 57, et il a acheté une glacière vendredi. Qu\'en concluez-vous ?',
      options: ['Il est vraiment repassé chercher son portefeuille', 'Il avait tout préparé : revenir pendant que le chien dormait, et garder la truffe au frais', 'Quelqu\'un lui a emprunté sa voiture'],
      answer: 1,
      explain: 'Aller-retour de 26 minutes pile autour de l\'ouverture du frigo à 22 h 48, et une glacière achetée la veille : le vol était prémédité.' },
    { id: 'p6', needs: ['menu', 'echange'], title: 'Point d\'enquête n°6',
      q: 'Pourquoi le menu du Castel, publié dix jours avant le vol, change-t-il tout ?',
      options: ['Il ne change rien : beaucoup de chefs annoncent des truffes', 'Hugo Castel savait qu\'il aurait la Reine avant qu\'elle soit volée : c\'est lui qui a poussé au vol', 'C\'est Marcel qui lui avait promis la truffe'],
      answer: 1,
      explain: 'Marcel avait refusé de lui vendre la Reine. Castel l\'a quand même mise à son menu, puis il a promis une place en cuisine à Lucas s\'il lui « trouvait » une pièce d\'un kilo. C\'est lui le commanditaire.' }
  ],

  final: {
    unlockAct: 3,
    steps: [
      { type: 'suspect', q: 'Qui a volé la Reine dans la cave ?', answer: 'lucas', label: 'Bon voleur' },
      { type: 'suspect', q: 'Qui l\'a poussé à le faire ?', answer: 'hugo', none: 'Personne, il a agi seul', label: 'Bon commanditaire' },
      { type: 'option', q: 'Comment le vol s\'est-il passé ?', label: 'Bon scénario',
        options: ['Le voleur a forcé la porte de la cave pendant le bal', 'Calmant dans le repas de 21 h, retour en Clio à 22 h 48, cave ouverte avec le code, truffe dans la glacière', 'Bastien a volé la truffe et l\'a revendue à Lucas'],
        answer: 1 },
      { type: 'clue', q: 'Quelle preuve fait tomber le commanditaire ?', label: 'Bonne preuve',
        options: ['menu', 'echange', 'reine', 'assurance', 'chef'], answers: ['menu'] }
    ],
    confession: 'Lucas craque le premier. « Castel m\'a dit : trouve-moi une pièce d\'un kilo avant Noël et je te prends en cuisine. Une place chez un étoilé, vous vous rendez compte ? J\'ai endormi Pistache, je suis revenu pendant que Marcel dormait. Je m\'en veux tellement. » Hugo Castel, lui, ne dit plus un mot.',
    fateQ: 'La Reine est retrouvée intacte, et Hugo Castel est arrêté. Que décidez-vous pour Lucas ?',
    fates: [
      { label: 'Le remettre aux gendarmes avec Castel', text: 'L\'adjudante Mercier embarque Lucas et Hugo Castel. Marcel arrive au marché à 13 h 58, la Reine dans les bras. Elle part pour un record : 4 200 €. Le Castel perd son étoile au printemps suivant.' },
      { label: 'Lui laisser une chance', text: 'Lucas témoigne contre Castel et rembourse le dérangement en travaillant gratuitement tout l\'hiver. Marcel le garde… mais change le code de la cave le soir même. La Reine part à 4 200 €, et Castel, lui, est jugé seul.' }
    ],
    wrong: 'Ce n\'est pas la bonne personne. Le vrai coupable court toujours… et la Reine a fini dans une cuisine de Bordeaux.'
  }
}
];

/* Les prochaines enquêtes, affichées « bientôt » dans le menu */
window.DYNA_ENQUETES_BIENTOT = [
  { num: 2, title: 'Le Fantôme du Château', tagline: 'Des bruits la nuit, et un tableau qui change de place.' },
  { num: 3, title: 'Le Dernier Service', tagline: 'Un chef s\'effondre en plein coup de feu, un soir de réveillon.' }
];
