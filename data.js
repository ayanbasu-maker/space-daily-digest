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

  "2026-05-14": {
    date: "May 14, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Launch",
        headline: "SpaceX Dragon CRS-34 Scrubbed a Second Time on May 13 After Cumulus Cloud Violation in Final Minute of Countdown, With Third Launch Attempt Now Targeting May 15 at 6:05 p.m. EDT",
        body: "NASA and SpaceX stood down from a second attempt to launch the Dragon CRS-34 cargo mission on May 13, after the countdown progressed to the final minute before a cumulus cloud rule violation over Space Launch Complex 40 at Cape Canaveral forced the abort — a sharper call than the first scrub on May 11, which was called well in advance of fueling. The Falcon 9 rocket carrying approximately 6,500 pounds of science, crew provisions, and hardware for ISS Expedition 73 is now targeting a third launch attempt on Friday, May 15 at 6:05 p.m. EDT (2205 UTC), with a 24-hour backup on Saturday. Among the time-sensitive payloads engineers are monitoring closely is a microgravity bone-scaffold investigation targeting osteoporosis therapies, which carries defined maximum on-ground storage limits. Weather forecasters are projecting improved but still uncertain conditions over the Cape for Friday's window.",
        sourceUrl: "https://spaceflightnow.com/2026/05/12/live-coverage-nasa-spacex-to-launch-34th-cargo-dragon-mission-to-the-space-station/",
        timestamp: "2026-05-14T00:30:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA's Psyche Spacecraft on Final Approach for Tomorrow's Mars Gravity-Assist Flyby, Passing Within 2,800 Miles at 12,333 MPH While Imaging the Red Planet and Searching for a Faint Martian Dust Ring",
        body: "NASA's Psyche spacecraft is locked in for a gravity-assist flyby of Mars on May 15, when it will pass approximately 2,800 miles from the planet's surface at roughly 12,333 mph — using Martian gravity to reshape its trajectory and conserve propellant on its path to metal-rich asteroid 16 Psyche, believed to be the exposed iron-nickel core of a differentiated planetesimal, with orbit insertion targeted for July 2029. During the encounter, the mission team will use Psyche's multispectral imager to capture thousands of observations of Mars, calibrating imaging techniques that will be essential when the spacecraft begins orbiting its asteroid target. Scientists will also watch for evidence of a faint Martian dust ring that micrometeorites striking Phobos and Deimos may generate, which could become visible depending on the sunlight geometry at flyby. NASA's fleet at Mars — including Odyssey, Mars Reconnaissance Orbiter, Curiosity, and Perseverance — alongside ESA's Mars Express and ExoMars Trace Gas Orbiter, will provide navigation support and coordinated observations throughout the encounter.",
        sourceUrl: "https://science.nasa.gov/blogs/psyche/2026/05/08/nasas-psyche-mission-to-fly-by-mars-for-gravity-assist/",
        timestamp: "2026-05-14T12:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Mission",
        headline: "SpaceX Confirms Starship Flight 12 Will Carry 22 Starlink Simulators as First-Ever Payload on a Starship Test Flight, With Two Satellites Equipped to Image the Heat Shield During Reentry",
        body: "SpaceX confirmed on May 14 that Starship Flight 12, targeting no earlier than May 19 from Orbital Launch Pad 2 at Starbase, will carry 22 Starlink simulator satellites — marking the first time a Starship test flight has flown with an actual payload. Two of the 22 simulators are outfitted with imaging payloads to photograph Ship 39's heat shield tiles during atmospheric reentry, transmitting data to ground operators to validate methods for remotely assessing heat shield readiness ahead of future return-to-launch-site attempts. The simulators represent realistic mass and interface emulations of production Starlink V3 spacecraft, providing engineers with real-world data on deployment sequencing without risking full production hardware on a test vehicle. Flight 12 also debuts the Version 3 Starship architecture, with Booster 19 carrying 33 Raptor 3 engines and Ship 39 featuring stretched propellant tanks; the Super Heavy booster will perform a soft splashdown in the Gulf of Mexico rather than a tower catch on this flight.",
        sourceUrl: "https://www.advanced-television.com/2026/05/14/spacexs-starship-launch-will-carry-surprises/",
        timestamp: "2026-05-14T10:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Policy",
        headline: "Blue Origin CEO Dave Limp Confirms Company Is Exploring Outside Investment for First Time in 25-Year History to Fund 100-Launches-Per-Year Ambition and Deploy 5,408-Satellite TeraWave Constellation",
        body: "Blue Origin CEO Dave Limp told employees at an all-hands meeting that the company is for the first time considering external investment, acknowledging that Jeff Bezos's sole-backer model cannot alone fund the capital needed to reach the stated ambition of 100 New Glenn launches per year — primarily to deploy the 5,408-spacecraft TeraWave broadband constellation announced in January 2026 to sell terabit-class connectivity to data-center operators and enterprises. Limp did not rule out a future IPO, and the company has updated its employee stock plan to include external funding rounds and tender offers as liquidity events, a structural change that signals seriousness about external capital. The move comes as SpaceX prepares for what is expected to be the largest IPO in history at a roughly $1.75 trillion valuation, and follows Blue Origin's challenging spring — including the April New Glenn upper-stage failure and an ongoing FAA return-to-flight review. Limp separately confirmed a 2026 cadence target of eight to twelve New Glenn missions, down from an internal goal of fourteen, contingent on FAA clearance.",
        sourceUrl: "https://thenextweb.com/news/blue-origin-external-funding-spacex-ipo-bezos",
        timestamp: "2026-05-14T08:00:00Z"
      },
      {
        agency: "ESA",
        category: "Policy",
        headline: "Third Annual ESA Earth Observation Commercialisation Forum Concludes Three-Day Seville Summit, Wrapping Up Roadmap Sessions Spanning EO Value Chain From Constellations to AI-Driven Downstream Applications",
        body: "ESA's third annual Earth Observation Commercialisation Forum (ESA CommEO) concluded today in Seville, Spain, closing a three-day programme that brought together the global EO ecosystem — manufacturers, launch providers, data analytics platforms, investors, and downstream application developers — to set the strategic direction for Europe's commercial Earth observation sector over the next decade. The forum's opening session featured ESA Director General Josef Aschbacher, European Commission representatives, and senior European Investment Bank figures discussing how public funding frameworks and regulatory environments can best catalyse private investment in EO infrastructure and services. Key discussions covered the full value chain: constellation financing, AI-driven analytics, commercialisation of Copernicus data, and how ESA's BIC incubators, BOOST accelerator, and co-investment schemes support European start-ups in building global EO data products. This year's expanded attendance reflects the rapid growth of Europe's commercial EO sector, driven by new constellations from Airbus and Telespazio alongside a growing cohort of specialised imaging and analytics start-ups.",
        sourceUrl: "https://www.esa.int/About_Us/Corporate_news/ESA_hosts_China_s_space_leaders",
        timestamp: "2026-05-14T17:00:00Z"
      }
    ]
  },

  "2026-05-13": {
    date: "May 13, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Launch",
        headline: "SpaceX Dragon CRS-34 Launches From Cape Canaveral on May 13 Backup Window After May 12 Weather Scrub, Carrying 6,500 Pounds to ISS With Docking Set for May 14 Morning",
        body: "SpaceX's Falcon 9 rocket carrying the Dragon CRS-34 cargo spacecraft lifted off from Space Launch Complex 40 at Cape Canaveral Space Force Station at 6:50 p.m. EDT on May 13, following a 24-hour weather delay after cumulus cloud conditions forced a scrub of the original May 12 attempt. Booster B1096, flying its sixth mission, executed a return-to-launch-site landing at Landing Zone 40 approximately eight minutes after liftoff. The Dragon capsule — itself on a record-setting sixth flight — carries approximately 6,500 pounds of science experiments, crew provisions, and hardware for the ISS Expedition 73 crew, including a wood-derived bone scaffold targeting osteoporosis therapies in microgravity and a red blood cell physiology study examining how spaceflight alters human blood biology. Autonomous docking at the forward port of the station's Harmony module is expected at approximately 7:35 a.m. EDT on May 14.",
        sourceUrl: "https://www.space.com/space-exploration/launches-spacecraft/spacex-dragon-cargo-launch-iss-crs-34",
        timestamp: "2026-05-13T22:50:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Officially Targets May 19 for Starship Flight 12 From New Orbital Launch Pad 2, Debuting V3 Architecture With Raptor 3 Engines and Over 100 Metric Tonnes of Reusable LEO Payload Capacity",
        body: "SpaceX confirmed May 19 as the no-earlier-than launch date for Starship Flight 12 from Orbital Launch Pad 2 at Starbase in Boca Chica, Texas — simultaneously the debut of the Version 3 Starship architecture and the first launch from the newly upgraded pad. The vehicle pairs Super Heavy Booster 19, carrying 33 Raptor 3 engines, with Ship 39, a stretched upper stage whose larger propellant tanks extend the stack to approximately 408 feet and raise reusable LEO payload capacity to over 100 metric tonnes — nearly three times the V2 capability. Pre-flight testing is complete: a full-duration 33-engine static fire was conducted last week, and the fully stacked vehicle has completed a wet dress rehearsal loading over 5,000 tonnes of propellant without anomalies. The mission profile calls for a suborbital arc with ocean splashdowns for both stages, deliberately deferring booster tower-catch to focus on clean V3 architecture validation.",
        sourceUrl: "https://spaceflightnow.com/2026/05/12/spacex-targets-may-19-for-debut-of-starship-super-heavy-version-3-launch-pad-2/",
        timestamp: "2026-05-13T15:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA Psyche Spacecraft Locked In for Friday Mars Gravity-Assist Flyby, Passing 2,800 Miles From the Red Planet at 12,333 MPH to Slingshot Toward Metal-Rich Asteroid on 2029 Arrival Track",
        body: "NASA's Psyche spacecraft is on final approach for a gravity-assist flyby of Mars on May 15, when it will pass within approximately 2,800 miles of the Red Planet's surface at roughly 12,333 mph, using Martian gravity to bend its trajectory and boost velocity toward the metal-rich asteroid 16 Psyche. The flyby serves primarily as an orbital mechanics maneuver — saving significant onboard propellant by letting Mars's gravity do the work — but the mission team will simultaneously use the multispectral imager to capture thousands of observations of Mars, calibrating imaging techniques critical for when the spacecraft begins orbiting its target asteroid in late 2029. It is the only gravity assist planned for the mission; a clean execution places Psyche on direct trajectory for asteroid orbit insertion, currently targeted for July 2029 with prime science operations starting in August. Asteroid 16 Psyche is believed to be the exposed iron-nickel core of a differentiated planetesimal, and the mission aims to answer fundamental questions about planetary formation.",
        sourceUrl: "https://science.nasa.gov/blogs/psyche/2026/05/08/nasas-psyche-mission-to-fly-by-mars-for-gravity-assist/",
        timestamp: "2026-05-13T12:00:00Z"
      },
      {
        agency: "ESA",
        category: "Launch",
        headline: "ESA Confirms May 19 Vega-C Launch for SMILE Solar Wind Observatory After April Technical Delay, Marking Rocket's Return-to-Flight and Debut of Joint ESA-China Solar-Terrestrial Science Mission",
        body: "ESA confirmed the Solar wind Magnetosphere Ionosphere Link Explorer (SMILE) will launch on May 19 at 05:52 CEST aboard a Vega-C rocket from Europe's Spaceport in Kourou, French Guiana — six weeks later than the original April 9 target after a precautionary delay to address a production-line defect in a Vega-C subsystem component. SMILE is a joint mission between ESA and the Chinese Academy of Sciences, and will be the first satellite to carry both soft X-ray and ultraviolet imaging instruments alongside in-situ particle and magnetic field detectors to simultaneously observe the full magnetospheric response to solar wind input. The spacecraft's highly elliptical orbit will allow it to image Earth's entire magnetosphere in a single frame — an unprecedented capability for understanding geomagnetic storms and space weather that affects satellites, power grids, and communications infrastructure. Solar panel deployment 63 minutes after liftoff will confirm launch success before Smile enters a commissioning phase ahead of its planned three-year science mission.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_set_to_launch_on_19_May",
        timestamp: "2026-05-13T10:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Policy",
        headline: "ISRO-Roscosmos Draft Contract for Semi-Cryogenic Engine Procurement Enters Approval Process, Targeting LVM3 Payload Upgrade From 4 to 5 Tonnes GTO to Support Commercial and Gaganyaan Ambitions",
        body: "India's Space Research Organisation disclosed in its Annual Report for 2025–26 that a draft procurement contract for semi-cryogenic rocket engines with Russia's Roscosmos is currently in the approval process, advancing ISRO's plan to upgrade the Launch Vehicle Mark 3 with propulsion hardware that would lift its geostationary transfer orbit payload capacity from 4 to 5 metric tonnes. The semi-cryogenic engines combine rocket-grade kerosene — stored at ambient temperature, simplifying launch-pad operations — with super-cooled liquid oxygen, replacing the solid-propellant strap-on boosters currently used on LVM3 and providing a significant performance improvement. India is simultaneously pursuing indigenous development, having conducted a successful hot test of the domestic Engine Power Head Test Article at the ISRO Propulsion Complex in Mahendragiri in 2025, ensuring a parallel path to operational capability should the foreign procurement face delays. The enhanced payload margin would directly benefit commercial satellite customers and provide critical margins for future crewed lunar mission precursors under the Gaganyaan programme.",
        sourceUrl: "https://www.indiandefensenews.in/2026/05/isro-roscosmos-semi-cryogenic-engine.html",
        timestamp: "2026-05-13T08:00:00Z"
      }
    ]
  },

  "2026-05-12": {
    date: "May 12, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Launch",
        headline: "SpaceX Dragon CRS-34 Lifts Off From Cape Canaveral at 7:16 p.m. EDT With 6,500 Pounds of ISS Cargo, Docking Targeted for May 14 Despite 35% Favorable Weather Odds at Launch",
        body: "A SpaceX Falcon 9 rocket carrying the Dragon CRS-34 cargo spacecraft — capsule C209 on its sixth flight — launched from Space Launch Complex 40 at Cape Canaveral Space Force Station, Florida, at 7:16 p.m. EDT on May 12, despite a forecast that gave the mission only a 35% chance of acceptable weather at liftoff due to cumulus cloud and anvil cloud rules violations. The Dragon capsule carries approximately 6,500 pounds of science experiments, crew provisions, and hardware for the International Space Station's Expedition 73 crew, including a wooden bone scaffold engineered to investigate osteoporosis therapies in microgravity and a red blood cell physiology study examining how spaceflight alters human blood biology. Autonomous docking is expected at the forward port of Harmony at approximately 9:50 a.m. EDT on May 14, with NASA flight controllers at Johnson Space Center verifying docking corridors and approach profiles in preparation for Dragon's 38-hour free-flight transit. The backup launch opportunity, had weather scrubbed Tuesday's attempt, was set for Wednesday, May 13 at 6:50 p.m. EDT from the same pad.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-sets-coverage-for-spacex-34th-station-resupply-launch-arrival/",
        timestamp: "2026-05-12T23:16:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Opens Starship Flight 12 Launch Window at 22:30 UTC Tonight From OLP-2 — First-Ever Flight of Version 3 Vehicle and First Liftoff From New Starbase Orbital Pad",
        body: "SpaceX opened a Starship Flight 12 launch window at 22:30 UTC (5:30 p.m. CDT) on May 12 from Orbital Launch Pad 2 at Starbase in Boca Chica, Texas, moving the attempt forward from the previously announced NET May 15 date after the Wet Dress Rehearsal completed without anomalies and all pre-launch checkouts of Booster 19 and Ship 39 cleared final review boards. Flight 12 is the debut of the Version 3 Starship architecture: Booster 19 carries 33 Raptor 3 engines producing higher thrust than any prior superheavy booster, while Ship 39 features stretched propellant tanks that raise the vehicle's standing height to approximately 408 feet — about four feet taller than the V2 stack — and its reusable LEO payload capacity to over 100 metric tons. The mission profile calls for a suborbital trajectory with controlled ocean splashdowns for both the booster and ship, deliberately setting aside the mechazilla tower-catch milestones achieved on Flight 11 in order to prioritize clean-sheet V3 performance data and validation of OLP-2's upgraded water deluge and ground support infrastructure. A successful launch would simultaneously certify three firsts for SpaceX: the V3 architecture, Orbital Launch Pad 2, and Raptor 3 engines operating in flight conditions on both stages.",
        sourceUrl: "https://www.nasaspaceflight.com/2026/05/spacex-mid-may-starship-flight-12-revised-trajectory/",
        timestamp: "2026-05-12T22:30:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Mission",
        headline: "Blue Origin Submits Corrective Action Plan to FAA Following CEO Dave Limp's Explanation of New Glenn BE-3U Thrust Anomaly That Stranded AST SpaceMobile's BlueBird 7 Satellite",
        body: "Blue Origin CEO Dave Limp publicly confirmed on May 12 that the company has submitted its corrective action plan to the Federal Aviation Administration as part of the ongoing mishap investigation into the April 19 New Glenn upper-stage failure that placed AST SpaceMobile's BlueBird 7 satellite in an unusably low orbit, leading to the payload's loss and an indefinite FAA grounding of the rocket. Limp attributed the anomaly to a thrust shortfall in one of the BE-3U engines during the second upper-stage burn — the engine ignited but failed to produce sufficient thrust to complete the planned trajectory, leaving BlueBird 7 in an orbit too low for the satellite's onboard propulsion system to raise, forcing AST SpaceMobile to plan a controlled atmospheric de-orbit of the spacecraft. The corrective action plan addresses the root cause identified during Blue Origin's internal investigation and outlines manufacturing and acceptance testing changes to the BE-3U propellant feed system; the FAA must now review the plan, approve the root cause finding, and authorize a return-to-flight before New Glenn can attempt its next mission. Blue Origin's cadence ambitions — the company publicly targeted double-digit launches in 2026 to support New Glenn's commercial manifest and position New Glenn as the primary ride for future TeraWave constellation satellites — now hinge on how quickly the regulator can clear the rocket for resumption of operations.",
        sourceUrl: "https://gizmodo.com/blue-origin-offers-an-explanation-for-its-embarrassing-satellite-mishap-2000750010",
        timestamp: "2026-05-12T14:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China Begins Final Shenzhou-23 Launch Preparations at Jiuquan Following Tianzhou-10 Docking, Targeting Late-May Crewed Launch to Begin First-Ever One-Year Human Spaceflight Experiment",
        body: "With Tianzhou-10 securely docked at Tiangong's Tianhe aft port and cargo offloading underway, the China Manned Space Engineering Office confirmed on May 12 that final integration and testing of the Shenzhou-23 crewed spacecraft and its Long March-2F carrier rocket are proceeding at the Jiuquan Satellite Launch Center, with a targeted launch in late May 2026 that will relieve the current Shenzhou-22 crew. The Shenzhou-23 mission is notable for including China's first-ever designated one-year continuous human spaceflight experiment: one crew member will remain aboard Tiangong for a full twelve months — more than double the standard six-month rotation — to gather long-duration physiological data in support of future crewed lunar and Mars mission planning. The arriving crew will take custody of the new-generation EVA spacesuit, space treadmill, and 41 science experiment packages delivered by Tianzhou-10, enabling a comprehensive research program spanning microgravity fluid physics, space medicine, and advanced materials science scheduled to run through the spring of 2027. A successful Shenzhou-23 crew handover would also clear the manifest for Shenzhou-24, a planned follow-on crewed flight later in 2026, as China presses toward its stated goal of maintaining permanent crewed presence aboard Tiangong.",
        sourceUrl: "https://news.cgtn.com/news/2026-05-11/China-says-it-successfully-launches-Tianzhou-10-cargo-spacecraft-1N3cLeSCySQ/p.html",
        timestamp: "2026-05-12T06:00:00Z"
      },
      {
        agency: "ESA",
        category: "Policy",
        headline: "Third ESA Earth Observation Commercialisation Forum Opens in Seville With European Commission and Financial Leaders Setting Strategic Roadmap for the Continent's EO Sector",
        body: "The European Space Agency's third Earth Observation Commercialisation Forum (ESA CommEO) opened in Seville, Spain, on May 12 for a three-day programme running through May 14, bringing together global Earth observation industry leaders, investors, policymakers, and downstream application developers to define the strategic roadmap for Europe's commercial EO sector over the next decade. Day one featured a high-level opening session with ESA Director General Josef Aschbacher, European Commission representatives, and senior figures from the European Investment Bank, addressing how public funding frameworks and regulatory environments can best catalyse private investment in EO infrastructure and services. The forum's agenda spans the entire EO value chain, from satellite manufacturing and launch, to data analytics platforms, AI-driven downstream applications, and the financing mechanisms — including ESA's BIC incubators, BOOST accelerator, and co-investment schemes — that support European start-ups in commercialising space-derived data. ESA CommEO is held annually and has grown significantly in its third edition, reflecting the rapid expansion of Europe's commercial EO sector driven by new constellations from Airbus, Telespazio, Satellogic, and a growing cohort of start-ups building specialised imaging and analytics services on the backbone of Copernicus data.",
        sourceUrl: "https://www.esa.int/",
        timestamp: "2026-05-12T09:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Launch",
        headline: "ISRO Begins GSLV F17 Countdown Operations at Sriharikota as EOS-05 Geostationary Imaging Satellite Readied for May 21 Return-to-Flight Launch After Four-Month Stand-Down",
        body: "The Indian Space Research Organisation commenced countdown operations for GSLV F17 at the Second Launch Pad of the Satish Dhawan Space Centre in Sriharikota on May 12, advancing toward a May 21 liftoff carrying the EOS-05 (GISAT-1A) geostationary Earth observation satellite in the agency's first launch attempt since the PSLV-C62 third-stage spin failure grounded all Indian launch vehicles in January 2026. EOS-05, operating from geostationary orbit at approximately 36,000 kilometers altitude, is designed to deliver near-real-time multispectral imagery of the entire Indian subcontinent at 30-minute intervals under normal operations — compressible to five minutes over priority zones — serving disaster management, cyclone monitoring, flood response, and agricultural assessment agencies across the country. ISRO Chairman V. Narayanan has stated that a clean GSLV F17 return-to-flight will clear the launch manifest for a sequence of high-priority follow-on missions including the PSLV-C63 technology demonstrator, the first privately assembled PSLV-N1 rocket built by NewSpace India Limited, and the Gaganyaan G1 uncrewed orbital test flight carrying the Vyommitra semi-humanoid robot. The GSLV's Cryogenic Upper Stage, powered by the indigenously developed CE-20 engine, remains the mission's highest-scrutiny system after a series of previous stage anomalies; teams have completed an additional round of cold-flow testing and acceptance inspections specifically targeting the CUS turbopump assembly ahead of the May 21 window.",
        sourceUrl: "https://www.indiastrategic.in/isro-all-set-to-return-to-rocket-launches-in-may-2026/",
        timestamp: "2026-05-12T08:00:00Z"
      }
    ]
  }

};

// Make available globally
window.AGENCIES = AGENCIES;
window.DIGESTS = DIGESTS;
