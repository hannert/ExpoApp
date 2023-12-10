import { StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';


// Component to drag people out from the side and add them to a food item
export default function PersonFactory() {
    const tempArray = ["Brian", "Stewie", "Peter"];

    const styles = StyleSheet.create({
        factory: {
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            right: '0',
            backgroundColor: '#0ff',
            alignItems: 'center',
            justifyContent: 'center',
        },
      });


    const gesture = Gesture.Tap()
    ;


    return(
        <GestureDetector gesture={gesture}>
            <View style={styles.factory}>
            <Text>Hello!</Text>
            {tempArray.map((name) => (
                <View >
                    <Text>{name} is awesome</Text>
                </View>
            ))}

            </View>
        </GestureDetector>
        

    )

}





