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

  "2026-05-04": {
    date: "May 4, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Policy",
        headline: "Ireland Becomes 65th Nation to Sign Artemis Accords at NASA Headquarters Ceremony as Administrator Isaacman and Irish Ambassador Geraldine Byrne Nason Formalize Commitment to Responsible Lunar Exploration",
        body: "NASA Administrator Jared Isaacman hosted Ambassador of Ireland to the United States Geraldine Byrne Nason, Ireland's Minister for Enterprise, Tourism and Employment Peter Burke T.D., and U.S. State Department officials at a ceremony at NASA Headquarters in Washington, D.C., on Monday afternoon, where Ireland formally became the 65th signatory of the Artemis Accords. The Accords, first established in 2020 during President Trump's first administration and co-led by NASA and the State Department, enumerate ten core principles governing responsible, transparent, and peaceful civil space exploration on the Moon, Mars, and beyond — including open publication of scientific data, interoperability of rescue systems, and avoidance of harmful interference with other nations' operations. Ireland's signature extends the accords' reach across Europe at a moment when the program is building momentum for the Artemis III and IV crewed missions and broadening its coalition beyond the original eight founding nations. The ceremony follows similar signings by several European nations in 2025 and early 2026 and underscores growing multilateral alignment around the norms that NASA argues are essential for an era of sustained human activity beyond low Earth orbit.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-invites-media-to-ireland-artemis-accords-signing/",
        timestamp: "2026-05-04T19:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA APOD 'Superplumes Inside Earth' Visualizes Two Continent-Sized Low-Shear-Velocity Provinces Whose Origins — Moon-Forming Collision Debris or Ancient Tectonic Plate Graveyards — Remain an Open Mystery",
        body: "NASA's Astronomy Picture of the Day for May 4 features an animated scientific visualization titled 'Superplumes Inside Earth,' highlighting two enormous anomalous masses lurking deep within Earth's mantle — structures identified through seismic tomography by charting how earthquake waves travel at different speeds through regions of varying temperature and composition. Known formally as large low-shear-velocity provinces, or LLSVPs, the superplumes sit near the core-mantle boundary beneath Africa and the Pacific Ocean, each roughly continent-sized, and have significantly different acoustic properties than the surrounding mantle. Two leading hypotheses compete to explain them: one holds they are sunken debris from the giant planetary impact that created Earth's Moon approximately 4.5 billion years ago, while the other proposes they are ancient tectonic plates that subducted into the mantle over billions of years and accumulated at the base. Regardless of origin, the LLSVPs are thought to drive deep mantle upwelling plumes that reach Earth's surface as hotspots, potentially giving rise to volcanic island chains such as Hawaii.",
        sourceUrl: "https://apod.nasa.gov/apod/ap260504.html",
        timestamp: "2026-05-04T04:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA-China SMILE Satellite Encapsulated in Vega-C Fairing at Kourou with 15 Days to May 19 Launch — First Spacecraft Ever to Image Earth's Magnetosphere in X-Rays",
        body: "The joint European Space Agency and Chinese Academy of Sciences Solar Wind Magnetosphere Ionosphere Link Explorer (SMILE) has been fully fuelled, mated to its Vega-C rocket adapter, and enclosed inside the launch vehicle's payload fairing at the Guiana Space Centre in Kourou, French Guiana, setting the stage for liftoff at 04:52 BST on May 19, 2026. SMILE carries an X-ray camera — the first instrument capable of capturing full-disk images of Earth's magnetosphere in X-rays — alongside a UV aurora imager that can monitor the northern lights continuously for up to 45 hours per orbit, and a suite of in-situ solar wind sensors. The mission was briefly delayed from an earlier April window when a technical issue was identified in the production line of a Vega-C subsystem component, but following thorough inspection all partners cleared the rocket and confirmed May 19 as the new launch date. From its highly elliptical 121,000-km apogee orbit, SMILE will for the first time let scientists watch in near-real-time how bursts of solar wind compress and reshape Earth's magnetic shield — observations that could improve forecasting of geomagnetic storms affecting power grids and satellite operations.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_set_to_launch_on_19_May",
        timestamp: "2026-05-04T08:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Policy",
        headline: "China Issues Its First Commercial Space Standard System, Mapping 1,000-Plus Standards Across Six Branches to Anchor the Nation's Rapidly Expanding Private Launch and Satellite Industry",
        body: "The China National Space Administration and the State Administration for Market Regulation jointly issued China's inaugural Commercial Space Standard System at a ceremony in Chengdu on April 24 — Space Day — creating the first comprehensive regulatory and technical framework specifically designed for the country's booming private space sector. The system organizes more than 1,000 planned standards across six branches: industry governance, research and development and manufacturing, launch and telemetry-tracking-command operations, space application services, basic and common foundational items, and facilities and ground equipment. CNSA officials said the document will drive innovation across the entire commercial space supply chain and establish a standards-service platform to support companies developing reusable rockets, satellite constellations, and in-orbit services — activities that saw 92 national launches in 2025, a 35 percent year-on-year increase. China's private space sector now includes numerous domestic launch providers, and the government has framed standardization as essential to sustaining competitiveness while maintaining national security oversight of a rapidly decentralizing industry.",
        sourceUrl: "https://orbitaltoday.com/2026/04/27/china-issues-its-commercial-space-standard-system/",
        timestamp: "2026-04-24T10:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Development",
        headline: "SpaceX Completes Full Tile Coverage on Starship Ship 40 and Begins Booster 20 Integration for Flight 13 as Parallel-Processing Strategy Hits New Milestone at Starbase",
        body: "SpaceX has completed full thermal protection system tile coverage on Ship 40, the Starship upper stage designated for the Flight 13 mission, and has begun integration work on Booster 20 at the Starbase production facility in Boca Chica, Texas — advancing the company's strategy of simultaneously preparing successive Starship vehicles while the Flight 12 stack of Booster 19 and Ship 39 awaits its May 12 launch window at Orbital Launch Pad 2. The ability to run parallel vehicle preparation campaigns across two orbital launch pads is central to SpaceX's goal of achieving monthly Starship launch cadence by the end of 2026, and the Flight 13 vehicle build is proceeding even before Flight 12's V3 architecture has flown for the first time. Ship 40 incorporates the same Raptor 3 engine suite and structural refinements introduced on the V3 stack, and its rapid tiling completion signals that SpaceX is manufacturing thermal protection tiles at a rate capable of supporting a roughly four-to-six week turnaround between missions. Booster 20's integration with Ship 40 for ground stacking tests is expected later in May once the Flight 12 pad operations have concluded.",
        sourceUrl: "https://www.basenor.com/blogs/news/starship-ship-40-fully-tiled-for-flight-13-whats-next",
        timestamp: "2026-05-04T12:00:00Z"
      }
    ]
  },

  "2026-05-03": {
    date: "May 3, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Development",
        headline: "SpaceX Completes Pre-Flight Checks on Version 3 Starship at OLP2 as FAA Clears Flight 12 for May 12 Opening Window — First Launch from New Pad with Raptor 3 Stack",
        body: "SpaceX has wrapped the final round of pre-flight static fire tests and propellant loading verifications for its all-new Version 3 Starship, with the fully stacked 408-foot vehicle now standing at the newly completed Orbital Launch Pad 2 at Starbase in Boca Chica, Texas, and the Federal Aviation Administration having granted flight-safety authorization for Flight 12's first available window on May 12 at 22:30 UTC. Booster 19, powered by 33 Raptor 3 engines, and Ship 39 both completed full-duration static fires in mid-April, with follow-on spin prime tests confirming stable propellant conditioning across both stages and resolving all pre-ignition anomalies logged during the campaign. A Federal Communications Commission communications license remains valid through October 2026, clearing the final regulatory hurdle for the inaugural V3 flight from OLP2 — a second launch complex that structurally enables SpaceX to prepare one Starship while another is being serviced, removing a critical throughput bottleneck from the program. The V3 architecture, pairing Booster 19 and Ship 39 for the first time, is designed to deliver more than 100 metric tons to low Earth orbit on fully reusable flights — nearly triple the payload capacity demonstrated by its V2 predecessor.",
        sourceUrl: "https://www.space.com/space-exploration/launches-spacecraft/spacex-fires-up-next-gen-version-3-starship-ahead-of-landmark-may-test-flight-photos",
        timestamp: "2026-05-03T10:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA APOD 'Trifid Pillars and Jets' Showcases Hubble View of Photoevaporating Dust Pillars and a Protostellar Jet Nearly One Light-Year Long Inside Nebula M20",
        body: "NASA's Astronomy Picture of the Day for May 3 features a striking Hubble Space Telescope image titled 'Trifid Pillars and Jets,' capturing the end of a towering gas-and-dust pillar deep inside the Trifid Nebula (Messier 20) in Sagittarius, roughly 9,000 light-years from Earth. Intense ultraviolet radiation from a massive off-frame star is slowly photoevaporating the dense pillar column — a process expected to consume the structure over tens of thousands of years — while simultaneously illuminating a narrow protostellar jet that extends nearly a light-year to the upper left of the frame. The jet originates from a young stellar object buried inside the pillar; as the surrounding dusty envelope is stripped away, this nascent star will gradually be exposed, making the Trifid a living laboratory for studying triggered star formation in molecular clouds. Many of the bright point sources visible in the image are themselves newly formed stars embedded in the nebula, and the image is credited to NASA, ESA, and STScI from archival Hubble Advanced Camera for Surveys data.",
        sourceUrl: "https://apod.nasa.gov/apod/ap260503.html",
        timestamp: "2026-05-03T04:00:00Z"
      },
      {
        agency: "NASA",
        category: "Mission",
        headline: "NASA Confirms Artemis III Will Fly as Earth-Orbit Lander Demo in Late 2027 Rather Than Lunar Landing — First Moonwalks Now Targeting Artemis IV in 2028",
        body: "NASA Administrator Jared Isaacman confirmed to the House Appropriations Committee that Artemis III will target a late-2027 launch as an Earth-orbit rendezvous and docking demonstration rather than a crewed lunar surface landing, marking the latest schedule and mission-profile change driven by concurrent delays in SpaceX's Starship Human Landing System and Blue Origin's Blue Moon lander. Under the revised plan, the SLS-launched Orion crew capsule will rendezvous with both commercial landers in low Earth orbit to verify docking interfaces, spacesuit fit checks using the Axiom AxEMU, and interoperability — a high-fidelity test intended to de-risk the subsequent Artemis IV mission, now the earliest opportunity for a crewed lunar touchdown and targeting 2028. Neither Starship HLS nor Blue Moon currently incorporates operational life-support systems for crewed habitation; cryogenic propellant boil-off management and in-space fuel transfer also remain undemonstrated at scale, challenges that drove the mission redesign. Both vendors have provided schedules confirming they can support a late-2027 rendezvous ahead of a landing bid the following year.",
        sourceUrl: "https://www.theregister.com/2026/05/01/artemis_iii_aims_for_late/",
        timestamp: "2026-05-01T16:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Development",
        headline: "FAA Grounds New Glenn Indefinitely After NG-3 Upper Stage Failure and Undisclosed 2CAT Facility Explosion Create Dual Investigation Fronts for Blue Origin",
        body: "The Federal Aviation Administration has issued an indefinite launch moratorium for Blue Origin's New Glenn rocket following two overlapping safety events: the April 19 NG-3 mission's failure to deliver AST SpaceMobile's BlueBird 7 satellite to its intended orbit, and a separate structural anomaly at Blue Origin's Second Stage Cleaning and Test facility at Exploration Park in Florida discovered via satellite imagery. CEO Dave Limp attributed the NG-3 orbital insertion failure to one of the two BE-3U upper-stage engines producing insufficient thrust during the second burn, leaving BlueBird 7 in an orbit too low to salvage — AST SpaceMobile has since written the spacecraft off entirely. Open-source satellite imagery subsequently revealed a significant hole in the roof of the 2CAT building, consistent with an undisclosed pressure-test anomaly involving a second-stage propellant tank that reportedly occurred on or around April 9, weeks before the launch failure. The FAA will oversee every step of Blue Origin's investigation and must approve all corrective actions before New Glenn can fly again, putting the company's stated goal of up to 12 New Glenn missions in 2026 in serious jeopardy.",
        sourceUrl: "https://satnews.com/2026/04/30/faa-grounds-blue-origin-following-new-glenn-upper-stage-failure-and-facility-anomaly/",
        timestamp: "2026-04-30T18:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Mission",
        headline: "ISRO Details Gaganyaan Astronaut Training Milestones and Crew Module Qualification as Uncrewed Vyommitra Mission Holds H2 2026 Target",
        body: "India's ISRO published a comprehensive Gaganyaan readiness update confirming that all four prime crew astronauts — Prashanth Balakrishnan Nair, Ajit Krishnan, Angad Pratap, and Shubhanshu Shukla — are in the final phase of mission-specific training using a full-scale Static Mock-up Simulator that replicates the crew module interior, with completed sessions lasting 2, 6, 10, and 18 hours to validate crew reachability, life-support operations, emergency egress, and onboard communications. An upgraded Virtual Reality Training Simulator introduced in early 2026 allows the four astronauts to rehearse orbital maneuvers, rendezvous procedures, and contingency scenarios in immersive full-fidelity environments, and the agency reports that more than 8,000 ground qualification tests on the crew module and service module have now been completed, clearing all structural, propulsion, and environmental control systems for flight. The Gaganyaan-1 uncrewed orbital mission — carrying the Vyommitra semi-humanoid robot to validate life-support systems ahead of human flight — remains on track for the second half of 2026, and ISRO says the crewed Gaganyaan-2 mission, which would make India only the fourth nation to independently send humans to orbit, is currently projected for no earlier than 2028.",
        sourceUrl: "https://www.indiandefensenews.in/2026/05/isro-details-gaganyaan-astronaut.html",
        timestamp: "2026-05-03T06:00:00Z"
      }
    ]
  },

  "2026-05-02": {
    date: "May 2, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon 9 Lifts Off from Vandenberg with Korea's CAS500-2 Earth-Observation Satellite on 45-Payload Rideshare as Booster Nails Landing Zone 4 Return",
        body: "A SpaceX Falcon 9 rocket lifted off from Space Launch Complex 4 East at Vandenberg Space Force Base in California late Saturday night, carrying the Korean Aerospace Research Institute's CAS500-2 compact Earth-observation satellite as the primary payload alongside 44 secondary rideshare payloads — making it one of SpaceX's most diverse rideshare manifests of 2026. CAS500-2 is a 500-kilogram-class optical imaging satellite headed for a sun-synchronous low Earth orbit, where it will capture panchromatic and multispectral imagery of Earth's surface using an advanced onboard sensor system, complementing KARI's growing Earth-observation infrastructure. The Falcon 9 first-stage booster executed a propulsive return to Landing Zone 4 at Vandenberg, producing sonic booms heard across the Santa Barbara area roughly eight to ten minutes after liftoff. NanoAvionics contributed three milestone rideshare payloads to the mission, underscoring the rapid maturation of the small-satellite commercial sector.",
        sourceUrl: "https://www.vandenberg.spaceforce.mil/News/Article-Display/Article/4476202/vsfb-to-support-midnight-launch-and-landing-may-2-3/",
        timestamp: "2026-05-03T06:59:00Z"
      },
      {
        agency: "SpaceX",
        category: "Development",
        headline: "SpaceX Targets Mid-May Starship V3 Debut as Flight 12 Opens Window May 12 at OLP2 — First Launch from New Pad with Raptor 3-Powered Booster 19 and Ship 39",
        body: "SpaceX has confirmed that Starship Flight 12 is targeting a launch window opening May 12 at 22:30 UTC from the newly completed Orbital Launch Pad 2 at Starbase, Texas — the first Starship mission to lift off from OLP2 and the debut of the all-new V3 architecture pairing Booster 19 and Ship 39, both powered entirely by next-generation Raptor 3 engines. The fully stacked V3 vehicle stands 408 feet tall, about four feet taller than its V2 predecessor, and is designed to deliver more than 100 metric tons to low Earth orbit — nearly triple the V2's demonstrated payload capacity — thanks to higher chamber pressure and an improved propellant mass fraction. The mission will follow a suborbital arc with both the Super Heavy booster and Starship upper stage targeting splashdown rather than a tower catch, a deliberate step back in operational ambition to validate the new architecture before resuming the booster-catch milestones achieved in Flight 11. Daily two-hour windows remain available through May 18 should earlier attempts scrub.",
        sourceUrl: "https://www.nasaspaceflight.com/2026/05/spacex-mid-may-starship-flight-12-revised-trajectory/",
        timestamp: "2026-05-02T14:00:00Z"
      },
      {
        agency: "NASA",
        category: "Mission",
        headline: "NASA Accelerates SpaceX CRS-34 Dragon Cargo Mission to May 12 as Revised ISS 2026 Flight Plan Reflects Baikonur Disruptions and Post-Artemis II Reshuffling",
        body: "NASA and its international partners published a revised International Space Station 2026 flight plan this week, with the most consequential change being the acceleration of the SpaceX Commercial Resupply Services-34 Dragon cargo mission from its original June target to a May 12 launch from Space Launch Complex 40 at Cape Canaveral Space Force Station, Florida. The Dragon spacecraft will carry more than 6,400 pounds of science payloads and crew supplies, arriving at the station in under two days — a schedule change driven in part by disruptions at the Baikonur Cosmodrome that complicated Russian cargo logistics earlier in the year. The updated manifest also accounts for broader mission reoptimization following the Artemis II crew's successful return to Earth in April, as NASA redistributes resources toward ISS Expedition 74 and 75 crew training and the Artemis III core stage integration now underway in the Vehicle Assembly Building at Kennedy Space Center.",
        sourceUrl: "https://www.nasa.gov/blogs/commercialcrew/2026/05/01/nasa-partners-update-international-space-station-2026-flight-plan/",
        timestamp: "2026-05-01T16:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "Eta Aquariid Meteor Shower Nears May 5–6 Peak as Halley's Comet Debris Trail Promises 10–30 Shooting Stars per Hour in Northern Predawn Skies",
        body: "NASA's May 2026 skywatching guide highlights the approaching Eta Aquariid meteor shower, which reaches its predicted maximum at 03:51 UTC on May 5 as Earth passes through the debris trail left by Halley's Comet — generating fast, bright meteors that frequently leave glowing persistent trains across the sky. Northern Hemisphere observers can expect roughly 10 to 30 meteors per hour under dark conditions, though the afterglow from May 1's Full Moon will still brighten the sky and suppress fainter streaks for the next several nights. Southern Hemisphere skywatchers enjoy a notably richer display, with up to 50 meteors per hour possible from dark sites where the radiant rises higher in the predawn sky. NASA recommends lying flat on one's back and facing east-southeast in the final two hours before local sunrise, with no optical aid needed — the shower remains active from April 19 through late May.",
        sourceUrl: "https://science.nasa.gov/solar-system/whats-up-may-2026-skywatching-tips-from-nasa/",
        timestamp: "2026-05-02T08:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "Tianwen-2 Enters Active Sample-Site Survey at Asteroid Kamoʻoalewa While Shenzhou-23 Crew Rotation Preparations Advance at Jiuquan for Mid-2026 Launch",
        body: "China's Tianwen-2 spacecraft has entered its active close-proximity observation and sample-site characterization phase at near-Earth asteroid Kamoʻoalewa (2016 HO3), marking the first time CNSA has conducted sustained orbital operations around a small solar system body — a milestone that ground controllers at the Beijing Aerospace Control Center describe as validating China's deep-space autonomous navigation capabilities ahead of more ambitious sample-return and Mars missions in the 2030s. The roughly 50-meter-wide quasi-satellite, which orbits in near resonance with Earth, is being mapped in detail to select optimal touchdown zones before Tianwen-2 attempts sample collection and then departs for a flyby of main-belt comet 311P/PANSTARRS. Back on Earth, integration and testing for the crewed Shenzhou-23 mission continue at Jiuquan Satellite Launch Center, with a Long March 2F rocket targeting a mid-2026 launch to relieve the Shenzhou-22 crew and sustain the uninterrupted human presence China has maintained aboard the Tiangong space station since 2021.",
        sourceUrl: "https://english.news.cn/20260417/500a6f9165d746c88ab859385b2d347c/c.html",
        timestamp: "2026-05-02T07:00:00Z"
      }
    ]
  },

  "2026-05-01": {
    date: "May 1, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon 9 Lofts 29 Starlink Satellites from Cape Canaveral on May Day as Booster Notches Its 31st Flight and Nails Droneship Landing",
        body: "A SpaceX Falcon 9 rocket lifted off from Space Launch Complex 40 at Cape Canaveral Space Force Station, Florida, at 1:33 p.m. EDT on May 1, carrying 29 Starlink satellites to low Earth orbit in the company's 43rd Starlink mission of 2026. The first-stage booster, on its 31st flight — having previously launched CRS-24, Eutelsat HOTBIRD 13F, OneWeb 1, SES-18, SES-19, and 26 Starlink missions — executed a successful propulsive landing on the droneship A Shortfall of Gravitas stationed in the Atlantic Ocean. The deployment continues the relentless buildout of SpaceX's Starlink broadband megaconstellation, which now serves customers across more than 100 countries and remains the most-launched satellite network in history.",
        sourceUrl: "https://spacecoastdaily.com/2026/04/spacex-schedules-starlink-mission-rocket-launch-for-friday-may-1-from-cape-canaveral/",
        timestamp: "2026-05-01T17:33:00Z"
      },
      {
        agency: "NASA",
        category: "Mission",
        headline: "Artemis III SLS Core Stage Moves Inside Kennedy's Vehicle Assembly Building as Moon Rocket Stack Assembly Officially Begins for 2027 Launch",
        body: "Engineers at NASA's Kennedy Space Center rolled the Artemis III Space Launch System core stage into the Vehicle Assembly Building on April 28, just one day after the 212-foot-tall rocket section arrived by Pegasus barge from NASA's Michoud Assembly Facility in New Orleans following a 900-mile sea voyage. Technicians will lift the core stage vertically into High Bay 2, where it will be mated with the engine section and boat-tail integrated at Michoud in August 2025 — the first time full core stage assembly operations have taken place at Kennedy rather than at the manufacturing site. Artemis III, now redesigned to test rendezvous and docking with commercial landers in Earth orbit rather than a direct lunar surface landing, is targeting a 2027 launch as the program pivots toward Artemis IV for the first crewed lunar touchdown in 2028.",
        sourceUrl: "https://www.nasa.gov/blogs/missions/2026/04/28/nasas-artemis-iii-moon-rocket-hardware-arrives-artemis-ii-capsule-returns-to-kennedy/",
        timestamp: "2026-04-28T12:00:00Z"
      },
      {
        agency: "ESA",
        category: "Launch",
        headline: "ESA Confirms SMILE Solar-Wind Science Satellite Will Launch May 19 on Vega-C After Subsystem Technical Review Clears the Rocket for Flight",
        body: "The European Space Agency announced that the joint ESA–Chinese Academy of Sciences Solar Wind Magnetosphere Ionosphere Link Explorer (SMILE) satellite is confirmed for launch on May 19, 2026, at 04:52 BST on a Vega-C rocket from the Guiana Space Centre in Kourou, French Guiana. The date was reset after a precautionary stand-down to investigate a technical issue identified on the production line of a Vega-C subsystem component; following thorough inspection, all partners have cleared the vehicle. SMILE carries an X-ray camera — the first ever capable of imaging Earth's magnetosphere in X-rays — alongside an ultraviolet imager that will monitor the northern lights continuously for up to 45 hours, returning data from a highly elliptical orbit that reaches 121,000 km from Earth to reveal how the solar wind drives geomagnetic storms.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_set_to_launch_on_19_May",
        timestamp: "2026-05-01T08:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Launch",
        headline: "ISRO Targets May Return to Orbit with GSLV F17 Carrying EOS-05 After PSLV-C62 Failure Left Five-Payload Backlog at Start of 2026-27 Fiscal Year",
        body: "Indian Space Research Organisation Chairman V. Narayanan confirmed this week that ISRO is targeting a return to orbital launches in May 2026 following the PSLV-C62 upper-stage failure in January — the second consecutive failure for India's workhorse rocket — with the GSLV F17 mission carrying the EOS-05 Earth observation satellite slated to fly first. The agency enters the 2026-27 financial year with a backlog of five payloads queued behind EOS-05, including the PSLV-C63 mission with the TDS-01 technology demonstrator and a PSLV N1 flight, representing the most consequential near-term recovery schedule in years. The return to flight is critical for restoring India's launch cadence before the Gaganyaan-1 uncrewed orbital test — carrying the Vyommitra humanoid robot — targeted for the second half of 2026.",
        sourceUrl: "https://www.news9live.com/science/isro-to-return-to-rocket-launches-in-may-2026-2952275",
        timestamp: "2026-05-01T06:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China Advances Shenzhou-23 Crew Rotation and Tianwen-2 Asteroid Close Approach as CNSA Touts Its Most Intensive Space Mission Year on Record",
        body: "China's crewed Shenzhou-23 spacecraft is advancing toward its mid-2026 launch aboard a Long March 2F rocket from the Jiuquan Satellite Launch Center, targeting a standard crew rotation at the Tiangong space station that will relieve the Shenzhou-22 crew and sustain the uninterrupted human habitation China has maintained since 2021. Simultaneously, the Tianwen-2 spacecraft is conducting its first close approach and observation campaign at near-Earth asteroid Kamoʻoalewa (2016 HO3), executing the sample-collection phase of China's first asteroid mission before the probe embarks on a flyby of main-belt comet 311P/PANSTARRS in the 2030s. CNSA officials this week reaffirmed that 2026 constitutes China's most ambitious single-year space manifest, encompassing Shenzhou-23, the Tianwen-2 asteroid campaign, reusable rocket flight demonstrations, and groundwork for the Xuntian space telescope's December launch.",
        sourceUrl: "https://english.news.cn/20260417/500a6f9165d746c88ab859385b2d347c/c.html",
        timestamp: "2026-05-01T07:00:00Z"
      }
    ]
  },

  "2026-04-30": {
    date: "April 30, 2026",
    stories: [
      {
        agency: "ESA",
        category: "Launch",
        headline: "Ariane 64 Deploys 32 Amazon Project Kuiper Satellites on VA267, Marking Only the Second Flight of Europe's Heavy-Lift Rocket Variant",
        body: "Europe's Ariane 6 rocket in its Ariane 64 heavy-lift configuration lifted off from the Guiana Space Centre in Kourou, French Guiana, at 08:57 UTC on Thursday, April 30, deploying a stack of 32 Amazon Leo broadband satellites into low Earth orbit — only the second flight of the four-strap-on-booster Ariane 64 variant. The mission, designated VA267, is part of Amazon's Project Kuiper constellation buildout, which aims to orbit 3,200 satellites across more than 80 total launches using Ariane 6, Falcon 9, and United Launch Alliance vehicles, with ArianeGroup contracted for 18 of those flights. The successful deployment further cements Ariane 6's operational rhythm and bolsters European independent access to space as Amazon races to challenge SpaceX's Starlink for global broadband market share.",
        sourceUrl: "https://www.space.com/space-exploration/launches-spacecraft/europe-ariane-6-rocket-launch-32-amazon-leo-satellites-va267",
        timestamp: "2026-04-30T08:57:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon 9 Delivers 24 Starlink Group 17-36 Satellites from Vandenberg in SpaceX's 42nd Starlink Mission of 2026 as Booster B1093 Nails Its 13th Landing",
        body: "A SpaceX Falcon 9 rocket lifted off from Space Launch Complex 4 East at Vandenberg Space Force Base in California at 7:42 p.m. PDT on April 29 (02:42 UTC April 30), delivering 24 Starlink Group 17-36 satellites to low Earth orbit in the company's 42nd Starlink mission of 2026. Booster B1093, flying for the 13th time, executed a successful propulsive landing, extending SpaceX's remarkable streak of first-stage recoveries. The deployment adds to SpaceX's Starlink megaconstellation, which continues to serve millions of broadband customers in more than 100 countries worldwide and remains the most-launched satellite network in history.",
        sourceUrl: "https://spaceflightnow.com/2026/04/29/live-coverage-spacex-to-launch-24-starlink-satellites-on-falcon-9-rocket-from-vandenberg-sfb-6/",
        timestamp: "2026-04-30T02:42:49Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA APOD 'Waves on Titan' Showcases New Model Revealing That a Light Breeze on Saturn's Moon Would Raise Taller, Slower Swells Than on Earth",
        body: "NASA's Astronomy Picture of the Day for April 30 features a visualization titled 'Waves on Titan,' based on a new scientific model exploring how surface liquids behave under the exotic conditions of Saturn's largest moon. Researchers found that a light breeze on Titan would generate taller, slower-moving waves than an equivalent wind on Earth would produce, owing to Titan's methane- and ethane-filled hydrocarbon seas, its surface gravity roughly one-seventh of Earth's, and its denser atmospheric pressure. Titan is the only body in the solar system besides Earth known to host stable liquid lakes and seas on its surface, making wave-behavior modeling a key input for NASA's Dragonfly rotorcraft lander, which is targeting a landing in Titan's Shangri-La dune fields in the mid-2030s.",
        sourceUrl: "https://apod.nasa.gov/apod/ap260430.html",
        timestamp: "2026-04-30T04:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Development",
        headline: "Blue Moon Mark 2 Lunar Lander Passes Launch Separation and Communications Tests at Merritt Island, Setting Up Wet Dress Rehearsal as Moon Mission Approaches",
        body: "Blue Origin confirmed this week that its Blue Moon Mark 2 uncrewed lunar lander has passed a significant round of pre-launch environmental verification tests at its processing facility on Merritt Island, Florida, successfully validating both the launch vehicle separation system — which governs how the spacecraft detaches from its carrier rocket — and onboard communications systems under simulated launch conditions. A wet dress rehearsal has been identified as the next major milestone before the lander targets a potential uncrewed Moon landing attempt in 2026 to support NASA's Artemis program. The encouraging progress arrives as Blue Origin works to rebuild confidence following the April 19 New Glenn upper-stage mishap that stranded an AST SpaceMobile satellite in the wrong orbit and triggered a formal FAA investigation.",
        sourceUrl: "https://www.yahoo.com/news/articles/blue-origin-one-step-closer-131948662.html",
        timestamp: "2026-04-30T12:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Outreach",
        headline: "China's 11th Space Day Celebrations Continue in Chengdu Through May 5, Featuring First-Ever Joint Display of Chang'e-5 and Chang'e-6 Lunar Samples",
        body: "The 11th China Space Day celebrations, centered in Chengdu, Sichuan Province, are continuing through May 5 under the theme 'A Seven-Decade Celestial Path, A Shared Cosmos Faith,' featuring a landmark public exhibition of lunar samples collected from both the near and far sides of the Moon by the Chang'e-5 and Chang'e-6 missions — the first time specimens from both lunar hemispheres have been displayed together. Delegations from 26 countries, regions, and international organizations are attending alongside Chinese officials and academicians, with Brazil named as the guest of honor to underscore deepening bilateral cooperation in space. The event also served as the backdrop for CNSA to detail its ambitious 2026 mission roster, including the imminent crewed Shenzhou-23 launch, ongoing Tianwen-2 asteroid operations, and the planned debut flights of several domestic reusable rocket systems — all as China marks 70 years since it began building its space industry.",
        sourceUrl: "https://english.news.cn/20260424/04d959398a724e828d261fa41d9b93f4/c.html",
        timestamp: "2026-04-30T06:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Policy",
        headline: "ISRO and South Korea's KASA Sign Space Cooperation MOU at Korea–India Space Day, Advancing Bilateral Ties in Satellites, Launches, and Commercial Applications",
        body: "India's ISRO and South Korea's Korea AeroSpace Administration (KASA) formalized expanded bilateral cooperation this week by signing a memorandum of understanding covering satellite technology, launch systems, and space applications — an agreement highlighted at a 'Korea–India Space Day' event that convened startups, industry leaders, and research institutions from both nations. The partnership reflects India's growing ambition to position itself as a central node in Asia's emerging commercial space ecosystem, complementing existing cooperation agreements with NASA, ESA, JAXA, and CNES. The MOU arrives as ISRO prepares for one of its most consequential launch schedules in years, with the uncrewed Gaganyaan-1 mission and the commissioning of the SSLV Launch Complex both targeted for the second half of 2026.",
        sourceUrl: "https://en.channeliam.com/2026/04/26/india-south-korea-space-collaboration-isro-kasa/",
        timestamp: "2026-04-30T08:00:00Z"
      }
    ]
  },

  "2026-04-29": {
    date: "April 29, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon Heavy Returns to Flight After 18-Month Hiatus Carrying ViaSat-3 F3 Broadband Satellite to Geosynchronous Orbit",
        body: "SpaceX's Falcon Heavy rocket lifted off from Launch Complex 39A at Kennedy Space Center on Wednesday morning, April 29, marking the triple-core rocket's return to flight after an 18-month stand-down and its 12th mission overall. The rocket carried ViaSat-3 F3, a 6.6-tonne high-throughput communications satellite destined for geosynchronous orbit to serve customers across the Asia-Pacific region, with the upper stage targeting payload separation approximately five hours after liftoff. The mission followed a weather scrub on April 27 and a second scrub on April 28, before successfully launching within an 85-minute window opening at 10:13 a.m. EDT. ViaSat-3 F3 completes the three-satellite ViaSat-3 global broadband constellation, rounding out coverage over the Asia-Pacific to pair with F1 over the Americas and F2 over Europe, the Middle East, and Africa.",
        sourceUrl: "https://www.space.com/space-exploration/launches-spacecraft/spacex-falcon-heavy-rocket-viasat-3-f3-launch",
        timestamp: "2026-04-29T14:13:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "Sunspot Region AR4420 Fires Three M-Class Flares in Under Two Hours on April 29 as Fast Solar Wind Eyes Earth by May 1",
        body: "Sunspot region AR4420 erupted with three M-class solar flares in rapid succession on April 29, capping a day of intense solar activity that also included more than 20 C-class events, according to real-time monitoring via NASA's Solar Dynamics Observatory and NOAA's Space Weather Prediction Center. Two large coronal holes are simultaneously visible on the solar disk; the fast solar wind they are funneling into interplanetary space is forecast to arrive at Earth on approximately April 30 to May 1, potentially triggering minor to moderate geomagnetic storm conditions and aurora sightings at elevated mid-latitudes. The most powerful flare of the sequence reached M6 intensity, causing a brief high-frequency radio blackout over sunlit portions of Earth. Scientists are watching AR4420 closely as it rotates toward disk center, where future eruptions would be more directly geoeffective.",
        sourceUrl: "https://earthsky.org/sun/sun-news-activity-solar-flare-cme-aurora-updates/",
        timestamp: "2026-04-29T12:00:00Z"
      },
      {
        agency: "NASA",
        category: "Mission",
        headline: "NASA Holds Prelaunch News Conference for Astronaut Anil Menon Ahead of July 14 Soyuz MS-29 Mission to ISS with Cosmonauts Dubrov and Kikina",
        body: "NASA hosted a prelaunch news conference at 1:45 p.m. EDT on April 29 at Johnson Space Center in Houston, giving astronaut Anil Menon his public preview before his July 14 first spaceflight — the Soyuz MS-29 mission that will carry him and Roscosmos cosmonauts Pyotr Dubrov and Anna Kikina to the International Space Station for an approximately eight-month stay supporting Expeditions 74 and 75. Menon, a physician and former SpaceX flight surgeon who helped crew the inaugural commercial Dragon mission in 2020, was selected to NASA's 2021 astronaut class and will be the first Indian-American to fly to the station aboard a Soyuz spacecraft. His assignment underscores the U.S.–Russia crew-exchange agreement that keeps both nations' astronauts rotating to the ISS despite broader geopolitical strains, and comes weeks after the Artemis II crew's historic crewed lunar flyby reinforced American space dominance.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-astronaut-anil-menon-to-discuss-upcoming-launch-mission/",
        timestamp: "2026-04-29T17:45:00Z"
      },
      {
        agency: "CNSA",
        category: "Policy",
        headline: "China Releases First Commercial Space Standard System Covering 1,000-Plus Items to Unify Its Booming Private Launch and Satellite Industry",
        body: "The China National Space Administration and the State Administration for Market Regulation jointly released the Commercial Space Standards System (Version 1.0) on April 24, establishing a sweeping regulatory and technical framework spanning six branches — industry governance, research and development, manufacturing, launch and telemetry, space application services, and general facilities — with plans to ultimately codify more than 1,000 individual standard items. The document draws on China's seven decades of state-led space development to create market-oriented benchmarks that enable the rapidly growing commercial sector, which executed dozens of orbital launches in 2025, to develop and operate spacecraft and rockets on a level, interoperable playing field. Analysts view the system as a critical step toward replicating the cost-efficiency gains achieved by U.S. commercial players, as Chinese startups including LandSpace, Galactic Energy, and CAS Space accelerate their own reusability programs. Select provisions are deliberately aligned with international norms to facilitate global commercial partnerships.",
        sourceUrl: "https://www.cnsa.gov.cn/english/n6465652/n6465653/c10744882/content.html",
        timestamp: "2026-04-29T06:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Development",
        headline: "ISRO Plans to Open Future Gaganyaan Missions to Civilian STEM Researchers After Initial Military Test-Pilot Flights Validate Systems",
        body: "India's space agency announced plans to extend Gaganyaan crewed missions beyond the initial cadre of Indian Air Force test pilots to include civilian scientists and researchers with strong STEM backgrounds, signaling ambitions to evolve the program from a demonstration exercise into a sustained national orbital research capability. The roadmap mirrors precedents set by NASA's payload specialist program and JAXA's visiting researcher flights, where domain experts conduct hands-on experiments that require human presence rather than remote operation. Immediate priorities remain the uncrewed Gaganyaan-1 mission — carrying the Vyommitra humanoid robot to validate life-support and re-entry systems — targeted for the second half of 2026, followed by the first crewed flight in 2027. ISRO also completed Mission MITRA crew-psychology simulations in early April to help define astronaut selection criteria for future civilian candidate pools.",
        sourceUrl: "https://www.indiatvnews.com/science/isro-to-include-civilian-astronauts-in-future-gaganyaan-missions-stem-experts-likely-to-join-2026-04-27-1039065",
        timestamp: "2026-04-29T08:00:00Z"
      },
      {
        agency: "ESA",
        category: "Science",
        headline: "ESA/Hubble Publishes April Picture of the Month: 'Starry Spiral in a Familiar Neighbourhood' Capturing a Nearby Galaxy in Stunning Detail",
        body: "The ESA/Hubble team released its April 2026 Picture of the Month on April 29, titled 'Starry Spiral in a Familiar Neighbourhood,' presenting a richly detailed portrait of a nearby spiral galaxy rendered in visible and near-infrared light by Hubble's Wide Field Camera 3 and Advanced Camera for Surveys. The image resolves individual star-forming knots, dark dust lanes, and clusters of hot blue massive stars tracing the galaxy's arms — structural features that serve as benchmarks for models of disk galaxy evolution and star formation rate density. Hubble's precise astrometry of Cepheid variable stars in nearby spirals like this one remains central to the ongoing effort to reconcile the two main methods of measuring the Hubble constant, a tension that has persisted for over a decade and may hint at new physics beyond the standard cosmological model.",
        sourceUrl: "https://esahubble.org/",
        timestamp: "2026-04-29T09:00:00Z"
      }
    ]
  },

  "2026-04-28": {
    date: "April 28, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Falcon Heavy Scrubbed at T-23 Seconds by Gusty Winds; Return-to-Flight Attempt Rescheduled for Tuesday as ViaSat-3 F3 Waits on Pad 39A",
        body: "A last-second weather hold aborted the count of SpaceX's Falcon Heavy rocket at Launch Complex 39A at Kennedy Space Center on Monday, April 27, just 23 seconds before the close of an 85-minute launch window, as gusty upper-level winds pushed conditions outside the vehicle's flight constraints — leaving the triple-core rocket standing on the pad with the ViaSat-3 F3 geostationary communications satellite still secured to its upper stage. SpaceX identified a new opening on Tuesday, April 28, at approximately 10:17 a.m. EDT (14:17 UTC), with a backup window available Wednesday, April 29, at 10:13 a.m. EDT if conditions again prevent flight. The mission would mark Falcon Heavy's 12th flight overall and its first in 18 months, with both expended side boosters targeting coordinated propulsive landings at Cape Canaveral's Landing Zones 1 and 2 after delivering ViaSat-3 F3 — the third and final satellite in Viasat's global broadband constellation — toward geostationary transfer orbit.",
        sourceUrl: "https://spaceflightnow.com/2026/04/27/live-coverage-spacex-to-launch-final-viasat-3-satellite-on-falcon-heavy-rocket/",
        timestamp: "2026-04-28T04:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA APOD Showcases CG 30 — A Cometary Globule 1,300 Light-Years Away Where a Protostellar Jet Betrays a Star Being Born Inside a Sculpted Dark Cloud",
        body: "NASA's Astronomy Picture of the Day for April 28 features a striking image of CG 30, one of a grouping of light-year-sized cometary globules located roughly 1,300 light-years from Earth near the borders of the southern constellations Puppis and Vela — bright-rimmed, cloud-like structures whose swept-back shapes have been carved by energetic ultraviolet radiation from nearby hot stars and may have been further sculpted by the ancient shock wave of the Vela supernova remnant. Inside the dense, dark head of CG 30, a cold core of gas and dust is collapsing toward stellar ignition, revealing its presence through a small reddish glow at the globule's tip — the telltale signature of energetic jets from a protostar in the earliest stages of formation, analogous to Herbig-Haro objects seen across star-forming regions. The image illustrates the self-destructive nature of stellar birth: UV radiation and protostellar jets from both nearby and embedded young stars gradually erode the very clouds that birthed them, giving each cometary globule a finite lifespan as a cosmic nursery.",
        sourceUrl: "https://apod.nasa.gov/apod/ap260428.html",
        timestamp: "2026-04-28T04:00:00Z"
      },
      {
        agency: "NASA",
        category: "Policy",
        headline: "NASA Chief Isaacman Faces Senate Grilling Over Trump's Proposed 23% Budget Cut as Science Directorate Stares Down a 46% Reduction to $3.9 Billion",
        body: "NASA Administrator Jared Isaacman appeared before the Senate Appropriations Subcommittee on Commerce, Justice, Science, and Related Agencies on Tuesday, April 28, to defend the administration's fiscal year 2027 budget request of $18.8 billion — a roughly 23 percent reduction from the agency's FY2026 enacted level — with the deepest proposed cut falling on the Science Mission Directorate, which faces a 46 percent decrease to $3.9 billion that would affect planetary science, heliophysics, Earth observation, and astrophysics programs. Pressed by senators on which missions had effectively been canceled by omission from budget documents, Isaacman maintained 'we haven't canceled anything yet,' arguing that missions in formulation could survive on coverage from existing operational assets — a position that drew skepticism from both Republican and Democratic members of the subcommittee. Congressional opposition remains bipartisan and vocal, with House Science Committee Chairman Brian Babin noting that Congress had rejected similar proposed cuts in FY2026 and expressing confidence that 'they are going to be rejected again' — a sentiment echoed by Ranking Member Zoe Lofgren and a coalition of advocacy groups urging the restoration of the science budget.",
        sourceUrl: "https://www.appropriations.senate.gov/hearings/a-review-of-the-presidents-fiscal-year-2027-budget-request-for-the-national-aeronautics-and-space-administration",
        timestamp: "2026-04-28T14:00:00Z"
      },
      {
        agency: "NASA",
        category: "Mission",
        headline: "Artemis III SLS Core Stage Completes 900-Mile Barge Voyage to Kennedy Space Center, Marking a Critical Milestone Toward the First Crewed Moon Landing Since 1972",
        body: "NASA's Space Launch System core stage for the Artemis III mission arrived at Kennedy Space Center on April 27 after completing a 900-mile sea voyage aboard the Pegasus barge from NASA's Michoud Assembly Facility in New Orleans, where technicians installed all four RS-25 main engines — the towering 27-story tank structure will now be processed through structural fit checks, functional testing, and hazardous propellant operations before being stacked in the Vehicle Assembly Building with the twin solid rocket boosters and Orion spacecraft. The delivery accelerates the Artemis III processing schedule and arrives on the heels of NASA's initial post-flight assessment of Artemis II, released last week, which confirmed that SLS and Orion performed within design parameters during April's crewed lunar flyby and required no major design changes before the planned Moon landing attempt targeted for no earlier than 2027. Artemis III will return humans to the lunar surface for the first time since Apollo 17 in December 1972, with the mission profile calling for a SpaceX Human Landing System Starship to ferry two astronauts from a near-rectilinear halo orbit to the lunar south pole and back.",
        sourceUrl: "https://www.nasa.gov/blogs/missions/2026/04/27/nasas-artemis-core-stage-arrives-at-kennedy/",
        timestamp: "2026-04-28T12:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China's Shenzhou-23 Crew Enters Final Countdown at Jiuquan as Tiangong Prepares to Welcome Its 11th Crewed Expedition on Long March 2F",
        body: "China's Manned Space Agency is conducting final launch preparations for Shenzhou-23 at the Jiuquan Satellite Launch Center, with a three-person taikonaut crew completing medical quarantine and the Long March 2F/G rocket passing its final technical readiness reviews ahead of an imminent liftoff — the 11th crewed flight to the Tiangong space station and the second planned crewed mission of 2026. The Shenzhou-23 mission carries particular long-duration significance: one crew member is planned to remain aboard Tiangong for approximately a full year, leaving an empty return seat that will be used by a Pakistani short-stay astronaut candidate launching on Shenzhou-24 in October 2026 — which would make a Pakistani national both the first foreign visitor to Tiangong and the first Pakistani to reach Earth orbit. Once Shenzhou-23 docks at the Tianhe module's forward port, the current resident crew will hand over ongoing science experiments, maintenance records, and station operations before undocking for re-entry and a parachute landing in Inner Mongolia.",
        sourceUrl: "https://spacelaunchnow.me/launch/long-march-2fg-shenzhou-23/",
        timestamp: "2026-04-28T06:00:00Z"
      }
    ]
  },

  "2026-04-27": {
    date: "April 27, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon Heavy Roars Back to Life for First Time in 18 Months, Lifting ViaSat-3 F3 to Complete a Global Broadband Constellation",
        body: "SpaceX's Falcon Heavy rocket lifted off from Launch Complex 39A at NASA's Kennedy Space Center at 10:21 a.m. EDT on April 27, sending Viasat's ViaSat-3 F3 communications satellite toward geostationary transfer orbit — the triple-core vehicle's 12th flight ever and its first in 18 months, generating approximately 5.1 million pounds of thrust at liftoff. ViaSat-3 F3, weighing 6.6 tonnes at launch, is the third and final satellite in the ViaSat-3 mini-constellation; once its electric propulsion system drifts it to geostationary orbit over several months, Viasat expects to deliver more than 1 Tbps of broadband throughput over the Asia-Pacific region, completing a global high-capacity network spanning the Americas, Europe, the Middle East, and Africa. Both expendable side boosters executed coordinated propulsive landings at Landing Zones 1 and 2 at Cape Canaveral Space Force Station, while the center core was expended over the Atlantic as planned.",
        sourceUrl: "https://spaceflightnow.com/2026/04/27/live-coverage-spacex-to-launch-final-viasat-3-satellite-on-falcon-heavy-rocket/",
        timestamp: "2026-04-27T14:21:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA's APOD Captures Comet C/2025 R3 PanSTARRS Framed Behind a Ghostly Web of Satellite Trails in Striking Ten-Minute Exposure",
        body: "NASA's Astronomy Picture of the Day for April 27 features a dramatic long-exposure photograph by astrophotographer Uli Fehr showing Comet C/2025 R3 (PanSTARRS) — the current naked-eye visitor passing through the inner Solar System — partially veiled behind dozens of glowing satellite trails that crisscross the frame after more than ten minutes of continuous exposure. The image serves as a visual time capsule of the modern night sky: the comet, a natural visitor making its first passage through the inner Solar System in recorded history, competes for attention with the ever-growing constellation of low-Earth orbit broadband satellites whose streaks now routinely intersect long astrophotography exposures. The image has prompted renewed discussion within the astronomy community about the cumulative impact of satellite megaconstellations on wide-field sky surveys and amateur observation, with the International Astronomical Union expected to publish updated mitigation guidance later this year.",
        sourceUrl: "https://apod.nasa.gov/apod/ap260427.html",
        timestamp: "2026-04-27T04:00:00Z"
      },
      {
        agency: "Roscosmos",
        category: "Mission",
        headline: "Progress MS-34 Cargo Freighter Autonomously Docks at ISS Zvezda Port, Delivering New Orlan Spacesuit and 2.5 Tonnes of Supplies to Expedition 74",
        body: "The uncrewed Progress MS-34 resupply spacecraft autonomously docked to the aft port of the Zvezda service module on the International Space Station at approximately 8:00 p.m. EDT on April 27, completing a two-day rendezvous that began with its Soyuz-2.1a launch from the Baikonur Cosmodrome on April 25. The 7,280-kilogram freighter delivered more than 2,500 kilograms of cargo to the Expedition 74 crew — including food, water, propellant for station reboost manoeuvres, scientific hardware, and a new Orlan spacesuit to replace one approaching the end of its certified service life on the Russian segment. NASA provided live docking coverage on NASA+, Amazon Prime Video, and the agency's YouTube channel, with the operation completing nominally with no reported anomalies.",
        sourceUrl: "https://spacepolicyonline.com/events/progress-ms-34-docks-with-iss-apr-27-2026-earth-orbit-800-pm-et/",
        timestamp: "2026-04-27T00:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA Responds to Gateway Module Corrosion Claims, Confirms Thales Alenia Fix for HALO and I-HAB Due by End of Q3 2026",
        body: "The European Space Agency issued a clarifying statement on April 27 in response to remarks made by NASA's Administrator regarding corrosion found in the Gateway lunar-orbit station's HALO and I-HAB habitation modules — both built by Thales Alenia Space — confirming that a root-cause investigation has identified the issue as a combination of the forging process, surface treatment, and the chemical properties of the Aluminum-Lithium 2195 alloy used in the modules' pressure vessel walls. Thales Alenia Space stated its teams are working closely with prime contractor Northrop Grumman and NASA to remediate the affected hardware using NASA-approved processes, with a full fix expected by the end of the third quarter of 2026. The development adds further schedule pressure to the Gateway program, which underpins NASA's Artemis III and IV lunar surface missions, though neither ESA nor NASA characterised the corrosion as mission-threatening provided repairs are completed within the current timeline.",
        sourceUrl: "https://europeanspaceflight.com/esa-sheds-light-on-nasa-administrators-claims-on-gateway-modules/",
        timestamp: "2026-04-27T10:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Development",
        headline: "ISRO Approves Civilian Scientists for Second Gaganyaan Astronaut Batch as Agency Eyes Bharatiya Antariksh Station Crews Beyond 2030",
        body: "The Indian Space Research Organisation's Astronaut Selection and Management Committee has formally endorsed a mixed second batch of astronaut candidates comprising six military test pilots and four civilian specialists drawn from science, technology, engineering, and mathematics fields — a landmark shift from the agency's initial approach of selecting exclusively from the Indian Air Force for the Gaganyaan human spaceflight program. Civilian candidates will complete the same physical and psychological screening as their military counterparts before entering astronaut training at the Astronaut Training Facility in Bengaluru, though they are projected to fly no earlier than the fourth crewed Gaganyaan mission to allow early flights to validate life-support, re-entry, and mission-operations procedures with experienced military pilots. The expansion reflects ISRO's long-term ambition to staff the planned Bharatiya Antariksh Station — India's own orbital outpost targeted for the early 2030s — with a diverse pool of scientists and engineers capable of conducting sustained microgravity research.",
        sourceUrl: "https://odishabytes.com/second-batch-breakthrough-isro-recruits-civilians-amid-space-station-plans/",
        timestamp: "2026-04-27T08:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Policy",
        headline: "China Officially Publishes World's First National Commercial Space Standard System, Setting Technical and Safety Benchmarks Across the Entire Industry",
        body: "The China National Space Administration and the State Administration for Market Regulation formally published the Commercial Space Standard System Version 1.0 on April 27, marking the culmination of a year-long drafting effort that involved more than 80 enterprises and research institutes and resulted in a unified national framework covering launch vehicles, satellites, ground infrastructure, data services, and interoperability protocols for China's rapidly growing commercial space sector. The framework is designed to lower development costs, accelerate regulatory certification timelines, and raise the international competitiveness of Chinese space companies by replacing a fragmented patchwork of enterprise-level standards with coherent national benchmarks — a move that analysts say mirrors the role military standards played in scaling the United States commercial launch industry in the 1990s. Industry groups said the system would particularly benefit small launch vehicle start-ups such as LandSpace, Galactic Energy, and Space Pioneer, which have struggled to navigate inconsistent component qualification requirements across different government procurement bodies.",
        sourceUrl: "https://orbitaltoday.com/2026/04/27/china-issues-its-commercial-space-standard-system/",
        timestamp: "2026-04-27T06:00:00Z"
      }
    ]
  },

  "2026-04-26": {
    date: "April 26, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA's APOD Features Hubble's Dramatic View of 'Mystic Mountain' Pillars Being Carved Apart by an Embedded Star's Jets in the Carina Nebula",
        body: "NASA's Astronomy Picture of the Day for April 26 showcases a Hubble Space Telescope image of a towering column of gas and dust in the Carina Nebula — known informally as 'Mystic Mountain' — located approximately 7,500 light-years from Earth, in which a nascent star hidden within the opaque pillar is slowly destroying its own host by blasting opposing beams of energetic particles called Herbig-Haro jets. The image, processed by Hubble community contributor Judy Schmidt, illustrates how stellar birth is a violent process: the embedded protostar's jets punch through the pillar's walls and drag away the very material that fed its formation, offering a rare window into the self-destructive dynamics of star-forming regions. Mystic Mountain has been a recurring Hubble subject since the Wide Field Camera 3 was installed during Servicing Mission 4 in 2009, and successive generations of image processing continue to reveal fine jet structure and shock fronts invisible in earlier renditions of the iconic photograph.",
        sourceUrl: "https://apod.nasa.gov/apod/ap260426.html",
        timestamp: "2026-04-26T04:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Rolls Falcon Heavy to Pad 39A for Monday's ViaSat-3 F3 Mission That Will Complete a Global Broadband Constellation",
        body: "SpaceX rolled its Falcon Heavy rocket carrying Viasat's ViaSat-3 F3 communications satellite to Launch Complex 39A at Kennedy Space Center on April 26, with an 85-minute launch window opening at 10:21 a.m. EDT on Monday, April 27 — Viasat confirmed the mission remains on track following final launch readiness reviews. ViaSat-3 F3 is the third and final satellite in the ViaSat-3 constellation, designed to deliver more than 1 Tbps of throughput over the Asia-Pacific region and complete a global high-capacity broadband network spanning the Americas, Europe, the Middle East, and Africa. After upper-stage separation, the spacecraft will use electric propulsion to drift to geostationary orbit over several months with commercial service expected by late summer 2026; the two expended side boosters will attempt coordinated landings at Landing Zones 2 and 40 at Cape Canaveral Space Force Station.",
        sourceUrl: "https://www.globenewswire.com/news-release/2026/04/20/3277083/0/en/Viasat-Confirms-ViaSat-3-F3-Satellite-to-Launch-April-27-2026.html",
        timestamp: "2026-04-26T14:00:00Z"
      },
      {
        agency: "Roscosmos",
        category: "Mission",
        headline: "Progress MS-34 Cargo Freighter Completes Healthy On-Orbit Day En Route to ISS with 2.5 Tonnes of Supplies Including a New Orlan Spacesuit",
        body: "The Progress MS-34 uncrewed cargo spacecraft, designated Progress 95 by NASA, is on a nominal two-day rendezvous with the International Space Station following its April 25 launch on a Soyuz-2.1a rocket from the Baikonur Cosmodrome, with automated docking at the Zvezda module's aft port scheduled for approximately 8:00 p.m. EDT on April 27. The 7,280-kilogram freighter is carrying more than 2,500 kilograms of supplies for Expedition 74, including food, water, propellant for station re-boost manoeuvres, scientific hardware, and a new Orlan spacesuit to replace a suit approaching the end of its certified service life on the Russian segment. NASA confirmed the launch was nominal and will provide live docking coverage beginning at 7:15 p.m. EDT on NASA+, Amazon Prime Video, and the agency's YouTube channel.",
        sourceUrl: "https://www.nasaspaceflight.com/2026/04/progress-ms34/",
        timestamp: "2026-04-26T12:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA Confirms SMILE Solar-Wind Mission Will Launch May 19 on Vega-C After Avio Completes Review of Component Production Issue",
        body: "The European Space Agency confirmed on April 26 that the Solar wind Magnetosphere Ionosphere Link Explorer (SMILE) — a joint mission with the Chinese Academy of Sciences designed to image Earth's magnetosphere in X-rays and monitor how the solar wind interacts with our planet's magnetic shield — is now targeting May 19, 2026, for launch on an Avio Vega-C rocket from Europe's Spaceport in Kourou, French Guiana. The mission was originally planned to lift off on April 9 but was postponed as a precautionary measure after a technical issue was identified on a Vega-C subsystem component production line post-integration; Avio engineers completed their root-cause review and verified the launcher's flightworthiness before confirming the new date. Once in its highly elliptical Earth orbit, SMILE will deliver the first systematic X-ray movies of the dayside magnetopause and polar cusps, imaging the regions where solar-wind plasma penetrates Earth's magnetic defenses and enabling sharper space-weather forecasts.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_set_to_launch_on_19_May",
        timestamp: "2026-04-26T10:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Launch",
        headline: "China Launches Pakistani Earth-Observation Satellite PRSC-EO3 on Long March-6 While Releasing Nation's First Commercial Space Standards System",
        body: "On April 26, China executed a significant double play in space affairs: a Long March-6 rocket lifted off from the Taiyuan Satellite Launch Centre at 8:15 p.m. Beijing Time, successfully placing the PRSC-EO3 Earth observation satellite for Pakistan into its planned orbit and further cementing the China-Pakistan space partnership that already includes the PRSS-1 and MM-1 satellites. In parallel, the China National Space Administration and the State Administration for Market Regulation jointly unveiled Commercial Space Standards System Version 1.0 — the world's first unified national framework governing technical, safety, and interoperability standards across launch vehicles, satellites, ground infrastructure, and data services for China's rapidly expanding commercial space sector. The standards system is designed to reduce development costs and accelerate certification timelines as Beijing moves to grow its private launch and satellite manufacturing industries to international scale.",
        sourceUrl: "https://news.cgtn.com/news/2026-04-26/China-unveils-commercial-space-standards-system-1MEn7pqgB4Q/p.html",
        timestamp: "2026-04-26T13:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "Comet C/2025 R3 PanSTARRS Reaches Its Closest Earth Approach, Passing 73 Million Kilometres Away While Tracked by Solar Observatories",
        body: "Comet C/2025 R3 (PanSTARRS) reached its closest point to Earth on April 26, passing within approximately 0.489 AU (73.2 million kilometres, or about 45.5 million miles) — less than half the Earth-Sun distance — having reached perihelion on April 19 at a scorching 0.5 AU from the Sun. Although the comet has brightened to naked-eye visibility under dark skies, its extremely low solar elongation of only 3.7 degrees makes direct visual observation challenging, prompting astronomers to track it primarily through satellite-based solar observatories such as ESA/NASA's SOHO LASCO coronagraph, which has captured striking imagery of the comet's active ion tail being swept back by the solar wind. The comet is expected to pull away from the Sun over the coming weeks, potentially improving viewing conditions for Southern Hemisphere observers through early May.",
        sourceUrl: "https://www.space.com/stargazing/comet-panstarrs-approaches-earth-on-april-26-heres-how-to-catch-it-in-satellite-imagery-this-weekend",
        timestamp: "2026-04-26T08:00:00Z"
      }
    ]
  },

  "2026-04-25": {
    date: "April 25, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Mission",
        headline: "NASA Releases Initial Artemis II Post-Mission Assessment Confirming Orion and SLS Performed as Designed, Clearing Path to Artemis III",
        body: "Two weeks after the Artemis II crew splashed down off the California coast on April 10, NASA released its initial post-mission assessment confirming that the Orion spacecraft, Space Launch System, and Kennedy Space Center ground infrastructure all performed within expected parameters during the ten-day crewed lunar flyby — the first human journey beyond low Earth orbit since Apollo 17 in 1972. Engineers at Johnson Space Center and Marshall Space Flight Center are now conducting detailed analysis of more than 4,000 sensors that monitored Orion's heat shield, life-support, propulsion, and communications systems through the lunar transit and the approximately 5,000°F re-entry, with results feeding directly into Artemis III hardware certification decisions. NASA confirmed no major design changes are required ahead of Artemis III, which will target the first crewed Moon landing since 1972, currently slated for no earlier than 2027.",
        sourceUrl: "https://www.nasa.gov/missions/nasa-on-track-for-future-missions-with-initial-artemis-ii-assessments/",
        timestamp: "2026-04-25T14:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Deploys 24 Starlink Satellites from Vandenberg in Another Milestone Falcon 9 Flight Maintaining Record 2026 Cadence",
        body: "A SpaceX Falcon 9 lifted off from Space Launch Complex 4 East at Vandenberg Space Force Base on Saturday, deploying 24 Starlink V2 Mini Optimized satellites to low Earth orbit and sustaining the company's relentless broadband constellation expansion toward more than 10,250 active satellites serving subscribers on every continent. The first-stage booster executed a routine propulsive landing aboard drone ship 'Of Course I Still Love You' approximately eight minutes after liftoff, continuing SpaceX's streak of successful recoveries that now numbers more than 600 across all missions. The launch is part of an aggressive 2026 cadence that has seen Falcon 9 averaging more than one flight every three days, cementing SpaceX's position as the world's highest-volume launch provider by a wide margin.",
        sourceUrl: "https://en.wikipedia.org/wiki/List_of_spaceflight_launches_in_April%E2%80%93June_2026",
        timestamp: "2026-04-25T06:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Diplomacy",
        headline: "China Names Pakistan's Muhammad Zeeshan Ali and Khurram Daud as First Foreign Astronaut Candidates to Train for Tiangong Space Station Missions",
        body: "China's human spaceflight program took a landmark step toward international openness on April 25 as the China Manned Space Agency formally announced the selection of two Pakistani Air Force pilots — Muhammad Zeeshan Ali and Khurram Daud — as the first foreign nationals to undertake astronaut candidate training for missions to the Tiangong space station, completing a rigorous multi-stage selection that included preliminary screening in Pakistan and advanced evaluations at the Astronaut Centre of China in Beijing. One of the two candidates will ultimately fly as a payload specialist on a Tiangong mission, becoming both the first foreign national to visit China's orbital station and the first Pakistani to reach Earth orbit. The announcement deepens the China-Pakistan space partnership and reflects Beijing's strategy to develop Tiangong as a globally accessible platform as the International Space Station approaches the end of its operational life.",
        sourceUrl: "https://orbitaltoday.com/2026/04/25/two-pakistani-astronauts-selected-to-train-for-chinas-space-station-missions/",
        timestamp: "2026-04-25T08:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "Chang'e-7 Lunar South Pole Mission Confirmed for August 2026 Launch as Spacecraft Completes Delivery to Wenchang Space Launch Site",
        body: "China's Chang'e-7 lunar mission is on track for an August 2026 liftoff after the fully integrated spacecraft — comprising an orbiter, lander, rover, and a novel mini-hopping probe specifically engineered to descend into the permanent shadow of south-polar craters — arrived at the Wenchang Space Launch Site in Hainan province for mating with its Long March 5 rocket. The mission will target the illuminated rim of Shackleton crater near the lunar south pole to confirm the presence and accessible depth of water ice deposits that could sustain future human outposts, and will also validate the precision landing and surface-hopping technologies required for China's International Lunar Research Station. Chang'e-7 serves as a direct precursor to Chang'e-8 in 2028, and together the pair will establish the operational groundwork for China's crewed Moon landing, targeted for no earlier than 2030.",
        sourceUrl: "https://spacenews.com/chinas-change-7-arrives-at-spaceport-for-lunar-south-pole-exploration-mission/",
        timestamp: "2026-04-25T10:00:00Z"
      },
      {
        agency: "Roscosmos",
        category: "Launch",
        headline: "Russia's Progress MS-34 Cargo Freighter Lifts Off from Baikonur on Soyuz-2.1a, Carrying 2.5 Tonnes of Supplies to ISS Crew",
        body: "A Soyuz-2.1a rocket lifted off from the Baikonur Cosmodrome in Kazakhstan at 22:21 UTC on April 25, propelling the uncrewed Progress MS-34 resupply freighter toward the International Space Station with approximately 2.5 tonnes of propellant, water, food, spare parts, and scientific hardware. Designated Progress 95 by NASA — the 95th Progress vehicle to visit the ISS since the station's assembly began — the spacecraft is set to dock autonomously at the Poisk module on April 27 at approximately 00:21 UTC following a two-day rendezvous profile, with NASA providing live coverage of docking on NASA+ and the agency's YouTube channel. The resupply mission sustains the current ISS expedition crew as planning continues for the station's eventual deorbit in 2030 and the transition to commercial low-Earth orbit platforms.",
        sourceUrl: "https://nextspaceflight.com/launches/details/8091/",
        timestamp: "2026-04-25T22:21:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Development",
        headline: "Blue Origin Advances Root-Cause Fix for New Glenn NG-3 Upper Stage Failure as FAA Mishap Investigation Completes First Week of Review",
        body: "Blue Origin confirmed this week that its engineering teams have identified the root cause of the upper stage engine underperformance that caused the April 19 NG-3 mission to deliver AST SpaceMobile's BlueBird 7 satellite into an orbit too low to sustain operations — the satellite has since been deorbited — and that corrective action is being implemented ahead of a return-to-flight application to the Federal Aviation Administration. CEO Dave Limp reiterated that the same NG-3 mission successfully performed New Glenn's first-ever booster reuse, with the first stage returning to the Atlantic drone ship intact, underscoring the company's view that recovery hardware performed as designed while the upper stage work remains the sole focus of the investigation. AST SpaceMobile said the lost satellite is covered by launch insurance and that replacement BlueBird units are progressing through production, with the company maintaining its target of deploying 45 additional broadband satellites before the end of 2026.",
        sourceUrl: "https://techcrunch.com/2026/04/20/faa-orders-investigation-into-blue-origins-new-glenn-mishap/",
        timestamp: "2026-04-25T16:00:00Z"
      }
    ]
  },

  "2026-04-24": {
    date: "April 24, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Science",
        headline: "Hubble Marks 36 Years in Orbit with Stunning Trifid Nebula Portrait Revealing Changes Since Its 1997 First Image",
        body: "NASA's Hubble Space Telescope celebrated its 36th anniversary of launch on April 24 — the date it was carried to orbit aboard Space Shuttle Discovery in 1990 — by releasing an exquisite new close-up portrait of the Trifid Nebula (Messier 20), a glowing star-forming cloud roughly 5,000 light-years from Earth, first observed by Hubble in 1997. The new image, captured with the more sensitive Wide Field Camera 3 installed during Servicing Mission 4, shows a rusty-brown pillar of gas and dust that astronomers liken to a marine sea slug drifting through the cosmos — its sinuous shape sculpted over 300,000 years by ultraviolet winds from massive stars just outside the frame. By placing the two observations nearly three decades apart side by side, scientists can for the first time detect real structural evolution within a nebula on human timescales, a capability unique to a long-lived space observatory. ESA/Hubble and the Space Telescope Science Institute published the anniversary image jointly, and it appeared as Space.com's Photo of the Day on April 23.",
        sourceUrl: "https://science.nasa.gov/missions/hubble/nasas-hubble-dazzles-with-young-stars-in-trifid-nebula/",
        timestamp: "2026-04-24T13:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China Reveals Five International Partners for Tianwen-3 Mars Sample-Return Mission at Space Day Ceremony in Chengdu",
        body: "At the opening ceremony of the 11th Space Day of China held in Chengdu on April 24 — the 56th anniversary of the 1970 launch of Dongfanghong-1, China's first satellite — the China National Space Administration announced the selected international partners for Tianwen-3, its planned first Mars sample-return mission, choosing five projects from 28 applications received after a global call for cooperation in April 2025. The selected collaborators will contribute a Mars Molecular Ion Composition Analyzer (Macau University of Science and Technology), a Laser Heterodyne Spectrometer measuring water-isotope profiles and wind fields in the Martian atmosphere (Chinese University of Hong Kong), a Mars Terrestrial Hyperspectral Imaging Spectrometer (University of Hong Kong), and a Laser Retroreflector Array led by Italy's National Laboratory of Frascati under the National Institute for Nuclear Physics. Tianwen-3 is planned to launch around 2028 using two Long March 5 rockets and to deliver Martian samples to Earth around 2031, which would make China the first nation to independently accomplish a Mars sample-return mission after more than two decades of planning.",
        sourceUrl: "https://english.news.cn/20260424/96fdcad629b64bf3abdd3c5d1e90edc9/c.html",
        timestamp: "2026-04-24T06:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Science",
        headline: "China Opens 15 kg of Payload Space on Xihe-2 Solar Observatory at Sun-Earth L5 Point to Global Scientific Partners",
        body: "Also on China's Space Day, CNSA announced an open international call for the Xihe-2 solar observation mission, offering approximately 15 kilograms of payload resources to research teams worldwide to jointly observe the Sun from the strategically unique Sun-Earth Lagrangian L5 point — a vantage roughly 150 million kilometres from Earth that allows advance warning of solar storms before they reach our planet. Xihe-2's scientific objectives include characterizing magnetic field structures in solar active regions, reconstructing the three-dimensional architecture of coronal mass ejections, and tracking how solar bursts propagate through interplanetary space to enable more accurate space weather forecasts. The mission extends China's solar science portfolio beyond the original Xihe (CHASE) satellite launched in 2021 to the L1 point, and will be the country's first spacecraft placed at the operationally critical L5 orbit — a position currently occupied by no other nation's dedicated solar monitor.",
        sourceUrl: "https://english.news.cn/20260424/a3105d5b4ab541469550339b58930194/c.html",
        timestamp: "2026-04-24T07:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Development",
        headline: "ISRO Expands NETRA Space Surveillance Network While Gaganyaan Crew Module Parachute System Cleared in IADT-02 Drop Test",
        body: "India's space agency published its Indian Space Situational Awareness Report for 2025 (ISSAR-2025) at the SMOPS-2026 international conference in Bengaluru, detailing the expanded reach of the Network for Space Objects Tracking and Analysis (NETRA) — a constellation of radar systems and optical telescopes that performed hundreds of collision avoidance manoeuvres in 2025 to protect India's operational satellite fleet from an increasingly congested orbital environment. ISRO Chairman V. Narayanan highlighted the agency's commitment to debris-free operations as a pillar of its long-term space sustainability strategy, with NETRA's data being shared with international partners through standard conjunction warning frameworks. Separately, the Gaganyaan programme successfully completed its second Integrated Air Drop Test (IADT-02) on April 10 at Satish Dhawan Space Centre, dropping a weighted boilerplate crew module from an IAF Chinook helicopter to validate the parachute deployment, descent control, and splashdown recovery systems required before the uncrewed Gaganyaan-1 orbital demonstration mission.",
        sourceUrl: "https://www.indiandefensenews.in/2026/04/isro-expands-space-surveillance-network.html",
        timestamp: "2026-04-24T09:00:00Z"
      },
      {
        agency: "ESA",
        category: "Policy",
        headline: "ESA and European Defence Agency Sign Pact to Audit Europe's Earth Observation Satellite Arsenal for Security Readiness",
        body: "The European Space Agency and the European Defence Agency signed a new Implementing Arrangement in Brussels on April 22, launching an 18-month joint study to comprehensively audit Europe's existing Earth observation satellite infrastructure and draft a long-term roadmap for bolstering the continent's security and defence readiness from space, with both agencies contributing equally to the study's funding. ESA Director General Josef Aschbacher framed the agreement as a shift from planning to active implementation of ESA's expanding defence-support mandate, situating it within the broader European Resilience from Space programme that seeks to harden space-based services against adversarial threats. The study will catalogue imagery capabilities, data processing pipelines, and ground segment assets relevant to monitoring crises, protecting critical infrastructure, and supporting NATO operations — with its findings expected to directly inform investment decisions for the Copernicus Earth observation fleet and the IRIS² secure government satellite communications constellation.",
        sourceUrl: "https://news.fundsforngos.org/2026/04/23/europe-boosts-earth-observation-capacity-with-esa-eda-joint-study-2026/",
        timestamp: "2026-04-24T10:00:00Z"
      }
    ]
  },

  "2026-04-23": {
    date: "April 23, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Diplomacy",
        headline: "Jordan Signs Artemis Accords as 63rd Nation at NASA Headquarters Ceremony Hosted by Administrator Isaacman",
        body: "The Hashemite Kingdom of Jordan formally joined the Artemis Accords on Thursday morning in a signing ceremony at the James E. Webb Memorial Auditorium in Washington, D.C., hosted by NASA Administrator Jared Isaacman alongside Ambassador Dina Kawar and U.S. State Department Principal Deputy Assistant Secretary Ruth Perry. Jordan becomes the 63rd signatory to the framework, which establishes norms for transparent, interoperable, and sustainable civil space exploration on the Moon, Mars, and beyond. The signing comes roughly two weeks after the Artemis II crew's historic crewed lunar flyby — the first since Apollo 17 in 1972 — underscoring the surge in international interest in U.S.-led deep-space exploration partnerships.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-invites-media-to-jordan-artemis-accords-signing-ceremony/",
        timestamp: "2026-04-23T13:30:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA's APOD Spotlights DESI's Record-Breaking 47-Million-Galaxy 3D Map That Hints Dark Energy May Be Weakening",
        body: "NASA's Astronomy Picture of the Day for April 23 features a sweeping visualization from the Dark Energy Spectroscopic Instrument, which completed its planned five-year survey on April 15 at Kitt Peak National Observatory in Arizona — cataloguing over 47 million galaxies and quasars, far surpassing its original 34-million target, and producing the largest high-resolution three-dimensional map of the universe ever assembled. Analysis of the survey's data has yielded tantalizing evidence that dark energy may be declining in strength over cosmic time, a finding that, if confirmed, would require a fundamental revision to the standard cosmological model. DESI will continue observations through 2028 to build on the map and pin down whether the apparent weakening is real, with collaborators calling it one of the most significant potential shifts in modern physics.",
        sourceUrl: "https://newscenter.lbl.gov/2026/04/15/desi-completes-planned-3d-map-of-the-universe-and-continues-exploring/",
        timestamp: "2026-04-23T04:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Confirms Successful 40th Starlink Mission of 2026 After Overnight Vandenberg Launch; Booster B1100 Nails 602nd Landing",
        body: "A SpaceX Falcon 9 lifted off from Space Launch Complex 4 East at Vandenberg Space Force Base at 8:23 p.m. PDT Wednesday (0323 UTC Thursday, April 23), deploying 24 Starlink satellites to low Earth orbit as the company's 40th dedicated Starlink mission of 2026. First-stage booster B1100, completing its fifth flight, executed a successful propulsive landing aboard drone ship 'Of Course I Still Love You' roughly eight minutes after liftoff — the 192nd recovery on that vessel and SpaceX's 602nd booster landing across all missions to date. The milestone cadence reflects SpaceX's push toward an unprecedented annual launch rate, with Falcon 9 averaging more than one mission every three days in 2026.",
        sourceUrl: "https://spaceflightnow.com/2026/04/23/live-coverage-spacex-to-launch-25-starlink-satellites-on-falcon-9-rocket-from-vandenberg-sfb-3/",
        timestamp: "2026-04-23T03:23:00Z"
      },
      {
        agency: "CNSA",
        category: "Event",
        headline: "China Space Conference Opens in Chengdu on Eve of 11th Space Day, Highlighting Tianwen-2 Asteroid Mission and Reusable Rockets",
        body: "The three-day China Space Conference commenced in Chengdu on April 23 — one day before China's 11th Space Day on April 24, commemorating the 56th anniversary of the 1970 launch of Dongfanghong-1 — with CNSA officials presenting progress on Tianwen-2's ongoing transit toward near-Earth asteroid Kamoʻoalewa, detailing plans for the Shenzhou-23 crew rotation at Tiangong, and outlining the debut flights of multiple domestically developed reusable launch vehicles expected later in 2026. The conference spans more than 20 academic sessions and includes a public space science and technology exhibition running April 24 to May 5. CNSA also highlighted a deepened international cooperation agenda, citing the joint ESA–China SMILE solar wind mission and the four-decade China-Brazil CBERS Earth-observation program as cornerstones of its 2026 partnerships.",
        sourceUrl: "https://english.news.cn/20260418/0105fa9c521d4b99ba70d78336e17fcb/c.html",
        timestamp: "2026-04-23T06:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Development",
        headline: "ISRO Closing In on Launch Date for Gaganyaan Uncrewed Mission Carrying Half-Humanoid Vyommitra to Orbit",
        body: "The Indian Space Research Organisation is finalizing plans to announce an official launch date for HLVM-3 G1/OM1, the first uncrewed mission of the Gaganyaan human spaceflight programme, which will carry Vyommitra — a half-humanoid robot designed to simulate astronaut conditions and validate the spacecraft's life-support, orbital, and re-entry systems — aboard a human-rated LVM3 rocket. Originally targeting the first quarter of 2026, the mission has slipped to the second half of the year following additional engineering reviews, with ISRO indicating an announcement is imminent. Successful completion of at least one uncrewed demonstration is a mandatory prerequisite before the crewed Gaganyaan mission, now targeted for 2027, which would make India only the fourth nation to independently launch humans to space.",
        sourceUrl: "https://www.indiandefensenews.in/2026/04/isro-nears-announcement-of-first.html",
        timestamp: "2026-04-23T07:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Infrastructure",
        headline: "Blue Origin and U.S. Space Force to Construct New Glenn Pad at Vandenberg, Opening Sun-Synchronous Polar Orbits to Heavy-Lift Rocket",
        body: "Blue Origin and the U.S. Space Force jointly announced on April 14 that a new New Glenn launch facility — Space Launch Complex 14 (SLC-14) — will be built at Vandenberg Space Force Base in California, giving the heavy-lift rocket access to polar and sun-synchronous orbits currently unreachable from its Cape Canaveral home at SLC-36. The West Coast pad will expand New Glenn's addressable mission set to include Earth-observation, weather, and national-security reconnaissance satellites that require high-inclination trajectories, placing Blue Origin in more direct competition with SpaceX's Vandenberg-based Falcon 9 and Falcon Heavy operations. The infrastructure investment comes as New Glenn remains grounded under an FAA mishap investigation following the NG-3 upper-stage engine anomaly on April 19, with Blue Origin working to complete root-cause analysis and corrective actions before the rocket can return to flight.",
        sourceUrl: "https://www.blueorigin.com/news/new-glenn-ng-3-mission",
        timestamp: "2026-04-23T14:00:00Z"
      }
    ]
  },

  "2026-04-22": {
    date: "April 22, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Policy",
        headline: "NASA Administrator Isaacman Defends 47% Science Budget Cut Before House Committee as Agency Faces $5.6 Billion Reduction",
        body: "NASA Administrator Jared Isaacman testified before the full House Science, Space, and Technology Committee on Wednesday morning in a high-stakes hearing on the President's Fiscal Year 2027 budget request, which proposes cutting the agency's total budget by roughly 23% — from the current $24.4 billion appropriation down to $18.8 billion — including a 47% reduction to the Science Mission Directorate that would terminate more than 40 active missions across Earth science, astrophysics, heliophysics, and planetary science. Isaacman defended the proposal, arguing that NASA retains sufficient resources to pursue its top exploration priorities including Artemis III, Commercial Lunar Payload Services deliveries, and a renegotiated Mars Sample Return campaign. Lawmakers on both sides of the aisle pushed back sharply, with Senate Commerce appropriations subcommittee chair Jerry Moran calling the proposed science cuts \"a mistake\" and warning that Congress is unlikely to accept a budget that guts scientific research programs to subsidize crewed exploration alone.",
        sourceUrl: "https://science.house.gov/2026/4/full-committee-hearing-nasa-budget",
        timestamp: "2026-04-22T14:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA's Earth Day APOD Features Artemis II's Breathtaking iPhone 'Earthset' Video Captured from the Moon by Commander Wiseman",
        body: "To mark the 56th Earth Day on April 22, NASA chose an extraordinary image from Artemis II as its Astronomy Picture of the Day: Commander Reid Wiseman's iPhone footage of Earth gradually eclipsed by the lunar limb during the crew's historic flyby earlier this month — the first time humans had watched their entire home planet sink behind the Moon since the Apollo 17 crew in December 1972. The footage, recorded at 8x optical zoom on a commercial iPhone as part of NASA's ongoing evaluation of consumer-grade imaging hardware for deep-space missions, became one of the most widely shared pieces of space media in recent memory after Wiseman posted it while the crew was still at lunar distance. The APOD selection echoes the tradition set by Apollo 8's 1968 \"Earthrise\" photograph, which transformed humanity's environmental self-perception and helped catalyze the very first Earth Day two years later.",
        sourceUrl: "https://apod.nasa.gov/apod/ap260422.html",
        timestamp: "2026-04-22T04:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Eyes Starlink Mission from Vandenberg Tonight as Veteran Booster B1100 Targets Eighth Flight",
        body: "SpaceX opened a launch window at 7:00 p.m. PDT Wednesday from Space Launch Complex 4 East at Vandenberg Space Force Base, California, for a Falcon 9 carrying 25 Starlink V2 Mini Optimized satellites to low Earth orbit, continuing the company's relentless broadband constellation build-out toward more than 10,250 active satellites. First-stage booster B1100, targeting its eighth flight, was set to land on drone ship 'Of Course I Still Love You' downrange in the Pacific Ocean — a vessel that has now supported more than 191 successful booster landings. The mission is part of SpaceX's aggressive 2026 launch cadence that has averaged more than one Falcon 9 flight every three days, sustaining Starlink's growth toward the 12,000-satellite Phase 1 constellation authorized by the FCC.",
        sourceUrl: "https://spaceflightnow.com/launch-schedule/",
        timestamp: "2026-04-22T17:00:00Z"
      },
      {
        agency: "ESA",
        category: "Science",
        headline: "ESA's Long-Delayed Rosalind Franklin Mars Rover Cleared to Fly on Falcon Heavy in 2028 After Four Years in Limbo",
        body: "The European Space Agency's Rosalind Franklin rover — stranded since 2022 when Russia's invasion of Ukraine severed a planned joint launch with Roscosmos — cleared a pivotal milestone last week as NASA formally approved its Rosalind Franklin Support and Augmentation (ROSA) project on April 16 and announced the selection of SpaceX's Falcon Heavy rocket for a late-2028 launch from Launch Complex 39A at Kennedy Space Center. NASA's contributions to the mission include the Falcon Heavy launch vehicle, the lander's propulsion system, radioisotope heater units, and hardware for the Mars Organic Molecule Analyzer (MOMA) instrument, specifically designed to search for molecular biosignatures. Once on the surface, Rosalind Franklin will be the first Mars rover capable of drilling up to two metres below ground — deep enough to access material shielded from the sterilizing effects of cosmic radiation — representing humanity's best near-term prospect for detecting preserved evidence of ancient Martian life.",
        sourceUrl: "https://science.nasa.gov/blogs/mars-rosa/2026/04/16/nasa-begins-implementation-for-esas-rosalind-franklin-mission-to-mars/",
        timestamp: "2026-04-22T08:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China Space Conference Set to Open in Chengdu Wednesday on Eve of 11th Space Day, Spotlighting Tianwen-2 and 2026 Ambitions",
        body: "The China Space Conference is set to open its three-day program in Chengdu on April 23 — one day before the official 11th Space Day of China on April 24, which marks 56 years since Dongfanghong-1 became China's first satellite on April 24, 1970 — with CNSA officials poised to highlight the country's most ambitious launch manifest to date, including Tianwen-2's ongoing transit toward near-Earth asteroid 2016 HO3 (Kamoʻoalewa), the approaching Shenzhou-23 crewed Tiangong rotation, and inaugural flights of several domestically developed reusable launch vehicles. The conference features more than 20 academic sessions alongside a main forum, plus a public space science and technology exhibition running April 24 through May 5 in Chengdu showcasing advances across launch, Earth observation, deep-space exploration, and commercial aerospace. CNSA also emphasized plans to deepen international cooperation in 2026, including the joint SMILE solar-magnetosphere mission with ESA and the continued China-Brazil CBERS Earth observation partnership, now approaching its fourth decade.",
        sourceUrl: "https://news.cgtn.com/news/2026-04-18/China-to-carry-out-intensive-space-missions-in-2026-says-CNSA-1MqYnNpxN8A/p.html",
        timestamp: "2026-04-22T06:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Development",
        headline: "FAA Orders Formal Mishap Probe Keeping New Glenn Grounded as Blue Origin CEO Confirms Upper Stage Engine Caused NG-3 Orbit Miss",
        body: "Blue Origin's New Glenn rocket remains grounded under a formal FAA mishap investigation stemming from the April 19 NG-3 mission, on which an upper stage engine produced insufficient thrust to place AST SpaceMobile's BlueBird 7 satellite into its intended orbit — a root cause CEO Dave Limp disclosed publicly this week, as the satellite was subsequently deorbited after its onboard thrusters could not compensate for the altitude shortfall. The grounding will keep New Glenn off the manifest until Blue Origin completes a full root-cause analysis and demonstrates corrective action to FAA satisfaction, complicating the company's 2026 schedule at a moment when it had just celebrated the historic first booster reuse achieved on that same NG-3 flight. AST SpaceMobile said the lost satellite is covered by launch insurance and that the next BlueBird units in its production line will be ready within approximately one month, keeping the company's target of 45 additional satellites before end of 2026 nominally intact.",
        sourceUrl: "https://easternherald.com/2026/04/21/blue-origin-new-glenn-failure-faa-grounding/",
        timestamp: "2026-04-22T10:00:00Z"
      }
    ]
  },

  "2026-04-21": {
    date: "April 21, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA Unveils Fully Assembled Roman Space Telescope at Goddard, Targeting Fall 2026 Launch",
        body: "NASA hosted media at Goddard Space Flight Center in Greenbelt, Maryland on Tuesday for an up-close look at the fully integrated Nancy Grace Roman Space Telescope — one of the last opportunities to view the flagship observatory before it ships to Kennedy Space Center ahead of a launch targeted as early as fall 2026. The telescope completed construction following integration of its two major segments in November 2025 and has since been undergoing final prelaunch environmental testing. Roman will survey the cosmos in near-infrared light across a field of view 100 times wider than Hubble's, enabling transformative studies of dark energy, dark matter, exoplanet atmospheres, and the large-scale structure of the universe.",
        sourceUrl: "https://www.nasa.gov/missions/roman-space-telescope/nasa-completes-nancy-grace-roman-space-telescope-construction/",
        timestamp: "2026-04-21T20:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "SPHEREx All-Sky Survey Releases First Science Results, Mapping Interstellar Ice Across Milky Way Star-Forming Regions",
        body: "NASA's SPHEREx observatory — which maps the entire sky in 102 infrared wavelengths every six months — has released its first science highlights, including a striking April 15 observation revealing the chemical signatures of water ice and polycyclic aromatic hydrocarbons in Cygnus X, one of the most active star-forming regions in the Milky Way. Launched in March 2025 aboard a Falcon 9 from Vandenberg, SPHEREx is progressing toward completing the first of four planned all-sky surveys and has already catalogued data on more than 450 million galaxies and 100 million Milky Way stars. The mission's ice-mapping capability is central to understanding how life's chemical building blocks are distributed across the galaxy and potentially seeded onto forming planetary systems.",
        sourceUrl: "https://www.jpl.nasa.gov/news/nasas-spherex-space-telescope-begins-capturing-entire-sky/",
        timestamp: "2026-04-21T14:00:00Z"
      },
      {
        agency: "NASA",
        category: "Skywatching",
        headline: "Lyrid Meteor Shower Peaks Tonight with Up to 18 Meteors Per Hour, One of the Oldest Showers on Record",
        body: "The annual Lyrid meteor shower — with recorded observations stretching back 2,700 years — reaches its peak on the night of April 21 into the early morning of April 22, with rates of 10 to 18 meteors per hour expected under dark-sky conditions. NASA advises observers to look toward the eastern sky beginning around 10 p.m. local time, with the radiant point near the bright star Vega in the constellation Lyra rising higher and rates increasing toward pre-dawn on April 22. The Lyrids are produced by debris shed by Comet Thatcher (C/1861 G1), which last visited the inner solar system in 1861 and will not return for another 350-plus years.",
        sourceUrl: "https://science.nasa.gov/solar-system/whats-up-april-2026-skywatching-tips-from-nasa/",
        timestamp: "2026-04-21T22:00:00Z"
      },
      {
        agency: "ESA",
        category: "Launch",
        headline: "SMILE Solar Wind Mission Still Awaiting New Launch Date After Vega-C Technical Issue Forced April 9 Postponement",
        body: "The joint ESA–Chinese Academy of Sciences SMILE (Solar wind Magnetosphere Ionosphere Link Explorer) satellite remains grounded in French Guiana after a technical issue in a Vega-C launcher subsystem component — discovered on April 6, just three days before liftoff — prompted an indefinite stand-down from the VV29 mission slot. Investigations into the component production-line anomaly are ongoing, and ESA has not yet confirmed a new launch date within the original April 8–May 7 window. Once flown, SMILE will enter a highly elliptical orbit reaching 121,000 km apogee to provide month-long continuous views of Earth's magnetosphere, revolutionizing understanding of how the solar wind drives geomagnetic storms.",
        sourceUrl: "https://www.esa.int/Science_Exploration/Space_Science/Smile/Smile_prepares_for_launch_on_Vega-C_follow_along",
        timestamp: "2026-04-21T09:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Development",
        headline: "China's Long March 10B Methane-Fueled Reusable Rocket Poised for Debut Flight from Wenchang This Spring",
        body: "China Rocket is preparing to conduct the maiden flight of the Long March 10B — a two-stage, partially reusable launch vehicle powered by liquid methane and liquid oxygen — from the Wenchang Commercial Space Launch Site's Commercial Launch Pad 2 in the first half of 2026, adding a new reusable competitor to China's rapidly expanding launch market. The 5-meter-diameter first stage is designed for propulsive landing and reuse, mirroring the commercial reusability trend pioneered by SpaceX and now pursued by multiple Chinese state and private launch providers. The debut comes as China prepares for its 11th Space Day on April 24, commemorating 56 years since the launch of Dongfanghong-1, the nation's first satellite, in 1970.",
        sourceUrl: "https://spacenews.com/china-to-debut-reusable-long-march-10-derived-rocket-in-first-half-of-2026/",
        timestamp: "2026-04-21T06:00:00Z"
      }
    ]
  },

  "2026-04-20": {
    date: "April 20, 2026",
    stories: [
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA Powers Down Voyager 1's Final Particle Detector to Buy Interstellar Probe Another Year of Life",
        body: "Engineers at NASA's Jet Propulsion Laboratory sent commands on April 17 to deactivate Voyager 1's Low-energy Charged Particles (LECP) experiment — the last particle detector aboard the spacecraft — after an unexpected power drop following a routine roll maneuver on February 27 forced earlier-than-planned action. LECP had operated almost without interruption since Voyager 1's 1977 launch, measuring ions, electrons, and cosmic rays in interstellar space, but the plutonium power source now generates just enough electricity to sustain the two remaining instruments: a plasma wave sensor and a magnetometer. The savings are expected to grant Voyager 1 roughly one additional year of operations while engineers finalize a broader energy-management overhaul they call \"the Big Bang,\" designed to extend both Voyager probes' missions into the 2030s.",
        sourceUrl: "https://science.nasa.gov/blogs/voyager/2026/04/17/nasa-shuts-off-instrument-on-voyager-1-to-keep-spacecraft-operating/",
        timestamp: "2026-04-20T10:00:00Z"
      },
      {
        agency: "NASA",
        category: "International",
        headline: "Latvia Signs Artemis Accords at NASA Headquarters, Joining Growing Coalition for Peaceful Lunar Exploration",
        body: "Latvia formalized its commitment to the Artemis Accords during a ceremony at NASA Headquarters in Washington, D.C. on April 20, with NASA Administrator Jared Isaacman hosting Latvia's minister for education and science alongside other officials. The Accords, first established in 2020, outline principles for transparent, sustainable, and peaceful civil space exploration and serve as a key diplomatic pillar of NASA's Artemis program. Latvia's accession comes just ten days after the Artemis II crew splashed down following humanity's first crewed lunar flyby since Apollo 17, underscoring the program's growing global momentum.",
        sourceUrl: "https://www.nasa.gov/2026-news-releases/",
        timestamp: "2026-04-20T13:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "Falcon 9 Delivers GPS III SV-10 'Hedy Lamarr' Satellite to Orbit for U.S. Space Force in National Security Mission",
        body: "A SpaceX Falcon 9 lifted off from Space Launch Complex 40 at Cape Canaveral Space Force Station in the early hours of April 20, carrying GPS III Space Vehicle 10 — named 'Hedy Lamarr' in honor of the actress and inventor whose 1942 frequency-hopping patent helped lay conceptual groundwork for GPS, Wi-Fi, and Bluetooth technology — to medium Earth orbit for the U.S. Space Force. The mission marked a notable contract shift, with the Space Force having moved the award from ULA to SpaceX in March 2026, further consolidating SpaceX's dominance of U.S. government launch. Booster B1095, flying for the seventh time, successfully landed on the drone ship 'Just Read the Instructions' about 8.5 minutes after liftoff, and the upper stage deployed the satellite approximately 90 minutes later.",
        sourceUrl: "https://www.rocketlaunch.live/launch/gps-iii-sv-10",
        timestamp: "2026-04-20T06:57:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "New Glenn Achieves Historic First Booster Reuse on NG-3 but Upper Stage Anomaly Sends AST SpaceMobile Satellite to Wrong Orbit",
        body: "Blue Origin's New Glenn rocket launched from Space Launch Complex 36 at Cape Canaveral on April 19 and accomplished a major milestone: the successful recovery and reuse of first stage booster 'Never Tell Me The Odds,' which touched down on an Atlantic drone ship roughly 10 minutes after liftoff — the first time any New Glenn booster has flown twice. However, an upper stage anomaly resulted in the AST SpaceMobile BlueBird 7 satellite being deployed into a lower-than-planned orbit insufficient to sustain operations, and the spacecraft will be deorbited; AST SpaceMobile shares fell sharply on Monday as a result. The lost satellite is covered by insurance, and AST said successive BlueBirds will be ready within about a month as the company pushes to launch 45 more satellites by end of 2026. Blue Origin separately confirmed that its Blue Moon Mark 1 uncrewed lunar lander remains on track for launch before the end of summer 2026.",
        sourceUrl: "https://www.space.com/space-exploration/launches-spacecraft/blue-origin-reuses-new-glenn-rocket-landing-success-1st-time-on-april-19-2026-video",
        timestamp: "2026-04-20T09:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Development",
        headline: "ISRO Chairman Unveils G20 Climate Satellite for 2027 Launch and Reaffirms Human Moon Mission Target of 2040",
        body: "ISRO Chairman V. Narayanan announced on April 19 that a dedicated G20 satellite — designed to monitor climate change, air quality, and weather systems on behalf of all 20 member nations — is targeted for launch in 2027 and is expected to remain operational through 2032. Narayanan also reaffirmed ISRO's roadmap for deep-space human exploration, including a lunar sample-return mission under Chandrayaan-4 in October 2027, a joint Chandrayaan-5/LUPEX rover mission with JAXA in September 2028, and a crewed lunar landing by 2040. The announcements underscore India's accelerating ambitions across Earth observation and exploration as ISRO prepares for the Gaganyaan crewed orbital mission later this year.",
        sourceUrl: "https://www.deccanchronicle.com/science/isro-chief-narayanan-says-g20-satellite-launch-planned-for-2027-1951248",
        timestamp: "2026-04-20T07:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "China Space Conference Opens April 23 in Chengdu as CNSA Outlines Intensive 2026 Mission Slate Including Tianwen-2 Asteroid Flyby",
        body: "CNSA confirmed on April 18 that China will conduct a dense schedule of space missions in 2026, headlined by Tianwen-2's close approach and scientific observation of near-Earth asteroid 2016 HO3 (Kamoʻoalewa) — China's first asteroid exploration and sample-return mission — as it continues its transfer trajectory. Additional milestones this year include crewed Shenzhou-23 operations at the Tiangong station, flight verification tests of multiple new reusable launch vehicles, and the continued expansion of China's commercial space sector. The China Space Conference will feature a main forum alongside more than 20 academic sessions and a public exhibition in Chengdu from April 24 to May 5, marking the 56th anniversary of the April 24, 1970 launch of China's first satellite, Dongfanghong-1.",
        sourceUrl: "https://news.cgtn.com/news/2026-04-18/China-to-carry-out-intensive-space-missions-in-2026-says-CNSA-1MqYnNpxN8A/p.html",
        timestamp: "2026-04-20T05:00:00Z"
      }
    ]
  },

  "2026-04-19": {
    date: "April 19, 2026",
    stories: [
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "Blue Origin Makes History with First New Glenn Booster Reuse as NG-3 Delivers AST SpaceMobile's BlueBird 7 to Orbit",
        body: "Blue Origin's New Glenn rocket lifted off from Launch Complex 36 at Cape Canaveral at 7:25 a.m. EDT on Sunday, successfully delivering AST SpaceMobile's BlueBird 7 direct-to-cellphone satellite to low Earth orbit while simultaneously making history as first stage booster 'Never Tell Me The Odds' — the same core flown on NG-2 in November 2025 — became the first New Glenn booster ever to be reflown, touching down on a barge in the Atlantic Ocean at 7:35 a.m. The milestone validates Blue Origin's reusability architecture and marks a pivotal step in the company's drive to compete with SpaceX, which has built its launch business on routine booster recovery and reuse since 2015. NG-2's booster had previously carried NASA's twin Escapade Mars probes to orbit before its recovery, and its successful second flight demonstrates that New Glenn's BE-4 engines can survive the rigors of orbital ascent and re-entry for multiple missions.",
        sourceUrl: "https://techcrunch.com/2026/04/19/blue-origin-successfully-re-uses-a-new-glenn-rocket-for-the-first-time-ever/",
        timestamp: "2026-04-19T11:25:00Z"
      },
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Launches Starlink 17-22 from Vandenberg with Veteran Booster B1097 on Eighth Flight as West Coast Cadence Continues",
        body: "SpaceX deployed 25 Starlink V2 Mini Optimized satellites to low Earth orbit Sunday morning on the Starlink 17-22 mission, with Falcon 9 first stage B1097 — on its eighth flight — lifting off from Space Launch Complex 4 East at Vandenberg Space Force Base at 7:33 a.m. PDT before landing on drone ship 'Of Course I Still Love You' in the Pacific Ocean approximately eight minutes later, marking the 191st landing on that vessel. The mission continues SpaceX's aggressive Starlink build-out pace, with the constellation now exceeding 10,200 active satellites providing broadband coverage to maritime, aviation, and residential customers worldwide. With Blue Origin's NG-3 launching simultaneously from Cape Canaveral in Florida, Sunday marked one of the most active days for American commercial orbital launch operations so far in 2026.",
        sourceUrl: "https://spaceflightnow.com/2026/04/18/live-coverage-spacex-attempts-600th-falcon-booster-landing-amid-west-coast-starlink-mission/",
        timestamp: "2026-04-19T14:33:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "Rare Oort Cloud Comet C/2025 R3 PanSTARRS Reaches Perihelion on Its First Visit to the Inner Solar System in 170,000 Years",
        body: "Comet C/2025 R3 PanSTARRS — a hyperbolic Oort Cloud visitor not seen in the inner solar system for approximately 170,000 years — reached perihelion on April 19 at 0.499 AU (roughly 75 million km) from the Sun, the closest it will ever come to our star before heading back into the outer solar system on a trajectory that will not bring it back. Discovered by the Panoramic Survey Telescope and Rapid Response System survey in September 2025, the comet has been steadily brightening and is expected to reach peak naked-eye visibility of around magnitude 3.5 between April 20 and April 24, when observers at dark-sky sites can spot it in the pre-dawn eastern sky using binoculars or the naked eye. NASA's Jet Propulsion Laboratory is closely monitoring the comet's behavior as it experiences maximum solar heating for the first time in its existence; survival through perihelion is uncertain for long-period comets, though current observations indicate the nucleus remains intact.",
        sourceUrl: "https://in-the-sky.org/news.php?id=2026_19_CK25R030_100",
        timestamp: "2026-04-19T06:00:00Z"
      },
      {
        agency: "NASA",
        category: "Mission",
        headline: "Artemis II Crew Wraps Post-Flight Debriefs at Johnson Space Center as Mission Science Data Collection Moves Into Full Swing",
        body: "Nine days after splashing down in the Pacific Ocean on April 10, the four Artemis II astronauts — Commander Reid Wiseman, Pilot Victor Glover, Mission Specialist Christina Koch, and Canadian Space Agency astronaut Jeremy Hansen — are completing post-flight medical evaluations and formal mission debriefs at NASA's Johnson Space Center following their first public news conference on April 16, in which they described the historic nearly 10-day journey around the Moon. The crew confirmed they met all primary mission objectives: manually piloting the Orion capsule, exercising its life support systems, conducting a lunar flyby with unprecedented views of the Moon's far side, and setting a new record for the farthest distance humans have ever traveled from Earth. NASA's human research teams are now collecting detailed physiological data from the crew to refine spaceflight medicine protocols ahead of the Artemis III crewed lunar surface landing, which remains targeted for late 2026.",
        sourceUrl: "https://www.nasa.gov/news-release/nasa-to-host-artemis-ii-crew-postflight-news-conference/",
        timestamp: "2026-04-19T17:30:00Z"
      },
      {
        agency: "ISRO",
        category: "Milestone",
        headline: "ISRO Marks 51 Years Since India's First Satellite Aryabhata as Agency Advances Gaganyaan and Chandrayaan-4 Programs",
        body: "April 19, 2026 marks the 51st anniversary of the launch of Aryabhata, India's first satellite, placed into orbit by a Soviet Kosmos-3M rocket from the Kapustin Yar launch site on April 19, 1975, beginning the nation's journey as a spacefaring power. ISRO is observing the milestone while pressing ahead with its next major milestones: an uncrewed Gaganyaan test flight that has seen scheduling slips following the PSLV-C62 anomaly earlier in 2026, and the Chandrayaan-4 lunar sample-return mission targeting a 2027 launch to the south pole landing site. In five decades, India has progressed from Aryabhata's 360-kilogram experimental payload to operating the Aditya-L1 solar observatory at the Sun-Earth L1 point, successfully soft-landing Chandrayaan-3 near the lunar south pole, and planning a full crewed space station — the Bharatiya Antariksh Station — for the 2030s.",
        sourceUrl: "https://www.isro.gov.in/",
        timestamp: "2026-04-19T08:00:00Z"
      }
    ]
  },

  "2026-04-18": {
    date: "April 18, 2026",
    stories: [
      {
        agency: "SpaceX",
        category: "Launch",
        headline: "SpaceX Achieves Historic 600th Falcon Booster Recovery as Record-Setting B1071 Completes 33rd Flight on West Coast Starlink Mission",
        body: "A SpaceX Falcon 9 rocket lifted off from Vandenberg Space Force Base carrying 25 Starlink V2 Mini Optimized satellites on the Starlink 17-22 mission, with first stage booster B1071 — the most-flown Falcon 9 booster in history — flying for a record 33rd time before landing aboard drone ship 'Of Course I Still Love You' in the Pacific Ocean to claim SpaceX's 600th Falcon booster recovery overall. The milestone, achieved less than eleven years after the first-ever Falcon 9 landing in December 2015, reflects the profound economic transformation reusability has brought to the launch industry, with SpaceX now routinely recovering and reflying boosters at a pace unimaginable a decade ago. The 25 new satellites join a Starlink constellation that now exceeds 10,200 spacecraft in low Earth orbit, continuing SpaceX's drive toward complete global coverage for maritime, aviation, and residential customers.",
        sourceUrl: "https://spaceflightnow.com/2026/04/18/live-coverage-spacex-attempts-600th-falcon-booster-landing-amid-west-coast-starlink-mission/",
        timestamp: "2026-04-18T14:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "CNSA Publishes 2026 Mission Manifest: Tianwen-2 Asteroid Approach, Shenzhou-23 Crew Rotation, and Reusable Rocket Debut Flights Confirmed",
        body: "China's National Space Administration on April 18 outlined its intensive 2026 mission schedule, confirming that the Tianwen-2 probe — en route to near-Earth asteroid 2016 HO3 (Kamoʻoalewa) — will conduct its critical close-approach observation phase this year, validating China's first asteroid sample-return architecture before the spacecraft continues on to comet 311P in the 2030s. The agency confirmed Shenzhou-23 will rotate the Tiangong space station crew later in 2026 and that flight verification tests of multiple new commercial reusable rockets are scheduled, reflecting China's rapidly maturing launch industry that conducted a record 92 missions in 2025. The China-Europe SMILE satellite, a joint CNSA-ESA mission to study solar wind interactions with Earth's magnetosphere, also remains on the 2026 launch manifest.",
        sourceUrl: "http://en.people.cn/n3/2026/0418/c90000-20447930.html",
        timestamp: "2026-04-18T06:00:00Z"
      },
      {
        agency: "Blue Origin",
        category: "Infrastructure",
        headline: "U.S. Space Force Selects Blue Origin for Vandenberg SLC-14 Lease as New Glenn Gains West Coast Polar-Orbit Launch Capability",
        body: "The U.S. Space Force announced the selection of Blue Origin to enter final lease negotiations for Space Launch Complex 14 at Vandenberg Space Force Base, formalizing the company's path to a West Coast New Glenn launch facility that will provide direct access to polar and sun-synchronous orbits critical for national security satellite missions. The currently undeveloped SLC-14 site will require safety assessments, environmental impact analysis, and substantial infrastructure construction before New Glenn can fly from California — a process estimated to take approximately two years — but the agreement is a major strategic expansion beyond Blue Origin's existing Cape Canaveral operations. Separately, New Glenn's NG-3 mission with AST SpaceMobile's BlueBird 7 satellite remains on track for a Sunday April 19 launch after a solar-storm-induced stand-down on April 17.",
        sourceUrl: "https://spaceflightnow.com/2026/04/15/blue-origin-one-step-closer-to-launching-new-glenn-from-vandenberg-space-force-base/",
        timestamp: "2026-04-18T16:00:00Z"
      },
      {
        agency: "ISRO",
        category: "Development",
        headline: "ISRO Commits to October 2027 Chandrayaan-4 Sample Return, March 2028 Venus Orbiter, and December 2028 Space Station Module in Parliamentary Roadmap",
        body: "ISRO's Parliamentary Standing Committee report has confirmed firm timelines for India's next major space endeavors: Chandrayaan-4, a lunar sample-return mission targeting Shiv Shakti Point near the south pole, is set for October 2027; the Shukrayaan-1 Venus orbiter, designed to map the planet's surface at high resolution and study its dense atmosphere, follows in March 2028. The first module of India's Bharatiya Antariksh Station (BAS-1) is planned for launch to low Earth orbit in December 2028, with the full station targeted for completion by 2035. The report also acknowledged continuing delays to the Gaganyaan human spaceflight program — the first uncrewed test, originally slated for early 2026, was postponed following the PSLV-C62 failure — with ISRO citing the exceptional care required for human-rated hardware certification.",
        sourceUrl: "https://www.indiandefensenews.in/2026/04/isro-sets-ambitious-timelines-for-lunar.html",
        timestamp: "2026-04-18T08:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA JPL Monitors Two Asteroid Flybys April 18, Including 280-Foot Space Rock 2026 GM1 Passing at Safe Distance",
        body: "NASA's Jet Propulsion Laboratory tracked two separate asteroid close-approach events on April 18, with the primary object being asteroid 2026 GM1 — approximately 280 feet (85 meters) across, roughly the size of a 25-story building — passing Earth at a safe distance with JPL's Center for Near Earth Object Studies confirming zero impact probability throughout its trajectory. A second asteroid, 2026 FJ6, also made a close approach on the same day, illustrating the frequency with which near-Earth objects transit the inner solar system. The dual flyby highlights the ongoing value of NASA's planetary defense survey programs, which have now catalogued more than 35,000 near-Earth asteroids and continue to monitor all objects passing within 4.65 million miles of Earth.",
        sourceUrl: "https://www.jpl.nasa.gov/asteroid-watch/next-five-approaches/",
        timestamp: "2026-04-18T12:00:00Z"
      }
    ]
  },

  "2026-04-17": {
    date: "April 17, 2026",
    stories: [
      {
        agency: "Blue Origin",
        category: "Launch",
        headline: "New Glenn NG-3 Slips 48 Hours to April 19 as Solar Storm Activity Triggers Precautionary Launch Window Review",
        body: "Blue Origin has shifted the New Glenn NG-3 launch window to no earlier than Sunday, April 19, with a two-hour window opening at 6:45 a.m. EDT, after elevated solar storm activity prompted a precautionary review that caused the team to stand down from the April 17 window at Space Launch Complex 36 at Cape Canaveral — a setback that nonetheless leaves the mission firmly on track for the weekend. The slip comes one day after the successful April 16 hot fire of the NG-3 booster 'Never Tell Me The Odds,' the first previously-flown New Glenn first stage ever to be tested and reflown, which performed nominally across all seven BE-4 engines during the static fire — the final major pre-launch milestone. The Blue Origin team closely monitors space weather conditions before every launch due to potential effects on satellite electronics, and the G1-level geomagnetic storm watch issued for April 17 by NOAA's Space Weather Prediction Center — driven by a fast solar wind stream from a coronal hole — was sufficient to prompt the additional review period before clearing the rocket and its AST SpaceMobile BlueBird 7 payload for flight. A successful April 19 launch and second recovery of 'Never Tell Me The Odds' would validate New Glenn's full reuse business model and mark the first time any New Glenn booster has flown twice.",
        sourceUrl: "https://www.techi.com/blue-origin-new-glenn-launch-delay-solar-storms/",
        timestamp: "2026-04-17T10:00:00Z"
      },
      {
        agency: "SpaceX",
        category: "Development",
        headline: "Starship V3 IFT-12 Clears April Milestone Checklist Items at Starbase as May Launch Window Firms Up",
        body: "SpaceX engineers confirmed on April 17 that both Super Heavy Booster 19 and Starship Ship 39 — the vehicles assigned to Starship's inaugural V3 configuration test flight — are actively progressing through pre-flight checklist items at Starbase in Boca Chica, Texas, with completion of key verification tasks continuing to clear the path toward a May 2026 launch target. Booster 19, powered by 33 next-generation Raptor 3 engines delivering approximately 280 tonnes of thrust each with dramatically simplified external plumbing compared to Raptor 2, successfully completed a partial-engine static fire in March and has been working through remaining certification tasks; Ship 39's upper stage engine bay has completed its own standalone test series at Massey's Test Site. The flight remains contingent on the FAA closing its mishap investigation into a Rapid Unscheduled Disassembly incident observed at Starbase on April 6, as well as regulatory approval of the Flight 12 license amendment. IFT-12 will be the most significant Starship test yet, flying the fully redesigned V3 architecture with taller vehicle dimensions, increased propellant capacity, and upgraded heat shield tiles — a critical stepping stone toward SpaceX's Artemis III Human Landing System obligations and eventual Mars mission architecture.",
        sourceUrl: "https://www.basenor.com/blogs/news/starship-testing-resumes-v3-and-ift-12-are-coming-fast",
        timestamp: "2026-04-17T12:00:00Z"
      },
      {
        agency: "NASA",
        category: "Science",
        headline: "NASA JPL Tracks Safe Flyby of Airplane-Sized Asteroid 2026 GA1 as Comet C/2025 R3 Approaches Prime Pre-Dawn Viewing Window",
        body: "NASA's Jet Propulsion Laboratory confirmed that asteroid 2026 GA1, a rocky body approximately 89 feet (27 meters) in diameter — roughly the size of a commercial aircraft — made its closest Earth approach today, April 17, passing at a safe distance of 826,000 miles, more than three times the lunar distance, with orbital models confirming zero impact risk at all points during the approach. The Asteroid Watch team at JPL's Center for Near Earth Object Studies tracked the object through the flyby, consistent with the agency's ongoing mandate to catalog and characterize near-Earth objects that pass within 4.65 million miles of Earth. Separately, NASA's April 2026 skywatching advisory highlights Comet C/2025 R3 (PanSTARRS) — discovered by the Pan-STARRS survey telescope in September 2025 and estimated to orbit the Sun once every 170,000 years — as entering its best pre-dawn viewing window this week ahead of perihelion on April 19; JPL scientists project the comet may reach naked-eye visibility at around magnitude 3.5 in an optimistic scenario, though comet brightness remains notoriously difficult to predict, and April 17 represents one of the final pre-perihelion mornings to observe it rising low in the eastern sky before sunrise.",
        sourceUrl: "https://www.jpl.nasa.gov/asteroid-watch/next-five-approaches/",
        timestamp: "2026-04-17T14:00:00Z"
      },
      {
        agency: "CNSA",
        category: "Mission",
        headline: "CNSA Announces Chang'e-7 and Chang'e-8 Open to Partners from 17 Nations as Agency Steps Up Global Collaboration Ahead of Space Day",
        body: "At a pre–Space Day press conference in Beijing on April 17, CNSA officials outlined an expanded international cooperation agenda for 2026 and beyond, confirming that China's upcoming Chang'e-7 lunar polar mission — expected to launch in the second half of 2026 — will carry six scientific payloads contributed by Egypt, Bahrain, Italy, Russia, Switzerland, and Thailand, making it the most internationally collaborative Chinese lunar mission to date. Officials also confirmed that the later Chang'e-8 mission, targeting approximately 2029, has received instrument contributions from 11 countries and regions spanning Asia, Europe, Africa, and South America, representing a major shift in China's deep-space science strategy toward multilateral partnerships. The International Lunar Research Station, China's proposed multinational lunar base program, now counts 17 member nations and more than 50 international research institutions, and Brazil was announced as guest of honor for China's National Space Day on April 24 — the 56th anniversary of the launch of China's first satellite, Dongfanghong-1 — with the two nations deepening collaboration on the planned CBERS-06 Earth observation satellite. The announcements underscore CNSA's strategy of building a parallel international coalition to NASA's Artemis program ahead of both nations' stated goals of landing humans on the Moon before 2030.",
        sourceUrl: "https://english.news.cn/20260417/ef12ae2fe0884354ba6143c60cf066bf/c.html",
        timestamp: "2026-04-17T06:00:00Z"
      },
      {
        agency: "ESA",
        category: "Mission",
        headline: "ESA Clears FLEX, Sentinel-3C, and MTG-I2 for Launch-Site Shipment After Cannes Inspection as SMILE Window Countdown Tightens",
        body: "Following yesterday's media clean room inspection at Thales Alenia Space facilities in Cannes, ESA confirmed on April 17 that the Fluorescence Explorer (FLEX), Sentinel-3C, and Meteosat Third Generation Imager-2 have each passed their pre-shipment readiness reviews and are cleared to proceed to their respective launch sites in the coming weeks. FLEX — the world's first satellite dedicated to globally mapping chlorophyll fluorescence from orbit, providing a direct proxy for photosynthesis rates, crop stress, and terrestrial carbon uptake at 300-meter resolution — drew particular attention during the inspection to its innovative FLORIS spectrometer, which can distinguish plant fluorescence from reflected sunlight, a technically demanding measurement no previous mission has attempted from orbit, and which scientists say will provide revolutionary data for climate models and global food-security monitoring. MTG-I2 will continue Europe's next-generation geostationary weather observing system, while Sentinel-3C extends the Copernicus ocean and land monitoring constellation that serves hundreds of millions of users worldwide; together the three missions represent the next wave of European Earth science capability. Separately, ESA engineers said on April 17 that anomaly-resolution work with the Italian component supplier for the Vega-C VV29 SMILE launch is proceeding with 'increased urgency' as the available window extending through May 7 narrows — raising the stakes for a prompt return to flight of the Vega-C rocket.",
        sourceUrl: "https://www.esa.int/About_Us/Corporate_news/ESA_s_highlights_for_2026",
        timestamp: "2026-04-17T08:00:00Z"
      }
    ]
  },

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
