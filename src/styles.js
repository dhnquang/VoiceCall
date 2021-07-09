import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    textAlign: 'center',
    marginTop: '2%',
    borderColor: '#fff',
    borderWidth: 1,
    width: '95%',
    borderRadius: 20,
    color: '#fff'
  },
  box1: {
    flex: 1.2,
    alignItems: 'center'
  },
  box2: {
    flex: 1
  },
  callBox: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  text: {
    marginTop: '2%',
    color: '#fff',
    fontSize: 18,
    fontWeight: '500'
  },
  call: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  settingBox: {
    alignItems: 'flex-end',
    flex: 2,
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row'
  },
  button: {
    marginHorizontal: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
    width: 70,
    height: 70,
    borderRadius: 35
  },
  usersListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
