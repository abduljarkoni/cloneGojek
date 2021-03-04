import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import home from './icon/home.png';
import order from './icon/order.png';
import help from './icon/help.png';
import inbox from './icon/inbox.png';
import account from './icon/account.png';

const App = () => {
  return (
    <>
      <View style={{flex: 1}}>
        {/* flex1 akan memakan sisa dari tinggai view yang di bawahnya */}
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* 2.section search/pencarian */}
          <View
            style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15,
            }}>
            {/* position :relative agar componen search tidak keluar dari pembungkusnya */}
            <View style={{position: 'relative', flex: 1}}>
              <TextInput
                placeholder="what do you want to eat testing?"
                style={{
                  borderWidth: 1,
                  borderColor: 'grey',
                  borderRadius: 30,
                  height: 40,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginRight: 10,
                }}
              />

              {/* position : absolute agar object/component search mudah di atur */}
              <Image
                source={require('./icon/search.png')}
                style={{
                  position: 'absolute',
                  width: 25,
                  height: 25,
                  top: 7,
                  left: 12,
                }}
              />
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./icon/promo.png')}
                style={{width: 25, height: 25}}
              />
            </View>
          </View>

          {/*3. section gopay */}
          {/* wrapper/pembungkus global */}
          <View
            style={{
              marginHorizontal: 17,
              marginTop: 8,
            }}>
            {/* buat 2 wrapper/View untuk icon bar biru gelap dan terang */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'darkblue',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                padding: 10,
              }}>
              <Image
                source={require('./icon/gopay.jpeg')}
                style={{width: 100, height: 20}}
              />
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                Rp.50.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 14,
                backgroundColor: 'blue',
                borderBottomLeftRadius: 5,
                borderBottomEndRadius: 5,
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./icon/pay.jpeg')}
                  style={{width: 40, height: 40, borderRadius: 5}}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 10,
                  }}>
                  Pay
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./icon/nearby.png')}
                  style={{width: 40, height: 40, borderRadius: 5}}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 10,
                  }}>
                  Nearby
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./icon/topup.png')}
                  style={{width: 40, height: 40, borderRadius: 5}}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 10,
                  }}>
                  Top Up
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image
                  source={require('./icon/more.png')}
                  style={{width: 40, height: 40, borderRadius: 5}}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 'bold',
                    marginTop: 10,
                  }}>
                  More
                </Text>
              </View>
            </View>
          </View>

          {/* 4. main/halaman icon menu utama feature   menu gajek transportasi dll*/}
          {/* flexwrapp:wrap adalah agar membuat objec/component turun kebawah */}

          <View
            style={{
              flexWrap: 'wrap',
              marginHorizontal: 17,
              marginTop: 18,
            }}>
            {/* agar membuat componenmenu 4 baris di atas dan 4 baris dibawah maka bungkus
              lagi 4 icon denga view/wrapper */}

            {/* pembungkus ke 1 */}
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: 'lightgrey',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./icon/goride.jpeg')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-RIDE
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: 'lightgrey',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./icon/gocar.png')}
                    style={{width: 50, height: 50, paddingHorizontal: 10}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-CAR
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: 'lightgrey',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./icon/gocar1.jpeg')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-TAKSI
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: 'lightgrey',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./icon/gosend.jpeg')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-SEND
                </Text>
              </View>
            </View>

            {/* pembungkus icon ke 2 */}
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginTop: 18,
              }}>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: 'lightgrey',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./icon/godeals.jpeg')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-DEALS
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: 'lightgrey',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./icon/gopulsa.jpeg')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-PULSA
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: 'lightgrey',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./icon/gofood.jpeg')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-FOOD
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: 'lightgrey',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./icon/gomore.png')}
                    style={{width: 50, height: 50}}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  MORE
                </Text>
              </View>
            </View>
          </View>
          {/* garis abu abu pembatas section */}
          <View
            style={{
              height: 17,
              backgroundColor: '#F2F2F4',
              marginTop: 10,
            }}></View>

          {/* new sction/halaman berita */}
          <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            {/* agar image tida keluar dari wrapper/pembungkusnya */}
            <View style={{position: 'relative'}}>
              <Image
                source={require('./news/bola.jpeg')}
                style={{width: '100%', height: 170, borderRadius: 7}}
              />

              {/* //membuat bayangan hitam agar konten diatas nya /lognya bisa terlihat */}
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
                  left: 0,
                  top: 0,
                  borderRadius: 7,
                  opacity: 0.2,
                }}></View>
              <View
                style={{
                  height: 15,
                  width: 60,
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  borderRadius: 2,
                }}>
                <Image
                  source={require('./icon/logogojek.png')}
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 2,
                  }}
                />
              </View>
            </View>

            {/* membuat garis didalam wrapper pembungkus button menggunakan  style */}
            {/* borderBottomColor: '#E8E9ED' borderBottomWidth: 1,marginBottom: 20, */}
            <View
              style={{
                paddingTop: 10,
                paddingBottom: 20,
                borderBottomColor: '#E8E9ED',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
                GO-NEWS
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#7A7A7A',
                  marginBottom: 11,
                }}>
                Selamat Indonesia Menang, Dalam Piala Dunia 2029
              </Text>

              {/* membuat button custome dengan view */}
              {/* alignSelf ada properti yang di gunakn untuk button
              agar panjang button mengikuti panjang teks di dalamnya
              alignselft : "center" agar button ke tengah
              aligselft : "flex-end" agar button ke sebelah kanan/di akhir
              aligselft : "stretch" agar button memenuhi sisaspace wrappernya/view 
              */}
              <TouchableOpacity
                style={{
                  backgroundColor: '#61A756',
                  paddingHorizontal: 12,
                  paddingVertical: 11,
                  alignSelf: 'flex-end',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  READ
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 5.section banner information internal gojek */}
          <View style={{padding: 16}}>
            <View style={{height: 25, width: 70}}>
              <Image
                source={require('./icon/logogojek.png')}
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 2,
                }}
              />
            </View>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Complete your profile
            </Text>
            <View>
              <Image
                source={require('./icon/fb.png')}
                style={{width: 100, height: 100}}
              />
              <View>
                <Text>Connect With Facebook</Text>
                <Text>Login faster without verification code</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#61A756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignSelf: 'flex-end',
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                CONNECT
              </Text>
            </TouchableOpacity>
            <View
              style={{
                marginTop: 16,
                marginBottom: 16,
                borderBottomColor: '#E8E9ED',
                borderBottomWidth: 1,
              }}></View>
          </View>

          {/* 6.section banner goofod/halaman banner gofood */}
          <View style={{padding: 16}}>
            {/* setiap position absolute harus dibungkus dengan wrapper/view dengan 
            position relative agar objek/componen tidak keluar dari pembungkusnya */}

            <View
              style={{
                position: 'relative',
              }}>
              <Image
                source={require('./news/makanan.jpeg')}
                style={{width: '100%', height: 170, borderRadius: 7}}
              />

              {/* membuat bayangan hitam/transparan yg menutupi gambar dengan position
              absolute */}
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'black',
                  left: 0,
                  top: 0,
                  borderRadius: 7,
                  opacity: 0.2,
                }}></View>
              <Image
                source={require('./news/gofood.png')}
                style={{
                  height: 25,
                  width: 75,
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  borderRadius: 5,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                width: '100%',
                borderRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingVertical: 16,
                marginBottom: 32,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 13,
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  free GO-FOOD Voucher
                </Text>
                <Text style={{fontSize: 12, color: 'white', fontWeight: '400'}}>
                  Quick,before they run out !
                </Text>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61A756',
                    paddingHorizontal: 12,
                    paddingVertical: 11,
                    alignSelf: 'stretch',
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    GET VOUCHER
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                marginTop: 16,
                marginBottom: 16,
                borderBottomColor: '#E8E9ED',
                borderBottomWidth: 1,
              }}></View>
          </View>
        </ScrollView>

        {/* 1. navigasi utama gojek  navbar aplikasinya yang fixed/tetap*/}
        {/* scrollview berada di atas navbar agar navbar tidak ikut ke scroll saat di geser2 */}

        <View
          style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./icon/home-active.png')}
              style={{width: 26, height: 26}}
            />

            <Text style={{fontSize: 10, marginTop: 4, color: 'green'}}>
              Home
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={order} style={{width: 26, height: 26}} />

            <Text style={{fontSize: 10, marginTop: 4}}>Orders</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={help} style={{width: 26, height: 26}} />

            <Text style={{fontSize: 10, marginTop: 4}}>Help</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={inbox} style={{width: 26, height: 26}} />

            <Text style={{fontSize: 10, marginTop: 4}}>Inbox</Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={account} style={{width: 26, height: 26}} />

            <Text style={{fontSize: 10, marginTop: 4}}>Account</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
