import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import { List, Searchbar, Text } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Alumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [buscaAlumno, setBuscaAlumno] = useState('');
  const [tipoOrden, setTipoOrden] = useState('apellido');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlumnos([
        { nombre: 'CANDELARIA MORA SAMANTHA', matricula: '2114354' },
        { nombre: 'CANTU SILVA JAVIER', matricula: '2111889' },
        { nombre: 'CARMONA LOZANO ANGEL EMILIANO', matricula: '2069119' },
        { nombre: 'CASTILLO ACOSTA JORGE', matricula: '2132842' },
        { nombre: 'DAVILA GONZALEZ ALDO ADRIAN', matricula: '1994122' },
        { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '2018230' },
        { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '21045641' },
        { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '20182301' },
        { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '2104564' },
        { nombre: 'FLORES LÓPEZ DIEGO', matricula: '2066033' },
        { nombre: 'FLORES MARTINEZ ERICK ADRIAN', matricula: '2132976' },
        { nombre: 'GARZA AVALOS DIEGO', matricula: '2066114' },
        { nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL', matricula: '2031243' },
        { nombre: 'GRANJA PEÑA DIEGO', matricula: '20647331' },
        { nombre: 'IBARRA RODRIGUEZ ALEXIS', matricula: '20312431' },
        { nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN', matricula: '2064733' },
        { nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA', matricula: '2094647' },
        { nombre: 'MIRELES VELAZQUEZ ALEJANDRO', matricula: '2005102' },
        { nombre: 'MONSIVAIS SALAZAR ANDRES', matricula: '2064574' },
        { nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA', matricula: '2024783' },
        { nombre: 'PEÑA MUNGARRO LUIS ANGEL', matricula: '2066077' },
        { nombre: 'PUENTE REYNOSO JULIO CESAR', matricula: '2092151' },
        { nombre: 'RAMIREZ LOPEZ BRYAN', matricula: '2103708' },
        { nombre: 'RAMOS AVILA LILIANA VALERIA', matricula: '2115192' },
        { nombre: 'RICO JAUREGUI MAURICIO', matricula: '2037503' },
        { nombre: 'RIVERA LUNA ADRIAN', matricula: '2131513' },
        { nombre: 'RIVERA REYNA JOSE EMILIO', matricula: '2013503' },
        { nombre: 'RODRIGUEZ OLVERA ROSA ISELA', matricula: '2004613' },
        { nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL', matricula: '2133022' },
        { nombre: 'SANCHEZ GALARZA JUAN CARLOS', matricula: '2026061' },
        { nombre: 'SOLIS ORTIZ ALFREDO', matricula: '2095320' },
        { nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL', matricula: '2025350' },
        { nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL', matricula: '2103895' },
        { nombre: 'ZACATENCO OLIVE RODRIGO', matricula: '1857791' },
        { nombre: 'ZAVALA CANTU TERESA MARGARITA', matricula: '2025218' }
      ]);
    }, 2000);
  }, []);

  const alumnosFiltrados = alumnos
    .filter((alumno) =>
      alumno.nombre.toLowerCase().includes(buscaAlumno.toLowerCase())
    )
    .sort((a, b) => {
      if (tipoOrden === 'apellido') {
        return a.nombre.localeCompare(b.nombre);
      }
      const nombreA = a.nombre.split(' ').slice(2).join(' ') || a.nombre;
      const nombreB = b.nombre.split(' ').slice(2).join(' ') || b.nombre;
      return nombreA.localeCompare(nombreB);
    });

  if (!alumnos.length) {
    return (
      <View style={{ flex: 1, backgroundColor: '#000000', justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', color: '#ffffff' }}>Cargando alumnos...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <Searchbar
        placeholder="Buscar alumno..."
        placeholderTextColor="#888888"
        iconColor="#ffffff"
        inputStyle={{ color: '#ffffff' }}
        onChangeText={setBuscaAlumno}
        value={buscaAlumno}
        style={{ margin: 16, backgroundColor: '#1e1e1e' }}
      />

      <List.Accordion
        title={tipoOrden === 'apellido' ? "Ordenar: A - Z (Por Apellido)" : "Ordenar: A - Z (Por Nombre)"}
        expanded={expanded}
        onPress={() => setExpanded(!expanded)}
        style={{ backgroundColor: '#000000', marginHorizontal: 16, marginBottom: 8 }}
        titleStyle={{ color: '#ffffff' }}
        theme={{ colors: { onSurfaceVariant: '#ffffff' } }}
      >
        <List.Item
          title="A - Z (Por Apellido)"
          onPress={() => { setTipoOrden('apellido'); setExpanded(false); }}
          style={{ backgroundColor: '#1e1e1e', marginHorizontal: 16 }}
          titleStyle={{ color: '#ffffff' }}
        />
        <List.Item
          title="A - Z (Por Nombre)"
          onPress={() => { setTipoOrden('nombre'); setExpanded(false); }}
          style={{ backgroundColor: '#1e1e1e', marginHorizontal: 16, marginBottom: 8 }}
          titleStyle={{ color: '#ffffff' }}
        />
      </List.Accordion>

      <FlatList
        data={alumnosFiltrados}
        keyExtractor={(item) => item.matricula}
        renderItem={({ item }) => (
          <List.Item
            title={item.nombre}
            description={item.matricula}
            titleStyle={{ color: '#ffffff', fontWeight: 'bold' }}
            descriptionStyle={{ color: '#aaaaaa' }}
            style={{ backgroundColor: '#000000', marginHorizontal: 16, borderBottomWidth: 1, borderBottomColor: '#333333' }}
            left={() => <MaterialIcons name="account-circle" size={40} color="#ffffff" style={{ marginLeft: 8, alignSelf: 'center' }} />}
          />
        )}
      />
    </View>
  );
}