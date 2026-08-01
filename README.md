# QA App – Interface Utilisateur + Admin

Deux interfaces :
- **/** → Les utilisateurs posent des questions (style chat IA)
- **/admin** → Tu vois les questions et tu réponds (mot de passe requis)

Les réponses apparaissent en temps réel côté utilisateur.

## Mot de passe admin par défaut
`arthur2026`

Tu peux le changer avec la variable d'environnement `ADMIN_PASSWORD`.

---

## Déploiement gratuit sur Render (recommandé)

1. Crée un compte sur [https://render.com](https://render.com)
2. Clique sur **New +** → **Web Service**
3. Connecte ton GitHub (ou uploade le dossier en zip)
4. Configure :
   - **Runtime** : Node
   - **Build Command** : `npm install`
   - **Start Command** : `npm start`
   - **Instance Type** : Free
5. Dans **Environment** ajoute :
   - `ADMIN_PASSWORD` = ton mot de passe secret
6. Clique sur **Create Web Service**

Une fois déployé tu auras une URL du type :
`https://ton-app.onrender.com`

- Utilisateurs → `https://ton-app.onrender.com`
- Toi (admin) → `https://ton-app.onrender.com/admin`

---

## Test en local

```bash
npm install
npm start
```

Puis ouvre :
- http://localhost:3000
- http://localhost:3000/admin

---

## Notes
- Base de données SQLite (fichier `qa.db` créé automatiquement)
- Temps réel avec Socket.io
- Aucune inscription nécessaire pour les utilisateurs
