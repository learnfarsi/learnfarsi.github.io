{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const COLORS=['#c8703a','#5b9bd5','#6baa7a','#9b7fc8','#d4a843'];\
\
const LESSONS = [\
\
// ==================== ALPHABET ====================\
\{id:'a1',type:'alpha',num:'A1',title:'Alef \'b7 Be \'b7 Pe \'b7 Te \'b7 Se',fa:'\uc0\u1575  \u1576  \u1662  \u1578  \u1579 ',\
intro:'Welcome to Persian! We start with the first five letters. Persian reads right to left, and most letters connect to each other like cursive.',\
chars:[\
  \{l:'\uc0\u1575 ',n:'Alef',r:'\u257  / a',d:'Like "a" in father. Alef is a vowel carrier and does NOT connect to the next letter.',nc:true\},\
  \{l:'\uc0\u1576 ',n:'Be',r:'b',d:'Like "b" in book. One dot below the baseline.'\},\
  \{l:'\uc0\u1662 ',n:'Pe',r:'p',d:'Like "p" in pen. Three dots below \'97 Persian\\'s own letter, not in Arabic!'\},\
  \{l:'\uc0\u1578 ',n:'Te',r:'t',d:'Like "t" in ten. Two dots above.'\},\
  \{l:'\uc0\u1579 ',n:'Se',r:'s',d:'Like "s" in sun. Three dots above. Rare in modern Farsi words.'\},\
],\
forms:[\
  \{c:'\uc0\u1575 ',n:'Alef',s:'\u1575 ',i:'\u1575 \u1614 ',m:'\u1600 \u1575 ',f:'\u1600 \u1575 ',nc:true,tip:'Alef NEVER connects to the letter on its left.'\},\
  \{c:'\uc0\u1576 ',n:'Be',s:'\u1576 ',i:'\u1576 \u1600 ',m:'\u1600 \u1576 \u1600 ',f:'\u1600 \u1576 '\},\
  \{c:'\uc0\u1662 ',n:'Pe',s:'\u1662 ',i:'\u1662 \u1600 ',m:'\u1600 \u1662 \u1600 ',f:'\u1600 \u1662 '\},\
  \{c:'\uc0\u1578 ',n:'Te',s:'\u1578 ',i:'\u1578 \u1600 ',m:'\u1600 \u1578 \u1600 ',f:'\u1600 \u1578 '\},\
  \{c:'\uc0\u1579 ',n:'Se',s:'\u1579 ',i:'\u1579 \u1600 ',m:'\u1600 \u1579 \u1600 ',f:'\u1600 \u1579 '\},\
],\
vocab:[\
  \{fa:'\uc0\u1570 \u1576 ',ro:'\u257 b',en:'water'\},\{fa:'\u1576 \u1575 \u1576 \u1575 ',ro:'b\u257 b\u257 ',en:'dad/father'\},\{fa:'\u1578 \u1575 \u1576 ',ro:'t\u257 b',en:'swing/light'\},\
  \{fa:'\uc0\u1662 \u1616 \u1583 \u1614 \u1585 ',ro:'pedar',en:'father (formal)'\},\{fa:'\u1576 \u1575 \u1576 ',ro:'b\u257 b',en:'door/chapter'\},\
],\
sentences:[\
  \{fa:'\uc0\u1576 \u1575 \u1576 \u1575  \u1570 \u1576  \u1583 \u1575 \u1583 .',ro:'B\u257 b\u257  \u257 b d\u257 d.',en:'Dad gave water. (The classic Persian primer sentence!)'\},\
  \{fa:'\uc0\u1570 \u1576  \u1578 \u1575 \u1576  \u1583 \u1575 \u1585 \u1583 .',ro:'\u256 b t\u257 b d\u257 rad.',en:'The water shines.'\},\
],\
culture:\{icon:'\uc0\u55357 \u56540 ',tag:'Primer',title:'The Sentence Every Iranian Child Reads First',\
fa:'\uc0\u1576 \u1575 \u1576 \u1575  \u1570 \u1576  \u1583 \u1575 \u1583 .',ro:'B\u257 b\u257  \u257 b d\u257 d.',en:'"Dad gave water."',\
body:'For over a century, this three-word sentence has opened every Persian literacy primer. Simple letters, deep tenderness. Water (\uc0\u1570 \u1576 ) holds sacred status in Persian culture \'97 it means generosity, life, purity. Rivers, fountains, and reflecting pools run through Persian gardens, poetry, and architecture.'\},\
quiz:[\
  \{q:'Name this letter:',c:'\uc0\u1576 ',opts:['Alef','Be','Pe','Te'],a:1\},\
  \{q:'Which letter does NOT connect leftward?',c:'',opts:['\uc0\u1576  Be','\u1662  Pe','\u1575  Alef','\u1578  Te'],a:2\},\
  \{q:'\uc0\u1570 \u1576  means:',c:'\u1570 \u1576 ',opts:['Fire','Water','Earth','Wind'],a:1\},\
  \{q:'Pe (\uc0\u1662 ) has how many dots?',c:'\u1662 ',opts:['One below','Two above','Three below','None'],a:2\},\
  \{q:'\uc0\u1662 \u1616 \u1583 \u1614 \u1585  means:',c:'\u1662 \u1616 \u1583 \u1614 \u1585 ',opts:['Mother','Brother','Father','Child'],a:2\},\
]\},\
\
\{id:'a2',type:'alpha',num:'A2',title:'Jim \'b7 Che \'b7 He \'b7 Khe \'b7 Dal',fa:'\uc0\u1580  \u1670  \u1581  \u1582  \u1583 ',\
intro:'Five more letters. Notice how \uc0\u1580  \u1670  \u1581  \u1582  all share the same body \'97 only their dots differ! And Dal is another non-connector.',\
chars:[\
  \{l:'\uc0\u1580 ',n:'Jim',r:'j',d:'Like "j" in jar. Dot below the curve.'\},\
  \{l:'\uc0\u1670 ',n:'Che',r:'ch',d:'Like "ch" in chair. Three dots below. Persian\\'s own!'\},\
  \{l:'\uc0\u1581 ',n:'He (Jimi)',r:'h',d:'Breathy "h". Same shape as Jim/Che but NO dots.'\},\
  \{l:'\uc0\u1582 ',n:'Khe',r:'kh',d:'Guttural like Scottish "loch". One dot above.'\},\
  \{l:'\uc0\u1583 ',n:'Dal',r:'d',d:'Like "d" in door. Does NOT connect to next letter.',nc:true\},\
],\
forms:[\
  \{c:'\uc0\u1580 ',n:'Jim',s:'\u1580 ',i:'\u1580 \u1600 ',m:'\u1600 \u1580 \u1600 ',f:'\u1600 \u1580 '\},\
  \{c:'\uc0\u1670 ',n:'Che',s:'\u1670 ',i:'\u1670 \u1600 ',m:'\u1600 \u1670 \u1600 ',f:'\u1600 \u1670 '\},\
  \{c:'\uc0\u1581 ',n:'He',s:'\u1581 ',i:'\u1581 \u1600 ',m:'\u1600 \u1581 \u1600 ',f:'\u1600 \u1581 '\},\
  \{c:'\uc0\u1582 ',n:'Khe',s:'\u1582 ',i:'\u1582 \u1600 ',m:'\u1600 \u1582 \u1600 ',f:'\u1600 \u1582 '\},\
  \{c:'\uc0\u1583 ',n:'Dal',s:'\u1583 ',i:'\u1583 \u1600 ',m:'\u1600 \u1583 ',f:'\u1600 \u1583 ',nc:true,tip:'Dal does NOT connect to the next letter.'\},\
],\
vocab:[\
  \{fa:'\uc0\u1580 \u1575 \u1606 ',ro:'j\u257 n',en:'soul / dear one'\},\{fa:'\u1670 \u1575 \u1740 ',ro:'ch\u257 y',en:'tea'\},\{fa:'\u1583 \u1614 \u1585 ',ro:'dar',en:'door / in'\},\
  \{fa:'\uc0\u1582 \u1575 \u1606 \u1607 ',ro:'kh\u257 ne',en:'house / home'\},\{fa:'\u1576 \u1575 \u1583 ',ro:'b\u257 d',en:'wind'\},\
],\
sentences:[\
  \{fa:'\uc0\u1670 \u1575 \u1740  \u1583 \u1575 \u1585 \u1740 \u1567 ',ro:'Ch\u257 y d\u257 ri?',en:'Do you have (any) tea?'\},\
  \{fa:'\uc0\u1582 \u1575 \u1606 \u1607 \u8204 \u1575 \u1605  \u1580 \u1575 \u1583 \u1575 \u1585  \u1575 \u1587 \u1578 .',ro:'Kh\u257 ne-am j\u257 d\u257 r ast.',en:'My house is spacious.'\},\
],\
culture:\{icon:'\uc0\u55356 \u57205 ',tag:'Culture',title:'\u1670 \u1575 \u1740  \'97 Tea & Persian Hospitality',\
fa:'\uc0\u1670 \u1575 \u1740  \u1606 \u1582 \u1608 \u1585 \u1583 \u1740 \u1567 ',ro:'Ch\u257 y nakhord\u299 ?',en:'"Haven\\'t you had tea yet?"',\
body:'Offering tea (\uc0\u1670 \u1575 \u1740 ) is the first act of Persian hospitality. A host who hasn\\'t offered tea has not truly welcomed you. Persian tea is brewed strong in a small glass (\u1575 \u1587 \u1578 \u1705 \u1575 \u1606  estek\u257 n), often taken with rock sugar (\u1606 \u1576 \u1575 \u1578  nab\u257 t) held between the teeth while sipping. Refusing tea can feel like refusing friendship itself.'\},\
quiz:[\
  \{q:'\uc0\u1670  sounds like:',c:'\u1670 ',opts:['"j" in jar','"ch" in chair','"kh" in loch','"h" breathy'],a:1\},\
  \{q:'Which does NOT connect leftward?',c:'',opts:['\uc0\u1580  Jim','\u1670  Che','\u1581  He','\u1583  Dal'],a:3\},\
  \{q:'\uc0\u1582 \u1575 \u1606 \u1607  means:',c:'\u1582 \u1575 \u1606 \u1607 ',opts:['Tea','Door','Home','Soul'],a:2\},\
  \{q:'\uc0\u1670 \u1575 \u1740  means:',c:'\u1670 \u1575 \u1740 ',opts:['Coffee','Water','Tea','Milk'],a:2\},\
  \{q:'Khe (\uc0\u1582 ) sounds like:',c:'\u1582 ',opts:['"k" in key','"ch" in chair','Scottish "ch" in loch','"h" in hat'],a:2\},\
]\},\
\
\{id:'a3',type:'alpha',num:'A3',title:'Zal \'b7 Re \'b7 Ze \'b7 Zhe \'b7 Sin',fa:'\uc0\u1584  \u1585  \u1586  \u1688  \u1587 ',\
intro:'Four non-connectors in one lesson! The Re family all sit below the line and sweep right. Sin has three distinctive "teeth" on top.',\
chars:[\
  \{l:'\uc0\u1584 ',n:'Zal',r:'z',d:'Like "z" in zone. Does NOT connect left.',nc:true\},\
  \{l:'\uc0\u1585 ',n:'Re',r:'r',d:'A flapped/rolled "r". Does NOT connect left.',nc:true\},\
  \{l:'\uc0\u1586 ',n:'Ze',r:'z',d:'Like "z" in zone. Does NOT connect left.',nc:true\},\
  \{l:'\uc0\u1688 ',n:'Zhe',r:'zh',d:'Like "s" in measure or French "j". Does NOT connect left.',nc:true\},\
  \{l:'\uc0\u1587 ',n:'Sin',r:'s',d:'Like "s" in sea. Three teeth on top. Connects.'\},\
],\
forms:[\
  \{c:'\uc0\u1584 ',n:'Zal',s:'\u1584 ',i:'\u1584 ',m:'\u1600 \u1584 ',f:'\u1600 \u1584 ',nc:true,tip:'Does NOT connect left.'\},\
  \{c:'\uc0\u1585 ',n:'Re',s:'\u1585 ',i:'\u1585 ',m:'\u1600 \u1585 ',f:'\u1600 \u1585 ',nc:true,tip:'Does NOT connect left.'\},\
  \{c:'\uc0\u1586 ',n:'Ze',s:'\u1586 ',i:'\u1586 ',m:'\u1600 \u1586 ',f:'\u1600 \u1586 ',nc:true,tip:'Does NOT connect left.'\},\
  \{c:'\uc0\u1688 ',n:'Zhe',s:'\u1688 ',i:'\u1688 ',m:'\u1600 \u1688 ',f:'\u1600 \u1688 ',nc:true,tip:'Does NOT connect left.'\},\
  \{c:'\uc0\u1587 ',n:'Sin',s:'\u1587 ',i:'\u1587 \u1600 ',m:'\u1600 \u1587 \u1600 ',f:'\u1600 \u1587 '\},\
],\
vocab:[\
  \{fa:'\uc0\u1587 \u1614 \u1585 ',ro:'sar',en:'head'\},\{fa:'\u1586 \u1614 \u1585 ',ro:'zar',en:'gold'\},\{fa:'\u1587 \u1614 \u1585 \u1583 ',ro:'sard',en:'cold'\},\
  \{fa:'\uc0\u1585 \u1614 \u1586 ',ro:'raz',en:'grapevine / secret'\},\{fa:'\u1583 \u1614 \u1585 \u1587 ',ro:'dars',en:'lesson'\},\
],\
sentences:[\
  \{fa:'\uc0\u1607 \u1608 \u1575  \u1587 \u1585 \u1583  \u1575 \u1587 \u1578 .',ro:'Hav\u257  sard ast.',en:'The weather is cold.'\},\
  \{fa:'\uc0\u1583 \u1614 \u1585 \u1587  \u1740 \u1575 \u1583  \u1605 \u1740 \u8204 \u1711 \u1740 \u1585 \u1605 .',ro:'Dars y\u257 d migiram.',en:'I am learning a lesson.'\},\
],\
culture:\{icon:'\uc0\u55356 \u57145 ',tag:'Poetry',title:'Rumi \'97 Master of Persian Verse',\
fa:'\uc0\u1576 \u1588 \u1606 \u1608  \u1575 \u1740 \u1606  \u1606 \u1740  \u1670 \u1608 \u1606  \u1588 \u1705 \u1575 \u1740 \u1578  \u1605 \u1740 \u8204 \u1705 \u1606 \u1583 .',ro:'Beshno in ney chon shek\u257 yat mikonad.',en:'"Listen to the reed, how it tells a tale of separation."',\
body:'These are the opening words of the Masnavi by R\uc0\u363 m\u299  (1207\'961273), one of the most widely read poets in history. The ney (\u1606 \u1740 ) is a reed flute \'97 a metaphor for the soul separated from its source, longing to return. Notice how the rolling Re (\u1585 ) flows through this verse like water. Rumi wrote in Persian even while living in what is now Turkey.'\},\
quiz:[\
  \{q:'How many non-connectors are in this lesson?',c:'',opts:['2','3','4','5'],a:2\},\
  \{q:'\uc0\u1688  (Zhe) sounds like:',c:'\u1688 ',opts:['"z" in zone','"s" in measure','"ch" in chair','"r" in run'],a:1\},\
  \{q:'\uc0\u1587 \u1614 \u1585 \u1583  means:',c:'\u1587 \u1614 \u1585 \u1583 ',opts:['Hot','Cold','Rain','Wind'],a:1\},\
  \{q:'Sin (\uc0\u1587 ) has how many teeth?',c:'\u1587 ',opts:['One','Two','Three','Four'],a:2\},\
  \{q:'\uc0\u1586 \u1614 \u1585  means:',c:'\u1586 \u1614 \u1585 ',opts:['Silver','Gold','Copper','Iron'],a:1\},\
]\},\
\
\{id:'a4',type:'alpha',num:'A4',title:'Shin \'b7 Sad \'b7 Zad \'b7 Ta \'b7 Za',fa:'\uc0\u1588  \u1589  \u1590  \u1591  \u1592 ',\
intro:'Shin is Sin with three dots above. Sad, Zad, Ta, Za are "emphatic" letters \'97 they sound heavier, coming from deeper in the mouth.',\
chars:[\
  \{l:'\uc0\u1588 ',n:'Shin',r:'sh',d:'Like "sh" in shoe. Three dots above Sin\\'s body.'\},\
  \{l:'\uc0\u1589 ',n:'Sad',r:'s (emphatic)',d:'Heavier "s" \'97 a loop with a small tooth. From Arabic script.'\},\
  \{l:'\uc0\u1590 ',n:'Zad',r:'z (emphatic)',d:'Heavier "z". One dot above Sad\\'s shape.'\},\
  \{l:'\uc0\u1591 ',n:'Ta (Tarsim)',r:'t (emphatic)',d:'Heavier "t". A tall vertical stroke on a loop.'\},\
  \{l:'\uc0\u1592 ',n:'Za (Moajame)',r:'z (emphatic)',d:'Heavier "z". One dot above Ta.'\},\
],\
forms:[\
  \{c:'\uc0\u1588 ',n:'Shin',s:'\u1588 ',i:'\u1588 \u1600 ',m:'\u1600 \u1588 \u1600 ',f:'\u1600 \u1588 '\},\
  \{c:'\uc0\u1589 ',n:'Sad',s:'\u1589 ',i:'\u1589 \u1600 ',m:'\u1600 \u1589 \u1600 ',f:'\u1600 \u1589 '\},\
  \{c:'\uc0\u1590 ',n:'Zad',s:'\u1590 ',i:'\u1590 \u1600 ',m:'\u1600 \u1590 \u1600 ',f:'\u1600 \u1590 '\},\
  \{c:'\uc0\u1591 ',n:'Ta',s:'\u1591 ',i:'\u1591 \u1600 ',m:'\u1600 \u1591 \u1600 ',f:'\u1600 \u1591 '\},\
  \{c:'\uc0\u1592 ',n:'Za',s:'\u1592 ',i:'\u1592 \u1600 ',m:'\u1600 \u1592 \u1600 ',f:'\u1600 \u1592 '\},\
],\
vocab:[\
  \{fa:'\uc0\u1588 \u1614 \u1576 ',ro:'shab',en:'night'\},\{fa:'\u1588 \u1575 \u1583 \u1740 ',ro:'sh\u257 di',en:'happiness'\},\{fa:'\u1589 \u1614 \u1576 \u1575 ',ro:'sab\u257 ',en:'morning breeze'\},\
  \{fa:'\uc0\u1591 \u1614 \u1576 \u1740 \u1576 ',ro:'tabib',en:'doctor'\},\{fa:'\u1588 \u1576  \u1576 \u1582 \u1740 \u1585 ',ro:'shab bekheyr',en:'good night'\},\
],\
sentences:[\
  \{fa:'\uc0\u1588 \u1576  \u1576 \u1582 \u1740 \u1585 .',ro:'Shab bekheyr.',en:'Good night.'\},\
  \{fa:'\uc0\u1588 \u1575 \u1583 \u1740  \u1576 \u1582 \u1588  \u1576 \u1575 \u1583 .',ro:'Sh\u257 di bakhsh b\u257 d.',en:'May it bring joy.'\},\
],\
culture:\{icon:'\uc0\u55356 \u57256 ',tag:'Art',title:'Persian Miniature Painting',\
fa:'\uc0\u1606 \u1711 \u1575 \u1585 \u1711 \u1585 \u1740  \u1575 \u1740 \u1585 \u1575 \u1606 \u1740 ',ro:'Neg\u257 rgari-ye Ir\u257 ni',en:'"Persian Painting"',\
body:'Persian miniature painting (\uc0\u1606 \u1711 \u1575 \u1585 \u1711 \u1585 \u1740 ) developed from the 13th century. These jewel-like works illustrate epic poetry \'97 especially the Shahnameh (Book of Kings) by Ferdowsi. Artists used lapis lazuli blues, gold leaf, and impossible detail to portray gardens, battles, and romance. Safavid court painters of Isfahan (16th\'9617th c.) were the masters. Night scenes \'97 \u1588 \u1614 \u1576  (shab) \'97 gardens under moonlight \'97 are a recurring, beloved theme.'\},\
quiz:[\
  \{q:'Shin (\uc0\u1588 ) differs from Sin (\u1587 ) by:',c:'\u1588 ',opts:['One dot below','Two dots','Three dots above','A loop'],a:2\},\
  \{q:'\uc0\u1588 \u1614 \u1576  means:',c:'\u1588 \u1614 \u1576 ',opts:['Morning','Noon','Evening','Night'],a:3\},\
  \{q:'\uc0\u1588 \u1576  \u1576 \u1582 \u1740 \u1585  means:',c:'\u1588 \u1576  \u1576 \u1582 \u1740 \u1585 ',opts:['Good morning','Good night','Hello','Goodbye'],a:1\},\
  \{q:'Which has a dot above the Ta shape?',c:'',opts:['\uc0\u1588  Shin','\u1589  Sad','\u1591  Ta','\u1592  Za'],a:3\},\
  \{q:'\uc0\u1588 \u1575 \u1583 \u1740  means:',c:'\u1588 \u1575 \u1583 \u1740 ',opts:['Sadness','Anger','Happiness','Fear'],a:2\},\
]\},\
\
\{id:'a5',type:'alpha',num:'A5',title:'Ain \'b7 Ghain \'b7 Fe \'b7 Qaf \'b7 Kaf',fa:'\uc0\u1593  \u1594  \u1601  \u1602  \u1705 ',\
intro:'Ain is the most distinctive sound in Persian \'97 a voiced pharyngeal with no English equivalent. Ghain is Ain with a dot. Fe, Qaf, Kaf are more familiar.',\
chars:[\
  \{l:'\uc0\u1593 ',n:'Ain',r:"'",d:"A unique guttural from the throat. No English equivalent \'97 a constriction in the pharynx."\},\
  \{l:'\uc0\u1594 ',n:'Ghain',r:'gh',d:'A gargling sound, like a French "r". One dot above Ain.'\},\
  \{l:'\uc0\u1601 ',n:'Fe',r:'f',d:'Like "f" in fun. One dot above a curved body.'\},\
  \{l:'\uc0\u1602 ',n:'Qaf',r:'q',d:'A deep "k" from the back of the throat. Two dots above.'\},\
  \{l:'\uc0\u1705 ',n:'Kaf',r:'k',d:'Like "k" in key. Distinctive diagonal stroke inside.'\},\
],\
forms:[\
  \{c:'\uc0\u1593 ',n:'Ain',s:'\u1593 ',i:'\u1593 \u1600 ',m:'\u1600 \u1593 \u1600 ',f:'\u1600 \u1593 '\},\
  \{c:'\uc0\u1594 ',n:'Ghain',s:'\u1594 ',i:'\u1594 \u1600 ',m:'\u1600 \u1594 \u1600 ',f:'\u1600 \u1594 '\},\
  \{c:'\uc0\u1601 ',n:'Fe',s:'\u1601 ',i:'\u1601 \u1600 ',m:'\u1600 \u1601 \u1600 ',f:'\u1600 \u1601 '\},\
  \{c:'\uc0\u1602 ',n:'Qaf',s:'\u1602 ',i:'\u1602 \u1600 ',m:'\u1600 \u1602 \u1600 ',f:'\u1600 \u1602 '\},\
  \{c:'\uc0\u1705 ',n:'Kaf',s:'\u1705 ',i:'\u1705 \u1600 ',m:'\u1600 \u1705 \u1600 ',f:'\u1600 \u1705 '\},\
],\
vocab:[\
  \{fa:'\uc0\u1593 \u1614 \u1588 \u1602 ',ro:"'eshq",en:'love / passion'\},\{fa:'\u1705 \u1616 \u1578 \u1575 \u1576 ',ro:'ket\u257 b',en:'book'\},\{fa:'\u1594 \u1614 \u1605 ',ro:'gham',en:'sorrow'\},\
  \{fa:'\uc0\u1601 \u1575 \u1585 \u1587 \u1740 ',ro:'F\u257 rsi',en:'the Persian language'\},\{fa:'\u1593 \u1705 \u1587 ',ro:"'aks",en:'photo / image'\},\
],\
sentences:[\
  \{fa:'\uc0\u1705 \u1616 \u1578 \u1575 \u1576  \u1583 \u1575 \u1585 \u1605 .',ro:'Ket\u257 b d\u257 ram.',en:'I have a book.'\},\
  \{fa:'\uc0\u1593 \u1588 \u1602  \u1586 \u1606 \u1583 \u1711 \u1740  \u1575 \u1587 \u1578 .',ro:"'Eshq zendegi ast.",en:'Love is life.'\},\
],\
culture:\{icon:'\uc0\u55357 \u56491 ',tag:'Proverb',title:'Drop by Drop \'97 A Persian Proverb',\
fa:'\uc0\u1602 \u1591 \u1585 \u1607  \u1602 \u1591 \u1585 \u1607  \u1583 \u1585 \u1740 \u1575  \u1605 \u1740 \u8204 \u1588 \u1608 \u1583 .',ro:'Qatre qatre dary\u257  mishavad.',en:'"Drop by drop, it becomes a sea."',\
body:'This beloved proverb encourages perseverance. Every vocabulary word you memorize, every letter you practise \'97 slowly becomes an ocean of knowledge. \uc0\u1602 \u1591 \u1585 \u1607  (qatre) = drop \'b7 \u1583 \u1585 \u1740 \u1575  (dary\u257 ) = sea. The Caspian Sea bordering northern Iran is called \u1583 \u1585 \u1740 \u1575 \u1740  \u1582 \u1586 \u1585  (Dary\u257 -ye Khazar). This proverb is perfect for your journey learning \u1601 \u1575 \u1585 \u1587 \u1740 !'\},\
quiz:[\
  \{q:'\uc0\u1593 \u1614 \u1588 \u1602  means:',c:'\u1593 \u1614 \u1588 \u1602 ',opts:['Sorrow','Joy','Love','Anger'],a:2\},\
  \{q:'Ghain (\uc0\u1594 ) is Ain (\u1593 ) plus:',c:'\u1594 ',opts:['No dots','One dot above','Two dots','Three dots'],a:1\},\
  \{q:'\uc0\u1705 \u1616 \u1578 \u1575 \u1576  means:',c:'\u1705 \u1616 \u1578 \u1575 \u1576 ',opts:['Pen','Paper','Notebook','Book'],a:3\},\
  \{q:'Fe (\uc0\u1601 ) sounds like:',c:'\u1601 ',opts:['"v" in van','"f" in fun','"p" in pen','"b" in bat'],a:1\},\
  \{q:'\uc0\u1601 \u1575 \u1585 \u1587 \u1740  means:',c:'\u1601 \u1575 \u1585 \u1587 \u1740 ',opts:['Iran','Arabic','The Persian language','A city'],a:2\},\
]\},\
\
\{id:'a6',type:'alpha',num:'A6',title:'Gaf \'b7 Lam \'b7 Mim \'b7 Nun \'b7 Vav',fa:'\uc0\u1711  \u1604  \u1605  \u1606  \u1608 ',\
intro:'Gaf is the Persian "g" \'97 not found in Arabic. Lam, Mim, Nun are very common. Vav serves as both a consonant and a long vowel.',\
chars:[\
  \{l:'\uc0\u1711 ',n:'Gaf',r:'g',d:'Like "g" in go. Persian\\'s own letter \'97 not in Arabic! Two diagonal strokes on Kaf\\'s body.'\},\
  \{l:'\uc0\u1604 ',n:'Lam',r:'l',d:'Like "l" in love. A tall upward stroke that curves to connect.'\},\
  \{l:'\uc0\u1605 ',n:'Mim',r:'m',d:'Like "m" in moon. A small circle with a tail.'\},\
  \{l:'\uc0\u1606 ',n:'Nun',r:'n',d:'Like "n" in now. A bowl shape with one dot above.'\},\
  \{l:'\uc0\u1608 ',n:'Vav',r:'v / ow / u',d:'Like "v" in vine OR long "o"/"u". Does NOT connect left.',nc:true\},\
],\
forms:[\
  \{c:'\uc0\u1711 ',n:'Gaf',s:'\u1711 ',i:'\u1711 \u1600 ',m:'\u1600 \u1711 \u1600 ',f:'\u1600 \u1711 '\},\
  \{c:'\uc0\u1604 ',n:'Lam',s:'\u1604 ',i:'\u1604 \u1600 ',m:'\u1600 \u1604 \u1600 ',f:'\u1600 \u1604 '\},\
  \{c:'\uc0\u1605 ',n:'Mim',s:'\u1605 ',i:'\u1605 \u1600 ',m:'\u1600 \u1605 \u1600 ',f:'\u1600 \u1605 '\},\
  \{c:'\uc0\u1606 ',n:'Nun',s:'\u1606 ',i:'\u1606 \u1600 ',m:'\u1600 \u1606 \u1600 ',f:'\u1600 \u1606 '\},\
  \{c:'\uc0\u1608 ',n:'Vav',s:'\u1608 ',i:'\u1608 ',m:'\u1600 \u1608 ',f:'\u1600 \u1608 ',nc:true,tip:'Vav does NOT connect to the next letter.'\},\
],\
vocab:[\
  \{fa:'\uc0\u1605 \u1575 \u1583 \u1585 ',ro:'m\u257 dar',en:'mother'\},\{fa:'\u1606 \u1575 \u1606 ',ro:'n\u257 n',en:'bread'\},\{fa:'\u1711 \u1604 ',ro:'gol',en:'flower / rose'\},\
  \{fa:'\uc0\u1606 \u1575 \u1605 ',ro:'n\u257 m',en:'name'\},\{fa:'\u1604 \u1575 \u1604 ',ro:'l\u257 l',en:'silent / mute'\},\{fa:'\u1605 \u1606 ',ro:'man',en:'I / me'\},\
],\
sentences:[\
  \{fa:'\uc0\u1606 \u1575 \u1605  \u1605 \u1606  \u1604 \u1740 \u1604 \u1575 \u1587 \u1578 .',ro:'N\u257 m-e man Layl\u257 st.',en:'My name is Layla.'\},\
  \{fa:'\uc0\u1711 \u1604  \u1586 \u1740 \u1576 \u1575 \u1587 \u1578 .',ro:'Gol zib\u257 st.',en:'The flower is beautiful.'\},\
],\
culture:\{icon:'\uc0\u55356 \u57146 ',tag:'Symbol',title:'\u1711 \u1604  \'97 The Rose in Persian Culture',\
fa:'\uc0\u1711 \u1604  \u1576 \u1740 \u8204 \u1582 \u1575 \u1585  \u1606 \u1605 \u1740 \u8204 \u1588 \u1608 \u1583 .',ro:'Gol bi-kh\u257 r nemishavad.',en:'"A rose does not grow without thorns."',\
body:'The rose (\uc0\u1711 \u1604 ) and the nightingale (\u1576 \u1604 \u1576 \u1604  bulbul) are the two great symbols of Persian poetry. The rose represents beauty, the beloved, and divine love. The nightingale weeps for the rose \'97 representing the lover longing for the unattainable beloved. This pairing appears in Hafez, Rumi, and hundreds of classical poets. When you give flowers in Iran, odd numbers only \'97 even numbers are for funerals.'\},\
quiz:[\
  \{q:'Gaf (\uc0\u1711 ) differs from Kaf (\u1705 ) by:',c:'\u1711 ',opts:['One dot below','Two diagonal strokes added','Three dots above','A loop'],a:1\},\
  \{q:'Vav (\uc0\u1608 ) is a non-connector?',c:'\u1608 ',opts:['True','False'],a:0\},\
  \{q:'\uc0\u1605 \u1575 \u1583 \u1585  means:',c:'\u1605 \u1575 \u1583 \u1585 ',opts:['Father','Sister','Mother','Brother'],a:2\},\
  \{q:'\uc0\u1606 \u1575 \u1606  means:',c:'\u1606 \u1575 \u1606 ',opts:['Water','Tea','Bread','Rice'],a:2\},\
  \{q:'\uc0\u1605 \u1606  means:',c:'\u1605 \u1606 ',opts:['You','He/She','I / me','We'],a:2\},\
]\},\
\
\{id:'a7',type:'alpha',num:'A7',title:'He \'b7 Ye \'97 Final Letters!',fa:'\uc0\u1607  \u1740 ',\
intro:'The last two letters of the Persian alphabet! He is tricky \'97 it changes shape a lot. Ye is the long "ee" vowel and also the "y" consonant. You now know all 32 letters!',\
chars:[\
  \{l:'\uc0\u1607 ',n:'He (Havvaz)',r:'h',d:'Like "h" in hat. Changes shape a lot: standalone \u1607 , initial \u1607 \u1600 , medial \u1600 \u1607 \u1600 , final \u1600 \u1607  or \u1600 \u8204 \u1607 .'\},\
  \{l:'\uc0\u1740 ',n:'Ye',r:'y / i',d:'Like "y" in yes OR long "ee". Very common \'97 also an ez\u257 fe connector.'\},\
],\
forms:[\
  \{c:'\uc0\u1607 ',n:'He',s:'\u1607 ',i:'\u1607 \u1600 ',m:'\u1600 \u1607 \u1600 ',f:'\u1600 \u1607  / \u1607 \u8204 ',nc:false\},\
  \{c:'\uc0\u1740 ',n:'Ye',s:'\u1740 ',i:'\u1740 \u1600 ',m:'\u1600 \u1740 \u1600 ',f:'\u1600 \u1740 '\},\
],\
vocab:[\
  \{fa:'\uc0\u1607 \u1614 \u1585 ',ro:'har',en:'every / each'\},\{fa:'\u1740 \u1575 \u1583 ',ro:'y\u257 d',en:'memory / learning'\},\{fa:'\u1607 \u1608 \u1575 ',ro:'hav\u257 ',en:'weather / air'\},\
  \{fa:'\uc0\u1575 \u1740 \u1585 \u1575 \u1606 ',ro:'Ir\u257 n',en:'Iran'\},\{fa:'\u1586 \u1740 \u1576 \u1575 ',ro:'zib\u257 ',en:'beautiful'\},\{fa:'\u1582 \u1608 \u1576 ',ro:'khub',en:'good'\},\
],\
sentences:[\
  \{fa:'\uc0\u1575 \u1740 \u1585 \u1575 \u1606  \u1586 \u1740 \u1576 \u1575 \u1587 \u1578 .',ro:'Ir\u257 n zib\u257 st.',en:'Iran is beautiful.'\},\
  \{fa:'\uc0\u1607 \u1608 \u1575  \u1582 \u1608 \u1576  \u1575 \u1587 \u1578 .',ro:'Hav\u257  khub ast.',en:'The weather is good.'\},\
  \{fa:'\uc0\u1740 \u1575 \u1583  \u1576 \u1711 \u1740 \u1585 !',ro:'Y\u257 d begir!',en:'Learn! (Take it to memory!)'\},\
],\
culture:\{icon:'\uc0\u55356 \u57225 ',tag:'Milestone',title:'\u1588 \u1605 \u1575  \u1575 \u1604 \u1601 \u1576 \u1575  \u1585 \u1575  \u1740 \u1575 \u1583  \u1711 \u1585 \u1601 \u1578 \u1740 \u1583 ! \'97 You Learned the Alphabet!',\
fa:'\uc0\u1605 \u1576 \u1575 \u1585 \u1705  \u1576 \u1575 \u1588 \u1583 !',ro:'Mob\u257 rak b\u257 shad!',en:'"Congratulations!"',\
body:'You now know all 32 letters of the Persian alphabet (\uc0\u1575 \u1604 \u1601 \u1576 \u1575 , alefb\u257 ). The name comes from the first two letters: \u1575 \u1604 \u1601  (Alef) + \u1576  (Be). Persian uses the Arabic script but has 4 extra letters: \u1662  \u1670  \u1688  \u1711 . Now you can sound out any Persian word, even if you don\\'t know its meaning yet. This is a huge milestone! As Iranians say: \u1602 \u1583 \u1605  \u1576 \u1607  \u1602 \u1583 \u1605  \'97 qadam be qadam \'97 step by step.'\},\
quiz:[\
  \{q:'How many letters does the Persian alphabet have?',c:'',opts:['26','28','32','36'],a:2\},\
  \{q:'Which 4 letters exist in Persian but NOT Arabic?',c:'',opts:['\uc0\u1576  \u1662  \u1578  \u1579 ','\u1662  \u1670  \u1688  \u1711 ','\u1580  \u1670  \u1581  \u1582 ','\u1705  \u1711  \u1604  \u1605 '],a:1\},\
  \{q:'\uc0\u1607 \u1608 \u1575  means:',c:'\u1607 \u1608 \u1575 ',opts:['Water','Air/Weather','Earth','Fire'],a:1\},\
  \{q:'\uc0\u1605 \u1576 \u1575 \u1585 \u1705  \u1576 \u1575 \u1588 \u1583  means:',c:'\u1605 \u1576 \u1575 \u1585 \u1705  \u1576 \u1575 \u1588 \u1583 ',opts:['Good night','Thank you','Congratulations','Welcome'],a:2\},\
  \{q:'Ye (\uc0\u1740 ) can be:',c:'\u1740 ',opts:['Only consonant "y"','Only vowel "ee"','Both consonant and long vowel','Neither'],a:2\},\
]\},\
\
// ==================== CONVERSATIONAL ====================\
\{id:'c1',type:'conv',num:'C1',title:'Greetings & Introductions',fa:'\uc0\u1587 \u1604 \u1575 \u1605  \u1608  \u1570 \u1588 \u1606 \u1575 \u1740 \u1740 ',\
intro:'A1 level. Learn to say hello, introduce yourself, ask names, and use basic courtesy phrases. Iranians greet warmly \'97 expect handshakes, sometimes cheek kisses among close friends.',\
phrases:[\
  \{fa:'\uc0\u1587 \u1604 \u1575 \u1605 ',ro:'Sal\u257 m',en:'Hello'\},\
  \{fa:'\uc0\u1582 \u1608 \u1576 \u1740 \u1567 ',ro:'Khuby?',en:'Are you well? (informal)'\},\
  \{fa:'\uc0\u1582 \u1608 \u1576 \u1605 \u1548  \u1605 \u1605 \u1606 \u1608 \u1606 .',ro:'Khubam, mamnun.',en:'I\\'m well, thank you.'\},\
  \{fa:'\uc0\u1575 \u1587 \u1605 \u1578  \u1670 \u1740 \u1607 \u1567 ',ro:'Esmat chiye?',en:'What\\'s your name? (informal)'\},\
  \{fa:'\uc0\u1575 \u1587 \u1605 \u1605  ... \u1575 \u1587 \u1578 .',ro:'Esmam ... ast.',en:'My name is ...'\},\
  \{fa:'\uc0\u1575 \u1586  \u1570 \u1588 \u1606 \u1575 \u1740 \u1740 \u8204 \u1578 \u1608 \u1606  \u1582 \u1608 \u1588 \u1581 \u1575 \u1604 \u1605 .',ro:'Az \u257 shn\u257 yi-tun khushh\u257 lam.',en:'Pleased to meet you.'\},\
  \{fa:'\uc0\u1582 \u1583 \u1575 \u1581 \u1575 \u1601 \u1592 .',ro:'Khod\u257 h\u257 fez.',en:'Goodbye (formal)'\},\
  \{fa:'\uc0\u1576 \u1593 \u1583 \u1575 \u1611  \u1605 \u1740 \u8204 \u1576 \u1740 \u1606 \u1605 \u1578 .',ro:'Ba\\'dan mibinamat.',en:'See you later.'\},\
],\
dialogue:\{title:'First meeting at a caf\'e9 in Tehran',\
lines:[\
  \{who:'A',name:'\uc0\u1587 \u1575 \u1585 \u1575  Sara',fa:'\u1587 \u1604 \u1575 \u1605 ! \u1575 \u1587 \u1605 \u1605  \u1587 \u1575 \u1585 \u1575 \u1587 \u1578 . \u1575 \u1587 \u1605  \u1578 \u1608  \u1670 \u1740 \u1607 \u1567 ',ro:'Sal\u257 m! Esmam S\u257 r\u257 st. Esm-e to chiye?',en:'Hi! My name is Sara. What\\'s your name?'\},\
  \{who:'B',name:'\uc0\u1585 \u1590 \u1575  Rez\u257 ',fa:'\u1587 \u1604 \u1575 \u1605  \u1587 \u1575 \u1585 \u1575 ! \u1605 \u1606 \u1605  \u1585 \u1590 \u1575 \u1605 . \u1582 \u1608 \u1588 \u1608 \u1602 \u1578 \u1605 .',ro:'Sal\u257 m S\u257 r\u257 ! Manam Rez\u257 m. Khoshvagtam.',en:'Hi Sara! I\\'m Reza too. Nice to meet you.'\},\
  \{who:'A',name:'\uc0\u1587 \u1575 \u1585 \u1575  Sara',fa:'\u1575 \u1586  \u1705 \u1580 \u1575 \u1740 \u1740 \u1548  \u1585 \u1590 \u1575 \u1567 ',ro:'Az koj\u257 yi, Rez\u257 ?',en:'Where are you from, Reza?'\},\
  \{who:'B',name:'\uc0\u1585 \u1590 \u1575  Rez\u257 ',fa:'\u1575 \u1586  \u1578 \u1607 \u1585 \u1575 \u1606 \u1605 . \u1578 \u1608  \u1670 \u1740 \u1567 ',ro:'Az Tehr\u257 nam. To chi?',en:'I\\'m from Tehran. And you?'\},\
  \{who:'A',name:'\uc0\u1587 \u1575 \u1585 \u1575  Sara',fa:'\u1605 \u1606 \u1605  \u1575 \u1586  \u1578 \u1607 \u1585 \u1575 \u1606 \u1605 ! \u1670 \u1607  \u1580 \u1575 \u1604 \u1576 !',ro:'Manam az Tehr\u257 nam! Che j\u257 leb!',en:'I\\'m from Tehran too! How interesting!'\},\
]\},\
culture:\{icon:'\uc0\u55358 \u56605 ',tag:'Etiquette',title:'Ta\\'arof \'97 The Art of Persian Politeness',\
fa:'\uc0\u1576 \u1601 \u1585 \u1605 \u1575 \u1740 \u1740 \u1583 !',ro:'Befarmayyid!',en:'"Please, go ahead / help yourself!"',\
body:'Ta\\'arof (\uc0\u1578 \u1593 \u1575 \u1585 \u1601 ) is a cornerstone of Iranian social life \'97 a ritual politeness where people offer more than they intend and refuse more than they want. If you admire something in someone\\'s home, they will likely offer it to you ("it\\'s yours" \'97 \u1605 \u1575 \u1604  \u1588 \u1605 \u1575 \u1587 \u1578 ). You must refuse politely at least twice before accepting. When entering a door, both people will insist the other goes first \'97 "\u1576 \u1601 \u1585 \u1605 \u1575 \u1740 \u1740 \u1583 !" (after you!). Understanding ta\\'arof helps you navigate Iranian hospitality gracefully.'\},\
quiz:[\
  \{q:'\uc0\u1587 \u1604 \u1575 \u1605  means:',c:'\u1587 \u1604 \u1575 \u1605 ',opts:['Goodbye','Hello','Thank you','Please'],a:1\},\
  \{q:'\uc0\u1582 \u1608 \u1576 \u1605  \u1605 \u1605 \u1606 \u1608 \u1606  means:',c:'',opts:['Nice to meet you','Good morning','I\\'m well, thank you','See you later'],a:2\},\
  \{q:'\uc0\u1575 \u1587 \u1605 \u1578  \u1670 \u1740 \u1607  means:',c:'',opts:['How are you?','Where are you from?','What is your name?','How old are you?'],a:2\},\
  \{q:'\uc0\u1582 \u1583 \u1575 \u1581 \u1575 \u1601 \u1592  means:',c:'\u1582 \u1583 \u1575 \u1581 \u1575 \u1601 \u1592 ',opts:['Hello','Goodbye','Welcome','Sorry'],a:1\},\
  \{q:'Ta\\'arof is:',c:'',opts:['A Persian dish','A type of music','Ritual politeness','A greeting'],a:2\},\
]\},\
\
\{id:'c2',type:'conv',num:'C2',title:'Numbers, Age & Time',fa:'\uc0\u1575 \u1593 \u1583 \u1575 \u1583 \u1548  \u1587 \u1606  \u1608  \u1586 \u1605 \u1575 \u1606 ',\
intro:'A1\'96A2 level. Persian numbers, telling time, asking ages. Persian uses its own numeral shapes (\uc0\u1632 \u1633 \u1634 \u1635 ...) but Western numerals (0123...) are common too.',\
phrases:[\
  \{fa:'\uc0\u1670 \u1606 \u1583  \u1587 \u1575 \u1604 \u1578 \u1607 \u1567 ',ro:'Chand s\u257 late?',en:'How old are you? (informal)'\},\
  \{fa:'\uc0\u1576 \u1740 \u1587 \u1578  \u1608  \u1587 \u1607  \u1587 \u1575 \u1604 \u1605 \u1607 .',ro:'Bist-o-se s\u257 lame.',en:'I am 23 years old.'\},\
  \{fa:'\uc0\u1587 \u1575 \u1593 \u1578  \u1670 \u1606 \u1583 \u1607 \u1567 ',ro:'S\u257 \\'at chande?',en:'What time is it?'\},\
  \{fa:'\uc0\u1587 \u1575 \u1593 \u1578  \u1587 \u1607  \u1575 \u1587 \u1578 .',ro:'S\u257 \\'at se ast.',en:'It is 3 o\\'clock.'\},\
  \{fa:'\uc0\u1575 \u1604 \u1575 \u1606  \u1670 \u1607  \u1585 \u1608 \u1586 \u1740 \u1607 \u1567 ',ro:'Al\u257 n che ruzi-ye?',en:'What day is it today?'\},\
  \{fa:'\uc0\u1575 \u1605 \u1585 \u1608 \u1586  \u1583 \u1608 \u1588 \u1606 \u1576 \u1607 \u8204 \u1587 \u1578 .',ro:'Emruz doshanbe-st.',en:'Today is Monday.'\},\
  \{fa:'\uc0\u1583 \u1740 \u1585  \u1588 \u1583 !',ro:'Dir shod!',en:'We\\'re late!'\},\
],\
numbers:[\
  \{n:'\uc0\u1740 \u1705 ',r:'yek',v:1\},\{n:'\u1583 \u1608 ',r:'do',v:2\},\{n:'\u1587 \u1607 ',r:'se',v:3\},\{n:'\u1670 \u1607 \u1575 \u1585 ',r:'chah\u257 r',v:4\},\
  \{n:'\uc0\u1662 \u1606 \u1580 ',r:'panj',v:5\},\{n:'\u1588 \u1588 ',r:'shesh',v:6\},\{n:'\u1607 \u1601 \u1578 ',r:'haft',v:7\},\{n:'\u1607 \u1588 \u1578 ',r:'hasht',v:8\},\
  \{n:'\uc0\u1606 \u1607 ',r:'noh',v:9\},\{n:'\u1583 \u1607 ',r:'dah',v:10\},\{n:'\u1576 \u1740 \u1587 \u1578 ',r:'bist',v:20\},\{n:'\u1589 \u1583 ',r:'sad',v:100\},\
],\
dialogue:\{title:'Friends making plans',\
lines:[\
  \{who:'A',name:'\uc0\u1606 \u1740 \u1604 \u1608 \u1601 \u1585  Nilufar',fa:'\u1587 \u1575 \u1593 \u1578  \u1670 \u1606 \u1583 \u1607 \u1567  \u1583 \u1740 \u1585 \u1605  \u1605 \u1740 \u1588 \u1607 !',ro:'S\u257 \\'at chande? Diram mishe!',en:'What time is it? I\\'m going to be late!'\},\
  \{who:'B',name:'\uc0\u1575 \u1605 \u1740 \u1585  Amir',fa:'\u1587 \u1575 \u1593 \u1578  \u1607 \u1588 \u1578  \u1608  \u1606 \u1740 \u1605 \u1607 . \u1705 \u1580 \u1575  \u1605 \u1740 \u1585 \u1740 \u1567 ',ro:'S\u257 \\'at hasht-o-nime. Koj\u257  miri?',en:'It\\'s half past eight. Where are you going?'\},\
  \{who:'A',name:'\uc0\u1606 \u1740 \u1604 \u1608 \u1601 \u1585  Nilufar',fa:'\u1705 \u1604 \u1575 \u1587  \u1601 \u1575 \u1585 \u1587 \u1740  \u1583 \u1575 \u1585 \u1605  \u1587 \u1575 \u1593 \u1578  \u1606 \u1607 .',ro:'Kel\u257 s-e F\u257 rsi d\u257 ram s\u257 \\'at noh.',en:'I have a Persian class at nine.'\},\
  \{who:'B',name:'\uc0\u1575 \u1605 \u1740 \u1585  Amir',fa:'\u1607 \u1606 \u1608 \u1586  \u1576 \u1740 \u1587 \u1578  \u1583 \u1602 \u1740 \u1602 \u1607  \u1605 \u1608 \u1606 \u1583 \u1607 . \u1606 \u1711 \u1585 \u1575 \u1606  \u1606 \u1576 \u1575 \u1588 !',ro:'Hanuz bist daqiqe munde. Nagar\u257 n nab\u257 sh!',en:'There\\'s still twenty minutes left. Don\\'t worry!'\},\
]\},\
culture:\{icon:'\uc0\u55357 \u56517 ',tag:'Calendar',title:'The Persian Solar Calendar \'97 \u1588 \u1605 \u1587 \u1740 ',\
fa:'\uc0\u1606 \u1608 \u1585 \u1608 \u1586  \u1605 \u1576 \u1575 \u1585 \u1705 !',ro:'Nowruz Mob\u257 rak!',en:'"Happy New Year!"',\
body:'Iran uses the Solar Hijri calendar (\uc0\u1578 \u1602 \u1608 \u1740 \u1605  \u1588 \u1605 \u1587 \u1740 ). The Persian New Year, Nowruz (\u1606 \u1608 \u1585 \u1608 \u1586  \'97 "New Day"), falls on the Spring Equinox, around March 20\'9621. The year 2025 CE = 1404 in the Persian calendar. Nowruz is celebrated for 13 days with the Haft-Seen table (\u1607 \u1601 \u1578 \u8204 \u1587 \u1740 \u1606 ) \'97 seven items starting with the letter "s" (sin): sprouted wheat, apples, garlic, sumac, vinegar, coins, and hyacinth. It is the biggest celebration in Iranian culture.'\},\
quiz:[\
  \{q:'\uc0\u1587 \u1575 \u1593 \u1578  \u1670 \u1606 \u1583 \u1607  means:',c:'',opts:['What day is it?','What time is it?','How old are you?','Where are you?'],a:1\},\
  \{q:'\uc0\u1576 \u1740 \u1587 \u1578  means:',c:'\u1576 \u1740 \u1587 \u1578 ',opts:['10','15','20','25'],a:2\},\
  \{q:'Nowruz falls on:',c:'',opts:['December 21','January 1','The Spring Equinox','The Autumn Equinox'],a:2\},\
  \{q:'\uc0\u1583 \u1740 \u1585  \u1588 \u1583  means:',c:'\u1583 \u1740 \u1585  \u1588 \u1583 ',opts:['It\\'s early','We\\'re late','Time to go','Let\\'s wait'],a:1\},\
  \{q:'The Persian year 1404 corresponds roughly to:',c:'',opts:['2003','2015','2025','2030'],a:2\},\
]\},\
\
\{id:'c3',type:'conv',num:'C3',title:'Food, Caf\'e9s & Restaurants',fa:'\uc0\u1594 \u1584 \u1575  \u1608  \u1585 \u1587 \u1578 \u1608 \u1585 \u1575 \u1606 ',\
intro:'A2 level. Order food, talk about likes and dislikes, navigate a Persian restaurant. Iranian cuisine is one of the world\\'s great food traditions.',\
phrases:[\
  \{fa:'\uc0\u1740 \u1607  \u1670 \u1575 \u1740  \u1604 \u1591 \u1601 \u1575 \u1611 .',ro:'Ye ch\u257 y lotfan.',en:'One tea please.'\},\
  \{fa:'\uc0\u1605 \u1606 \u1608 \u1740  \u1594 \u1584 \u1575  \u1583 \u1575 \u1585 \u1740 \u1583 \u1567 ',ro:'Meno-ye ghaz\u257  d\u257 rid?',en:'Do you have a food menu?'\},\
  \{fa:'\uc0\u1594 \u1584 \u1575 \u1740  \u1575 \u1740 \u1585 \u1575 \u1606 \u1740  \u1583 \u1608 \u1587 \u1578  \u1583 \u1575 \u1585 \u1605 .',ro:'Ghaz\u257 -ye Ir\u257 ni dust d\u257 ram.',en:'I love Iranian food.'\},\
  \{fa:'\uc0\u1670 \u1740  \u1662 \u1740 \u1588 \u1606 \u1607 \u1575 \u1583  \u1605 \u1740 \u8204 \u1583 \u1740 \u1583 \u1567 ',ro:'Chi pishnah\u257 d midid?',en:'What do you recommend?'\},\
  \{fa:'\uc0\u1581 \u1587 \u1575 \u1576  \u1604 \u1591 \u1601 \u1575 \u1611 .',ro:'Hes\u257 b lotfan.',en:'The bill please.'\},\
  \{fa:'\uc0\u1582 \u1740 \u1604 \u1740  \u1582 \u1608 \u1588 \u1605 \u1586 \u1607  \u1576 \u1608 \u1583 !',ro:'Kheyly khoshmaze bud!',en:'It was very delicious!'\},\
  \{fa:'\uc0\u1711 \u1740 \u1575 \u1607 \u1582 \u1608 \u1575 \u1585 \u1605 .',ro:'Giy\u257 hkh\u257 ram.',en:'I am vegetarian.'\},\
],\
food:[\
  \{fa:'\uc0\u1670 \u1604 \u1608  \u1705 \u1576 \u1575 \u1576 ',ro:'chelo kab\u257 b',en:'Rice with grilled meat \'97 Iran\\'s national dish'\},\
  \{fa:'\uc0\u1582 \u1608 \u1585 \u1588  \u1602 \u1585 \u1605 \u1607  \u1587 \u1576 \u1586 \u1740 ',ro:'khoresh-e ghorme sabzi',en:'Herb & bean stew \'97 most beloved stew'\},\
  \{fa:'\uc0\u1570 \u1588  \u1585 \u1588 \u1578 \u1607 ',ro:'\u257 sh-e reshte',en:'Noodle soup \'97 eaten at Nowruz'\},\
  \{fa:'\uc0\u1583 \u1608 \u1594 ',ro:'dugh',en:'Yogurt drink \'97 salty, refreshing'\},\
  \{fa:'\uc0\u1587 \u1605 \u1606 \u1608 ',ro:'samanu',en:'Sweet wheat pudding \'97 Nowruz tradition'\},\
],\
dialogue:\{title:'At a traditional restaurant in Isfahan',\
lines:[\
  \{who:'A',name:'\uc0\u1711 \u1575 \u1585 \u1587 \u1608 \u1606  Waiter',fa:'\u1576 \u1601 \u1585 \u1605 \u1575 \u1740 \u1740 \u1583 ! \u1670 \u1740  \u1605 \u1740 \u1604  \u1583 \u1575 \u1585 \u1740 \u1583 \u1567 ',ro:'Befarmayyid! Chi meyl d\u257 rid?',en:'Welcome! What would you like?'\},\
  \{who:'B',name:'\uc0\u1605 \u1607 \u1605 \u1575 \u1606  Guest',fa:'\u1740 \u1607  \u1670 \u1604 \u1608  \u1705 \u1576 \u1575 \u1576  \u1608  \u1740 \u1607  \u1583 \u1608 \u1594  \u1604 \u1591 \u1601 \u1575 \u1611 .',ro:'Ye chelo kab\u257 b o ye dugh lotfan.',en:'One chelo kabab and one dough please.'\},\
  \{who:'A',name:'\uc0\u1711 \u1575 \u1585 \u1587 \u1608 \u1606  Waiter',fa:'\u1705 \u1576 \u1575 \u1576  \u1705 \u1608 \u1576 \u1740 \u1583 \u1607  \u1605 \u1740 \u8204 \u1582 \u1608 \u1575 \u1740 \u1583  \u1740 \u1575  \u1580 \u1608 \u1580 \u1607 \u1567 ',ro:'Kab\u257 b-e kubide mikh\u257 yid y\u257  juje?',en:'Do you want ground meat kabab or chicken?'\},\
  \{who:'B',name:'\uc0\u1605 \u1607 \u1605 \u1575 \u1606  Guest',fa:'\u1705 \u1608 \u1576 \u1740 \u1583 \u1607 \u1548  \u1605 \u1605 \u1606 \u1608 \u1606 . \u1608  \u1570 \u1740 \u1575  \u1587 \u1608 \u1662  \u1583 \u1575 \u1585 \u1740 \u1583 \u1567 ',ro:'Kubide, mamnun. Va \u257 y\u257  sup d\u257 rid?',en:'Ground meat, thank you. And do you have soup?'\},\
  \{who:'A',name:'\uc0\u1711 \u1575 \u1585 \u1587 \u1608 \u1606  Waiter',fa:'\u1576 \u1604 \u1607 \u1548  \u1570 \u1588  \u1585 \u1588 \u1578 \u1607  \u1583 \u1575 \u1585 \u1740 \u1605 .',ro:'Bale, \u257 sh-e reshte d\u257 rim.',en:'Yes, we have noodle soup.'\},\
  \{who:'B',name:'\uc0\u1605 \u1607 \u1605 \u1575 \u1606  Guest',fa:'\u1593 \u1575 \u1604 \u1740 \u1607 ! \u1581 \u1578 \u1605 \u1575 \u1611  \u1575 \u1605 \u1578 \u1581 \u1575 \u1606  \u1605 \u1740 \u8204 \u1705 \u1606 \u1605 .',ro:'\\'\u256 liye! Hatman emtah\u257 n mikonam.',en:'Wonderful! I\\'ll definitely try it.'\},\
]\},\
culture:\{icon:'\uc0\u55356 \u57213 \u65039 ',tag:'Food',title:'Persian Cuisine \'97 A Living Poetry',\
fa:'\uc0\u1606 \u1608 \u1588  \u1580 \u1575 \u1606 !',ro:'Nushe j\u257 n!',en:'"May it nourish your soul!" (Bon app\'e9tit)',\
body:'Persian food is built on aromatic herbs, dried fruits, nuts, and saffron (\uc0\u1586 \u1593 \u1601 \u1585 \u1575 \u1606  za\\'far\u257 n) \'97 the world\\'s most expensive spice, grown in Khorasan. Every Iranian household has its own recipe for ghorme sabzi (herb stew), considered the most loved dish. Bread (\u1606 \u1575 \u1606  n\u257 n) comes in many forms: lavash (thin flatbread), sangak (baked on river stones), barbari (thick oblong loaf). Tea after meals is non-negotiable.'\},\
quiz:[\
  \{q:'\uc0\u1606 \u1608 \u1588  \u1580 \u1575 \u1606  means:',c:'',opts:['Welcome','Goodbye','Bon app\'e9tit','Good night'],a:2\},\
  \{q:'\uc0\u1670 \u1604 \u1608  \u1705 \u1576 \u1575 \u1576  is:',c:'',opts:['A soup','Rice with grilled meat','A dessert','A drink'],a:1\},\
  \{q:'\uc0\u1581 \u1587 \u1575 \u1576  \u1604 \u1591 \u1601 \u1575 \u1611  means:',c:'',opts:['The menu please','One more please','The bill please','Thank you'],a:2\},\
  \{q:'What is \uc0\u1583 \u1608 \u1594 ?',c:'\u1583 \u1608 \u1594 ',opts:['Sweet tea','Yogurt drink','Fruit juice','Sparkling water'],a:1\},\
  \{q:'\uc0\u1582 \u1740 \u1604 \u1740  \u1582 \u1608 \u1588 \u1605 \u1586 \u1607  means:',c:'',opts:['Very expensive','Very spicy','Very delicious','Very small'],a:2\},\
]\},\
\
\{id:'c4',type:'conv',num:'C4',title:'Shopping & Bargaining',fa:'\uc0\u1582 \u1585 \u1740 \u1583  \u1608  \u1670 \u1575 \u1606 \u1607 \u8204 \u1586 \u1606 \u1740 ',\
intro:'A2 level. Persian markets (bazaars) are legendary. Learn to ask prices, bargain politely, and shop. The Grand Bazaar of Tehran is one of the largest covered markets on Earth.',\
phrases:[\
  \{fa:'\uc0\u1575 \u1740 \u1606  \u1670 \u1606 \u1583  \u1578 \u1608 \u1605 \u1606 \u1607 \u1567 ',ro:'In chand tum\u257 ne?',en:'How much is this? (in Tomans)'\},\
  \{fa:'\uc0\u1711 \u1585 \u1608 \u1606 \u1607 ! \u1578 \u1582 \u1601 \u1740 \u1601  \u1605 \u1740 \u1583 \u1740 \u1583 \u1567 ',ro:'Girone! Takhfif midid?',en:'It\\'s expensive! Can you give a discount?'\},\
  \{fa:'\uc0\u1575 \u1740 \u1606  \u1585 \u1608  \u1605 \u1740 \u8204 \u1582 \u1608 \u1575 \u1605 .',ro:'Ino mikh\u257 m.',en:'I want this one.'\},\
  \{fa:'\uc0\u1740 \u1607  \u1705 \u1605  \u1575 \u1585 \u1586 \u1608 \u1606 \u8204 \u1578 \u1585  \u1606 \u1605 \u1740 \u1588 \u1607 \u1567 ',ro:'Ye kam arzuntar nemishe?',en:'Can\\'t it be a little cheaper?'\},\
  \{fa:'\uc0\u1576 \u1575 \u1588 \u1607 \u1548  \u1605 \u1740 \u8204 \u1582 \u1585 \u1605 .',ro:'B\u257 she, mikharam.',en:'OK, I\\'ll buy it.'\},\
  \{fa:'\uc0\u1705 \u1580 \u1575  \u1605 \u1740 \u8204 \u1578 \u1608 \u1606 \u1605  ... \u1662 \u1740 \u1583 \u1575  \u1705 \u1606 \u1605 \u1567 ',ro:'Koj\u257  mitoonam ... peyd\u257  konam?',en:'Where can I find ...?'\},\
  \{fa:'\uc0\u1601 \u1602 \u1591  \u1606 \u1711 \u1575 \u1607  \u1605 \u1740 \u8204 \u1705 \u1606 \u1605 .',ro:'Faqat neg\u257 h mikonam.',en:'I\\'m just looking.'\},\
],\
dialogue:\{title:'In the bazaar, buying a carpet',\
lines:[\
  \{who:'A',name:'\uc0\u1605 \u1588 \u1578 \u1585 \u1740  Customer',fa:'\u1587 \u1604 \u1575 \u1605 . \u1575 \u1740 \u1606  \u1601 \u1585 \u1588  \u1670 \u1606 \u1583  \u1578 \u1608 \u1605 \u1606 \u1607 \u1567 ',ro:'Sal\u257 m. In farsh chand tum\u257 ne?',en:'Hello. How much is this carpet?'\},\
  \{who:'B',name:'\uc0\u1601 \u1585 \u1608 \u1588 \u1606 \u1583 \u1607  Seller',fa:'\u1587 \u1604 \u1575 \u1605 ! \u1575 \u1740 \u1606  \u1583 \u1587 \u1578 \u8204 \u1576 \u1575 \u1601 \u1578 \u1607 . \u1587 \u1607  \u1605 \u1740 \u1604 \u1740 \u1608 \u1606 \u1607 .',ro:'Sal\u257 m! In dast-b\u257 fte. Se milyone.',en:'Hello! This is handwoven. It\\'s three million (Tomans).'\},\
  \{who:'A',name:'\uc0\u1605 \u1588 \u1578 \u1585 \u1740  Customer',fa:'\u1711 \u1585 \u1608 \u1606 \u1607 ! \u1583 \u1608  \u1605 \u1740 \u1604 \u1740 \u1608 \u1606  \u1670 \u1591 \u1608 \u1585 \u1607 \u1567 ',ro:'Girone! Do milyon chetore?',en:'That\\'s expensive! How about two million?'\},\
  \{who:'B',name:'\uc0\u1601 \u1585 \u1608 \u1588 \u1606 \u1583 \u1607  Seller',fa:'\u1606 \u1605 \u1740 \u1588 \u1607  \u1570 \u1602 \u1575 . \u1583 \u1608  \u1608  \u1606 \u1740 \u1605 \u1548  \u1570 \u1582 \u1585 \u1740 \u1606  \u1602 \u1740 \u1605 \u1578 \u1607 .',ro:'Nemishe \u257 gh\u257 . Do-o-nim, \u257 kharin ghimate.',en:'Can\\'t do it, sir. Two and a half \'97 final price.'\},\
  \{who:'A',name:'\uc0\u1605 \u1588 \u1578 \u1585 \u1740  Customer',fa:'\u1576 \u1575 \u1588 \u1607 . \u1602 \u1576 \u1608 \u1604 \u1607 . \u1576 \u1587 \u1578 \u1607 \u8204 \u1576 \u1606 \u1583 \u1740  \u1605 \u1740 \u8204 \u1705 \u1606 \u1740 \u1583 \u1567 ',ro:'B\u257 she. Qabule. Baste-bandi mikonid?',en:'OK. Deal. Can you pack it?'\},\
]\},\
culture:\{icon:'\uc0\u55356 \u57338 ',tag:'Bazaar',title:'The Persian Bazaar \'97 \u1576 \u1575 \u1586 \u1575 \u1585 ',\
fa:'\uc0\u1576 \u1575 \u1586 \u1575 \u1585 ',ro:'B\u257 z\u257 r',en:'"Market / Bazaar"',\
body:'The word "bazaar" comes directly from Persian (\uc0\u1576 \u1575 \u1586 \u1575 \u1585 ). Persian bazaars are ancient commercial hubs \'97 the Grand Bazaar of Tehran (\u1576 \u1575 \u1586 \u1575 \u1585  \u1576 \u1586 \u1585 \u1711  \u1578 \u1607 \u1585 \u1575 \u1606 ) covers 10km\'b2 and employs over 100,000 people. Shopping here is a social ritual: tea is offered, conversation flows, and bargaining is expected. Never accept the first price. The bazaar traditionally sat at the heart of the city next to the mosque \'97 commerce and faith intertwined. Persian carpets (\u1601 \u1585 \u1588 ) are among the world\\'s greatest art forms, with knot counts exceeding 1,000 per square inch.'\},\
quiz:[\
  \{q:'\uc0\u1575 \u1740 \u1606  \u1670 \u1606 \u1583  \u1578 \u1608 \u1605 \u1606 \u1607  means:',c:'',opts:['What is this?','How much is this?','I want this','Too expensive'],a:1\},\
  \{q:'\uc0\u1578 \u1582 \u1601 \u1740 \u1601  means:',c:'\u1578 \u1582 \u1601 \u1740 \u1601 ',opts:['Price','Discount','Expensive','Change'],a:1\},\
  \{q:'\uc0\u1601 \u1602 \u1591  \u1606 \u1711 \u1575 \u1607  \u1605 \u1740 \u8204 \u1705 \u1606 \u1605  means:',c:'',opts:['I\\'ll buy it','How much?','Just looking','Very nice'],a:2\},\
  \{q:'"Bazaar" is a word from:',c:'',opts:['Arabic','Turkish','Persian','French'],a:2\},\
  \{q:'\uc0\u1576 \u1575 \u1588 \u1607  means:',c:'\u1576 \u1575 \u1588 \u1607 ',opts:['No','Maybe','OK / alright','Never'],a:2\},\
]\},\
\
\{id:'c5',type:'conv',num:'C5',title:'Family & Friends',fa:'\uc0\u1582 \u1575 \u1606 \u1608 \u1575 \u1583 \u1607  \u1608  \u1583 \u1608 \u1587 \u1578 \u1575 \u1606 ',\
intro:'A2\'96B1 level. Talk about your family, describe relationships, and discuss friends. Family is central to Iranian culture \'97 often multigenerational homes.',\
phrases:[\
  \{fa:'\uc0\u1582 \u1575 \u1606 \u1608 \u1575 \u1583 \u1607 \u8204 \u1575 \u1605  \u1576 \u1586 \u1585 \u1711 \u1607 .',ro:'Kh\u257 nev\u257 de-am bozorge.',en:'My family is large.'\},\
  \{fa:'\uc0\u1670 \u1606 \u1583  \u1578 \u1575  \u1576 \u1585 \u1575 \u1583 \u1585  \u1582 \u1608 \u1575 \u1607 \u1585  \u1583 \u1575 \u1585 \u1740 \u1567 ',ro:'Chand t\u257  bar\u257 dar kh\u257 har d\u257 ri?',en:'How many siblings do you have?'\},\
  \{fa:'\uc0\u1740 \u1607  \u1576 \u1585 \u1575 \u1583 \u1585  \u1608  \u1583 \u1608  \u1582 \u1608 \u1575 \u1607 \u1585  \u1583 \u1575 \u1585 \u1605 .',ro:'Ye bar\u257 dar o do kh\u257 har d\u257 ram.',en:'I have one brother and two sisters.'\},\
  \{fa:'\uc0\u1575 \u1586 \u1583 \u1608 \u1575 \u1580  \u1705 \u1585 \u1583 \u1740 \u1567 ',ro:'Ezdev\u257 j kardi?',en:'Are you married?'\},\
  \{fa:'\uc0\u1606 \u1607 \u1548  \u1607 \u1606 \u1608 \u1586  \u1605 \u1580 \u1585 \u1583 \u1605 .',ro:'Na, hanuz mojradam.',en:'No, I\\'m still single.'\},\
  \{fa:'\uc0\u1583 \u1608 \u1587 \u1578  \u1589 \u1605 \u1740 \u1605 \u1740 \u8204 \u1575 \u1605  \u1585 \u1590 \u1575 \u1587 \u1578 .',ro:'Dust-e samimi-am Rez\u257 st.',en:'My close friend is Reza.'\},\
  \{fa:'\uc0\u1576 \u1575  \u1607 \u1605  \u1576 \u1586 \u1585 \u1711  \u1588 \u1583 \u1740 \u1605 .',ro:'B\u257  ham bozorg shodim.',en:'We grew up together.'\},\
],\
family:[\
  \{fa:'\uc0\u1662 \u1583 \u1585 ',ro:'pedar',en:'father'\},\{fa:'\u1605 \u1575 \u1583 \u1585 ',ro:'m\u257 dar',en:'mother'\},\{fa:'\u1576 \u1585 \u1575 \u1583 \u1585 ',ro:'bar\u257 dar',en:'brother'\},\
  \{fa:'\uc0\u1582 \u1608 \u1575 \u1607 \u1585 ',ro:'kh\u257 har',en:'sister'\},\{fa:'\u1662 \u1587 \u1585 ',ro:'pesar',en:'son/boy'\},\{fa:'\u1583 \u1582 \u1578 \u1585 ',ro:'dokhtar',en:'daughter/girl'\},\
  \{fa:'\uc0\u1662 \u1583 \u1585 \u1576 \u1586 \u1585 \u1711 ',ro:'pedar-bozorg',en:'grandfather'\},\{fa:'\u1605 \u1575 \u1583 \u1585 \u1576 \u1586 \u1585 \u1711 ',ro:'m\u257 dar-bozorg',en:'grandmother'\},\
],\
dialogue:\{title:'Catching up with an old friend',\
lines:[\
  \{who:'A',name:'\uc0\u1588 \u1740 \u1585 \u1740 \u1606  Shirin',fa:'\u1588 \u1740 \u1585 \u1740 \u1606 ! \u1670 \u1602 \u1583 \u1585  \u1608 \u1602 \u1578 \u1607  \u1606 \u1583 \u1740 \u1583 \u1605 \u1578 !',ro:'Shirin! Cheghadr vaghte nadidamat!',en:'Shirin! It\\'s been so long since I saw you!'\},\
  \{who:'B',name:'\uc0\u1662 \u1585 \u1740 \u1587 \u1575  Parisa',fa:'\u1662 \u1585 \u1740 \u1587 \u1575  \u1580 \u1608 \u1606 ! \u1581 \u1575 \u1604 \u1578  \u1670 \u1591 \u1608 \u1585 \u1607 \u1567  \u1582 \u1575 \u1606 \u1608 \u1575 \u1583 \u1607 \u8204 \u1575 \u1578  \u1582 \u1608 \u1576 \u1606 \u1567 ',ro:'Paris\u257  jun! H\u257 lat chetore? Kh\u257 nev\u257 de-at khuban?',en:'Parisa dear! How are you? Is your family well?'\},\
  \{who:'A',name:'\uc0\u1588 \u1740 \u1585 \u1740 \u1606  Shirin',fa:'\u1607 \u1605 \u1607  \u1582 \u1608 \u1576 \u1606 \u1548  \u1605 \u1605 \u1606 \u1608 \u1606 . \u1576 \u1575 \u1576 \u1575 \u1605  \u1576 \u1575 \u1586 \u1606 \u1588 \u1587 \u1578 \u1607  \u1588 \u1583 .',ro:'Hame khuban, mamnun. B\u257 b\u257 m b\u257 z-nashaste shod.',en:'Everyone is well, thank you. My dad just retired.'\},\
  \{who:'B',name:'\uc0\u1662 \u1585 \u1740 \u1587 \u1575  Parisa',fa:'\u1570 \u1585 \u1607 \u1567  \u1605 \u1575 \u1588 \u1575 \u1575 \u1604 \u1604 \u1607 ! \u1608  \u1578 \u1608 \u1567  \u1607 \u1606 \u1608 \u1586  \u1605 \u1580 \u1585 \u1583 \u1740 \u1567 ',ro:'\u256 re? M\u257 sh\u257 ll\u257 h! Va to? Hanuz mojradi?',en:'Really? Mashallah! And you? Still single?'\},\
  \{who:'A',name:'\uc0\u1588 \u1740 \u1585 \u1740 \u1606  Shirin',fa:'\u1606 \u1607 \u1548  \u1606 \u1575 \u1605 \u1586 \u1583  \u1705 \u1585 \u1583 \u1605 ! \u1605 \u1575 \u1607  \u1583 \u1740 \u1711 \u1607  \u1593 \u1585 \u1608 \u1587 \u1740 \u1605 \u1607 .',ro:'Na, n\u257 mzad kardam! M\u257 h-e dige arusimeh.',en:'No, I got engaged! My wedding is next month!'\},\
  \{who:'B',name:'\uc0\u1662 \u1585 \u1740 \u1587 \u1575  Parisa',fa:'\u1605 \u1576 \u1575 \u1585 \u1705  \u1576 \u1575 \u1588 \u1607 ! \u1582 \u1608 \u1588 \u1576 \u1582 \u1578  \u1576 \u1588 \u1740 \u1583 !',ro:'Mob\u257 rak b\u257 she! Khoshbakht beshid!',en:'Congratulations! May you be happy!'\},\
]\},\
culture:\{icon:'\uc0\u55357 \u56424 \u8205 \u55357 \u56425 \u8205 \u55357 \u56423 ',tag:'Family',title:'Family Values in Iranian Culture',\
fa:'\uc0\u1582 \u1575 \u1606 \u1608 \u1575 \u1583 \u1607 ',ro:'Kh\u257 nev\u257 de',en:'"Family"',\
body:'Family (\uc0\u1582 \u1575 \u1606 \u1608 \u1575 \u1583 \u1607 ) is the foundation of Iranian society. Multigenerational living is common \'97 grandparents, parents, and children often under one roof. The concept of family honour (\u1570 \u1576 \u1585 \u1608 \u1740  \u1582 \u1575 \u1606 \u1608 \u1575 \u1583 \u1711 \u1740  \u257 bruy-e kh\u257 nev\u257 degi) carries great weight. Friday (\u1580 \u1605 \u1593 \u1607 , jome) is family day \'97 the day off in Iran \'97 when extended family gathers for a large lunch. Addressing elders respectfully (using plural "you" \'97 \u1588 \u1605 \u1575  shom\u257  instead of \u1578 \u1608  to) is essential etiquette.'\},\
quiz:[\
  \{q:'\uc0\u1605 \u1575 \u1583 \u1585  means:',c:'\u1605 \u1575 \u1583 \u1585 ',opts:['Father','Sister','Mother','Grandmother'],a:2\},\
  \{q:'\uc0\u1605 \u1576 \u1575 \u1585 \u1705  \u1576 \u1575 \u1588 \u1607  means:',c:'',opts:['Good night','Welcome','Congratulations','Thank you'],a:2\},\
  \{q:'\uc0\u1605 \u1580 \u1585 \u1583  means:',c:'\u1605 \u1580 \u1585 \u1583 ',opts:['Married','Divorced','Single','Engaged'],a:2\},\
  \{q:'Friday is significant in Iran because:',c:'',opts:['It\\'s a market day','It\\'s the day off and family day','It\\'s a national holiday','It\\'s a religious fast'],a:1\},\
  \{q:'Using \uc0\u1588 \u1605 \u1575  instead of \u1578 \u1608  shows:',c:'',opts:['Anger','Intimacy','Respect/formality','Confusion'],a:2\},\
]\},\
\
\{id:'c6',type:'conv',num:'C6',title:'Work & Daily Life',fa:'\uc0\u1705 \u1575 \u1585  \u1608  \u1586 \u1606 \u1583 \u1711 \u1740  \u1585 \u1608 \u1586 \u1605 \u1585 \u1607 ',\
intro:'B1 level. Talk about jobs, daily routines, and work life in Iran. Iran has a young, educated, and tech-savvy population.',\
phrases:[\
  \{fa:'\uc0\u1670 \u1740 \u1705 \u1575 \u1585 \u1607 \u8204 \u1575 \u1740 \u1567 ',ro:'Chik\u257 re-i?',en:'What do you do? (informal)'\},\
  \{fa:'\uc0\u1605 \u1607 \u1606 \u1583 \u1587 \u1605 .',ro:'Mohandesam.',en:'I\\'m an engineer.'\},\
  \{fa:'\uc0\u1705 \u1580 \u1575  \u1705 \u1575 \u1585  \u1605 \u1740 \u8204 \u1705 \u1606 \u1740 \u1567 ',ro:'Koj\u257  k\u257 r mikoni?',en:'Where do you work?'\},\
  \{fa:'\uc0\u1578 \u1608  \u1740 \u1607  \u1588 \u1585 \u1705 \u1578  \u1582 \u1589 \u1608 \u1589 \u1740  \u1705 \u1575 \u1585  \u1605 \u1740 \u8204 \u1705 \u1606 \u1605 .',ro:'Tu ye sherkat-e khosousi k\u257 r mikonam.',en:'I work in a private company.'\},\
  \{fa:'\uc0\u1581 \u1602 \u1608 \u1602 \u1578  \u1582 \u1608 \u1576 \u1607 \u1567 ',ro:'Hoghughat khube?',en:'Is your salary good?'\},\
  \{fa:'\uc0\u1705 \u1575 \u1585  \u1662 \u1740 \u1583 \u1575  \u1705 \u1585 \u1583 \u1606  \u1587 \u1582 \u1578 \u1607 .',ro:'K\u257 r peyd\u257  kardan sakhte.',en:'Finding work is hard.'\},\
  \{fa:'\uc0\u1583 \u1608 \u1585 \u1705 \u1575 \u1585 \u1740  \u1605 \u1740 \u8204 \u1705 \u1606 \u1605 .',ro:'Durk\u257 ri mikonam.',en:'I work remotely.'\},\
],\
jobs:[\
  \{fa:'\uc0\u1583 \u1705 \u1578 \u1585 ',ro:'doktor',en:'doctor'\},\{fa:'\u1605 \u1593 \u1604 \u1605 ',ro:'mo\\'allem',en:'teacher'\},\{fa:'\u1605 \u1607 \u1606 \u1583 \u1587 ',ro:'mohandes',en:'engineer'\},\
  \{fa:'\uc0\u1576 \u1585 \u1606 \u1575 \u1605 \u1607 \u8204 \u1606 \u1608 \u1740 \u1587 ',ro:'barn\u257 me-nevis',en:'programmer'\},\{fa:'\u1607 \u1606 \u1585 \u1605 \u1606 \u1583 ',ro:'honarmand',en:'artist'\},\
  \{fa:'\uc0\u1705 \u1575 \u1585 \u1605 \u1606 \u1583 ',ro:'k\u257 rmand',en:'employee/clerk'\},\{fa:'\u1583 \u1575 \u1606 \u1588 \u1580 \u1608 ',ro:'d\u257 neshjoo',en:'university student'\},\
],\
dialogue:\{title:'Meeting at a work conference in Tehran',\
lines:[\
  \{who:'A',name:'\uc0\u1705 \u1575 \u1608 \u1607  K\u257 veh',fa:'\u1587 \u1604 \u1575 \u1605 \u1548  \u1705 \u1575 \u1608 \u1607 \u8204 \u1575 \u1605 . \u1588 \u1605 \u1575  \u1578 \u1608  \u1575 \u1740 \u1606  \u1588 \u1585 \u1705 \u1578  \u1705 \u1575 \u1585  \u1605 \u1740 \u8204 \u1705 \u1606 \u1740 \u1583 \u1567 ',ro:'Sal\u257 m, K\u257 veham. Shom\u257  tu in sherkat k\u257 r mikonid?',en:'Hi, I\\'m Kaveh. Do you work at this company?'\},\
  \{who:'B',name:'\uc0\u1606 \u1575 \u1586 \u1606 \u1740 \u1606  N\u257 znin',fa:'\u1606 \u1607 \u1548  \u1575 \u1586  \u1740 \u1607  \u1575 \u1587 \u1578 \u1575 \u1585 \u1578 \u1575 \u1662  \u1583 \u1740 \u1711 \u1607  \u1575 \u1608 \u1605 \u1583 \u1605 . \u1606 \u1575 \u1586 \u1606 \u1740 \u1606 \u1605 .',ro:'Na, az ye start\u257 p-e dige umadam. N\u257 zninam.',en:'No, I came from a different startup. I\\'m Nazanin.'\},\
  \{who:'A',name:'\uc0\u1705 \u1575 \u1608 \u1607  K\u257 veh',fa:'\u1670 \u1607  \u1705 \u1575 \u1585 \u1740  \u1605 \u1740 \u8204 \u1705 \u1606 \u1740 \u1583 \u1567 ',ro:'Che k\u257 ri mikonid?',en:'What kind of work do you do?'\},\
  \{who:'B',name:'\uc0\u1606 \u1575 \u1586 \u1606 \u1740 \u1606  N\u257 znin',fa:'\u1576 \u1585 \u1606 \u1575 \u1605 \u1607 \u8204 \u1606 \u1608 \u1740 \u1587 \u1605 . \u1585 \u1608 \u1740  \u1607 \u1608 \u1588  \u1605 \u1589 \u1606 \u1608 \u1593 \u1740  \u1705 \u1575 \u1585  \u1605 \u1740 \u8204 \u1705 \u1606 \u1605 .',ro:'Barn\u257 me-nevisam. Ruy-e hushe masnu\\'i k\u257 r mikonam.',en:'I\\'m a programmer. I work on artificial intelligence.'\},\
  \{who:'A',name:'\uc0\u1705 \u1575 \u1608 \u1607  K\u257 veh',fa:'\u1580 \u1575 \u1604 \u1576 \u1607 ! \u1605 \u1606 \u1605  \u1578 \u1608  \u1581 \u1608 \u1586 \u1607  \u1601 \u1606 \u1575 \u1608 \u1585 \u1740  \u1705 \u1575 \u1585  \u1605 \u1740 \u8204 \u1705 \u1606 \u1605 .',ro:'J\u257 lebe! Manam tu howze-ye fan\u257 vari k\u257 r mikonam.',en:'Interesting! I also work in the tech field.'\},\
]\},\
culture:\{icon:'\uc0\u55357 \u56508 ',tag:'Economy',title:'Iran\\'s Young, Tech-Driven Workforce',\
fa:'\uc0\u1575 \u1740 \u1585 \u1575 \u1606  \u1583 \u1585  \u1581 \u1575 \u1604  \u1578 \u1594 \u1740 \u1740 \u1585  \u1575 \u1587 \u1578 .',ro:'Ir\u257 n dar h\u257 l-e taghyir ast.',en:'"Iran is changing."',\
body:'Iran has one of the Middle East\\'s highest rates of university graduates, with over 50% of students being women. Tehran has a vibrant startup scene \'97 Iranian engineers, programmers, and entrepreneurs are prominent across the global tech industry. Despite economic pressures, Iranian youth are highly educated, multilingual, and resourceful. The city of Tehran alone has a population of 15+ million people, making it one of the world\\'s megacities.'\},\
quiz:[\
  \{q:'\uc0\u1670 \u1740 \u1705 \u1575 \u1585 \u1607 \u8204 \u1575 \u1740  means:',c:'',opts:['How are you?','What do you do?','Where are you?','When did you come?'],a:1\},\
  \{q:'\uc0\u1605 \u1607 \u1606 \u1583 \u1587  means:',c:'\u1605 \u1607 \u1606 \u1583 \u1587 ',opts:['Doctor','Teacher','Engineer','Manager'],a:2\},\
  \{q:'\uc0\u1583 \u1575 \u1606 \u1588 \u1580 \u1608  means:',c:'\u1583 \u1575 \u1606 \u1588 \u1580 \u1608 ',opts:['Professor','University student','School child','Graduate'],a:1\},\
  \{q:'\uc0\u1583 \u1608 \u1585 \u1705 \u1575 \u1585 \u1740  means:',c:'\u1583 \u1608 \u1585 \u1705 \u1575 \u1585 \u1740 ',opts:['Overtime','Remote work','Part-time','Commuting'],a:1\},\
  \{q:'What percentage of Iranian university students are women?',c:'',opts:['About 20%','About 35%','Over 50%','About 45%'],a:2\},\
]\},\
\
// ==================== CULTURE/TRAVEL ====================\
\{id:'t1',type:'cult',num:'T1',title:'Persian History \'97 Ancient Roots',fa:'\uc0\u1578 \u1575 \u1585 \u1740 \u1582  \u1575 \u1740 \u1585 \u1575 \u1606 ',\
intro:'Iran is one of the world\\'s oldest continuous civilizations. From Cyrus the Great to the Safavid Empire, Persian history spans 3,000+ recorded years.',\
timeline:[\
  \{year:'c. 550 BCE',title:'Achaemenid Empire \'97 \uc0\u1607 \u1582 \u1575 \u1605 \u1606 \u1588 \u1740 \u1575 \u1606 ',body:'Cyrus the Great (\u1705 \u1608 \u1585 \u1608 \u1588  \u1576 \u1586 \u1585 \u1711 ) founded the first Persian Empire \'97 the largest empire the world had seen. His Cyrus Cylinder is considered the world\\'s first human rights declaration. The empire stretched from Greece to India.',fa:'\u1705 \u1608 \u1585 \u1608 \u1588  \u1576 \u1586 \u1585 \u1711 '\},\
  \{year:'330 BCE',title:'Alexander\\'s Conquest \'97 \uc0\u1575 \u1587 \u1705 \u1606 \u1583 \u1585 ',body:'Alexander the Great conquered Persia and burned Persepolis (\u1578 \u1582 \u1578  \u1580 \u1605 \u1588 \u1740 \u1583 ). Yet Persian culture absorbed and transformed its conquerors \'97 as it would do repeatedly throughout history.',fa:'\u1578 \u1582 \u1578  \u1580 \u1605 \u1588 \u1740 \u1583 '\},\
  \{year:'224\'96651 CE',title:'Sassanid Empire \'97 \uc0\u1587 \u1575 \u1587 \u1575 \u1606 \u1740 \u1575 \u1606 ',body:'The second great Persian empire. Zoroastrianism (\u1586 \u1585 \u1578 \u1588 \u1578 ) was the state religion. Persian became a sophisticated literary language. The empire fell to the Arab Islamic conquest in 651 CE.',fa:'\u1586 \u1585 \u1578 \u1588 \u1578 '\},\
  \{year:'9th\'9611th c.',title:'Islamic Golden Age \'97 \uc0\u1585 \u1606 \u1587 \u1575 \u1606 \u1587  \u1575 \u1740 \u1585 \u1575 \u1606 \u1740 ',body:'Persian scholars led the world in mathematics, astronomy, medicine, and philosophy. Ibn Sina (\u1575 \u1576 \u1606  \u1587 \u1740 \u1606 \u1575  \'97 Avicenna) wrote the Canon of Medicine, used in European universities for 600 years.',fa:'\u1575 \u1576 \u1606  \u1587 \u1740 \u1606 \u1575 '\},\
  \{year:'1501\'961736',title:'Safavid Empire \'97 \uc0\u1589 \u1601 \u1608 \u1740 \u1575 \u1606 ',body:'Shah Ismail I established Shia Islam as the state religion. Isfahan (\u1575 \u1589 \u1601 \u1607 \u1575 \u1606 ) became one of the world\\'s most beautiful cities. Persian art, architecture, and poetry reached their zenith.',fa:'\u1575 \u1589 \u1601 \u1607 \u1575 \u1606 '\},\
  \{year:'1979',title:'Islamic Revolution \'97 \uc0\u1575 \u1606 \u1602 \u1604 \u1575 \u1576  \u1575 \u1587 \u1604 \u1575 \u1605 \u1740 ',body:'The Shah was overthrown and the Islamic Republic was established under Ayatollah Khomeini. Iran remains the Islamic Republic today, though society is complex, diverse, and constantly evolving.',fa:'\u1575 \u1606 \u1602 \u1604 \u1575 \u1576 '\},\
],\
culture:\{icon:'\uc0\u55356 \u57307 \u65039 ',tag:'Heritage',title:'Persepolis \'97 \u1578 \u1582 \u1578  \u1580 \u1605 \u1588 \u1740 \u1583 ',\
fa:'\uc0\u1578 \u1582 \u1578  \u1580 \u1605 \u1588 \u1740 \u1583 \u1548  \u1578 \u1582 \u1578  \u1588 \u1575 \u1607 \u1575 \u1606  \u1580 \u1607 \u1575 \u1606 .',ro:'Takht-e Jamshid, takht-e sh\u257 h\u257 n-e jah\u257 n.',en:'"Persepolis, throne of the kings of the world."',\
body:'Persepolis (\uc0\u1578 \u1582 \u1578  \u1580 \u1605 \u1588 \u1740 \u1583  \'97 "Throne of Jamshid") in Fars Province was the ceremonial capital of the Achaemenid Empire, built around 518 BCE. Its carved reliefs show delegations from 23 nations bringing tribute \'97 a vision of a multicultural empire. Burned by Alexander in 330 BCE, its ruins survive and are a UNESCO World Heritage Site. Every Iranian knows Persepolis as a symbol of civilizational pride.'\},\
quiz:[\
  \{q:'Cyrus the Great founded:',c:'',opts:['The Sassanid Empire','The Achaemenid Empire','The Safavid Empire','The Parthian Empire'],a:1\},\
  \{q:'\uc0\u1578 \u1582 \u1578  \u1580 \u1605 \u1588 \u1740 \u1583  is:',c:'\u1578 \u1582 \u1578  \u1580 \u1605 \u1588 \u1740 \u1583 ',opts:['A city in Tehran','Persepolis \'97 ancient ceremonial capital','A famous mosque','A mountain peak'],a:1\},\
  \{q:'The Safavid Empire established which religion as state religion?',c:'',opts:['Sunni Islam','Zoroastrianism','Shia Islam','Christianity'],a:2\},\
  \{q:'Ibn Sina (Avicenna) was famous for:',c:'',opts:['Poetry','Mathematics only','Medicine and philosophy','Architecture'],a:2\},\
  \{q:'The Islamic Revolution in Iran was in:',c:'',opts:['1953','1963','1979','1989'],a:2\},\
]\},\
\
\{id:'t2',type:'cult',num:'T2',title:'Famous Cities \'97 Tehran & Isfahan',fa:'\uc0\u1578 \u1607 \u1585 \u1575 \u1606  \u1608  \u1575 \u1589 \u1601 \u1607 \u1575 \u1606 ',\
intro:'Iran\\'s two most iconic cities: Tehran, the vast modern capital, and Isfahan, the jewel of Safavid architecture. Each has its own soul.',\
cities:[\
  \{name:'Tehran',fa:'\uc0\u1578 \u1607 \u1585 \u1575 \u1606 ',desc:'Capital and megacity of 15+ million. The Alborz mountains frame its northern skyline with ski slopes. A city of traffic, culture, incredible food, and palpable energy.',sights:'Milad Tower \'b7 Golestan Palace \'b7 Grand Bazaar \'b7 Darband hiking trail \'b7 Tehran Museum of Contemporary Art'\},\
  \{name:'Isfahan',fa:'\uc0\u1575 \u1589 \u1601 \u1607 \u1575 \u1606 ',desc:'"Isfahan is half the world" (\u1575 \u1589 \u1601 \u1607 \u1575 \u1606  \u1606 \u1589 \u1601  \u1580 \u1607 \u1575 \u1606 ). The Safavid capital features the world\\'s most beautiful central square \'97 Naqsh-e Jahan, UNESCO-listed.',sights:'Naqsh-e Jahan Square \'b7 Sheikh Lotfallah Mosque \'b7 Khaju Bridge \'b7 Vank Cathedral \'b7 Si-o-Se Pol bridge'\},\
],\
phrases:[\
  \{fa:'\uc0\u1705 \u1580 \u1575  \u1607 \u1587 \u1578 \u1740 \u1605 \u1567 ',ro:'Koj\u257  hastim?',en:'Where are we?'\},\
  \{fa:'\uc0\u1575 \u1740 \u1606  \u1576 \u1606 \u1575  \u1605 \u1575 \u1604  \u1705 \u1616 \u1740 \u8204 \u1607 \u1567 ',ro:'In ban\u257  m\u257 l-e kihe?',en:'What era is this building from?'\},\
  \{fa:'\uc0\u1576 \u1604 \u1740 \u1591  \u1670 \u1606 \u1583  \u1578 \u1608 \u1605 \u1606 \u1607 \u1567 ',ro:'Belit chand tum\u257 ne?',en:'How much is the ticket?'\},\
  \{fa:'\uc0\u1585 \u1575 \u1607 \u1606 \u1605 \u1575  \u1605 \u1740 \u8204 \u1582 \u1608 \u1575 \u1605 .',ro:'R\u257 hnam\u257  mikh\u257 m.',en:'I want a guide.'\},\
  \{fa:'\uc0\u1575 \u1740 \u1606  \u1605 \u1587 \u1580 \u1583  \u1608 \u1575 \u1602 \u1593 \u1575 \u1611  \u1576 \u1575 \u1588 \u1705 \u1608 \u1607 \u1607 .',ro:'In masjed v\u257 qe\\'an b\u257 shokohe.',en:'This mosque is truly magnificent.'\},\
],\
culture:\{icon:'\uc0\u55357 \u56652 ',tag:'Architecture',title:'Naqsh-e Jahan Square \'97 \u1606 \u1602 \u1588  \u1580 \u1607 \u1575 \u1606 ',\
fa:'\uc0\u1575 \u1589 \u1601 \u1607 \u1575 \u1606  \u1606 \u1589 \u1601  \u1580 \u1607 \u1575 \u1606  \u1575 \u1587 \u1578 .',ro:'Esfah\u257 n nesf-e jah\u257 n ast.',en:'"Isfahan is half the world."',\
body:'Naqsh-e Jahan ("Image of the World") Square in Isfahan was built by Shah Abbas I around 1602. At 512m \'d7 163m, it is one of the largest public squares on Earth, surrounded by the Imam Mosque, Sheikh Lotfallah Mosque, Ali Qapu Palace, and the Grand Bazaar. The tilework uses a mathematical mosaic system predating Western computer graphics. Polo was played here \'97 the goalposts still stand. UNESCO declared it a World Heritage Site in 1979.'\},\
quiz:[\
  \{q:'\uc0\u1575 \u1589 \u1601 \u1607 \u1575 \u1606  \u1606 \u1589 \u1601  \u1580 \u1607 \u1575 \u1606  means:',c:'',opts:['Isfahan is the capital','Isfahan is half the world','Isfahan is ancient','Isfahan is beautiful'],a:1\},\
  \{q:'Tehran is home to approximately:',c:'',opts:['3 million','8 million','15+ million','25 million'],a:2\},\
  \{q:'Naqsh-e Jahan Square was built by:',c:'',opts:['Cyrus the Great','Shah Abbas I','Rumi','Hafez'],a:1\},\
  \{q:'Si-o-Se Pol means:',c:'\uc0\u1587 \u1740 \u8204 \u1608 \u1587 \u1607 \u8204 \u1662 \u1604 ',opts:['Bridge of Kings','Bridge of 33 Arches','The Great Bridge','Stone Bridge'],a:1\},\
  \{q:'Which sport was historically played at Naqsh-e Jahan?',c:'',opts:['Wrestling','Archery','Polo','Football'],a:2\},\
]\},\
\
\{id:'t3',type:'cult',num:'T3',title:'Famous Cities \'97 Shiraz & Persepolis',fa:'\uc0\u1588 \u1740 \u1585 \u1575 \u1586  \u1608  \u1578 \u1582 \u1578  \u1580 \u1605 \u1588 \u1740 \u1583 ',\
intro:'Shiraz is the city of poets, wine, roses, and gardens. Nearby lies Persepolis \'97 the greatest surviving monument of ancient Persia.',\
cities:[\
  \{name:'Shiraz',fa:'\uc0\u1588 \u1740 \u1585 \u1575 \u1586 ',desc:'City of Hafez and Saadi \'97 Iran\\'s two greatest lyric poets. Famous for its roses, gardens, and historically for wine (\u1588 \u1585 \u1575 \u1586  wine takes its name from Shiraz). Warm, laid-back, beautiful.',sights:'Tomb of Hafez \'b7 Tomb of Saadi \'b7 Nasir-ol-Molk (Pink) Mosque \'b7 Eram Garden \'b7 Vakil Bazaar'\},\
  \{name:'Persepolis',fa:'\uc0\u1578 \u1582 \u1578  \u1580 \u1605 \u1588 \u1740 \u1583 ',desc:'50km northeast of Shiraz. The Achaemenid ceremonial capital. Giant carved columns, bas-reliefs of subject nations, the Gate of All Nations. Built 518 BCE, burned 330 BCE.',sights:'Gate of All Nations \'b7 Apadana Palace \'b7 Hall of 100 Columns \'b7 Treasury \'b7 Royal Tombs at Naqsh-e Rostam'\},\
],\
phrases:[\
  \{fa:'\uc0\u1605 \u1602 \u1576 \u1585 \u1607  \u1581 \u1575 \u1601 \u1592  \u1705 \u1580 \u1575 \u1587 \u1578 \u1567 ',ro:'Maqbare-ye H\u257 fez koj\u257 st?',en:'Where is the tomb of Hafez?'\},\
  \{fa:'\uc0\u1670 \u1602 \u1583 \u1585  \u1576 \u1575 \u1588 \u1705 \u1608 \u1607 \u1607 !',ro:'Cheghadr b\u257 shokohe!',en:'How magnificent it is!'\},\
  \{fa:'\uc0\u1593 \u1705 \u1587  \u1576 \u1711 \u1740 \u1585 \u1740 \u1605 \u1567 ',ro:'Aks begirim?',en:'Shall we take a photo?'\},\
  \{fa:'\uc0\u1578 \u1575 \u1585 \u1740 \u1582  \u1575 \u1740 \u1585 \u1575 \u1606  \u1582 \u1740 \u1604 \u1740  \u1594 \u1606 \u1740 \u1607 .',ro:'T\u257 rikh-e Ir\u257 n kheyly ghanihe.',en:'Iranian history is very rich.'\},\
],\
culture:\{icon:'\uc0\u55357 \u56534 ',tag:'Poetry',title:'Hafez \'97 The Tongue of the Unseen',\
fa:'\uc0\u1575 \u1604 \u1575  \u1740 \u1575  \u1575 \u1740 \u1607 \u1575  \u1575 \u1604 \u1587 \u1575 \u1602 \u1740  \u1575 \u1583 \u1585  \u1705 \u1571 \u1587 \u1575 \u1611  \u1608  \u1606 \u1575 \u1608 \u1604 \u1607 \u1575 .',ro:'Al\u257  y\u257  ayyoh\u257  as-s\u257 qi adir ka\\'san wa n\u257 wilh\u257 .',en:'"Come, O Cupbearer, pass the cup around..."',\
body:'Hafez (\uc0\u1581 \u1575 \u1601 \u1592 , 1315\'961390) of Shiraz is considered Iran\\'s greatest lyric poet. His Divan (\u1583 \u1740 \u1608 \u1575 \u1606 ) of ghazals (love poems) is found in virtually every Iranian home \'97 used for \u1601 \u1575 \u1604  \u1581 \u1575 \u1601 \u1592  (f\u257 l-e H\u257 fez): opening randomly for spiritual guidance, like a sacred oracle. His tomb (\u1570 \u1585 \u1575 \u1605 \u1711 \u1575 \u1607  \u1581 \u1575 \u1601 \u1592 ) in Shiraz\\'s Hafezieh garden is one of Iran\\'s most visited sites. Millions come to read a ghazal and find meaning in its lines.'\},\
quiz:[\
  \{q:'Hafez was from:',c:'',opts:['Tehran','Isfahan','Shiraz','Tabriz'],a:2\},\
  \{q:'\uc0\u1601 \u1575 \u1604  \u1581 \u1575 \u1601 \u1592  is:',c:'',opts:['A food dish','Opening the Divan for guidance','A music tradition','A dance'],a:1\},\
  \{q:'Persepolis was built approximately:',c:'',opts:['100 BCE','518 BCE','200 CE','1000 CE'],a:1\},\
  \{q:'\uc0\u1670 \u1602 \u1583 \u1585  \u1576 \u1575 \u1588 \u1705 \u1608 \u1607 \u1607  means:',c:'',opts:['How old is it?','How far is it?','How magnificent!','How expensive!'],a:2\},\
  \{q:'The "Pink Mosque" is in:',c:'',opts:['Tehran','Isfahan','Shiraz','Tabriz'],a:2\},\
]\},\
\
\{id:'t4',type:'cult',num:'T4',title:'Weather & Seasons in Iran',fa:'\uc0\u1570 \u1576  \u1608  \u1607 \u1608 \u1575 \u1740  \u1575 \u1740 \u1585 \u1575 \u1606 ',\
intro:'Iran is a vast country with dramatically different climates \'97 from ski slopes north of Tehran in winter to beach resorts on the Persian Gulf.',\
seasons:[\
  \{icon:'\uc0\u55356 \u57144 ',s:'Spring \'97 \u1576 \u1607 \u1575 \u1585 ',r:'bah\u257 r',temp:'10\'9625\'b0C',desc:'Best travel season. Nowruz (New Year) in March. Gardens bloom, waterfalls flow, the whole country travels.'\},\
  \{icon:'\uc0\u9728 \u65039 ',s:'Summer \'97 \u1578 \u1575 \u1576 \u1587 \u1578 \u1575 \u1606 ',r:'t\u257 bestan',temp:'25\'9645\'b0C',desc:'Very hot in most cities. Iranians escape to the Caspian coast or mountain villages. The north stays pleasant.'\},\
  \{icon:'\uc0\u55356 \u57154 ',s:'Autumn \'97 \u1662 \u1575 \u1740 \u1740 \u1586 ',r:'p\u257 yiz',temp:'8\'9622\'b0C',desc:'Beautiful, mild. Pomegranates ripen. Second-best travel season \'97 fewer crowds than spring.'\},\
  \{icon:'\uc0\u10052 \u65039 ',s:'Winter \'97 \u1586 \u1605 \u1587 \u1578 \u1575 \u1606 ',r:'zemest\u257 n',temp:'-5 to 15\'b0C',desc:'Ski season! Dizin and Shemshak (near Tehran) have world-class slopes. Deserts stay mild and perfect for visiting.'\},\
],\
weather_phrases:[\
  \{fa:'\uc0\u1607 \u1608 \u1575  \u1670 \u1591 \u1608 \u1585 \u1607 \u1567 ',ro:'Hav\u257  chetore?',en:'How\\'s the weather?'\},\
  \{fa:'\uc0\u1576 \u1575 \u1585 \u1575 \u1606  \u1605 \u1740 \u8204 \u1570 \u1583 .',ro:'B\u257 r\u257 n miy\u257 d.',en:'It\\'s raining.'\},\
  \{fa:'\uc0\u1607 \u1608 \u1575  \u1575 \u1576 \u1585 \u1740 \u1607 .',ro:'Hav\u257  abrihe.',en:'It\\'s cloudy.'\},\
  \{fa:'\uc0\u1711 \u1585 \u1605 \u1575 \u1740  \u1591 \u1575 \u1602 \u1578 \u8204 \u1601 \u1585 \u1587 \u1575 \u1587 \u1578 .',ro:'Garm\u257 -ye t\u257 qat-fors\u257 st.',en:'It\\'s unbearably hot.'\},\
  \{fa:'\uc0\u1576 \u1585 \u1601  \u1605 \u1740 \u8204 \u1570 \u1583 .',ro:'Barf miy\u257 d.',en:'It\\'s snowing.'\},\
  \{fa:'\uc0\u1607 \u1608 \u1575  \u1593 \u1575 \u1604 \u1740 \u1607 !',ro:'Hav\u257  \u257 lihe!',en:'The weather is perfect!'\},\
],\
culture:\{icon:'\uc0\u55356 \u57143 ',tag:'Season',title:'Nowruz \'97 \u1606 \u1608 \u1585 \u1608 \u1586  \'97 The Persian New Year',\
fa:'\uc0\u1576 \u1607 \u1575 \u1585  \u1705 \u1607  \u1570 \u1605 \u1583 \u1548  \u1583 \u1604  \u1588 \u1575 \u1583 \u1605 \u1575 \u1606  \u1588 \u1583 .',ro:'Bah\u257 r ke \u257 mad, del sh\u257 dm\u257 n shod.',en:'"When spring came, the heart became joyful."',\
body:'Nowruz (\uc0\u1606 \u1608 \u1585 \u1608 \u1586  \'97 "New Day") is the Persian New Year, celebrated on the Spring Equinox (March 20\'9621). It is 3,000 years old, predating Islam. The Haft-Seen table (\u1607 \u1601 \u1578 \u8204 \u1587 \u1740 \u1606 ) must have seven items starting with "\u1587 " (sin): \u1587 \u1576 \u1586 \u1607  (sabze, sprouts), \u1587 \u1740 \u1576  (sib, apple), \u1587 \u1605 \u1606 \u1608  (samanu, pudding), \u1587 \u1585 \u1705 \u1607  (serkeh, vinegar), \u1587 \u1606 \u1580 \u1583  (senjed, dried fruit), \u1587 \u1705 \u1607  (sekke, coins), \u1587 \u1740 \u1585  (sir, garlic). The 13th day, Sizdah-be-dar (\u1587 \u1740 \u1586 \u1583 \u1607  \u1576 \u1607  \u1583 \u1585 ), everyone must go outdoors \'97 staying home is bad luck.'\},\
quiz:[\
  \{q:'\uc0\u1576 \u1607 \u1575 \u1585  means:',c:'\u1576 \u1607 \u1575 \u1585 ',opts:['Summer','Spring','Autumn','Winter'],a:1\},\
  \{q:'Nowruz falls on:',c:'',opts:['January 1','The Winter Solstice','The Spring Equinox','March 1'],a:2\},\
  \{q:'\uc0\u1576 \u1585 \u1601  \u1605 \u1740 \u8204 \u1570 \u1583  means:',c:'',opts:['It\\'s raining','It\\'s sunny','It\\'s snowing','It\\'s windy'],a:2\},\
  \{q:'The Haft-Seen table has items starting with the letter:',c:'',opts:['\uc0\u1575 \u1604 \u1601  (A)','\u1576  (B)','\u1587  (S)','\u1605  (M)'],a:2\},\
  \{q:'\uc0\u1586 \u1605 \u1587 \u1578 \u1575 \u1606  means:',c:'\u1586 \u1605 \u1587 \u1578 \u1575 \u1606 ',opts:['Spring','Summer','Autumn','Winter'],a:3\},\
]\},\
\
\{id:'t5',type:'cult',num:'T5',title:'Travel Tips & Practical Persian',fa:'\uc0\u1585 \u1575 \u1607 \u1606 \u1605 \u1575 \u1740  \u1587 \u1601 \u1585 ',\
intro:'B1 level practical Persian for travelers. Get around, stay safe, and connect with locals. Iranians are famously warm to foreign visitors.',\
tips:[\
  \{icon:'\uc0\u55357 \u57026 ',title:'Visa & Entry',body:'Most nationalities require a visa. Tourist visas are typically issued on arrival at major airports. Always check current requirements before traveling.'\},\
  \{icon:'\uc0\u55357 \u56496 ',title:'Money',body:'Iran uses the Iranian Rial (\u1585 \u1740 \u1575 \u1604 ) officially, but people quote prices in Tomans (\u1578 \u1608 \u1605 \u1575 \u1606 ) \'97 one Toman = 10 Rials. International cards don\\'t work \'97 bring cash (Euros or USD are best).'\},\
  \{icon:'\uc0\u55357 \u56407 ',title:'Dress Code',body:'Women must wear hijab (\u1581 \u1580 \u1575 \u1576 ) in public \'97 a headscarf plus loose clothing. Men should avoid shorts in formal/religious settings. Pack light, loose, natural fabrics.'\},\
  \{icon:'\uc0\u55357 \u56561 ',title:'Communications',body:'VPN is widely used. SIM cards are cheap and available. WiFi is common in hotels and caf\'e9s.'\},\
  \{icon:'\uc0\u55357 \u56981 ',title:'Getting Around',body:'Tehran has a modern metro (\u1605 \u1578 \u1585 \u1608 ). Snapp (Iranian Uber) works in major cities. Intercity buses are comfortable. Trains are scenic and affordable.'\},\
  \{icon:'\uc0\u55356 \u57317 ',title:'Safety',body:'Iran is generally very safe for tourists. Pickpocketing is rare. Locals often go out of their way to help foreign visitors \'97 expect invitations to tea and meals!'\},\
],\
phrases:[\
  \{fa:'\uc0\u1705 \u1605 \u1705 \u1605  \u1705 \u1606 \u1740 \u1583  \u1604 \u1591 \u1601 \u1575 \u1611 .',ro:'Komakam konid lotfan.',en:'Please help me.'\},\
  \{fa:'\uc0\u1711 \u1605  \u1588 \u1583 \u1605 .',ro:'Gom shodam.',en:'I\\'m lost.'\},\
  \{fa:'\uc0\u1576 \u1740 \u1605 \u1575 \u1585 \u1587 \u1578 \u1575 \u1606  \u1705 \u1580 \u1575 \u1587 \u1578 \u1567 ',ro:'Bim\u257 rest\u257 n koj\u257 st?',en:'Where is the hospital?'\},\
  \{fa:'\uc0\u1605 \u1578 \u1588 \u1705 \u1585 \u1605 .',ro:'Motashakkeram.',en:'Thank you (formal).'\},\
  \{fa:'\uc0\u1576 \u1576 \u1582 \u1588 \u1740 \u1583 \u1548  \u1601 \u1575 \u1585 \u1587 \u1740  \u1576 \u1604 \u1583  \u1606 \u1740 \u1587 \u1578 \u1605 .',ro:'Bebakhshid, F\u257 rsi balad nistam.',en:'Sorry, I don\\'t know Persian.'\},\
  \{fa:'\uc0\u1705 \u1605 \u1740  \u1601 \u1575 \u1585 \u1587 \u1740  \u1576 \u1604 \u1583 \u1605 .',ro:'Kami F\u257 rsi balad-am.',en:'I know a little Persian.'\},\
  \{fa:'\uc0\u1575 \u1740 \u1606  \u1585 \u1608  \u1576 \u1607  \u1575 \u1606 \u1711 \u1604 \u1740 \u1587 \u1740  \u1670 \u1740  \u1605 \u1740 \u1711 \u1606 \u1567 ',ro:'Ino be Engelisi chi migan?',en:'What is this called in English?'\},\
],\
culture:\{icon:'\uc0\u9992 \u65039 ',tag:'Traveler Tips',title:'Iranians & Foreign Visitors',\
fa:'\uc0\u1582 \u1608 \u1588  \u1570 \u1605 \u1583 \u1740 \u1583 !',ro:'Khosh \u257 madid!',en:'"Welcome!"',\
body:'Iran consistently surprises first-time visitors with the warmth of its people. Strangers will invite you for tea, offer directions, insist on paying for your meal. The phrase \uc0\u1582 \u1608 \u1588  \u1570 \u1605 \u1583 \u1740 \u1583  (Welcome!) is genuine and heartfelt. Learning even a few Persian words creates instant goodwill and delight. Iranians are deeply proud of their culture and will love sharing it with you. The most important phrase you can know: \u1575 \u1740 \u1585 \u1575 \u1606  \u1582 \u1740 \u1604 \u1740  \u1586 \u1740 \u1576 \u1575 \u1587 \u1578  \'97 "Iran is very beautiful!"'\},\
quiz:[\
  \{q:'\uc0\u1711 \u1605  \u1588 \u1583 \u1605  means:',c:'\u1711 \u1605  \u1588 \u1583 \u1605 ',opts:['I\\'m tired','I\\'m hungry','I\\'m lost','I\\'m late'],a:2\},\
  \{q:'In Iran, prices are typically quoted in:',c:'',opts:['Rials','Dollars','Tomans','Euros'],a:2\},\
  \{q:'Women travelers in Iran must wear:',c:'',opts:['Full niqab','Hijab (headscarf + loose clothing)','Nothing specific','A chador only'],a:1\},\
  \{q:'\uc0\u1582 \u1608 \u1588  \u1570 \u1605 \u1583 \u1740 \u1583  means:',c:'',opts:['Goodbye','Thank you','Welcome','Good morning'],a:2\},\
  \{q:'\uc0\u1605 \u1578 \u1588 \u1705 \u1585 \u1605  is:',c:'\u1605 \u1578 \u1588 \u1705 \u1585 \u1605 ',opts:['Informal thank you','Formal thank you','Please','Sorry'],a:1\},\
]\},\
\
];}