// src/components/Header.tsx

import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "@/hooks/useTheme";
import SandwichMenu from "@components/SandwichMenu";
import api from "@/api/apiClient"; // Instância do Axios com baseURL
import styles from "@compStyles/Header.styles";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { colors, fontFamily, fontSizes } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [hasOpenMatch, setHasOpenMatch] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  const checkOpenMatches = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const token = await AsyncStorage.getItem("token");

      if (userId && token) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        };

        const response = await api.get(
          `/partidas/filtro?registrador=${userId}&fim=null`,
          config,
        );
        setHasOpenMatch(response.data.length > 0);
      }
    } catch (error) {
      if ((error as any)?.response?.status === 404) {
        setHasOpenMatch(false);
      } else {
        console.error("Erro ao verificar partidas em aberto:", error);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      checkAuthentication();
      if (isAuthenticated) checkOpenMatches();
      return () => setModalVisible(false);
    }, [isAuthenticated]),
  );

  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: colors.backgroundHighlight },
      ]}
    >
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons
          name="menu"
          size={fontSizes.giant}
          color={colors.textOnHighlight}
        />
      </TouchableOpacity>

      {/* Modal do menu sanduiche */}
      <SandwichMenu
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />

      <Text
        style={{
          fontSize: fontSizes.giant,
          fontFamily,
          color: colors.textOnHighlight,
          flex: 1,
          textAlign: "center",
        }}
      >
        {title}
      </Text>

      <View style={styles.iconPlaceholder}>
        {isAuthenticated && (
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => {
              /* inserir lógica futura */
            }}
          >
            <Text
              style={{
                fontSize: fontSizes.giant,
                fontFamily,
                color: colors.textOnHighlight,
              }}
            >
              🎲
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
