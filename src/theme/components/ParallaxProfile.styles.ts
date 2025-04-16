import { StyleSheet } from "react-native";

const HEADER_HEIGHT = 250;
const PROFILE_IMAGE_SIZE = 120;

export default StyleSheet.create({
  coverContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
  },
  cover: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  profileContainer: {
    alignItems: "center",
    marginTop: -PROFILE_IMAGE_SIZE / 2,
  },
  profileImage: {
    width: PROFILE_IMAGE_SIZE,
    height: PROFILE_IMAGE_SIZE,
    borderRadius: PROFILE_IMAGE_SIZE / 2,
    borderWidth: 4,
    backgroundColor: "#ccc", // provisório
    marginBottom: 10,
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
