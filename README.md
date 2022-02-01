# Sujet : 

    Simultaion Coin Flip (en francais Pile ou Face)


# Groupe : 

    Julien CORDIER, Théo DOS SANTOS

# URL (dépôt) : 

    <https://github.com/7H2ST/coinFlip>


# URL (hébergé) : 

    <https://7h2st.github.io/coinFlip/>


# Introduction :
<pre>
<code>
    Nous avons eu l’idée de créer une page web qui simule un lancer de pièce et nous retourne pile ou face. 
</code>
</pre>

# Organisation :

    Nous avons donc réparti le projet en deux parties : Julien sur la partie animation de la pièce (Utilisation de Javascript Native & Keyframes CSS) et Théo sur le design d’interface (Utilisation de HTML 5, CSS 3 & Media Queries).


# Fonctionnalité, Techniques choisies & Répartition des tâches :

    Afin de rendre le jet le plus dynamique possible et ne pas simplement renvoyer une valeur “pile” ou “face”, nous avions eu l’idée d’appliquer une rotation à la pièce qui finirait par montrer le résultat du lancer.
    Pour apporter ce côté aléatoire indispensable Julien a basé le début de l'événement sur une fonction Math.random(). Une fois le résultat obtenu, cela déclenche une animation Keyframe qui fait tourner le SVG grâce aux propriétés de transform-rotate.
    Pendant ce temps Théo est intervenu sur la partie design d’interface de la simulation, en commençant par structurer le HTML de manière la plus optimisé possible afin de faciliter l’utilisation du CSS par la suite (Notamment avec les propriétés FlexBox). Une fois la base de l’interface réalisée, il s’en est suivi de l’adaptation responsive pour téléphone mobile grâce aux Media Queries.


# Difficultés
    La difficulté principale que nous avons rencontré lors de notre projet a été la gestion et résolution de conflit lors de différents “git push”.
    >Nous avons résolu la majorité des problèmes via l’interface graphique proposé par VSCode.

