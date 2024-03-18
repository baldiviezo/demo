CREATE TABLE `pac3200` (
  `id_pac` int(11) NOT NULL AUTO_INCREMENT,
  `voltaje_pac` FLOAT NOT NULL,
  `corriente_pac` FLOAT NOT NULL,
  `frecuencia_pac` FLOAT NOT NULL,
  PRIMARY KEY (`id_pac`)
);

INSERT INTO `pac3200` VALUES
(1,220,1,50);