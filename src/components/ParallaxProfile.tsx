// Importa as bibliotecas e componentes necessários para o funcionamento do componente
import React, { useState, useEffect } from "react";
import {
  View, // Para criar contêineres de layout
  Text, // Para exibir texto na tela
  TextInput, // Para entrada de texto pelo usuário
  Dimensions, // Para obter informações de tamanho da tela
  Image, // Para exibir imagens
  ImageBackground, // Para imagens de fundo
  ScrollView, // Para permitir rolagem no conteúdo
  TouchableOpacity, // Para criar botões clicáveis
  StyleSheet,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import * as ImagePicker from "expo-image-picker"; // Para permitir a seleção de imagens da galeria do dispositivo
import { images } from "@images";
import { useTheme, globalStyles } from "@theme";

// Obtém as dimensões da tela e define valores constantes para o cabeçalho e cobertura da página
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const heightPageCover = 200;
const initialHeightHeader = 90;
const finalHeightHeader = 180;

// Define as propriedades aceitas pelo componente ParallaxProfile
export interface ParallaxProfileProps {
  id?: string | null; // Identificador opcional do perfil
  name?: string | null; // Nome inicial no perfil
  photo?: string | null; // URL opcional para a foto do perfil
  cover?: string | null; // URL opcional para a capa do perfil
  initialIsEditing?: boolean; // Se o modo de edição é ativado inicialmente
  initialIsRegisting?: boolean; // Se o modo de registro é ativado inicialmente
  children?: React.ReactNode; // Elementos filhos para exibição adicional
  isEditing?: boolean; // Controle externo para ativar o modo de edição
  setEdited?: React.Dispatch<React.SetStateAction<User>>; // Função para atualizar o estado global do usuário
}

// Define a interface para o objeto User
interface User {
  id?: string; // Identificador do perfil
  nome: string; // Nome no perfil
  foto?: string | null; // URL opcional da foto do perfil
  capa?: string | null; // URL opcional da capa do perfil
}

// Componente funcional principal ParallaxProfile
const ParallaxProfile: React.FC<ParallaxProfileProps> = ({
  id, // Identificador do perfil
  name: initialName = null, // Nome inicial no perfil
  photo, // Foto inicial do perfil
  cover, // Capa inicial do do perfil
  isEditing = false, // Define o estado inicial do modo de edição
  initialIsRegisting = false, // Define o estado inicial do modo de registro
  children, // Elementos filhos adicionais
  setEdited, // Função para atualizar o estado do usuário
}) => {
  // Tema escolhido pelo usuário
  const { colors, fontFamily, fontSizes } = useTheme();

  // Estados locais para controlar o registro, foto e nome do perfil
  const [isRegisting, setIsRegisting] = useState<boolean>(
    !id || initialIsRegisting, // Modo de registro é ativado se o id não existir
  );
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState<
    string | null
  >(
    cover || null, // Inicializa a imagem selecionada com a foto ou null
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(
    photo || null, // Inicializa a imagem selecionada com a capa ou null
  );
  const [name, setName] = useState<string | null>(initialName);
  const [interactionEnabled, setInteractionEnabled] = useState(true); // Para travar interação

  // Efeito colateral para ativar o modo de registro caso o id seja indefinido
  useEffect(() => {
    if (!id) {
      setIsRegisting(true);
    }
  }, [id]);

  // CAPA - Função para selecionar uma imagem da galeria do dispositivo
  const pickBackgroudImage = async () => {
    // Solicita permissão para acessar a galeria
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permissão para acessar a galeria é necessária!"); // Exibe um alerta se a permissão for negada
      return;
    }

    // Abre a galeria para o usuário selecionar uma imagem
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Apenas imagens
      allowsEditing: true, // Permite edição básica da imagem
      aspect: [16, 9], // Define a proporção da imagem
      quality: 1, // Define a qualidade máxima da imagem
    });

    // Atualiza o estado local e global com a imagem selecionada
    if (!result.canceled) {
      setSelectedBackgroundImage(result.assets[0].uri); // Define a URI da imagem selecionada
      setEdited &&
        setEdited((prev) => ({
          ...prev,
          capa: result.assets[0].uri, // Atualiza a foto no estado global
        }));
    }
  };

  // FOTO - Função para selecionar uma imagem da galeria do dispositivo
  const pickImage = async () => {
    // Solicita permissão para acessar a galeria
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permissão para acessar a galeria é necessária!"); // Exibe um alerta se a permissão for negada
      return;
    }

    // Abre a galeria para o usuário selecionar uma imagem
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Apenas imagens
      allowsEditing: true, // Permite edição básica da imagem
      aspect: [1, 1], // Define a proporção da imagem
      quality: 1, // Define a qualidade máxima da imagem
    });

    // Atualiza o estado local e global com a imagem selecionada
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri); // Define a URI da imagem selecionada
      setEdited &&
        setEdited((prev) => ({
          ...prev,
          foto: result.assets[0].uri, // Atualiza a foto no estado global
        }));
    }
  };

  // Função para atualizar o nome no estado local e global
  const handleNomeChange = (value: string) => {
    setName(value); // Atualiza o estado local com o novo nome
    setEdited &&
      setEdited((prev) => ({
        ...prev,
        nome: value, // Atualiza o nome no estado global
      }));
  };

  // Valor compartilhado para a posição de rolagem da página
  const scrollY = useSharedValue(0);

  // Manipulador de eventos para rolagem, que atualiza o valor de scrollY
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y; // Define a posição atual da rolagem
  });

  // Estilo animado para o cabeçalho, baseado na posição de rolagem
  const animatedHeaderStyle = useAnimatedStyle(() => {
    const height =
      scrollY.value < heightPageCover
        ? initialHeightHeader +
          (scrollY.value / heightPageCover) *
            (finalHeightHeader - initialHeightHeader)
        : finalHeightHeader;

    return {
      height,
      transform: [{ translateY: Math.max(scrollY.value, heightPageCover) }],
    };
  });

  // Estilo animado para o corpo principal, ajustando o espaçamento superior
  const animatedBodyContainerStyle = useAnimatedStyle(() => {
    // Ajusta os cálculos das alturas inicial e final para diminuir heightPageCover
    const initialHeight = screenHeight - (2 * heightPageCover + 6);
    const maxHeight =
      screenHeight - (heightPageCover + initialHeightHeader + 2);

    const scrollProgress = Math.min(scrollY.value / heightPageCover, 1);
    const heightDiff = maxHeight - initialHeight;
    const height = initialHeight + heightDiff * scrollProgress;

    // Deslocamento adicional ajustado
    const additionalOffset = heightPageCover;

    // Calcula a altura dinâmica do cabeçalho
    const headerHeight =
      initialHeightHeader +
      (scrollY.value / heightPageCover) *
        (finalHeightHeader - initialHeightHeader);

    // Cálculo para o marginTop ajustado
    const marginTop = Math.max(
      headerHeight + additionalOffset,
      initialHeightHeader + additionalOffset,
    );

    return {
      height,
      minHeight: initialHeight,
      marginTop,
    };
  });

  // função para fazer com que a capa suba com o scroll
  const animatedCoverStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: scrollY.value > 0 ? -scrollY.value : 0, // Move para cima com o scroll
        },
      ],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Capa*/}
      {(isEditing || isRegisting) && (
        <View style={styles.PageCover}>
          <ImageBackground
            source={{
              uri:
                selectedBackgroundImage && selectedBackgroundImage !== ""
                  ? selectedBackgroundImage
                  : images.userCover, // Imagem padrão
            }}
            style={styles.backgroundImage}
          />
          <Text
            style={{
              fontFamily,
              fontSize: fontSizes.small,
              color: colors.textOnHighlight,
            }}
          >
            Toque para alterar a capa
          </Text>
        </View>
      )}
      {!(isEditing || isRegisting) && (
        <View style={styles.PageCover}>
          <ImageBackground
            source={{
              uri:
                selectedBackgroundImage && selectedBackgroundImage !== ""
                  ? selectedBackgroundImage
                  : images.userCover, // Imagem padrão
            }}
            style={styles.backgroundImage}
          />
        </View>
      )}

      <Animated.View
        style={[styles.PageCover, { zIndex: 5 }, animatedCoverStyle]}
      >
        {(isEditing || isRegisting) && (
          <TouchableOpacity
            onPress={pickBackgroudImage}
            style={styles.coverTouchable}
          />
        )}
      </Animated.View>

      {/* ScrollView animado para o conteúdo da página */}
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <View>
          {/* Cabeçalho animado que exibe a imagem de perfil e o nome */}
          <Animated.View
            style={[
              styles.header,
              animatedHeaderStyle,
              {
                backgroundColor: colors.backgroundHighlight,
                borderColor: colors.border,
              },
            ]}
          >
            {/* Local da foto*/}
            {(isEditing || isRegisting) && (
              <TouchableOpacity
                onPress={pickImage}
                style={[styles.fotoContainer, { borderColor: colors.border }]}
              >
                <Image
                  source={{
                    uri:
                      selectedImage && selectedImage !== ""
                        ? selectedImage
                        : images.unavailable, // imagem padrão se foto for null
                  }}
                  style={[styles.foto, { borderColor: colors.border }]}
                />
              </TouchableOpacity>
            )}
            {!(isEditing || isRegisting) && (
              <Image
                source={{
                  uri:
                    selectedImage && selectedImage !== ""
                      ? selectedImage
                      : images.unavailable, // imagem padrão se foto for null
                }}
                style={[styles.foto, { borderColor: colors.border }]}
              />
            )}

            {/* Local do nome */}
            {isEditing || isRegisting ? (
              <TextInput
                style={[
                  styles.headerTitleInput,
                  {
                    fontFamily,
                    fontSize: fontSizes.giant,
                    color: colors.textOnHighlight,
                  },
                ]}
                placeholder="Digite o nome aqui..."
                value={name || ""}
                onChangeText={handleNomeChange}
              />
            ) : (
              <Text
                style={{
                  fontFamily,
                  fontSize: fontSizes.large,
                  color: colors.textOnHighlight,
                }}
              >
                {name || "Nome não informado"}
              </Text>
            )}
          </Animated.View>

          {/* View com tamanho fixo para forçar o scroll */}
          <View style={{ height: screenHeight + initialHeightHeader }}>
            {/* Conteúdo principal da página com suporte a rolagem */}
            <Animated.View
              style={[
                styles.bodyContainer,
                animatedBodyContainerStyle,
                {
                  backgroundColor: colors.backgroundHighlight,
                  borderColor: colors.border,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                },
              ]}
              pointerEvents={interactionEnabled ? "auto" : "none"}
            >
              {children}
            </Animated.View>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

// Estilos locais do componente
const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 1,
    height: initialHeightHeader,
    justifyContent: "center",
    borderTopWidth: 3,
  },
  coverTouchable: {
    position: "absolute",
    top: 0,
    left: 0,
    marginLeft: 170,
    width: screenWidth - 170,
    height: "100%",
  },
  PageCover: {
    position: "absolute",
    top: 0,
    width: screenWidth,
    height: heightPageCover,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  fotoContainer: {
    width: 150,
    height: 150,
    borderRadius: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  foto: {
    width: 150,
    height: 150,
    borderWidth: 5,
    borderRadius: 15,
    backgroundColor: "white",
    position: "absolute",
    bottom: 15,
    left: 15,
  },
  headerTitleInput: {
    marginLeft: 195,
    borderWidth: 1,
    right: 15,
  },
  scrollContent: {
    flexGrow: 0,
  },
  bodyContainer: {
    paddingTop: 0,
    flex: 1,
    padding: 0,
  },
});

export default ParallaxProfile;
