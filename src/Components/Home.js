import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgHead: [
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/42/fadddfea-49a0-4432-aed4-cc123c0897c91x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/175/4d375745-2723-4e5c-92de-b8111c5a33071x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/499/3f3cb274-27a5-4dd1-8e20-b3a32bb795ae1x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/175/4d375745-2723-4e5c-92de-b8111c5a33071x.jpg',
        },
        {
          image:
            'https://photo-cdn.icons8.com/assets/previews/42/fadddfea-49a0-4432-aed4-cc123c0897c91x.jpg',
        },
      ],
      clinicCards: [
        {
          head: 'BASIC',
          clinicName: 'Zoylo Basic Health Checkup',
          tests: '59 tests included',
          prevPrice: '₹ 1750',
          currentPrice: '₹ 699',
          discount: '60% off',
          logo: 'ZOYLO LABS',
        },
        {
          head: 'BASIC',
          clinicName: 'Zoylo Vital Bone Care',
          tests: '2 tests included',
          prevPrice: '₹ 1800',
          currentPrice: '₹ 700',
          discount: '61% off',
          logo: 'ZOYLO LABS',
        },
        {
          head: 'BASIC',
          clinicName: 'Zoylo Neurological Suregons',
          tests: '59 tests included',
          prevPrice: '₹ 2150',
          currentPrice: '₹ 1209',
          discount: '52% off',
          logo: 'ZOYLO LABS',
        },
      ],
    };
  }

  render() {
    const {imgHead, clinicCards} = this.state;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'silver'}}>
        
      <View style={{flexDirection:"row",justifyContent:"space-between",padding:10,backgroundColor:"white"}}>
          <View>
        <TouchableOpacity>
        <Image source={require('../Assets/Mobile.png')} ></Image>
        </TouchableOpacity>
          </View>
        
          <View>
              <TouchableOpacity>
         
          <Image source={require('../Assets/Cart.png')} ></Image>
          </TouchableOpacity>
          </View>

        

      </View>
        
        <ScrollView>
          <FlatList
            style={{margin: 10}}
            horizontal
            data={imgHead}
            renderItem={({item}) => {
              return (
                <Image
                  source={{uri: item.image}}
                  style={styles.imageStart}></Image>
              );
            }}
          />

          {/* Three View part */}

          <View style={styles.parentSectionSecond}>
            <View style={styles.sectionSecond}>
              <Image source={require('../Assets/medicine.png')} />
              <Text style={styles.textSectionSecond}>Medicines</Text>
            </View>
            <View style={styles.sectionSecond}>
              <Image source={require('../Assets/microscope3.png')} />
              <Text style={styles.textSectionSecond}>Tests and Packages</Text>
            </View>
            <View style={styles.sectionSecond}>
              <Image source={require('../Assets/online2.png')} />
              <Text style={styles.textSectionSecond}>Online Consultation</Text>
            </View>
          </View>

          {/* Three View part */}

          {/* Five View part */}

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.sectionThird}>
              <Image
                style={styles.sectionThirdImage}
                source={require('../Assets/sthetho.png')}
              />
              <Text style={styles.textSectionThird}>Doctor Appointment</Text>
            </View>

            <View style={styles.sectionThird}>
              <Image
                style={styles.sectionThirdImage}
                source={require('../Assets/wellness.png')}
              />
              <Text style={styles.textSectionThird}>Wellness Packages</Text>
            </View>

            <View style={styles.sectionThird}>
              <Image
                style={styles.sectionThirdImage}
                source={require('../Assets/askzoy.png')}
              />
              <Text style={styles.textSectionThird}>Ask Joy</Text>
            </View>

            <View style={styles.sectionThird}>
              <Image
                style={styles.sectionThirdImage}
                source={require('../Assets/home.png')}
              />
              <Text style={styles.textSectionThird}>Home HealthCare</Text>
            </View>

            <View style={styles.sectionThird}>
              <Image
                style={styles.sectionThirdImage}
                source={require('../Assets/packages.png')}
              />
              <Text style={styles.textSectionThird}>Hospital Packages</Text>
            </View>
          </View>
          {/* Five View part */}

          {/* Diagnostic part */}

          <View style={{flex: 1, flexDirection: 'row', marginTop: 25}}>
            <View style={{flex: 0.8}}>
              <Text style={{fontSize: 15, marginLeft: 7}}>
                Diagnostic Packages by Zoylo Labs
              </Text>
            </View>

            <View style={{flex: 0.2}}>
              <Text style={{color: '#FF8C00'}}>View All</Text>
            </View>
          </View>
          {/* Diagnostic part */}

          {/* Cards Part */}

          <FlatList
            style={{margin: 10}}
            horizontal
            data={clinicCards}
            renderItem={({item}) => {
              return (
                <View style={styles.cardStyle}>
                  <View style={{backgroundColor: '#ddd3ee', padding: 7}}>
                    <View style={{marginTop: 8,height:40,width:60,marginLeft:8,borderRadius:10}}>
                      <Text style={styles.cardTextHead}>{item.head}</Text>
                    </View>
                    <View style={{marginTop: 10}}>
                      <Text style={{fontWeight: '600'}}>{item.clinicName}</Text>
                    </View>
                    <View style={{marginTop: 16}}>
                      <Text>{item.tests}</Text>
                    </View>
                  </View>
                
                  <Text style={styles.prevPriceCard}>{item.prevPrice}</Text>
                
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, padding: 8}}>
                      <Text style={{color: 'green'}}>{item.currentPrice}</Text>
                    </View>
                    <View style={{ padding:6}}>
                      <Text style={styles.discountCard}>{item.discount}</Text>
                     </View>
                    </View>
                    <Text style={{color:"purple",opacity:0.2,padding:6,fontSize:18}}>
                        {item.logo}
                    </Text>
                <TouchableOpacity>
                   <View style={{height:20,width:80,margin:10,padding:3}}>
                   <Text style={{color:"orange",fontWeight:"600",fontSize:15}}>
                       Book Now
                   </Text>
                   </View>
                </TouchableOpacity>
                
                  
                </View>
              );
            }}
          />
        
        <View style={{marginLeft:10}}>
        <Text>Medicine Categories</Text>
        </View>
        
            <View style={styles.parentSectionSecond}>
            <View style={styles.sectionSecond}>
              <Image source={require('../Assets/perfume.png')} />
              <Text style={{margin:7}}>HealthCare Products</Text>
            </View>
            <View style={styles.sectionSecond}>
              <Image source={require('../Assets/ayurveda.png')} />
              <Text style={{margin:7}} >Ayurveda</Text>
            </View>
            <View style={styles.sectionSecond}>
              <Image source={require('../Assets/medicine.png')} />
              <Text style={{margin:7}}>Homeopathy</Text>
            </View>
          </View>
        
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  imageStart: {
    height: 200,
    width: 250,
    resizeMode: 'center',
    margin: 10,
    borderRadius: 10,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,

  },
  parentSectionSecond: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },
  sectionSecond: {
    flex: 1,
    margin: 5,
    borderRadius: 7,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:7,
    
  },
  textSectionSecond: {
    textAlign:"center",
    marginTop:5
   },
  sectionThird: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:'flex-start',
    alignItems:"center",
    paddingTop:8,
    paddingBottom:8
  
    
  },
  sectionThirdImage: {
    borderRadius: 50,
    borderColor: 'silver',
    borderWidth: 2,
  
  },
  textSectionThird: {
      textAlign:"center",
    marginTop: 8,
    marginLeft: 8,
    fontSize:12,
  },

  cardStyle: {
    margin: 10,
    backgroundColor: 'white',
    flex:1,
    width:200,
    height:300,
   shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.5,
  },

  cardTextHead: {
    fontWeight: '600',
    borderRadius: 4,
    borderWidth: 2,
    backgroundColor: 'white',
    padding:5,
    borderColor:"white",
    
    
  },

  discountCard: {
    color: 'green',
    borderColor: 'green',
    borderStyle:'dashed',
    borderWidth: 2,
    padding: 3,
  },
  prevPriceCard: {
    padding: 8,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: '#000',
  },
});

export default Home;
