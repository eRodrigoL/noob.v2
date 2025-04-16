import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Animated,
  Dimensions,
  ScrollView,
} from "react-native";
import { useTheme, globalStyles } from "@theme"; // Importa temas, cores e estilos
import styles from "@compStyles/ParallaxProfile.styles";

const { width } = Dimensions.get("window");
const HEADER_HEIGHT = 250; // altura inicial da capa
const PROFILE_IMAGE_SIZE = 120; // tamanho da imagem de perfil

const ParallaxProfile = () => {
  const { colors, fontFamily, fontSizes } = useTheme();
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT / 2],
    extrapolate: "clamp",
  });

  return (
    <View
      style={[
        globalStyles.container,
        { backgroundColor: colors.backgroundBase },
      ]}
    >
      <Animated.View
        style={[
          styles.coverContainer,
          { transform: [{ translateY: headerTranslateY }] },
        ]}
      >
        <ImageBackground
          source={require("@assets/images/default-cover.jpg")}
          style={styles.cover}
        />
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT / 2 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      >
        {/* Foto e Nome do Perfil */}
        <View style={styles.profileContainer}>
          <View style={[styles.profileImage, { borderColor: colors.border }]} />
          <Text
            style={{
              fontFamily,
              fontSize: fontSizes.large,
              color: colors.textOnBase,
            }}
          >
            Nome do Usuário
          </Text>
        </View>

        {/* Conteúdo abaixo */}
        <View style={styles.contentContainer}>
          <Text
            style={{
              fontFamily,
              fontSize: fontSizes.base,
              color: colors.textOnBase,
            }}
          >
            Conteúdo da página aqui...
          </Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default ParallaxProfile;
