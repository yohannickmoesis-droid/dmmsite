"use client";

import { useState } from "react";

const DEFIS = [
  {
    titre: "Perte d'identité",
    lignes: ["Perte", "d'identité"],
    desc: "Qui suis-je sans mon uniforme, mon grade ou mon statut ?",
  },
  {
    titre: "Choc culturel militaire / civil",
    lignes: ["Choc culturel", "militaire / civil"],
    desc: "Quand les codes appris dans l'institution ne fonctionnent plus dans le monde civil.",
  },
  {
    titre: "La légitimité à reconstruire",
    lignes: ["Légitimité à", "reconstruire"],
    desc: "Sur quoi repose ma valeur lorsque l'institution n'est plus là ?",
  },
  {
    titre: "Perte de sens",
    lignes: ["Perte", "de sens"],
    desc: "Comment retrouver une mission qui donne envie de se lever le matin ?",
  },
  {
    titre: "Perte du collectif",
    lignes: ["Perte du", "collectif"],
    desc: "Recréer du lien après avoir quitté l'esprit de corps.",
  },
  {
    titre: "Vos valeurs, votre socle",
    lignes: ["Vos valeurs,", "votre socle"],
    desc: "Définir ce qui compte vraiment lorsque les valeurs ne sont plus imposées par l'institution.",
  },
  {
    titre: "Le déni de la peur",
    lignes: ["Le déni", "de la peur"],
    desc: "Reconnaître les inquiétudes liées au changement et à l'incertitude.",
  },
  {
    titre: "Le deuil de l'institution",
    lignes: ["Le deuil de", "l'institution"],
    desc: "Accepter la fin d'un chapitre qui a structuré une partie de sa vie.",
  },
  {
    titre: "Les comportements d'évitement",
    lignes: ["Comportements", "d'évitement"],
    desc: "Quand on cherche inconsciemment à recréer l'univers militaire ailleurs.",
  },
  {
    titre: "Accepter d'être accompagné",
