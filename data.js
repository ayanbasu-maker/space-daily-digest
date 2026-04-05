// Space Daily Digest — All data

const AGENCIES = [
  {
    name: "NASA",
    fullName: "National Aeronautics and Space Administration",
    country: "United States",
    flag: "🇺🇸",
    color: "#0b3d91",
    url: "https://www.nasa.gov",
    description: "Leading crewed lunar return with Artemis. Artemis II crew launched April 1, 2026."
  },
  {
    name: "SpaceX",
    fullName: "Space Exploration Technologies Corp.",
    country: "United States",
    flag: "🇺🇸",
    color: "#4a90d9",
    url: "https://www.spacex.com",
    description: "Starship V3 with Raptor 3 engines in final ground testing. Falcon 9 dominates commercial launch."
  },
  {
    name: "Blue Origin",
    fullName: "Blue Origin LLC",
    country: "United States",
    flag: "🇺🇸",
    color: "#1ab8c4",
    url: "https://www.blueorigin.com",
    description: "New Glenn operational and ramping to 12+ launches in 2026. BE-4 engines also power Vulcan Centaur."
  },
  {
    name: "ISRO",
    fullName: "Indian Space Research Organisation",
    country: "India",
    flag: "🇮🇳",
    color: "#ff6b00",
    url: "https://www.isro.gov.in",
    description: "PSLV-C62 launched Jan 2026. Gaganyaan uncrewed test imminent. Aditya-L1 solar observatory operational."
  },
  {
    name: "CNSA",
    fullName: "China National Space Administration",
    country: "China",
    flag: "🇨🇳",
    color: "#de2910",
    url: "https://www.cnsa.gov.cn/english/",
    description: "Tiangong station crews rotating. Xuntian space telescope launching Dec 2026. Long March 10 debuts in 2026."
  },
  {
    name: "ESA",
    fullName: "European Space Agency",
    country: "Europe (22 member states)",
    flag: "🇪🇺",
    color: "#d4a017",
    url: "https://www.esa.int",
    description: "Ariane 6 restoring European independent launch access. SMILE solar-wind mission launching April 9, 2026."
  },
  {
    name: "Roscosmos",
    fullName: "State Space Corporation Roscosmos",
    country: "Russia",
    flag: "🇷🇺",
    color: "#3a5fad",
    url: "https://www.roscosmos.ru",
    description: "Soyuz and Progress vehicles continue ISS crew rotation and logistics. Luna-28 sample-return mission in development."
  }
];

const DIGESTS = {

  "2026-04-05": {
    date: "April 5, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Exploration",
        headline: "Artemis II Crew Passes Earth–Moon Halfway Point, Record-Breaking Flyby Tomorrow",
        body: "On Flight Day 4, NASA's Artemis II crew aboard Orion has passed the halfway point between Earth and the Moon, with all four astronauts reporting good health and high spirits. The crew is preparing the cabin for a lunar observation period ahead of tomorrow's historic flyby. On April 6, Orion will reach approximately 252,757 miles (406,773 km) from Earth — surpassing Apollo 13's 1970 record and marking the farthest any humans have ever traveled from our planet.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-04-05T10:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Targets April 6 Falcon 9 Starlink Launch from Vandenberg",
        body: "SpaceX has set a launch window on April 6 from Space Launch Complex 4E at Vandenberg Space Force Base for its next Starlink mission, carrying 25 satellites to low-Earth orbit. The booster assigned to this mission is set for its latest reuse following a successful April 2 Starlink flight from the same site. Meanwhile, SpaceX continues ground testing of the Starship V3 Super Heavy booster ahead of a targeted Flight 12 in May 2026.",
        sourceUrl: "https://www.spacex.com",
        timestamp: "2026-04-05T08:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Commercial",
        headline: "New Glenn NG-3 Targets April 10 for AST SpaceMobile BlueBird Launch",
        body: "Blue Origin has confirmed a no-earlier-than April 10, 2026 launch date for New Glenn's third flight, carrying AST SpaceMobile's BlueBird 7 broadband satellite. This mission is a key milestone in Blue Origin's plan for four New Glenn launches in 2026 as it ramps toward full commercial cadence. The company is also aiming to attempt its first booster landing and re-flight on this mission, a milestone that would establish New Glenn as a fully reusable rocket.",
        sourceUrl: "https://www.blueorigin.com",
        timestamp: "2026-04-05T07:30:00Z"
      },
      {
        agency: "ISRO",
        category: "Mission Update",
        headline: "ISRO Forms Expert Panel to Review PSLV Anomaly as 2026 Launch Backlog Grows",
        body: "ISRO has convened a national-level expert committee to investigate the anomaly that grounded its workhorse PSLV vehicle, leaving six planned 2026 missions still awaiting launch. The setback follows a successful LVM3 M6 flight in late 2025 but has pushed back several commercial and scientific payloads. European satellite operator Eutelsat has entered negotiations with ISRO as it seeks to diversify its launch provider pool beyond SpaceX and Ariane.",
        sourceUrl: "https://www.isro.gov.in",
        timestamp: "2026-04-05T05:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission Update",
        headline: "European Service Module Powers Artemis II Flawlessly Through Translunar Coast",
        body: "ESA's European Service Module (ESM) is performing nominally aboard NASA's Orion spacecraft as Artemis II continues its journey to the Moon. The ESM, built by Airbus for ESA, provides Orion with power, propulsion, and life support — having successfully executed the translunar injection burn on April 2. ESA confirmed all ESM systems are in excellent health as the spacecraft approaches its record-setting maximum lunar distance on April 6.",
        sourceUrl: "https://www.esa.int",
        timestamp: "2026-04-05T09:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Science",
        headline: "China–ESA SMILE Satellite Clears Final Pre-Launch Checks, Four Days to Liftoff",
        body: "The joint Solar Wind Magnetosphere Ionosphere Link Explorer (SMILE) satellite, developed by China's National Space Science Center and ESA, has completed all pre-launch readiness checks at Xichang Satellite Launch Center ahead of its April 9 launch on a Long March 3B rocket. SMILE will use X-ray imaging and ultraviolet aurora cameras to study how solar wind shapes Earth's magnetosphere in real time. The mission represents one of the most significant China–Europe collaborative science projects to date.",
        sourceUrl: "https://www.cnsa.gov.cn/english/",
        timestamp: "2026-04-05T06:00:00Z"
      }
    ]
  },

  "2026-04-03": {
    date: "April 3, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Mission Update",
        headline: "Artemis II Crew Completes Translunar Injection, Heading for the Moon",
        body: "NASA's Orion spacecraft carrying commander Reid Wiseman, pilot Victor Glover, mission specialists Christina Koch and Jeremy Hansen (CSA) has completed its translunar injection burn and is now coasting toward the Moon. The crew is conducting daily health checks and testing Orion's life support systems. At 248,000 miles, they will surpass Apollo 13's distance record — the farthest humans have traveled from Earth.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-04-03T10:00:00Z",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Artemis_I_Launch_%28NHQ202211160011%29.jpg/1280px-Artemis_I_Launch_%28NHQ202211160011%29.jpg"
      },
      {
        agency: "SpaceX",
        category: "Test",
        headline: "Starship V3 Booster 19 Static Fire Test Scheduled for Next Week",
        body: "SpaceX has completed insulation and fueling system checks on Super Heavy Booster 19, the first vehicle to fly with all-new Raptor 3 engines. A full-duration static fire test is expected next week at Starbase. Flight 12, the inaugural V3 mission, remains targeted for May 2026 pending regulatory approval from the FAA.",
        sourceUrl: "https://www.spacex.com",
        timestamp: "2026-04-03T08:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Mission Update",
        headline: "New Glenn NG-3 Integration Complete, Launch Window Opens Late April",
        body: "Blue Origin confirmed that New Glenn's third flight vehicle has completed full payload integration with AST SpaceMobile's Block 2 BlueBird broadband satellite. The launch window at Complex 36, Cape Canaveral opens in late April. Blue Origin aims to land and reflght the first-stage booster for the first time on NG-3.",
        sourceUrl: "https://www.blueorigin.com",
        timestamp: "2026-04-03T07:30:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission Update",
        headline: "Shenzhou-23 Docks at Tiangong, Six Astronauts Briefly Aboard Station",
        body: "China's Shenzhou-23 crewed spacecraft docked at Tiangong's forward port, creating a brief six-person overlap with the outgoing Shenzhou-22 crew. The handover marks the smoothest crew rotation yet. Among the incoming crew is the first international guest astronaut under China's partnership program, from Pakistan.",
        sourceUrl: "https://www.cnsa.gov.cn/english/",
        timestamp: "2026-04-03T06:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Mission Update",
        headline: "Gaganyaan Uncrewed HLVM-3 G1 Test Flight Confirmed for June 2026",
        body: "ISRO chairman confirmed the Gaganyaan uncrewed orbital mission, designated HLVM-3 G1, is on track for June 2026. The flight will validate the human-rated LVM3 rocket and Crew Module in actual orbital conditions before India's first crewed spaceflight, targeted for late 2026 or early 2027.",
        sourceUrl: "https://www.isro.gov.in",
        timestamp: "2026-04-03T05:00:00Z"
      },
      {
        agency: "ESA",
        category: "Launch",
        headline: "ESA-CNSA SMILE Mission Confirmed for April 9 Launch",
        body: "The Solar Wind Magnetosphere Ionosphere Link Explorer (SMILE) joint mission between ESA and the Chinese Academy of Sciences is confirmed for launch on April 9 aboard a Long March 3B rocket from Xichang. SMILE will study the dynamic interaction between the solar wind and Earth's magnetosphere using simultaneous multi-point observations.",
        sourceUrl: "https://www.esa.int",
        timestamp: "2026-04-03T04:00:00Z"
      }
    ]
  },

  "2026-04-02": {
    date: "April 2, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Launch",
        headline: "Artemis II Crew Successfully Completes Translunar Injection Burn",
        body: "One day after the historic April 1 launch, the Orion spacecraft's European Service Module main engine fired for 18 minutes, accelerating the crew to 24,500 mph and escaping Earth's gravity well. Victor Glover — the first person of color to venture beyond low Earth orbit — called it 'the ride of my life.' The crew is now 200,000 miles from Earth and climbing.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-04-02T14:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Mission Update",
        headline: "SpaceX Falcon 9 Launches 23 Starlink v2 Mini Satellites from Vandenberg",
        body: "A SpaceX Falcon 9 lifted off from Vandenberg Space Force Base on its 25th flight, deploying 23 Starlink v2 Mini satellites to a 530 km polar orbit. The booster nailed its landing on the droneship 'Of Course I Still Love You.' This brings the Starlink constellation to over 6,800 active satellites providing global broadband coverage.",
        sourceUrl: "https://www.spacex.com",
        timestamp: "2026-04-02T10:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Science",
        headline: "China Reveals Xuntian Telescope Science Instrument Calibration Complete",
        body: "CNSA announced that all science instruments aboard the Xuntian (Chinese Space Station Telescope) have completed calibration ahead of its December 2026 launch. Xuntian features a 2-meter primary mirror and will survey 40% of the sky in optical and near-ultraviolet wavelengths — its field of view is 300 times wider than Hubble's.",
        sourceUrl: "https://www.cnsa.gov.cn/english/",
        timestamp: "2026-04-02T06:00:00Z"
      }
    ]
  },

  "2026-04-01": {
    date: "April 1, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Launch",
        headline: "LAUNCH: Artemis II Lifts Off — Humans Bound for the Moon for First Time in 54 Years",
        body: "At 6:35 PM EDT, NASA's SLS Block 1 rocket ignited its RS-25 engines and twin solid rocket boosters, carrying the Orion spacecraft and four astronauts off Pad 39B at Kennedy Space Center. This is the first crewed mission beyond Earth orbit since Apollo 17 in 1972. Commander Reid Wiseman, pilot Victor Glover, mission specialist Christina Koch, and CSA astronaut Jeremy Hansen are now in Earth orbit awaiting the translunar injection burn.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-04-01T22:35:00Z",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Artemis_I_Launch_%28NHQ202211160011%29.jpg/1280px-Artemis_I_Launch_%28NHQ202211160011%29.jpg"
      },
      {
        agency: "NASA",
        category: "Mission Update",
        headline: "Artemis II: Historic Firsts — Glover, Koch, Hansen All Break Barriers",
        body: "Victor Glover becomes the first person of African American heritage to travel beyond low Earth orbit. Christina Koch becomes the first woman to travel to the Moon's vicinity. Canadian Jeremy Hansen becomes the first non-American to leave Earth's gravitational sphere of influence. Commander Reid Wiseman, at 52, is also the oldest person to venture beyond LEO.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-04-01T23:00:00Z"
      },
      {
        agency: "NASA",
        category: "Mission Update",
        headline: "Orion Orbital Checks Complete — All Systems Nominal for TLI",
        body: "After two orbits of Earth, flight controllers at Mission Control Houston confirmed all Orion spacecraft systems — life support, power, navigation, communication — are performing nominally. The crew conducted a full systems checkout and consumed their first meal aboard. The translunar injection burn is scheduled for approximately T+7 hours.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-04-02T01:00:00Z"
      }
    ]
  },

  "2026-03-28": {
    date: "March 28, 2026",
    stories: [
      {
        agency: "CNSA",
        category: "Science",
        headline: "China's Xuntian Telescope Arrives at Launch Site, Integration Begins",
        body: "The Xuntian optical space telescope — China's equivalent of a next-generation Hubble — arrived at Wenchang Space Launch Site for pre-launch integration with its Long March 5B rocket. Xuntian will operate in a similar orbit to Tiangong station, enabling servicing missions. It has a 2-meter primary mirror with a field of view 300 times wider than Hubble.",
        sourceUrl: "https://www.cnsa.gov.cn/english/",
        timestamp: "2026-03-28T09:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Mission Update",
        headline: "Blue Origin Confirms 12-Launch Target for New Glenn in 2026",
        body: "Blue Origin CEO Dave Limp confirmed at the Satellite 2026 conference that New Glenn is on track for at least 12 launches this year, with ambitions to reach 24 if production ramping continues. Three additional second stages are currently in final integration. Project Sunrise, Blue Origin's orbital data center megaconstellation, is slated to begin test deployments in 2027.",
        sourceUrl: "https://www.blueorigin.com",
        timestamp: "2026-03-28T11:00:00Z"
      }
    ]
  },

  "2026-03-22": {
    date: "March 22, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Mission Update",
        headline: "Starship V3 Flight 12 Delayed to May — Raptor 3 Engine Certification Takes Longer",
        body: "SpaceX CEO Elon Musk posted that Starship Flight 12, the first V3 configuration test, has slipped approximately 4–6 weeks from the previously targeted April timeframe. The delay is due to additional certification testing on the Raptor 3 engine's updated turbopump assembly. Once certified, Raptor 3 will deliver higher thrust with significantly fewer external components than Raptor 2.",
        sourceUrl: "https://www.spacex.com",
        timestamp: "2026-03-22T15:00:00Z"
      },
      {
        agency: "NASA",
        category: "Mission Update",
        headline: "Artemis II Launch Countdown Rehearsal Completed Successfully",
        body: "NASA conducted a full Terminal Countdown Demonstration Test (TCDT) at Pad 39B, simulating all launch day activities up to main engine ignition. The four Artemis II crew members participated and completed final emergency egress training. All critical systems performed to specifications. The official launch date of April 1, 2026 remains confirmed.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-03-22T18:00:00Z"
      }
    ]
  },

  "2026-03-15": {
    date: "March 15, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Mission Update",
        headline: "SLS Artemis II Rolls Out to Pad 39B for Final Launch Preparations",
        body: "NASA's Space Launch System for the Artemis II mission completed the 4-mile crawler transport from the Vehicle Assembly Building to Launch Pad 39B at Kennedy Space Center. The 322-foot-tall rocket and Orion spacecraft stack took approximately 10 hours to traverse. Pre-launch propellant loading tests and final flight software uploads are now underway.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-03-15T12:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Mission Update",
        headline: "ISRO Completes Crew Module Qualification for Gaganyaan",
        body: "ISRO's Human Space Flight Centre announced successful completion of all qualification tests for the Gaganyaan Crew Module, including structural load tests, thermal vacuum testing, and parachute deployment validation. The module's water recovery rehearsal with the Indian Navy was also completed off the Andaman coast. Crew Module is now cleared for flight.",
        sourceUrl: "https://www.isro.gov.in",
        timestamp: "2026-03-15T08:00:00Z"
      }
    ]
  },

  "2026-03-05": {
    date: "March 5, 2026",
    stories: [
      {
        agency: "CNSA",
        category: "Mission Update",
        headline: "Shenzhou-22 Crew Completes 6-Month Tour, Shenzhou-23 Handover Begins",
        body: "China's Shenzhou-22 crew — Commander Tang Hongbo, Wang Jie, and Ye Guangfu — completed a 183-day mission aboard Tiangong space station, handing over to the Shenzhou-23 crew. Tang Hongbo set a new Chinese duration record. The crew conducted 4 spacewalks, deployed CubeSats, and completed materials science experiments critical for the planned Xuntian telescope servicing mission.",
        sourceUrl: "https://www.cnsa.gov.cn/english/",
        timestamp: "2026-03-05T10:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Launches Dragon Crew-11 to ISS, Four New Residents Aboard",
        body: "SpaceX Dragon spacecraft Resilience launched from Pad 39A carrying NASA astronauts Zena Cardman (commander), Mike Barratt, Stephanie Wilson, and JAXA astronaut Takuya Onishi to the International Space Station. This is Falcon 9 booster B1085's seventh flight. Dragon docked autonomously to the Harmony port 19 hours after launch.",
        sourceUrl: "https://www.spacex.com",
        timestamp: "2026-03-05T14:00:00Z"
      }
    ]
  },

  "2026-02-14": {
    date: "February 14, 2026",
    stories: [
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "New Glenn NG-2 Successfully Deploys AST SpaceMobile Block 2 Satellite",
        body: "Blue Origin's New Glenn launched from Cape Canaveral's LC-36 at 2:04 AM EST, deploying AST SpaceMobile's first Block 2 BlueBird satellite — a 1,500 kg direct-to-smartphone broadband satellite — into a 720 km orbit. The first stage booster attempted its third ocean landing but experienced an anomaly during the final descent burn. Payload delivery was fully successful.",
        sourceUrl: "https://www.blueorigin.com",
        timestamp: "2026-02-14T07:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "James Webb Space Telescope Captures Earliest Galaxy Cluster Ever Observed",
        body: "NASA's JWST revealed a galaxy cluster dating to just 460 million years after the Big Bang — the earliest such structure ever observed. The discovery, published in Nature Astronomy, challenges existing models of early large-scale structure formation and suggests galaxies clustered more rapidly in the early Universe than simulations predicted.",
        sourceUrl: "https://www.nasa.gov",
        timestamp: "2026-02-14T16:00:00Z"
      }
    ]
  },

  "2026-02-01": {
    date: "February 1, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Test",
        headline: "SpaceX Fires Raptor 3 Engine for First Time — Marks Major Starship V3 Milestone",
        body: "SpaceX completed the first full-duration static fire test of the new Raptor 3 engine at the McGregor test facility in Texas. Raptor 3 produces approximately 280 tonnes of thrust with a dramatically simplified external design — removing nearly all external plumbing visible on Raptor 2. SpaceX says the engine is cheaper to manufacture and easier to inspect between flights.",
        sourceUrl: "https://www.spacex.com",
        timestamp: "2026-02-01T20:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission Update",
        headline: "Long March 10 First Stage Static Fire Test Completed at Wenchang",
        body: "China's Long March 10 rocket, designed to carry the Mengzhou crewed spacecraft to the Moon, completed its first integrated propulsion test at Wenchang Satellite Launch Center. CZ-10 uses a cluster of nine YF-100K kerosene engines on its first stage. The rocket is planned to debut in late 2026 with an uncrewed lunar trajectory demonstration.",
        sourceUrl: "https://www.cnsa.gov.cn/english/",
        timestamp: "2026-02-01T10:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission Update",
        headline: "Ariane 6 Clears Return-to-Flight Review, Commercial Manifest Builds",
        body: "ESA's Ariane 6 program has secured eight commercial launch contracts following last year's return-to-flight missions, restoring European autonomous launch access for the first time since Ariane 5's retirement. ArianeGroup confirmed the upper stage anomaly from the 2023 qualification flight has been fully corrected with a redesigned venting system.",
        sourceUrl: "https://www.esa.int",
        timestamp: "2026-02-01T12:00:00Z"
      }
    ]
  },

  "2026-01-20": {
    date: "January 20, 2026",
    stories: [
      {
        agency: "ISRO",
        category: "Science",
        headline: "Aditya-L1 Solar Observatory Delivers First Full Year of Solar Wind Data",
        body: "India's Aditya-L1 mission, stationed at the Sun-Earth L1 Lagrange point, completed its first full year of solar observation. The Solar Wind Particle Experiment (SWIPE) and Magnetometer instruments have generated over 400 GB of solar wind data, revealing new patterns in coronal mass ejection propagation. Data products are now publicly available to the international solar physics community.",
        sourceUrl: "https://www.isro.gov.in",
        timestamp: "2026-01-20T11:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "Perseverance Rover Collects 24th Mars Sample — Science Cache Nearly Full",
        body: "NASA's Perseverance rover collected its 24th Martian rock core sample from the Jezero crater delta, bringing the primary science cache to near capacity. These samples await retrieval by the joint NASA-ESA Mars Sample Return mission. The collected material includes sedimentary rocks from an ancient lakebed that may contain biosignatures — evidence of past microbial life.",
        sourceUrl: "https://www.nasa.gov",
        timestamp: "2026-01-20T14:00:00Z"
      }
    ]
  },

  "2026-01-12": {
    date: "January 12, 2026",
    stories: [
      {
        agency: "ISRO",
        category: "Launch",
        headline: "PSLV-C62 Successfully Launches EOS-N1 Hyperspectral Satellite and 18 Co-Passengers",
        body: "ISRO's Polar Satellite Launch Vehicle lifted off from Satish Dhawan Space Centre at 9:00 AM IST carrying the EOS-N1 (Anvesha) hyperspectral Earth observation satellite along with 18 commercial co-passenger smallsats. EOS-N1 will map vegetation health, mineral composition, and water quality with 30-meter resolution across 55 spectral bands. This was PSLV's 63rd mission with a 95% success rate.",
        sourceUrl: "https://www.isro.gov.in",
        timestamp: "2026-01-12T03:30:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon 9 Completes 50th Mission of 2025 on Final Day of Year, Booster Lands 20th Time",
        body: "SpaceX closed 2025 with its 50th Falcon 9 launch of the year, surpassing the previous annual record. Booster B1067 completed its 20th launch and landing — the most reuses of any orbital rocket in history. The launch carried 23 Starlink V2 Mini satellites. SpaceX has now recovered all but three of over 200 Falcon 9 first stages ever flown.",
        sourceUrl: "https://www.spacex.com",
        timestamp: "2026-01-12T08:00:00Z"
      }
    ]
  }

};

// Make available globally
window.AGENCIES = AGENCIES;
window.DIGESTS = DIGESTS;
