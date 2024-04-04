CREATE TABLE `pac3200` (
  `id_pac` int(11) NOT NULL AUTO_INCREMENT,
  `voltaje_pac` FLOAT NOT NULL,
  `corriente_pac` FLOAT NOT NULL,
  `frecuencia_pac` FLOAT NOT NULL,
  PRIMARY KEY (`id_pac`)
);

INSERT INTO `pac3200` VALUES
(1,220,1,50);


DROP TABLE IF EXISTS `variables`;

CREATE TABLE `variables` (
  `id_var` int(11) NOT NULL AUTO_INCREMENT,
  `modo_var` tinyint(1) NOT NULL,
  `ope_var` tinyint(1) NOT NULL,
  `bomba1_var` tinyint(1) NOT NULL,
  `bomba2_var` tinyint(1) NOT NULL,
  `falla1_var` tinyint(1) NOT NULL,
  `falla2_var` tinyint(1) NOT NULL,
  `valvula_var` tinyint(1) NOT NULL,
  `nivel_var` int(11) NOT NULL,
  `minb1_var` int(11) NOT NULL,
  `hrb1_var` int(11) NOT NULL,
  `minb2_var` int(11) NOT NULL,
  `hrb2_var` int(11) NOT NULL,
  PRIMARY KEY (`id_var`)
)


INSERT INTO `variables` VALUES
(1,0,0,0,0,0,0,1,17,0,0,0,0);