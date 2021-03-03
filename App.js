import React from 'react';
import {StyleSheet, TextInput, View, Text, Image} from 'react-native';
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
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {/* section search/pencarian */}

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

          {/* section gopay */}
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

          {/* main/halaman icon menu utama feature   menu gajek transportasi dll*/}
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
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                  }}></View>
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
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                  }}></View>
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
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                  }}></View>
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
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                  }}></View>
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
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                  }}></View>
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
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                  }}></View>
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
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                  }}></View>
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
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                  }}></View>
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
        </View>
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
