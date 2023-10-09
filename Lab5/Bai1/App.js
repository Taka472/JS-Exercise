import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/*Khi mun dinh danh vi tri, hoac la mau sac, gan no vao cai view*/}
      <View>
        {/*Cho nay dung de chen hinh, co the dung cach khac, nho set height vs width thi no moi hien ra*/}
        <View style={{alignItems: "center"}}>
          <Image source={require('./assets/vs_blue.png')} style={{height: "350px", width: "301px"}}/>
        </View>
        <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
          {/*Cho nay dung de dinh danh van ban*/}
          <Text style={styles.text1}>Dien thoai VSmart Joy 3 - Hang chinh hang</Text>
        </View>
        <View style={{flexDirection: "row", marginTop: "10px", justifyContent: "space-around", alignItems: "center"}}>
          <View style={{flexDirection: "row"}}>
            <Image source={require('./assets/star.png')} style={{height: "35px", width: "35px"}}/>
            <Image source={require('./assets/star.png')} style={{height: "35px", width: "35px"}}/>
            <Image source={require('./assets/star.png')} style={{height: "35px", width: "35px"}}/>
            <Image source={require('./assets/star.png')} style={{height: "35px", width: "35px"}}/>
            <Image source={require('./assets/star.png')} style={{height: "35px", width: "35px"}}/>
          </View>
          <Text>(Xem 828 danh gia)</Text>
        </View>
        {/*Khi mun no cach xuong hoac cach ben phai trai, dung margin*/}
        <View style={{flexDirection: "row", marginTop: "10px", justifyContent: "space-around", alignItems: "flex-end"}}>
          <Text style={{fontSize: "20px", fontWeight: "bold"}}>1.790.000d</Text>
          {/*TextDecoration dung de gach bo 1 chu*/}
          <Text style={{textDecorationLine: 'line-through'}}>1.790.000 d</Text>
        </View>

        {/*Nut bam cho vao view roi toi touchableOpacity*/}
        <View styles={{flexDirection: 'row', justifyContent:'center'}}>
          <TouchableOpacity style={styles.touch}>
            <View style={styles.viewTouch}>
              <Text style={styles.textTouch}>4 Mau-Chon Mau</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View styles={{flexDirection: 'row', justifyContent:'center'}}>
          {/*Dinh dang nut*/}
          <TouchableOpacity style={{background: "red", marginTop: "20px", height: "45px", borderRadius: 15}}>
            {/*Dinh dang vi tri chu*/}
            <View style={styles.viewTouch}>
              {/*Dinh dang chu*/}
              <Text style={{color: "white", fontWeight: "bold"}}>CHON MAU</Text>
            </View>
          </TouchableOpacity>
        </View>
        
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: "20px",
    marginTop: '0px'
  },

  text1: {
    fontSize: "15px"
  },

  touch: {
    marginTop: 30,
    width: 320,
    height: 45,
    backgroundColor: "white",
    borderRadius: 10,
    /*Khi set mau border, nho rang set do rong cho no borderWidth*/
    borderColor: "black",
    borderWidth: 1
  },

  viewTouch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textTouch: {
    fontWeight: "bold",
    color: "black",
  },
});
