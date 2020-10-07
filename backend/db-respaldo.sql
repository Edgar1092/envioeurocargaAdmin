-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: db5000681886.hosting-data.io
-- Tiempo de generación: 07-10-2020 a las 18:13:51
-- Versión del servidor: 5.7.30-log
-- Versión de PHP: 7.0.33-0+deb9u10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbs630315`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2020_07_20_162754_create_listas_table', 1),
(4, '2020_07_20_163210_create_archivos_listas_table', 1),
(5, '2020_07_21_233033_create_listas_usuarios_table', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_archivos_listas`
--

CREATE TABLE `tbl_archivos_listas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ruta` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_lista` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `tipo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tiempo` int(11) NOT NULL DEFAULT '2',
  `tipoTiempo` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 's',
  `orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_archivos_listas`
--

INSERT INTO `tbl_archivos_listas` (`id`, `ruta`, `id_lista`, `created_at`, `updated_at`, `tipo`, `tiempo`, `tipoTiempo`, `orden`) VALUES
(21, 'animacioonn.mp4', 2, NULL, NULL, '1', 2, 's', 1),
(23, 'IMAGEN-PANTALLA-GRANDE.jpg', 4, NULL, NULL, '0', 2, 's', 1),
(27, 'IMAGEN-PANTALLA-GRANDE.jpg', 5, NULL, NULL, '0', 2, 's', 1),
(30, 'slide1.png', 5, NULL, NULL, '0', 2, 's', 2),
(31, 'slide2.png', 5, NULL, NULL, '0', 2, 's', 3),
(32, 'slide3.png', 5, NULL, NULL, '0', 2, 's', 4),
(33, 'slide4.png', 5, NULL, NULL, '0', 2, 's', 5),
(48, '1597161670_slide1.png', 6, NULL, NULL, '0', 2, 's', 2),
(49, '1597161671_slide2.png', 6, NULL, NULL, '0', 2, 's', 3),
(50, '1597161671_slide3.png', 6, NULL, NULL, '0', 2, 's', 4),
(51, '1597161672_slide4.png', 6, NULL, NULL, '0', 2, 's', 5),
(59, '1598432433_1200x1200.png', 8, NULL, NULL, '0', 2, 's', 2),
(62, '1599467519_front-1.png', 9, NULL, NULL, '0', 2, 's', 2),
(63, '1599467696_xionis_principal.png', 9, NULL, NULL, '0', 2, 's', 2),
(64, '1599467696_banner800x600.png', 9, NULL, NULL, '0', 2, 's', 3),
(65, '1599467696_ubica.png', 9, NULL, NULL, '0', 2, 's', 4),
(66, '1599467696_escanea.png', 9, NULL, NULL, '0', 2, 's', 5),
(67, '1599467696_carga.png', 9, NULL, NULL, '0', 2, 's', 6),
(68, '1599467696_retorna.png', 9, NULL, NULL, '0', 2, 's', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_listas`
--

CREATE TABLE `tbl_listas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `desde` date NOT NULL,
  `hasta` date NOT NULL,
  `estatus` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `orden` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_listas`
--

INSERT INTO `tbl_listas` (`id`, `nombre`, `descripcion`, `desde`, `hasta`, `estatus`, `created_at`, `updated_at`, `orden`) VALUES
(8, 'Envios Eurocarga', 'Calle aniceto marinas 30', '2020-08-26', '2020-12-31', 1, NULL, NULL, 0),
(9, 'Prueba Maquina Pequeña', 'rtw4t', '2020-09-07', '2025-09-07', 1, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_listas_usuarios`
--

CREATE TABLE `tbl_listas_usuarios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `id_lista` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_listas_usuarios`
--

INSERT INTO `tbl_listas_usuarios` (`id`, `id_usuario`, `id_lista`, `created_at`, `updated_at`) VALUES
(15, 4, 2, NULL, NULL),
(16, 5, 3, NULL, NULL),
(18, 5, 5, NULL, NULL),
(36, 5, 4, NULL, NULL),
(41, 4, 7, NULL, NULL),
(42, 5, 6, NULL, NULL),
(43, 4, 6, NULL, NULL),
(48, 7, 8, NULL, NULL),
(52, 9, 9, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `name`, `email`, `token`, `password`, `status`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@admin.com', 'f7RIOAVqGq66rZ9rnaYZRyV75v2SYl', '$2y$10$3VbKTLkJNaDvwbKV8nKccuVWA4MIaQhD8BdEpZhYw2wknmudtgEqS', 0, NULL, NULL),
(3, 'addd', 'admin2@admin.com', 'QsdensHtE02jOdHFwdrnOtWhUphOrw', '$2y$10$tUW9VPMPBZkTNNUKq7VRLeHsvprFKD2G3xT/1wCEUYQ/98k9hFrJS', 0, NULL, NULL),
(4, 'cine', 'cine@cine.com', 'edA8knkCre6y3scxkl1UiFCz4QcHKJ', '$2y$10$J6PWsBSrd0JdS1gj64ZxmuwgTu/lYSQaW7TgW6VDrRi9dU4Yyosam', 0, NULL, NULL),
(5, 'prueba', 'prueba@prueba.com', 'oH6kmumsUuZIoXoBbG1hcFCUnAWWxi', '$2y$10$UYwgkJr0WBfQjpM2kvSZR.uJnHTeQ.W3qUpg1NOzCufRLLOD/gLci', 0, NULL, NULL),
(7, 'Envíos Eurocarga', 'eurocarga@envioseurocarga.com', 'dpiaWmQiqVT0OwF5ZKDS7oYpmfTw6Q', '$2y$10$cVJjNnWSu3z5zTJFEHUUAOV0UUnifiAWs.0PSKGd4pK3w29O1sEOu', 0, NULL, NULL),
(9, 'maqinapequena', 'maqinapequena@xionis.com', 'bqtkpYjyBoPCTpQgmXPXUm97INVfOg', '$2y$10$UUOR4mAXeZE4ynW/3/SxluL2rIUcjkDlac5guyv/TGMBDxS2EhvaG', 0, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `tbl_archivos_listas`
--
ALTER TABLE `tbl_archivos_listas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tbl_archivos_listas_id_unique` (`id`);

--
-- Indices de la tabla `tbl_listas`
--
ALTER TABLE `tbl_listas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tbl_listas_id_unique` (`id`);

--
-- Indices de la tabla `tbl_listas_usuarios`
--
ALTER TABLE `tbl_listas_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tbl_users_id_unique` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `tbl_archivos_listas`
--
ALTER TABLE `tbl_archivos_listas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de la tabla `tbl_listas`
--
ALTER TABLE `tbl_listas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tbl_listas_usuarios`
--
ALTER TABLE `tbl_listas_usuarios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
