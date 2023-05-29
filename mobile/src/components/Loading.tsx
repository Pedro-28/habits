import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#09090A',
        flex: 1, 
        justifyContent: 'center', 
      }}
    >
      <ActivityIndicator color="#7C3AED" />
    </View>

  );
}