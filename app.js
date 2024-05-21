const dataStorage = {
    airplane: {
        aTR42Family: ['AT43', 'AT44', 'AT45', 'AT46'],
        aTR72Family: ['AT73', 'AT75', 'AT76'],
        airbusA220Family: ['BCS1', 'BCS3'],
        airbusA300Family: ['A306', 'A30B', 'A3ST'],
        airbusA310Family: ['A310'],
        airbusA320Family: ['A318', 'A319', 'A320', 'A321'],
        airbusA320NeoFamily: ['A19N', 'A20N', 'A21N'],
        airbusA340Family: ['A342', 'A343', 'A345', 'A346'],
        airbusA350Family: ['A359', 'A35K'],
        airbusA380Family: ['A388'],
        boeing737MAXFamily: ['B37M', 'B38M', 'B39M'],
        boeing737NextGenerationFamily: ['B736', 'B737', 'B738', 'B739'],
        boeing747Family: ['B741', 'B742', 'B743', 'B744', 'B748'],
        boeing757Family: ['B752', 'B753'],
        boeing767Family: ['B762', 'B763', 'B764'],
        boeing777Family: ['B772', 'B773', 'B77L', 'B77W'],
        boeing787Family: ['B788', 'B789', 'B78X'],
        bombardierDash8Family: ['DH8A', 'DH8B', 'DH8C', 'DH8D'],
        comacARJ21Family: ['AJ27'],
        comacC919Family: ['C919'],
        embraerE170Family: ['E170', 'E75L', 'E75S'],
        embraerE190Family: ['E190', 'E195'],
        embraerE190_E2Family: ['E290', 'E295'],
        embraerERJFamily: ['E135', 'E140', 'E145'],
        mitsubishiCRJFamily: ['CRJ1', 'CRJ2', 'CRJ7', 'CRJ9', 'CRJX'],
        SAAB340_SAAB2000Family: ['SB20', 'SF34'],
        sukhoiSuperjet100Family: ['SU95'],
        yakovlevMC_21Family: ['MC23']
    },
    airportICAO: ['KLAX', 'KSFO', 'KLAS', 'MMMX', 'KSAT'],
    routes: {
        klax_ksfo: ['SID', 'RZS', 'J501', 'BSR', 'STAR'],
        klax_klas: ['SID', 'MISEN', 'STAR'],
        klax_mmmx: ['SID', 'MZB', 'J1', 'TIJ', 'UT18', 'GOLFO', 'UQ103', 'NABAS', 'UT49', 'DGO', 'UJ5', 'QET', 'UT150', 'DARAN', 'STAR'],
        klax_ksat: ['SID TRM J169 BLH J50 SALOM J65 KOFFA J169 TFD J50 ALIBY J2 ELP J86 FIGMO J2 FST STAR'],
        ksfo_klax: ['SID', 'FLW', 'DCT', 'MUPTT', 'STAR'],
        ksfo_klas: ['SID', 'NTELL', 'Q158', 'TRTIS', 'DCT', 'BYRDY', 'STAR'],
        ksfo_mmmx: ['SID', 'KTINA', 'DCT', 'ROBIE', 'J6', 'LANDO', 'J50', 'PDZ', 'J93', 'ASUTA', 'UT41', 'AXASA', 'J93', 'PPE', 'UT10', 'ZCL', 'UJ5', 'QET', 'UT150', 'DARAN', 'STAR'],
        ksfo_ksat: ['SID', 'KTINA', 'DCT', 'ROBIE', 'J6', 'PMD', 'J65', 'DECAS', 'J212', 'BXK', 'J4', 'SSO', 'J50', 'ALIBY', 'J2', 'ELP', 'J86', 'FIGMO', 'J2', 'FST', 'STAR'],
        klas_klax: ['SID', 'HEC', 'STAR'],
        klas_ksfo: ['SID', 'SLVRR', 'DCT', 'DAG', 'J100', 'LAX', 'J126', 'RZS', 'J501', 'BSR', 'STAR'],
        klas_mmmx: ['SID', 'BOJAC', 'DCT', 'PKE', 'J104', 'TUS', 'J92', 'VYLLA', 'UT12', 'SETRO', 'UT10', 'ZCL', 'UJ5', 'QET', 'UT150', 'DARAN', 'STAR'],
        klas_ksat: ['SID', 'BOJAC', 'DCT', 'EED', 'J6', 'CHILY', 'Q15', 'NABOB', 'J231', 'SJN', 'J108', 'INK', 'J15', 'FUSCO', 'Q20', 'JCT', 'STAR'],
        mmmx_klax: ['SID', 'ATURO', 'UT133', 'OTAKA', 'UT134', 'ZCL', 'UT10', 'PPE', 'J93', 'JLI', 'STAR'],
        mmmx_ksfo: ['SID', 'ATURO', 'UT133', 'OTAKA', 'UT134', 'ZCL', 'UJ5', 'DGO', 'UT49', 'NABAS', 'UQ103', 'GOLFO', 'UT18', 'TIJ', 'J1', 'LAX', 'J126', 'RZS', 'J501', 'BSR', 'STAR'],
        mmmx_klas: ['SID', 'ATURO', 'UT133', 'OTAKA', 'UT134', 'ZCL', 'UT10', 'SETRO', 'UT12', 'VYLLA', 'J92', 'TUS', 'J11', 'DRK', 'STAR'],
        mmmx_ksat: ['SID', 'AXIRI', 'UT138', 'CVM', 'J21', 'LRD', 'STAR'],
        ksat_klax: ['SID', 'LEJON', 'J2', 'JCT', 'Q20', 'FUSCO', 'J15', 'INK', 'J4', 'EWM', 'Q180', 'BXK', 'J4', 'TNP', 'STAR'],
        ksat_ksfo: ['SID', 'LEJON', 'J2', 'JCT', 'Q20', 'FUSCO', 'J15', 'INK', 'J108', 'INW', 'J86', 'BLD', 'J92', 'OAL', 'STAR'],
        ksat_klas: ['SID', 'LEJON', 'J2', 'JCT', 'Q20', 'FUSCO', 'J15', 'INK', 'J108', 'INW', 'J86', 'PGS', 'STAR'],
        ksat_mmmx: ['SID', 'ZANNI', 'DCT', 'XOVES', 'UJ11', 'MTY', 'UJ81', 'URSUR', 'UT44', 'KERGA', 'UT132', 'DARAN', 'STAR']
    }
}

const getRandomPlane = (dataStorage) => {
    const airplaneFamilies = Object.keys(dataStorage.airplane);
    const randomFamily = airplaneFamilies[Math.floor(Math.random() * airplaneFamilies.length)];
    const planesInFamily = dataStorage.airplane[randomFamily];
    const randomPlane = planesInFamily[Math.floor(Math.random() * planesInFamily.length)];
    switch (randomPlane) {
        case 'AT43':
            return 'ATR 42-300';
            break;
        case 'AT44':
            return 'ATR 42-400';
            break;
        case 'AT45':
            return 'ATR 42-500';
            break;
        case 'AT46':
            return 'ATR 42-600';
            break;
        case 'AT73':
            return 'ATR 72-200';
            break;
        case 'AT75':
            return 'ATR 72-500';
            break;
        case 'AT76':
            return 'ATR 72-600';
            break;
        case 'BCS1':
            return 'Airbus A220-100';
            break;
        case 'BCS3':
            return 'Airbus A220-300';
            break;
        case 'A306':
            return 'Airbus A300-600';
            break;
        case 'A30B':
            return 'Airbus A300B2';
            break;
        case 'A3ST':
            return 'Airbus A300ST';
            break;
        case 'A310':
            return 'Airbus A310';
            break;
        case 'A318':
            return 'Airbus A318';
            break;
        case 'A319':
            return 'Airbus A319';
            break;
        case 'A320':
            return 'Airbus A320';
            break;
        case 'A321':
            return 'Airbus A321';
            break;
        case 'A19N':
            return 'Airbus A319neo';
            break;
        case 'A20N':
            return 'Airbus A320neo';
            break;
        case 'A21N':
            return 'Airbus A321neo';
            break;
        case 'A342':
            return 'Airbus A340-200';
            break;
        case 'A343':
            return 'Airbus A340-300';
            break;
        case 'A345':
            return 'Airbus A340-500';
            break;
        case 'A346':
            return 'Airbus A340-600';
            break;
        case 'A359':
            return 'Airbus A350-900';
            break;
        case 'A35K':
            return 'Airbus A350-1000';
            break;
        case 'A388':
            return 'Airbus A380-800';
            break;
        case 'B37M':
            return 'Boeing 737 MAX 7';
            break;
        case 'B38M':
            return 'Boeing 737 MAX 8';
            break;
        case 'B39M':
            return 'Boeing 737 MAX 9';
            break;
        case 'B736':
            return 'Boeing 737-600';
            break;
        case 'B737':
            return 'Boeing 737-700';
            break;
        case 'B738':
            return 'Boeing 737-800';
            break;
        case 'B739':
            return 'Boeing 737-900';
            break;
        case 'B741':
            return 'Boeing 747-100';
            break;
        case 'B742':
            return 'Boeing 747-200';
            break;
        case 'B743':
            return 'Boeing 747-300';
            break;
        case 'B744':
            return 'Boeing 747-400';
            break;
        case 'B748':
            return 'Boeing 747-8';
            break;
        case 'B752':
            return 'Boeing 757-200';
            break;
        case 'B753':
            return 'Boeing 757-300';
            break;
        case 'B762':
            return 'Boeing 767-200';
            break;
        case 'B763':
            return 'Boeing 767-300';
            break;
        case 'B764':
            return 'Boeing 767-400';
            break;
        case 'B772':
            return 'Boeing 777-200';
            break;
        case 'B773':
            return 'Boeing 777-300';
            break;
        case 'B77L':
            return 'Boeing 777-200LR';
            break;
        case 'B77W':
            return 'Boeing 777-300ER';
            break;
        case 'B788':
            return 'Boeing 787-8';
            break;
        case 'B789':
            return 'Boeing 787-9';
            break;
        case 'B78X':
            return 'Boeing 787-10';
            break;
        case 'DH8A':
            return 'Bombardier Dash 8-100';
            break;
        case 'DH8B':
            return 'Bombardier Dash 8-200';
            break;
        case 'DH8C':
            return 'Bombardier Dash 8-300';
            break;
        case 'DH8D':
            return 'Bombardier Dash 8-400';
            break;
        case 'AJ27':
            return 'Comac ARJ21';
            break;
        case 'C919':
            return 'Comac C919';
            break;
        case 'E170':
            return 'Embraer E170';
            break;
        case 'E75L':
            return 'Embraer E175 Long Range';
            break;
        case 'E75S':
            return 'Embraer E175 Short Range';
            break;
        case 'E190':
            return 'Embraer E190';
            break;
        case 'E195':
            return 'Embraer E195';
            break;
        case 'E290':
            return 'Embraer E190-E2';
            break;
        case 'E295':
            return 'Embraer E195-E2';
            break;
        case 'E135':
            return 'Embraer ERJ 135';
            break;
        case 'E140':
            return 'Embraer ERJ 140';
            break;
        case 'E145':
            return 'Embraer ERJ 145';
            break;
        case 'CRJ1':
            return 'Mitsubishi CRJ100';
            break;
        case 'CRJ2':
            return 'Mitsubishi CRJ200';
            break;
        case 'CRJ7':
            return 'Mitsubishi CRJ700';
            break;
        case 'CRJ9':
            return 'Mitsubishi CRJ900';
            break;
        case 'CRJX':
            return 'Mitsubishi CRJX';
            break;
        case 'SB20':
            return 'SAAB 340';
            break;
        case 'SF34':
            return 'SAAB 2000';
            break;
        case 'SU95':
            return 'Sukhoi Superjet 100';
            break;
        case 'MC23':
            return 'Yakovlev MC-21';
            break;
        default:
            return 'Unknown';
            break;
    }
    return randomPlane;
}

console.log(getRandomPlane(dataStorage));