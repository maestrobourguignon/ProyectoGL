import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerList: {
    flex: 3,
    marginTop: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  containerBot: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  botContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  txt: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  pressableTxt: {
    fontSize: 18,
    color: '#50C2C9',
  },
  bold: {
    fontWeight: 'bold',
  },
  txtInput: {
    borderRadius: 30,
    backgroundColor: '#fff',
    width: '80%',
    paddingLeft: 30,
    color: 'black',
  },
  txtMargin: {
    marginHorizontal: 60,
  },
  btn: {
    backgroundColor: '#50C2C9',
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#eee',
    margin: 10,
  },
  img: {
    height: 250,
    resizeMode: 'contain',
    margin: 15,
  },
  separador: {
    margin: 5,
  },
  separador40: {
    margin: 40,
  },
  row: {
    flexDirection: 'row',
  },
  margin60: {
    margin: 60,
  },
  elipse: {
    position: 'absolute',
    top: -100,
    left: -100,
  },
  width100: {
    width: '100%',
  },
});
