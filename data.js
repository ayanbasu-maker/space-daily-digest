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

  "2026-04-16": {
    date: "April 16, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Human Spaceflight",
        headline: "Artemis II Crew Holds First Postflight Press Conference at JSC, Calls Moon Voyage 'The Most Special Thing That Will Ever Happen in My Life'",
        body: "The four Artemis II astronauts — commander Reid Wiseman, pilot Victor Glover, mission specialist Christina Koch, and CSA astronaut Jeremy Hansen — held their first postflight news conference at 2:30 p.m. EDT at NASA's Johnson Space Center in Houston, publicly reflecting for the first time on their historic nearly 10-day mission that sent humans to the Moon's vicinity for the first time since Apollo 17 in 1972. The crew discussed achieving the mission's primary objectives, including successfully testing Orion's life-support systems, manually piloting the spacecraft, executing trajectory maneuvers, and capturing unprecedented imagery of the Moon's far side during the record-setting 252,756-mile flyby. One crew member described the experience as 'the most special thing that will ever happen in my life,' and the quartet spoke candidly about the emotional weight of looking back at Earth from deep space. NASA confirmed the press conference was livestreamed on NASA+ and that the crew has cleared all post-flight medical evaluations following their April 10 splashdown off San Diego.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-to-host-artemis-ii-crew-postflight-news-conference/",
        timestamp: "2026-04-16T18:30:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon 9 Keeps Up Relentless 2026 Cadence with Starlink Mission from Kennedy Space Center as Back-to-Back Launches Bookend the Week",
        body: "SpaceX conducted another Starlink satellite deployment from Launch Complex 39A at Kennedy Space Center on April 16, extending the company's extraordinary 2026 launch tempo that saw two Falcon 9 missions fly from both US coasts just 19 hours apart earlier this week. The April 14 and April 15 missions delivered a combined 54 satellites and pushed SpaceX's 2026 total well past 1,000 Starlink satellites — a benchmark the company crossed for the first time in under 105 days. The back-to-back pace underscores SpaceX's goal of continuous Starlink constellation expansion as it closes remaining polar and mid-latitude coverage gaps and works toward full global service availability for maritime and aviation customers requiring the highest-tier performance tiers.",
        sourceUrl: "https://spaceflightnow.com/launch-schedule/",
        timestamp: "2026-04-16T12:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "New Glenn NG-3 Slips One Final Day to April 17 as FAA Lists 6:45 a.m. EDT Opening for Historic Booster Reuse Attempt",
        body: "Blue Origin confirmed a no-earlier-than April 17 liftoff for New Glenn NG-3, after an additional day of vehicle reviews nudged the mission past its April 16 target at Space Launch Complex 36 at Cape Canaveral; the FAA listed a two-hour window opening at 6:45 a.m. EDT extending to 12:19 p.m. EDT. The mission carries AST SpaceMobile's BlueBird 7 Block 2 broadband satellite — featuring a 2,400-square-foot communications array with ten times the bandwidth of Block 1 and peak speeds up to 120 Mbps — and, critically, will attempt the first-ever reflown New Glenn first-stage booster, reusing 'Never Tell Me The Odds' that landed successfully after the November 2025 ESCAPADE mission. A successful launch and second booster recovery would validate New Glenn's full reusability business model and accelerate Blue Origin's path to its goal of 12 or more flights in 2026.",
        sourceUrl: "https://aviationweek.com/space/operations-safety/blue-origin-targeting-april-16-new-glenn-flight-3",
        timestamp: "2026-04-16T14:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA Opens Cannes Clean Room for Last Public View of FLEX, Sentinel-3C, and MTG-I2 Before Shipment to Launch Sites",
        body: "The European Space Agency hosted a media clean room inspection at Thales Alenia Space facilities in Cannes today, offering the final opportunity to see three major upcoming Earth-observation satellites — the Fluorescence Explorer (FLEX), Sentinel-3C, and Meteosat Third Generation Imager-2 (MTG-I2) — before each spacecraft is shipped to its respective launch site in the coming weeks. FLEX, developed under ESA's Earth Explorer programme and designed to fly in tandem with Sentinel-3, will be the world's first satellite dedicated to globally mapping chlorophyll fluorescence from orbit, providing vital data on photosynthesis rates, crop health, and the terrestrial carbon cycle that scientists say is critical for both climate models and food-security monitoring. MTG-I2 continues Europe's next-generation geostationary weather observing system, while Sentinel-3C extends the Copernicus ocean and land monitoring constellation; together the three missions represent the next wave of European Earth science capability for the decade ahead.",
        sourceUrl: "https://www.esa.int/About_Us/Corporate_news/ESA_s_highlights_for_2026",
        timestamp: "2026-04-16T10:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Human Spaceflight",
        headline: "Shenzhou-23 Crew Rotation Enters Final Integration Phase as CMSA Confirms Year-Long Stay for One Taikonaut",
        body: "China Manned Space Agency confirmed that Shenzhou-23 has entered its final vehicle integration and crew readiness phase ahead of a late-April launch to Tiangong, which will relieve the outgoing Shenzhou-21 crew of taikonauts Zhang Lu, Wu Fei, and Zhang Hongzhang after their six-month expedition. CMSA also confirmed that one member of the Shenzhou-23 crew is designated for a full year-long stay aboard the station — the first such extended tour in the Chinese program — to provide continuity between Shenzhou-23 and the Shenzhou-24 mission planned for October 2026, which is expected to carry a Pakistani payload specialist as part of China's expanding international collaboration programme. The Tiangong station continues to operate with full crew productivity, with ongoing experiments in space medicine, brain network dynamics, microgravity combustion science, and materials research.",
        sourceUrl: "https://en.cmse.gov.cn/",
        timestamp: "2026-04-16T06:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Human Spaceflight",
        headline: "ISRO Formally Schedules Gaganyaan-1 Uncrewed Orbital Demo for Second Half of 2026 as Agency Joint Heliophysics Workshop Opens with ESA",
        body: "ISRO officially confirmed that Gaganyaan-1 — the first uncrewed orbital demonstration of India's human spaceflight programme, carrying the Vyommitra half-humanoid robot — is scheduled for the second half of 2026, with the crewed mission now targeting 2027 following additional schedule refinements. The announcement comes after recent key milestones including the successful second Integrated Air Drop Test of the Gaganyaan crew module parachute recovery system on April 10 and earlier qualification of the CE20 cryogenic engine for the human-rated LVM3 rocket. Separately, ISRO opened a joint heliophysics workshop with the European Space Agency today to coordinate science from the Aditya-L1 solar observatory, ESA's Solar Orbiter, and Proba-3 formation-flying coronagraph, deepening a collaboration that both agencies say will accelerate understanding of space weather phenomena affecting satellite operations and crewed missions.",
        sourceUrl: "https://www.isro.gov.in/Gaganyaan.html",
        timestamp: "2026-04-16T08:00:00Z"
      }
    ]
  },

  "2026-04-15": {
    date: "April 15, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Human Spaceflight",
        headline: "Artemis II Crew Gears Up for April 16 Postflight Press Conference as 'Earthset' Photo Draws Global Attention",
        body: "The four Artemis II astronauts — commander Reid Wiseman, pilot Victor Glover, mission specialist Christina Koch, and CSA astronaut Jeremy Hansen — are set to hold their first postflight news conference at 2:30 p.m. EDT tomorrow, April 16, at NASA's Johnson Space Center in Houston, where they will publicly reflect on the historic nearly 10-day lunar mission that returned humans to the Moon's vicinity for the first time since Apollo 17. Meanwhile, a striking 'Earthset' photograph captured by the crew during their lunar flyby is drawing widespread comparisons to NASA's iconic 1968 'Earthrise' image, with planetary scientists noting the newer shot's sharper resolution and the emotional resonance of seeing Earth sink below the lunar horizon from a crewed spacecraft. The Orion capsule splashed down off San Diego on April 10 after setting a new record for the farthest human distance from Earth at 252,756 miles, and all four astronauts have cleared initial post-flight medical evaluations.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-to-host-artemis-ii-crew-postflight-news-conference/",
        timestamp: "2026-04-15T12:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Completes Back-to-Back Falcon 9 Launches 19 Hours Apart, Deploying 54 Starlink Satellites from Both Coasts",
        body: "SpaceX capped a busy 24-hour period by launching Falcon 9 on the Starlink 17-27 mission from Vandenberg Space Force Base at 9:29:49 p.m. PDT Tuesday (04:29 UTC Wednesday), deploying 25 V2 Mini Optimized Starlink satellites into polar low Earth orbit and marking the company's 47th Falcon family launch of 2026. The West Coast liftoff came just 19 hours after Monday morning's Starlink 10-24 mission from Cape Canaveral delivered 29 satellites and pushed SpaceX's 2026 Starlink tally past 1,000 — a feat accomplished in fewer than 105 days. Booster B1082 executed a successful return landing on drone ship 'Of Course I Still Love You' in the Pacific, extending SpaceX's consecutive landing streak and demonstrating the operational tempo the company says is essential for closing remaining gaps in Starlink's global coverage.",
        sourceUrl: "https://spaceflightnow.com/2026/04/15/west-coast-spacex-falcon-9-mission-to-launch-25-starlink-satellites/",
        timestamp: "2026-04-15T04:30:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "New Glenn NG-3 Targeting April 17 Launch Window as 'Never Tell Me The Odds' Prepares for Historic First Booster Reuse",
        body: "Blue Origin confirmed a no-earlier-than April 17 launch target for New Glenn NG-3 from Space Launch Complex 36 at Cape Canaveral, with a two-hour window opening at 6:45 a.m. EDT, following final vehicle reviews that extended the slip from the previously planned April 15 date. The mission will attempt the first-ever reuse of a New Glenn first-stage booster — 'Never Tell Me The Odds,' which successfully landed after the November 2025 ESCAPADE mission — a milestone that would validate the rocket's economic model and accelerate Blue Origin's goal of 12 or more New Glenn launches in 2026. Payload BlueBird 7, an AST SpaceMobile Block 2 broadband satellite with a 2,400-square-foot communications array, will be placed into low Earth orbit to expand the company's direct-to-smartphone service.",
        sourceUrl: "https://spacecoastdaily.com/2026/04/blue-origins-new-glenn-3-set-to-launch-ast-spacemobile-satellite-friday-morning/",
        timestamp: "2026-04-15T14:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Human Spaceflight",
        headline: "ISRO Confirms IADT-02 Parachute Recovery Test a Full Success as Agency Announces Joint ESA Heliophysics Workshop",
        body: "ISRO released its full technical assessment of the April 10 second Integrated Air Drop Test (IADT-02) for the Gaganyaan programme, confirming that a 5.7-tonne simulated crew module released from an IAF Chinook helicopter deployed all 10 parachutes in the correct sequence and descended to a safe splashdown velocity — the highest-fidelity crew recovery simulation conducted to date, matching the mass profile of the first uncrewed orbital flight. The agency also announced a joint workshop with the European Space Agency focusing on coordinated heliophysics science using data from the Aditya-L1 solar observatory, ESA's Solar Orbiter, and ESA's Proba-3 formation-flying coronagraph mission, underlining the growing partnership between India's and Europe's space science communities. ISRO said remaining Gaganyaan milestones ahead of the uncrewed orbital demonstration include completing abort system qualification and crew module propulsion verification.",
        sourceUrl: "https://www.isro.gov.in/ISRO_conducts_Second_Integrated_Air_Drop_Test_for_Gaganyaan.html",
        timestamp: "2026-04-15T08:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA Schedules Cannes Clean Room Preview for FLEX, Sentinel-3C, and MTG-I2 Ahead of Shipments as SMILE Window Tightens",
        body: "The European Space Agency has organised a media clean room inspection for tomorrow, April 16, at Airbus facilities in Cannes, where journalists will get a rare look at three upcoming Earth-observation spacecraft — the Fluorescence Explorer (FLEX), Sentinel-3C, and Meteosat Third Generation Imager-2 — before each vehicle is shipped to its respective launch site in coming weeks. FLEX, the world's first satellite designed to globally map vegetation fluorescence, will deliver critical data on photosynthesis rates and terrestrial carbon cycling as part of ESA's Earth Explorer programme; Sentinel-3C continues the Copernicus ocean and land monitoring constellation; and MTG-I2 is the second imaging satellite in Europe's next-generation geostationary weather system. Meanwhile, the Vega-C VV29 rocket carrying the joint ESA–CAS SMILE solar-wind mission remains grounded by a component production-line anomaly, with the available launch window closing May 7 and a new date still to be determined.",
        sourceUrl: "https://www.esa.int/About_Us/Corporate_news/ESA_s_highlights_for_2026",
        timestamp: "2026-04-15T10:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Human Spaceflight",
        headline: "Tiangong Station Sustains Full Crew Operations as Shenzhou-23 Launch Preparations Enter Final Phase",
        body: "China's Tiangong space station continues around-the-clock operations with the Shenzhou-21 crew — taikonauts Zhang Lu, Wu Fei, and Zhang Hongzhang — conducting experiments in biology, fluid physics, and materials science in preparation for handover to the incoming Shenzhou-23 crew, whose late-April launch is now entering final vehicle integration checks. CMSA confirmed that development of major Shenzhou-23 flight products is on schedule and that one crew member is designated for a full-year long-duration stay aboard Tiangong to bridge toward the Shenzhou-24 mission later in 2026, which is expected to carry a Pakistani payload specialist as part of China's expanding international collaboration programme. Progress on the Long March-10 heavy launcher and the Mengzhou crewed lunar spacecraft — key elements of China's plan to land taikonauts on the Moon before 2030 — was described as advancing smoothly following a series of major ground tests.",
        sourceUrl: "https://www.globaltimes.cn/page/202602/1355831.shtml",
        timestamp: "2026-04-15T06:00:00Z"
      }
    ]
  },

  "2026-04-14": {
    date: "April 14, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Human Spaceflight",
        headline: "Artemis II Crew Postflight News Conference Set for April 16 at JSC as Wiseman, Glover, Koch, and Hansen Decompress in Houston",
        body: "NASA has announced that the four Artemis II astronauts — commander Reid Wiseman, pilot Victor Glover, and mission specialists Christina Koch and Jeremy Hansen — will hold a postflight news conference at 2:30 p.m. EDT Thursday, April 16, at Johnson Space Center in Houston, offering the crew's first public reflections on their historic lunar journey. The crew launched April 1 aboard Orion atop the Space Launch System, flew around the Moon, and splashed down off San Diego on April 10 after a nearly 10-day mission that set a new record for the farthest human journey from Earth at 252,756 miles — the farthest humans have traveled from Earth since Apollo 17 in 1972. Mission objectives included testing Orion's life-support systems, manual piloting exercises, and unprecedented views of the lunar far side before the vehicle's safe re-entry and recovery. The crew returned to Houston on April 11 and has since completed initial post-flight medical evaluations.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-to-host-artemis-ii-crew-postflight-news-conference/",
        timestamp: "2026-04-14T14:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Crosses 1,000 Starlink Satellites Launched in 2026 with Early-Morning Falcon 9 Mission from Cape Canaveral",
        body: "A SpaceX Falcon 9 lifted off at 5:33 a.m. EDT Tuesday from Cape Canaveral Space Force Station on the Starlink 10-24 mission, deploying 29 broadband satellites and pushing SpaceX's 2026 Starlink launch tally past 1,000 satellites in just over three months — a pace of roughly one Falcon 9 mission every 2.3 days. Booster B1080, flying its 21st flight, executed a routine landing on drone ship 'Just Read the Instructions' in the Atlantic Ocean, marking the 598th booster recovery in SpaceX history. The milestone follows SpaceX surpassing 10,000 simultaneous active Starlink satellites in orbit on March 17; the constellation now stands at more than 10,168 operational satellites serving over 10 million customers worldwide at median download speeds around 170 Mbps.",
        sourceUrl: "https://spaceflightnow.com/2026/04/14/live-coverage-spacex-to-launch-1000th-starlink-satellite-of-2026-on-falcon-9-rocket-from-cape-canaveral/",
        timestamp: "2026-04-14T09:33:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "New Glenn NG-3 Slips to NET April 17 After Additional Vehicle Reviews; 'Never Tell Me The Odds' Stands Ready for Historic Booster Reuse",
        body: "Blue Origin has moved the New Glenn NG-3 launch window to no earlier than April 17, a two-day slip from the previously targeted April 15 date driven by additional vehicle checks after the rocket completed a successful 7-engine static fire and rolled to Space Launch Complex 36 at Cape Canaveral. The flight will mark the first-ever reuse of a New Glenn first-stage booster, reflying 'Never Tell Me The Odds' — which successfully landed after delivering NASA's ESCAPADE Mars probes in November 2025 — setting up a potential second consecutive booster landing. Payload BlueBird 7, a next-generation Block 2 broadband satellite for AST SpaceMobile featuring a 2,400-square-foot communications array and peak speeds up to 120 Mbps, will be placed into low Earth orbit to support direct-to-smartphone coverage.",
        sourceUrl: "https://www.nextbigfuture.com/2026/04/third-blue-origin-new-glenn-launch-delayed-until-april-17-2026.html",
        timestamp: "2026-04-14T16:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Human Spaceflight",
        headline: "Shenzhou-23 Launch Approaches as Tiangong's Shenzhou-21 Taikonauts Complete Final Biomedical Research Sessions",
        body: "China's Shenzhou-21 crew — taikonauts Zhang Lu, Wu Fei, and Zhang Hongzhang — are completing their final weeks of experiments aboard Tiangong, including Raman spectrometry analysis of urine metabolites and blood sample collections for bone metabolism studies, ahead of their imminent return to Earth. CNSA is finalizing preparations for the Shenzhou-23 spacecraft, whose late-April launch will be the 11th crewed mission to Tiangong and will include one crew member planned for a full-year stay aboard the station. The extended stay is designed to bridge the Shenzhou-24 mission, which is expected to carry a Pakistani guest astronaut to Tiangong in October 2026 as part of China's international collaboration programme.",
        sourceUrl: "https://www.china-in-space.com/p/shenzhou-21-crew-begin-last-month",
        timestamp: "2026-04-14T06:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA Opens Cannes Clean Room for FLEX, Sentinel-3C, and MTG-I2 Pre-Shipment Preview on April 16 as SMILE Window Narrows",
        body: "The European Space Agency will host a media clean room inspection on April 16 at Airbus facilities in Cannes for three upcoming Earth-observation spacecraft — the Fluorescence Explorer (FLEX), Sentinel-3C, and Meteosat Third Generation Imager-2 — before each is shipped to its respective launch site in the coming weeks. FLEX will be the world's first satellite dedicated to globally mapping vegetation fluorescence from orbit, providing critical data on photosynthesis rates, crop productivity, and the terrestrial carbon cycle as part of ESA's Earth Explorer programme. Meanwhile, the Vega-C VV29 launch carrying the joint ESA–Chinese Academy of Sciences SMILE solar wind magnetosphere mission remains postponed following a component production-line anomaly discovered post-integration, with the available launch window closing May 7.",
        sourceUrl: "https://www.esa.int/About_Us/Corporate_news/ESA_s_highlights_for_2026",
        timestamp: "2026-04-14T10:00:00Z"
      }
    ]
  },

  "2026-04-13": {
    date: "April 13, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Cargo",
        headline: "Cygnus NG-24 S.S. Steven R. Nagel Berthed at ISS, Delivering Record 11,000-Pound Cargo Load to Expedition 74",
        body: "Astronaut Jack Hathaway used Canadarm2 to grapple Northrop Grumman's Cygnus XL cargo spacecraft at 12:50 p.m. EDT Monday, completing the ISS rendezvous two days after its April 11 Falcon 9 launch, while Mission Specialist Chris Williams monitored the approach. Flight controllers then directed the S.S. Steven R. Nagel to its berth at the Unity module's Earth-facing common berthing port, securing the largest cargo load ever flown on a Cygnus — more than 11,000 pounds, including 1,075 kg of science experiments spanning biology, fluid physics, and materials research. The spacecraft will remain attached to the station for approximately six months to support Expedition 74 research operations before departing for a destructive reentry.",
        sourceUrl: "https://spacepolicyonline.com/events/northrop-grummans-cygnus-24-arrives-at-iss-apr-13-2026-earth-orbit-1250-pm-et-nasa-coverage-begins-1200-pm-et/",
        timestamp: "2026-04-13T16:50:00Z"
      },
      {
        agency: "SpaceX",
        category: "Development",
        headline: "Starship Flight 12 Slips to May as FAA Probe Continues and Full 33-Engine Static Fire Remains Pending",
        body: "SpaceX's Starship IFT-12 has slipped from a late-April target to early May, driven by an ongoing FAA mishap investigation following a Flight 11 anomaly and a rapid unscheduled disassembly of a Starship component at Starbase on April 6. The debut V3 configuration featuring upgraded Raptor 3 engines makes IFT-12 the most significant iteration yet, and a full 33-engine static fire of Super Heavy Booster 19 — whose 10-engine test in March ended early on a ground-side issue — remains the final major pre-flight milestone. SpaceX continues parallel testing of Booster 19 and Ship 39 while working with the FAA toward a new confirmed flight date.",
        sourceUrl: "https://www.basenor.com/blogs/news/starship-ift-12-delayed-to-may-what-the-v3-upgrade-means",
        timestamp: "2026-04-13T14:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "New Glenn NG-3 Completes Successful 7-Engine Hotfire at SLC-36, Clearing Path to April 16 Liftoff",
        body: "Blue Origin confirmed a successful static fire of its fully integrated New Glenn NG-3 vehicle at Space Launch Complex 36, Cape Canaveral, with all seven BE-4 engines performing nominally during a 38-second test that included 22 seconds at full 100-percent thrust. The hotfire clears the final major ground verification milestone before the rocket's planned April 16 launch carrying AST SpaceMobile's BlueBird 7 broadband satellite — the Block 2 design with a 2,400-square-foot communications array and peak speeds up to 120 Mbps. NG-3 will also mark the first-ever reflight of a New Glenn first-stage booster, with 'Never Tell Me The Odds' — which landed after the November 2025 ESCAPADE mission — set to make history again pending a clean vehicle review and favorable weather.",
        sourceUrl: "https://www.blueorigin.com/news/new-glenn-completes-integrated-launch-vehicle-hotfire",
        timestamp: "2026-04-13T18:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Education",
        headline: "ISRO Publishes YUVIKA 2026 First Selection List, Opening Space Science Residency for India's Top Class 9 Students",
        body: "The Indian Space Research Organisation released the first selection list for its YUVIKA (YUva VIgyani KAryakram) 2026 programme on April 13, identifying Class 9 students from across India who will attend a fully-funded two-week residential workshop in space technology, satellite applications, and rocketry at ISRO national facilities. A second confirmation list will follow on April 20 to fill any remaining vacancies, with residential sessions expected to run through the summer. ISRO's educational outreach push accompanies intensifying preparations for the Gaganyaan programme — whose uncrewed orbital demonstration launch date announcement is described as imminent — as the agency seeks to inspire the next generation of Indian space scientists.",
        sourceUrl: "https://www.isro.gov.in/media_isro/pdf/YUVIKA_2026_Selection_List_Publication.pdf",
        timestamp: "2026-04-13T06:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA-CAS SMILE Solar Wind Mission Launch Remains Postponed After Vega-C Component Anomaly; New Date Pending",
        body: "ESA confirmed that the joint ESA–Chinese Academy of Sciences SMILE (Solar Wind Magnetosphere Ionosphere Link Explorer) mission will not launch on its planned April 9 date after a technical anomaly was identified in a subsystem component production line following full Vega-C VV29 rocket integration at Europe's Spaceport in Kourou. Engineers continue work to resolve the issue, with a new launch date still to be confirmed and the available window open through May 7; SMILE will fly to a highly elliptical orbit to image Earth's magnetosphere and study how it responds to the solar wind. Separately, ESA has scheduled an April 16 clean room inspection at Airbus in Cannes for three upcoming Earth-observation missions — the Fluorescence Explorer (FLEX), Sentinel-3C, and Meteosat Third Generation Imager-2 — ahead of their shipments to launch sites.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/How_to_follow_the_Smile_launch_live",
        timestamp: "2026-04-13T10:00:00Z"
      }
    ]
  },

  "2026-04-12": {
    date: "April 12, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Milestone",
        headline: "World Marks Yuri's Night on 65th Anniversary of Gagarin's Flight and 45th Anniversary of STS-1",
        body: "April 12 marks a double anniversary for human spaceflight: 65 years since Soviet cosmonaut Yuri Gagarin became the first human in space aboard Vostok 1 on April 12, 1961, and 45 years since the maiden flight of NASA's Space Shuttle Columbia on STS-1 in 1981. NASA is hosting Yuri's Night celebrations at the Kennedy Space Center Visitor Complex as part of the worldwide World Space Party, with astronaut appearances and after-hours access to the Space Shuttle Atlantis exhibit. The festivities come just two days after the historic return of the Artemis II crew, who set a new record for the farthest human journey from Earth — 252,756 miles — underscoring how far crewed spaceflight has advanced in 65 years.",
        sourceUrl: "https://www.kennedyspacecenter.com/event/kennedy-under-the-stars-yuris-night-edition/",
        timestamp: "2026-04-12T00:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Cargo",
        headline: "Cygnus XL S.S. Steven R. Nagel Flies Free After Solar Array Deployment; ISS Berthing Set for Monday",
        body: "NASA's Northrop Grumman CRS-24 Cygnus XL cargo spacecraft is in good health following Saturday's Falcon 9 launch, with both solar arrays successfully deployed and all systems confirmed nominal on approach to the International Space Station. ISS flight controllers have confirmed Canadarm2 will grapple the spacecraft at approximately 12:50 p.m. EDT on Monday, April 13, before berthing at the Unity module's Earth-facing common berthing port. The S.S. Steven R. Nagel is carrying over 11,000 pounds of science experiments, crew provisions, and hardware — the largest cargo load ever flown on a Cygnus vehicle — and will remain berthed at the station for approximately six months.",
        sourceUrl: "https://news.quantosei.com/2026/04/12/spacex-launches-huge-cygnus-xl-cargo-ship-carrying-over-5-tons-of-supplies-to-iss-astronauts-video/",
        timestamp: "2026-04-12T09:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "Integrated New Glenn NG-3 Rocket Prepares for Static Fire Ahead of April 16 Launch Attempt",
        body: "Blue Origin's fully integrated New Glenn NG-3 launch vehicle is preparing for a static fire test of its seven BE-4 engines at Space Launch Complex 36, Cape Canaveral — the final major verification step before its planned April 16 liftoff carrying AST SpaceMobile's BlueBird 7 broadband satellite. The flight will mark the first-ever reuse of a New Glenn first stage, reflying booster 'Never Tell Me The Odds' that previously launched NASA's ESCAPADE Mars probes in November 2025. A successful hotfire and clean vehicle review would lock in the April 16 target as Blue Origin presses toward its goal of more than a dozen New Glenn missions in 2026.",
        sourceUrl: "https://www.eonmsk.com/2026/04/12/blue-origins-integrated-new-glenn-3-rocket-is-about-hotfire/",
        timestamp: "2026-04-12T12:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Human Spaceflight",
        headline: "ISRO Chairman Says Gaganyaan Uncrewed Launch Date Announcement Is Imminent",
        body: "ISRO Chairman Dr. V. Narayanan confirmed that the agency is finalizing the launch date for the first uncrewed orbital demonstration of the Gaganyaan programme, with a public announcement expected within days. The mission — designated HLVM-3 G1/OM1 — will carry Vyommitra, ISRO's half-humanoid robot, to validate life-support and environmental control systems before a crewed flight planned no earlier than 2027. The statement follows ISRO's successful second Integrated Air Drop Test for the Gaganyaan crew module parachute recovery system, which was completed on April 11.",
        sourceUrl: "https://www.indiandefensenews.in/2026/04/isro-nears-announcement-of-first.html",
        timestamp: "2026-04-12T07:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Human Spaceflight",
        headline: "Shenzhou-21 Crew Nears Conclusion of Five-Month Tiangong Mission as Rotation Approaches",
        body: "China's Shenzhou-21 crew — taikonauts Zhang Lu, Wu Fei, and Zhang Hongzhang — is approaching the end of their roughly six-month mission aboard the Tiangong space station, with a crew handover expected in late April or May 2026. The three crew members have conducted in-orbit experiments in space medicine, brain network dynamics, microgravity combustion science, and fluid physics over the past five months. CNSA is preparing the Shenzhou-22 spacecraft and its three-person crew for launch to execute a standard overlapping handover before the Shenzhou-21 vehicle returns to Earth.",
        sourceUrl: "https://www.friendsofnasa.org/2026/04/shenzhou-21-crew-advances-space.html",
        timestamp: "2026-04-12T04:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA Sets April 16 Clean Room Preview for FLEX, Sentinel-3C, and MTG-I2 Ahead of Shipment to Launch Sites",
        body: "The European Space Agency has scheduled a media clean room inspection on April 16 at Airbus facilities in Cannes for three upcoming Earth-observation spacecraft — the Fluorescence Explorer (FLEX), Sentinel-3C, and Meteosat Third Generation Imager-2 — before each is shipped to its respective launch site. FLEX will be the world's first satellite dedicated to mapping vegetation fluorescence globally from orbit, providing vital data for monitoring crop health, ecosystem productivity, and the global carbon cycle. Separately, the Vega-C VV29 launch carrying the joint ESA–CAS SMILE solar wind mission remains on hold with a window open through May 7, pending completion of a supplier component inspection triggered after full rocket integration.",
        sourceUrl: "https://spacepolicyonline.com/news/whats-happening-in-space-policy-april-5-11-2026/",
        timestamp: "2026-04-12T08:00:00Z"
      }
    ]
  },

  "2026-04-11": {
    date: "April 11, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon 9 Lofts Cygnus XL S.S. Steven R. Nagel to ISS; Booster Nails Cape Canaveral Landing",
        body: "A SpaceX Falcon 9 successfully launched Northrop Grumman's CRS-24 Cygnus XL cargo spacecraft at 7:41 a.m. EDT from Space Launch Complex 40 at Cape Canaveral Space Force Station, completing a mission that had slipped from April 10 after forecasted inclement weather forced a 24-hour delay. The Falcon 9 first stage — flying its seventh mission — executed a smooth return-to-launch-site landing at Cape Canaveral approximately eight minutes after liftoff. The Cygnus XL spacecraft, named S.S. Steven R. Nagel in honor of the late astronaut who flew four Space Shuttle missions, is delivering more than 11,000 pounds of science hardware and crew supplies to the International Space Station. Canadarm2 is expected to grapple the vehicle on Monday, April 13, before it is berthed at the Unity module's Earth-facing port.",
        sourceUrl: "https://www.nasa.gov/blogs/spacestation/2026/04/08/nasas-northrop-grumman-crs-24-mission-targets-april-11/",
        timestamp: "2026-04-11T07:41:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "New Glenn NG-3 Delayed Again to April 16 Ahead of Historic First Booster Reuse",
        body: "Blue Origin has slipped the New Glenn NG-3 mission carrying AST SpaceMobile's BlueBird 7 satellite by two additional days to no earlier than April 16, the latest in a series of postponements since the mission first targeted an early-April window. The rocket sections remain in the integration bay and have not yet rolled to the pad at Space Launch Complex 36 at Cape Canaveral. NG-3 will mark the first reflight of a New Glenn first stage, reusing booster 'Never Tell Me The Odds' that landed successfully after delivering NASA's ESCAPADE Mars probes in November 2025. BlueBird 7's Block 2 design features a 2,400-square-foot communications array with ten times the bandwidth of Block 1 and peak speeds up to 120 Mbps, targeting direct smartphone connectivity from low Earth orbit.",
        sourceUrl: "https://nationaltoday.com/us/fl/cape-canaveral/news/2026/04/10/blue-origin-delays-new-glenn-rocket-launch-by-two-days-1/",
        timestamp: "2026-04-11T10:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Technology",
        headline: "ISRO Completes Second Integrated Air Drop Test for Gaganyaan Crew Module Parachute System",
        body: "The Indian Space Research Organisation successfully conducted the second Integrated Air Drop Test (IADT-2) for the Gaganyaan crew module, releasing the capsule from altitude and triggering a ten-parachute deployment sequence that slowed the craft to a safe splashdown speed — validating the recovery system's ability to protect astronauts during re-entry emergencies. The test marks a crucial milestone in the human spaceflight programme ahead of the first uncrewed orbital demonstration mission, designated HLVM-3 G1/OM1, whose launch date announcement is now imminent. In parallel, a national expert committee continues its investigation into the January 2026 PSLV-C62 anomaly that stranded 16 satellites, with a technology demonstrator return-to-flight targeted no earlier than June.",
        sourceUrl: "https://www.businesstoday.in/science/story/gaganyaan-mission-isro-completes-second-integrated-air-drop-test-what-it-means-525219-2026-04-11",
        timestamp: "2026-04-11T06:30:00Z"
      },
      {
        agency: "CNSA",
        category: "Exploration",
        headline: "Tianwen-2 Asteroid Probe on Course for July Kamo'oalewa Rendezvous; Shenzhou-23 Crew Prep Advances",
        body: "China's Tianwen-2 spacecraft remains on track to reach near-Earth asteroid Kamo'oalewa in July 2026, where it will photograph and eventually collect samples from the small body that astronomers suspect may be a fragment of the Moon. Mission teams confirmed nominal spacecraft health this week as the probe continues its interplanetary cruise. On the human spaceflight front, CNSA is advancing preparations for the Shenzhou-23 crew rotation mission to Tiangong later this year, which is expected to include the first astronaut from Pakistan — a milestone for China's programme of international collaboration aboard the station.",
        sourceUrl: "https://www.cnsa.gov.cn/english/",
        timestamp: "2026-04-11T04:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA Schedules Pre-Ship Clean Room Views of FLEX, Sentinel-3C, and MTG-I2 Satellites",
        body: "The European Space Agency has arranged a final clean room inspection of three upcoming Earth-observation spacecraft at Airbus facilities in Cannes on April 16 — the Fluorescence Explorer (FLEX), Sentinel-3C, and the Meteosat Third Generation Imager-2 (MTG-I2) — before the satellites are shipped to their respective launch sites. FLEX will be the world's first satellite dedicated to mapping chlorophyll fluorescence from orbit globally, providing critical data on vegetation health for climate and food-security science. Meanwhile, the SMILE solar-wind magnetosphere mission's Vega-C launch window remains open through May 7 as engineers continue verification work on a component production-line anomaly discovered after full rocket integration at Europe's Spaceport in Kourou.",
        sourceUrl: "https://spacepolicyonline.com/news/whats-happening-in-space-policy-april-5-11-2026/",
        timestamp: "2026-04-11T08:00:00Z"
      }
    ]
  },

  "2026-04-10": {
    date: "April 10, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Exploration",
        headline: "Artemis II Crew Splashes Down in Pacific, Completing Historic Lunar Voyage",
        body: "NASA's Artemis II mission concluded successfully on Friday evening when Orion splashed down in the Pacific Ocean off the coast of San Diego at approximately 8:07 p.m. EDT, completing a nine-day mission that sent humans farther from Earth than any crew since Apollo. Commander Reid Wiseman, Pilot Victor Glover, and Mission Specialists Christina Koch and Jeremy Hansen endured a 13-minute reentry sequence, plunging through Earth's atmosphere at nearly 24,000 mph before 11 parachutes slowed their descent for splashdown. Recovery teams aboard USS John P. Murtha retrieved the crew by helicopter, and all four astronauts were confirmed healthy following post-splashdown medical evaluations. The mission validated Orion's heat shield, life support, and navigation systems ahead of the crewed lunar landing planned for Artemis III.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-04-10T20:07:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "CRS-24 Cygnus XL Slips to April 11 as Cape Canaveral Weather Forces Delay",
        body: "Forecasted inclement weather at Space Launch Complex 40 at Cape Canaveral Space Force Station has pushed the Northrop Grumman CRS-24 resupply mission from its April 10 target to no earlier than 7:41 a.m. EDT Saturday, April 11. The Falcon 9 booster assigned to the mission is flying for the seventh time, previously supporting missions including Ax-4, Crew-11, and NG-23. Cygnus XL — named S.S. Steven R. Nagel in honor of the late astronaut — will deliver more than 11,000 pounds of research hardware and crew supplies to the ISS, where Canadarm2 will grapple the spacecraft before it is berthed at the Unity module's Earth-facing port.",
        sourceUrl: "https://www.nasa.gov/blogs/spacestation/2026/04/07/nasas-northrop-grumman-crs-24-mission-targets-friday-april-10-launch/",
        timestamp: "2026-04-10T09:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "New Glenn NG-3 Slips to April 16; Company Files for Second Cape Canaveral Pad",
        body: "Blue Origin's New Glenn NG-3 mission carrying AST SpaceMobile's BlueBird 7 broadband satellite has been pushed to no earlier than April 16, the third delay for a flight that had been targeting an April 10 window. The mission will mark the first reflown New Glenn first stage, reusing booster 'Never Tell Me The Odds' — which successfully landed after delivering NASA's ESCAPADE Mars probes in November 2025 — a key milestone for the company's reusability programme. Separately, Blue Origin filed documents with the FAA on April 9 to begin the environmental review process for a second launch pad at Cape Canaveral, proposing to repurpose the historic Launch Complex 11 site just north of SLC-36 to meet growing demand from its Project Kuiper and commercial manifests.",
        sourceUrl: "https://www.blueorigin.com",
        timestamp: "2026-04-10T10:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Launch",
        headline: "Tianlong-3 Failure Inquiry Under Way; Long March 8 Delivers 18 Qianfan Satellites",
        body: "Space Pioneer's internal investigation into the April 3 Tianlong-3 maiden flight failure continues, with early analysis pointing to an anomaly roughly 33 seconds after liftoff from Jiuquan that caused the Falcon 9-class vehicle to deviate from its planned trajectory and fail to reach orbit. The setback marks China's third orbital launch failure of 2026 and is a significant blow to the commercial sector's ambitions, though Space Pioneer — which has raised approximately $764 million in total funding — says it is committed to a rapid return to flight. In more positive news, a Chang Zheng 8 rocket successfully deployed 18 Qianfan broadband satellites on April 7, continuing expansion of China's domestic satellite internet megaconstellation toward its planned 15,000-satellite network.",
        sourceUrl: "https://spacenews.com/chinas-commercial-tianlong-3-rocket-fails-on-debut-launch/",
        timestamp: "2026-04-10T04:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "SMILE Launch Window Extended to May 7 as Vega-C Component Inspection Continues",
        body: "European launch provider Avio has confirmed that the Vega-C VV29 mission carrying the SMILE spacecraft remains on hold while engineers investigate a technical anomaly found in a subsystem component production line discovered after full rocket integration at Europe's Spaceport in French Guiana. The launch window has been extended through May 7, 2026, to allow sufficient time for inspections and verification before a new target date can be confirmed. SMILE — the Solar wind Magnetosphere Ionosphere Link Explorer, a joint mission between ESA and the Chinese Academy of Sciences — is designed to produce the first simultaneous global view of how Earth's magnetosphere responds to solar wind using a suite of soft X-ray and ultraviolet cameras alongside in-situ particle and magnetic field instruments.",
        sourceUrl: "https://www.esa.int",
        timestamp: "2026-04-10T08:00:00Z"
      }
    ]
  },

  "2026-04-08": {
    date: "April 8, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Exploration",
        headline: "Artemis II Crew on Final Coast Home as Splashdown Countdown Begins",
        body: "On Flight Day 8, the Artemis II crew practiced in-flight radiation procedures and tested Orion's attitude control system modes while coasting back toward Earth following last week's historic lunar flyby. Commander Reid Wiseman, Pilot Victor Glover, and Mission Specialists Christina Koch and Jeremy Hansen are on track for splashdown at approximately 8:07 p.m. EDT on Friday, April 10, in the Pacific Ocean off San Diego — the fastest crewed reentry ever attempted, at roughly 25,000 mph. The crew joined a live media call at 9:45 p.m. EDT to discuss highlights including Sunday's all-time human distance record of 252,760 miles from Earth. Recovery ship USS John P. Murtha is pre-positioned in the recovery zone, with meteorologists monitoring a light rain system that could affect conditions at splashdown.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-04-08T12:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon 9 Sends 25 Starlinks Skyward from Vandenberg; CRS-24 Cygnus Pushed to Friday",
        body: "SpaceX launched 25 Starlink satellites on a Falcon 9 from Space Launch Complex 4 East at Vandenberg Space Force Base at 7:49 p.m. PT, with the booster completing its 10th mission and landing on drone ship Of Course I Still Love You in the Pacific. Separately, SpaceX's Falcon 9 that was to carry Northrop Grumman's Cygnus XL cargo spacecraft on the CRS-24 resupply mission has been delayed from today to no earlier than 8:03 a.m. EDT Friday, April 10, due to inclement weather at Cape Canaveral's Space Launch Complex 40. Cygnus XL — named in honor of astronaut Steven Nagel — will deliver approximately 11,000 pounds of science and supplies to the International Space Station, with a backup opportunity on April 11.",
        sourceUrl: "https://www.spacex.com",
        timestamp: "2026-04-08T14:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "Vega-C Postpones SMILE Launch After Supplier Flags Component Production Issue",
        body: "European launch provider Avio has postponed the Vega-C VV29 mission carrying the SMILE (Solar Wind Magnetosphere Ionosphere Link Explorer) spacecraft, originally scheduled to lift off from Kourou, French Guiana on April 9. A supplier identified a technical issue on a subsystem component production line following rocket integration, requiring additional inspections before a new launch date can be confirmed within a window extending through May 7, 2026. SMILE is a joint ESA and Chinese Academy of Sciences mission designed to provide humanity's first complete view of how Earth's magnetic environment responds to solar wind, using X-ray and ultraviolet cameras alongside particle and magnetic field detectors.",
        sourceUrl: "https://www.esa.int",
        timestamp: "2026-04-08T10:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "New Glenn NG-3 with AST SpaceMobile BlueBird 7 Satellite Slips to NET April 10",
        body: "Blue Origin's New Glenn rocket carrying AST SpaceMobile's BlueBird 7 broadband satellite has slipped from its early April target to no earlier than April 10, 2026, marking the third orbital flight of the vehicle since its debut in January 2025. BlueBird 7 is part of AST SpaceMobile's direct-to-device cellular broadband constellation aimed at providing smartphone connectivity from low Earth orbit without specialized hardware. Blue Origin has not detailed the cause of the delay but continues to target more than a dozen New Glenn missions in 2026 as the rocket ramps up its operational cadence.",
        sourceUrl: "https://www.blueorigin.com",
        timestamp: "2026-04-08T09:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Technology",
        headline: "ISRO Faces Six-Mission Backlog After Consecutive PSLV Failures; Return to Flight Eyed for June",
        body: "India's space agency continues to manage the fallout from two consecutive PSLV launch failures — including the January 12 loss of 16 satellites aboard PSLV-C62 due to a third-stage anomaly — leaving six major 2026 missions delayed. A national expert committee is actively investigating the root cause, and ISRO has penciled in a technology demonstrator mission (TDS-01) as the first step back to flight, targeted no earlier than June 2026. ISRO chief V. Narayanan has stated that Gaganyaan crewed mission preparations remain on schedule, with the CE20 cryogenic engine recently clearing a key sea-level hot-fire milestone. A parliamentary panel has separately raised concerns over ISRO technology being transferred to private Indian companies at below-market rates.",
        sourceUrl: "https://www.isro.gov.in",
        timestamp: "2026-04-08T06:30:00Z"
      },
      {
        agency: "CNSA",
        category: "Exploration",
        headline: "China Advances Tiangong Crew Rotation and Tianlong-3 Debut as Artemis II Crew Spots Lunar Robots",
        body: "China's space program is moving on multiple fronts in April 2026, with CNSA planning two crewed Tiangong station missions this year — including a historic flight featuring astronauts from Hong Kong and Macao SAR — alongside one cargo resupply. Commercial launcher Space Pioneer is preparing the inaugural flight of Tianlong-3, a Falcon 9-class reusable rocket powered by nine Tianhuo-12 engines, which would be a landmark moment for China's private launch sector. In an unexpected intersection of programs, the Artemis II crew had a unique vantage point to observe Chinese lunar robots operating on the Moon's far side during their close approach last weekend. CNSA's Chang'e-7 spacecraft continues searching for water ice near the lunar south pole, a critical precursor to eventual human lunar landing missions planned for the 2030s.",
        sourceUrl: "https://www.cnsa.gov.cn/english/",
        timestamp: "2026-04-08T04:00:00Z"
      }
    ]
  },

  "2026-04-07": {
    date: "April 7, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Exploration",
        headline: "Artemis II Crew Exits Lunar Sphere of Influence, Begins Return to Earth",
        body: "On Flight Day 7, Orion exited the lunar sphere of influence at approximately 1:25 PM EDT and began its coast back toward Earth after completing the first crewed lunar flyby in over 50 years. The April 6 flyby saw the spacecraft pass within 4,067 miles of the Moon's surface and set a new human distance record of 252,756 miles from Earth — surpassing Apollo 13's 1970 mark. The crew endured a 40-minute communications blackout while behind the Moon before reestablishing contact with Mission Control. Splashdown off the coast of San Diego is expected later this week.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-04-07T13:25:00Z",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Artemis_I_Launch_%28NHQ202211160011%29.jpg/1280px-Artemis_I_Launch_%28NHQ202211160011%29.jpg"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA's European Service Module Performs Flawlessly Through Artemis II Lunar Flyby",
        body: "The European Service Module (ESM), built by Airbus Defence and Space, provided propulsion, power, water, and oxygen to Orion throughout the critical lunar flyby on Flight Day 6. The ESM's main engine and attitude control thrusters operated nominally during the 40-minute blackout behind the Moon. ESA is also finalizing countdown preparations for the SMILE (Solar Wind Magnetosphere Ionosphere Link Explorer) joint mission with the Chinese Academy of Sciences, targeting an April 9 launch on a Long March 3B from Xichang.",
        sourceUrl: "https://www.esa.int",
        timestamp: "2026-04-07T10:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon 9 Launches 25 Starlink Satellites from Vandenberg in Twilight Mission",
        body: "A SpaceX Falcon 9 lifted off at 7:50 PM PDT from Space Launch Complex 4 East at Vandenberg Space Force Base, deploying 25 Starlink satellites to low Earth orbit. The first-stage booster successfully landed on a drone ship off the Baja California coast, completing another recovery. The twilight launch produced a dramatic illuminated plume visible across much of Central California, drawing widespread attention on social media.",
        sourceUrl: "https://www.spacex.com",
        timestamp: "2026-04-07T02:50:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Technology",
        headline: "Blue Origin Files for 'Project Sunrise' In-Orbit Data Center Constellation",
        body: "Blue Origin has submitted filings with U.S. regulators for permission to deploy a network of more than 50,000 satellites in low Earth orbit to host an in-space computing platform dubbed 'Project Sunrise.' The concept aims to offload energy- and water-intensive data center workloads from the ground to space, leveraging the near-unlimited solar power available in orbit. The company is separately targeting no earlier than April 10 for the New Glenn NG-3 launch carrying AST SpaceMobile's BlueBird 7 broadband satellite.",
        sourceUrl: "https://www.blueorigin.com",
        timestamp: "2026-04-07T08:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Technology",
        headline: "ISRO CE20 Cryogenic Engine Clears Hot-Fire Milestone Ahead of Gaganyaan",
        body: "ISRO successfully completed a sea-level hot-fire test of the CE20 cryogenic engine, validating it at 22 tonnes of thrust using a newly designed nozzle protection system. The test is a key qualification step for the human-rated LVM3 rocket that will carry the Gaganyaan crew to orbit. The agency is simultaneously working through a launch backlog after a Q1 anomaly sidelined a PSLV vehicle, with a national expert committee investigating the root cause.",
        sourceUrl: "https://www.isro.gov.in",
        timestamp: "2026-04-07T06:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Launch",
        headline: "China Eyes Tianlong-3 Debut and Outlines Ambitious 2026 Deep-Space Roadmap",
        body: "Space Pioneer is targeting an early April inaugural flight of Tianlong-3, a Falcon 9-class reusable rocket standing 71 meters tall and powered by nine Tianhuo-12 engines — a major step for China's commercial launch sector. On the national side, CNSA confirmed 2026 plans include two crewed Tiangong station missions (one featuring astronauts from Hong Kong and Macao SAR), a cargo resupply flight, and the Chang'e 7 polar lunar mission deploying a rover, lander, and hopper. CNSA also unveiled a roadmap through 2030 that includes a heliosphere probe leveraging a Jupiter gravity assist.",
        sourceUrl: "https://www.cnsa.gov.cn/english/",
        timestamp: "2026-04-07T04:00:00Z"
      }
    ]
  },

  "2026-04-06": {
    date: "April 6, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Exploration",
        headline: "Artemis II Breaks All-Time Human Distance Record During Lunar Flyby",
        body: "At 7:07 p.m. ET today, NASA's Orion spacecraft carrying the four-person Artemis II crew reached 252,760 miles from Earth — surpassing Apollo 13's 1970 record and marking the farthest any humans have ever traveled from our planet. Crew members Reid Wiseman, Victor Glover, Christina Koch, and CSA astronaut Jeremy Hansen photographed and observed the Moon's far side, including the 3.8-billion-year-old Orientale basin, during the historic flyby. NASA streamed live coverage on NASA+ as Orion began its return journey toward Earth following the successful free-return trajectory around the Moon.",
        sourceUrl: "https://www.nasa.gov/artemis",
        timestamp: "2026-04-06T19:07:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon 9 Deploys 25 Starlink Satellites from Vandenberg in Latest 2026 Mission",
        body: "SpaceX successfully launched another batch of 25 Starlink satellites from Space Launch Complex 4E at Vandenberg Space Force Base during a window opening at 7:39 p.m. PT on April 6. The reused Falcon 9 booster executed a flawless landing on the droneship shortly after stage separation, marking another step in SpaceX's aggressive 2026 cadence of over 140 planned launches. SpaceX is separately targeting a Starship Flight 12 test in late April, with the V3 Super Heavy booster undergoing final ground testing at Starbase.",
        sourceUrl: "https://www.spacex.com",
        timestamp: "2026-04-06T02:39:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Commercial",
        headline: "Blue Origin Files FCC Application for 51,600-Satellite Orbital Data Center Constellation",
        body: "Blue Origin has formally filed with the FCC to deploy a constellation of over 51,600 satellites in sun-synchronous orbit as part of 'Project Sunrise,' an ambitious plan to host energy- and water-intensive cloud computing workloads in space. The constellation would be complemented by a TeraWave optical backhaul network of 5,408 satellites to transmit data between orbital nodes and ground stations. The announcement positions Blue Origin directly against terrestrial hyperscale cloud providers at a time when AI compute demand is outpacing ground-based power and cooling capacity.",
        sourceUrl: "https://www.blueorigin.com",
        timestamp: "2026-04-06T14:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Science",
        headline: "ISRO's Mission MITRA Studies High-Altitude Human Performance to Support Gaganyaan",
        body: "ISRO launched Mission MITRA (Mapping of Interoperable Traits and Response Assessment) in Leh, Ladakh, conducting crew-candidate research at 3,500 meters altitude through April 9. The study measures physiological and psychological responses to high-altitude conditions to generate data directly applicable to India's Gaganyaan crewed spaceflight program and future long-duration missions. The research adds to ISRO's growing human spaceflight knowledge base as the agency finalizes plans for its first uncrewed Gaganyaan test flight, now expected before mid-2026.",
        sourceUrl: "https://www.isro.gov.in",
        timestamp: "2026-04-06T06:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission Update",
        headline: "ESA-CAS SMILE Mission Enters Final 72-Hour Countdown for April 9 Launch",
        body: "The Solar Wind Magnetosphere Ionosphere Link Explorer (SMILE), a joint mission between ESA and the Chinese Academy of Sciences, has entered its final 72-hour countdown to liftoff from Europe's Spaceport in Kourou, French Guiana on April 9. SMILE will use soft X-ray imaging and UV aurora cameras to observe in real time how the solar wind shapes Earth's magnetosphere and ionosphere — providing the first-ever global, simultaneous view of this interaction. The mission represents one of the most significant ESA-China scientific collaborations ever undertaken and is one of ESA's flagship science launches of 2026.",
        sourceUrl: "https://www.esa.int",
        timestamp: "2026-04-06T08:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Launch",
        headline: "CAS Space's Lijian-2 Completes Debut Orbital Mission, Placing Two Satellites in Polar Orbit",
        body: "China's commercial launch provider CAS Space successfully completed the inaugural orbital flight of its modular Lijian-2 rocket, deploying two satellites into a polar sun-synchronous orbit earlier this week. The Lijian-2 is a scalable vehicle capable of lifting 2 to 20 tonnes to LEO depending on the number of core boosters, positioning it as a competitor in the medium-to-heavy commercial launch market. China's broader commercial space sector also saw Space Pioneer attempt the maiden flight of its Tianlong-3 vehicle — a Falcon 9-class rocket standing 71 meters tall — adding to a record pace of Chinese launches in early 2026.",
        sourceUrl: "https://www.cnsa.gov.cn/english/",
        timestamp: "2026-04-06T04:00:00Z"
      }
    ]
  },

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
        body: "ISRO has convened a national-level expert committee to investigate the anomaly that grounded its workhorse PSLV vehicle, leaving six planned 2026 missions still awaiting launch. The setback follows a successful LVM3 M6 flight in late 2025 but has pushed back several commercial and scientific payloads. Separately, India's NavIC navigation satellite constellation has been degraded after an atomic clock failure aboard IRNSS-1F, leaving coverage below the threshold for full GPS-equivalent service.",
        sourceUrl: "https://www.isro.gov.in",
        timestamp: "2026-04-05T05:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission Update",
        headline: "ESA Renegotiates Lunar Role as European Service Module Powers Artemis II",
        body: "ESA's European Service Module (ESM) is performing nominally aboard NASA's Orion spacecraft as Artemis II continues its journey to the Moon. The ESM, built by Airbus for ESA, provides Orion with propulsion, power, and life support — having successfully executed the translunar injection burn on April 2. Following NASA's recent suspension of the Gateway lunar space station program, ESA announced it will renegotiate terms of participation in NASA's revised lunar surface architecture.",
        sourceUrl: "https://www.esa.int",
        timestamp: "2026-04-05T09:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Science",
        headline: "China–ESA SMILE Satellite Clears Final Pre-Launch Checks, Four Days to Liftoff",
        body: "The joint Solar Wind Magnetosphere Ionosphere Link Explorer (SMILE) satellite, developed by China's National Space Science Center and ESA, has completed all pre-launch readiness checks ahead of its April 9 launch on a Long March 3B rocket from Xichang Satellite Launch Center. SMILE will use X-ray imaging and ultraviolet aurora cameras to study how solar wind shapes Earth's magnetosphere in real time. The mission represents one of the most significant China–Europe collaborative science projects to date.",
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
