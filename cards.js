// You can add new scenarios, but make sure that there is exactly...
// * 1 hackerCard per scenario
// * 3 playerCards per scenario

var scenarios = [
  {
    hackerCard: {
        description: "I intercepted your data while you were using an open public Wi-Fi.",
        power: 3,
    },
    playerCards: [
        {
            description: "I connected to the public Wi-Fi without using a VPN.",
            power: 1,
        },
        {
            description: "I used a VPN to encrypt my connection while using public Wi-Fi.",
            power: 4,
        },
        {
            description: "I ignored the risks and accessed sensitive information over public Wi-Fi.",
            power: 2,
        }
    ]
},
  {
    hackerCard: {
        description: "I guessed your password and gained unauthorized access to your account.",
        power: 2,
    },
    playerCards: [
        {
            description: "I use '123456' as my password for most of my accounts.",
            power: 1,
        },
        {
            description: "I have a complex password with a mix of characters and change it regularly.",
            power: 4,
        },
        {
            description: "I use the same password for multiple accounts.",
            power: 2,
        }
    ]
},
  {
    hackerCard: {
        description: "I left a malware-infected USB drive in your office, hoping someone would plug it in.",
        power: 3,
    },
    playerCards: [
        {
            description: "I found the USB drive and immediately plugged it into my computer.",
            power: 1,
        },
        {
            description: "I connected the USB drive to a separate machine to scan for malware.",
            power: 4,
        },
        {
            description: "I plugged in the USB drive without any concern.",
            power: 2,
        }
    ]
  },
  {
    hackerCard: {
        description: "I called posing as IT support and asked for your account credentials.",
        power: 3,
    },
    playerCards: [
        {
            description: "I shared my account credentials over the phone without verifying the caller.",
            power: 1,
        },
        {
            description: "I recognized the social engineering attempt and hung up.",
            power: 4,
        },
        {
            description: "I provided my credentials since the caller seemed convincing.",
            power: 2,
        }
    ]
},
  {
    hackerCard: {
        description: "I exploited a vulnerability in your outdated software to gain access to your system.",
        power: 4,
    },
    playerCards: [
        {
            description: "I don't bother updating my software; it's too time-consuming.",
            power: 1,
        },
        {
            description: "I regularly update my software to patch vulnerabilities.",
            power: 5,
        },
        {
            description: "I occasionally update my software, but I don't see the urgency.",
            power: 3,
        }
    ]
},
  {
    hackerCard: {
        description: "I sent you a link that led to a fake website designed to steal your login credentials.",
        power: 3,
    },
    playerCards: [
        {
            description: "I clicked on the link without verifying its source.",
            power: 1,
        },
        {
            description: "I hovered over the link to check the URL before clicking.",
            power: 3,
        },
        {
            description: "I clicked on the link since it promised a great deal.",
            power: 2,
        }
    ]
},
  {
    hackerCard: {
        description: "I installed keyloggers on a public computer to capture your sensitive data.",
        power: 3,
    },
    playerCards: [
        {
            description: "I often use public computers to access my accounts without any security measures.",
            power: 1,
        },
        {
            description: "I use public computers but always make sure to log out and clear browser history.",
            power: 3,
        },
        {
            description: "I avoid using public computers for any sensitive tasks.",
            power: 4,
        }
    ]
},
  {
    hackerCard: {
        description: "I tricked you into sharing your password with me under the pretext of helping you.",
        power: 2,
    },
    playerCards: [
        {
            description: "I share my passwords with friends and colleagues to help them out.",
            power: 1,
        },
        {
            description: "I only share my passwords with family members for emergencies.",
            power: 2,
        },
        {
            description: "I never share my passwords with anyone, no matter the situation.",
            power: 4,
        }
    ]
},
  {
    hackerCard: {
        description: "I stole your unencrypted laptop and gained access to sensitive files.",
        power: 3,
    },
    playerCards: [
        {
            description: "I never bother with encryption; it's too complicated.",
            power: 1,
        },
        {
            description: "I encrypt my laptop's hard drive to protect my data.",
            power: 4,
        },
        {
            description: "I thought encryption was unnecessary for my personal use.",
            power: 2,
        }
    ]
},
  {
    hackerCard: {
        description: "I tricked you into downloading a malicious app that gave me access to your device.",
        power: 3,
    },
    playerCards: [
        {
            description: "I download apps from any source without checking their legitimacy.",
            power: 1,
        },
        {
            description: "I only download apps from official app stores to avoid risks.",
            power: 4,
        },
        {
            description: "I occasionally download apps from third-party sources if they look interesting.",
            power: 2,
        }
    ]
},
  {
    hackerCard: {
        description: "I eavesdropped on your unsecured communication and gathered sensitive information.",
        power: 3,
    },
    playerCards: [
        {
            description: "I frequently discuss sensitive matters over unencrypted messaging apps.",
            power: 1,
        },
        {
            description: "I use end-to-end encrypted messaging apps for secure communication.",
            power: 5,
        },
        {
            description: "I use a mix of encrypted and unencrypted communication apps based on convenience.",
            power: 3,
        }
    ]
},
  {
    hackerCard : {
      description : "I set up a fake Wi-Fi station to steal people’s email and track them online.",
      power : 4,
    },
    playerCards : [
      {
        description : "I never use public wifi networks.",
        power : 5,
      },
      {
        description : "I browse the web, but I never do any personal business on a public wifi network.",
        power : 3,
      },
      {
        description : "I connect to any wifi network I can use in public.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent a fake email from your bank asking for your account details.",
      power : 3,
    },
    playerCards : [
      {
        description : "I checked the email address - the message didn’t come from my bank.",
        power : 5,
      },
      {
        description : "I never give out personal information in response to an email.",
        power : 4,
      },
      {
        description : "I sent the details you asked for so you could check on my account.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I figured out where you live from all the personal information you share on social media.",
      power : 3,
    },
    playerCards : [
      {
        description : "I never share personal information on my social media accounts.",
        power : 5,
      },
      {
        description : "I keep my accounts private so only my friends can see them.",
        power : 4,
      },
      {
        description : "I tag everything so my friends always know what I’m doing.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I watched you type your password and hacked your account.",
      power : 2,
    },
    playerCards : [
      {
        description : "I use different passwords for all of my other accounts.",
        power : 4,
      },
      {
        description : "I changed my password on all of my accounts because they are the same.",
        power : 2,
      },
      {
        description : "I deleted that account and started a new one. ",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I looked at your browsing history on your phone to see what you do online.",
      power : 2,
    },
    playerCards : [
      {
        description : "I always use a private browser that never keeps my history.",
        power : 4,
      },
      {
        description : "I set my browser to delete my history every time I quit. ",
        power : 3,
      },
      {
        description : "I never clear my browser history because I don’t like typing in big web addresses.",
        power : 1,
      }
    ]
  }, 

  {
    hackerCard : {
      description : "I hacked your system and all your data is deleted now.",
      power : 2,
    },
    playerCards : [
      {
        description : "I follow the 3-2-1 backup rule. I have on-site as well as off-site location (cloud storage) backup.",
        power : 4,
      },
      {
        description : "I have my data backed up in local and external hard drive.",
        power : 3,
      },
      {
        description : "I never backed up my data in any way.",
        power : 1,
      }
    ]
  }, 

  {
    hackerCard : {
      description : "I provided you my USB for content transfer.",
      power : 2,
    },
    playerCards : [
      {
        description : "I use Anti-Virus Protection & Firewall to protect my system.",
        power : 4,
      },
      {
        description : "I refused to use your USB as my system was not having Anti-Virus Protection & Firewall.",
        power : 3,
      },
      {
        description : "I used your USB as I am not afraid of my system getting corrupted.",
        power : 1,
      }
    ]
  }, 
  {
    hackerCard : {
      description : "I will crash your vulnerable system using ransomware attacks, malware and data breaches.",
      power : 2,
    },
    playerCards : [
      {
        description : "You can't because I have turnned on Automatic Updates for my operating system.",
        power : 4,
      },
      {
        description : "I use web browsers such as Chrome or Firefox that receive frequent, automatic security updates.",
        power : 3,
      },
      {
        description : "I don't update my softwares nor do I download security updates.",
        power : 1,
      }
    ]
  }
];