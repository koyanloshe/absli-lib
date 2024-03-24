import { colorLabels } from "../../../storybook/stories/commons/colors";

import Icon from ".";

export default {
  title: "Atoms/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconName: {
      control: {
        type: "select",
      },
      options: [
        "AddFile",
        "AddressBook",
        "AddUser",
        "Airplay",
        "Alarm",
        "Alcohol",
        "Alert",
        "AlertOff",
        "AlertSet",
        "AppleLogo",
        "ArrowCircleDown",
        "ArrowCircleLeft",
        "ArrowCircleRight",
        "ArrowCircleUp",
        "ArrowClockwise",
        "ArrowDown",
        "ArrowDownRight",
        "ArrowLeft",
        "ArrowRight",
        "ArrowsDownUp",
        "ArrowUp",
        "ArrowUpRight",
        "Bank",
        "Bookmark",
        "Buildings",
        "Bulb",
        "BulletList",
        "Cake",
        "CalendarBlank",
        "CalendarCheck",
        "CalendarDate",
        "CalendarPlus",
        "CaretDown",
        "CaretLeft",
        "CaretRight",
        "CaretUp",
        "CaretUpDown",
        "ChartLineUp",
        "ChatCircle",
        "ChatCircleDots",
        "ChatCircleDouble",
        "ChatCircleText",
        "ChatSquare",
        "ChatSquareDots",
        "ChatSquareText",
        "Check",
        "CheckboxEmpty",
        "CheckboxLine",
        "CheckList",
        "CheckSquare",
        "Child",
        "CircleX",
        "Clock",
        "CloseX",
        "Cloud",
        "CloudArrowUp",
        "Coins",
        "Columns",
        "Confetti",
        "Copy",
        "CreditDebitCard",
        "CurrencyINR",
        "Cut",
        "Dashboard",
        "Delete",
        "Download",
        "Drop",
        "Dsktop",
        "Edit",
        "Error",
        "Export",
        "Eye",
        "Eyedropper",
        "FacebookLogo",
        "File",
        "FileDownload",
        "Files",
        "FileText",
        "Fingerprint",
        "FirstAidKit",
        "FolderStar",
        "FolderUser",
        "Funnel",
        "Gift",
        "Globe",
        "GoogleLogo",
        "GraphBar",
        "HamburgerMenu",
        "HandCoins",
        "HandHeart",
        "Hash",
        "Heartbeat",
        "Help",
        "Hide",
        "History",
        "Home",
        "Hourglass",
        "IdentityCard",
        "Image",
        "IncomingPhone",
        "Info",
        "Key",
        "LinkSimpleHorizontal",
        "List",
        "ListPlus",
        "ListSearch",
        "Lock",
        "LockedFile",
        "LockedFolder",
        "LogOut",
        "Mail",
        "MapPinLine",
        "Mic",
        "MicSlash",
        "Minus",
        "MinusCircle",
        "MinusFile",
        "MinusUser",
        "Money",
        "Paperclip",
        "Paste",
        "Percent",
        "Person",
        "PersonOnBike",
        "Phone",
        "PhonePlus",
        "PhoneSlash",
        "Piggybank",
        "Pill",
        "Plant",
        "Plus",
        "PlusCircle",
        "QrCode",
        "RadioButtonEmpty",
        "Receipt",
        "Rows",
        "Scan",
        "Scroll",
        "Search",
        "Settings",
        "Share",
        "Shield",
        "ShieldCheck",
        "ShieldPlus",
        "ShieldSlash",
        "SignOut",
        "SlidersHorizontal",
        "SortAscending",
        "SortDescending",
        "Stack",
        "Star",
        "Stethoscope",
        "Syringe",
        "Table",
        "Timer",
        "Translate",
        "Travel",
        "TrendDown",
        "TrendUp",
        "Trophy",
        "Umbrella",
        "Union",
        "Upload",
        "User",
        "UserCircle",
        "UserGroup",
        "UserList",
        "Users",
        "UserSwitch",
        "Vault",
        "Virus",
        "Wallet",
        "WarningCircle",
        "Watch",
        "Whatsapp",
        "Wheelchair",
        "YoutubeLogo",
      ],
      table: {
        type: { summary: "select" },
        defaultValue: { summary: "AddFile" },
      },
    },
    altText: {
      control: {
        type: "text",
      },
      table: {
        type: { summary: "text" },
        defaultValue: { summary: "icon" },
      },
    },
    className: {
      control: {
        type: "select",
      },
      options: Object.keys(colorLabels).map(
        (key) => `tc-${colorLabels[key]}`,
      ),
      table: {
        type: { summary: "select" },
        defaultValue: { summary: "tc-red-500" },
      },
    },
  },
};

export const Airplay = {
  args: {
    className: "tc-red-200",
    iconName: "Airplay",
    altText: "icon",
  },
};