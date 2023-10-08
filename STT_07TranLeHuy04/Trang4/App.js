import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const price = 141.8;

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcTotalBill = (price, quantity) => {
    return price * quantity;
  };
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view1Left}>
          <View style={styles.viewTop}>
            <Image
              source={{
                uri: "https://vcdn.tikicdn.com/cache/550x550/ts/product/7a/5e/62/8a692ce25c7ed5778c5e2e72576a15cc.jpg",
              }}
              style={{ width: 140, height: 150 }}
            />
          </View>
          <View style={styles.viewBottom}>
            <Text style={{ fontSize: 8, fontWeight: "bold" }}>
              Mã giảm giá đã lưu
            </Text>
          </View>
        </View>

        <View style={styles.view1Right}>
          <View style={styles.viewTop}>
            <Text style={{ fontWeight: "bold", fontSize: 8 }}>
              Nguyên hàm tích phân và ứng dụng{" "}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 8 }}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text style={styles.textPrice}>{price.toFixed(3)} đ</Text>
            <Text style={styles.txtPriceCancle}>{price.toFixed(3)} đ</Text>

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  alignItems: "flex-start",
                }}
              >
                <TouchableOpacity
                  onPress={decrement}
                  style={styles.buttonView1}
                >
                  <Text style={{ color: "#808080" }}>-</Text>
                </TouchableOpacity>
                <Text style={{ marginLeft: 10, marginRight: 10 }}>
                  {quantity}
                </Text>
                <TouchableOpacity
                  onPress={increment}
                  style={styles.buttonView1}
                >
                  <Text style={{ color: "black" }}>+</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  style={{ fontSize: 5, fontWeight: "bold", color: "blue" }}
                >
                  Mua sau
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.viewBottom}>
            <TouchableOpacity
              style={{ fontSize: 5, fontWeight: "bold", color: "blue" }}
            >
              Xem tại đây
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.view2}>
        <View style={styles.view2Left}>
          <View style={styles.view2Color}></View>

          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Mã giảm giá</Text> 
        </View>
        <View style={styles.view2Right}>
          <TouchableOpacity>
            <View style={styles.buttonView2Right}>
              <View>
                <Text
                  style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
                >
                  Áp dụng
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.view3}>
        <View style={styles.view3Text}>
          <View style={styles.viewInTextView3}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
            </Text>
            <TouchableOpacity
              style={{ fontSize: 12, fontWeight: "bold", color: "blue" }}
            >
              Nhập tại đây?
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.view4}>
        <View style={styles.view4Bill}>
          <View style={styles.view4Text}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tạm tính</Text>
          </View>
          <View style={styles.textPrice}>
            {calcTotalBill(price, quantity).toFixed(3)} đ
          </View>
        </View>
      </View>
      <View style={styles.view5}></View>
      <View style={styles.view6}>
        <View style={styles.view4Bill}>
          <View style={styles.view4Text}>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#808080" }}
            >
              Thành tiền
            </Text>
          </View>
          <View style={styles.textPrice}>
            {calcTotalBill(price, quantity).toFixed(3)} đ
          </View>
        </View>
      </View>
      <View style={styles.view7}>
        <TouchableOpacity>
          <View style={styles.buttonView6}>
            <View>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                TIẾN HÀNH ĐẶT HÀNG
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view1: {
    flex: 0.3,
    flexDirection: "row",
    margin: 10,
  },
  view1Left: {
    flex: 0.3,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  view1Right: {
    flex: 0.7,
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 10,
  },
  viewTop: {
    flex: 0.9,
  },
  viewBottom: {
    flex: 0.1,
    justifyContent: "center",
  },
  txtPriceCancle: {
    fontWeight: "bold",
    fontSize: 10,
    color: "#808080",
    textDecorationLine: "line-through",
    textDecorationColor: "#808080",
  },
  buttonView1: {
    width: 20,
    height: 20,
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    justifyContent: "center",
  },

  view2: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  view2Left: {
    flexDirection: "row",
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 5,
    height: 45,
    width: 208,
  },
  view2Right: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  view2Color: {
    width: 32,
    height: 16,
    backgroundColor: "#F2DD1B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  buttonView2Right: {
    backgroundColor: "#0A5EB7",
    width: 100,
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  view3: {
    flex: 0.1,
    justifyContent: "center",
    backgroundColor: "#C4C4C4",
  },
  view3Text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
  },
  viewInTextView3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },

  view4: {
    flex: 0.1,
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  view4Bill: {
    margin: 10,
    flexDirection: "row",
  },
  view4Text: {
    flex: 1,
  },

  view5: {
    flex: 0.2,
    backgroundColor: "#C4C4C4",
  },
  view6: {
    flex: 0.1,
  },
  view7: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonView6: {
    backgroundColor: "red",
    width: 370,
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  textPrice: {
    fontWeight: "bold",
    fontSize: 25,
    color: "red",
  },
});
