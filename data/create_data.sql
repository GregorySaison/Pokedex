BEGIN;

INSERT INTO "pokemon" ("name", "illustration", type) VALUES
('Bulbizarre', './img/bulbizarre.png', 'plante'),
('Herbizarre', './img/herbizarre.png', 'plante'),
('Florizarre', './img/florizarre.png', 'plante'),
('Salameche', './img/salameche.png', 'feu'),
('Reptincel', './img/reptincel.png', 'feu'),
('Dracaufeu', './img/dracaufeu.png', 'feu'),
('Carapuce', './img/carapuce.png', 'eau'),
('Carabaffe', './img/carabaffe.png', 'eau'),
('Tortank', './img/tortank.png', 'eau');

COMMIT;