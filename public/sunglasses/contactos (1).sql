-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 06, 2025 at 02:46 PM
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
-- Table structure for table `contactos`
--

CREATE TABLE `contactos` (
  `id_contacto` int NOT NULL,
  `cte_id` int NOT NULL,
  `id_audiencia` json DEFAULT NULL,
  `id_etiqueta` json DEFAULT NULL,
  `numero_contacto` text NOT NULL,
  `nombre_contacto` text,
  `estado_contacto` int DEFAULT '0',
  `creacion_contacto` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `actualizacion_contacto` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contactos`
--

INSERT INTO `contactos` (`id_contacto`, `cte_id`, `id_audiencia`, `id_etiqueta`, `numero_contacto`, `nombre_contacto`, `estado_contacto`, `creacion_contacto`, `actualizacion_contacto`) VALUES
(37, 1, NULL, NULL, '435455', 'dfssdfsdf', 1, '2025-04-14 16:58:17', NULL),
(55, 1, NULL, NULL, '+59894272390', 'Nicolas', 1, '2025-04-15 15:50:49', NULL),
(56, 2, NULL, NULL, '+59892303030', 'Nicolas', 1, '2025-04-15 15:58:02', NULL),
(57, 1, NULL, NULL, '+56912345674', 'asassa', 1, '2025-04-15 16:07:09', '2025-04-15 16:09:25'),
(71, 2, NULL, NULL, '+56989234567', 'Brunoaa', 1, '2025-04-15 17:31:39', '2025-04-30 19:01:46'),
(72, 2, NULL, NULL, '+56989345678', 'Carla', 1, '2025-04-15 17:31:39', NULL),
(73, 2, NULL, NULL, '+56989456789', 'Diego', 1, '2025-04-15 17:31:39', NULL),
(75, 2, NULL, NULL, '+56989678901', 'Facundo', 1, '2025-04-15 17:31:39', NULL),
(77, 2, NULL, NULL, '+56989890123', 'Hugo', 1, '2025-04-15 17:31:39', NULL),
(78, 2, NULL, NULL, '+56989901234', 'Inés', 1, '2025-04-15 17:31:39', NULL),
(79, 2, NULL, NULL, '+56989123457', 'Karina', 1, '2025-04-15 17:31:39', NULL),
(80, 2, NULL, NULL, '+56989234568', 'Luis', 1, '2025-04-15 17:31:39', NULL),
(81, 2, NULL, NULL, '+56989345679', 'Marta', 1, '2025-04-15 17:31:39', NULL),
(82, 2, NULL, NULL, '+56989456780', 'Nicolás', 1, '2025-04-15 17:31:39', '2025-04-21 18:09:26'),
(83, 2, NULL, NULL, '+56989567891', 'Olivia', 1, '2025-04-15 17:31:39', NULL),
(84, 2, NULL, NULL, '+56989678902', 'Pablo', 1, '2025-04-15 17:31:39', NULL),
(85, 2, NULL, NULL, '+56989789013', 'Raquel', 1, '2025-04-15 17:31:39', NULL),
(86, 2, NULL, NULL, '+56989890124', 'Santiago', 1, '2025-04-15 17:31:39', NULL),
(87, 2, NULL, NULL, '+56989901235', 'Teresa', 1, '2025-04-15 17:31:39', NULL),
(88, 1, NULL, NULL, '+56923456789', 'Benjamínaa c', 1, '2025-04-15 17:31:39', '2025-05-02 13:28:59'),
(89, 2, NULL, NULL, '+56934567890', 'Camila', 1, '2025-04-15 17:31:39', NULL),
(90, 2, NULL, NULL, '+56945678901', 'Daniel', 0, '2025-04-15 17:31:39', '2025-04-21 18:12:12'),
(91, 2, NULL, NULL, '+56956789012', 'Emilia', 1, '2025-04-15 17:31:39', NULL),
(92, 2, NULL, NULL, '+56967890123', 'Felipe', 1, '2025-04-15 17:31:39', NULL),
(93, 2, NULL, NULL, '+56978901234', 'Gonzalo', 1, '2025-04-15 17:31:39', NULL),
(94, 2, NULL, NULL, '+56990123456', 'Javier', 1, '2025-04-15 17:31:39', NULL),
(95, 2, NULL, NULL, '+56901234567', 'Katalina', 1, '2025-04-15 17:31:39', NULL),
(96, 2, NULL, NULL, '+56912345679', 'Luciano', 1, '2025-04-15 17:31:39', NULL),
(97, 2, NULL, NULL, '+56923456780', 'Maite', 1, '2025-04-15 17:31:39', NULL),
(98, 2, NULL, NULL, '+56934567891', 'Matías', 1, '2025-04-15 17:31:39', NULL),
(99, 2, NULL, NULL, '+56945678902', 'Natalia', 1, '2025-04-15 17:31:39', NULL),
(100, 2, NULL, NULL, '+56956789013', 'Oscar', 1, '2025-04-15 17:31:39', NULL),
(101, 2, NULL, NULL, '+56967890124', 'Paulina', 1, '2025-04-15 17:31:39', NULL),
(102, 2, NULL, NULL, '+56978901235', 'Rafael', 1, '2025-04-15 17:31:39', NULL),
(103, 2, NULL, NULL, '+56990123457', 'Tomás', 1, '2025-04-15 17:31:39', NULL),
(104, 2, NULL, NULL, '+56901234568', 'Victoria', 1, '2025-04-15 17:31:39', NULL),
(105, 2, NULL, NULL, '+59899123456', 'Error_UY1', 1, '2025-04-15 17:31:39', NULL),
(106, 2, NULL, NULL, '+56988123456', 'Error_UY5', 1, '2025-04-15 17:31:39', NULL),
(107, 2, NULL, NULL, '+59891234567', 'Error_CL1', 1, '2025-04-15 17:31:39', NULL),
(112, 1, NULL, NULL, '+59896789012', 'Facundo', 1, '2025-04-15 17:41:14', NULL),
(114, 1, NULL, NULL, '+59898901234', 'Hugo', 1, '2025-04-15 17:41:14', NULL),
(115, 1, NULL, NULL, '+59899012345', 'Inés', 1, '2025-04-15 17:41:14', NULL),
(116, 1, NULL, NULL, '+59890123451', 'Juan', 1, '2025-04-15 17:41:14', '2025-04-16 13:50:42'),
(117, 1, NULL, NULL, '+59891234568', 'Karina', 1, '2025-04-15 17:41:14', NULL),
(118, 1, NULL, NULL, '+56912345678', 'Luis', 1, '2025-04-15 17:41:14', NULL),
(120, 1, NULL, NULL, '+56989494905', 'asaass', 1, '2025-04-15 19:18:14', '2025-04-15 19:41:30'),
(121, 1, NULL, NULL, '+56908090334', 'Gerard', 1, '2025-04-15 19:42:46', NULL),
(122, 2, NULL, NULL, '+56942823842', 'Gervasio', 1, '2025-04-15 20:11:20', '2025-04-16 14:30:40'),
(123, 2, NULL, NULL, '+59892345670', 'Brunoaa', 0, '2025-04-16 15:21:17', '2025-04-30 19:01:52'),
(124, 2, NULL, NULL, '+59893456789', 'Carla', 1, '2025-04-16 15:21:17', NULL),
(126, 2, NULL, NULL, '+59895678901', 'Elena', 1, '2025-04-16 15:21:17', NULL),
(127, 2, NULL, NULL, '+59897890123', 'Gabriela', 1, '2025-04-16 15:21:17', NULL),
(128, 2, NULL, NULL, '+59890123456', 'Juan', 1, '2025-04-16 15:21:17', NULL),
(129, 2, NULL, NULL, '+56989012345', 'Sergio', 1, '2025-04-16 15:21:17', NULL),
(130, 2, NULL, NULL, '+59894234232', 'Javier', 1, '2025-04-16 15:21:17', NULL),
(131, 2, NULL, NULL, '+56989012346', 'Sofía', 1, '2025-05-02 19:19:22', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`id_contacto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contactos`
--
ALTER TABLE `contactos`
  MODIFY `id_contacto` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
