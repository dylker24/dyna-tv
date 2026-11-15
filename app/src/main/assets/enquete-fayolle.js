/* Dyna Enquêtes — Enquête 1 : « Mort au château de Fayolle »
 *
 * SOLUTION (pour aider sans jouer) :
 * Julien Brassac, le notaire de la famille, détournait depuis des années l'argent du fonds familial (1,2 M€).
 * La vente du château annoncée par Édouard imposait un audit lundi : il allait être découvert.
 * Édouard l'avait compris et lui avait donné rendez-vous sur la tour à 23 h. Brassac l'a frappé avec la statuette
 * de la bibliothèque puis l'a fait basculer pour faire croire à une chute (23 h 22). Il a quitté le château à 23 h 51,
 * pas à 22 h 30 comme il le prétend. Le dimanche, il est revenu et a tué Raymond, le jardinier, qui l'avait vu sur la tour.
 * Antoine (dettes, rendez-vous avec un créancier au portail), Hélène (au téléphone avec sa sœur) et Clémence
 * (avec Nadia à la réception) sont des fausses pistes. */
window.DYNA_ENQUETES.unshift({
  id: 'fayolle',
  num: 1,
  title: 'Mort au château de Fayolle',
  place: 'Vallée de la Vézère',
  tagline: 'Le châtelain est retrouvé au pied de sa tour, la nuit où il a annoncé déshériter tout le monde. Une enquête en trois actes.',
  duration: 'Environ 2 h',

  call: [
    { who: 'Gendarmerie', text: 'Dylan, Léna, c\'est le commandant Roussel, brigade de recherches de Périgueux. Je n\'ai personne de libre et j\'ai besoin de vous, tout de suite.' },
    { who: 'Gendarmerie', text: 'Édouard de Fayolle, soixante-sept ans, le propriétaire du château-hôtel de Fayolle, a été retrouvé mort ce matin au pied de la tour nord. Pour tout le monde, c\'est une chute.' },
    { who: 'Gendarmerie', text: 'Sauf qu\'hier soir, au dîner, il a annoncé devant toute sa famille qu\'il vendait le château et qu\'il changeait son testament lundi. Personne n\'a dormi tranquille cette nuit-là. Allez-y, et ne vous fiez à personne.' }
  ],
  intro: 'Dimanche, 8 h 15. Le brouillard colle encore à la Vézère. Devant le château, un fourgon de la gendarmerie, la famille en robe de chambre, et Raymond, le vieux jardinier, assis sur un banc, la casquette entre les mains. C\'est lui qui a trouvé le corps.',

  acts: [
    { num: 1, title: 'La nuit du dîner', text: '' },
    { num: 2, title: 'Un deuxième mort', unlock: ['autopsie', 'portail', 'silhouette'],
      text: 'Dimanche, 16 h 20. Un cri dans le parc. Nadia, la réceptionniste, a trouvé Raymond, le jardinier, étendu dans l\'orangerie, une blessure à la tête. Il est mort. Ce matin encore, il vous parlait d\'une silhouette sur la tour. Le tueur est toujours là, et il fait le ménage.' },
    { num: 3, title: 'La fuite', unlock: ['comptes', 'carnet', 'retour'],
      text: 'Lundi, 9 h. Le commandant Roussel vous appelle : « Brassac a réservé un vol Bordeaux–Lisbonne pour ce soir, 19 h 05. Aller simple. Son cabinet de Sarlat est ouvert ce matin, et sa secrétaire dit qu\'il broie des papiers depuis une heure. » Il faut y aller maintenant.' }
  ],

  clues: {
    corps:       { name: 'Le corps au pied de la tour', icon: 'pin', text: 'Édouard gît dans les graviers, au pied de la tour nord. Il porte encore son costume du dîner. Sa montre est brisée.' },
    montre:      { name: 'La montre arrêtée', icon: 'clock', text: 'La montre d\'Édouard s\'est arrêtée à 23 h 22, le verre éclaté.' },
    tissu:       { name: 'Le bout de tissu', icon: 'paper', text: 'Sur la terrasse de la tour, accroché au parapet : un petit morceau de lin beige, arraché à une veste.' },
    statuette:   { name: 'Le socle vide', icon: 'box', text: 'Dans la bibliothèque, le socle de la statuette en bronze (un cerf, deux kilos) est vide. Clémence jure qu\'elle y était encore à 21 h.' },
    testament:   { name: 'L\'annonce du dîner', icon: 'mail', text: 'Au dîner, à 20 h 30, Édouard a annoncé : vente du château à un groupe hôtelier, et nouveau testament lundi au profit d\'une fondation. Sa famille ne touchera presque rien.' },
    photos:      { name: 'Les photos du dîner', icon: 'camera', text: 'Sur les photos du dîner : Antoine en costume noir, Clémence en robe verte, Hélène en châle rouge, Julien Brassac, le notaire, en veste de lin beige.' },
    portail:     { name: 'Le registre du portail', icon: 'lock', text: 'Le portail électronique enregistre chaque badge. Voiture de Julien Brassac : sortie à 23 h 51. Une voiture inconnue : entrée à 23 h 08, sortie à 23 h 38.' },
    silhouette:  { name: 'Ce qu\'a vu Raymond', icon: 'eye', text: 'Raymond, le jardinier, fumait sa pipe vers 23 h 20 : « Une lampe sur la terrasse de la tour, et une silhouette en veste claire. Je me suis dit que c\'était Monsieur qui prenait l\'air. »' },
    dettes:      { name: 'Les dettes d\'Antoine', icon: 'paper', text: 'Antoine doit 90 000 € à des gens peu recommandables, depuis le casino de Bordeaux. Son père a refusé de payer samedi après-midi.' },
    somniferes:  { name: 'Les somnifères d\'Hélène', icon: 'drop', text: 'Sur la table de nuit d\'Hélène, une boîte de somnifères entamée. Elle dit en avoir pris un à 22 h 30.' },
    alibiclem:   { name: 'Clémence à la réception', icon: 'people', text: 'Nadia, la réceptionniste de nuit, confirme : Clémence a fait les comptes avec elle à la réception de 22 h 15 à 23 h 30, sans bouger.' },
    autopsie:    { name: 'L\'autopsie', icon: 'flask', text: 'Le légiste est formel : Édouard a reçu un coup violent à l\'arrière du crâne AVANT de tomber. Un objet lourd, avec des arêtes. La chute a servi à maquiller le crime.' },
    raymond:     { name: 'La mort de Raymond', icon: 'pin', text: 'Raymond a été frappé à la tête dans l\'orangerie, dimanche entre 15 h 30 et 16 h. Rien n\'a été volé, sauf une chose : son carnet n\'est plus dans sa poche.' },
    mocassins:   { name: 'Les empreintes de l\'orangerie', icon: 'foot', text: 'Dans la terre de l\'orangerie, des empreintes de chaussures de ville à semelle lisse, taille 42. Pas des bottes, pas des baskets.' },
    carnet:      { name: 'La page du carnet', icon: 'paper', text: 'En passant un crayon sur la page de dessous, l\'écriture de Raymond réapparaît : « Tour, 23 h 20, veste claire. Le notaire ? Le dire aux gendarmes demain. »' },
    arme:        { name: 'La statuette dans l\'étang', icon: 'box', text: 'Le cerf en bronze de la bibliothèque, repêché dans l\'étang. Ses bois ont exactement la forme de la blessure d\'Édouard. On l\'a essuyé avant de le jeter.' },
    cameraport:  { name: 'La caméra du portail', icon: 'camera', text: 'La caméra du portail montre Antoine dehors, de 23 h 10 à 23 h 36, en train de parler avec un homme sorti de la voiture inconnue. Il lui tend une enveloppe.' },
    appels:      { name: 'Les appels d\'Hélène', icon: 'phone', text: 'Relevé de l\'opérateur : Hélène a appelé sa sœur, à Lyon, de 22 h 52 à 23 h 47. Le somnifère, elle ne l\'a pris qu\'après.' },
    comptes:     { name: 'Les comptes du fonds familial', icon: 'paper', text: 'Dans les classeurs du bureau de Clémence : le fonds de la famille, géré par Julien Brassac depuis quinze ans. Il manque 1,2 million d\'euros, par petits virements vers une société au Portugal.' },
    audit:       { name: 'La lettre du groupe hôtelier', icon: 'mail', text: 'Lettre des avocats du groupe acheteur : « La vente impose un audit complet des comptes de la famille, à partir du lundi 9 h. » Le lundi suivant le meurtre.' },
    retour:      { name: 'Le retour de Brassac', icon: 'car', text: 'Le registre de la réception : Julien Brassac est revenu au château dimanche à 15 h 25, « pour des papiers de la succession ». Reparti à 16 h 05. Il portait des mocassins.' },
    vol:         { name: 'Le billet pour Lisbonne', icon: 'ticket', text: 'Réservé dimanche à 22 h : un aller simple Bordeaux–Lisbonne, lundi 19 h 05, au nom de Julien Brassac.' },
    telephone:   { name: 'Le téléphone d\'Édouard', icon: 'phone', text: 'Dans le coffre du cabinet de Brassac : le téléphone d\'Édouard, que tout le monde cherchait. Écran fissuré, mais il s\'allume.' },
    enregistrement: { name: 'Le mémo vocal de 23 h 18', icon: 'sound', text: 'Un mémo vocal lancé par Édouard à 23 h 18 : « Julien, tu as volé ma famille pendant quinze ans. Lundi, je préviens les gendarmes. » Une voix d\'homme : « Tu ne feras rien du tout, Édouard. » Un choc. Puis plus rien.' }
  },

  locations: [
    { id: 'pied', act: 1, name: 'Le pied de la tour', text: 'Des graviers, une bâche blanche, et la tour nord qui monte dans le brouillard. Le corps n\'a pas encore été emporté.',
      spots: [
        { id: 'f1', name: 'Le corps', text: 'Vous soulevez la bâche. Édouard est sur le dos, les yeux ouverts. Il a la tête abîmée, et une main crispée sur rien.', clue: 'corps' },
        { id: 'f2', name: 'Le poignet', text: 'Une belle montre ancienne. Le verre est en miettes, les aiguilles ne bougent plus.', clue: 'montre' },
        { id: 'f3', name: 'Les graviers autour', text: 'Des traces de pas partout : les gendarmes, Raymond, la famille. Impossible d\'en tirer quoi que ce soit.' }
      ] },
    { id: 'tour', act: 1, name: 'La terrasse de la tour', text: 'Cent douze marches en colimaçon. En haut, une petite terrasse ronde avec un parapet à hauteur de taille. La vue sur la Vézère est vertigineuse.',
      spots: [
        { id: 'w1', name: 'Le parapet', text: 'Trop haut pour basculer par accident. Il faut se pencher beaucoup… ou être poussé. Quelque chose est accroché à une aspérité de la pierre.', clue: 'tissu' },
        { id: 'w2', name: 'Le sol de la terrasse', text: 'Une petite tache sombre, à peine visible, que quelqu\'un a essayé d\'essuyer. Du sang, peut-être.' },
        { id: 'w3', name: 'L\'escalier', text: 'Une lampe torche éteinte, posée sur une marche. Celle d\'Édouard, d\'après Clémence. Pas d\'empreintes exploitables.' }
      ] },
    { id: 'biblio', act: 1, name: 'La bibliothèque', text: 'Des boiseries, des milliers de livres, l\'odeur du cigare. C\'est ici qu\'Édouard et le notaire ont pris le digestif après le dîner.',
      spots: [
        { id: 'b1', name: 'La cheminée', text: 'Un socle en marbre, avec une petite plaque : « Le Cerf, bronze, 1882 ». Il n\'y a plus rien dessus.', clue: 'statuette' },
        { id: 'b2', name: 'Les verres', text: 'Deux verres de cognac, deux mégots de cigare. Édouard et Brassac sont restés ici de 21 h à 22 h 20, d\'après le maître d\'hôtel.' }
      ] },
    { id: 'salon', act: 1, name: 'Le grand salon', text: 'La table du dîner n\'a pas été débarrassée. Des bougies fondues, des verres à moitié pleins, une chaise renversée.',
      spots: [
        { id: 's1', name: 'Le téléphone de Clémence', text: 'Clémence vous montre les photos qu\'elle a prises pendant le dîner, avant l\'annonce. Tout le monde sourit encore.', clue: 'photos' },
        { id: 's2', name: 'La chaise renversée', text: '« C\'est Antoine, après l\'annonce de papa, explique Clémence. Il est sorti en hurlant. »' }
      ] },
    { id: 'chambres', act: 1, name: 'L\'aile des chambres', text: 'Un long couloir, des portes en chêne. La famille dormait toute ici cette nuit.',
      spots: [
        { id: 'c1', name: 'La chambre d\'Hélène', text: 'Le lit est à peine défait. Sur la table de nuit, une boîte de médicaments.', clue: 'somniferes' },
        { id: 'c2', name: 'La chambre d\'Antoine', text: 'Un sac de voyage jamais défait, et des tickets du casino de Bordeaux dans la poche d\'une veste.' },
        { id: 'c3', name: 'La chambre d\'Édouard', text: 'Le lit n\'a pas servi. Son téléphone n\'est nulle part, ni ici ni sur le corps. Étrange, pour un homme qui ne le lâchait jamais.' }
      ] },
    { id: 'reception', act: 1, name: 'La réception', text: 'Un comptoir en noyer, un ordinateur, et Nadia, la réceptionniste de nuit, qui n\'est pas rentrée chez elle.',
      spots: [
        { id: 'r1', name: 'L\'ordinateur du portail', text: 'Nadia vous ouvre le registre des entrées et sorties de la nuit.', clue: 'portail' }
      ] },
    { id: 'orangerie', act: 2, name: 'L\'orangerie', text: 'Une serre en verre et en fer forgé, pleine de citronniers en pots. Le corps de Raymond est encore là, sous un drap.',
      spots: [
        { id: 'o1', name: 'Le corps de Raymond', text: 'Frappé à la tempe, par derrière. Sa pipe est tombée à côté de lui. Ses poches ont été fouillées.', clue: 'raymond' },
        { id: 'o2', name: 'La terre des allées', text: 'Fraîchement arrosée. Des empreintes nettes y sont restées.', clue: 'mocassins' },
        { id: 'o3', name: 'La cabane de Raymond', text: 'Au fond de l\'orangerie, son petit coin : un fauteuil, une radio, une boîte de tabac… et un carnet vierge dont la première page a été arrachée.', clue: 'carnet',
          choice: { q: 'La première page a été arrachée. Comment récupérer ce qu\'il avait écrit ?', options: [
            { label: 'Chercher la page déchirée dans le parc', good: false, text: 'Une heure à fouiller les allées sous la pluie. Rien. Le tueur l\'a emportée, évidemment.' },
            { label: 'Passer un crayon à plat sur la page de dessous', good: true, text: 'Raymond appuyait fort. Sous la mine du crayon, les lettres creusées dans le papier réapparaissent une à une.' },
            { label: 'Demander à Nadia si Raymond lui avait parlé', good: false, text: 'Nadia secoue la tête : « Il ne parlait à personne, Raymond. Il notait tout dans son carnet, c\'est tout. »' }
          ] } }
      ] },
    { id: 'etang', act: 2, name: 'L\'étang', text: 'Un étang sombre au bout du parc, entouré de saules. Les gendarmes ont amené un plongeur.',
      spots: [
        { id: 'e1', name: 'Faire sonder l\'étang', text: 'Au bout de vingt minutes, le plongeur remonte quelque chose de lourd, enroulé dans des algues.', clue: 'arme' }
      ] },
    { id: 'bureau', act: 2, name: 'Le bureau de Clémence', text: 'Le bureau de la direction de l\'hôtel. Des classeurs du sol au plafond. Clémence vous ouvre tout, les yeux rouges.',
      spots: [
        { id: 'd1', name: 'Les classeurs du fonds familial', text: 'Quinze ans de relevés. Vous comparez les années. Les petits virements vers une société de Porto sautent aux yeux.', clue: 'comptes' },
        { id: 'd2', name: 'Le courrier de la semaine', text: 'Une enveloppe épaisse, à l\'en-tête d\'un grand cabinet d\'avocats parisien.', clue: 'audit' }
      ] },
    { id: 'registre', act: 2, name: 'Le registre des visites', text: 'À la réception, le grand cahier où l\'on note chaque visiteur.',
      spots: [
        { id: 'g1', name: 'La page de dimanche', text: 'Une seule visite cet après-midi, notée de la main de Nadia.', clue: 'retour' },
        { id: 'g2', name: 'Les images du portail', text: 'Nadia retrouve la vidéo de samedi soir, de 23 h à minuit.', clue: 'cameraport' }
      ] },
    { id: 'cabinet', act: 3, name: 'Le cabinet de Maître Brassac, Sarlat', text: 'Une belle façade en pierre blonde, place de la Liberté. Derrière la porte, le bruit d\'une broyeuse à papier qui ne s\'arrête pas.',
      spots: [
        { id: 'x1', name: 'Entrer', clue: 'vol',
          choice: { q: 'La broyeuse tourne. Le commandant a son mandat dans une heure. Que faites-vous ?', options: [
            { label: 'Attendre le mandat, dehors, pour faire les choses dans les règles', good: false, text: 'Quand vous entrez enfin, la broyeuse est pleine et Brassac sourit. Heureusement, le commandant a fait saisir le sac de confettis… mais vous avez perdu une heure. Il faut entrer maintenant.' },
            { label: 'Entrer tout de suite avec le commandant : il y a urgence, des preuves sont en train de disparaître', good: true, text: 'Le commandant pousse la porte. Brassac, en bras de chemise, laisse tomber une liasse de papiers. Sur son bureau : un passeport et une carte d\'embarquement imprimée.' },
            { label: 'Appeler Brassac pour lui demander de sortir', good: false, text: 'Il décroche, très calme : « J\'arrive, je termine un dossier. » La broyeuse accélère. Mauvaise idée : il faut entrer.' }
          ] } },
        { id: 'x2', name: 'Le coffre-fort', needsSpot: 'x1', clue: 'telephone',
          choice: { q: 'Brassac refuse de donner le code du coffre. Que faites-vous ?', options: [
            { label: 'Essayer la date de naissance de Brassac', good: false, text: 'Refusé. Brassac ricane. Il faut réfléchir à ce qui compte pour lui.' },
            { label: 'Essayer le code de la société de Porto qui reçoit l\'argent volé', good: true, text: 'Clic. La porte s\'ouvre. À l\'intérieur, des liasses de billets… et un téléphone à l\'écran fissuré.' },
            { label: 'Faire venir un serrurier', good: false, text: 'Il faudrait trois heures. Le vol est à 19 h 05. Trouvez le code vous-mêmes : qu\'est-ce que Brassac a de plus précieux ?' }
          ] } },
        { id: 'x3', name: 'Écouter le téléphone', needsSpot: 'x2', text: 'Le dernier mémo vocal date de samedi, 23 h 18. Vous appuyez sur lecture. Dans le bureau, plus personne ne bouge.', clue: 'enregistrement' }
      ] }
  ],

  suspects: [
    { id: 'clemence', act: 1, name: 'Clémence de Fayolle', role: 'La fille, directrice de l\'hôtel', age: 34, color: '#8FB08A',
      intro: 'C\'est elle qui fait tourner le château-hôtel depuis cinq ans. Elle y a mis toute sa vie.',
      questions: [
        { id: 'cl1', q: 'Que s\'est-il passé au dîner ?', a: 'Papa a fait tinter son verre et il a tout lâché : la vente du château à un groupe hôtelier, et un nouveau testament lundi pour une fondation. Tout ce que j\'ai construit ici… vendu. Antoine a renversé sa chaise. Hélène est devenue blanche.', clue: 'testament' },
        { id: 'cl2', q: 'Où étiez-vous entre 23 h et minuit ?', a: 'À la réception, avec Nadia. On a fait les comptes du mois jusqu\'à 23 h 30. J\'avais besoin de m\'occuper les mains. Ensuite je suis montée me coucher.' },
        { id: 'cl3', q: 'Qui pouvait en vouloir à votre père ?', a: 'Ce soir-là ? Tout le monde. Mais tuer… Antoine est un idiot, pas un assassin. Et Julien, le notaire, était comme un frère pour papa. Il est resté tard pour le calmer, je crois.' },
        { id: 'cl4', q: 'Qui gérait l\'argent de la famille ?', act: 2, a: 'Julien Brassac, depuis toujours. Papa lui faisait une confiance aveugle. Mes classeurs sont dans le bureau, prenez tout ce que vous voulez.' }
      ] },
    { id: 'antoine', act: 1, name: 'Antoine de Fayolle', role: 'Le fils', age: 39, color: '#9FA8C9',
      intro: 'Beau parleur, costume froissé, les yeux cernés. Il vit à Bordeaux et ne venait plus beaucoup au château.',
      questions: [
        { id: 'an1', q: 'Où étiez-vous à 23 h 20 ?', a: 'Dans ma chambre. J\'étais furieux, je suis monté directement après le dîner. Je n\'ai pas bougé de la nuit.' },
        { id: 'an2', q: 'Pourquoi êtes-vous venu ce week-end ?', a: 'Pour voir mon père. C\'est interdit ? … Bon. Pour lui demander de l\'aide. J\'ai des dettes. Il a refusé. Il a dit qu\'il ne paierait plus jamais pour moi.', clue: 'dettes' },
        { id: 'an3', q: 'Une voiture inconnue est entrée à 23 h 08. Qui était-ce ?', needs: ['portail'], a: '… D\'accord. Je n\'étais pas dans ma chambre. Un type est venu chercher un acompte. Je l\'ai retrouvé au portail, je lui ai donné tout ce que j\'avais. Mais je n\'ai jamais approché la tour, je vous le jure.' },
        { id: 'an4', q: 'La caméra vous montre au portail de 23 h 10 à 23 h 36.', act: 2, needs: ['cameraport'], a: 'Voilà. Vous voyez. J\'étais en train de me faire menacer par un usurier pendant qu\'on tuait mon père. Je ne sais pas si c\'est mieux ou pire.' }
      ] },
    { id: 'helene', act: 1, name: 'Hélène de Fayolle', role: 'La seconde épouse', age: 61, color: '#C98E8E',
      intro: 'Mariée à Édouard depuis douze ans, avec un contrat de mariage qui ne lui laisse presque rien. Châle rouge, voix douce.',
      questions: [
        { id: 'he1', q: 'Où étiez-vous cette nuit ?', a: 'Dans ma chambre. J\'ai pris un somnifère à 22 h 30, je n\'ai rien entendu avant ce matin.' },
        { id: 'he2', q: 'Le nouveau testament vous touchait aussi ?', a: 'Avec mon contrat de mariage, je n\'avais déjà presque rien. Alors non, l\'argent ne m\'empêchait pas de dormir. C\'est Édouard qui me manque, pas sa fortune.' },
        { id: 'he3', q: 'Votre lit n\'a presque pas servi. Vous avez vraiment dormi ?', needs: ['somniferes'], a: 'Non. J\'ai menti. J\'ai appelé ma sœur à Lyon, longtemps. Je lui ai dit que j\'allais quitter Édouard. Je ne voulais pas qu\'on le sache. Vérifiez mon téléphone si vous voulez.', clue: 'appels' }
      ] },
    { id: 'brassac', act: 1, name: 'Maître Julien Brassac', role: 'Le notaire de la famille', age: 58, color: '#D6B35C',
      intro: 'Notaire à Sarlat, ami d\'Édouard depuis trente ans. Il est revenu dès 9 h ce matin « pour aider la famille ». Très calme, très serviable.',
      questions: [
        { id: 'jb1', q: 'Quand avez-vous quitté le château samedi ?', a: 'Vers 22 h 30, après un cognac avec Édouard dans la bibliothèque. Il était bouleversé, mais lucide. J\'étais chez moi à Sarlat avant 23 h.' },
        { id: 'jb2', q: 'Que pensiez-vous de la vente du château ?', a: 'Une folie, je le lui ai dit. Mais c\'était son droit. Mon rôle était de préparer les papiers pour lundi, rien de plus.' },
        { id: 'jb3', q: 'Le portail vous fait sortir à 23 h 51, pas à 22 h 30.', needs: ['portail'], a: 'Ah… J\'ai dû me tromper d\'heure. Je suis resté un peu dans ma voiture, au parking, à réfléchir. Ce n\'est pas un crime de réfléchir.' },
        { id: 'jb4', q: 'Vous portiez une veste en lin beige au dîner.', needs: ['photos', 'tissu'], a: 'Comme la moitié du Périgord en été. Et alors ? Je n\'ai pas mis les pieds dans cette tour depuis des années.' },
        { id: 'jb5', q: 'Il manque 1,2 million d\'euros dans le fonds que vous gérez.', act: 2, needs: ['comptes'], a: 'Des placements. Complexes. Je ne m\'attends pas à ce que des amateurs comprennent. Je ne répondrai plus qu\'en présence de mon avocat.' },
        { id: 'jb6', q: 'Le mémo vocal d\'Édouard. C\'est votre voix.', act: 3, needs: ['enregistrement'], a: '… Il allait tout détruire. Ma réputation, mon étude, trente ans de travail. Je voulais juste lui parler. La statuette était dans ma main avant que je comprenne ce que je faisais.' }
      ] },
    { id: 'raymond', act: 1, deadAct: 2, name: 'Raymond Lacoste', role: 'Le jardinier', age: 72, color: '#B7A99A',
      intro: 'Cinquante ans au service des Fayolle. Il a trouvé le corps à 6 h 50, en allant ouvrir la serre.',
      questions: [
        { id: 'ra1', q: 'Comment avez-vous trouvé Monsieur ?', a: 'J\'allais à l\'orangerie, comme tous les matins. Il était là, dans les graviers. J\'ai tout de suite su qu\'il n\'y avait plus rien à faire.' },
        { id: 'ra2', q: 'Avez-vous remarqué quelque chose cette nuit ?', a: 'Je fumais ma pipe sous le cèdre, vers 23 h 20. Il y avait de la lumière tout en haut de la tour. Une silhouette, avec une veste claire. Je me suis dit que c\'était Monsieur qui prenait l\'air. Je l\'ai noté dans mon carnet, je note tout.', clue: 'silhouette' },
        { id: 'ra3', q: 'Monsieur avait-il des soucis ces derniers temps ?', a: 'Il parlait souvent tout seul dans le parc, avec son téléphone. Il enregistrait des notes, des idées. Vendredi, il m\'a dit : « Raymond, il y a un loup dans la bergerie. » Je n\'ai pas compris.' }
      ] },
    { id: 'nadia', act: 1, name: 'Nadia Benali', role: 'La réceptionniste de nuit', age: 27, color: '#A3B7E0',
      intro: 'Elle était de garde toute la nuit à la réception. Elle n\'a pas dormi, et ça se voit.',
      questions: [
        { id: 'na1', q: 'Clémence était avec vous cette nuit ?', a: 'Oui, de 22 h 15 à 23 h 30, on a fait les comptes ensemble. Elle pleurait un peu. Elle n\'a pas quitté la réception.', clue: 'alibiclem' },
        { id: 'na2', q: 'Avez-vous vu quelqu\'un passer vers 23 h ?', a: 'Personne par la réception. Mais la tour a sa propre porte, côté parc. Et j\'ai entendu une voiture démarrer tard, vers minuit moins dix.' },
        { id: 'na3', q: 'Brassac est-il revenu ce week-end ?', act: 2, a: 'Oui, dimanche après-midi, pour des papiers. Il a demandé où était Raymond, d\'ailleurs. Je l\'ai noté dans le registre.' }
      ] }
  ],

  reports: [
    { id: 'r1', needs: ['corps', 'montre'], from: 'Dr Lemaire, médecin légiste', title: 'Premières conclusions', clue: 'autopsie',
      text: 'Ce n\'est pas une simple chute. Il y a une fracture à l\'arrière du crâne, faite avec un objet lourd aux arêtes vives, avant la chute. Heure de la mort compatible avec la montre : entre 23 h et 23 h 30. On a voulu faire croire à un accident.' },
    { id: 'r2', needs: ['comptes', 'audit'], from: 'Commandant Roussel', title: 'La société de Porto', clue: null,
      text: 'La société portugaise qui reçoit l\'argent du fonds familial s\'appelle « JB Investimentos ». Son gérant : Julien Brassac. L\'audit de lundi allait tout faire tomber. Voilà votre mobile.' }
  ],

  checkpoints: [
    { id: 'p1', needs: ['autopsie', 'tissu'], title: 'Point d\'enquête n°1',
      q: 'Coup à l\'arrière du crâne avant la chute, tissu arraché au parapet. Que s\'est-il passé sur la tour ?',
      options: ['Édouard a glissé en se penchant pour regarder la Vézère', 'Édouard s\'est jeté de la tour après l\'annonce du dîner', 'Quelqu\'un l\'a frappé par derrière, puis l\'a fait basculer pour maquiller le meurtre'],
      answer: 2,
      explain: 'Le parapet est trop haut pour une chute accidentelle, et le coup a été porté avant. C\'est un meurtre déguisé en accident.' },
    { id: 'p2', needs: ['portail', 'montre'], title: 'Point d\'enquête n°2',
      q: 'Brassac dit être parti à 22 h 30. Le portail le fait sortir à 23 h 51, et Édouard meurt à 23 h 22. Qu\'en pensez-vous ?',
      options: ['Il s\'est trompé d\'heure, ça arrive', 'Il a menti : il était encore au château au moment du meurtre', 'Le portail est sûrement mal réglé'],
      answer: 1,
      explain: 'Le registre du portail ne se trompe pas, et la voiture inconnue y est aussi enregistrée à la minute. Brassac a menti pour se donner un alibi.' },
    { id: 'p3', needs: ['alibiclem', 'appels'], title: 'Point d\'enquête n°3',
      q: 'Clémence et Hélène avaient toutes les deux une raison d\'en vouloir à Édouard. Que peut-on dire d\'elles ?',
      options: ['Clémence est suspecte, Hélène est hors de cause', 'Les deux sont hors de cause pour 23 h 22', 'Hélène est suspecte, elle a menti sur son somnifère'],
      answer: 1,
      explain: 'Clémence était à la réception avec Nadia jusqu\'à 23 h 30. Hélène a menti sur son sommeil, mais elle était au téléphone avec sa sœur de 22 h 52 à 23 h 47. Ni l\'une ni l\'autre n\'était sur la tour.' },
    { id: 'p4', needs: ['raymond', 'carnet'], title: 'Point d\'enquête n°4',
      q: 'Pourquoi a-t-on tué Raymond ?',
      options: ['Pour lui voler sa pipe et son tabac', 'Parce qu\'il avait vu le tueur sur la tour et allait le dire aux gendarmes', 'Par hasard, il a surpris un cambrioleur'],
      answer: 1,
      explain: 'Raymond avait noté « veste claire, le notaire ? » et voulait prévenir les gendarmes. Le tueur a pris le carnet sur le corps. Raymond était un témoin à faire taire.' },
    { id: 'p5', needs: ['cameraport', 'mocassins', 'retour'], title: 'Point d\'enquête n°5',
      q: 'Antoine avait le plus gros mobile pour l\'argent. Est-il le tueur ?',
      options: ['Oui, ses dettes l\'ont poussé à bout', 'Non : il était au portail pendant le meurtre, et dimanche les empreintes sont des chaussures de ville, comme celles de Brassac revenu à 15 h 25', 'On ne peut pas savoir'],
      answer: 1,
      explain: 'La caméra montre Antoine au portail de 23 h 10 à 23 h 36. Et dimanche, c\'est Brassac, en mocassins, qui était au château pendant la mort de Raymond.' },
    { id: 'p6', needs: ['comptes', 'audit'], title: 'Point d\'enquête n°6',
      q: 'Pourquoi la vente du château était-elle une catastrophe pour Brassac ?',
      options: ['Il voulait acheter le château lui-même', 'L\'audit de lundi allait révéler les 1,2 million volés dans le fonds familial', 'Il perdait un client fidèle, c\'est tout'],
      answer: 1,
      explain: 'Quinze ans de détournements vers sa société de Porto. La vente imposait un audit dès lundi 9 h. Il fallait qu\'Édouard meure avant.' }
  ],

  final: {
    unlockAct: 3,
    steps: [
      { type: 'suspect', q: 'Qui a tué Édouard de Fayolle ?', answer: 'brassac', label: 'Bon meurtrier' },
      { type: 'suspect', q: 'Et qui a tué Raymond, le jardinier ?', answer: 'brassac', none: 'Un rôdeur, sans lien', label: 'Deuxième meurtre' },
      { type: 'option', q: 'Pourquoi a-t-il tué ?', label: 'Bon mobile',
        options: ['Pour hériter du château', 'Parce qu\'Édouard avait découvert ses détournements, et que l\'audit de lundi allait le faire tomber', 'Par jalousie, à cause d\'Hélène'],
        answer: 1 },
      { type: 'option', q: 'Avec quoi a-t-il frappé Édouard ?', label: 'Bonne arme',
        options: ['La lampe torche de l\'escalier', 'La statuette du cerf, retrouvée dans l\'étang', 'Une pierre du parapet'],
        answer: 1 },
      { type: 'clue', q: 'Quelle preuve le fait tomber pour de bon ?', label: 'Preuve décisive',
        options: ['enregistrement', 'portail', 'tissu', 'carnet', 'dettes', 'somniferes'], answers: ['enregistrement'] }
    ],
    confession: 'Brassac s\'assoit lentement. « Quinze ans. Quinze ans que je remettais tout en ordre avant chaque bilan. Et lui, un soir, il décide de tout vendre. Il m\'a donné rendez-vous sur la tour pour “parler d\'homme à homme”. J\'avais pris le cerf en passant dans la bibliothèque. Je crois que je savais déjà. Et Raymond… Raymond m\'a regardé dimanche comme s\'il savait. Je n\'avais pas le choix. »',
    fateQ: 'Julien Brassac est menotté. Que faites-vous avant que le commandant ne l\'emmène ?',
    fates: [
      { label: 'Le faire avouer devant la famille', text: 'Au château, devant Clémence, Antoine et Hélène, Brassac répète tout. Clémence ne pleure pas. Elle dit simplement : « Papa avait raison, il y avait un loup dans la bergerie. » La vente est annulée. Le château reste aux Fayolle.' },
      { label: 'Le laisser partir directement avec le commandant', text: 'La voiture du commandant s\'éloigne sur la route de Périgueux. Le soir même, Clémence fait poser une plaque dans l\'orangerie : « À Raymond, qui voyait tout. » Brassac est condamné à perpétuité au printemps.' }
    ],
    wrong: 'Ce n\'est pas la bonne personne. Pendant que vous accusez un innocent, le vrai coupable embarque à Bordeaux. On ne le reverra jamais.'
  }
});

/* La Reine des Truffes devient l'enquête n°2 */
if (window.DYNA_ENQUETES[1]) window.DYNA_ENQUETES[1].num = 2;
window.DYNA_ENQUETES_BIENTOT = [
  { num: 3, title: 'Le Dernier Service', tagline: 'Un chef s\'effondre en plein coup de feu, un soir de réveillon. Empoisonné.' },
  { num: 4, title: 'Les Disparus de Lascaux', tagline: 'Trois randonneurs entrent dans une grotte. Deux en ressortent.' }
];
