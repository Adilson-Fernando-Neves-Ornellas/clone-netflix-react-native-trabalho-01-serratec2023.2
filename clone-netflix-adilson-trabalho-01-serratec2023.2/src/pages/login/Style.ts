import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  containerForm:{
    flex: 1,
    justifyContent: 'center',
    gap: 10
  },
  text: {
    textAlign: 'center',
    color:"white",
    fontSize: 18,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor:"#fff"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:10
  }
});

export default Styles;