import React, { useEffect, useState } from "react";
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  Alert,
  Animated,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Navigation
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/RootNavigator";

import api from "@/api/apiClient"; // Substitui axios direto
import { headerMenuStyles } from "@compStyles/SandwichMenu.styles"; // Estilos específicos
import ButtonHighlight from "@components/ButtonHighlight";
import axios from "axios";
import { useTheme } from "@theme"; // Importa temas
const { width } = Dimensions.get("window");

interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

const SandwichMenu: React.FC<ModalProps> = ({ visible, onClose }) => {
  const slideAnim = React.useRef(new Animated.Value(-width)).current;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [hasOpenMatch, setHasOpenMatch] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { colors } = useTheme(); // Acessa o tema atual

  // Verifica autenticação
  const checkAuthentication = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const token = await AsyncStorage.getItem("token");
      setIsAuthenticated(!!userId && !!token);
    } catch (error) {
      console.error("Erro ao verificar autenticação:", error);
      setIsAuthenticated(false);
    }
  };

  // Verifica partidas em aberto
  const checkOpenMatches = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const token = await AsyncStorage.getItem("token");

      if (userId && token) {
        const response = await api.get(
          `partidas/filtro?registrador=${userId}&fim=null`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          },
        );
        setHasOpenMatch(response.data.length > 0);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setHasOpenMatch(false);
        } else {
          console.error("Erro ao verificar partidas em aberto:", error);
        }
      } else {
        console.error("Erro desconhecido:", error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove(["token", "userId"]);
      Alert.alert("Sucesso", "Logout realizado com sucesso!");
      setIsAuthenticated(false);

      // Inserir navegação para a tela inicial
      // navigation.navigate("Home");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const handlePlayPress = () => {
    if (hasOpenMatch) {
      // Inserir navegação para tela de finalização da partida
      // navigation.navigate("MatchFinish");
    } else {
      // Inserir navegação para iniciar nova partida
      // navigation.navigate("MatchStart");
    }
  };

  useEffect(() => {
    if (visible) {
      checkAuthentication();
      if (isAuthenticated) checkOpenMatches();

      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 500,
        useNativeDriver: true,
      }).start(() => onClose());
    }
  }, [visible, isAuthenticated]);

  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={headerMenuStyles.modalContainer}>
          <TouchableWithoutFeedback>
            <Animated.View
              style={[
                headerMenuStyles.modalView,
                {
                  transform: [{ translateX: slideAnim }],
                  backgroundColor: colors.backgroundSemiHighlight,
                },
              ]}
            >
              <View style={headerMenuStyles.buttonContainer}>
                {/* Início leva para TestScreen temporariamente */}
                <ButtonHighlight
                  title="Início"
                  onPress={() => {
                    navigation.navigate("TestScreen");
                    onClose();
                  }}
                />

                {/* Novo botão: Configurações */}
                <ButtonHighlight
                  title="Configurações"
                  onPress={() => {
                    navigation.navigate("SettingsScreen");
                    onClose();
                  }}
                />

                {!isAuthenticated ? (
                  <ButtonHighlight
                    title="Login"
                    onPress={() => {
                      // navigation.navigate("Login");
                    }}
                  />
                ) : (
                  <>
                    <ButtonHighlight
                      title="Perfil"
                      onPress={() => {
                        // navigation.navigate("UserProfile");
                      }}
                    />
                    <ButtonHighlight title="Jogar" onPress={handlePlayPress} />
                    <ButtonHighlight title="Sair" onPress={handleLogout} />
                  </>
                )}
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SandwichMenu;
