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
  taskContainer: {
    width: '80%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 30,
    marginVertical: 5,
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalSubContainer: {
    width: '70%',
    height: '18%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 6,
  },
  flatList: {
    backgroundColor: '#fff',
    width: '90%',
    height: '90%',
    marginTop: 30,
    borderRadius: 30,
  },
  addTask: {
    width: 200,
    height: 200,
    backgroundColor: '#50C2C9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
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
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  complete: {
    backgroundColor: 'green',
  },
  incomplete: {
    backgroundColor: 'tomato',
  },
});
