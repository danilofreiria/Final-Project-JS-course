
const chuvaDeMeteoros = [
    { nome: 'Alfa Centaurídeos',	        inicio: '01/28', fim: '02/21', pico: 'Fev 8',   ascencao: 210,  declinacao:	-59,  velocidade:	56, thz: '6',        intensidade: 'Média'},
    { nome: 'Gama Normídeos',	            inicio: '02/25', fim: '03/22', pico: 'Mar 14',  ascencao: 239,  declinacao:	-50,  velocidade:	56, thz: '6',        intensidade: 'Média'},
    { nome: 'Pi Pupídeos',	                inicio: '04/15', fim: '04/28', pico: 'Abr 23',  ascencao: 110,  declinacao:	-45,  velocidade:	18, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Líridas',	                    inicio: '04/16', fim: '04/25', pico: 'Abr 22',  ascencao: 271,  declinacao:	34,  velocidade:	49, thz: '18',       intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Eta Aquáridas',	            inicio: '04/19', fim: '05/28', pico: 'Mai 5',   ascencao: 338,  declinacao:	-1,  velocidade:	66, thz: '65',       intensidade: 'Forte com meteoros muito rápidos e de grande comprimento'},
    { nome: 'Eta Líridas',	                inicio: '05/03', fim: '05/14', pico: 'Mai 8',   ascencao: 287,  declinacao:	44,  velocidade:	43, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Bootídeos de Junho',	        inicio: '06/28', fim: '06/28', pico: 'Jun 28',  ascencao: 224,  declinacao:	48,  velocidade:	18, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Alfa Capricornídeos',          inicio: '07/03', fim: '08/15', pico: 'Jul 30',  ascencao: 307,  declinacao:	-10,  velocidade:	23, thz: '5',        intensidade: 'Fraca'},
    { nome: 'Delta Aquáridas do Sul',       inicio: '07/12', fim: '08/19', pico: 'Jul 28',  ascencao: 340,  declinacao:	-16,  velocidade:	41, thz: '16',       intensidade: 'Forte com meteoros lentos e rasto comprido'},
    { nome: 'Piscis Austrinídeos',	        inicio: '07/15', fim: '08/10', pico: 'Jul 28',  ascencao: 341,  declinacao:	-30,  velocidade:	35, thz: '5',        intensidade: 'Média'},
    { nome: 'Perseidas',	                inicio: '07/17', fim: '08/24', pico: 'Ago 12',  ascencao: 48,   declinacao:	58,  velocidade:	59, thz: '100',      intensidade: 'Forte e muito rápidas'},
    { nome: 'Capa Cignídeos',               inicio: '08/03', fim: '08/25', pico: 'Ago 17',  ascencao: 286,  declinacao:	59,  velocidade:	25, thz: '3',        intensidade: 'Fraca com velocidades médias e brilhantes'},
    { nome: 'Alfa Aurigídeos',	            inicio: '08/25', fim: '09/28', pico: 'Set 1',   ascencao: 91,   declinacao:	39,  velocidade:	66, thz: '6',        intensidade: 'Média com meteoros muito rápidos e persistentes'},
    { nome: 'Perseidas de Setembro',        inicio: '09/05', fim: '10/10', pico: 'Set 8',   ascencao: 48,   declinacao:	40,  velocidade:	64, thz: '5',        intensidade: 'Média com meteoros rápidos e persistentes'},
    { nome: 'Táuridas do Sul',              inicio: '09/10', fim: '11/20', pico: 'Out 10',  ascencao: 32,   declinacao:	9,   velocidade:	27, thz: '5',        intensidade: 'Fraca'},
    { nome: 'Delta Aurigídeos',             inicio: '09/22', fim: '10/23', pico: 'Out 10',  ascencao: 84,   declinacao:	44,  velocidade:	64, thz: '2',        intensidade: 'Fraca'},
    { nome: 'Oriónidas',                    inicio: '10/02', fim: '11/07', pico: 'Out 21',  ascencao: 95,   declinacao:	16,  velocidade:	66, thz: '25',       intensidade: 'Forte com meteoros rápidos e persistentes'},
    { nome: 'Dracónidas',                   inicio: '10/06', fim: '10/10', pico: 'Out 8',   ascencao: 262,  declinacao:	54,  velocidade:	20, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Épsilon Geminídeos',           inicio: '10/14', fim: '10/27', pico: 'Out 18',  ascencao: 102,  declinacao:	27,  velocidade:	70, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos',               inicio: '10/21', fim: '10/23', pico: 'Out 22',  ascencao: 162,  declinacao:	37,  velocidade:	62, thz: '2',        intensidade: 'Fraca'},
    { nome: 'Táuridas do Norte',            inicio: '11/01', fim: '11/25', pico: 'Nov 12',  ascencao: 58,   declinacao:	22,  velocidade:	29, thz: '5',        intensidade: 'Média com meteoros muito lentos mas brilhantes'},
    { nome: 'Leónidas',                     inicio: '11/14', fim: '11/21', pico: 'Nov 17',  ascencao: 152,  declinacao:	22,  velocidade:	71, thz: 'Variável', intensidade: 'Irregular com meteoros muito rápidos, atingindo um pico de 33 em 33 anos'},
    { nome: 'Alfa Monocerotídeos',          inicio: '11/15', fim: '11/25', pico: 'Nov 21',  ascencao: 117,  declinacao:	1,  velocidade:	65, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Monocerotídeos',               inicio: '11/27', fim: '12/17', pico: 'Dez 8',   ascencao: 100,  declinacao:	8,  velocidade:	42, thz: '2',        intensidade: 'Fraca'},
    { nome: 'Fenícidas',	                inicio: '11/28', fim: '12/09', pico: 'Dez 6',   ascencao: 18,   declinacao:	-53,  velocidade:	18, thz: 'Variável', intensidade: 'Irregular'},
    { nome: 'Quadrântidas',	                inicio: '11/28', fim: '01/12', pico: 'Jan 4',   ascencao: 230,  declinacao:	49,  velocidade:	41, thz: '120',      intensidade: 'Forte com velocidades médias'},
    { nome: 'Pupidas-Velidas',	            inicio: '12/02', fim: '12/16', pico: 'Dez 12',  ascencao: 123,  declinacao:	-45,  velocidade:	40, thz: '10',       intensidade: 'Média'},
    { nome: 'Sigma Hidrídeos',              inicio: '12/03', fim: '12/15', pico: 'Dez 12',  ascencao: 127,  declinacao:	2,  velocidade:	58, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Leo Minorídeos de Dezembro',   inicio: '12/05', fim: '02/04', pico: 'Dez 19',  ascencao: 161,  declinacao:	30,  velocidade:	64, thz: '5',        intensidade: 'Média'},
    { nome: 'Gemínidas',	                inicio: '12/07', fim: '12/17', pico: 'Dez 14',  ascencao: 112,  declinacao:	33,  velocidade:	35, thz: '120',      intensidade: 'Forte com velocidades médias, meteoros brancos e numerosos'},
    { nome: 'Coma Berenicídeos',            inicio: '12/12', fim: '01/23', pico: 'Dez 20',  ascencao: 175,  declinacao:	18,  velocidade:	65, thz: '3',        intensidade: 'Fraca'},
    { nome: 'Úrsidas',                      inicio: '12/17', fim: '12/26', pico: 'Dez 22',  ascencao: 217,  declinacao:	76,  velocidade:	33, thz: '10',       intensidade: 'Média'},
];

export default chuvaDeMeteoros;