import { DS_DARKLESS_PATH, NEXORIA_PATH } from "./paths";
import CJAvatar from "../assets/player-avatars/CJ-Avatar.png";
import DioAvatar from "../assets/player-avatars/Dio-Avatar.png";
import NeoAvatar from "../assets/player-avatars/Neo-Avatar.png";
import JayAvatar from "../assets/player-avatars/Jay-Avatar.png";
import DevaAvatar from "../assets/player-avatars/Deva-Avatar.png";

const CJ_CHARACTERS = [
  {
    name: "Maria",
    role: "Warlock",
    race: "Living Doll",
    campaign: "Nexoria: Age of Return",
    campaignLink: "#" + NEXORIA_PATH,
  },
];
const JAIDEN_CHARACTERS = [
  {
    name: "Abbot Cedrick/Dlysss Crrrth",
    role: "Bard",
    race: "Geleton",
    campaign: "Dark Souls: Age of the Darkless",
    campaignLink: "#" + DS_DARKLESS_PATH,
  },
];
const NEO_CHARACTERS = [
  {
    name: "Esme Naelar",
    role: "Sorcerer/Ranger",
    race: "Half-Elf",
    campaign: "Nexoria: Age of Return",
    campaignLink: "#" + NEXORIA_PATH,
  },
  {
    name: "Belladonna Fox",
    role: "Monk",
    race: "Human",
    campaign: "Dark Souls: Age of the Darkless",
    campaignLink: "#" + DS_DARKLESS_PATH,
  },
];
const RACC_CHARACTERS = [
  {
    name: "Chernobyl",
    role: "Cleric",
    race: "Myconid",
    campaign: "Dark Souls: Age of the Darkless",
    campaignLink: "#" + DS_DARKLESS_PATH,
  },
  {
    name: "Koneko",
    role: "Cleric",
    race: "Tabaxi",
    campaign: "Nexoria: Age of Return",
    campaignLink: "#" + NEXORIA_PATH,
  },
];
const ELO_CHARACTERS = [
  {
    name: "Anubis Jr",
    role: "Cleric",
    race: "Jackal-were(?)",
    campaign: "Nexoria: Age of Return",
    campaignLink: "#" + NEXORIA_PATH,
  },
];
const DEVA_CHARACTERS = [
  {
    name: "Thundros",
    role: "Rougue",
    race: "Razorback Tortle",
    campaign: "Nexoria: Age of Return",
    campaignLink: "#" + NEXORIA_PATH,
  },
];
const DIO_CHARACTERS = [
  {
    name: "Diomedes",
    role: "Player",
    race: "Tiefling",
    campaign: "Nexoria: Age of Return",
    campaignLink: "#" + NEXORIA_PATH,
  },
  {
    name: "Rolilius Freeman",
    role: "Paladin",
    race: "Tiefling",
    campaign: "Nexoria: Age of Return",
    campaignLink: "#" + NEXORIA_PATH,
  },
];

const PLAYER_INFO = [
  {
    playerAvatar: CJAvatar,
    playerName: "CJ / Cassiopeia",
    playerIntro:
      "CJ, also known as Cassiopeia, is the Dungeon Master and a player in the campaigns, bringing creativity and depth to the game.",
    playerRole: ["DM", "Player"],
    playerGradient:
      "to bottom left, rgba(0,0,0), rgba(190, 37, 170), rgba(0,0,0)",
    playerCharacters: CJ_CHARACTERS,
  },
  {
    playerAvatar: JayAvatar,
    playerName: "Jaiden / Jay",
    playerIntro:
      "Jaiden is a 20-year-old Forever DM who lives for storytelling—whether weaving high fantasy epics or exploring gritty urban fantasy. Usually behind the screen crafting deep, dramatic tales, they seize every chance to play. For Jaiden, the best stories challenge the world as much as they enchant it.",
    playerRole: ["DM", "Player"],
    playerGradient: "rgba(0,0,0), rgba(22, 166, 195), rgba(0,0,0)",
    playerCharacters: JAIDEN_CHARACTERS,
  },
  {
    playerAvatar: NeoAvatar,
    playerName: "Neo",
    playerIntro: "",
    playerRole: ["Player"],
    playerGradient: "rgba(0,0,0), rgba(255,255,255)",
    playerCharacters: NEO_CHARACTERS,
  },
  {
    playerAvatar: CJAvatar,
    playerName: "Racc / Raccoon",
    playerIntro: "",
    playerRole: ["DM", "Player"],
    playerGradient: "rgba(0,0,0), rgba(255,255,255)",
    playerCharacters: RACC_CHARACTERS,
  },
  {
    playerAvatar: CJAvatar,
    playerName: "Elo / Eloediel",
    playerIntro: "",
    playerRole: ["Player"],
    playerGradient: "rgba(0,0,0), rgba(255,255,255)",
    playerCharacters: ELO_CHARACTERS,
  },
  {
    playerAvatar: DevaAvatar,
    playerName: "Deva / Argo",
    playerIntro: "",
    playerRole: ["DM", "Player"],
    playerGradient: "rgba(0,0,0), rgba(255,255,255)",
    playerCharacters: DEVA_CHARACTERS,
  },
  {
    playerAvatar: DioAvatar,
    playerName: "Dio",
    playerIntro: "",
    playerRole: ["DM", "Player"],
    playerGradient: "rgba(0,0,0), rgba(255,255,255)",
    playerCharacters: DIO_CHARACTERS,
  },
];

export {
  CJ_CHARACTERS,
  JAIDEN_CHARACTERS,
  NEO_CHARACTERS,
  RACC_CHARACTERS,
  ELO_CHARACTERS,
  DEVA_CHARACTERS,
  DIO_CHARACTERS,
  PLAYER_INFO,
};
