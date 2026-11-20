const rows = [
  ["Koi Queen — A story in ink", "錦鯉女王 — 水墨故事", "锦鲤女王 — 水墨故事"],
  ["An illustrated Koi Queen story told through water, ink, struggle, and choice.", "以水與墨描繪鍾女士的奮鬥、抉擇與錦鯉人生。", "以水与墨描绘钟女士的奋斗、抉择与锦鲤人生。"],
  ["Skip to story", "跳至故事", "跳至故事"],
  ["Language", "語言", "语言"],
  ["AN EXPERIMENT IN INK & WATER", "水與墨的敘事實驗", "水与墨的叙事实验"],
  ["MAIN SITE", "主網站", "主网站"],
  ["Art", "藝術", "艺术"],
  ["Return", "歸來", "归来"],
  ["Europe", "歐洲", "欧洲"],
  ["Pass it on", "傳承", "传承"],
  ["Shows", "展會", "展会"],
  ["The bid", "競標", "竞标"],
  ["The eye", "眼光", "眼光"],
  ["hero:KOI", "錦鯉", "锦鲤"],
  ["hero:QUEEN", "女王", "女王"],
  ["A STORY OF MS. CHUNG · TAIWAN", "鍾女士的故事 · 臺灣", "钟女士的故事 · 台湾"],
  ["An eye for living art.", "看見游動的藝術。", "看见游动的艺术。"],
  ["A life shaped by difficult choices.", "在艱難抉擇中走出的道路。", "在艰难抉择中走出的道路。"],
  ["ENTER THE STORY", "走進故事", "走进故事"],
  ["SCROLL TO READ", "向下閱讀", "向下阅读"],
  ["AN ILLUSTRATED EXPERIMENT / 2026", "圖像敘事實驗 / 2026", "图像叙事实验 / 2026"],
  ["PROLOGUE / YUNLIN", "序章 / 雲林", "序章 / 云林"],
  ["It began", "故事始於", "故事始于"],
  ["at the water.", "池水之畔。", "池水之畔。"],
  ["Ms. Chung grew up beside the ponds of her family’s farm. Her grandfather’s example stayed with her. She studied art in Taiwan and Beijing; years later, the family business called her home.", "鍾女士在家族魚場的池邊長大。祖父的身教一直留在她心中。她先後在臺灣與北京學習藝術；多年後，家族事業召喚她返鄉。", "钟女士在家族鱼场的池边长大。祖父的身教一直留在她心中。她先后在台湾与北京学习艺术；多年后，家族事业召唤她返乡。"],
  ["BEFORE THE JOURNEY", "旅程開始之前", "旅程开始之前"],
  ["A life", "一生的價值", "一生的价值"],
  ["measured in", "在於", "在于"],
  ["what we do.", "我們做了什麼。", "我们做了什么。"],
  ["Ms. Chung has said that affection for her grandfather helped draw her back to the farm. In her", "鍾女士曾說，對祖父的感情是她回到魚場的原因之一。在她的", "钟女士曾说，对祖父的感情是她回到鱼场的原因之一。在她的"],
  ["TEDxTaipei talk", "TEDxTaipei 演講", "TEDxTaipei 演讲"],
  [", she recalls asking him how to use the hours of a life. His own work on that land became an example she carried forward.", "中，她回憶曾問祖父，人生的時間該如何運用。他在這片土地上的實踐，成了她延續的榜樣。", "中，她回忆曾问祖父，人生的时间该如何运用。他在这片土地上的实践，成了她延续的榜样。"],
  ["A FAMILY INHERITANCE", "家族的傳承", "家族的传承"],
  ["ILLUSTRATED INTERPRETATION", "圖像詮釋", "图像诠释"],
  ["01 / BEFORE THE FARM", "01 / 回到魚場之前", "01 / 回到鱼场之前"],
  ["The art room", "美術教室", "美术教室"],
  ["came first.", "先於魚場。", "先于鱼场。"],
  ["One biographical account", "一篇人物報導", "一篇人物报道"],
  ["names the art program at Fengyuan High School in Taiwan. Art came before the fish farm.", "記載她曾就讀臺灣豐原高中的美術班。在魚場之前，藝術先走進了她的生活。", "记载她曾就读台湾丰原高中的美术班。在鱼场之前，艺术先走进了她的生活。"],
  ["TAIWAN / ART HIGH SCHOOL", "臺灣 / 美術高中", "台湾 / 美术高中"],
  ["BEIJING / LACQUER ART", "北京 / 大漆工藝", "北京 / 大漆工艺"],
  ["The lacquer years", "學習大漆的歲月", "学习大漆的岁月"],
  ["in Beijing.", "在北京。", "在北京。"],
  ["Yingying studied at the Central Academy of Arts and Crafts, now Tsinghua University’s Academy of Arts & Design. She chose 大漆工藝, traditional lacquer art. Photographs from those years show her working on a lacquer panel.", "瑩瑩曾在北京中央工藝美術學院（現為清華大學美術學院）學習。她選擇大漆工藝。當年的照片記錄了她在漆板上作業的身影。", "莹莹曾在北京中央工艺美术学院（现为清华大学美术学院）学习。她选择大漆工艺。当年的照片记录了她在漆板上作业的身影。"],
  ["READ THE ACADEMY’S HISTORY", "閱讀學院沿革", "阅读学院沿革"],
  ["BEIJING / FAMILY ARCHIVE PHOTOGRAPHS IN THE RECORD", "北京 / 紀錄中收錄家庭檔案照片", "北京 / 记录中收录家庭档案照片"],
  ["Interpretive ink illustration of young Yingying, seen from behind, working with a fine brush on a lacquer panel at an art school table in Beijing", "水墨詮釋插畫：年輕的瑩瑩背對畫面，在北京的美術學校桌前用細筆製作漆板", "水墨诠释插画：年轻的莹莹背对画面，在北京的美术学校桌前用细笔制作漆板"],
  ["Symbolic ink illustration of Ms. Chung seen from behind at a European koi show, looking toward fabric vats holding distinct submerged koi", "象徵性水墨插畫：從背後看鍾女士在歐洲錦鯉展，望向布製展示池中花紋各異、潛在水下的錦鯉", "象征性水墨插画：从背后看钟女士在欧洲锦鲤展，望向布制展示池中花纹各异、潜在水下的锦鲤"],
  ["Interpretive ink illustration of Ms. Chung seen from behind while two university interns meet a European dealer beside three distinct koi submerged in a fabric show vat", "水墨詮釋插畫：從背後看鍾女士陪同兩位大學生實習生，在布製展示池旁與歐洲經銷商交流；池中有三尾花紋各異、潛在水下的錦鯉", "水墨诠释插画：从背后看钟女士陪同两位大学生实习生，在布制展示池旁与欧洲经销商交流；池中有三尾花纹各异、潜在水下的锦鲤"],
  ["Interpretive ink illustration of Ms. Chung seen from behind coordinating a Taiwan koi show with older breeders around a layout for temporary fabric vats", "水墨詮釋插畫：從背後看鍾女士與年長的育種者圍著臨時布製展示池的配置圖，協調臺灣錦鯉展", "水墨诠释插画：从背后看钟女士与年长的育种者围着临时布制展示池的配置图，协调台湾锦鲤展"],
  ["02 / THE RETURN", "02 / 歸來", "02 / 归来"],
  ["Back to", "回到", "回到"],
  ["the ponds.", "魚池。", "鱼池。"],
  ["She returned to Sing Chang as CEO. What she had learned about colour and composition became part of how she saw, selected, and presented koi.", "她以執行長身分回到新昌養魚場。對色彩與構圖的理解，也融入她欣賞、挑選與展示錦鯉的方式。", "她以首席执行官身份回到新昌养鱼场。对色彩与构图的理解，也融入她欣赏、挑选与展示锦鲤的方式。"],
  ["YUNLIN, TAIWAN", "臺灣雲林", "台湾云林"],
  ["ILLUSTRATED RECONSTRUCTION", "圖像重構", "图像重构"],
  ["THE WEIGHT", "重擔", "重担"],
  ["Coming home did not make the work easier.", "回到家鄉，並不代表工作就變得容易。", "回到家乡，并不代表工作就变得容易。"],
  ["THE WEIGHT / THE CHOICE", "重擔 / 抉擇", "重担 / 抉择"],
  ["Debt on", "桌上是", "桌上是"],
  ["the desk.", "債務。", "债务。"],
  ["Fish in the water.", "水中是魚。", "水中是鱼。"],
  ["In her", "在她的", "在她的"],
  ["2014 TEDxTaipei talk", "2014 年 TEDxTaipei 演講", "2014 年 TEDxTaipei 演讲"],
  [", Ms. Chung described returning to a family business under heavy debt. In the first years she financed the overseas exhibitions herself, counted every expense, and sought people willing to help. Scarcity forced fresh ways of thinking.", "中，鍾女士談到她回到負債沉重的家族事業。最初幾年，她自費參加海外展會，仔細計算每筆支出，也尋找願意支持的人。資源匱乏迫使她換個方式思考。", "中，钟女士谈到她回到负债沉重的家族事业。最初几年，她自费参加海外展会，仔细计算每笔支出，也寻找愿意支持的人。资源匮乏迫使她换个方式思考。"],
  ["A TURNING POINT", "轉折點", "转折点"],
  ["SYMBOLIC ILLUSTRATION", "象徵性插畫", "象征性插画"],
  ["THE DECISION", "那個決定", "那个决定"],
  ["If the world did not know Taiwanese koi,", "如果世界還不認識臺灣錦鯉，", "如果世界还不认识台湾锦鲤，"],
  ["she would bring the fish to the world.", "她就把魚帶到世界面前。", "她就把鱼带到世界面前。"],
  ["At the 2003 Holland Koi Show, she saw how little of the European market knew Taiwan’s fish. The path forward ran through show halls, introductions, and trust built face to face.", "2003 年在荷蘭錦鯉展，她發現歐洲市場對臺灣錦鯉所知甚少。往前的路，要靠展場上的介紹，以及面對面建立的信任。", "2003 年在荷兰锦鲤展，她发现欧洲市场对台湾锦鲤所知甚少。往前的路，要靠展场上的介绍，以及面对面建立的信任。"],
  ["READ THE MINISTRY OF AGRICULTURE ACCOUNT", "閱讀農業部報導", "阅读农业部报道"],
  ["03 / THE CROSSING", "03 / 跨越海洋", "03 / 跨越海洋"],
  ["One fish.", "一尾魚。", "一尾鱼。"],
  ["One hall.", "一座展場。", "一座展场。"],
  ["A wider world.", "更寬廣的世界。", "更广阔的世界。"],
  ["From 2003 until the pandemic, she exhibited at European koi shows year after year. Holland, Germany and the UK became fixtures. She began under the Sing Chang Koi Farm name; later taiwankoi.com became an industry portal.", "從 2003 年起直到疫情前，她年年參加歐洲錦鯉展。荷蘭、德國和英國成了固定行程。起初她以欣昌錦鯉魚場的名義參展，後來 taiwankoi.com 成為產業入口網站。", "从 2003 年起直到疫情前，她年年参加欧洲锦鲤展。荷兰、德国和英国成了固定行程。起初她以欣昌锦鲤鱼场的名义参展，后来 taiwankoi.com 成为行业门户网站。"],
  ["By 2010, reporting described", "據 2010 年的報導，", "据 2010 年的报道，"],
  ["five international shows a year and direct relationships with overseas buyers.", "她一年參加五場國際展會，並與海外買家直接建立關係。", "她一年参加五场国际展会，并与海外买家直接建立关系。"],
  ["TAIWAN → EUROPE", "臺灣 → 歐洲", "台湾 → 欧洲"],
  ["AN EARLY UK SHOW", "早期的一場英國展會", "早期的一场英国展会"],
  ["A tent.", "一頂帳篷。", "一顶帐篷。"],
  ["A cold night.", "寒冷的一夜。", "寒冷的一夜。"],
  ["Another morning.", "又一個清晨。", "又一个清晨。"],
  ["For one UK exhibition, Ms. Chung slept in a tent to save hotel costs.", "有一次參加英國展會，鍾女士為了省下住宿費，睡在帳篷裡。", "有一次参加英国展会，钟女士为了省下住宿费，睡在帐篷里。"],
  ["Her account", "她的回憶", "她的回忆"],
  ["recalls temperatures around −4°C. The outdoor show grounds could be beautiful; getting there still demanded a great deal.", "提到當時氣溫約為零下 4°C。戶外展場有其美麗，抵達那裡卻並不容易。", "提到当时气温约为零下 4°C。户外展场有其美丽，抵达那里却并不容易。"],
  ["UNITED KINGDOM", "英國", "英国"],
  ["THE CIRCLE GROWS", "同行者漸多", "同行者渐多"],
  ["The journey became", "這趟旅程，", "这趟旅程，"],
  ["larger than one farm.", "不再只屬於一座魚場。", "不再只属于一座鱼场。"],
  ["The exhibitions widened from a farm stand and an industry website to a trade association she founded and a koi promotion association she helped establish. In 2009, Taiwanese breeders presented together at the Holland Koi Show. Seeing the market firsthand let them hear buyers, form their own opinions, and look beyond familiar ways of working.", "展會從魚場攤位、產業網站，逐步延伸到她創辦的外貿協會，以及她參與成立的錦鯉推廣協會。2009 年，臺灣育種者在荷蘭錦鯉展共同亮相。親眼看見市場、聽見買家意見，讓他們形成自己的判斷，走出熟悉的經營方式。", "展会从鱼场展位、行业网站，逐步延伸到她创办的外贸协会，以及她参与成立的锦鲤推广协会。2009 年，台湾育种者在荷兰锦鲤展共同亮相。亲眼看见市场、听见买家意见，让他们形成自己的判断，走出熟悉的经营方式。"],
  ["BEYOND KOI", "不只錦鯉", "不只锦鲤"],
  ["Another breeder.", "另一位育種者。", "另一位育种者。"],
  ["Another fish.", "另一種魚。", "另一种鱼。"],
  ["A door opens.", "一道門打開了。", "一扇门打开了。"],
  ["She also worked across the ornamental fish trade, bringing discus breeder Yi Sui-yang to exhibit in Europe. His fish went on to win Grand Champion honours at a German discus show; they also exhibited at a major pet trade fair in Germany. The method was familiar: make an introduction, find a way through, and let the breeder meet the market.", "她也與觀賞魚界其他領域合作，帶七彩神仙魚育種者易隨陽到歐洲參展。他的魚在德國七彩神仙魚賽獲得總冠軍，兩人也曾在德國大型寵物展展示他的魚。方法一樣：搭起聯繫、突破障礙，讓育種者直接面對市場。", "她也与观赏鱼行业其他领域合作，带七彩神仙鱼育种者易随阳到欧洲参展。他的鱼在德国七彩神仙鱼赛获得总冠军，两人也曾在德国大型宠物展展示他的鱼。方法一样：建立联系、突破障碍，让育种者直接面对市场。"],
  ["READ ABOUT YI'S GERMAN WINS", "閱讀易隨陽的德國賽績", "阅读易随阳的德国赛绩"],
  ["GERMANY / DISCUS FISH", "德國 / 七彩神仙魚", "德国 / 七彩神仙鱼"],
  ["READ THE MINISTRY’S SHOW REPORT", "閱讀農業部展會報導", "阅读农业部展会报道"],
  ["INTERPRETIVE SCENE · THE PEOPLE SHOWN ARE NOT IDENTIFIED BREEDERS", "示意場景 · 畫中人物並非可辨識的特定育種者", "示意场景 · 画中人物并非可辨识的特定育种者"],
  ["04 / PASS IT ON", "04 / 傳承", "04 / 传承"],
  ["The next journey", "下一段旅程，", "下一段旅程，"],
  ["began in the mud.", "從泥土開始。", "从泥土开始。"],
  ["Ms. Chung also opened the farm to young people. Her Koi Academy started with the work that keeps a fish farm running: clearing weeds, tending ponds, learning to catch and pack koi. It was a test of commitment and a way to learn the life behind the fish.", "鍾女士也向年輕人敞開魚場。她的錦鯉學院從魚場日常開始：除草、照顧魚池、學習捕撈和包裝錦鯉。這既是對投入程度的考驗，也讓學生認識魚背後的生活。", "钟女士也向年轻人敞开鱼场。她的锦鲤学院从鱼场日常开始：除草、照顾鱼池、学习捕捞和包装锦鲤。这既是对投入程度的考验，也让学生认识鱼背后的生活。"],
  ["READ THE ARCHIVED KOI ACADEMY REPORT", "閱讀錦鯉學院報導存檔", "阅读锦鲤学院报道存档"],
  ["THE FARM / AN ILLUSTRATED INTERPRETATION", "魚場 / 圖像詮釋", "鱼场 / 图像诠释"],
  ["First, the hands learn the work.", "先讓雙手學會工作。", "先让双手学会工作。"],
  ["Then the world opens.", "然後，世界就展開了。", "然后，世界就展开了。"],
  ["THE SHOW / AN ILLUSTRATED INTERPRETATION", "展場 / 圖像詮釋", "展场 / 图像诠释"],
  ["Students who did well at the farm could travel with her to Holland. There, fish keeping met international trade: they encountered dealers and customers in person, saw how people responded to different koi, and could make up their own minds about the work’s possibilities.", "在魚場表現出色的學生，可以跟她一起前往荷蘭。在那裡，養魚與國際貿易相遇：他們親自與經銷商和顧客交流，觀察人們如何回應不同的錦鯉，並對這份工作的可能性形成自己的看法。", "在鱼场表现出色的学生，可以跟她一起前往荷兰。在那里，养鱼与国际贸易相遇：他们亲自与经销商和顾客交流，观察人们如何回应不同的锦鲤，并对这份工作的可能性形成自己的看法。"],
  ["WATCH THE PUBLIC TELEVISION STUDENT REPORT", "觀看公視學生專題", "观看公视学生专题"],
  ["READ THE MINISTRY ACCOUNT", "閱讀農業部報導", "阅读农业部报道"],
  ["05 / BUILD THE SHOW", "05 / 籌辦展會", "05 / 筹办展会"],
  ["A show needs", "辦一場錦鯉展", "办一场锦鲤展"],
  ["more than fish.", "不只需要魚。", "不只需要鱼。"],
  ["Exporting fish was only part of the work. In Taiwan, Ms. Chung also helped organize koi shows: bringing breeders, officials, volunteers and invited international judges together, and finding agreement in a trade often led by men older than her. At the 2013 Asia Cup young koi show, she served as organizing chair.", "外銷錦鯉只是工作的一部分。在臺灣，鍾女士也參與籌辦錦鯉展：讓育種者、官員、志工與受邀的國際評審齊聚，並在一個常由年長男性主導的產業裡尋找共識。2013 年亞洲盃國際若鯉品評會，她擔任大會主任委員。", "出口锦鲤只是工作的一部分。在台湾，钟女士也参与筹办锦鲤展：让育种者、官员、志愿者与受邀的国际评审齐聚，并在一个常由年长男性主导的行业里寻找共识。2013 年亚洲杯国际若鲤品评会，她担任大会主任委员。"],
  ["WATCH THE 2013 SHOW REPORT", "觀看 2013 年展會報導", "观看 2013 年展会报道"],
  ["TAIWAN / SHOW ORGANIZING", "臺灣 / 籌辦展會", "台湾 / 筹办展会"],
  ["THE EYE GOES FURTHER", "眼光走得更遠", "眼光走得更远"],
  ["The breeder", "錦鯉育種者", "锦鲤育种者"],
  ["became", "成了", "成了"],
  ["a judge.", "評審。", "评审。"],
  ["In recent years, Ms. Chung has judged at the All Japan Nishikigoi Show in Tokyo and at koi shows in France, the Netherlands, Belgium, China, and Southeast Asia. The Tokyo show is the world’s largest. She brings experience as a breeder and show organizer to the judging vat.", "近年，鍾女士曾擔任東京全日本錦鯉展，以及法國、荷蘭、比利時、中國與東南亞錦鯉展的評審。東京的全日本綜合錦鯉品評會是全球規模最大的錦鯉展。她把育種與籌辦展會的經驗帶到評審池邊。", "近年，钟女士曾担任东京全日本锦鲤展，以及法国、荷兰、比利时、中国与东南亚锦鲤展的评审。东京的全日本综合锦鲤品评会是全球规模最大的锦鲤展。她把育种与筹办展会的经验带到评审池边。"],
  ["READ ABOUT HER JUDGING IN JAPAN", "閱讀她在日本擔任評審的報導", "阅读她在日本担任评审的报道"],
  ["EXPLORE THE ALL JAPAN SHOW", "認識全日本錦鯉展", "了解全日本锦鲤展"],
  ["INTERNATIONAL KOI SHOWS", "國際錦鯉展會", "国际锦鲤展会"],
  ["PASSING ON THE VIEW", "傳遞眼界", "传递眼界"],
  ["The first shows", "最初的展會費用", "最初的展会费用"],
  ["came out of her own pocket.", "都是她自己掏腰包。", "都是她自己掏腰包。"],
  ["Today Yingying speaks at companies, associations and universities in Taiwan. She tells students and business leaders about the years when money was short and every overseas show cost more than she could spare. She explains how she built direct relationships with buyers, questioned the old sales chain, and kept those relationships for years. She asks audiences to examine the habits behind their own dead ends.", "如今，瑩瑩在臺灣的企業、協會與大學演講。她向學生和企業領袖說起資金短缺、每場海外展會都難以負擔的日子。她談自己如何直接認識買家、反思舊有銷售鏈，並多年維繫這些關係。她也邀請聽眾檢視造成自身困境的習慣。", "如今，莹莹在台湾的企业、协会与大学演讲。她向学生和企业领袖说起资金短缺、每场海外展会都难以负担的日子。她谈自己如何直接认识买家、反思旧有销售链，并多年维系这些关系。她也邀请听众审视造成自身困境的习惯。"],
  ["READ ABOUT ONE OF HER TALKS", "閱讀她的一場演講報導", "阅读她的一场演讲报道"],
  ["TAIWAN / PUBLIC SPEAKING", "臺灣 / 公開演講", "台湾 / 公开演讲"],
  ["FROM THE RECORD", "真實紀錄", "真实纪录"],
  ["The ink gives way", "水墨退開，", "水墨退开，"],
  ["to the archive.", "檔案走進畫面。", "档案走进画面。"],
  ["The illustrated scenes express the stakes. The photographs show Ms. Chung at work.", "插畫描繪其中的抉擇；照片記錄鍾女士工作時的身影。", "插画描绘其中的抉择；照片记录钟女士工作时的身影。"],
  ["SOURCE: MIRROR MEDIA", "資料來源：鏡週刊", "资料来源：镜周刊"],
  ["AT THE FAMILY FARM · PHOTOGRAPH PUBLISHED BY MIRROR MEDIA", "家族魚場 · 照片由鏡週刊刊載", "家族鱼场 · 照片由镜周刊刊载"],
  ["JAPAN / 2018", "日本 / 2018", "日本 / 2018"],
  ["Then came", "接著，迎來", "接着，迎来"],
  ["one defining bid.", "關鍵的一次出價。", "关键的一次出价。"],
  ["06 / S-LEGEND", "06 / S-LEGEND", "06 / S-LEGEND"],
  ["The hand", "手", "手"],
  ["went up.", "舉起了。", "举起了。"],
  ["¥203 million.", "2.03 億日圓。", "2.03 亿日元。"],
  ["At Sakai Fish Farm’s 2018 auction, Ms. Chung placed the winning bid for the Kohaku S-Legend as the Taiwan dealer for a client. The price made headlines; the judgment behind it had taken years.", "2018 年在日本阪井養魚場的拍賣會上，鍾女士以臺灣代理商身分代表客戶，為紅白錦鯉 S-Legend 投下得標價。價格登上新聞；支撐那份判斷的，是多年累積的眼光。", "2018 年在日本阪井养鱼场的拍卖会上，钟女士以台湾代理商身份代表客户，为红白锦鲤 S-Legend 投下中标价。价格登上新闻；支撑那份判断的，是多年积累的眼光。"],
  ["READ THE UK JUDGES’ ACCOUNT", "閱讀英國評審的報導", "阅读英国评审的报道"],
  ["SAKAI FISH FARM / 2018", "阪井養魚場 / 2018", "阪井养鱼场 / 2018"],
  ["AFTER THE NUMBER", "數字之後", "数字之后"],
  ["A price is a moment.", "價格只是一瞬。", "价格只是一瞬。"],
  ["An eye takes a lifetime.", "眼光需要一生。", "眼光需要一生。"],
  ["Colour. Form. Movement. Lineage. Potential. A koi is never only the figure attached to it.", "色彩、體態、游姿、血統與潛力。一尾錦鯉，遠不只是標籤上的數字。", "色彩、体态、游姿、血统与潜力。一尾锦鲤，远不只是标签上的数字。"],
  ["07 / THE EYE", "07 / 眼光", "07 / 眼光"],
  ["Look closer.", "看得更近。", "看得更近。"],
  ["Look ahead.", "也看得更遠。", "也看得更远。"],
  ["Ms. Chung’s work asks collectors to see beyond the first impression: the body a fish has now, and what it may become with time and care.", "鍾女士的工作提醒收藏家越過第一印象，看見魚當下的體態，也看見在時間與照顧之下可能成為的模樣。", "钟女士的工作提醒收藏家越过第一印象，看见鱼当下的体态，也看见在时间与照顾之下可能成为的模样。"],
  ["THE WORK CONTINUES", "工作仍在繼續", "工作仍在继续"],
  ["END OF THIS CHAPTER", "本章完", "本章完"],
  ["The story is still", "故事仍在", "故事仍在"],
  ["in the water.", "水中流動。", "水中流动。"],
  ["This is an illustrated interpretation of moments in Ms. Chung’s career. The main Koiqueen site holds more photographs, context, and source links.", "這些畫面是對鍾女士事業片段的圖像詮釋。Koiqueen 主網站收錄更多照片、背景與資料來源。", "这些画面是对钟女士事业片段的图像诠释。Koiqueen 主网站收录更多照片、背景与资料来源。"],
  ["EXPLORE THE MAIN SITE", "探索主網站", "探索主网站"],
  ["BACK TO THE BEGINNING", "回到開頭", "回到开头"],
  ["Original generated illustrations are symbolic scenes, not documentary images or likenesses.", "原創生成插畫為象徵性場景，並非紀實影像或人物肖像。", "原创生成插画为象征性场景，并非纪实影像或人物肖像。"],
  ["Open the photographs and sources for this scene", "開啟本場景的照片與資料", "打开本场景的照片与资料"],
  ["THE RECORD", "真實紀錄", "真实记录"],
  ["THE RECORD / 01", "真實紀錄 / 01", "真实记录 / 01"],
  ["01 / PHOTOS & SOURCES", "01 / 照片與資料", "01 / 照片与资料"],
  ["Photographs & sources", "照片與資料來源", "照片与资料来源"],
  ["Real photographs and independent reporting behind this chapter. Captions distinguish documented moments from related context.", "本章相關的真實照片與獨立報導。圖說會區分當時的紀錄與相關背景。", "本章相关的真实照片与独立报道。图说会区分当时的记录与相关背景。"],
  ["MORE IN THE KOIQUEEN ARCHIVE ↗", "查看更多 KOIQUEEN 檔案 ↗", "查看更多 KOIQUEEN 档案 ↗"],
  ["Close photographs and sources", "關閉照片與資料", "关闭照片与资料"],
  ["KOI QUEEN / AN INK STORY", "KOI QUEEN / 水墨故事", "KOI QUEEN / 水墨故事"],
  ["ILLUSTRATED EXPERIMENT · 2026", "圖像敘事實驗 · 2026", "图像叙事实验 · 2026"],
  ["Koi Queen, back to top", "錦鯉女王，返回頁首", "锦鲤女王，返回页首"],
  ["Story chapters", "故事章節", "故事章节"],
  ["A difficult return", "艱難的歸來", "艰难的归来"],
  ["The farm", "魚場", "鱼场"],
  ["The show", "展場", "展场"],
  ["Ink illustration of a standard-finned red and white Kohaku swimming through dark water", "水墨畫中，一尾標準鰭的紅白錦鯉游過暗色水面", "水墨画中，一尾标准鳍的红白锦鲤游过暗色水面"],
  ["Interpretive ink illustration of young Ms. Chung walking beside the ponds with her grandfather", "示意水墨畫：年少的鍾女士與祖父走在魚池旁", "示意水墨画：年少的钟女士与祖父走在鱼池旁"],
  ["Illustrated interpretation of a young Ms. Chung working on a red and black painting in an art studio", "示意插畫：年輕的鍾女士在畫室創作紅黑色作品", "示意插画：年轻的钟女士在画室创作红黑色作品"],
  ["Symbolic ink illustration of a woman looking across koi ponds at dawn", "象徵性水墨畫：一名女子在黎明望向錦鯉池", "象征性水墨画：一名女子在黎明望向锦鲤池"],
  ["Symbolic ink illustration of a woman studying farm papers at night while rain falls outside", "象徵性水墨畫：雨夜中，一名女子查看魚場文件", "象征性水墨画：雨夜中，一名女子查看鱼场文件"],
  ["Symbolic ink illustration of Ms. Chung in professional dress speaking with a dealer at a European koi show", "象徵性水墨畫：身著正式服裝的鍾女士在歐洲錦鯉展與經銷商交談", "象征性水墨画：身着正式服装的钟女士在欧洲锦鲤展与经销商交谈"],
  ["Symbolic ink illustration of a woman carrying a koi into an unfamiliar show hall", "象徵性水墨畫：一名女子將錦鯉帶進陌生的展場", "象征性水墨画：一名女子将锦鲤带进陌生的展场"],
  ["Illustrated interpretation of Ms. Chung asleep in a small frosted tent, its open flap facing the outdoor koi show grounds at dawn", "示意插畫：鍾女士睡在結霜的小帳篷裡，敞開的門簾外是黎明的戶外錦鯉展場", "示意插画：钟女士睡在结霜的小帐篷里，敞开的门帘外是黎明的户外锦鲤展场"],
  ["Illustrated interpretation of Ms. Chung silhouetted from behind with fellow Taiwanese koi breeders beside a fabric show vat, studying three differently patterned koi beneath the water", "示意插畫：鍾女士以背影剪影與臺灣錦鯉育種者站在布製展會魚池旁，觀察水下三尾花紋各異的錦鯉", "示意插画：钟女士以背影剪影与台湾锦鲤育种者站在布制展会鱼池旁，观察水下三尾花纹各异的锦鲤"],
  ["Interpretive ink illustration of black-haired Ms. Chung, seen from behind, showing university interns how to clear weeds from a drained pond", "示意水墨畫：從背後看黑髮的鍾女士示範如何清除乾涸泥池中的雜草，大學生在旁學習", "示意水墨画：从背后看黑发的钟女士示范如何清除干涸泥池中的杂草，大学生在旁学习"],
  ["Interpretive ink illustration of Ms. Chung introducing interns to European dealers beside three distinct koi submerged in a temporary canvas show vat", "示意水墨畫：鍾女士在臨時帆布展會魚池旁介紹實習生給歐洲經銷商，水下有三尾花紋各異的錦鯉", "示意水墨画：钟女士在临时帆布展会鱼池旁介绍实习生给欧洲经销商，水下有三尾花纹各异的锦鲤"],
  ["Interpretive ink illustration of Ms. Chung coordinating a Taiwan koi show with older breeders and an international judge", "示意水墨畫：鍾女士與資深育種者及國際評審協調臺灣錦鯉展", "示意水墨画：钟女士与资深育种者及国际评审协调台湾锦鲤展"],
  ["Interpretive ink illustration of black-haired Ms. Chung judging a submerged Kohaku at the All Japan koi show in Tokyo", "示意水墨畫：黑髮的鍾女士在東京全日本錦鯉展評鑑水下的紅白錦鯉", "示意水墨画：黑发的钟女士在东京全日本锦鲤展评鉴水下的红白锦鲤"],
  ["Interpretive ink illustration of Ms. Chung and discus breeder Yi Sui-yang beside a German exhibition aquarium with distinct discus fish submerged", "示意水墨畫：鍾女士與七彩神仙魚育種者易隨陽在德國展會魚缸旁，水中有不同花紋的七彩神仙魚", "示意水墨画：钟女士与七彩神仙鱼育种者易随阳在德国展会鱼缸旁，水中有不同花纹的七彩神仙鱼"],
  ["Interpretive ink illustration of black-haired Ms. Chung speaking from the side to a Taiwan audience of students and business leaders", "示意水墨畫：黑髮的鍾女士從側面向臺灣的學生和企業領袖演講", "示意水墨画：黑发的钟女士从侧面向台湾的学生和企业领袖演讲"],
  ["Ms. Chung walking through the family koi farm", "鍾女士走過家族錦鯉魚場", "钟女士走过家族锦鲤鱼场"],
  ["Symbolic ink illustration of a tense koi auction, a raised hand, and a submerged Kohaku whose markings are based on S-Legend", "象徵性水墨畫：緊張的錦鯉拍賣現場、舉起的手，以及花紋參照 S-Legend 的水下紅白錦鯉", "象征性水墨画：紧张的锦鲤拍卖现场、举起的手，以及花纹参照 S-Legend 的水下红白锦鲤"],
  ["Ink illustration of hands holding a dark inspection bowl with a standard-finned red and white Kohaku inside", "水墨畫中，雙手托著深色觀賞盆，盆裡有一尾標準鰭紅白錦鯉", "水墨画中，双手托着深色观赏盆，盆里有一尾标准鳍红白锦鲤"]
];

const translations = {
  tw: new Map(rows.map(([en, tw]) => [en, tw])),
  cn: new Map(rows.map(([en, , cn]) => [en, cn]))
};
const languageCodes = {en: 'en', cn: 'zh-Hans', tw: 'zh-Hant'};
const languageSelect = document.getElementById('language');
const originalTitle = document.title;
const description = document.querySelector('meta[name="description"]');
const originalDescription = description.content;
const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  const original = node.nodeValue;
  const key = original.trim();
  if (key && !node.parentElement.closest('.brand, select')) textNodes.push({node, original, key});
}
const attributes = [];
document.querySelectorAll('[alt], [aria-label]').forEach(element => {
  for (const name of ['alt', 'aria-label']) {
    if (element.hasAttribute(name)) attributes.push({element, name, original: element.getAttribute(name)});
  }
});

function setLanguage(lang) {
  if (!languageCodes[lang]) lang = 'en';
  const map = translations[lang];
  document.documentElement.lang = languageCodes[lang];
  languageSelect.value = lang;
  for (const {node, original, key} of textNodes) {
    const lookup = node.parentElement.closest('#hero-title') ? `hero:${key}` : key;
    const value = map?.get(lookup) ?? key;
    const start = original.indexOf(key);
    node.nodeValue = original.slice(0, start) + value + original.slice(start + key.length);
  }
  for (const {element, name, original} of attributes) element.setAttribute(name, map?.get(original) ?? original);
  document.title = map?.get(originalTitle) ?? originalTitle;
  description.content = map?.get(originalDescription) ?? originalDescription;
  const url = new URL(location.href);
  url.searchParams.set('lang', lang);
  history.replaceState(null, '', url);
  try { localStorage.setItem('kq-language', lang); } catch {}
}

const selectedLanguage = new URLSearchParams(location.search).get('lang') || (() => {
  try { return localStorage.getItem('kq-language'); } catch { return null; }
})();
setLanguage(selectedLanguage || 'en');
languageSelect.addEventListener('change', event => setLanguage(event.target.value));
