-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-04-14 21:13:13
-- 服务器版本： 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `baidu_news`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `title` varchar(60) NOT NULL,
  `detail` varchar(200) NOT NULL,
  `date` date NOT NULL,
  `pic_url` varchar(200) NOT NULL,
  `news_type` varchar(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `title`, `detail`, `date`, `pic_url`, `news_type`) VALUES
(2, '状况不断：谷歌“登月”项目面临盈利困境111', '谷歌母公司Alphabet似乎要抓紧时间展开调查，看看他们的“登月战略”究竟出了什么问题。', '2016-03-30', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3707699987,395050022&fm=85&s=FAA3716CAC64BB745EDB799B02008089&w=121&h=75&img.JPEG', '百家'),
(3, '状况不断：谷歌“登月”项目面临盈利困境', '谷歌母公司Alphabet似乎要抓紧时间展开调查，看看他们的“登月战略”究竟出了什么问题。', '2016-03-30', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3707699987,395050022&fm=85&s=FAA3716CAC64BB745EDB799B02008089&w=121&h=75&img.JPEG', '百家'),
(4, '状况不断：谷歌“登月”项目面临盈利困境222', '谷歌母公司Alphabet似乎要抓紧时间展开调查，看看他们的“登月战略”究竟出了什么问题。', '2016-03-30', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3707699987,395050022&fm=85&s=FAA3716CAC64BB745EDB799B02008089&w=121&h=75&img.JPEG', '百家'),
(5, '状况不断：谷歌“登月”项目面临盈利困境3333', '谷歌母公司Alphabet似乎要抓紧时间展开调查，看看他们的“登月战略”究竟出了什么问题。', '2016-03-30', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3707699987,395050022&fm=85&s=FAA3716CAC64BB745EDB799B02008089&w=121&h=75&img.JPEG', '百家'),
(6, '状况不断：谷歌“登月”项目面临盈利困境444', '谷歌母公司Alphabet似乎要抓紧时间展开调查，看看他们的“登月战略”究竟出了什么问题。', '2016-03-30', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3707699987,395050022&fm=85&s=FAA3716CAC64BB745EDB799B02008089&w=121&h=75&img.JPEG', '百家'),
(7, '【北京商报】全聚德要推mini小店 也要开始送外卖', '全年营收及盈利状况稳中有增，值得注意的是，全聚德今年将有一系列新动作，包括推副牌发力休闲简餐领...', '2016-03-23', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2426365576,2371959956&fm=85&s=7B1C66865E231A8002BF26770300306B&w=121&h=75&img.JPEG', '本地'),
(8, '《三只小猪》四月上演 百老汇顶级作曲操刀 ', '麻花版《三只小猪》将在A33剧场演出六场，为北京的小朋友们带来一个欢乐无比的春季演出潮。', '2016-03-29', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1882120367,1646121648&fm=85&s=DBB294E248178BC27A943D3C0300F0D5&w=121&h=75&img.JPEG', '娱乐'),
(9, '状况不断：谷歌“登月”项目面临盈利困境555', '谷歌母公司Alphabet似乎要抓紧时间展开调查，看看他们的“登月战略”究竟出了什么问题。', '2016-03-30', 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3707699987,395050022&fm=85&s=FAA3716CAC64BB745EDB799B02008089&w=121&h=75&img.JPEG', '百家'),
(10, '女司机穿高跟鞋开车 追尾前车致一中学生受伤', '事故致前车尾部受损较重，更为严重的是，被撞车辆副驾驶位置上一名学生，因遭受强烈撞击后出现头昏等症状。', '2016-03-30', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1330556707,994759482&fm=82&s=1981C81102370F8E049DFD860100E0B0&w=121&h=81&img.JPEG', '社会'),
(11, '沪深限购升级北京楼市不动，友谊的小船说翻就翻', 'DT君还注意到，上海在3月末的楼市调控号称史上最严，其实也只是向已经执行了5年的北京政策看齐。', '2016-04-14', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1803725611,2851921222&fm=85&s=DAD461845C0BACC856B8509103001082&w=121&h=75&img.JPEG', '本地'),
(12, '友谊的小船说翻就翻', 'DT君还注意到，上海在3月末的楼市调控号称史上最严，其实也只是向已经执行了5年的北京政策看齐。', '2016-04-14', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1803725611,2851921222&fm=85&s=DAD461845C0BACC856B8509103001082&w=121&h=75&img.JPEG', '本地'),
(13, '友谊的小船说翻就翻', 'DT君还注意到，上海在3月末的楼市调控号称史上最严，其实也只是向已经执行了5年的北京', '2016-04-14', 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1803725611,2851921222&fm=85&s=DAD461845C0BACC856B8509103001082&w=121&h=75&img.JPEG', '社会'),
(16, '解放军陆军军官学院已由原总参转隶陆军', '之前隶属于原总参谋部的陆军军官学院已转隶陆军。', '2016-04-14', 'http://image.thepaper.cn/image/4/681/338.jpg', '军事');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
