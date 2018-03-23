import * as types from '../constants/ActionTypes';
import omit from 'lodash/object/omit';
import assign from 'lodash/object/assign';
import mapValues from 'lodash/object/mapValues';

export const initialState = {
  fields: ['First name', 'Last name', 'from', 'to'],
  sortByField: -1,
  sortAsc: true,
  items: [["Kim","Hiltunen","Oulainen","Nokia"],["Hilja","Kotila","Kouvola","Tikkurila"],["Hellä","Hanninen","Mikkeli","Parkano"],["Atte","Kotila","Lapinlahti","Laihia"],["Hermanni","Korpela","Myllykoski","Savonlinna Central"],["Ursula","Ahola","Mäntyharju","Tikkurila"],["Hillevi","Saari","Parkano","Kouvola"],["Vili","Peltonen","Kouvola","Lapinlahti"],["Oskar","Wirtanen","Bennäs","Helsinki Central"],["Lempi","Rantala","Port of Kotka","Jämsä"],["Valde","Pietila","Savonlinna","Kuopio"],["Henrikki","Lehtola","Retretti","Vaasa"],["Viivi","Peltola","Toijala","Lievestuore"],["Urpo","Kemppainen","Oulu","Kerimäki"],["Veli-Matti","Manninen","Paimenportti","Iisalmi"],["Markus","Wiitala","Jyväskylä","Tampere"],["Jeremias","Jokela","Helsinki Central","Pasila"],["Elmeri","Rautio","Joutseno","Iisalmi"],["Heljä","Seppala","Mäntsälä","Tikkurila"],["Iiris","Jutila","Tervola","Kouvola"],["Neea","Kivi","Myllykoski","Hämeenlinna"],["Martta","Koistinen","Mikkeli","Pieksämäki"],["Teodor","Peltonen","Tervajoki","Lahti"],["Tiina","Leinonen","Tampere","Tikkurila"],["Konstantin","Kantola","Inkeroinen","Mäntyharju"],["Marjo","Heikkila","Pieksämäki","Lahti"],["Vilhelm","Walli","Seinäjoki","Parikkala"],["August","Seppala","Helsinki Central","Humppila"],["Sonja","Hietala","Kyminlinna","Kannus"],["Julia","Neva","Seinäjoki","Siilinjärvi"],["Cecilia","Haapala","Suonenjoki","Helsinki Central"],["Elma","Ahonen","Kitee","Lahti"],["Jalmari","Kuusisto","Port of Kotka","Helsinki Central"],["Teodor","Tervo","Kokkola","Turku Harbour"],["Jasmiina","Wiita","Bennäs","Myllykoski"],["Reima","Raisanen","Riihimäki","Imatra"],["Impi","Juntunen","Kokemäki","Kotka Central"],["Impi","Kivela","Kauhava","Parkano"],["Nea","Koskela","Kemijärvi","Mäntyharju"],["Voitto","Saarinen","Haukivuori","Retretti"],["Maritta","Pietila","Pasila","Tavastila"],["Wilhelm","Nikula","Jämsä","Lapinlahti"],["Merja","Rinne","Kemi","Rovaniemi"],["Jarmo","Juntunen","Oulainen","Hankasalmi"],["Allan","Mattila","Simpele","Parkano"],["Sirpa","Jokela","Myllykoski","Tikkurila"],["Iines","Pulli","Mäntyharju","Vaasa"],["Wilhelmiina","Palo","Tervajoki","Tervola"],["Paul","Salmi","Pasila","Toijala"],["Elias","Tuomala","Kouvola","Toijala"],["Saila","Autio","Lappeenranta","Kemijärvi"],["Wilma","Maijala","Kuopio","Humppila"],["Maija","Ylitalo","Parikkala","Savonlinna Central"],["Alfred","Ojala","Parikkala","Lusto"],["Pihla","Kivisto","Ruukki","Kymi"],["Kati","Korpi","Paimenportti","Lapinlahti"],["Mauri","Haapala","Siilinjärvi","Ylistaro"],["Rikhard","Pagination","Sukeva","Tikkurila"],["Ferdinand","Kumpula","Pasila","Mikkeli"],["Maija-Leena","Justi","Lahti","Lusto"],["Carita","Kari","Haukivuori","Port of Kotka"],["Verneri","Hakala","Mäntsälä","Tampere"],["Asta","Pulkkinen","Oulainen","Toijala"],["Pilvi","Wuori","Vammala","Hämeenlinna"],["Tanja","Salminen","Parkano","Vihanti"],["Lyydia","Huotari","Laihia","Myllykoski"],["Santtu","Jokinen","Toijala","Siilinjärvi"],["Janette","Maijala","Nokia","Kokemäki"],["Hertta","Kauppi","Mikkeli","Kauhava"],["Anneli","Keranen","Hämeenlinna","Toijala"],["Vellamo","Niemi","Tampere","Tikkurila"],["Eelin","Niskanen","Pasila","Kouvola"],["Eero","Korpi","Tervajoki","Haukivuori"],["Valfrid","Laurila","Kokemäki","Savonlinna Central"],["Veli-Matti","Niskanen","Kouvola","Rovaniemi"],["Miina","Pulli","Joensuu","Kouvola"],["Karin","Kivisto","Oulainen","Suonenjoki"],["Lari","Ramo","Helsinki Central","Lappeenranta"],["Justiina","Wuori","Tikkurila","Lievestuore"],["Tuire","Manninen","Vammala","Vammala"],["Jyrki","Kangas","Port of Kotka","Vihanti"],["Kaija","Korhonen","Inkeroinen","Kesälahti"],["Toni","Takala","Parikkala","Tikkurila"],["Alfred","Ahonen","Kemi","Tikkurila"],["Into","Aho","Jämsä","Kyminlinna"],["Villiam","Savela","Helsinki Central","Lapinlahti"],["Anette","Ramo","Mäntyharju","Pasila"],["Kaj","Kari","Port of Kotka","Tikkurila"],["Sampo","Perko","Simpele","Lusto"],["Venla","Kalas","Myllykoski","Sukeva"],["Aatami","Puro","Tervajoki","Pori"],["Petteri","Koivisto","Joensuu","Pasila"],["Kaapo","Sippola","Turku Central","Bennäs"],["Teresa","Halla","Iisalmi","Kauhava"],["Marjo-Riitta","Wirta","Haukivuori","Toijala"],["Marjut","Rinne","Pasila","Ylistaro"],["Irina","Jarvi","Imatra","Pieksämäki"],["Else","Maki","Savonlinna","Parikkala"],["Inkeri","Pesola","Loimaa","Mäntsälä"],["Lumi","Laurila","Hämeenlinna","Seinäjoki"]],
  sorted: [],
  sortedRev: []
};

export default function recordslist(state = initialState, action) {
  switch (action.type) {

    case types.LOAD_FROM_FILE:      
      const allTextLines = action.data.split(/\r\n|\n/);
      var lines = [];
      const headerLine = allTextLines.shift().split(',');
      while (allTextLines.length) {
          lines.push(allTextLines.shift().split(','));
      }

      return {
        ...state,
        fields: headerLine,
        sortByField: -1,
        sortAsc: true,
        items: lines,
        sorted: [],
        sortedRev: [],
      }

    case types.CHANGE_SORT:
      var newSorted = state.sorted[action.fieldIndex] 
          ? state.sorted[action.fieldIndex] 
          : state.items.slice(0).sort((a, b)=>{
            const index = action.fieldIndex;
            if(a[index] < b[index]) return -1;
            if(a[index] > b[index]) return 1;
            return 0;
          });
      return {
        ...state,
        sortAsc: action.fieldIndex == state.sortByField ? !state.sortAsc : state.sortAsc,
        sortByField: action.fieldIndex,

        sorted: {
          ...state.sorted,
          [action.fieldIndex]: newSorted
        },
        sortedRev: {
          ...state.sortedRev,
          [action.fieldIndex]: state.sortedRev[action.fieldIndex] 
            ? state.sortedRev[action.fieldIndex] 
            : newSorted.slice(0).reverse()
        }        
      }

    default:
      return state;
  }
}
