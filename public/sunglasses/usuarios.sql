-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 06, 2025 at 02:28 PM
-- Server version: 8.0.30
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `muustack_muubot`
--

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL,
  `cte_id` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `correo` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `documento` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `empresa` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ciudad` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pais` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `ultimo_inicio_sesion` datetime DEFAULT NULL,
  `tipo_perfil` tinyint NOT NULL DEFAULT '0',
  `estado` tinyint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `cte_id`, `nombre`, `apellido`, `correo`, `documento`, `empresa`, `ciudad`, `pais`, `password`, `fecha_registro`, `ultimo_inicio_sesion`, `tipo_perfil`, `estado`) VALUES
(2, '1', 'Nicolas', 'Garcia', 'soporteweb@muustack.com', '50113552', 'Muustack.com', 'Pando', '1', '$2y$10$UGE7A0o0ZOGDnMZhmJoF3uroLu9ZHp5utr831oC5ly9lAJ4seKCau', '2025-02-28 14:31:28', '2025-05-05 14:44:46', 2, 1),
(3, '2', 'Sebastian', 'Gimenez', 'msalvezgimenez@gmail.com', '43495066', 'Mwebdevelopers', 'Montevideo', '1', '$2y$10$F3p.AdjLO6YP2n0O4NpfTO4XO5hJb8X8tqNZFNYQg8LIj0YL4rsTe', '2025-02-28 21:13:26', NULL, 0, 0),
(4, '1', 'Marco', 'Lorente', 'marcos@lorente.com', '12345678', 'Lorente', 'Buenos Aires', 'Argentina', '$2y$10$wvJMIRoHiK6/8dcLq3UBae60/LBy4QwqQoBtnqZ4zpCP7lysAv6Oi', '2025-02-28 21:15:03', NULL, 0, 0),
(5, '1', 'Laura', 'Gaitan', 'laura@prueba.com', '7894561', 'Prueba', 'Bogotá', 'Colombia', '$2y$10$pp1wWno70Pz/6ZiBKu3f6uYuilVACzko.qApBRCB8USkJZgoX6aC6', '2025-02-28 21:18:42', NULL, 0, 1),
(6, '2', 'Javier', 'Manzano', 'nicolasg99dr@gmail.com', '50113552', 'Muustack', 'Pando', '1', '$2y$10$K7sxaqhoTlyLdhUkZSZXuOcIWSRxex9/OfMQhH2Xs7pT9lkbFSIoy', '2025-04-11 11:26:50', '2025-05-05 14:44:38', 0, 1),
(7, '2', 'Guillermo', 'fuentes', 'prueba1@gmail.com', '50113552', 'Aerean', 'Pando', '1', '$2y$10$5V38eiu0fzLziCcXmcor.uIlKQ0bli.HysBY2MvGF8t/uf12JX7Uq', '2025-04-11 12:23:57', '2025-05-05 14:40:57', 0, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
