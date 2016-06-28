import Page from 'soya/lib/page/Page';
import RenderResult from 'soya/lib/page/RenderResult';
import JsonRenderer from 'soya/lib/page/json/JsonRenderer.js';
import register from 'soya/lib/client/Register';

var airportJson = {"DPS":{"code":"DPS","location":"Bali","name":"Ngurah Rai Int'l"},"SUB":{"code":"SUB","location":"Surabaya","name":"Juanda"},"BDO":{"code":"BDO","location":"Bandung","name":"Husein Sastranegara"},"UPG":{"code":"UPG","location":"Makassar","name":"Hasanuddin"},"KNO":{"code":"KNO","location":"Medan","name":"Kuala Namu"},"PDG":{"code":"PDG","location":"Padang","name":"Minangkabau Intl Airport"},"JOG":{"code":"JOG","location":"Yogya","name":"Adi Sutjipto"},"BWX":{"code":"BWX","location":"Banyuwangi","name":"Blimbingsari"},"CGK":{"code":"CGK","location":"Jakarta","name":"Soekarno Hatta Intl Airport"},"HLP":{"code":"HLP","location":"Jakarta","name":"Halim Perdanakusuma Int'l"},"MLG":{"code":"MLG","location":"Malang","name":"Abdul Rachman Saleh"},"SRG":{"code":"SRG","location":"Semarang","name":"Achmad Yani"},"SOC":{"code":"SOC","location":"Solo","name":"Adi Soemarmo"},"JBB":{"code":"JBB","location":"Jember","name":"Noto Hadinegoro"},"BTJ":{"code":"BTJ","location":"Banda Aceh","name":"Sultan Iskandarmuda"},"TKG":{"code":"TKG","location":"B. Lampung","name":"Radin Inten II Airport"},"BTH":{"code":"BTH","location":"Batam","name":"Hang Nadim"},"BKS":{"code":"BKS","location":"Bengkulu","name":"Fatmawati Soekarno"},"GNS":{"code":"GNS","location":"G. Sitoli","name":"Binaka"},"DJB":{"code":"DJB","location":"Jambi","name":"Sultan Thaha"},"LSW":{"code":"LSW","location":"Lhokseumawe","name":"Malikussaleh Airport"},"MEQ":{"code":"MEQ","location":"Meulaboh","name":"Cut Nyak Dhien"},"NTX":{"code":"NTX","location":"Ranai","name":"Ranai"},"PLM":{"code":"PLM","location":"Palembang","name":"Sultan Mahmud Badaruddin II"},"PGK":{"code":"PGK","location":"Pk. Pinang","name":"Depati Amir"},"PKU":{"code":"PKU","location":"Pekanbaru","name":"Sultan Syarif Kasim II"},"FLZ":{"code":"FLZ","location":"Sibolga","name":"Dr. Ferdinand Lumban Tobing"},"DTB":{"code":"DTB","location":"Silangit","name":"Silangit"},"TJQ":{"code":"TJQ","location":"T. Pandan","name":"H. AS Hanandjoeddin"},"TNJ":{"code":"TNJ","location":"Tj. Pinang","name":"Raja Haji Fisabilillah"},"LLG":{"code":"LLG","location":"Lubuk Linggau","name":"Silampari"},"MRB":{"code":"MRB","location":"Muara Bungo","name":"Pasir Mayang"},"SBG":{"code":"SBG","location":"Sabang","name":"Maimun Saleh"},"DUM":{"code":"DUM","location":"Dumai","name":"Pinang Kampai"},"SMG":{"code":"SMG","location":"Simeulue","name":"Lasikin Airport"},"BPN":{"code":"BPN","location":"Balikpapan","name":"Sepinggan"},"BDJ":{"code":"BDJ","location":"Banjarmasin","name":"Syamsudin Noor"},"BEJ":{"code":"BEJ","location":"Berau","name":"Kalimarau"},"KTG":{"code":"KTG","location":"Ketapang","name":"Rahadi Usman"},"KBU":{"code":"KBU","location":"Kotabaru","name":"Gusti Sjamsir Alam"},"MLN":{"code":"MLN","location":"Malinau","name":"Robert Atty Bessing"},"MLK":{"code":"MLK","location":"Melak","name":"Melalan"},"NNX":{"code":"NNX","location":"Nunukan","name":"Nunukan Airport"},"PKY":{"code":"PKY","location":"Palangka","name":"Tjilik Riwut"},"PKN":{"code":"PKN","location":"Pkl. Bun","name":"Iskandar"},"PNK":{"code":"PNK","location":"Pontianak","name":"Supadio"},"PSU":{"code":"PSU","location":"Putussibau","name":"Pangsuma"},"SRI":{"code":"SRI","location":"Samarinda","name":"Temindung"},"SMQ":{"code":"SMQ","location":"Sampit","name":"H. Asan Airport"},"SQG":{"code":"SQG","location":"Sintang","name":"Susilo"},"TJS":{"code":"TJS","location":"Tj. Selor","name":"Tanjung Harapan"},"TRK":{"code":"TRK","location":"Tarakan","name":"Juwata"},"TBM":{"code":"TBM","location":"Katingan","name":"Tumbang Samba"},"SGQ":{"code":"SGQ","location":"Sangatta","name":"Tanjung Bara"},"BTK":{"code":"BTK","location":"Buntok Barito","name":"Sanggu"},"KPX":{"code":"KPX","location":"Seruyan Hilir","name":"Kuala Pembuang"},"KLK":{"code":"KLK","location":"Kuala Kurun","name":"Kuala Kurun Airport"},"PXC":{"code":"PXC","location":"Puruk Cahu","name":"Dirung Lingkin"},"BUW":{"code":"BUW","location":"Baubau","name":"Betoambari"},"GTO":{"code":"GTO","location":"Gorontalo","name":"Jalaluddin"},"KDI":{"code":"KDI","location":"Kendari","name":"Haluoleo"},"LUW":{"code":"LUW","location":"Luwuk","name":"Syukuran Aminuddin Amir/Bubung"},"MJU":{"code":"MJU","location":"Mamuju","name":"Tampa Padang"},"MDC":{"code":"MDC","location":"Manado","name":"Sam Ratulangi"},"NAH":{"code":"NAH","location":"Naha","name":"Naha"},"PLW":{"code":"PLW","location":"Palu","name":"Mutiara SIS Aljufri"},"PUM":{"code":"PUM","location":"Pomala","name":"Sangia Nibandera"},"PSJ":{"code":"PSJ","location":"Poso","name":"Kasiguncu"},"MNA":{"code":"MNA","location":"Talaud","name":"Melongguane"},"WNI":{"code":"WNI","location":"Wakatobi","name":"Matahora"},"TLI":{"code":"TLI","location":"Tolitoli","name":"Sultan Bantilan"},"TTR":{"code":"TTR","location":"Tana Toraja","name":"Pongtiku"},"BUA":{"code":"BUA","location":"Bua","name":"Lagaligo"},"MXB":{"code":"MXB","location":"Masamba","name":"Andi Djemma"},"RAQ":{"code":"RAQ","location":"Muna","name":"Sugimanuru"},"UOL":{"code":"UOL","location":"Buol","name":"Pogogul"},"YKR":{"code":"YKR","location":"Selayar","name":"H. Aroeppala"},"RPI":{"code":"RPI","location":"Rampi","name":"Onondowa"},"MSA":{"code":"MSA","location":"Mamasa","name":"Sumarorong"},"SKO":{"code":"SKO","location":"Rantepao","name":"Seko"},"BXE":{"code":"BXE","location":"Bone","name":"Mappalo Ulaweng"},"ARD":{"code":"ARD","location":"Alor","name":"Mali Airport"},"BMU":{"code":"BMU","location":"Bima","name":"Muhammad Salahuddin"},"ENE":{"code":"ENE","location":"Ende","name":"H Hasan Aroeboesman"},"KOE":{"code":"KOE","location":"Kupang","name":"El Tari"},"LBJ":{"code":"LBJ","location":"Lb. Bajo","name":"Komodo"},"LOP":{"code":"LOP","location":"Lombok","name":"Lombok Praya Intl Airport"},"MOF":{"code":"MOF","location":"Maumere","name":"Frans Seda/Wai Oti"},"RTG":{"code":"RTG","location":"Ruteng","name":"Frans Sales Lega/Satartacik"},"SWQ":{"code":"SWQ","location":"Sumbawa","name":"Sultan Mahmud Kaharuddin/Brangbiji"},"TMC":{"code":"TMC","location":"Tambolaka","name":"Tambolaka Airport"},"WGP":{"code":"WGP","location":"Waingapu","name":"Umbu Mehang Kunda/Mau Hau"},"ABU":{"code":"ABU","location":"Atambua","name":"AA Bere Tallo"},"BJW":{"code":"BJW","location":"Bajawa","name":"Soa"},"LKA":{"code":"LKA","location":"Larantuka","name":"Gewayantana"},"AMQ":{"code":"AMQ","location":"Ambon","name":"Pattimura"},"BIK":{"code":"BIK","location":"Biak","name":"Frans Kaisiepo"},"WUB":{"code":"WUB","location":"Maba","name":"Buli"},"FKQ":{"code":"FKQ","location":"Fak Fak","name":"Torea"},"DJJ":{"code":"DJJ","location":"Jayapura","name":"Sentani"},"KNG":{"code":"KNG","location":"Kaimana","name":"Utarom"},"LUV":{"code":"LUV","location":"Langgur","name":"Dumatubun Airport"},"MKW":{"code":"MKW","location":"Manokwari","name":"Rendani"},"MKQ":{"code":"MKQ","location":"Merauke","name":"Mopah"},"NBX":{"code":"NBX","location":"Nabire","name":"Nabire"},"SOQ":{"code":"SOQ","location":"Sorong","name":"Domine Eduard Osok"},"TTE":{"code":"TTE","location":"Ternate","name":"Sultan Babullah"},"TIM":{"code":"TIM","location":"Timika","name":"Mozes Kilangin"},"KAZ":{"code":"KAZ","location":"Tobelo","name":"Kuabang Kao"},"WMX":{"code":"WMX","location":"Wamena","name":"Wamena"},"AGI":{"code":"AGI","location":"Agimuga","name":"Agimuga"},"ZGP":{"code":"ZGP","location":"Bilogai","name":"Sugapa"},"DEK":{"code":"DEK","location":"Yahukimo","name":"Dekai"},"EWE":{"code":"EWE","location":"Asmat","name":"Ewer"},"ILA":{"code":"ILA","location":"Ilaga","name":"Ilaga"},"KNY":{"code":"KNY","location":"Kenyam","name":"Kenyam"},"KEP":{"code":"KEP","location":"Mappi","name":"Kepi"},"KOX":{"code":"KOX","location":"Mimika Barat","name":"Kokonao"},"OKL":{"code":"OKL","location":"Gunung Bintang","name":"Oksibil"},"PTW":{"code":"PTW","location":"Potowaiburu","name":"Potowai"},"SNK":{"code":"SNK","location":"Puncak Jaya","name":"Sinak"},"OTI":{"code":"OTI","location":"Morotai Island","name":"Pitu"},"GLX":{"code":"GLX","location":"Galela","name":"Gamar Malamo"},"SXK":{"code":"SXK","location":"Saumlaki","name":"Saumlaki"},"SIN":{"code":"SIN","location":"Singapore","name":"Changi Intl"},"HKG":{"code":"HKG","location":"Hong Kong","name":"Hong Kong Intl Airport"},"ADL":{"code":"ADL","location":"Adelaide","name":"Adelaide Intl"},"ASP":{"code":"ASP","location":"A. Springs","name":"Alice Springs"},"BNE":{"code":"BNE","location":"Brisbane","name":"Brisbane Intl"},"CNS":{"code":"CNS","location":"Cairns","name":"Cairns Intl"},"CFS":{"code":"CFS","location":"Coff's Harbour","name":"Coffs Harbour"},"DRW":{"code":"DRW","location":"Darwin","name":"Darwin Intl"},"OOL":{"code":"OOL","location":"Gold Coast","name":"Gold Coast Intl"},"HBA":{"code":"HBA","location":"Hobart","name":"Hobart"},"MKY":{"code":"MKY","location":"Mackay","name":"Mackay"},"MCY":{"code":"MCY","location":"Maroochydore","name":"Maroochydore Sunshine Coast"},"MEL":{"code":"MEL","location":"Melbourne","name":"Melbourne Intl"},"PER":{"code":"PER","location":"Perth","name":"Perth Airport"},"PPP":{"code":"PPP","location":"Proserpine","name":"Proserpine Whitsunday Coast"},"SYD":{"code":"SYD","location":"Sydney","name":"Sydney Intl"},"BWN":{"code":"BWN","location":"Bandar Seri Begawan","name":"Brunei Intl"},"PNH":{"code":"PNH","location":"Phnom Penh","name":"Phnom Penh Intl"},"REP":{"code":"REP","location":"Siem Reap","name":"Siem Reap"},"PEK":{"code":"PEK","location":"Beijing","name":"Capital Intl"},"CAN":{"code":"CAN","location":"Guangzhou","name":"Baiyun Intl"},"HAK":{"code":"HAK","location":"Haikou","name":"Meilan"},"LJG":{"code":"LJG","location":"Lijiang","name":"Lijiang Airport"},"NGB":{"code":"NGB","location":"Ningbo","name":"Lishe"},"TAO":{"code":"TAO","location":"Qingdao","name":"Liuting"},"PVG":{"code":"PVG","location":"Shanghai","name":"Pudong"},"SZX":{"code":"SZX","location":"Shenzhen","name":"Baoan Intl"},"CGO":{"code":"CGO","location":"Zhengzhou","name":"Xinzheng Airport"},"CKG":{"code":"CKG","location":"Chongqing","name":"Jiangbei Airport"},"CSX":{"code":"CSX","location":"Changsa","name":"Huanghua Airport"},"HGH":{"code":"HGH","location":"Hangzhou","name":"Xiaoshan Airport"},"JMU":{"code":"JMU","location":"Jiamusi","name":"Jiamusi Airport"},"KWL":{"code":"KWL","location":"Guilin","name":"Liangjiang Airport"},"NDG":{"code":"NDG","location":"Qiqihar","name":"Qiqihar Sanjiazi Airport"},"NKG":{"code":"NKG","location":"Nanjing","name":"Lukou Airport"},"SYX":{"code":"SYX","location":"Sanya","name":"Phoenix International Airport"},"WNZ":{"code":"WNZ","location":"Wenzhou","name":"Wenzhou Yongqiang Airport"},"WUH":{"code":"WUH","location":"Wuhan","name":"Tianhe Airport"},"XIY":{"code":"XIY","location":"Xian","name":"Xianyang Airport"},"FOC":{"code":"FOC","location":"Fuzhou","name":"Changle Airport"},"KMG":{"code":"KMG","location":"Kunming","name":"Wujiaba Airport"},"XMN":{"code":"XMN","location":"Xiamen","name":"Gaoqi Airport"},"CTU":{"code":"CTU","location":"Chengdu","name":"Shuangliu Airport"},"SHA":{"code":"SHA","location":"Shanghai","name":"Hongqiao Intl"},"NGO":{"code":"NGO","location":"Nagoya","name":"Chubu Centrair Intl"},"KIX":{"code":"KIX","location":"Osaka","name":"Kansai"},"HND":{"code":"HND","location":"Tokyo","name":"Haneda Intl"},"NRT":{"code":"NRT","location":"Tokyo","name":"Narita Intl"},"CTS":{"code":"CTS","location":"Sapporo","name":"New Chitose"},"TAK":{"code":"TAK","location":"Takamatsu","name":"Takamatsu"},"FUK":{"code":"FUK","location":"Fukuoka","name":"Fukuoka"},"KOJ":{"code":"KOJ","location":"Kagoshima","name":"Kagoshima"},"KMJ":{"code":"KMJ","location":"Kumamoto","name":"Kumamoto"},"MYJ":{"code":"MYJ","location":"Matsuyama","name":"Matsuyama"},"OIT":{"code":"OIT","location":"Oita","name":"Oita"},"OKA":{"code":"OKA","location":"Okinawa","name":"Naha"},"AKJ":{"code":"AKJ","location":"Asahikawa","name":"Asahikawa Airport"},"AOJ":{"code":"AOJ","location":"Aomori","name":"Aomori Airport"},"HIJ":{"code":"HIJ","location":"Hiroshima","name":"Hiroshima Airport"},"HKD":{"code":"HKD","location":"Hakodate","name":"Hakodate Airport"},"KUH":{"code":"KUH","location":"Kushiro","name":"Kushiro Airport"},"MMB":{"code":"MMB","location":"Memanbetsu","name":"Memanbetsu Airport"},"OBO":{"code":"OBO","location":"Obihiro","name":"Obihiro Airport"},"OKJ":{"code":"OKJ","location":"Okayama","name":"Okayama Airport"},"KMQ":{"code":"KMQ","location":"Komatsu","name":"Komatsu Airport"},"SDJ":{"code":"SDJ","location":"Sendai","name":"Sendai Airport"},"ITM":{"code":"ITM","location":"Osaka","name":"Osaka Intl"},"MFM":{"code":"MFM","location":"Macau","name":"Macau Intl"},"JHB":{"code":"JHB","location":"Johor","name":"Sultan Ismail"},"KCH":{"code":"KCH","location":"Kuching","name":"Kuching Intl Airport"},"KUL":{"code":"KUL","location":"K. Lumpur","name":"Kuala Lumpur Intl Airport"},"SZB":{"code":"SZB","location":"KL - Subang","name":"Sultan Abdul Aziz Shah Intl"},"BKI":{"code":"BKI","location":"K. Kinabalu","name":"Kota Kinabalu Intl Airport"},"LGK":{"code":"LGK","location":"Langkawi","name":"Langkawi Intl Airport"},"MKZ":{"code":"MKZ","location":"Malacca","name":"Batu Berendam Intl"},"PEN":{"code":"PEN","location":"Penang","name":"Penang Intl Airport"},"SBW":{"code":"SBW","location":"Sibu","name":"Sibu"},"AOR":{"code":"AOR","location":"A. Setar","name":"Sultan Abdul Halim"},"IPH":{"code":"IPH","location":"Ipoh","name":"Sultan Azlan Shah"},"KTE":{"code":"KTE","location":"Kerteh","name":"Kerteh"},"KBR":{"code":"KBR","location":"K. Bharu","name":"Sultan Ismail Petra"},"TGG":{"code":"TGG","location":"K. Terengganu","name":"Sultan Mahmud"},"KUA":{"code":"KUA","location":"Kuantan","name":"Kuantan"},"BBN":{"code":"BBN","location":"Bario","name":"Bario Airport"},"BKM":{"code":"BKM","location":"Bakalalan","name":"Bakalalan Airport"},"BTU":{"code":"BTU","location":"Bintulu","name":"Bintulu Airport"},"KUD":{"code":"KUD","location":"Kudat","name":"Kudat Airport"},"LBP":{"code":"LBP","location":"Long Banga","name":"Long Banga Airport"},"LBU":{"code":"LBU","location":"Labuan","name":"Labuan Airport"},"LDU":{"code":"LDU","location":"Lahad Datu","name":"Lahad Datu Airport"},"LGL":{"code":"LGL","location":"Long Lellang","name":"Long Lellang Airport"},"LKH":{"code":"LKH","location":"Long Akah","name":"Long Akah Airport"},"LMN":{"code":"LMN","location":"Limbang","name":"Limbang Airport"},"LWY":{"code":"LWY","location":"Lawas","name":"Lawas Airport"},"MKM":{"code":"MKM","location":"Mukah","name":"Mukah Airport"},"MUR":{"code":"MUR","location":"Marudi","name":"Marudi Airport"},"MYY":{"code":"MYY","location":"Miri","name":"Miri Airport"},"MZV":{"code":"MZV","location":"Mulu","name":"Mulu Airport"},"ODN":{"code":"ODN","location":"Long Seridan","name":"Long Seridan Airport"},"SDK":{"code":"SDK","location":"Sandakan","name":"Sandakan Airport"},"TGC":{"code":"TGC","location":"Tanjung Manis","name":"Tanjung Manis Airport"},"TWU":{"code":"TWU","location":"Tawau","name":"Tawau Airport"},"MLE":{"code":"MLE","location":"Male","name":"Male Intl"},"RGN":{"code":"RGN","location":"Yangon","name":"Yangon Intl"},"MDL":{"code":"MDL","location":"Mandalay","name":"Mandalay Intl Airport"},"NYT":{"code":"NYT","location":"Nay Pyi Taw","name":"NAYPYITAW Airport"},"BCD":{"code":"BCD","location":"Bacolod","name":"Bacolod"},"CEB":{"code":"CEB","location":"Cebu","name":"Mactan Cebu Intl"},"CRK":{"code":"CRK","location":"Manila-Clark","name":"Diosdado Macapagal Int'l"},"ILO":{"code":"ILO","location":"Iloilo","name":"Iloilo"},"KLO":{"code":"KLO","location":"Kalibo - Boracay","name":"Kalibo"},"MNL":{"code":"MNL","location":"Manila","name":"Ninoy Aquino Intl"},"PPS":{"code":"PPS","location":"Puerto Princesa","name":"Puerto Princesa"},"TAC":{"code":"TAC","location":"Tacloban","name":"Daniel Z Romualdez"},"ICN":{"code":"ICN","location":"Seoul-Incheon","name":"Incheon Intl"},"PUS":{"code":"PUS","location":"Busan","name":"Gimhae Intl"},"CJU":{"code":"CJU","location":"Jeju","name":"Jeju Intl Airport"},"TPE":{"code":"TPE","location":"Taipei","name":"Taoyuan Intl"},"RMQ":{"code":"RMQ","location":"Taichung","name":"Ching Chuang Kang Airport"},"KHH":{"code":"KHH","location":"Kaohsiung","name":"Kaohsiung Intl Airport"},"BKK":{"code":"BKK","location":"Bangkok","name":"Suvarnabhumi Intl Airport"},"DMK":{"code":"DMK","location":"Bangkok","name":"Don Mueang Intl Airport"},"CNX":{"code":"CNX","location":"Chiang Mai","name":"Chiang Mai Intl Airport"},"HDY":{"code":"HDY","location":"Hat Yai","name":"Hat Yai Intl Airport"},"KBV":{"code":"KBV","location":"Krabi","name":"Krabi"},"HKT":{"code":"HKT","location":"Phuket","name":"Phuket Intl Airport"},"USM":{"code":"USM","location":"Ko Samui","name":"Samui"},"URT":{"code":"URT","location":"Surat Thani","name":"Surat Thani Airport"},"UTH":{"code":"UTH","location":"Udon Thani","name":"Udon Thani International Airport"},"CEI":{"code":"CEI","location":"Chiang Rai","name":"Chiang Rai Intl Airport"},"LPT":{"code":"LPT","location":"Lampang","name":"Lampang Airport"},"TDX":{"code":"TDX","location":"Trat","name":"Trat Airport"},"THS":{"code":"THS","location":"Sukhothai","name":"Sukhothai Airport"},"UTP":{"code":"UTP","location":"Pattaya","name":"U Taphao Intl Airport"},"KKC":{"code":"KKC","location":"Khon Kaen","name":"Khon Kaen Airport"},"UBP":{"code":"UBP","location":"Ubon Ratchathani","name":"Ubon Ratchathani Airport"},"DIL":{"code":"DIL","location":"Dili","name":"Presidente Nicolau Lobato Intl"},"HAN":{"code":"HAN","location":"Hanoi","name":"Noibai Intl"},"SGN":{"code":"SGN","location":"Ho Chi Minh City","name":"Tansonnhat Intl"},"TBB":{"code":"TBB","location":"Tuy Hoa","name":"Dong Tac"},"UIH":{"code":"UIH","location":"Quy Nhon","name":"Quy Nhon"},"VDH":{"code":"VDH","location":"Dong Hoi","name":"Dong Hoi Airport"},"VII":{"code":"VII","location":"Vinh","name":"Vinh"},"PQC":{"code":"PQC","location":"Phu Quoc","name":"Phu Quoc"},"CXR":{"code":"CXR","location":"Nha Trang","name":"Cam Ranh"},"HUI":{"code":"HUI","location":"Hue","name":"Phu Bai International"},"HPH":{"code":"HPH","location":"Hai Phong","name":"Cat Bi International"},"DAD":{"code":"DAD","location":"Da Nang","name":"Da Nang International"},"BMV":{"code":"BMV","location":"Buon Ma Thuot","name":"Buon Ma Thuot"},"CAH":{"code":"CAH","location":"Ca Mau","name":"Ca Mau Airport"},"DIN":{"code":"DIN","location":"Dien Bien","name":"Dien Bien Phu Airport"},"DLI":{"code":"DLI","location":"Da Lat","name":"Dalat Airport"},"PXU":{"code":"PXU","location":"Pleiku","name":"Pleiku Airport"},"THD":{"code":"THD","location":"Thanh Hoa","name":"Tho Xuan Airport"},"VCA":{"code":"VCA","location":"Can Tho","name":"Can Tho Intl Airport"},"VCL":{"code":"VCL","location":"Chu Lai","name":"Chu Lai Airport"},"VCS":{"code":"VCS","location":"Con Dao","name":"Co Ong Airport"},"VKG":{"code":"VKG","location":"Rach Gia","name":"Rach Gia Airport"},"JED":{"code":"JED","location":"Jeddah","name":"King Abdulaziz Intl"},"COK":{"code":"COK","location":"Kochi","name":"Cochin Int'l"},"DEL":{"code":"DEL","location":"New Delhi","name":"Indira Gandhi Int'l"},"BOM":{"code":"BOM","location":"Mumbai","name":"Chhatrapati Shivaji Int'l"},"TRZ":{"code":"TRZ","location":"Tiruchirappalli (Trichy)","name":"Tiruchirappalli Int'l"},"VTZ":{"code":"VTZ","location":"Visakhapatnam (Vizag)","name":"Visakhapatnam Int'l"},"BLR":{"code":"BLR","location":"Bangalore","name":"Bangalore Airport"},"HYD":{"code":"HYD","location":"Hyderabad","name":"Hyderabad Airport"},"MAA":{"code":"MAA","location":"Chennai","name":"Chennai Intl Airport"},"CCU":{"code":"CCU","location":"Kolkata","name":"Netaji Subhash Chandra Bose Intl Airport"},"GAY":{"code":"GAY","location":"Gaya","name":"Gaya Airport"},"VNS":{"code":"VNS","location":"Varanasi","name":"Varanasi Airport"},"CGP":{"code":"CGP","location":"Chittagong","name":"Shah Amanat Intl"},"DAC":{"code":"DAC","location":"Dhaka","name":"Zia Intl"},"KTM":{"code":"KTM","location":"Kathmandu","name":"Tribhuvan Int'l"},"AUH":{"code":"AUH","location":"Abu Dhabi","name":"Abu Dhabi Intl"},"FRA":{"code":"FRA","location":"Frankfurt","name":"Frankfurt Main"},"AMS":{"code":"AMS","location":"Amsterdam","name":"Schiphol"},"CDG":{"code":"CDG","location":"Paris","name":"Charles De Gaulle"},"LHR":{"code":"LHR","location":"London","name":"Heathrow"},"CMB":{"code":"CMB","location":"Colombo","name":"Bandaranaike Intl Colombo Airport"},"AKL":{"code":"AKL","location":"Auckland","name":"Auckland Intl Airport"},"LPQ":{"code":"LPQ","location":"Luang Prabang","name":"Luang Phabang Intl Airport"},"VTE":{"code":"VTE","location":"Vientiane","name":"Wattay Intl Airport"}};

class AirportJson extends Page {
  static get pageName() {
    return 'AirportJson';
  }

  render(httpRequest, routeArgs, store, callback) {
    var jsonRenderer = new JsonRenderer(airportJson);
    var renderResult = new RenderResult(jsonRenderer);
    callback(renderResult);
  }
}

register(AirportJson, __filename);
export default AirportJson;