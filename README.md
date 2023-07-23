# ApiReqresProject
Ce code est un ensemble de tests d'API utilisant Cypress, un framework de test JavaScript de bout en bout. Il effectue une série de requêtes HTTP vers l'API de Reqres (https://reqres.in), une API RESTful qui simule les actions de création, de lecture, de mise à jour et de suppression d'utilisateurs.
Les tests effectués sont les suivants :

GET - Liste des utilisateurs : Ce test effectue une requête GET pour récupérer une liste d'utilisateurs. Il vérifie que le statut de la réponse est 200 (OK) et que la liste des utilisateurs n'est pas vide.

GET - utilisateur Unique : Ce test effectue une requête GET pour récupérer un utilisateur spécifique par son ID. Il vérifie que le statut de la réponse est 200 et que l'ID de l'utilisateur est correct.

GET - Utilisateur non Trouvé : Ce test effectue une requête GET pour un ID d'utilisateur qui n'existe pas. Il vérifie que le statut de la réponse est 404 (Non trouvé).

GET - Liste les ressources : Ce test effectue une requête GET pour récupérer une liste de ressources. Il vérifie que le statut de la réponse est 200 et que la liste des ressources n'est pas vide.

GET - Liste une seule ressource unique : Ce test effectue une requête GET pour récupérer une ressource spécifique par son ID. Il vérifie que le statut de la réponse est 200 et que l'ID de la ressource est correct.

GET - Ressource non Trouvé : Ce test effectue une requête GET pour un ID de ressource qui n'existe pas. Il vérifie que le statut de la réponse est 404.

POST - Créer un utilisateur : Ce test effectue une requête POST pour créer un nouvel utilisateur. Il vérifie que le statut de la réponse est 201 (Créé) et que les données de l'utilisateur correspondent à celles envoyées dans la requête.

PUT - Mettre à jour un utilisateur : Ce test effectue une requête PUT pour mettre à jour les données d'un utilisateur existant. Il vérifie que le statut de la réponse est 200 et que les données de l'utilisateur ont été mises à jour correctement.

PATCH - Mettre à jour un utilisateur : Ce test effectue une requête PATCH pour mettre à jour partiellement les données d'un utilisateur existant. Il vérifie que le statut de la réponse est 200 et que les données de l'utilisateur ont été mises à jour correctement.

DELETE - Supprimer un utilisateur : Ce test effectue une requête DELETE pour supprimer un utilisateur existant. Il vérifie que le statut de la réponse est 204 (No Content).

POST - Enregistrement Réussi : Ce test effectue une requête POST pour enregistrer un nouvel utilisateur. Il vérifie que le statut de la réponse est 200 et que l'utilisateur a reçu un token.

POST - Enregistrement non Réussi : Ce test effectue une requête POST pour enregistrer un utilisateur avec des données invalides. Il vérifie que le statut de la réponse est 400 (Bad Request).

POST - Connection Réussi : Ce test effectue une requête POST pour connecter un utilisateur existant. Il vérifie que le statut de la réponse est 200 et que l'utilisateur a reçu un token.

POST - Connection non Réussi : Ce test effectue une requête POST pour connecter un utilisateur avec des données invalides. Il vérifie que le statut de la réponse est 400.

GET - Réponse Rétardée : Ce test effectue une requête GET avec un délai. Il vérifie que le statut de la réponse est 200 et que la liste des utilisateurs n'est pas vide.

Ce code utilise également la bibliothèque Faker pour générer des données aléatoires pour les tests de création et de mise à jour d'utilisateurs.
