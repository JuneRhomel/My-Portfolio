-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 22, 2023 at 11:37 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbportfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblproject`
--

CREATE TABLE `tblproject` (
  `PID` int(11) NOT NULL,
  `Title` varchar(150) NOT NULL,
  `Description` longtext NOT NULL,
  `Github` text NOT NULL,
  `Link` text NOT NULL,
  `Favorite` tinyint(1) NOT NULL DEFAULT 0,
  `Image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblproject`
--

INSERT INTO `tblproject` (`PID`, `Title`, `Description`, `Github`, `Link`, `Favorite`, `Image`) VALUES
(1, 'EduCadamy', 'An educational website that provides educational content, resources, and tools to users, typically with the goal of facilitating learning and knowledge acquisition.', 'https://github.com/JuneRhomel/MINI-PROJECT-2', 'https://educadamy.pages.dev/', 1, 'D:\\Picture\\Screenshots'),
(2, 'ABC', 'ASdASDASDASDASD', 'http://localhost/phpmyadmin/index.php?route=/table/sql&db=dbportfolio&table=tblproject', 'http://localhost/phpmyadmin/index.php?route=/table/sql&db=dbportfolio&table=tblproject', 1, '/asd/asd'),
(21, 'asd', 'asd', 'asd', 'asd', 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblproject`
--
ALTER TABLE `tblproject`
  ADD PRIMARY KEY (`PID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblproject`
--
ALTER TABLE `tblproject`
  MODIFY `PID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
