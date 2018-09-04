-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 04, 2018 at 03:00 PM
-- Server version: 5.6.35-log
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `binchBet_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `g_games`
--

CREATE TABLE `g_games` (
  `id_group` int(11) NOT NULL,
  `id_game` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `g_users`
--

CREATE TABLE `g_users` (
  `id_group` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `s_rules`
--

CREATE TABLE `s_rules` (
  `id_s_rules` int(11) NOT NULL,
  `id_season` int(11) NOT NULL,
  `id_rule` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_bet`
--

CREATE TABLE `t_bet` (
  `id_bet` int(11) NOT NULL,
  `h_goal` int(2) NOT NULL COMMENT 'Home team goal(s).',
  `a_goal` int(2) NOT NULL COMMENT 'Away team goal(s).',
  `id_user` int(11) NOT NULL,
  `id_game` int(11) NOT NULL,
  `result` int(11) DEFAULT NULL COMMENT 'Id of the result''s rule.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_competition`
--

CREATE TABLE `t_competition` (
  `id_competition` int(11) NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_game`
--

CREATE TABLE `t_game` (
  `id_game` int(11) NOT NULL,
  `date` date NOT NULL,
  `hour` time NOT NULL,
  `h_goal` int(2) NOT NULL,
  `a_goal` int(2) NOT NULL,
  `id_original` int(11) NOT NULL,
  `h_team` int(11) NOT NULL COMMENT 'Home team.',
  `a_team` int(11) NOT NULL COMMENT 'Away team.',
  `id_competition` int(11) NOT NULL,
  `id_season` int(11) NOT NULL,
  `id_prolongation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_group`
--

CREATE TABLE `t_group` (
  `id_group` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_news`
--

CREATE TABLE `t_news` (
  `id_news` int(11) NOT NULL,
  `title` varchar(25) NOT NULL,
  `subtitle` varchar(40) DEFAULT NULL,
  `paragraph` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_prolongation`
--

CREATE TABLE `t_prolongation` (
  `id_prolongation` int(11) NOT NULL,
  `prolongation` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_rule`
--

CREATE TABLE `t_rule` (
  `id_rule` int(11) NOT NULL,
  `rule` varchar(25) NOT NULL,
  `point` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_season`
--

CREATE TABLE `t_season` (
  `id_season` int(11) NOT NULL,
  `season` varchar(10) NOT NULL,
  `y_start` year(4) NOT NULL,
  `y_end` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_team`
--

CREATE TABLE `t_team` (
  `id_team` int(11) NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_user`
--

CREATE TABLE `t_user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `rank` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_user`
--

INSERT INTO `t_user` (`id_user`, `username`, `password`, `email`, `rank`) VALUES
(3, 'KemarLaPoulpe', 'Super', NULL, 1),
(4, 'Goat', 'Super', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `t_user_rank`
--

CREATE TABLE `t_user_rank` (
  `id_user_rank` int(11) NOT NULL,
  `rank` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_user_rank`
--

INSERT INTO `t_user_rank` (`id_user_rank`, `rank`) VALUES
(1, 'Admin'),
(2, 'Gest');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `g_games`
--
ALTER TABLE `g_games`
  ADD KEY `id_group` (`id_group`),
  ADD KEY `id_game` (`id_game`);

--
-- Indexes for table `g_users`
--
ALTER TABLE `g_users`
  ADD KEY `id_group` (`id_group`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `s_rules`
--
ALTER TABLE `s_rules`
  ADD PRIMARY KEY (`id_s_rules`),
  ADD KEY `id_season` (`id_season`),
  ADD KEY `id_rule` (`id_rule`);

--
-- Indexes for table `t_bet`
--
ALTER TABLE `t_bet`
  ADD PRIMARY KEY (`id_bet`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_game` (`id_game`),
  ADD KEY `result` (`result`);

--
-- Indexes for table `t_competition`
--
ALTER TABLE `t_competition`
  ADD PRIMARY KEY (`id_competition`);

--
-- Indexes for table `t_game`
--
ALTER TABLE `t_game`
  ADD PRIMARY KEY (`id_game`),
  ADD KEY `h_team` (`h_team`),
  ADD KEY `a_team` (`a_team`),
  ADD KEY `id_competition` (`id_competition`),
  ADD KEY `id_season` (`id_season`),
  ADD KEY `id_prolongation` (`id_prolongation`);

--
-- Indexes for table `t_group`
--
ALTER TABLE `t_group`
  ADD PRIMARY KEY (`id_group`);

--
-- Indexes for table `t_news`
--
ALTER TABLE `t_news`
  ADD PRIMARY KEY (`id_news`);

--
-- Indexes for table `t_prolongation`
--
ALTER TABLE `t_prolongation`
  ADD PRIMARY KEY (`id_prolongation`);

--
-- Indexes for table `t_rule`
--
ALTER TABLE `t_rule`
  ADD PRIMARY KEY (`id_rule`);

--
-- Indexes for table `t_season`
--
ALTER TABLE `t_season`
  ADD PRIMARY KEY (`id_season`);

--
-- Indexes for table `t_team`
--
ALTER TABLE `t_team`
  ADD PRIMARY KEY (`id_team`);

--
-- Indexes for table `t_user`
--
ALTER TABLE `t_user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `rank` (`rank`);

--
-- Indexes for table `t_user_rank`
--
ALTER TABLE `t_user_rank`
  ADD PRIMARY KEY (`id_user_rank`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `s_rules`
--
ALTER TABLE `s_rules`
  MODIFY `id_s_rules` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `t_bet`
--
ALTER TABLE `t_bet`
  MODIFY `id_bet` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `t_competition`
--
ALTER TABLE `t_competition`
  MODIFY `id_competition` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `t_game`
--
ALTER TABLE `t_game`
  MODIFY `id_game` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `t_group`
--
ALTER TABLE `t_group`
  MODIFY `id_group` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `t_news`
--
ALTER TABLE `t_news`
  MODIFY `id_news` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `t_prolongation`
--
ALTER TABLE `t_prolongation`
  MODIFY `id_prolongation` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `t_rule`
--
ALTER TABLE `t_rule`
  MODIFY `id_rule` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `t_season`
--
ALTER TABLE `t_season`
  MODIFY `id_season` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `t_team`
--
ALTER TABLE `t_team`
  MODIFY `id_team` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `t_user`
--
ALTER TABLE `t_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `t_user_rank`
--
ALTER TABLE `t_user_rank`
  MODIFY `id_user_rank` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `g_games`
--
ALTER TABLE `g_games`
  ADD CONSTRAINT `g_games_ibfk_1` FOREIGN KEY (`id_group`) REFERENCES `t_group` (`id_group`),
  ADD CONSTRAINT `g_games_ibfk_2` FOREIGN KEY (`id_game`) REFERENCES `t_game` (`id_game`);

--
-- Constraints for table `g_users`
--
ALTER TABLE `g_users`
  ADD CONSTRAINT `g_users_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `t_user` (`id_user`),
  ADD CONSTRAINT `g_users_ibfk_2` FOREIGN KEY (`id_group`) REFERENCES `t_group` (`id_group`);

--
-- Constraints for table `s_rules`
--
ALTER TABLE `s_rules`
  ADD CONSTRAINT `s_rules_ibfk_1` FOREIGN KEY (`id_season`) REFERENCES `t_season` (`id_season`),
  ADD CONSTRAINT `s_rules_ibfk_2` FOREIGN KEY (`id_rule`) REFERENCES `t_rule` (`id_rule`);

--
-- Constraints for table `t_bet`
--
ALTER TABLE `t_bet`
  ADD CONSTRAINT `t_bet_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `t_user` (`id_user`);

--
-- Constraints for table `t_game`
--
ALTER TABLE `t_game`
  ADD CONSTRAINT `t_game_ibfk_1` FOREIGN KEY (`id_prolongation`) REFERENCES `t_prolongation` (`id_prolongation`),
  ADD CONSTRAINT `t_game_ibfk_2` FOREIGN KEY (`id_season`) REFERENCES `t_season` (`id_season`),
  ADD CONSTRAINT `t_game_ibfk_3` FOREIGN KEY (`h_team`) REFERENCES `t_team` (`id_team`),
  ADD CONSTRAINT `t_game_ibfk_4` FOREIGN KEY (`a_team`) REFERENCES `t_team` (`id_team`),
  ADD CONSTRAINT `t_game_ibfk_5` FOREIGN KEY (`id_competition`) REFERENCES `t_competition` (`id_competition`),
  ADD CONSTRAINT `t_game_ibfk_6` FOREIGN KEY (`id_game`) REFERENCES `t_bet` (`id_game`);

--
-- Constraints for table `t_user`
--
ALTER TABLE `t_user`
  ADD CONSTRAINT `t_user_ibfk_1` FOREIGN KEY (`rank`) REFERENCES `t_user_rank` (`id_user_rank`);
