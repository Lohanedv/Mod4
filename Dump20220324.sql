CREATE DATABASE  IF NOT EXISTS `bancodd` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bancodd`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: bancodd
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `agendamento`
--

DROP TABLE IF EXISTS `agendamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agendamento` (
  `destino` varchar(50) DEFAULT NULL,
  `dataIda` varchar(50) DEFAULT NULL,
  `dataVolta` varchar(50) DEFAULT NULL,
  `quantPessoas` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamento`
--

LOCK TABLES `agendamento` WRITE;
/*!40000 ALTER TABLE `agendamento` DISABLE KEYS */;
INSERT INTO `agendamento` VALUES ('dubai','12','12',12),('dubai','33','43',2),('dubai','12','12',12),('dubai','12','12',12),('maldivas','12','32',32),('Carapicuiba','22-22-33','25-22-33',4),('Carapicuiba','12-12-21','21-21-21',3),('Maldivas','12/12/22','21/21/23',3),('Maldivas','12/12/22','21/01/23',3),('Maldivas','12/12/22','21/02/23',3),('Guarapiranga','12/12/21','21/02/23',3),('Israel','12/22/22','12/23/22',2),('Carapicuiba','12/12','13/12',1),('MInas Gerais','12/04/2022','22/04/2022',0),('Minas','22/22/22','25/22/22',2);
/*!40000 ALTER TABLE `agendamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadastro`
--

DROP TABLE IF EXISTS `cadastro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadastro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `senha` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadastro`
--

LOCK TABLES `cadastro` WRITE;
/*!40000 ALTER TABLE `cadastro` DISABLE KEYS */;
INSERT INTO `cadastro` VALUES (1,'Lua','Lua@lua',1234),(2,'lolo','lohane@ll',123),(3,'LOhane Dafne','lohane@gmail.com',12345),(4,'Lohane Vieira','lohanevieira@gmail.com',1234567),(5,'Lohane Vieira','lololo@lol.com',12345),(6,'Lohane gg','lohande@gg',12345),(7,'Lohane Vieira','lol@gg.com',12345),(8,'lol','lol@lol',123),(9,'lohane','lohane@gmail',1234),(10,'lol','lol@lol',124),(11,'lua','lua@hotmail.com',1234),(12,'dd','dd@ee',1234),(13,'lol','lol@lol',12),(14,'mona','mona@io',1234),(15,'Joana','Joana@gui.com',4321),(16,'Joanas','JO@anas',9999),(17,'Moaz','Mo@az.bb',555),(18,'Igor','Igor@bobo.br',6666),(19,'LOhane','lohane@hhhh',1234),(20,'LOhane','lohane@bol',1234),(21,'Lua','Lua\\@uol',123),(22,'Laura','Laura@uol',123),(23,'Lohane','lohane@uol.com',123),(24,NULL,NULL,1234),(25,'LOhane','loh@uol',123),(26,'Lohane','loh@uol.com',1234),(27,'LOhane','loh@uol.com',1234),(28,'Luan','LuanGomes@yahoo.com.br',6666),(29,'Luan','Luan@bol,com',123),(30,NULL,'',NULL),(31,'Sol Lua','Sol@Lua.com',4321),(32,'',NULL,NULL),(33,'Sol Lua','Sol@Lua.com',1234),(34,'Lua','Lua@dol',123),(35,'Luanda',NULL,NULL),(36,'Laura','LauraBorges@gmail.com',1234),(37,NULL,'LauraB@gmail.com',NULL),(38,'Laura','Laura@g',123),(39,'Sol','Sol@gmail',123),(40,'Lohane','lohane@gmail.com',1234),(41,'Taina','Tata@gmail.com',1234),(42,NULL,'Tai@gmail.com',NULL);
/*!40000 ALTER TABLE `cadastro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contato`
--

DROP TABLE IF EXISTS `contato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contato` (
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `texto` varchar(100) DEFAULT NULL,
  `telefone` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contato`
--

LOCK TABLES `contato` WRITE;
/*!40000 ALTER TABLE `contato` DISABLE KEYS */;
INSERT INTO `contato` VALUES ('Taina','Tai@gmail.com','',119888888);
/*!40000 ALTER TABLE `contato` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-24 13:21:59
