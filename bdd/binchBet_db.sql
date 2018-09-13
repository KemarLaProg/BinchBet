-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 13, 2018 at 08:23 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

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
  `username` varchar(25) NOT NULL
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
  `username` varchar(25) NOT NULL,
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
  `id_group` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t_news`
--

CREATE TABLE `t_news` (
  `id_news` int(11) NOT NULL,
  `title` varchar(25) NOT NULL,
  `subtitle` varchar(40) DEFAULT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL,
  `author` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_news`
--

INSERT INTO `t_news` (`id_news`, `title`, `subtitle`, `text`, `date`, `author`) VALUES
(1, 'Bienvenue', 'BinchBet ouvre ses portes, enfin.', '<p>Fusce ultricies eleifend enim, sit amet posuere ligula aliquam ut. Donec mattis diam quis ex molestie, ut volutpat neque rhoncus. Donec ullamcorper suscipit lorem dapibus ornare. Aliquam erat volutpat. Donec auctor, arcu ut porttitor rhoncus, nulla purus sollicitudin ante, quis faucibus velit ipsum et justo. Quisque at sagittis urna, vitae ultrices libero. Nullam tempor ultricies  velit, eu vehicula turpis aliquet sollicitudin. Morbi nec magna sollicitudin, hendrerit leo vel, pellentesque mi. Aliquam blandit lectus orci, in consectetur dolor dictum non. Sed gravida ipsum vitae ornare tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vitae nulla pretium, aliquam mi eget, suscipit massa. Etiam molestie, felis eget aliquam maximus, turpis erat porttitor risus, ac aliquam enim tellus sit amet nunc.</p><p>Vivamus dapibus, velit non ultrices molestie, quam magna porta lacus, ut porttitor ipsum libero nec ipsum. Duis nibh nisl, egestas id aliquam nec, commodo scelerisque nibh. Aliquam quis sapien in ex gravida aliquam. Aliquam erat volutpat. Pellentesque varius, arcu et suscipit blandit, nibh libero imperdiet enim, nec lacinia velit neque ac tellus. Sed convallis quam sed sapien volutpat euismod. Integer suscipit orci non volutpat fringilla. Nam aliquet, arcu et gravida sollicitudin, leo enim consectetur nisl, vel hendrerit est magna a nisi. Nam tempus ipsum convallis eleifend fermentum. Nullam interdum urna justo, nec pretium ligula hendrerit sed. Sed pharetra, augue vitae interdum pharetra, ex erat consectetur odio, quis blandit nisi dolor in massa. Ut a mi vitae est pretium iaculis ac sit amet mi. Proin tempor justo magna.</p><p>Phasellus ac viverra nulla, vel congue dolor. Cras condimentum, urna quis consequat imperdiet, lacus mauris pharetra ligula, a laoreet orci eros in nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum varius blandit nisi porta eleifend. Vestibulum lobortis nunc ac accumsan pellentesque. Nullam condimentum cursus tortor, et laoreet turpis placerat at. Phasellus ac nunc finibus, vehicula risus ut, pellentesque tellus. Suspendisse congue lectus malesuada enim feugiat, id fermentum metus venenatis. Proin sed mi sem. Suspendisse potenti. Mauris tortor sem, ornare eget ex nec, molestie sollicitudin enim. Praesent et est molestie, posuere augue eu, fermentum ante. Maecenas sit amet rhoncus neque, ac ultricies ipsum. Aliquam sit amet elementum turpis. Integer sit amet laoreet nisl. Sed gravida at dui quis rutrum.</p><p>Mauris tempor, augue non pulvinar elementum, turpis dolor sagittis odio, vitae tristique sem enim eget lorem. In lobortis bibendum erat eget tincidunt. Nullam a ipsum finibus, dignissim tortor id, rutrum lacus. Donec at dignissim mi. Donec sit amet tincidunt quam, rhoncus placerat felis. Suspendisse ac sollicitudin urna, at tempus magna. Etiam suscipit ut tortor vitae facilisis. Sed rutrum nisi in ex convallis elementum. Mauris quis risus turpis. In laoreet mi ac euismod suscipit. Vivamus gravida sapien enim, eu venenatis mauris rhoncus in. Aliquam convallis vulputate nibh. Etiam sit amet fringilla nisi, in eleifend odio.</p><p>Mauris gravida, tortor a rutrum blandit, dolor felis rhoncus lorem, vitae auctor ante augue vitae felis. Fusce porta placerat metus. Cras scelerisque neque nec pulvinar placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer mollis sapien mattis, lacinia enim pharetra, ullamcorper tortor. Suspendisse rhoncus, quam at cursus consequat, nunc dolor eleifend mauris, at efficitur nisl urna nec justo. Vestibulum ligula velit, ornare a tristique in, ullamcorper vitae mi. Nullam facilisis urna in gravida fringilla.</p>', '2018-09-23', 'KemarLePoulpe');

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
  `username` varchar(25) NOT NULL,
  `password` varchar(40) NOT NULL,
  `firstname` varchar(25) DEFAULT NULL,
  `lastname` varchar(25) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `registration` date NOT NULL,
  `rank` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_user`
--

INSERT INTO `t_user` (`username`, `password`, `firstname`, `lastname`, `email`, `registration`, `rank`) VALUES
('Goat', 'Super', 'Mattias', 'Mex', NULL, '2018-09-01', 1),
('KemarLePoulpe', 'Super', 'Marc', 'Vachon', 'vachon.marc@outlook.com', '2018-09-01', 1);

-- --------------------------------------------------------

--
-- Table structure for table `t_user_rank`
--

CREATE TABLE `t_user_rank` (
  `id_rank` int(2) NOT NULL,
  `rank` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t_user_rank`
--

INSERT INTO `t_user_rank` (`id_rank`, `rank`) VALUES
(1, 'Admin'),
(3, 'Writer'),
(5, 'Gest');

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
  ADD KEY `username` (`username`) USING BTREE;

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
  ADD KEY `id_game` (`id_game`),
  ADD KEY `result` (`result`),
  ADD KEY `username` (`username`);

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
  ADD PRIMARY KEY (`id_news`),
  ADD KEY `author` (`author`);

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
  ADD PRIMARY KEY (`username`),
  ADD KEY `rank` (`rank`);

--
-- Indexes for table `t_user_rank`
--
ALTER TABLE `t_user_rank`
  ADD PRIMARY KEY (`id_rank`);

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
  MODIFY `id_news` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
  ADD CONSTRAINT `g_users_ibfk_2` FOREIGN KEY (`id_group`) REFERENCES `t_group` (`id_group`),
  ADD CONSTRAINT `g_users_ibfk_3` FOREIGN KEY (`username`) REFERENCES `t_user` (`username`);

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
  ADD CONSTRAINT `t_bet_ibfk_1` FOREIGN KEY (`username`) REFERENCES `t_user` (`username`);

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
-- Constraints for table `t_news`
--
ALTER TABLE `t_news`
  ADD CONSTRAINT `t_news_ibfk_1` FOREIGN KEY (`author`) REFERENCES `t_user` (`username`);

--
-- Constraints for table `t_user`
--
ALTER TABLE `t_user`
  ADD CONSTRAINT `t_user_ibfk_1` FOREIGN KEY (`rank`) REFERENCES `t_user_rank` (`id_rank`);
