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
    alignItems: 'center',
    justifyContent: 'space-between',
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
  deleteContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 16,
    marginRight: 45,
  },
  flatList: {
    backgroundColor: '#fff',
    width: '90%',
    height: '90%',
    marginTop: 30,
    borderRadius: 30,
  },
  drawerContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  bgContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#A0A0A0',
  },
  userContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  fixedUserImagen: {
    position: 'absolute',
    top: 60,
    right: 40,
  },
  miniUserImagen: {
    width: 60,
    height: 60,
    borderRadius: 70,
  },
  userImagen: {
    width: 130,
    height: 130,
    borderRadius: 70,
  },
  bigUserImagen: {
    width: 260,
    height: 260,
    borderRadius: 140,
  },
  camaraContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  camaraIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    left: 15,
    bottom: 3,
  },
  userNombre: {
    marginVertical: 10,
  },
  userTitulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
  },
  userSubTitulo: {
    textAlign: 'center',
    fontSize: 15,
    color: '#50C2C9',
    paddingVertical: 5,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginVertical: 15,
  },
  iconoContainer: {
    flex: 1.5,
    justifyContent: 'center',
  },
  tituloContainer: {
    flex: 8.5,
    justifyContent: 'center',
  },
  tituloTxt: {
    fontSize: 15,
    color: 'black',
  },
  difuminado: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  fondoImagen: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
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
  completeTxt: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: -3,
    fontWeight: 'bold',
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
  elipse2: {
    position: 'absolute',
    top: 800,
    left: 250,
  },
  width100: {
    width: '100%',
  },
  width80: {
    width: '80%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  complete: {
    color: 'green',
  },
  incomplete: {
    color: 'tomato',
  },
  absolute: {
    position: 'absolute',
  },
  textButtonStyle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#c00000',
  },
  rightItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
  },
  leftItem: {
    flex: 1,
    backgroundColor: '#76a21e',
    justifyContent: 'center',
  },
  leftItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#fff',
  },
  deleteBtn: {
    fontSize: 15,
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    elevation: 2,
    shadowRadius: 5,
    shadowOpacity: 0.3,
  },
});
