import workIcon from "./assets/images/icon-work.svg"
import playIcon from "./assets/images/icon-play.svg"
import studyIcon from "./assets/images/icon-study.svg"
import exerciseIcon from "./assets/images/icon-exercise.svg"
import socialIcon from "./assets/images/icon-social.svg"
import selfCareIcon from "./assets/images/icon-self-care.svg"
import dotsIcon from "./assets/images/icon-ellipsis.svg"
import Card from "./components/Card"
 
 const data = [
  {
    id:1,
    "icon":workIcon,
    "dots":dotsIcon,
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    id:2,
    "icon":playIcon,
    "dots":dotsIcon,
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    id:3,
    "icon":studyIcon,
    "dots":dotsIcon,
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    id:4,
    "icon":exerciseIcon,
    "dots":dotsIcon,
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    id:5,
    "icon":socialIcon,
    "dots":dotsIcon,
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    id:6,
    "icon":selfCareIcon,
    "dots":dotsIcon,
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]
export default data;